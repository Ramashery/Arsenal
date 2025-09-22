// --- START OF FILE script.js ---

let siteData;
let currentLang = 'ru';
let countdownInterval;

const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

function getArraySafely(potentialArray) {
    if (Array.isArray(potentialArray)) {
        return potentialArray;
    }
    console.warn('Ожидался массив, но получен другой тип. Возвращен пустой массив.', potentialArray);
    return [];
}

function renderPage() {
    const data = siteData[currentLang];
    const globalData = siteData.global;

    const heroSection = document.querySelector('.hero');
    if (globalData.heroBackgroundImageUrl && heroSection) {
        heroSection.style.backgroundImage = `linear-gradient(var(--overlay-dark), var(--overlay-dark)), url('${globalData.heroBackgroundImageUrl}')`;
    }

    if (countdownInterval) clearInterval(countdownInterval);
    const countdownContainer = document.getElementById('countdown-timer');
    const targetDate = new Date(`${globalData.eventDate}T${globalData.eventTime}`).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            countdownContainer.style.display = 'none';
            clearInterval(countdownInterval);
            return;
        }
        countdownContainer.style.display = 'flex';

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        countdownContainer.innerHTML = `
            <div class="countdown-item"><span class="countdown-number">${days}</span><span class="countdown-label">${data.countdownLabels.days}</span></div>
            <div class="countdown-item"><span class="countdown-number">${hours}</span><span class="countdown-label">${data.countdownLabels.hours}</span></div>
        `;
    }
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
    
    document.querySelectorAll('[data-i18n-key]').forEach(el => {
        const key = el.dataset.i18nKey;
        const keys = key.split('.');
        let value = keys.reduce((obj, k) => (obj && obj[k] !== 'undefined') ? obj[k] : null, data);
        if (value !== null) {
            if (key === 'map.goal') {
               const safeTreeCategories = getArraySafely(globalData.treeCategories);
               const totalTrees = safeTreeCategories.reduce((sum, cat) => sum + cat.quantity, 0);
               value = value.replace('{count}', totalTrees);
            }
            if (el.tagName === 'P' || (el.tagName === 'H4' && key === 'map.goal')) {
                el.innerHTML = String(value).replace(/\n/g, '<br>');
            } else {
                el.textContent = value;
            }
        }
    });
    
    const helpCardsWrapper = document.getElementById('help-cards-wrapper');
    helpCardsWrapper.innerHTML = getArraySafely(data.help?.cards).map(card => `
        <div class="card fade-in">
            <h3>${card.title}</h3>
            <p>${card.desc}</p>
            ${card.details ? `<p id="help-card-details-${card.id}" style="white-space: pre-wrap; overflow-wrap: break-word;">${card.details}</p>` : ''}
            ${card.button ? `<a href="#contacts" class="btn" style="margin-top:1rem">${card.button}</a>` : ''}
        </div>
    `).join('');

    const navMenu = document.getElementById('nav-menu');
    navMenu.innerHTML = Object.entries(data.nav || {}).map(([key, value]) => `<li><a href="#${key}">${value}</a></li>`).join('');

    const aboutWrapper = document.getElementById('about-content-wrapper');
    aboutWrapper.innerHTML = getArraySafely(data.about?.items).map(item => `
        <div class="about-item">
            <h3>${item.title}</h3>
            <p>${item.text.replace(/\n/g, '<br>')}</p>
        </div>
    `).join('');

    const sliderWrapper = document.getElementById('trees-slider-wrapper');
    sliderWrapper.innerHTML = getArraySafely(globalData.sliderItems).map((globalSlide, index) => {
        const langSlide = data.slider?.[globalSlide.id] || { title: '', desc: '' };
        return `
        <div class="slide ${index === 0 ? 'active' : ''}" style="background-image: url('${globalSlide.img}');">
            <div class="slide-content"><h3>${langSlide.title}</h3><p>${langSlide.desc}</p></div>
        </div>
    `}).join('');
    initTreeSlider();

    const eventsWrapper = document.getElementById('events-timeline-wrapper');
    eventsWrapper.innerHTML = getArraySafely(data.events?.items).map(item => `
        <div class="event-item fade-in"><h3>${item.title}</h3><p>${item.desc}</p></div>
    `).join('');
    
    const materialsWrapper = document.getElementById('materials-accordion-wrapper');
    materialsWrapper.innerHTML = getArraySafely(data.materials?.items).map(item => `
        <details class="material-item">
            <summary>${item.title}</summary>
            <div class="material-content"><ul>${getArraySafely(item.points).map(p => `<li>${p}</li>`).join('')}</ul></div>
        </details>
    `).join('');
    
    const teamWrapper = document.getElementById('team-grid-wrapper');
    teamWrapper.innerHTML = getArraySafely(globalData.teamMembers).map(globalMember => {
        const langMember = data.team?.members?.[globalMember.id] || { name: '', role: '' };
        return `
         <div class="team-member fade-in">
            <img src="${globalMember.img}" alt="${langMember.name}" class="team-img">
            <h3>${langMember.name}</h3>
            <p>${langMember.role}</p>
        </div>
    `}).join('');
    
    const socialWrapper = document.getElementById('social-links-wrapper');
    if (globalData.socials) {
        socialWrapper.innerHTML = `
            <a href="${globalData.socials.instagram}" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="${globalData.socials.telegram}" aria-label="Telegram"><i class="fab fa-telegram"></i></a>
            <a href="${globalData.socials.email}" aria-label="Email"><i class="far fa-envelope"></i></a>
        `;
    }
    
    const iframe = document.getElementById('google-map-iframe');
    if (iframe && globalData.mapIframeSrc) {
        iframe.src = globalData.mapIframeSrc;
    }
    
    renderMap();
}

