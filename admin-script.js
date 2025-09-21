// --- START OF FILE admin-script.js ---

// НОВАЯ СТРУКТУРА ДАННЫХ ДЛЯ SLIDER И TEAM
const defaultSiteData = {
    global: {
        heroBackgroundImageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80",
        socials: {
            instagram: "https://instagram.com",
            telegram: "https://telegram.org",
            email: "mailto:example@arsenalgarden.com"
        },
        mapIframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.313530545299!2d44.8065597766691!3d41.7052150712621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!0x40440cd79be5eab1%3A0xf9d168b4f8b52bd!2sArsenal%20Mountain!5e0!3m2!1sen!2sge",
        eventDate: "2025-10-19",
        eventTime: "12:00",
        treeCategories: [
            { id: 'almond', quantity: 10, costPerTree: 50, sponsoredCount: 7, img: 'https://images.unsplash.com/photo-1615485500608-2f6c6f2a0135?auto=format&fit=crop&w=400&q=80' },
            { id: 'quince', quantity: 8, costPerTree: 50, sponsoredCount: 8, img: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=400&q=80' },
            { id: 'pomegranate', quantity: 12, costPerTree: 55, sponsoredCount: 5, img: 'https://images.unsplash.com/photo-1627324035919-5b58332a67e1?auto=format&fit=crop&w=400&q=80' },
            { id: 'sumac', quantity: 10, costPerTree: 45, sponsoredCount: 3, img: 'https://images.unsplash.com/photo-1570481662006-a3a1374699d8?auto=format&fit=crop&w=400&q=80' },
            { id: 'pistachio', quantity: 10, costPerTree: 60, sponsoredCount: 10, img: 'https://images.unsplash.com/photo-1544787219-7f47ccb5a8c9?auto=format&fit=crop&w=400&q=80' },
            { id: 'cypress', quantity: 1, costPerTree: 100, sponsoredCount: 1, img: 'https://images.unsplash.com/photo-1596461404969-9d24c3fdd0c4?auto=format&fit=crop&w=400&q=80' },
        ],
        // ИЗМЕНЕНИЕ: Глобальная часть для слайдера
        sliderItems: [
            { id: "slide_1", img: "https://images.unsplash.com/photo-1615485500608-2f6c6f2a0135?auto=format&fit=crop&w=1200&q=80" },
            { id: "slide_2", img: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=1200&q=80" },
            { id: "slide_3", img: "https://images.unsplash.com/photo-1597834377643-2e3f6e7e0e32?auto=format&fit=crop&w=1200&q=80" },
            { id: "slide_4", img: "https://images.unsplash.com/photo-1597848212620-4f5bb2a24c34?auto=format&fit=crop&w=1200&q=80" },
            { id: "slide_5", img: "https://images.unsplash.com/photo-1627324035919-5b58332a67e1?auto=format&fit=crop&w=1200&q=80" },
            { id: "slide_6", img: "https://images.unsplash.com/photo-1570481662006-a3a1374699d8?auto=format&fit=crop&w=1200&q=80" },
            { id: "slide_7", img: "https://images.unsplash.com/photo-1544787219-7f47ccb5a8c9?auto=format&fit=crop&w=1200&q=80" },
            { id: "slide_8", img: "https://images.unsplash.com/photo-1596461404969-9d24c3fdd0c4?auto=format&fit=crop&w=1200&q=80" },
        ],
        // ИЗМЕНЕНИЕ: Глобальная часть для команды
        teamMembers: [
            { id: "member_1", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" },
            { id: "member_2", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=300&q=80" },
            { id: "member_3", img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db1604?auto=format&fit=crop&w=300&q=80" },
            { id: "member_4", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80" },
        ]
    },
    ru: {
        nav: { about: "О проекте", trees: "Деревья", events: "События", help: "Поддержать", materials: "Материалы", team: "Команда", contacts: "Контакты" },
        hero: { title: "Arsenal Garden", subtitle: "Сажаем сад на Арсенальной горе", date: "19 октября 2025 года, воскресенье", button: "Узнать больше" },
        about: {
            title: "О проекте",
            items: [
                { title: "Место", text: "Арсенальная гора — это 70 гектаров природы в сердце Тбилиси. В 1990-е годы, во времена трудностей, многие деревья здесь были вырублены, и гора утратила часть своей зелени. С тех пор она остаётся диким пространством — местом прогулок, тишины и встреч с природой.\n\nСегодня Арсенальная гора хранит память об утраченных деревьях и одновременно открывает новое будущее. Здесь может появиться сад — живое пространство для людей и для города. Каждое новое дерево возвращает горе силу, а нам — возможность почувствовать её красоту по-новому." },
                { title: "Наше видение", text: "Мы верим, что Арсенальная гора может стать местом силы — не только природным, но и культурным. Здесь мы создаём пространство, где природа, искусство и люди соединяются. Каждое посаженное дерево — шаг к саду, который живёт вместе с городом." },
                { title: "Сад как ленд-арт", text: "Мы видим сад не только как зелёное пространство, но и как художественный жест. Его форма и структура будут напоминать, что природа может быть искусством, а искусство — частью природы. Сад будет меняться с сезонами, раскрываясь то цветением, то красками осени, и становиться живым произведением, созданным вместе с людьми и для людей." },
                { title: "Сообщество", text: "Для нас важно не только, какие деревья растут, но и кто их сажает. Мы объединяем соседей, друзей, гостей Тбилиси и всех, кто хочет заботиться о природе. Сад становится пространством встреч и общего дела, где каждый оставляет свой след." },
                { title: "Экология", text: "Каждое дерево — это вклад в воздух, в почву, в климат города. Мы возвращаем Арсенальной горе зелень, которая когда-то здесь была. Это маленький шаг для Тбилиси, но часть большой заботы о планете: мы выбираем жизнь и рост вместо пустоты." }
            ]
        },
        // ИЗМЕНЕНИЕ: Языковая часть для слайдера (теперь объект)
        slider: {
            "slide_1": { title: "Миндаль", desc: "Первым встречает весну бело-розовым облаком цветов." },
            "slide_2": { title: "Айва и яблоня", desc: "Продолжают цветение в апреле, наполняя сад нежными оттенками." },
            "slide_3": { title: "Павловния", desc: "В начале лета раскрывается фиолетовыми колокольчиками." },
            "slide_4": { title: "Тамарикс", desc: "Добавляет лёгкие розовые перья в июне." },
            "slide_5": { title: "Гранат", desc: "Загорается красными цветами и плодами в середине лета." },
            "slide_6": { title: "Скумпия", desc: "Создаёт «дымчатые облака» и вспыхивает осенью красными листьями." },
            "slide_7": { title: "Фисташка", desc: "Уходит в золотисто-оранжевую гамму в октябре." },
            "slide_8": { title: "Кипарис", desc: "Остаётся вечнозелёным символом устойчивости и центра сада." }
        },
        events: {
            title: "События",
            items: [
                { title: "Экскурсии по горе", desc: "Каждую субботу мы приглашаем на прогулку по Арсенальной горе. Это возможность увидеть дикий уголок Тбилиси, узнать о его истории и природе, а также почувствовать, каким живым может быть это пространство. Напишите, если хотите принять в этом участие." },
                { title: "Прошлые ивенты", desc: "За последние два года мы провели здесь пять больших событий: музыкальные выступления под открытым небом, выставки и перформансы. Эти встречи показали, что Арсенальная гора может быть местом культуры и вдохновения. Как это проходило можно посмотреть у нас в инстаграме." },
                { title: "Субботники", desc: "Мы верим, что забота о месте начинается с маленьких шагов. В прошлом году мы организовали три больших субботника: вместе убирали мусор, расчищали тропинки и возвращали жизни уголкам горы. Для нас это не только работа, но и способ быть сообществом." }
            ]
        },
        help: {
            title: "Как помочь",
            intro: "Arsenal Garden растёт благодаря людям. У каждого есть возможность стать частью этого сада — выбрать свой способ поддержки и вложить в него частичку себя.",
            cards: [
                { id: 'money', title: "Деньгами", desc: "Один саженец стоит примерно 50 GEL. Каждое пожертвование — это новое дерево, которое будет расти на Арсенальной горе.", details: "Credo bank\nGE38CD0360000050136558\nAleksandr Savin\n\nОзон банк (для российских карт)\n+79296777333\n\nКрипто-кошелёк (TRC20)\nTFkojYpj518hR7NuwNdtCz5o8UTMBbwSrV", button: "" },
                { id: 'volunteer', title: "Волонтёрством", desc: "Можно прийти на посадку, помочь ухаживать за деревьями, фотографировать или освещать проект в медиа. Любая помощь делает сад живым.", details: "", button: "Связаться с нами" },
                { id: 'partner', title: "Партнёрством", desc: "Мы открыты к сотрудничеству с НКО, бизнесом и медиа. Вместе мы можем придать проекту новый масштаб и силу.", details: "", button: "Обсудить сотрудничество" }
            ]
        },
        map: {
            title: "Интерактивная карта сада",
            desc: "Подсвеченные деревья, когда на них собраны средства.",
            goal: "Цель: {count} деревьев",
            transparency: "Для прозрачности мы ведём таблицу со всеми переводами. Так каждый может убедиться в том, что деньги учтены в общем сборе."
        },
        materials: {
            title: "Материалы",
            intro: "Мы собираем знания и вдохновение о городской экологии, урбанистике и искусстве.",
            items: [
                { title: "Природа и экология", points: ["Почему зелёные оазисы снижают температуру в городе.", "Как деревья влияют на качество воздуха и здоровье горожан.", "Грузинские примеры восстановления зелёных территорий (Дигомские луга, парк Лиси и др.)."] },
                { title: "Урбанистика", points: ["Освоение заброшенных пространств: как «ничейные земли» могут стать общественными парками.", "Истории трансформации пустырей в городах (Берлин, Тбилиси, Нью-Йорк).", "Роль сообществ: почему парки рождаются «снизу»."] },
                { title: "Искусство и ленд-арт", points: ["Что такое ленд-арт: примеры из мира и из Грузии.", "Природа как пространство искусства: от Роберта Смитсона до современных эко-проектов.", "Почему сад может быть не только благоустройством, но и художественным высказыванием."] },
            ]
        },
        // ИЗМЕНЕНИЕ: Языковая часть для команды
        team: {
            title: "Команда",
            members: {
                "member_1": { name: "Александр Савин", role: "Основатель проекта" },
                "member_2": { name: "Мария Иванова", role: "Координатор волонтеров" },
                "member_3": { name: "Нино Циклаури", role: "Ландшафтный дизайнер" },
                "member_4": { name: "Давид Беридзе", role: "PR-менеджер" },
            }
        },
        contacts: {
            title: "Контакты",
            heading: "Свяжитесь с нами",
            desc: "Если у вас есть вопросы или предложения, напишите нам — мы всегда открыты к общению.",
            locationName: "Арсенальная гора",
            locationAddress: "Тбилиси, Грузия",
            mapLocation: "Мы находимся здесь",
            form: { title: "Форма обратной связи", name: "Имя", email: "Email", message: "Сообщение", button: "Отправить" }
        },
        footer: { motto: "Сажаем сад на Арсенальной горе." },
        treeCategories: {
            almond: { name: 'Миндаль', desc: 'Первым встречает весну бело-розовым облаком цветов, символизируя новое начало.' },
            quince: { name: 'Айва', desc: 'Продолжает цветение в апреле, наполняя сад нежными оттенками и ароматом.' },
            pomegranate: { name: 'Гранат', desc: 'Загорается красными цветами и плодами, символ жизни и плодородия.' },
            sumac: { name: 'Скумпия', desc: 'Создаёт «дымчатые облака» и вспыхивает осенью красными листьями.' },
            pistachio: { name: 'Фисташка', desc: 'Уходит в золотисто-оранжевую гамму в октябре, даря тепло.' },
            cypress: { name: 'Кипарис', desc: 'Вечнозелёный символ стойкости и центральный элемент нашего сада.' }
        },
        countdownLabels: { days: "Дней", hours: "Часов", minutes: "Минут", seconds: "Секунд" }
    },
    en: {
        nav: { about: "About", trees: "Trees", events: "Events", help: "Support", materials: "Materials", team: "Team", contacts: "Contacts" },
        hero: { title: "Arsenal Garden", subtitle: "Planting a garden on Arsenal Mountain", date: "October 19, 2025, Sunday", button: "Learn More" },
        about: {
            title: "About the Project",
            items: [
                 { title: "The Place", text: "Arsenal Mountain is 70 hectares of nature in the heart of Tbilisi. In the 1990s, during difficult times, many trees here were cut down, and the mountain lost part of its greenery. Since then, it has remained a wild space — a place for walks, silence, and encounters with nature.\n\nToday, Arsenal Mountain holds the memory of the lost trees while simultaneously opening up a new future. A garden can emerge here — a living space for people and the city. Each new tree restores the mountain's strength and gives us the opportunity to experience its beauty anew." },
                 { title: "Our Vision", text: "We believe that Arsenal Mountain can become a place of power — not only natural but also cultural. Here, we are creating a space where nature, art, and people connect. Every tree planted is a step towards a garden that lives with the city." },
                 { title: "The Garden as Land Art", text: "We see the garden not just as a green space, but as an artistic gesture. Its form and structure will remind us that nature can be art, and art can be part of nature. The garden will change with the seasons, revealing itself through blossoms or autumn colors, becoming a living work of art created with and for people." },
                 { title: "Community", text: "For us, it's not just about what trees grow, but who plants them. We unite neighbors, friends, guests of Tbilisi, and everyone who wants to care for nature. The garden becomes a space for meetings and common purpose, where everyone leaves their mark." },
                 { title: "Ecology", text: "Every tree is a contribution to the air, the soil, and the city's climate. We are returning the greenery that once was here to Arsenal Mountain. It's a small step for Tbilisi, but part of a larger care for the planet: we choose life and growth over emptiness." },
            ]
        },
        slider: {
            "slide_1": { title: "Almond", desc: "The first to greet spring with a white-pink cloud of flowers." },
            "slide_2": { title: "Quince & Apple", desc: "Continue to bloom in April, filling the garden with delicate shades." },
            "slide_3": { title: "Paulownia", desc: "Opens with purple bells at the beginning of summer." },
            "slide_4": { title: "Tamarisk", desc: "Adds light pink feathers in June." },
            "slide_5": { title: "Pomegranate", desc: "Lights up with red flowers and fruits in mid-summer." },
            "slide_6": { title: "Sumac", desc: "Creates 'smoke clouds' and bursts with red leaves in autumn." },
            "slide_7": { title: "Pistachio", desc: "Transitions to a golden-orange palette in October." },
            "slide_8": { title: "Cypress", desc: "Remains an evergreen symbol of resilience and the garden's center." }
        },
        events: {
            title: "Events",
            items: [
                { title: "Mountain Tours", desc: "Every Saturday, we invite you for a walk on Arsenal Mountain. It's an opportunity to see a wild corner of Tbilisi, learn about its history and nature, and feel how alive this space can be. Write to us if you want to participate." },
                { title: "Past Events", desc: "Over the last two years, we held five major events here: open-air music performances, exhibitions, and performances. These gatherings showed that Arsenal Mountain can be a place of culture and inspiration. You can see how it went on our Instagram." },
                { title: "Clean-up Days", desc: "We believe that caring for a place begins with small steps. Last year, we organized three major clean-ups: together we removed trash, cleared paths, and brought life back to corners of the mountain. For us, it's not just work, but a way of being a community." }
            ]
        },
        help: {
            title: "How to Help",
            intro: "Arsenal Garden grows thanks to people. Everyone has the opportunity to become part of this garden—choose your way to support it and contribute a piece of yourself.",
            cards: [
                { id: 'money', title: "With Money", desc: "One seedling costs about 50 GEL. Every donation is a new tree that will grow on Arsenal Mountain.", details: "Credo bank\nGE38CD0360000050136558\nAleksandr Savin\n\nOzon bank (for Russian cards)\n+79296777333\n\nCrypto-wallet (TRC20)\nTFkojYpj518hR7NuwNdtCz5o8UTMBbwSrV", button: "" },
                { id: 'volunteer', title: "By Volunteering", desc: "You can come to plant, help care for the trees, take photos, or cover the project in the media. Any help makes the garden alive.", details: "", button: "Contact Us" },
                { id: 'partner', title: "Through Partnership", desc: "We are open to collaboration with NGOs, businesses, and the media. Together, we can give the project a new scale and strength.", details: "", button: "Discuss Partnership" }
            ]
        },
        map: {
            title: "Interactive Garden Map",
            desc: "Sponsored trees are highlighted when funds are collected for them.",
            goal: "Goal: {count} trees",
            transparency: "For transparency, we maintain a table with all transfers. This way, everyone can be sure that the money is accounted for in the general collection."
        },
        materials: {
            title: "Materials",
            intro: "We gather knowledge and inspiration about urban ecology, urbanism, and art.",
            items: [
                { title: "Nature and Ecology", points: ["Why green oases lower the temperature in the city.", "How trees affect air quality and citizens' health.", "Georgian examples of green area restoration (Digomi Meadows, Lisi Park, etc.)."] },
                { title: "Urbanism", points: ["Reclaiming abandoned spaces: how 'no man's lands' can become public parks.", "Stories of wasteland transformation in cities (Berlin, Tbilisi, New York).", "The role of communities: why parks are born 'from the bottom up'."] },
                { title: "Art and Land Art", points: ["What is land art: examples from around the world and from Georgia.", "Nature as a space for art: from Robert Smithson to contemporary eco-projects.", "Why a garden can be not just landscaping, but also an artistic statement."] }
            ]
        },
        team: {
            title: "Our Team",
            members: {
                "member_1": { name: "Aleksandr Savin", role: "Project Founder" },
                "member_2": { name: "Maria Ivanova", role: "Volunteer Coordinator" },
                "member_3": { name: "Nino Tsiklauri", role: "Landscape Designer" },
                "member_4": { name: "David Beridze", role: "PR Manager" },
            }
        },
        contacts: {
            title: "Contacts",
            heading: "Get in Touch",
            desc: "If you have questions or suggestions, write to us — we are always open to communication.",
            locationName: "Arsenal Mountain",
            locationAddress: "Tbilisi, Georgia",
            mapLocation: "We are here",
            form: { title: "Feedback Form", name: "Name", email: "Email", message: "Message", button: "Send" }
        },
        footer: { motto: "Planting a garden on Arsenal Mountain." },
        treeCategories: {
            almond: { name: 'Almond', desc: 'The first to greet spring with a white-pink cloud of flowers, symbolizing a new beginning.' },
            quince: { name: 'Quince', desc: 'Continues to bloom in April, filling the garden with delicate shades and fragrance.' },
            pomegranate: { name: 'Pomegranate', desc: 'Lights up with red flowers and fruits, a symbol of life and fertility.' },
            sumac: { name: 'Sumac', desc: 'Creates "smoke clouds" and bursts with red leaves in autumn.' },
            pistachio: { name: 'Pistachio', desc: 'Transitions to a golden-orange palette in October, bringing warmth.' },
            cypress: { name: 'Cypress', desc: 'An evergreen symbol of resilience and the central element of our garden.' }
        },
        countdownLabels: { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" }
    },
    ge: {
        nav: { about: "პროექტის შესახებ", trees: "ხეები", events: "ღონისძიებები", help: "მხარდაჭერა", materials: "მასალები", team: "გუნდი", contacts: "კონტაქტები" },
        hero: { title: "არსენალის ბაღი", subtitle: "ჩვენ ვრგავთ ბაღს არსენალის მთაზე", date: "2025 წლის 19 ოქტომბერი, კვირა", button: "გაიგეთ მეტი" },
        about: {
            title: "პროექტის შესახებ",
            items: [
                { title: "ადგილი", text: "არსენალის მთა — 70 ჰექტარი ბუნება თბილისის გულში. 1990-იან წლებში, რთულ დროს, აქ ბევრი ხე მოიჭრა და მთამ დაკარგა თავისი სიმწვანის ნაწილი. მას შემდეგ ის რჩება ველურ სივრცედ — სასეირნო, სიჩუმისა და ბუნებასთან შეხვედრის ადგილი.\n\nდღეს არსენალის მთა ინახავს დაკარგული ხეების ხსოვნას და ამავდროულად ხსნის ახალ მომავალს. აქ შეიძლება გაჩნდეს ბაღი — ცოცხალი სივრცე ადამიანებისა და ქალაქისთვის. ყოველი ახალი ხე მთას ძალას უბრუნებს, ჩვენ კი — მისი სილამაზის ხელახლა შეგრძნების შესაძლებლობას." },
                { title: "ჩვენი ხედვა", text: "ჩვენ გვჯერა, რომ არსენალის მთა შეიძლება გახდეს ძალის ადგილი — არა მხოლოდ ბუნებრივი, არამედ კულტურულიც. აქ ჩვენ ვქმნით სივრცეს, სადაც ბუნება, ხელოვნება და ადამიანები ერთიანდებიან. ყოველი დარგული ხე — ნაბიჯია ბაღისკენ, რომელიც ქალაქთან ერთად ცოცხლობს." },
                { title: "ბაღი, როგორც ლენд-არტი", text: "ჩვენ ბაღს ვხედავთ არა მხოლოდ როგორც მწვანე სივრცეს, არამედ როგორც მხატვრულ ჟესტს. მისი ფორმა და სტრუქტურა შეგვახსენებს, რომ ბუნება შეიძლება იყოს ხელოვნება, ხოლო ხელოვნება — ბუნების ნაწილი. ბაღი სეზონების მიხედვით შეიცვლება, ხან ყვავილობით, ხან შემოდგომის ფერებით გამოვლინდება და გახდება ცოცხალი ნამუშევარი, შექმნილი ადამიანებთან ერთად და ადამიანებისთვის." },
                { title: "საზოგადოება", text: "ჩვენთვის მნიშვნელოვანია არა მხოლოდ ის, თუ რა ხეები იზრდება, არამედ ისიც, თუ ვინ რგავს მათ. ჩვენ ვაერთიანებთ მეზობლებს, მეგობრებს, თბილისის სტუმრებს და ყველას, ვისაც ბუნებაზე ზრუნვა სურს. ბაღი ხდება შეხვედრებისა და საერთო საქმის სივრცე, სადაც ყველა თავის კვალს ტოვებს." },
                { title: "ეკოლოგია", text: "ყოველი ხე — წვლილია ჰაერში, ნიადაგში, ქალაქის კლიმატში. ჩვენ არსენალის მთას ვუბრუნებთ სიმწვანეს, რომელიც ოდესღაც აქ იყო. ეს პატარა ნაბიჯია თბილისისთვის, მაგრამ პლანეტაზე ზრუნვის დიდი ნაწილის: ჩვენ ვირჩევთ სიცოცხლესა და ზრდას სიცარიელის ნაცვლად." },
            ]
        },
        slider: {
            "slide_1": { title: "ნუში", desc: "პირველი ხვდება გაზაფხულს თეთრი-ვარდისფერი ყვავილების ღრუბლით." },
            "slide_2": { title: "კომში და ვაშლი", desc: "აგრძელებენ ყვავილობას აპრილში და ბაღს ნაზი ფერებით ავსებენ." },
            "slide_3": { title: "პავლოვნია", desc: "ზაფხულის დასაწყისში იასამნისფერი ზარებით იშლება." },
            "slide_4": { title: "ივანის-ხე", desc: "ივნისში ღია ვარდისფერ ბუმბულებს ამატებს." },
            "slide_5": { title: "ბროწეული", desc: "ზაფხულის შუაში წითელი ყვავილებით და ნაყოფით ინთება." },
            "slide_6": { title: "სუმაკი", desc: "ქმნის „კვამლის ღრუბლებს“ და შემოდგომაზე წითელი ფოთლებით იფეთქებს." },
            "slide_7": { title: "ფისტა", desc: "ოქტომბერში ოქროსფერ-ნარინჯისფერ გამაში გადადის." },
            "slide_8": { title: "კვიპაროსი", desc: "რჩება მარადმწვანე სიმბოლოდ მდგრადობისა და ბაღის ცენტრისა." }
        },
        events: {
            title: "ღონისძიებები",
            items: [
                { title: "ექსკურსიები მთაზე", desc: "ყოველ შაბათს გეპატიჟებით არსენალის მთაზე სასეირნოდ. ეს არის შესაძლებლობა, ნახოთ თბილისის ველური კუთხე, გაიგოთ მისი ისტორია და ბუნება, და იგრძნოთ, რამდენად ცოცხალი შეიძლება იყოს ეს სივრცე. მოგვწერეთ, თუ გსურთ მონაწილეობა." },
                { title: "წინა ღონისძიებები", desc: "ბოლო ორი წლის განმავლობაში აქ ხუთი დიდი ღონისძიება ჩავატარეთ: მუსიკალური გამოსვლები ღია ცის ქვეშ, გამოფენები და პერფორმანსები. ამ შეხვედრებმა აჩენა, რომ არსენალის მთა შეიძლება იყოს კულტურისა და შთაგონების ადგილი. როგორ ჩაიარა, შეგიძლიათ ნახოთ ჩვენს ინსტაგრამზე." },
                { title: "შაბათობები", desc: "ჩვენ გვჯერა, რომ ადგილზე ზრუნვა პატარა ნაბიჯებით იწყება. გასულ წელს სამი დიდი შაბათობა მოვაწყვეთ: ერთად დავასუფთავეთ ნაგავი, გავწმინდეთ ბილიკები და დავუბრუნეთ სიცოცხლე მთის კუთხეებს. ჩვენთვის ეს არა მხოლოდ სამუშაოა, არამედ საზოგადოების ყოფნის საშუალებაც." }
            ]
        },
        help: {
            title: "როგორ დავეხმაროთ",
            intro: "არსენალის ბაღი ადამიანების წყალობით იზრდება. ყველას აქვს შესაძლებლობა, გახდეს ამ ბაღის ნაწილი — აირჩიოს მხარდაჭერის საკუთარი გზა და ჩადოს მასში საკუთარი წვლილი.",
            cards: [
                { id: 'money', title: "ფულით", desc: "ერთი ნერგი დაახლოებით 50 ლარი ღირს. ყოველი შემოწირულობა ახალი ხეა, რომელიც არსენალის მთაზე გაიზრდება.", details: "Credo bank\nGE38CD0360000050136558\nAleksandr Savin\n\nOzon bank (რუსული ბარათებისთვის)\n+79296777333\n\nკრიპტო-საფულე (TRC20)\nTFkojYpj518hR7NuwNdtCz5o8UTMBbwSrV", button: "" },
                { id: 'volunteer', title: "მოხალისეობით", desc: "შეგიძლიათ მოხვიდეთ დარგვაზე, დაეხმაროთ ხეების მოვლაში, გადაიღოთ ფოტოები ან გააშუქოთ პროექტი მედიაში. ნებისმიერი დახმარება ბაღს აცოცხლებს.", details: "", button: "დაგვიკავშირდით" },
                { id: 'partner', title: "პარტნიორობით", desc: "ჩვენ ღია ვართ თანამშრომლობისთვის არასამთავრობო ორგანიზაციებთან, ბიზნესთან და მედიასთან. ერთად შეგვიძლია პროექტს ახალი მასშტაბი და ძალა მივცეთ.", details: "", button: "განვიხილოთ პარტნიორობა" }
            ]
        },
        map: {
            title: "ბაღის ინტერაქტიული რუკა",
            desc: "დაფინანსებული ხეები ნაჩვენებია, როდესაც მათთვის თანხა შეგროვდება.",
            goal: "მიზანი: {count} ხე",
            transparency: "გამჭვირვალობისთვის, ჩვენ ვაწარმოებთ ყველა გადარიცხვის ცხრილს. ასე რომ, ყველას შეუძლია დარწმუნდეს, რომ ფული გათვალისწინებულია საერთო შეგროვებაში."
        },
        materials: {
            title: "მასალები",
            intro: "ჩვენ ვაგროვებთ ცოდნას და შთაგონებას ქალაქის ეკოლოგიის, ურბანისტიკისა და ხელოვნების შესახებ.",
            items: [
                { title: "ბუნება და ეკოლოგია", points: ["რატომ ამცირებენ მწვანე ოაზისები ქალაქში ტემპერატურას.", "როგორ მოქმედებს ხეები ჰაერის ხარისხსა და მოქალაქეების ჯანმრთელობაზე.", "საქართველოს მწვანე ტერიტორიების აღდგენის მაგალითები (დიღმის ჭალები, ლისის პარკი და ა.შ.)."] },
                { title: "ურბანისტიკა", points: ["მიტოვებული სივრცეების ათვისება: როგორ შეიძლება „არავის მიწები“ გახდეს საზოგადოებრივი პარკები.", "ქალაქებში უდაბნოების ტრანსფორმაციის ისტორიები (ბერლინი, თბილისი, ნიუ-იორკი).", "საზოგადოების როლი: რატომ იბადებიან პარკები „ქვემოდან“."] },
                { title: "ხელოვნება და ლენდ-არტი", points: ["რა არის ლენდ-არტი: მაგალითები მსოფლიოდან და საქართველოდან.", "ბუნება, როგორც ხელოვნების სივრცე: რობერტ სმითსონიდან თანამედროვე ეკო-პროექტებამდე.", "რატომ შეიძლება ბაღი იყოს არა მხოლოდ კეთილმოწყობა, არამედ მხატვრულ-გამოხატულებაც."] }
            ]
        },
        team: {
            title: "ჩვენი გუნდი",
            members: {
                "member_1": { name: "ალექსანდრე სავინი", role: "პროექტის დამფუძნებელი" },
                "member_2": { name: "მარია ივანოვა", role: "მოხალისეთა კოორდინატორი" },
                "member_3": { name: "ნინო წიკლაური", role: "ლანდშაფტის დიზაინერი" },
                "member_4": { name: "დავით ბერიძე", role: "პიარ მენეჯერი" },
            }
        },
        contacts: {
            title: "კონტაქტები",
            heading: "დაგვიკავშირდით",
            desc: "თუ გაქვთ კითხვები ან წინადადებები, მოგვწერეთ — ჩვენ ყოველთვის ღია ვართ კომუნიკაციისთვის.",
            locationName: "არსენალის მთა",
            locationAddress: "თბილისი, საქართველო",
            mapLocation: "ჩვენ აქ ვართ",
            form: { title: "უკუკავშირის ფორმა", name: "სახელი", email: "ელ.ფოსტა", message: "შეტყობინება", button: "გაგზავნა" }
        },
        footer: { motto: "ჩვენ ვრგავთ ბაღს არსენალის მთაზე." },
         treeCategories: {
            almond: { name: 'ნუში', desc: 'პირველი ხვდება გაზაფხულს თეთრი-ვარდისფერი ყვავილების ღრუბლით, რაც ახალი დასაწყისის სიმბოლოა.' },
            quince: { name: 'კომში', desc: 'აგრძელებს ყვავილობას აპრილში, ბაღს ნაზი ფერებითა და სურნელით ავსებს.' },
            pomegranate: { name: 'ბროწეული', desc: 'ინთება წითელი ყვავილებით და ნაყოფით, სიცოცხლისა და ნაყოფიერების სიმბოლო.' },
            sumac: { name: 'სუმაკი', desc: 'ქმნის „კვამლის ღრუბლებს“ და შემოდგომაზე წითელი ფოთლებით იფეთქებს.' },
            pistachio: { name: 'ფისტა', desc: 'ოქტომბერში ოქროსფერ-ნარინჯისფერ გამაში გადადის და სითბოს გვჩუქნის.' },
            cypress: { name: 'კვიპაროსი', desc: 'მარადმწვანე სიმბოლო მდგრადობისა და ჩვენი ბაღის ცენტრალური ელემენტი.' }
        },
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
    
    addAdminEventListeners();
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

    switch(sectionKey) {
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
             const aboutAddBtn = `<button class="admin-btn btn-add" data-action="add" data-path="about.items">Добавить блок</button>`;
             html += createBreadcrumbs(sectionKey, aboutAddBtn);
             html += renderLangTabs();
             html += `<div class="admin-card"><div class="admin-card-body">${createInput('Заголовок секции', 'about.title', data.about.title)}</div></div>`;
             html += data.about.items.map((item, index) => `
                <div class="admin-card" data-index="${index}">
                    <div class="admin-card-header">
                        <h4>Блок ${index + 1}: ${item.title}</h4>
                        <button class="admin-btn btn-delete" data-action="delete" data-path="about.items" data-index="${index}">Удалить</button>
                    </div>
                    <div class="admin-card-body">
                        ${createInput(`Заголовок блока`, `about.items.${index}.title`, item.title)}
                        ${createTextarea(`Текст блока`, `about.items.${index}.text`, item.text)}
                    </div>
                </div>`).join('');
            break;
        // ИЗМЕНЕНИЕ: Логика рендеринга для слайдера
        case 'slider':
            const sliderAddBtn = `<button class="admin-btn btn-add" data-action="add" data-path="sliderItems">Добавить слайд</button>`;
            html += createBreadcrumbs(sectionKey, sliderAddBtn);
            globalData.sliderItems.forEach((slide, index) => {
                const ruTitle = siteData.ru.slider[slide.id]?.title || '';
                html += `
                <div class="admin-card" data-index="${index}">
                    <div class="admin-card-header">
                        <h4>Слайд ${index + 1}: ${ruTitle}</h4>
                        <button class="admin-btn btn-delete" data-action="delete" data-path="sliderItems" data-index="${index}">Удалить</button>
                    </div>
                    <div class="admin-card-body">
                        <h5 style="color: var(--admin-text-muted);">Глобальные настройки</h5>
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
            const eventsAddBtn = `<button class="admin-btn btn-add" data-action="add" data-path="events.items">Добавить событие</button>`;
            html += createBreadcrumbs(sectionKey, eventsAddBtn);
            html += renderLangTabs();
            html += `<div class="admin-card"><div class="admin-card-body">${createInput('Заголовок секции', 'events.title', data.events.title)}</div></div>`;
            html += data.events.items.map((event, index) => `
                <div class="admin-card" data-index="${index}">
                    <div class="admin-card-header">
                        <h4>Событие ${index + 1}: ${event.title}</h4>
                        <button class="admin-btn btn-delete" data-action="delete" data-path="events.items" data-index="${index}">Удалить</button>
                    </div>
                    <div class="admin-card-body">
                        ${createInput('Заголовок события', `events.items.${index}.title`, event.title)}
                        ${createTextarea('Описание события', `events.items.${index}.desc`, event.desc)}
                    </div>
                </div>`).join('');
            break;
        case 'help':
            const helpAddBtn = `<button class="admin-btn btn-add" data-action="add" data-path="help.cards">Добавить карточку</button>`;
            html += createBreadcrumbs(sectionKey, helpAddBtn);
            html += renderLangTabs();
            html += `<div class="admin-card"><div class="admin-card-body">
                        ${createInput('Заголовок секции', 'help.title', data.help.title)}
                        ${createTextarea('Вступительный текст', 'help.intro', data.help.intro)}
                    </div></div>`;
            
            html += data.help.cards.map((card, index) => `
                <div class="admin-card" data-index="${index}">
                    <div class="admin-card-header">
                        <h4>Карточка: ${card.title}</h4>
                        <button class="admin-btn btn-delete" data-action="delete" data-path="help.cards" data-index="${index}">Удалить</button>
                    </div>
                    <div class="admin-card-body">
                        ${createInput('ID (уникальный, на английском)', `help.cards.${index}.id`, card.id)}
                        ${createInput('Заголовок карточки', `help.cards.${index}.title`, card.title)}
                        ${createTextarea('Описание карточки', `help.cards.${index}.desc`, card.desc)}
                        ${createTextarea('Детали (например, реквизиты, с переносами строк)', `help.cards.${index}.details`, card.details)}
                        ${createInput('Текст кнопки', `help.cards.${index}.button`, card.button)}
                    </div>
                </div>
            `).join('');
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
            globalData.treeCategories.forEach((category, index) => {
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
            const materialsAddBtn = `<button class="admin-btn btn-add" data-action="add" data-path="materials.items">Добавить материал</button>`;
            html += createBreadcrumbs(sectionKey, materialsAddBtn);
            html += renderLangTabs();
            html += `<div class="admin-card"><div class="admin-card-body">${createInput('Заголовок секции', 'materials.title', data.materials.title)}</div></div>`;
            html += `<div class="admin-card"><div class="admin-card-body">${createTextarea('Вступительный текст', 'materials.intro', data.materials.intro)}</div></div>`;
            
            html += data.materials.items.map((material, index) => `
                <div class="admin-card" data-index="${index}">
                    <div class="admin-card-header">
                        <h4>Материал ${index + 1}: ${material.title}</h4>
                        <button class="admin-btn btn-delete" data-action="delete" data-path="materials.items" data-index="${index}">Удалить</button>
                    </div>
                    <div class="admin-card-body">
                        ${createInput('Заголовок материала', `materials.items.${index}.title`, material.title)}
                        ${createTextarea('Пункты (каждый с новой строки)', `materials.items.${index}.points`, material.points.join('\n'))}
                    </div>
                </div>`).join('');
            break;
        // ИЗМЕНЕНИЕ: Логика рендеринга для команды
        case 'team':
            const teamAddBtn = `<button class="admin-btn btn-add" data-action="add" data-path="teamMembers">Добавить сотрудника</button>`;
            html += createBreadcrumbs(sectionKey, teamAddBtn);
            html += `<div class="admin-card"><div class="admin-card-body">${renderLangTabs()}${createInput('Заголовок секции', `team.title`, data.team.title)}</div></div>`;
            
            globalData.teamMembers.forEach((member, index) => {
                 const ruName = siteData.ru.team.members[member.id]?.name || '';
                 html += `
                <div class="admin-card" data-index="${index}">
                    <div class="admin-card-header">
                        <h4>Сотрудник: ${ruName}</h4>
                        <button class="admin-btn btn-delete" data-action="delete" data-path="teamMembers" data-index="${index}">Удалить</button>
                    </div>
                    <div class="admin-card-body">
                        <h5 style="color: var(--admin-text-muted);">Глобальные настройки</h5>
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
            html += `
            <div class="admin-card">
                <div class="admin-card-header"><h4>Контактная информация</h4></div>
                <div class="admin-card-body">
                    ${createInput('Заголовок', 'contacts.heading', data.contacts.heading)}
                    ${createTextarea('Описание', 'contacts.desc', data.contacts.desc)}
                    ${createInput('Название локации', 'contacts.locationName', data.contacts.locationName)}
                    ${createInput('Адрес локации', 'contacts.locationAddress', data.contacts.locationAddress)}
                    ${createInput('Заголовок карты', 'contacts.mapLocation', data.contacts.mapLocation)}
                </div>
            </div>`;
            html += `
            <div class="admin-card">
                <div class="admin-card-header"><h4>Форма обратной связи</h4></div>
                <div class="admin-card-body">
                    ${createInput('Заголовок формы', 'contacts.form.title', data.contacts.form.title)}
                    ${createInput('Лейбл для имени', 'contacts.form.name', data.contacts.form.name)}
                    ${createInput('Лейбл для email', 'contacts.form.email', data.contacts.form.email)}
                    ${createInput('Лейбл для сообщения', 'contacts.form.message', data.contacts.form.message)}
                    ${createInput('Текст кнопки', 'contacts.form.button', data.contacts.form.button)}
                </div>
            </div>`;
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
    const saveBtn = document.getElementById('admin-save-btn');
    saveBtn.disabled = true;
    saveBtn.textContent = 'Сохранение в Firebase...';

    try {
        const { getFirestore, doc, setDoc } = await import("https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js");
        if (!window.firebaseApp || !window.firebaseApp.app) {
            throw new Error("Firebase App не инициализировано. Проверьте HTML-файл.");
        }
        const { app } = window.firebaseApp;
        const db = getFirestore(app);

        const tempSiteData = deepCopy(siteData);
        const oldCategoryIds = tempSiteData.global.treeCategories.map(c => c.id);
        let newCategoryIds = [];

        document.querySelectorAll('#admin-content-wrapper input, #admin-content-wrapper textarea').forEach(input => {
            if (!input.id) return;
            const keys = input.id.split('.');
            if (keys.includes('treeCategories') && keys[keys.length -1] === 'id') {
                 newCategoryIds[keys[2]] = input.value;
            }
            let current;
            // ИЗМЕНЕНИЕ: Обрабатываем slider и team как глобальные секции
            if (keys[0] === 'global' || ['trees', 'slider', 'team'].includes(currentAdminSection)) {
                current = tempSiteData;
            } else {
                current = tempSiteData[currentAdminLang];
            }
            for (let i = 0; i < keys.length - 1; i++) {
                if (typeof current[keys[i]] === 'undefined') {
                    current[keys[i]] = isNaN(parseInt(keys[i+1], 10)) ? {} : [];
                }
                current = current[keys[i]];
            }
            if(keys.includes('points')) {
                current[keys[keys.length - 1]] = input.value.split('\n').filter(p => p.trim() !== '');
            } else {
               let originalValue;
                try {
                    let searchObj = siteData;
                    let searchKeys = input.id.split('.');
                    // ИЗМЕНЕНИЕ: Корректный поиск оригинального значения для глобальных секций
                    if (keys[0] !== 'global' && !['trees', 'slider', 'team'].includes(currentAdminSection)) {
                        searchObj = siteData[currentAdminLang];
                    }
                     originalValue = searchKeys.reduce((obj, k) => obj && obj[k], searchObj);
                } catch (e) {
                    originalValue = undefined;
                }
               if (typeof originalValue === 'number' || input.type === 'number') {
                    current[keys[keys.length - 1]] = parseFloat(input.value) || 0;
                } else {
                    current[keys[keys.length - 1]] = input.value;
                }
            }
        });

        newCategoryIds.forEach((newId, index) => {
            const oldId = oldCategoryIds[index];
            if (newId && oldId && newId !== oldId) {
                ['ru', 'en', 'ge'].forEach(lang => {
                    if (tempSiteData[lang].treeCategories[oldId]) {
                        tempSiteData[lang].treeCategories[newId] = tempSiteData[lang].treeCategories[oldId];
                        delete tempSiteData[lang].treeCategories[oldId];
                    }
                });
            }
        });
        siteData = tempSiteData;

        const contentRef = doc(db, "content", "main");
        await setDoc(contentRef, siteData);
        
        localStorage.setItem('savedSiteData', JSON.stringify(siteData));
        isDirty = false;
        adminNotifications.show('Данные успешно сохранены в Firebase!', 'success');

    } catch (error) {
        console.error("Ошибка сохранения в Firebase:", error);
        adminNotifications.show('Ошибка при сохранении в Firebase. См. консоль.', 'error');
    } finally {
        saveBtn.disabled = false;
        saveBtn.textContent = 'Сохранить';
    }
}


function addAdminEventListeners() {
    const adminNav = document.getElementById('admin-nav-menu');
    
    adminNav.addEventListener('click', (e) => {
        const button = e.target.closest('button[data-section]');
        if (button) {
            e.preventDefault();
            currentAdminSection = button.dataset.section;
            renderAdminPanel();
            if (window.innerWidth <= 992) {
                document.getElementById('admin-nav-menu').classList.remove('open');
                document.getElementById('admin-overlay').classList.remove('active');
            }
        }
    });

    document.querySelector('#admin-content-wrapper').addEventListener('click', (e) => {
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
                const adminPanel = document.getElementById('admin-panel');
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

            // START OF FIX: Replaced complex if/else with a clear switch statement
            switch (path) {
                // --- Global sections with language objects ---
                case 'sliderItems':
                    if (action === 'add') {
                        const newId = `slide_${Date.now()}`;
                        siteData.global.sliderItems.push({ id: newId, img: 'https://source.unsplash.com/1200x800/?nature' });
                        ['ru', 'en', 'ge'].forEach(lang => {
                            siteData[lang].slider[newId] = { title: 'Новый слайд', desc: 'Описание нового слайда.' };
                        });
                    } else if (action === 'delete') {
                        const slideId = siteData.global.sliderItems[index].id;
                        const slideTitle = siteData.ru.slider[slideId]?.title || `Слайд ${index + 1}`;
                        confirmAction(`Вы уверены, что хотите удалить слайд "${slideTitle}"? Это действие необратимо.`, () => {
                            siteData.global.sliderItems.splice(index, 1);
                            ['ru', 'en', 'ge'].forEach(lang => delete siteData[lang].slider[slideId]);
                        });
                    }
                    break;

                case 'teamMembers':
                    if (action === 'add') {
                        const newId = `member_${Date.now()}`;
                        siteData.global.teamMembers.push({ id: newId, img: 'https://source.unsplash.com/300x300/?portrait' });
                        ['ru', 'en', 'ge'].forEach(lang => {
                            siteData[lang].team.members[newId] = { name: 'Новый сотрудник', role: 'Должность' };
                        });
                    } else if (action === 'delete') {
                        const memberId = siteData.global.teamMembers[index].id;
                        const memberName = siteData.ru.team.members[memberId]?.name || `Сотрудник ${index + 1}`;
                        confirmAction(`Вы уверены, что хотите удалить сотрудника "${memberName}"? Это действие необратимо.`, () => {
                            siteData.global.teamMembers.splice(index, 1);
                            ['ru', 'en', 'ge'].forEach(lang => delete siteData[lang].team.members[memberId]);
                        });
                    }
                    break;

                case 'treeCategories':
                    if (action === 'add') {
                        const newId = `new_category_${Date.now()}`;
                        siteData.global.treeCategories.push({ id: newId, quantity: 10, costPerTree: 50, sponsoredCount: 0, img: 'https://source.unsplash.com/400x300/?tree' });
                        ['ru', 'en', 'ge'].forEach(lang => {
                            siteData[lang].treeCategories[newId] = { name: 'Новая Категория', desc: 'Описание для новой категории.' };
                        });
                    } else if (action === 'delete') {
                        const categoryId = siteData.global.treeCategories[index].id;
                        const categoryName = siteData.ru.treeCategories[categoryId]?.name || categoryId;
                        confirmAction(`Вы уверены, что хотите удалить категорию "${categoryName}"? Это действие необратимо.`, () => {
                            siteData.global.treeCategories.splice(index, 1);
                            ['ru', 'en', 'ge'].forEach(lang => delete siteData[lang].treeCategories[categoryId]);
                        });
                    }
                    break;

                // --- Sections with separate arrays for each language ---
                default:
                    const languages = ['ru', 'en', 'ge'];
                    const getTargetArray = (lang, pathString) => {
                        try { return pathString.split('.').reduce((obj, key) => obj[key], siteData[lang]); } 
                        catch (e) { return null; }
                    };

                    if (action === 'add') {
                        let newItemTemplate = {};
                        if (path === 'about.items') newItemTemplate = { title: "Новый заголовок", text: "Новый текст." };
                        if (path === 'events.items') newItemTemplate = { title: "Новое событие", desc: "Новое описание." };
                        if (path === 'materials.items') newItemTemplate = { title: "Новый материал", points: ["Пункт 1", "Пункт 2"] };
                        if (path === 'help.cards') newItemTemplate = { id: `new_card_${Date.now()}`, title: "Новая карточка", desc: "Описание", details: "", button: "" };

                        languages.forEach(lang => {
                            const targetArray = getTargetArray(lang, path);
                            if (targetArray && Array.isArray(targetArray)) {
                                targetArray.push(deepCopy(newItemTemplate));
                            }
                        });
                    } else if (action === 'delete') {
                        const message = `Вы уверены, что хотите удалить этот элемент?\n\nЭто действие необратимо и затронет ВСЕ языковые версии сайта.`;
                        confirmAction(message, () => {
                            languages.forEach(lang => {
                                const targetArray = getTargetArray(lang, path);
                                if (targetArray && Array.isArray(targetArray) && targetArray.length > index) {
                                    targetArray.splice(index, 1);
                                }
                            });
                        });
                    }
                    break;
            }
            // END OF FIX

            isDirty = true;
            renderAdminPanel();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('savedSiteData');
    siteData = savedData ? JSON.parse(savedData) : deepCopy(defaultSiteData);
    adminNotifications = new AdminNotifications();

    const adminPanel = document.getElementById('admin-panel');
    adminPanel.style.display = 'flex';
    setTimeout(() => adminPanel.classList.add('visible'), 10);
    document.body.style.overflow = 'hidden';

    renderAdminPanel();

    document.getElementById('admin-close-btn').addEventListener('click', () => {
        let proceed = !isDirty;
        if (isDirty) {
            const adminPanel = document.getElementById('admin-panel');
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
    
    document.getElementById('admin-panel').addEventListener('input', () => { isDirty = true; });
    
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