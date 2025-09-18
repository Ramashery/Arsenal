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
        slider: [
            { img: "https://images.unsplash.com/photo-1615485500608-2f6c6f2a0135?auto=format&fit=crop&w=1200&q=80", title: "Миндаль", desc: "Первым встречает весну бело-розовым облаком цветов." },
            { img: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=1200&q=80", title: "Айва и яблоня", desc: "Продолжают цветение в апреле, наполняя сад нежными оттенками." },
            { img: "https://images.unsplash.com/photo-1597834377643-2e3f6e7e0e32?auto=format&fit=crop&w=1200&q=80", title: "Павловния", desc: "В начале лета раскрывается фиолетовыми колокольчиками." },
            { img: "https://images.unsplash.com/photo-1597848212620-4f5bb2a24c34?auto=format&fit=crop&w=1200&q=80", title: "Тамарикс", desc: "Добавляет лёгкие розовые перья в июне." },
            { img: "https://images.unsplash.com/photo-1627324035919-5b58332a67e1?auto=format&fit=crop&w=1200&q=80", title: "Гранат", desc: "Загорается красными цветами и плодами в середине лета." },
            { img: "https://images.unsplash.com/photo-1570481662006-a3a1374699d8?auto=format&fit=crop&w=1200&q=80", title: "Скумпия", desc: "Создаёт «дымчатые облака» и вспыхивает осенью красными листьями." },
            { img: "https://images.unsplash.com/photo-1544787219-7f47ccb5a8c9?auto=format&fit=crop&w=1200&q=80", title: "Фисташка", desc: "Уходит в золотисто-оранжевую гамму в октябре." },
            { img: "https://images.unsplash.com/photo-1596461404969-9d24c3fdd0c4?auto=format&fit=crop&w=1200&q=80", title: "Кипарис", desc: "Остаётся вечнозелёным символом устойчивости и центра сада." },
        ],
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
        team: {
            title: "Команда",
            members: [
                { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80", name: "Александр Савин", role: "Основатель проекта" },
                { img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=300&q=80", name: "Мария Иванова", role: "Координатор волонтеров" },
                { img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db1604?auto=format&fit=crop&w=300&q=80", name: "Нино Циклаури", role: "Ландшафтный дизайнер" },
                { img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80", name: "Давид Беридзе", role: "PR-менеджер" },
            ]
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
        slider: [
            { img: "https://images.unsplash.com/photo-1615485500608-2f6c6f2a0135?auto=format&fit=crop&w=1200&q=80", title: "Almond", desc: "The first to greet spring with a white-pink cloud of flowers." },
            { img: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=1200&q=80", title: "Quince & Apple", desc: "Continue to bloom in April, filling the garden with delicate shades." },
            { img: "https://images.unsplash.com/photo-1597834377643-2e3f6e7e0e32?auto=format&fit=crop&w=1200&q=80", title: "Paulownia", desc: "Opens with purple bells at the beginning of summer." },
            { img: "https://images.unsplash.com/photo-1597848212620-4f5bb2a24c34?auto=format&fit=crop&w=1200&q=80", title: "Tamarisk", desc: "Adds light pink feathers in June." },
            { img: "https://images.unsplash.com/photo-1627324035919-5b58332a67e1?auto=format&fit=crop&w=1200&q=80", title: "Pomegranate", desc: "Lights up with red flowers and fruits in mid-summer." },
            { img: "https://images.unsplash.com/photo-1570481662006-a3a1374699d8?auto=format&fit=crop&w=1200&q=80", title: "Sumac", desc: "Creates 'smoke clouds' and bursts with red leaves in autumn." },
            { img: "https://images.unsplash.com/photo-1544787219-7f47ccb5a8c9?auto=format&fit=crop&w=1200&q=80", title: "Pistachio", desc: "Transitions to a golden-orange palette in October." },
            { img: "https://images.unsplash.com/photo-1596461404969-9d24c3fdd0c4?auto=format&fit=crop&w=1200&q=80", title: "Cypress", desc: "Remains an evergreen symbol of resilience and the garden's center." },
        ],
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
            members: [
                { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80", name: "Aleksandr Savin", role: "Project Founder" },
                { img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=300&q=80", name: "Maria Ivanova", role: "Volunteer Coordinator" },
                { img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db1604?auto=format&fit=crop&w=300&q=80", name: "Nino Tsiklauri", role: "Landscape Designer" },
                { img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80", name: "David Beridze", role: "PR Manager" },
            ]
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
                { title: "ბაღი, როგორც ლენდ-არტი", text: "ჩვენ ბაღს ვხედავთ არა მხოლოდ როგორც მწვანე სივრცეს, არამედ როგორც მხატვრულ ჟესტს. მისი ფორმა და სტრუქტურა შეგვახსენებს, რომ ბუნება შეიძლება იყოს ხელოვნება, ხოლო ხელოვნება — ბუნების ნაწილი. ბაღი სეზონების მიხედვით შეიცვლება, ხან ყვავილობით, ხან შემოდგომის ფერებით გამოვლინდება და გახდება ცოცხალი ნამუშევარი, შექმნილი ადამიანებთან ერთად და ადამიანებისთვის." },
                { title: "საზოგადოება", text: "ჩვენთვის მნიშვნელოვანია არა მხოლოდ ის, თუ რა ხეები იზრდება, არამედ ისიც, თუ ვინ რგავს მათ. ჩვენ ვაერთიანებთ მეზობლებს, მეგობრებს, თბილისის სტუმრებს და ყველას, ვისაც ბუნებაზე ზრუნვა სურს. ბაღი ხდება შეხვედრებისა და საერთო საქმის სივრცე, სადაც ყველა თავის კვალს ტოვებს." },
                { title: "ეკოლოგია", text: "ყოველი ხე — წვლილია ჰაერში, ნიადაგში, ქალაქის კლიმატში. ჩვენ არსენალის მთას ვუბრუნებთ სიმწვანეს, რომელიც ოდესღაც აქ იყო. ეს პატარა ნაბიჯია თბილისისთვის, მაგრამ პლანეტაზე ზრუნვის დიდი ნაწილის: ჩვენ ვირჩევთ სიცოცხლესა და ზრდას სიცარიელის ნაცვლად." },
            ]
        },
        slider: [
            { img: "https://images.unsplash.com/photo-1615485500608-2f6c6f2a0135?auto=format&fit=crop&w=1200&q=80", title: "ნუში", desc: "პირველი ხვდება გაზაფხულს თეთრი-ვარდისფერი ყვავილების ღრუბლით." },
            { img: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=1200&q=80", title: "კომში და ვაშლი", desc: "აგრძელებენ ყვავილობას აპრილში და ბაღს ნაზი ფერებით ავსებენ." },
            { img: "https://images.unsplash.com/photo-1597834377643-2e3f6e7e0e32?auto=format&fit=crop&w=1200&q=80", title: "პავლოვნია", desc: "ზაფხულის დასაწყისში იასამნისფერი ზარებით იშლება." },
            { img: "https://images.unsplash.com/photo-1597848212620-4f5bb2a24c34?auto=format&fit=crop&w=1200&q=80", title: "ივანის-ხე", desc: "ივნისში ღია ვარდისფერ ბუმბულებს ამატებს." },
            { img: "https://images.unsplash.com/photo-1627324035919-5b58332a67e1?auto=format&fit=crop&w=1200&q=80", title: "ბროწეული", desc: "ზაფხულის შუაში წითელი ყვავილებით და ნაყოფით ინთება." },
            { img: "https://images.unsplash.com/photo-1570481662006-a3a1374699d8?auto=format&fit=crop&w=1200&q=80", title: "სუმაკი", desc: "ქმნის „კვამლის ღრუბლებს“ და შემოდგომაზე წითელი ფოთლებით იფეთქებს." },
            { img: "https://images.unsplash.com/photo-1544787219-7f47ccb5a8c9?auto=format&fit=crop&w=1200&q=80", title: "ფისტა", desc: "ოქტომბერში ოქროსფერ-ნარინჯისფერ გამაში გადადის." },
            { img: "https://images.unsplash.com/photo-1596461404969-9d24c3fdd0c4?auto=format&fit=crop&w=1200&q=80", title: "კვიპაროსი", desc: "რჩება მარადმწვანე სიმბოლოდ მდგრადობისა და ბაღის ცენტრისა." },
        ],
        events: {
            title: "ღონისძიებები",
            items: [
                { title: "ექსკურსიები მთაზე", desc: "ყოველ შაბათს გეპატიჟებით არსენალის მთაზე სასეირნოდ. ეს არის შესაძლებლობა, ნახოთ თბილისის ველური კუთხე, გაიგოთ მისი ისტორია და ბუნება, და იგრძნოთ, რამდენად ცოცხალი შეიძლება იყოს ეს სივრცე. მოგვწერეთ, თუ გსურთ მონაწილეობა." },
                { title: "წინა ღონისძიებები", desc: "ბოლო ორი წლის განმავლობაში აქ ხუთი დიდი ღონისძიება ჩავატარეთ: მუსიკალური გამოსვლები ღია ცის ქვეშ, გამოფენები და პერფორმანსები. ამ შეხვედრებმა აჩვენა, რომ არსენალის მთა შეიძლება იყოს კულტურისა და შთაგონების ადგილი. როგორ ჩაიარა, შეგიძლიათ ნახოთ ჩვენს ინსტაგრამზე." },
                { title: "შაბათობები", desc: "ჩვენ გვჯერა, რომ ადგილზე ზრუნვა პატარა ნაბიჯებით იწყება. გასულ წელს სამი დიდი შაბათობა მოვაწყვეთ: ერთად დავასუფთავეთ ნაგავი, გავწმინდეთ ბილიკები და დავუბრუნეთ სიცოცხლე მთის კუთხეებს. ჩვენთვის ეს არა მხოლოდ სამუშაოა, არამედ საზოგადოების ყოფნის საშუალებაც." }
            ]
        },
        help: {
            title: "როგორ დავეხმაროთ",
            intro: "არსენალის ბაღი ადამიანების წყალობით იზრდება. ყველას აქვს შესაძლებლობა, გახდეს ამ ბაღის ნაწილი — აირჩიოს მხარდაჭერის საკუთარი გზა და ჩადოს მასში საკუთარი წვლილი.",
            cards: [
                { id: 'money', title: "ფულით", desc: "ერთი ნერგი დაახლოებით 50 ლარი ღირს. ყოველი შემოწირულობა ახალი ხეა, რომელიც არსენალის მთაზე გაიზრდება.", details: "Credo bank\nGE38CD0360000050136558\nAleksandr Savin\n\nOzon bank (რუსული ბარათებისთვის)\n+79296777333\n\nკრიპტო-საფულე (TRC20)\nTFkojYpj518hR7NuwNdtCz5o8UTMBbwSrV", button: "" },
                { id: 'volunteer', title: "მოხალისეობით", desc: "შეგიძლიათ მოხვიდეთ დარგვაზე, დაეხმაროთ ხეების მოვლაში, გადაიღოთ ფოტოები ან გააშუქოთ პროექტი მედიაში. ნებისმიერი დახმარება ბაღს აცოცხლებს.", details: "", button: "დაგვიკავშირდით" },
                { id: 'partner', title: "პარტნიორობით", desc: "ჩვენ ღია ვართ თანამშროლობისთვის არასამთავრობო ორგანიზაციებთან, ბიზნესთან და მედიასთან. ერთად შეგვიძლია პროექტს ახალი მასშტაბი და ძალა მივცეთ.", details: "", button: "განვიხილოთ პარტნიორობა" }
            ]
        },
        map: {
            title: "ბაღის ინტერაქტიული რუკა",
            desc: "დაფინანსებული ხეები ნაჩვენებია, როდესაც მათთვის თანხა შეგროვდება.",
            goal: "მიზანი: {count} ხე",
            transparency: "გამჭვირვალობისთვის, ჩვენ ვაწარმოებთ ყველა გადარიცხვის ცხრილს. ასე რომ, ყველას შეუძლიя დარწმუნდეს, რომ ფული გათვალისწინებულია საერთო შეგროვებაში."
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
            members: [
                { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80", name: "ალექსანდრე სავინი", role: "პროექტის დამფუძნებელი" },
                { img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=300&q=80", name: "მარია ივანოვა", role: "მოხალისეთა კოორდინატორი" },
                { img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db1604?auto=format&fit=crop&w=300&q=80", name: "ნინო წიკლაური", role: "ლანდშაფტის დიზაინერი" },
                { img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80", name: "დავით ბერიძე", role: "პიარ მენეჯერი" },
            ]
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
let countdownInterval;

const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

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
               const totalTrees = globalData.treeCategories.reduce((sum, cat) => sum + cat.quantity, 0);
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
    helpCardsWrapper.innerHTML = data.help.cards.map(card => `
        <div class="card fade-in">
            <h3>${card.title}</h3>
            <p>${card.desc}</p>
            ${card.details ? `<p id="help-card-details-${card.id}" style="white-space: pre-wrap; overflow-wrap: break-word;">${card.details}</p>` : ''}
            ${card.button ? `<a href="#contacts" class="btn" style="margin-top:1rem">${card.button}</a>` : ''}
        </div>
    `).join('');

    const navMenu = document.getElementById('nav-menu');
    navMenu.innerHTML = Object.entries(data.nav).map(([key, value]) => `<li><a href="#${key}">${value}</a></li>`).join('');

    const aboutWrapper = document.getElementById('about-content-wrapper');
    aboutWrapper.innerHTML = data.about.items.map(item => `
        <div class="about-item">
            <h3>${item.title}</h3>
            <p>${item.text.replace(/\n/g, '<br>')}</p>
        </div>
    `).join('');

    const sliderWrapper = document.getElementById('trees-slider-wrapper');
    sliderWrapper.innerHTML = data.slider.map((slide, index) => `
        <div class="slide ${index === 0 ? 'active' : ''}" style="background-image: url('${slide.img}');">
            <div class="slide-content"><h3>${slide.title}</h3><p>${slide.desc}</p></div>
        </div>
    `).join('');
    initTreeSlider();

    const eventsWrapper = document.getElementById('events-timeline-wrapper');
    eventsWrapper.innerHTML = data.events.items.map(item => `
        <div class="event-item fade-in"><h3>${item.title}</h3><p>${item.desc}</p></div>
    `).join('');
    
    const materialsWrapper = document.getElementById('materials-accordion-wrapper');
    materialsWrapper.innerHTML = data.materials.items.map(item => `
        <details class="material-item">
            <summary>${item.title}</summary>
            <div class="material-content"><ul>${item.points.map(p => `<li>${p}</li>`).join('')}</ul></div>
        </details>
    `).join('');
    
    const teamWrapper = document.getElementById('team-grid-wrapper');
    teamWrapper.innerHTML = data.team.members.map(member => `
         <div class="team-member fade-in">
            <img src="${member.img}" alt="${member.name}" class="team-img">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        </div>
    `).join('');
    
    const socialWrapper = document.getElementById('social-links-wrapper');
    socialWrapper.innerHTML = `
        <a href="${globalData.socials.instagram}" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="${globalData.socials.telegram}" aria-label="Telegram"><i class="fab fa-telegram"></i></a>
        <a href="${globalData.socials.email}" aria-label="Email"><i class="far fa-envelope"></i></a>
    `;
    
    document.getElementById('google-map-iframe').src = globalData.mapIframeSrc;
    renderMap();
}

function renderMap() {
    const globalData = siteData.global;
    const langData = siteData[currentLang];
    const totalTrees = globalData.treeCategories.reduce((sum, cat) => sum + cat.quantity, 0);
    const totalSponsored = globalData.treeCategories.reduce((sum, cat) => sum + cat.sponsoredCount, 0);

    const mapGrid = document.getElementById('map-grid');
    mapGrid.innerHTML = '';

    globalData.treeCategories.forEach(category => {
        const categoryName = langData.treeCategories[category.id]?.name || category.id;
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
    setTimeout(() => {
         progressFill.style.width = `${(totalSponsored / totalTrees) * 100}%`;
         progressText.textContent = `${totalSponsored} / ${totalTrees}`;
    }, 100);
}

// --- НАЧАЛО ИЗМЕНЕНИЯ: Новая логика загрузки данных ---
async function initializeSite() {
    try {
        // Добавляем параметр для сброса кэша браузера
        const response = await fetch('siteData.json?v=' + new Date().getTime());
        if (!response.ok) {
            throw new Error('Файл siteData.json не найден, используется версия по умолчанию.');
        }
        siteData = await response.json();
        console.log('Данные успешно загружены из siteData.json');
    } catch (error) {
        console.warn(error.message);
        // Если загрузка не удалась, используем данные по умолчанию
        siteData = deepCopy(defaultSiteData);
    }

    // После того как данные загружены (из файла или по умолчанию), отрисовываем страницу
    renderPage();

    // Запускаем все остальные функции инициализации
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
        const globalCategoryData = siteData.global.treeCategories.find(c => c.id === categoryId);
        const langCategoryData = siteData[currentLang].treeCategories[categoryId];
        
        if (globalCategoryData && langCategoryData) {
            document.getElementById('modal-tree-img').src = globalCategoryData.img;
            document.getElementById('modal-tree-name').textContent = langCategoryData.name;
            document.getElementById('modal-tree-desc').textContent = langCategoryData.desc;
            
            const fundsText = siteData[currentLang].nav.about === "About" ? 
                `Collected for ${globalCategoryData.sponsoredCount} of ${globalCategoryData.quantity} trees` :
                `Собрано на ${globalCategoryData.sponsoredCount} из ${globalCategoryData.quantity} деревьев`;
            document.getElementById('modal-tree-funds').textContent = fundsText;
            
            const progress = Math.min((globalCategoryData.sponsoredCount / globalCategoryData.quantity) * 100, 100);
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
// --- КОНЕЦ ИЗМЕНЕНИЯ ---


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