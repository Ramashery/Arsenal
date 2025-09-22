// --- START OF FILE admin-script.js ---

// Минимальная структура данных, используемая как "чертёж" или "скелет",
// если в Firebase еще нет данных. Это гарантирует, что админ-панель
// не сломается при первом запуске и сможет отрендерить все поля.
const defaultSiteData = {
    global: {
        heroBackgroundImageUrl: "",
        socials: { instagram: "", telegram: "", email: "" },
        mapIframeSrc: "",
        eventDate: new Date().toISOString().split('T')[0],
        eventTime: "12:00",
        treeCategories: [],
        sliderItems: [],
        teamMembers: [],
        aboutItems: [],
        eventsItems: [],
        helpCards: [],
        materialsItems: []
    },
    ru: {
        nav: { about: "", trees: "", events: "", help: "", materials: "", team: "", contacts: "" },
        hero: { title: "", subtitle: "", date: "" },
        about: { title: "", items: {} },
        slider: {},
        events: { title: "", items: {} },
        help: { title: "", intro: "", cards: {} },
        map: { title: "", desc: "", goal: "Цель: {count} деревьев", transparency: "" },
        materials: { title: "", intro: "", items: {} },
        team: { title: "", members: {} },
        contacts: { title: "", heading: "", desc: "", locationName: "", locationAddress: "", mapLocation: "", form: { title: "", name: "", email: "", message: "", button: "" } },
        footer: { motto: "" },
        treeCategories: {},
        countdownLabels: { days: "Дней", hours: "Часов", minutes: "Минут", seconds: "Секунд" }
    },
    en: {
        nav: { about: "", trees: "", events: "", help: "", materials: "", team: "", contacts: "" },
        hero: { title: "", subtitle: "", date: "" },
        about: { title: "", items: {} },
        slider: {},
        events: { title: "", items: {} },
        help: { title: "", intro: "", cards: {} },
        map: { title: "", desc: "", goal: "Goal: {count} trees", transparency: "" },
        materials: { title: "", intro: "", items: {} },
        team: { title: "", members: {} },
        contacts: { title: "", heading: "", desc: "", locationName: "", locationAddress: "", mapLocation: "", form: { title: "", name: "", email: "", message: "", button: "" } },
        footer: { motto: "" },
        treeCategories: {},
        countdownLabels: { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" }
    },
    ge: {
        nav: { about: "", trees: "", events: "", help: "", materials: "", team: "", contacts: "" },
        hero: { title: "", subtitle: "", date: "" },
        about: { title: "", items: {} },
        slider: {},
        events: { title: "", items: {} },
        help: { title: "", intro: "", cards: {} },
        map: { title: "", desc: "", goal: "მიზანი: {count} ხე", transparency: "" },
        materials: { title: "", intro: "", items: {} },
        team: { title: "", members: {} },
        contacts: { title: "", heading: "", desc: "", locationName: "", locationAddress: "", mapLocation: "", form: { title: "", name: "", email: "", message: "", button: "" } },
        footer: { motto: "" },
        treeCategories: {},
        countdownLabels: { days: "დღე", hours: "საათი", minutes: "წუთი", seconds: "წამი" }
    }
};

let siteData;
let currentLang = 'ru';
let isDirty = false;
let currentAdminSection = 'hero';
let currentAdminLang = 'ru';
let adminNotifications;

const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

class AdminNotifications {
    constructor() {
        this.container = document.querySelector('.admin-notifications');
    }
    show(message, type = 'success', duration = 4000) {
        const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-icon"><i class="fas ${icon}"></i></div>
            <div class="notification-content">${message}</div>
            <button class="notification-close"><i class="fas fa-times"></i></button>
        `;
        notification.querySelector('.notification-close').addEventListener('click', () => notification.remove());
        this.container.appendChild(notification);
        if (duration > 0) {
            setTimeout(() => notification.remove(), duration);
        }
    }
}

const adminSections = {
    hero: 'Главный экран', nav: 'Навигация', about: 'О проекте', slider: 'Слайдер Деревья',
    events: 'События', help: 'Как помочь', map: 'Тексты карты',
    trees: 'Управление деревьями',
    materials: 'Материалы', team: 'Команда', contacts: 'Контакты', footer: 'Футер', global: 'Глобальные настройки'
};

function renderAdminPanel() {
    const navMenu = document.getElementById('admin-nav-menu');
    const contentWrapper = document.getElementById('admin-content-wrapper');

    navMenu.innerHTML = Object.entries(adminSections).map(([key, title]) =>
        `<button data-section="${key}" class="${currentAdminSection === key ? 'active' : ''}"><i class="fas fa-chevron-right fa-xs" style="margin-right: 10px;"></i>${title}</button>`
    ).join('');

    contentWrapper.innerHTML = `<div class="admin-section active" id="admin-section-${currentAdminSection}">${getAdminSectionHTML(currentAdminSection)}</div>`;
}

function createBreadcrumbs(sectionKey, buttonHtml = '') {
    return `
        <div class="admin-section-header">
            <div>
                <h3>${adminSections[sectionKey]}</h3>
                <div class="admin-breadcrumbs">
                    <a href="#" data-section="hero">Админ-панель</a>
                    <span class="breadcrumb-separator">/</span>
                    <span>${adminSections[sectionKey]}</span>
                </div>
            </div>
            ${buttonHtml}
        </div>`;
}

function getAdminSectionHTML(sectionKey) {
    let html = '';
    const data = siteData[currentAdminLang];
    const globalData = siteData.global;

    const renderLangTabs = () => `
        <div class="admin-lang-tabs">
            <button data-lang="ru" class="${currentAdminLang === 'ru' ? 'active' : ''}">RU</button>
            <button data-lang="en" class="${currentAdminLang === 'en' ? 'active' : ''}">EN</button>
            <button data-lang="ge" class="${currentAdminLang === 'ge' ? 'active' : ''}">GE</button>
        </div>
    `;
    const createInput = (label, id, value, type = 'text') => `<div class="admin-form-group"><label for="${id}">${label}</label><input type="${type}" id="${id}" value="${String(value || '').replace(/"/g, '&quot;')}"></div>`;
    const createTextarea = (label, id, value) => `<div class="admin-form-group"><label for="${id}">${label}</label><textarea id="${id}">${value || ''}</textarea></div>`;

    const createImageInput = (label, id, value) => `
        <div class="admin-form-group">
            <label for="${id}">${label}</label>
            <input type="text" id="${id}" value="${String(value || '').replace(/"/g, '&quot;')}"
                   oninput="const preview = this.nextElementSibling.nextElementSibling; const img = preview.querySelector('img'); const placeholder = preview.querySelector('.image-preview-placeholder'); if (this.value) { img.style.display='block'; placeholder.style.display='none'; img.src=this.value; } else { img.style.display='none'; placeholder.style.display='flex'; }">
            <p class="admin-form-help-text">Вставьте прямую ссылку на изображение, которое уже загружено в интернет (на ваш хостинг, Imgur и т.д.).</p>
            <div class="image-preview-wrapper">
                <img src="${value || ''}" alt="Preview" style="${value ? '' : 'display:none;'}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="image-preview-placeholder" style="${value ? 'display:none;' : 'display:flex;'}"><i class="far fa-image"></i></div>
                <span>Предпросмотр</span>
            </div>
        </div>`;

    switch (sectionKey) {
        case 'hero':
            html += createBreadcrumbs(sectionKey);
            html += `<div class="admin-card"><div class="admin-card-body">`;
            html += createImageInput('Фоновое изображение (глобальное)', 'global.heroBackgroundImageUrl', globalData.heroBackgroundImageUrl);
            html += `<hr style="border-color: var(--admin-border); margin: 2rem 0;">`;
            html += renderLangTabs();
            html += createInput('Заголовок', 'hero.title', data.hero.title);
            html += createInput('Подзаголовок', 'hero.subtitle', data.hero.subtitle);
            html += createInput('Дата (текстовое описание)', 'hero.date', data.hero.date);
            html += createInput('Подписи к таймеру (Дней)', 'countdownLabels.days', data.countdownLabels.days);
            html += createInput('Подписи к таймеру (Часов)', 'countdownLabels.hours', data.countdownLabels.hours);
            html += `</div></div>`;
            break;
        case 'nav':
            html += createBreadcrumbs(sectionKey);
            html += `<div class="admin-card"><div class="admin-card-body">${renderLangTabs()}`;
            Object.entries(data.nav).forEach(([key, value]) => {
                html += createInput(`Пункт "${key}"`, `nav.${key}`, value);
            });
            html += `</div></div>`;
            break;
        case 'about':
            const aboutAddBtn = `<button class="admin-btn btn-add" data-action="add" data-path="aboutItems">Добавить блок</button>`;
            html += createBreadcrumbs(sectionKey, aboutAddBtn);
            html += `<div class="admin-card"><div class="admin-card-body">
                        ${createInput('Заголовок секции (RU)', 'ru.about.title', siteData.ru.about.title)}
                        ${createInput('Заголовок секции (EN)', 'en.about.title', siteData.en.about.title)}
                        ${createInput('Заголовок секции (GE)', 'ge.about.title', siteData.ge.about.title)}
                     </div></div>`;
            (globalData.aboutItems || []).forEach((item, index) => {
                const ruTitle = siteData.ru.about.items[item.id]?.title || 'Новый блок';
                html += `
                <div class="admin-card" data-index="${index}">
                    <div class="admin-card-header">
                        <h4>Блок ${index + 1}: ${ruTitle}</h4>
                        <button class="admin-btn btn-delete" data-action="delete" data-path="aboutItems" data-index="${index}">Удалить</button>
                    </div>
                    <div class="admin-card-body">
                        ${createInput(`Заголовок (RU)`, `ru.about.items.${item.id}.title`, siteData.ru.about.items[item.id]?.title)}
                        ${createTextarea(`Текст (RU)`, `ru.about.items.${item.id}.text`, siteData.ru.about.items[item.id]?.text)}
                        <hr style="border-color: var(--admin-border); margin: 2rem 0;">
                        ${createInput(`Заголовок (EN)`, `en.about.items.${item.id}.title`, siteData.en.about.items[item.id]?.title)}
                        ${createTextarea(`Текст (EN)`, `en.about.items.${item.id}.text`, siteData.en.about.items[item.id]?.text)}
                        <hr style="border-color: var(--admin-border); margin: 2rem 0;">
                        ${createInput(`Заголовок (GE)`, `ge.about.items.${item.id}.title`, siteData.ge.about.items[item.id]?.title)}
                        ${createTextarea(`Текст (GE)`, `ge.about.items.${item.id}.text`, siteData.ge.about.items[item.id]?.text)}
                    </div>
                </div>`;
            });
            break;
        case 'slider':
            const sliderAddBtn = `<button class="admin-btn btn-add" data-action="add" data-path="sliderItems">Добавить слайд</button>`;
            html += createBreadcrumbs(sectionKey, sliderAddBtn);
            (globalData.sliderItems || []).forEach((slide, index) => {
                const ruTitle = siteData.ru.slider[slide.id]?.title || '';
                html += `
                <div class="admin-card" data-index="${index}">
                    <div class="admin-card-header">
                        <h4>Слайд ${index + 1}: ${ruTitle}</h4>
                        <button class="admin-btn btn-delete" data-action="delete" data-path="sliderItems" data-index="${index}">Удалить</button>
                    </div>
                    <div class="admin-card-body">
                        <h5 style="color: var(--admin-text-muted);">Глобальные настройки</h5>
                        ${createInput('ID (уникальный, на английском)', `global.sliderItems.${index}.id`, slide.id)}
                        ${createImageInput('URL Картинки', `global.sliderItems.${index}.img`, slide.img)}
                        <hr style="border-color: var(--admin-border); margin: 2rem 0;">
                        <h5 style="color: var(--admin-text-muted);">Тексты для языков</h5>
                        ${createInput('Заголовок (RU)', `ru.slider.${slide.id}.title`, siteData.ru.slider[slide.id]?.title)}
                        ${createTextarea('Описание (RU)', `ru.slider.${slide.id}.desc`, siteData.ru.slider[slide.id]?.desc)}
                        ${createInput('Заголовок (EN)', `en.slider.${slide.id}.title`, siteData.en.slider[slide.id]?.title)}
                        ${createTextarea('Описание (EN)', `en.slider.${slide.id}.desc`, siteData.en.slider[slide.id]?.desc)}
                        ${createInput('Заголовок (GE)', `ge.slider.${slide.id}.title`, siteData.ge.slider[slide.id]?.title)}
                        ${createTextarea('Описание (GE)', `ge.slider.${slide.id}.desc`, siteData.ge.slider[slide.id]?.desc)}
                    </div>
                </div>`;
            });
            break;
        case 'events':
            const eventsAddBtn = `<button class="admin-btn btn-add" data-action="add" data-path="eventsItems">Добавить событие</button>`;
            html += createBreadcrumbs(sectionKey, eventsAddBtn);
            html += `<div class="admin-card"><div class="admin-card-body">
                        ${createInput('Заголовок секции (RU)', 'ru.events.title', siteData.ru.events.title)}
                        ${createInput('Заголовок секции (EN)', 'en.events.title', siteData.en.events.title)}
                        ${createInput('Заголовок секции (GE)', 'ge.events.title', siteData.ge.events.title)}
                     </div></div>`;
            (globalData.eventsItems || []).forEach((item, index) => {
                const ruTitle = siteData.ru.events.items[item.id]?.title || 'Новое событие';
                html += `
                <div class="admin-card" data-index="${index}">
                    <div class="admin-card-header">
                        <h4>Событие ${index + 1}: ${ruTitle}</h4>
                        <button class="admin-btn btn-delete" data-action="delete" data-path="eventsItems" data-index="${index}">Удалить</button>
                    </div>
                    <div class="admin-card-body">
                        ${createInput('Заголовок (RU)', `ru.events.items.${item.id}.title`, siteData.ru.events.items[item.id]?.title)}
                        ${createTextarea('Описание (RU)', `ru.events.items.${item.id}.desc`, siteData.ru.events.items[item.id]?.desc)}
                        <hr style="border-color: var(--admin-border); margin: 2rem 0;">
                        ${createInput('Заголовок (EN)', `en.events.items.${item.id}.title`, siteData.en.events.items[item.id]?.title)}
                        ${createTextarea('Описание (EN)', `en.events.items.${item.id}.desc`, siteData.en.events.items[item.id]?.desc)}
                        <hr style="border-color: var(--admin-border); margin: 2rem 0;">
                        ${createInput('Заголовок (GE)', `ge.events.items.${item.id}.title`, siteData.ge.events.items[item.id]?.title)}
                        ${createTextarea('Описание (GE)', `ge.events.items.${item.id}.desc`, siteData.ge.events.items[item.id]?.desc)}
                    </div>
                </div>`;
            });
            break;
        case 'help':
            const helpAddBtn = `<button class="admin-btn btn-add" data-action="add" data-path="helpCards">Добавить карточку</button>`;
            html += createBreadcrumbs(sectionKey, helpAddBtn);
            html += `<div class="admin-card"><div class="admin-card-body">
                        ${createInput('Заголовок секции (RU)', 'ru.help.title', siteData.ru.help.title)}
                        ${createTextarea('Вступительный текст (RU)', 'ru.help.intro', siteData.ru.help.intro)}
                        <hr style="border-color: var(--admin-border); margin: 2rem 0;">
                        ${createInput('Заголовок секции (EN)', 'en.help.title', siteData.en.help.title)}
                        ${createTextarea('Вступительный текст (EN)', 'en.help.intro', siteData.en.help.intro)}
                        <hr style="border-color: var(--admin-border); margin: 2rem 0;">
                        ${createInput('Заголовок секции (GE)', 'ge.help.title', siteData.ge.help.title)}
                        ${createTextarea('Вступительный текст (GE)', 'ge.help.intro', siteData.ge.help.intro)}
                    </div></div>`;
            (globalData.helpCards || []).forEach((card, index) => {
                const ruTitle = siteData.ru.help.cards[card.id]?.title || 'Новая карточка';
                html += `
                <div class="admin-card" data-index="${index}">
                    <div class="admin-card-header">
                        <h4>Карточка: ${ruTitle}</h4>
                        <button class="admin-btn btn-delete" data-action="delete" data-path="helpCards" data-index="${index}">Удалить</button>
                    </div>
                    <div class="admin-card-body">
                        <h5 style="color: var(--admin-text-muted);">Глобальные настройки</h5>
                        ${createInput('ID (уникальный, на английском)', `global.helpCards.${index}.id`, card.id)}
                        <hr style="border-color: var(--admin-border); margin: 2rem 0;">
                        <h5 style="color: var(--admin-text-muted);">Тексты для языков</h5>
                        ${createInput('Заголовок (RU)', `ru.help.cards.${card.id}.title`, siteData.ru.help.cards[card.id]?.title)}
                        ${createTextarea('Описание (RU)', `ru.help.cards.${card.id}.desc`, siteData.ru.help.cards[card.id]?.desc)}
                        ${createTextarea('Детали (RU)', `ru.help.cards.${card.id}.details`, siteData.ru.help.cards[card.id]?.details)}
                        ${createInput('Текст кнопки (RU)', `ru.help.cards.${card.id}.button`, siteData.ru.help.cards[card.id]?.button)}
                        <hr style="border-color: var(--admin-border); margin: 2rem 0;">
                        ${createInput('Заголовок (EN)', `en.help.cards.${card.id}.title`, siteData.en.help.cards[card.id]?.title)}
                        ${createTextarea('Описание (EN)', `en.help.cards.${card.id}.desc`, siteData.en.help.cards[card.id]?.desc)}
                        ${createTextarea('Детали (EN)', `en.help.cards.${card.id}.details`, siteData.en.help.cards[card.id]?.details)}
                        ${createInput('Текст кнопки (EN)', `en.help.cards.${card.id}.button`, siteData.en.help.cards[card.id]?.button)}
                        <hr style="border-color: var(--admin-border); margin: 2rem 0;">
                        ${createInput('Заголовок (GE)', `ge.help.cards.${card.id}.title`, siteData.ge.help.cards[card.id]?.title)}
                        ${createTextarea('Описание (GE)', `ge.help.cards.${card.id}.desc`, siteData.ge.help.cards[card.id]?.desc)}
                        ${createTextarea('Детали (GE)', `ge.help.cards.${card.id}.details`, siteData.ge.help.cards[card.id]?.details)}
                        ${createInput('Текст кнопки (GE)', `ge.help.cards.${card.id}.button`, siteData.ge.help.cards[card.id]?.button)}
                    </div>
                </div>`;
            });
            break;
        case 'map':
            html += createBreadcrumbs(sectionKey);
            html += renderLangTabs();
            html += `
            <div class="admin-card">
                <div class="admin-card-header"><h4>Тексты для карты</h4></div>
                <div class="admin-card-body">
                    <p class="admin-text-muted">Для управления категориями деревьев (количество, средства, названия), перейдите в раздел "Управление деревьями".</p>
                    ${createInput('Заголовок карты', 'map.title', data.map.title)}
                    ${createTextarea('Описание карты', 'map.desc', data.map.desc)}
                    ${createTextarea('Текст о прозрачности', 'map.transparency', data.map.transparency)}
                </div>
            </div>`;
            break;
        case 'trees':
            const treesAddBtn = `<button class="admin-btn btn-add" data-action="add" data-path="treeCategories">Добавить категорию</button>`;
            html += createBreadcrumbs(sectionKey, treesAddBtn);
            html += `<p class="admin-text-muted">Здесь вы управляете категориями деревьев для интерактивной карты.</p>`;
            (globalData.treeCategories || []).forEach((category, index) => {
                html += `
                <div class="admin-card" data-index="${index}">
                    <div class="admin-card-header">
                        <h4>Категория: ${siteData.ru.treeCategories[category.id]?.name || category.id}</h4>
                        <button class="admin-btn btn-delete" data-action="delete" data-path="treeCategories" data-index="${index}">Удалить категорию</button>
                    </div>
                    <div class="admin-card-body">
                        <h5 style="color: var(--admin-text-muted);">Глобальные настройки</h5>
                        ${createInput('ID (уникальный, на английском, без пробелов)', `global.treeCategories.${index}.id`, category.id)}
                        ${createInput('Планируемое кол-во', `global.treeCategories.${index}.quantity`, category.quantity, 'number')}
                        ${createInput('Стоимость 1 дерева (GEL)', `global.treeCategories.${index}.costPerTree`, category.costPerTree, 'number')}
                        ${createInput('Уже оплачено деревьев', `global.treeCategories.${index}.sponsoredCount`, category.sponsoredCount, 'number')}
                        ${createImageInput('URL Картинки', `global.treeCategories.${index}.img`, category.img)}
                        <hr style="border-color: var(--admin-border); margin: 2rem 0;">
                        <h5 style="color: var(--admin-text-muted);">Тексты для языков</h5>
                        ${createInput('Название (RU)', `ru.treeCategories.${category.id}.name`, siteData.ru.treeCategories[category.id]?.name)}
                        ${createTextarea('Описание (RU)', `ru.treeCategories.${category.id}.desc`, siteData.ru.treeCategories[category.id]?.desc)}
                        ${createInput('Название (EN)', `en.treeCategories.${category.id}.name`, siteData.en.treeCategories[category.id]?.name)}
                        ${createTextarea('Описание (EN)', `en.treeCategories.${category.id}.desc`, siteData.en.treeCategories[category.id]?.desc)}
                        ${createInput('Название (GE)', `ge.treeCategories.${category.id}.name`, siteData.ge.treeCategories[category.id]?.name)}
                        ${createTextarea('Описание (GE)', `ge.treeCategories.${category.id}.desc`, siteData.ge.treeCategories[category.id]?.desc)}
                    </div>
                </div>`;
            });
            break;
        case 'materials':
            const materialsAddBtn = `<button class="admin-btn btn-add" data-action="add" data-path="materialsItems">Добавить материал</button>`;
            html += createBreadcrumbs(sectionKey, materialsAddBtn);
            html += `<div class="admin-card"><div class="admin-card-body">
                        ${createInput('Заголовок секции (RU)', 'ru.materials.title', siteData.ru.materials.title)}
                        ${createTextarea('Вступительный текст (RU)', 'ru.materials.intro', siteData.ru.materials.intro)}
                        <hr style="border-color: var(--admin-border); margin: 2rem 0;">
                        ${createInput('Заголовок секции (EN)', 'en.materials.title', siteData.en.materials.title)}
                        ${createTextarea('Вступительный текст (EN)', 'en.materials.intro', siteData.en.materials.intro)}
                        <hr style="border-color: var(--admin-border); margin: 2rem 0;">
                        ${createInput('Заголовок секции (GE)', 'ge.materials.title', siteData.ge.materials.title)}
                        ${createTextarea('Вступительный текст (GE)', 'ge.materials.intro', siteData.ge.materials.intro)}
                    </div></div>`;
            (globalData.materialsItems || []).forEach((item, index) => {
                const ruTitle = siteData.ru.materials.items[item.id]?.title || 'Новый материал';
                html += `
                <div class="admin-card" data-index="${index}">
                    <div class="admin-card-header">
                        <h4>Материал ${index + 1}: ${ruTitle}</h4>
                        <button class="admin-btn btn-delete" data-action="delete" data-path="materialsItems" data-index="${index}">Удалить</button>
                    </div>
                    <div class="admin-card-body">
                        ${createInput('Заголовок (RU)', `ru.materials.items.${item.id}.title`, siteData.ru.materials.items[item.id]?.title)}
                        ${createTextarea('Пункты (RU, каждый с новой строки)', `ru.materials.items.${item.id}.points`, (siteData.ru.materials.items[item.id]?.points || []).join('\n'))}
                        <hr style="border-color: var(--admin-border); margin: 2rem 0;">
                        ${createInput('Заголовок (EN)', `en.materials.items.${item.id}.title`, siteData.en.materials.items[item.id]?.title)}
                        ${createTextarea('Пункты (EN, каждый с новой строки)', `en.materials.items.${item.id}.points`, (siteData.en.materials.items[item.id]?.points || []).join('\n'))}
                        <hr style="border-color: var(--admin-border); margin: 2rem 0;">
                        ${createInput('Заголовок (GE)', `ge.materials.items.${item.id}.title`, siteData.ge.materials.items[item.id]?.title)}
                        ${createTextarea('Пункты (GE, каждый с новой строки)', `ge.materials.items.${item.id}.points`, (siteData.ge.materials.items[item.id]?.points || []).join('\n'))}
                    </div>
                </div>`;
            });
            break;
        case 'team':
            const teamAddBtn = `<button class="admin-btn btn-add" data-action="add" data-path="teamMembers">Добавить сотрудника</button>`;
            html += createBreadcrumbs(sectionKey, teamAddBtn);
            html += `<div class="admin-card"><div class="admin-card-body">${renderLangTabs()}${createInput('Заголовок секции', `team.title`, data.team.title)}</div></div>`;
            (globalData.teamMembers || []).forEach((member, index) => {
                 const ruName = siteData.ru.team.members[member.id]?.name || '';
                 html += `
                <div class="admin-card" data-index="${index}">
                    <div class="admin-card-header">
                        <h4>Сотрудник: ${ruName}</h4>
                        <button class="admin-btn btn-delete" data-action="delete" data-path="teamMembers" data-index="${index}">Удалить</button>
                    </div>
                    <div class="admin-card-body">
                        <h5 style="color: var(--admin-text-muted);">Глобальные настройки</h5>
                        ${createInput('ID (уникальный, на английском)', `global.teamMembers.${index}.id`, member.id)}
                        ${createImageInput('URL Фото', `global.teamMembers.${index}.img`, member.img)}
                        <hr style="border-color: var(--admin-border); margin: 2rem 0;">
                        <h5 style="color: var(--admin-text-muted);">Тексты для языков</h5>
                        ${createInput('Имя (RU)', `ru.team.members.${member.id}.name`, siteData.ru.team.members[member.id]?.name)}
                        ${createInput('Роль (RU)', `ru.team.members.${member.id}.role`, siteData.ru.team.members[member.id]?.role)}
                        ${createInput('Имя (EN)', `en.team.members.${member.id}.name`, siteData.en.team.members[member.id]?.name)}
                        ${createInput('Роль (EN)', `en.team.members.${member.id}.role`, siteData.en.team.members[member.id]?.role)}
                        ${createInput('Имя (GE)', `ge.team.members.${member.id}.name`, siteData.ge.team.members[member.id]?.name)}
                        ${createInput('Роль (GE)', `ge.team.members.${member.id}.role`, siteData.ge.team.members[member.id]?.role)}
                    </div>
                </div>`;
            });
            break;
        case 'contacts':
            html += createBreadcrumbs(sectionKey);
            html += renderLangTabs();
            html += `<div class="admin-card"><div class="admin-card-body">${createInput('Заголовок секции', 'contacts.title', data.contacts.title)}</div></div>`;
            html += `<div class="admin-card"><div class="admin-card-header"><h4>Контактная информация</h4></div><div class="admin-card-body">
                    ${createInput('Заголовок', 'contacts.heading', data.contacts.heading)}
                    ${createTextarea('Описание', 'contacts.desc', data.contacts.desc)}
                    ${createInput('Название локации', 'contacts.locationName', data.contacts.locationName)}
                    ${createInput('Адрес локации', 'contacts.locationAddress', data.contacts.locationAddress)}
                    ${createInput('Заголовок карты', 'contacts.mapLocation', data.contacts.mapLocation)}
                </div></div>`;
            html += `<div class="admin-card"><div class="admin-card-header"><h4>Форма обратной связи</h4></div><div class="admin-card-body">
                    ${createInput('Заголовок формы', 'contacts.form.title', data.contacts.form.title)}
                    ${createInput('Лейбл для имени', 'contacts.form.name', data.contacts.form.name)}
                    ${createInput('Лейбл для email', 'contacts.form.email', data.contacts.form.email)}
                    ${createInput('Лейбл для сообщения', 'contacts.form.message', data.contacts.form.message)}
                    ${createInput('Текст кнопки', 'contacts.form.button', data.contacts.form.button)}
                </div></div>`;
            break;
        case 'footer':
            html += createBreadcrumbs(sectionKey);
            html += `<div class="admin-card"><div class="admin-card-body">${renderLangTabs()}`;
            html += createTextarea('Девиз в футере', 'footer.motto', data.footer.motto);
            html += `</div></div>`;
            break;
        case 'global':
            html += createBreadcrumbs(sectionKey);
            html += `<div class="admin-card"><div class="admin-card-header"><h4>Дата и время события (для таймера)</h4></div><div class="admin-card-body">`;
            html += createInput('Дата события (формат YYYY-MM-DD)', `global.eventDate`, globalData.eventDate, 'date');
            html += createInput('Время события (24-часовой формат)', `global.eventTime`, globalData.eventTime, 'time');
            html += `</div></div>`;
            html += `<div class="admin-card"><div class="admin-card-header"><h4>Социальные сети</h4></div><div class="admin-card-body">`;
            html += createInput('Instagram URL', `global.socials.instagram`, globalData.socials.instagram);
            html += createInput('Telegram URL', `global.socials.telegram`, globalData.socials.telegram);
            html += createInput('Email (mailto:)', `global.socials.email`, globalData.socials.email);
            html += `</div></div>`;
            html += `<div class="admin-card"><div class="admin-card-header"><h4>Карта</h4></div><div class="admin-card-body">`;
            html += createInput('Google Maps Iframe SRC', `global.mapIframeSrc`, globalData.mapIframeSrc);
            html += `</div></div>`;
            break;
        default:
            html += createBreadcrumbs(sectionKey);
            html += `<div class="admin-card"><div class="admin-card-body">Редактирование для этой секции находится в разработке.</div></div>`;
    }
    return html;
}