function renderMap() {
    const globalData = siteData.global;
    const langData = siteData[currentLang];
    
    const safeTreeCategories = getArraySafely(globalData.treeCategories);
    const totalTrees = safeTreeCategories.reduce((sum, cat) => sum + (cat.quantity || 0), 0);
    const totalSponsored = safeTreeCategories.reduce((sum, cat) => sum + (cat.sponsoredCount || 0), 0);

    const mapGrid = document.getElementById('map-grid');
    mapGrid.innerHTML = '';

    safeTreeCategories.forEach(category => {
        const categoryName = langData.treeCategories?.[category.id]?.name || category.id;
        let iconsHTML = '';
        for (let i = 0; i < category.quantity; i++) {
            const isFunded = i < category.sponsoredCount;
            iconsHTML += `<i class="fas fa-tree map-tree-icon ${isFunded ? 'funded' : ''}"></i>`;
        }

        const categoryItem = document.createElement('div');
        categoryItem.className = 'map-category-item';
        categoryItem.dataset.categoryId = category.id;
        categoryItem.innerHTML = `
            <div class="map-category-name">${categoryName}</div>
            <div class="map-tree-icons">${iconsHTML}</div>
        `;
        mapGrid.appendChild(categoryItem);
    });
    
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');

    if (progressFill && progressText) {
        setTimeout(() => {
             const progressPercentage = totalTrees > 0 ? (totalSponsored / totalTrees) * 100 : 0;
             progressFill.style.width = `${progressPercentage}%`;
             progressText.textContent = `${totalSponsored} / ${totalTrees}`;
        }, 100);
    }
}

