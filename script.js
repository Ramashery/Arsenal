// --- START OF FILE script.js ---

let siteData;
let currentLang = 'ru';
let countdownInterval;
let sliderInterval;

const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

function getArraySafely(potentialArray) {
    if (Array.isArray(potentialArray)) {
        return potentialArray;
    }
    console.warn('Ожидался массив, но получен другой тип. Возвращен пустой массив.', potentialArray);
    return [];
}

// ===== НОВАЯ ФУНКЦИЯ: ПРЕДЗАГРУЗКА ИЗОБРАЖЕНИЙ =====
function preloadImages(urls) {
    urls.forEach(url => {
        if (url) {
            const img = new Image();
            img.src = url;
        }
    });
}

function renderPage() {
    const data = siteData[currentLang];
    const globalData = siteData.global;

    const heroSection = document.querySelector('.hero');
    // ===== НАЧАЛО ИЗМЕНЕНИЯ =====
    if (globalData.heroBackgroundImageUrl && heroSection) {
        // Устанавливаем CSS-переменную, которая используется в style.css
        heroSection.style.setProperty('--hero-image', `url('${globalData.heroBackgroundImageUrl}')`);
    }
    // ===== КОНЕЦ ИЗМЕНЕНИЯ =====

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
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        countdownContainer.innerHTML = `
            <div class="countdown-item">
                <span class="countdown-number">${days}</span>
                <span class="countdown-label">${data.countdownLabels.days}</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${hours}</span>
                <span class="countdown-label">${data.countdownLabels.hours}</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${minutes}</span>
                <span class="countdown-label">${data.countdownLabels.minutes}</span>
            </div>
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
            if (key === 'hero.date') {
                value = `— ${value} —`;
            }
            if (el.tagName === 'P' || el.tagName === 'H4') {
                el.innerHTML = String(value).replace(/\n/g, '<br>');
            } else {
                el.textContent = value;
            }
        }
    });
    
    // ===== ИЗМЕНЕНИЕ: ЖЕСТКИЙ ПОРЯДОК НАВИГАЦИИ =====
    const navOrder = ['about', 'trees', 'events', 'help', 'materials', 'team', 'contacts'];
    const navMenu = document.getElementById('nav-menu');
    navMenu.innerHTML = navOrder.map(key => {
        const value = data.nav?.[key] || key.charAt(0).toUpperCase() + key.slice(1); // Используем ключ, если перевод отсутствует
        return `<li><a href="#${key}">${value}</a></li>`;
    }).join('');

    const aboutWrapper = document.getElementById('about-content-wrapper');
    aboutWrapper.innerHTML = getArraySafely(globalData.aboutItems).map(globalItem => {
        const langItem = data.about?.items?.[globalItem.id] || { title: '', text: '' };
        return `
            <div class="about-item">
                <h3>${langItem.title}</h3>
                <p>${langItem.text.replace(/\n/g, '<br>')}</p>
            </div>
        `;
    }).join('');

    const eventsWrapper = document.getElementById('events-timeline-wrapper');
    eventsWrapper.innerHTML = getArraySafely(globalData.eventsItems).map(globalItem => {
        const langItem = data.events?.items?.[globalItem.id] || { title: '', desc: '' };
        return `<div class="event-item fade-in"><h3>${langItem.title}</h3><p>${langItem.desc}</p></div>`;
    }).join('');

    const helpCardsWrapper = document.getElementById('help-cards-wrapper');
    helpCardsWrapper.innerHTML = getArraySafely(globalData.helpCards).map(globalCard => {
        const langCard = data.help?.cards?.[globalCard.id] || { title: '', desc: '', details: '', button: '' };
        return `
            <div class="card fade-in">
                <h3>${langCard.title}</h3>
                <p>${langCard.desc}</p>
                ${langCard.details ? `<p style="white-space: pre-wrap; overflow-wrap: break-word;">${langCard.details}</p>` : ''}
                ${langCard.button ? `<a href="#contacts" class="btn" style="margin-top:1rem">${langCard.button}</a>` : ''}
            </div>
        `;
    }).join('');
    
    const materialsWrapper = document.getElementById('materials-accordion-wrapper');
    materialsWrapper.innerHTML = getArraySafely(globalData.materialsItems).map(globalItem => {
        const langItem = data.materials?.items?.[globalItem.id] || { title: '', points: [] };
        return `
            <details class="material-item">
                <summary>${langItem.title}</summary>
                <div class="material-content"><ul>${getArraySafely(langItem.points).map(p => `<li>${p}</li>`).join('')}</ul></div>
            </details>
        `;
    }).join('');

    // ===== ИЗМЕНЕНИЕ: НОВАЯ ГЕНЕРАЦИЯ СЛАЙДОВ =====
    const sliderWrapper = document.getElementById('trees-slider-wrapper');
    sliderWrapper.innerHTML = getArraySafely(globalData.sliderItems).map((globalSlide, index) => {
        const langSlide = data.slider?.[globalSlide.id] || { title: '', desc: '' };
        return `
        <div class="slide ${index === 0 ? 'active' : ''}">
            <img src="${globalSlide.img}" alt="${langSlide.title}" class="slide-img">
            <div class="slide-content">
                <h3>${langSlide.title}</h3>
                <p>${langSlide.desc}</p>
            </div>
        </div>
    `}).join('');
    initTreeSlider();
    
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
    
    // ===== НАЧАЛО ИЗМЕНЕНИЙ: ОБНОВЛЯЕМ ЛОГИКУ ДЛЯ НОВОГО СЧЁТЧИКА =====
    const progressFill = document.getElementById('progress-fill');
    const progressCurrent = document.getElementById('progress-current');
    const progressTotal = document.getElementById('progress-total');

    if (progressFill && progressCurrent && progressTotal) {
        setTimeout(() => {
             const progressPercentage = totalTrees > 0 ? (totalSponsored / totalTrees) * 100 : 0;
             progressFill.style.width = `${progressPercentage}%`;
             progressCurrent.textContent = totalSponsored;
             progressTotal.textContent = totalTrees;
        }, 100);
    }
    // ===== КОНЕЦ ИЗМЕНЕНИЙ =====
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
            
            // ===== ИЗМЕНЕНИЕ: ВЫЗОВ ПРЕДЗАГРУЗКИ =====
            const imageUrls = [
                siteData.global.heroBackgroundImageUrl,
                ...getArraySafely(siteData.global.sliderItems).map(slide => slide.img),
                ...getArraySafely(siteData.global.teamMembers).map(member => member.img)
            ];
            preloadImages(imageUrls);
            
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
    
    // ===== НОВЫЙ КОД: ОБРАБОТЧИК СКРОЛЛА ДЛЯ ХЕДЕРА =====
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) { // Changed to 50 for earlier effect
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

document.addEventListener('DOMContentLoaded', initializeSite);

// ===== ПОЛНОСТЬЮ ПЕРЕПИСАННАЯ ФУНКЦИЯ =====
function initTreeSlider() {
    if (sliderInterval) clearInterval(sliderInterval);
    const slides = document.querySelectorAll('.slider-container .slide');
    const dotsContainer = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');

    if (slides.length <= 1) { // Hide nav if 1 or 0 slides
        if(prevBtn) prevBtn.style.display = 'none';
        if(nextBtn) nextBtn.style.display = 'none';
        if(dotsContainer) dotsContainer.style.display = 'none';
        return;
    } else {
        if(prevBtn) prevBtn.style.display = 'flex';
        if(nextBtn) nextBtn.style.display = 'flex';
        if(dotsContainer) dotsContainer.style.display = 'flex';
    }

    dotsContainer.innerHTML = '';
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'slider-dot';
        dot.addEventListener('click', () => {
            showSlide(index);
            resetInterval();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    function resetInterval() {
        clearInterval(sliderInterval);
        sliderInterval = setInterval(nextSlide, 7000);
    }

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });
    
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    showSlide(0);
    sliderInterval = setInterval(nextSlide, 7000); // Увеличил интервал
}