async function saveAdminChanges() {
    // alert('Кнопка работает!'); // Убрали старую проверку

    const saveBtn = document.getElementById('admin-save-btn');
    saveBtn.disabled = true;
    saveBtn.textContent = 'Сохранение...';

    try {
        const { getFirestore, doc, setDoc } = await import("https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js");
        if (!window.firebaseApp || !window.firebaseApp.app) {
            throw new Error("Firebase App не инициализировано. Проверьте HTML-файл.");
        }
        const { app } = window.firebaseApp;
        const db = getFirestore(app);

        const tempSiteData = deepCopy(siteData);
        
        document.querySelectorAll('#admin-content-wrapper input, #admin-content-wrapper textarea').forEach(input => {
            if (!input.id) return;
            const keys = input.id.split('.');
            
            let current = tempSiteData;
            for (let i = 0; i < keys.length - 1; i++) {
                if (typeof current[keys[i]] === 'undefined') {
                    current[keys[i]] = isNaN(parseInt(keys[i+1], 10)) ? {} : [];
                }
                current = current[keys[i]];
            }

            let value = input.value;
            if (input.type === 'number') {
                value = parseFloat(value) || 0;
            } else if (keys.includes('points')) {
                value = value.split('\n').filter(p => p.trim() !== '');
            }
            
            current[keys[keys.length - 1]] = value;
        });

        const syncIds = (globalPath, langPath) => {
            const oldGlobalItems = siteData.global[globalPath] || [];
            const newGlobalItems = tempSiteData.global[globalPath] || [];

            newGlobalItems.forEach((newItem, index) => {
                const oldItem = oldGlobalItems[index];
                if (oldItem && newItem.id !== oldItem.id) {
                    ['ru', 'en', 'ge'].forEach(lang => {
                        const pathKeys = langPath.split('.');
                        let langObject = tempSiteData[lang];
                        for(let i = 0; i < pathKeys.length; i++) {
                            langObject = langObject[pathKeys[i]];
                        }
                        if (langObject && langObject[oldItem.id]) {
                            langObject[newItem.id] = langObject[oldItem.id];
                            delete langObject[oldItem.id];
                        }
                    });
                }
            });
        };

        syncIds('sliderItems', 'slider');
        syncIds('teamMembers', 'team.members');
        syncIds('treeCategories', 'treeCategories');
        syncIds('helpCards', 'help.cards');

        siteData = tempSiteData;

        const contentRef = doc(db, "content", "main");
        await setDoc(contentRef, siteData);
        
        isDirty = false;
        adminNotifications.show('Данные успешно сохранены в Firebase!', 'success');

    } catch (error) {
        alert('ПРОИЗОШЛА ОШИБКА: ' + error.message); // <-- ДОБАВЛЕНА НОВАЯ ПРОВЕРКА
        console.error("Ошибка сохранения в Firebase:", error);
        adminNotifications.show('Ошибка при сохранении в Firebase. См. консоль.', 'error');
    } finally {
        saveBtn.disabled = false;
        saveBtn.textContent = 'Сохранить';
        renderAdminPanel();
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    adminNotifications = new AdminNotifications();
    const adminPanel = document.getElementById('admin-panel');

    try {
        const { getFirestore, doc, getDoc } = await import("https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js");
        if (!window.firebaseApp || !window.firebaseApp.app) {
            throw new Error("Firebase App не инициализирован.");
        }
        const { app } = window.firebaseApp;
        const db = getFirestore(app);
        
        const contentRef = doc(db, "content", "main");
        const docSnap = await getDoc(contentRef);

        if (docSnap.exists()) {
            siteData = docSnap.data();
            adminNotifications.show('Данные успешно загружены из Firebase.', 'success', 2000);
        } else {
            siteData = deepCopy(defaultSiteData);
            isDirty = true;
            adminNotifications.show('Данные в Firebase не найдены. Используется структура по умолчанию. Нажмите "Сохранить", чтобы создать их.', 'warning', 0);
        }
    } catch (error) {
        console.error("Ошибка загрузки данных из Firebase:", error);
        siteData = deepCopy(defaultSiteData);
        adminNotifications.show('Ошибка загрузки! Используется локальная копия. См. консоль.', 'error', 0);
    }

    adminPanel.style.display = 'flex';
    setTimeout(() => adminPanel.classList.add('visible'), 10);
    document.body.style.overflow = 'hidden';

    renderAdminPanel();

    adminPanel.addEventListener('click', (e) => {
        const navButton = e.target.closest('#admin-nav-menu button[data-section]');
        if (navButton) {
            e.preventDefault();
            currentAdminSection = navButton.dataset.section;
            renderAdminPanel();
            if (window.innerWidth <= 992) {
                document.getElementById('admin-nav-menu').classList.remove('open');
                document.getElementById('admin-overlay').classList.remove('active');
            }
            return;
        }

        const contentArea = e.target.closest('#admin-content-wrapper');
        if(contentArea) {
            const breadcrumbLink = e.target.closest('.admin-breadcrumbs a');
            if (breadcrumbLink) {
                e.preventDefault();
                currentAdminSection = breadcrumbLink.dataset.section;
                renderAdminPanel();
                return;
            }

            const langTab = e.target.closest('.admin-lang-tabs button');
            if (langTab) {
                currentAdminLang = langTab.dataset.lang;
                renderAdminPanel();
                return;
            }

            const actionBtn = e.target.closest('.admin-btn[data-action]');
            if (actionBtn) {
                const action = actionBtn.dataset.action;
                const path = actionBtn.dataset.path;
                const index = parseInt(actionBtn.dataset.index, 10);

                const confirmAction = (message, callback) => {
                    const originalZIndex = adminPanel.style.zIndex;
                    try {
                        adminPanel.style.zIndex = 'auto';
                        if (confirm(message)) {
                            callback();
                        }
                    } finally {
                        adminPanel.style.zIndex = originalZIndex || '9999';
                    }
                };

                const confirmMessage = 'Вы уверены, что хотите удалить этот элемент? Это действие необратимо и затронет ВСЕ языковые версии сайта.';

                switch (path) {
                    case 'sliderItems':
                        if (action === 'add') {
                            const newId = `slide_${Date.now()}`;
                            if (!siteData.global.sliderItems) siteData.global.sliderItems = [];
                            siteData.global.sliderItems.push({ id: newId, img: 'https://source.unsplash.com/1200x800/?nature' });
                            ['ru', 'en', 'ge'].forEach(lang => {
                                if (!siteData[lang].slider) siteData[lang].slider = {};
                                siteData[lang].slider[newId] = { title: 'Новый слайд', desc: 'Описание нового слайда.' };
                            });
                        } else if (action === 'delete') {
                            const slideId = siteData.global.sliderItems[index].id;
                            confirmAction(confirmMessage, () => {
                                siteData.global.sliderItems.splice(index, 1);
                                ['ru', 'en', 'ge'].forEach(lang => delete siteData[lang].slider[slideId]);
                            });
                        }
                        break;
                    case 'teamMembers':
                        if (action === 'add') {
                            const newId = `member_${Date.now()}`;
                            if (!siteData.global.teamMembers) siteData.global.teamMembers = [];
                            siteData.global.teamMembers.push({ id: newId, img: 'https://source.unsplash.com/300x300/?portrait' });
                            ['ru', 'en', 'ge'].forEach(lang => {
                                if (!siteData[lang].team.members) siteData[lang].team.members = {};
                                siteData[lang].team.members[newId] = { name: 'Новый сотрудник', role: 'Должность' };
                            });
                        } else if (action === 'delete') {
                            const memberId = siteData.global.teamMembers[index].id;
                            confirmAction(confirmMessage, () => {
                                siteData.global.teamMembers.splice(index, 1);
                                ['ru', 'en', 'ge'].forEach(lang => delete siteData[lang].team.members[memberId]);
                            });
                        }
                        break;
                    case 'treeCategories':
                        if (action === 'add') {
                            const newId = `new_category_${Date.now()}`;
                            if (!siteData.global.treeCategories) siteData.global.treeCategories = [];
                            siteData.global.treeCategories.push({ id: newId, quantity: 10, costPerTree: 50, sponsoredCount: 0, img: 'https://source.unsplash.com/400x300/?tree' });
                            ['ru', 'en', 'ge'].forEach(lang => {
                                if (!siteData[lang].treeCategories) siteData[lang].treeCategories = {};
                                siteData[lang].treeCategories[newId] = { name: 'Новая Категория', desc: 'Описание для новой категории.' };
                            });
                        } else if (action === 'delete') {
                            const categoryId = siteData.global.treeCategories[index].id;
                            confirmAction(confirmMessage, () => {
                                siteData.global.treeCategories.splice(index, 1);
                                ['ru', 'en', 'ge'].forEach(lang => delete siteData[lang].treeCategories[categoryId]);
                            });
                        }
                        break;
                    case 'aboutItems':
                        if (action === 'add') {
                            const newId = `about_${Date.now()}`;
                            if (!siteData.global.aboutItems) siteData.global.aboutItems = [];
                            siteData.global.aboutItems.push({ id: newId });
                            ['ru', 'en', 'ge'].forEach(lang => {
                                siteData[lang].about.items[newId] = { title: 'Новый заголовок', text: 'Новый текст.' };
                            });
                        } else if (action === 'delete') {
                            const itemId = siteData.global.aboutItems[index].id;
                            confirmAction(confirmMessage, () => {
                                siteData.global.aboutItems.splice(index, 1);
                                ['ru', 'en', 'ge'].forEach(lang => delete siteData[lang].about.items[itemId]);
                            });
                        }
                        break;
                    case 'eventsItems':
                        if (action === 'add') {
                            const newId = `event_${Date.now()}`;
                            if (!siteData.global.eventsItems) siteData.global.eventsItems = [];
                            siteData.global.eventsItems.push({ id: newId });
                            ['ru', 'en', 'ge'].forEach(lang => {
                                siteData[lang].events.items[newId] = { title: 'Новое событие', desc: 'Новое описание.' };
                            });
                        } else if (action === 'delete') {
                            const itemId = siteData.global.eventsItems[index].id;
                            confirmAction(confirmMessage, () => {
                                siteData.global.eventsItems.splice(index, 1);
                                ['ru', 'en', 'ge'].forEach(lang => delete siteData[lang].events.items[itemId]);
                            });
                        }
                        break;
                    case 'materialsItems':
                        if (action === 'add') {
                            const newId = `material_${Date.now()}`;
                            if (!siteData.global.materialsItems) siteData.global.materialsItems = [];
                            siteData.global.materialsItems.push({ id: newId });
                            ['ru', 'en', 'ge'].forEach(lang => {
                                siteData[lang].materials.items[newId] = { title: 'Новый материал', points: ['Пункт 1', 'Пункт 2'] };
                            });
                        } else if (action === 'delete') {
                            const itemId = siteData.global.materialsItems[index].id;
                            confirmAction(confirmMessage, () => {
                                siteData.global.materialsItems.splice(index, 1);
                                ['ru', 'en', 'ge'].forEach(lang => delete siteData[lang].materials.items[itemId]);
                            });
                        }
                        break;
                    case 'helpCards':
                        if (action === 'add') {
                            const newId = `card_${Date.now()}`;
                            if (!siteData.global.helpCards) siteData.global.helpCards = [];
                            siteData.global.helpCards.push({ id: newId });
                            ['ru', 'en', 'ge'].forEach(lang => {
                                siteData[lang].help.cards[newId] = { title: 'Новая карточка', desc: 'Описание', details: '', button: '' };
                            });
                        } else if (action === 'delete') {
                            const cardId = siteData.global.helpCards[index].id;
                            confirmAction(confirmMessage, () => {
                                siteData.global.helpCards.splice(index, 1);
                                ['ru', 'en', 'ge'].forEach(lang => delete siteData[lang].help.cards[cardId]);
                            });
                        }
                        break;
                }
                isDirty = true;
                renderAdminPanel();
                return;
            }
        }
    });

    document.getElementById('admin-close-btn').addEventListener('click', () => {
        let proceed = !isDirty;
        if (isDirty) {
            const originalZIndex = adminPanel.style.zIndex;
            try {
                adminPanel.style.zIndex = 'auto';
                proceed = confirm('У вас есть несохраненные изменения. Вы уверены, что хотите выйти?');
            } finally {
                adminPanel.style.zIndex = originalZIndex || '9999';
            }
        }
        if (proceed) {
            window.location.href = 'index.html';
        }
    });

    document.getElementById('admin-save-btn').addEventListener('click', saveAdminChanges);
    
    const adminMenuToggle = document.getElementById('admin-menu-toggle');
    const adminNavMenu = document.getElementById('admin-nav-menu');
    const adminOverlay = document.getElementById('admin-overlay');

    const toggleAdminNav = () => {
        adminNavMenu.classList.toggle('open');
        adminOverlay.classList.toggle('active');
    };

    adminMenuToggle.addEventListener('click', toggleAdminNav);
    adminOverlay.addEventListener('click', toggleAdminNav);
    
    adminPanel.addEventListener('input', () => { isDirty = true; });
    
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && (e.key === 's' || e.key === 'ы')) {
            e.preventDefault();
            saveAdminChanges();
        }
    });
    
    window.addEventListener('beforeunload', (e) => {
        if (isDirty) {
            e.preventDefault();
            e.returnValue = '';
        }
    });
});