async function initializeSite() {
    const loaderOverlay = document.getElementById('loader-overlay');
    const loaderError = document.getElementById('loader-error');
    const loaderSpinner = document.querySelector('.loader-spinner');
    const loaderText = document.querySelector('.loader-text');

    try {
        const { getFirestore, doc, getDoc } = await import("https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js");
        
        if (!window.firebaseApp || !window.firebaseApp.app) {
            throw new Error("Firebase App не инициализирован. Проверьте HTML-файл.");
        }
        
        const { app } = window.firebaseApp;
        const db = getFirestore(app);

        const contentRef = doc(db, "content", "main");
        const docSnap = await getDoc(contentRef);

        if (docSnap.exists()) {
            siteData = docSnap.data();
            console.log('Данные успешно загружены из Firebase.');
            
            renderPage();

            loaderOverlay.style.opacity = '0';
            setTimeout(() => {
                loaderOverlay.style.display = 'none';
            }, 500);

        } else {
            throw new Error("Документ 'main' в Firebase не найден.");
        }
    } catch (error) {
        console.error("Критическая ошибка при загрузке данных из Firebase:", error);
        
        loaderSpinner.style.display = 'none';
        loaderText.style.display = 'none';
        loaderError.style.display = 'block';
    }

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navOverlay = document.getElementById('nav-overlay');

    const toggleNav = () => {
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
        navOverlay.classList.toggle('active');
    };

    hamburgerBtn.addEventListener('click', toggleNav);
    const closeNav = () => {
        if (navMenu.classList.contains('active')) {
            hamburgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
            navOverlay.classList.remove('active');
        }
    };
    navMenu.addEventListener('click', (e) => { if (e.target.tagName === 'A') closeNav(); });
    navOverlay.addEventListener('click', closeNav);

    document.getElementById('feedback-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо за ваше сообщение! / Thank you for your message! / გმადლობთ შეტყობინებისთვის!');
        e.target.reset();
    });

    const initNavObserver = () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('#nav-menu a');
        if(navLinks.length === 0) return;
        const observerOptions = { rootMargin: '-50% 0px -50% 0px' };
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
                }
            });
        }, observerOptions);
        sections.forEach(section => sectionObserver.observe(section));
    };
    initNavObserver();

    const langButtons = document.querySelectorAll('.language-switcher button');
    const setLanguage = (lang) => {
        currentLang = lang;
        renderPage();
        langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
        document.documentElement.lang = lang;
        initNavObserver();
        initFadeInObserver();
    };
    langButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));

    const initFadeInObserver = () => {
        const fadeElements = document.querySelectorAll('.fade-in');
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        fadeElements.forEach(el => {
            el.classList.remove('visible');
            fadeObserver.observe(el);
        });
    };
    initFadeInObserver();
    
    const treeModal = document.getElementById('tree-modal');
    document.getElementById('map-grid').addEventListener('click', (e) => {
        const categoryItem = e.target.closest('.map-category-item');
        if (!categoryItem) return;

        const categoryId = categoryItem.dataset.categoryId;
        const globalCategoryData = getArraySafely(siteData.global.treeCategories).find(c => c.id === categoryId);
        const langCategoryData = siteData[currentLang].treeCategories[categoryId];
        
        if (globalCategoryData && langCategoryData) {
            document.getElementById('modal-tree-img').src = globalCategoryData.img;
            document.getElementById('modal-tree-name').textContent = langCategoryData.name;
            document.getElementById('modal-tree-desc').textContent = langCategoryData.desc;
            
            const fundsText = siteData[currentLang].nav.about === "About" ? 
                `Collected for ${globalCategoryData.sponsoredCount} of ${globalCategoryData.quantity} trees` :
                `Собрано на ${globalCategoryData.sponsoredCount} из ${globalCategoryData.quantity} деревьев`;
            document.getElementById('modal-tree-funds').textContent = fundsText;
            
            const progress = (globalCategoryData.quantity > 0) ? Math.min((globalCategoryData.sponsoredCount / globalCategoryData.quantity) * 100, 100) : 0;
            document.getElementById('modal-tree-progress').style.width = `${progress}%`;
            
            treeModal.classList.add('visible');
        }
    });

    const closeModal = () => treeModal.classList.remove('visible');
    document.getElementById('modal-close-btn').addEventListener('click', closeModal);
    treeModal.addEventListener('click', (e) => { if (e.target === treeModal) closeModal(); });

    document.getElementById('footer-copyright').addEventListener('click', () => {
        const password = prompt('Введите пароль для входа в админ-панель:');
        if (password === 'admin') {
            window.location.href = 'admin.html';
        }
        else if(password !== null) {
            alert('Неверный пароль.');
        }
    });
}

document.addEventListener('DOMContentLoaded', initializeSite);

let sliderInterval;
function initTreeSlider() {
    if (sliderInterval) clearInterval(sliderInterval);
    const slides = document.querySelectorAll('.trees-slider .slide');
    if (slides.length === 0) return;
    let currentSlide = 0;
    function showSlide(index) {
        slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    }
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    showSlide(0);
    sliderInterval = setInterval(nextSlide, 5000);
}