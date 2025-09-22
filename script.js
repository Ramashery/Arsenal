// --- НАЧАЛО ДИАГНОСТИЧЕСКОГО КОДА ---

async function initializeSite() {
    // --- Тест 1: Проверка, что скрипт вообще запускается ---
    alert("ТЕСТ 1: Скрипт запущен!");

    const loaderOverlay = document.getElementById('loader-overlay');
    const loaderError = document.getElementById('loader-error');
    const loaderSpinner = document.querySelector('.loader-spinner');
    const loaderText = document.querySelector('.loader-text');

    try {
        // --- Тест 2: Проверка импорта и инициализации Firebase ---
        alert("ТЕСТ 2: Пытаюсь подключиться к Firebase...");
        const { getFirestore, doc, getDoc } = await import("https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js");
        
        if (!window.firebaseApp || !window.firebaseApp.app) {
            throw new Error("Firebase App не инициализирован. Проверьте HTML-файл.");
        }
        
        const { app } = window.firebaseApp;
        const db = getFirestore(app);
        alert("ТЕСТ 2 УСПЕШЕН: Firebase подключен.");

        // --- Тест 3: Проверка получения документа из базы ---
        alert("ТЕСТ 3: Запрашиваю данные из content/main...");
        const contentRef = doc(db, "content", "main");
        const docSnap = await getDoc(contentRef);
        alert("ТЕСТ 3 УСПЕШЕН: Ответ от Firebase получен.");


        // --- Тест 4: Проверка, есть ли данные в документе ---
        if (docSnap.exists()) {
            siteData = docSnap.data();
            alert("ТЕСТ 4 УСПЕШЕН: Данные в документе НАЙДЕНЫ!");
            
            // Посмотрим, что именно пришло. Может быть много текста.
            alert("ДАННЫЕ ПОЛУЧЕНЫ:\n\n" + JSON.stringify(siteData).substring(0, 400) + "...");
            
            renderPage();

            loaderOverlay.style.opacity = '0';
            setTimeout(() => {
                loaderOverlay.style.display = 'none';
            }, 500);

        } else {
            // Если документ не найден
            alert("ТЕСТ 4 ОШИБКА: Документ 'main' в коллекции 'content' НЕ НАЙДЕН!");
            throw new Error("Документ 'main' в Firebase не найден.");
        }
    } catch (error) {
        // --- Если на любом этапе произошла ошибка, мы увидим это сообщение ---
        alert("КРИТИЧЕСКАЯ ОШИБКА:\n\n" + error.message);
        
        console.error("Критическая ошибка при загрузке данных из Firebase:", error);
        
        loaderSpinner.style.display = 'none';
        loaderText.style.display = 'none';
        loaderError.style.display = 'block';
    }

    // Оставшаяся логика инициализации (обработчики событий)
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
// --- КОНЕЦ ДИАГНОСТИЧЕСКОГО КОДА ---