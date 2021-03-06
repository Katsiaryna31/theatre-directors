const colors = [
  {
    id: 'orange',
    name: 'Акцэнт Аранжавы',
    hex: '# F54D1C',
  },
  {
    id: 'black',
    name: 'Чорны',
    hex: '# 000000',
  },
  {
    id: 'grey',
    name: 'Шэры',
    hex: '# F5F2EC',
  },
];

const styleguideNav = {
  colorsTitle: 'Колеры',
  buttonsLinksTitle: 'Кнопкі / Спасылкі',
  buttonsLinksName: 'Cпасылка',
  textStylesTitle: 'Стыль тэксту',
  size: 'Памер',
  lineHeight: 'Інтэрлін‎яж',
  letterSpacing: 'Міжлітаральная адлегласць',
};

const worklogNav = {
  time: 'Час',
  feature: 'Асаблівасць',
  problems: 'Цяжкасці для каманды',
};

const tasksData = {
  tasksTitle: 'Максімальная колькасць ачкоў - 280',
  selfScore: 'Усяго - 240',
  problems:['Праца з git ў камандным праекце.', 'Выбар падыходных анімацый.', 'Праблемы з рэалізацыяй галерэі.', 'Цяжкасці з загрузкай праекта на хостынг.'],
  tasks: [
    'Галоўная старонка + старонка са спісам аўтараў + старонка аўтара - 10',
    'Старонка з членамі каманды + старонка з рабочым журналам - 10',
    'Старонка са спісам аўтараў змяшчае віджэт пошуку - 10',
    'Партал мае дзве мовы - 20',
    'Партал мае старонку з гідам па стылі - 20',
    'Мабільная версія ў парадку - 10',
    'Версія для Ipad / планшэта ў парадку - 10',
    'Старонка аўтара змяшчае часовую шкалу - 10',
    'Старонка аўтара змяшчае овэрлэй відэа - 10',
    'Старонка аўтара змяшчае фотагалерэю - 20',
    'Старонка аўтара змяшчае карту - 10',
    'Дызайн - 20',
    'Выкарыстоўваецца Material-ui - 20',
    'Партал мае трэцюю мову - 10',
    'Анімацыі - 20',
    'Выбітны дызайн - 20',
    'Упэўненасць у прэзентацыі праекта - 10',
    'Праект выкананы з выкарыстаннем gatsbyjs - 10',
    'Contentful / Netlify CMS выкарыстоўваецца для кіравання кантэнтам - 10',
    'Выкарыстанне інструмента React styleguide для старонкі са стылямі - 20',
  ],
};

const developersFeatures = [
  {
    name: 'Кацярына',
    time: ['10г','3г'],
    tasks: ['Створана старонка пра рэжысёра','Рэалізавана часовая шкала падзей']
  },
  {
    name: 'Уладзімір',
    time: ['10г','5г','4г'],
    tasks: ['Створаны хэдар, навігацыя, старонка са спісам рэжысёраў','Рэалізаваны пераклад сайта на тры мовы','Рэалізаваны пошук рэжысёраў']
  },
  {
    name: 'Кацярына',
    time: ['2г','7г','10г'],
    tasks: ['Створана базавая структура праекта','Створана галоўная старонка','Рэалізавана карта']
  },
  {
    name: 'Антон',
    time: ['8г','2г','9г'],
    tasks: ['Створана старонка з членамі каманды','Створаны файлы з дадзенымі','Рэалізаваны відэаблок']
  },
  {
    name: 'Кірыл',
    time: ['23г','18г'],
    tasks: ['Створаны дызайн праекта','Створаны старонкі з рабочым журналам і гідам па стылі']
  },
  {
    name: 'Раман',
    time: ['13г', '5г'],
    tasks: ['Рэалізавана фотагалерэя', 'Рэалізавана анімацыя сайта']
  },
]

const developers = [
  {
    id: 'D0',
    name: 'Кацярына Рудзенка',
    github: 'https://github.com/Rekaterina',
    telegram: 'https://t.me/rekaterina',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/rudenko.jpg',
    contribution: [
      'Створана старонка пра рэжысёра.',
      'Рэалізавана часовая шкала падзей.'
    ],
  },
  {
    id: 'D1',
    name: 'Уладзімір Сярко',
    github: 'https://github.com/Vir45',
    telegram: 'https://t.me/Vova_Serko',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/serko.jpg',
    contribution: [
      'Створаны хэдар, навігацыя, старонка са спісам рэжысёраў.',
      'Рэалізаваны пераклад сайта на тры мовы.',
      'Рэалізаваны пошук рэжысёраў.'
    ],
  },
  {
    id: 'D2',
    name: 'Кацярына Якубоўская',
    github: 'https://github.com/Katsiaryna31',
    telegram: 'https://t.me/KatsiarynaYa',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/yakubovskaya.jpg',
    contribution: [
      'Створана базавая структура праекта.',
      'Створана галоўная старонка.',
      'Рэалізавана карта.'
    ],
  },
  {
    id: 'D3',
    name: 'Антон Ясько',
    github: 'https://github.com/antonyasko',
    telegram: 'https://t.me/anton_yasko',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/yasko.jpg',
    contribution: [
      'Створана старонка з членамі каманды.',
      'Створаны файлы з дадзенымі.',
      'Рэалізаваны відэаблок.'
    ],
  },
  {
    id: 'D4',
    name: 'Кірыл Лёгкі',
    github: 'https://github.com/kirillleogky',
    telegram: 'https://t.me/KirillLeogky',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/leogky.jpg',
    contribution: [
      'Створаны дызайн праекта.',
      'Створаны старонкі з рабочым журналам і гідам па стылі.'
    ],
  },
  {
    id: 'D5',
    name: 'Раман Ганчароў',
    github: 'https://github.com/RomaSRS',
    telegram: 'https://t.me/RomanSRS',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/goncharov.jpg',
    contribution: [
      'Рэалізавана фотагалерэя.',
      'Рэалізавана анімацыя сайта.'
    ],
  },
];

const directors = [
  {
    id: '0',
    name: 'Еўсцігней Афінагенавіч Міровіч',
    born: '10 жніўня 1878',
    deceased: '16 лютага 1952',
    description: 'Беларускі драматург і тэатральны рэжысёр',
    image: 'https://boom.ms/wp-content/uploads/f/foto-babushek-i-dedushek-v-molodosti/6.jpg',
    placeOfBirth: 'Санкт-Пецярбург',
    shortBiography : 'Рускі і беларускі драматург, артыст, рэжысёр і педагог. Адзін са стваральнікаў беларускага нацыянальнага савецкага тэатра. Пра акцёра і рэжысёра былі выдадзены кнігі С. А. Пятровіча «Народны артыст БССР Л. А. Міровіч» (1963) і «Еўсцігней Міровіч» (1978); педагагічнай дзейнасці Е. А. Міровіча прысвечана глава ў кнізе яго вучня А. І. Бутакова «Мае настаўнікі» (2004); пра яго жыццё напісаныя кіраўніка ў энцыклапедыях, публікуюцца ўспаміны сучаснікаў ў перыядычных выданнях і сеткі Інтэрнэт. Выпушчана паштовая марка да 100-гадовага юбілею Я. А. Міровіча і паштовая картка з арыгінальнай маркай да яго 125-годдзя. Аб творчым лёсе Я. А. Міровіча на кінастудыі «Беларусьфільм» зняты дакументальны фільм «Праз ўсё жыццё» (1978). На будынку Беларускай акадэміі мастацтваў адкрыта памятная дошка ў гонар выдатнага дзеяча тэатра Еўсцігнея Афиногеновича Міровіча.',
    timeline: [
      {date: '1900', text: 'Пачаў працаваць у пецярбургскіх тэатрах акцёрам, затым рэжысёрам.'},
      {date: '1906', text: 'Стаў правадзейным членам Санкт-Пецярбургскага саюза драматычных і музычных пісьменнікаў.'},
      {date: '1919', text: 'Пачаў працаваць у тэатрах Беларусі.'},
      {date: '1921 — 1931', text: 'Працуе мастацкім кіраўніком у тэатрах Беларусі.'},
      {date: '1932 — 1935', text: 'Мастацкі кіраўнік Гомельскага тэатра рабочай моладзі.'},
      {date: '1937 — 1940', text: 'Мастацкі кіраўнік Беларускага тэатра юнага гледача імя Н. Крупскай.'},
      {date: '1941 — 1945', text: 'Працуе рэжысёрам Беларускага тэатра ім. Я. Купалы (БДТ-1).'},
    ],
    project: [
      {date: '1923', text: '«Кастусь Каліноўскі»'},
      {date: '1927', text: '«Мятеж» па Д. Фурманаву'},
      {date: '1929', text: '«Мост» Е. Романовіча'},
      {date: '1930', text: '«Гута» Кабеца'},
      {date: '1937', text: '«Як гартавалася сталь» па М. Астроўскаму'},
      {date: '1939', text: '«Цудоўная дудка» Вольскага'},
    ],
    video: 'https://www.youtube.com/embed/Yunms45xnog',
    mapData: {
      center: [53.9226577, 27.6010486],
      place: 'Беларуская дзяржаўная акадэмія мастацтваў',
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/ru/b/b1/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B0_%D0%B0%D0%BA%D1%82%D1%91%D1%80%D0%B0_%D0%95%D0%B2%D1%81%D1%82%D0%B8%D0%B3%D0%BD%D0%B5%D1%8F_%D0%9C%D0%B8%D1%80%D0%BE%D0%B2%D0%B8%D1%87%D0%B0.JPG'
      },
      {
        num: 1,
        src: 'https://img.tyt.by/n/obshchestvo/0b/4/08_mirovich-1952_620.jpg'
      },
      {
        num: 2,
        src: 'https://img.tyt.by/n/obshchestvo/06/0/09_mirovich_doska_620.jpg'
      },
      {
        num: 3,
        src: 'https://img.tyt.by/n/kultura/0c/8/06_mirovich.png'
      },
    ],
  },
  {
    id: '1',
    name: 'Уладзіслаў Іосіфавіч Галубок',
    born: '15 мая 1882',
    deceased: '28 верасня 1937',
    description: 'Беларускі драматург, празаік, рэжысёр, акцёр, мастак.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Edward_Pep%C5%82owski.jpg',
    placeOfBirth: 'Ст. Лясная, Навагрудскі павет, Мінская губерня',
    shortBiography : 'Беларускі савецкі акцёр, рэжысёр, пісьменнік, мастак, дэкаратар, першы народны артыст Беларускай ССР (1928), адзін з заснавальнікаў беларускага нацыянальнага тэатра, мастацкі кіраўнік і дырэктар Беларускага дзяржаўнага тэатра. Па ўспамінах сучаснікаў - у БССР не засталося такога раёна, у якім бы не пабываў тэатр Галубка. У 1920 годзе ён прыязджаў з выступам у Слуцк у той час, калі на Случчыне дзейнічала аб\'яднанне «Папараць-кветка». Менавіта тое, мэтай дзейнасці якога абвяшчалася вывучэнне і прапаганда беларускай мовы, культуры і мастацтва, далучэнне да культурных каштоўнасцяў шырокага кола насельніцтва праз стварэнне і падтрымку філіялаў, стацыянарных і перасоўных бібліятэк, правядзенне лекцый і канцэртаў.',
    timeline: [
      {date: '1896', text: 'Упершыню трапіў у сапраўдны тэатр.'},
      {date: '1906', text: 'На старонках «Нашай Нівы» з\'явіліся яго першыя вершы і апавяданні.'},
      {date: '1913', text: 'У Пецярбургу выйшла першая кніжка «Апавяданні».'},
      {date: '1917', text: 'Адроджана «Першае беларускае таварыства драмы і камедыі», раней забароненае ўладамі Расійскай Імперыі. Галубок уступае ў таварыства разам з жонкай і дзецьмі і робіць першыя спробы ў драматургіі. За адну толькі восень 1917 г. Галубок піша тры п\'есы, якія адразу ставіць яго трупа.'},
      {date: '1920', text: 'Узначаліў Драматычную секцыю культурна-асветніцкай арганізацыі «Папараць-кветка» ў Слуцку.'},
      {date: '1924', text: 'Выдадзены загад Наркамата асветы аб ператварэнні трупы Галубка ў Беларускую дзяржаўную трупу.'},
      {date: '1928', text: 'Прысвоена званне народнага артыста рэспублікі. Галубок стаў першым беларускім народным артыстам.'},
      {date: '1931', text: 'Тэатр Галубка рэарганізуюць, яго называюць БДТ-3 (Беларускі трэці дзяржаўны тэатр) і «прапісваюць» у Гомелі. Гастролі па акругах, тым не менш, працягваліся.'},
      {date: '1933', text: 'БДТ-3 ставіць п\'есу «Белая зброя». П\'еса апавядае пра шкодніцкую дзейнасць «ворагаў народа» на адным з заводаў.'},
      {date: '1935', text: 'Шырока адзначаўся 15-гадовы юбілей тэатра Уладзіслава Галубка, многія акцёры атрымалі ганаровыя званні, Галубок быў узнагароджаны аўтамабілем і творчай камандзіроўкай у Маскву і Ленінград.'},
    ],
    project: [
      {date: '1917', text: '«Апошняе спатканьне»'},
      {date: '1920', text: '«Суд»'},
      {date: '1921', text: '«Белы вянок»'},
      {date: '1927', text: '«Краб»'},
      {date: '1933', text: '«Белая зброя»'},
    ],
    video: 'https://www.youtube.com/embed/FQ054q0969g',
    mapData: {
      center: [52.431906, 31.0122417],
      place: 'Беларускі трэці дзяржаўны тэатр',
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/1/19/%D0%A3%D0%BB%D0%B0%D0%B4%D1%8B%D1%81%D0%BB%D0%B0%D1%9E_%D0%93%D0%B0%D0%BB%D1%83%D0%B1%D0%BE%D0%BA.jpg'
      },
      {
        num: 1,
        src: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Haluboktheatre4.jpg'
      },
      {
        num: 2,
        src: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/%D0%A3%D0%BB%D0%B0%D0%B4%D0%B7%D1%96%D1%81%D0%BB%D0%B0%D1%9E_%D0%93%D0%B0%D0%BB%D1%83%D0%B1%D0%BE%D0%BA._%D0%A4%D0%BE%D1%82%D0%B0.jpg'
      },
      {
        num: 3,
        src: 'https://upload.wikimedia.org/wikipedia/commons/1/10/%D0%A3._%D0%93%D0%B0%D0%BB%D1%83%D0%B1%D0%BE%D0%BA_%D0%90%D1%80%D0%BA%D0%B0%D0%B4%D0%B7%D1%8E_%D0%A1%D0%BC%D0%BE%D0%BB%D1%96%D1%87%D1%83.jpg'
      },
    ],
  },
  {
    id: '2',
    name: 'Ігнат Цярэнцьевіч Буйніцкі',
    born: '22 жніўня 1861',
    deceased: '22 верасня 1917',
    description: 'Беларускі акцёр, рэжысёр, тэатральны дзеяч, стваральнік нацыянальнага прафесійнага тэатра, удзельнік літаратурнага жыцця.',
    image: 'https://seanmcdonorg.files.wordpress.com/2018/08/2018-06-23_ent_41837548_i1.jpg',
    placeOfBirth: 'фальварак Палівачы, Празароцкая воласць (цяпер Глыбоцкі раён), Дзісенскі павет',
    shortBiography : 'Беларускі акцёр, рэжысёр, тэатральны дзеяч, заснавальнік першага прафесійнага нацыянальнага беларускага тэатра. Яго называлі бацькам беларускага тэатра. Ігнат Буйніцкі ўпершыню вывеў «мужыцкі" танец на сцэну, як выканаўца і пастаноўшчык, паказаўшы невычэрпныя магчымасці і прыгажосць беларускіх народных танцаў. Як драматычны акцёр выступаў пераважна ў характэрных ролях, умела выяўляў гумар і тонкую іронію. У Празароках, у будынку сярэдняй школы створаны музей заснавальніка беларускага тэатра, дзе прадстаўлены афішы спектакляў, фатаграфіі трупы, лісты Зоські Верас і Зыгмунта Абрамовіча, успаміны старажылаў. У скверы размешчана магіла Ігната Буйніцкага і помнік яму.',
    timeline: [
      {date: '1907', text: 'У сваёй сядзібе ў Палівачах (каля Празарокаў) заснаваў самадзейны тэатр, дзе спачатку прымалі ўдзел яго сваякі.'},
      {date: '1910', text: 'У Вільні 12 лютага тэатр Буйніцкага па адмысловым запрашэнні рэдакцыі «Нашай Нівы» прыняў удзел у прадстаўленні, якое ўвайшло ў гісторыю пад назвай «Першая беларуская вечарынка ў Вільні».'},
      {date: '1910 — 1913', text: 'Тэатр гастраляваў па Беларусі (Мінск, Слуцк, Полацк, Дзісна, Свянцяны, Паставы, Нясвіж, Ляхавічы), двойчы выступаў у Пецярбургу (1911, 1912), а таксама ў Варшаве (1913).'},
      {date: '1913', text: 'З-за матэрыяльных цяжкасцей і ўціску царскіх уладаў у 1913 г. дзейнасць трупы была спынена.'},
      {date: '1914', text: 'Паспрабаваў стварыць новую трупу, аднак 1-я сусветная вайна перашкодзіла здзейсніць задуму.'},
      {date: '1917', text: 'У час Першай сусветнай вайны адправіўся на Заходні фронт, быў на вайсковай службе ў Маладзечне.'},
    ],
    project: [
      {date: '1910', text: '«Па рэвізіі» М. Крапіўніцкага'},
      {date: '1910', text: '«Пашыліся ў дурні» М. Крапіўніцкага'},
      {date: '1910', text: '«Хам» Э. Ажэшкі'},
      {date: '1910', text: '«У зімовы вечар» Э. Ажэшкі'},
      {date: '1910', text: '«Модны шляхцюк» К. Каганца'},
    ],
    video: 'https://www.youtube.com/embed/ACDGr4TUkvs',
    mapData: {
      center: [55.2899866, 28.220279],
      place: 'Тэатр на хаце',
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Buinicki.jpg'
      },
      {
        num: 1,
        src: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Bujnicki2.jpg'
      },
      {
        num: 2,
        src: 'https://upload.wikimedia.org/wikipedia/commons/2/20/%D0%9F%D1%80%D0%B0%D0%B7%D0%B0%D1%80%D0%BE%D0%BA%D1%96._%D0%9F%D0%BE%D0%BC%D0%BD%D1%96%D0%BA_%D0%86%D0%B3%D0%BD%D0%B0%D1%82%D1%83_%D0%91%D1%83%D0%B9%D0%BD%D1%96%D1%86%D0%BA%D0%B0%D0%BC%D1%83.jpg'
      },
      {
        num: 3,
        src: 'https://places.by/wp-content/uploads/2017/08/147143910580708-i0.jpeg'
      },
    ],
  },
  {
    id: '3',
    name: 'Мікалай Мікалаевіч Пінігін',
    born: '6 жніўня 1957',
    deceased: 'нашы дні',
    description: 'Беларускі рэжысёр, заслужаны дзеяч мастацтваў Рэспублікі Беларусь.',
		image: 'https://s9.stc.all.kpcdn.net/share/i/4/1432456/inx960x1380.jpg',
    placeOfBirth: 'Ізюм, Харкаўская вобласць, СССР',
    shortBiography : 'Беларускі рэжысёр, заслужаны дзеяч мастацтваў Рэспублікі Беларусь. Будучы вельмі запатрабаваным рэжысёрам, М.М. Пінігін спрабуе і нязменна дамагаецца поспеху ў розных відах тэатральнага мастацтва, ці гэта драматычны тэатр, музычны тэатр, тэатр лялек. Лаўрэат Дзяржаўнай прэміі Рэспублікі Беларусь. Прызнаны «Чалавекам года Беларусі» ў намінацыі «Сцэна». Лаўрэат прэміі БСТД ім. Е.Міровіча ў намінацыі «За лепшую рэжысуру». Дыпламант міжнародных фестываляў у Кракаве (Польшча), Маскве (Расія), Харкаве (Украіна), Браціславе (Славакія), Таліне (Эстонія), Вільні (Літва).',
    timeline: [
      {date: '1979', text: 'Скончыў режысёрскі факультэт Беларускі тэатральна-мастацкі інстытут.'},
      {date: '1980 — 1982', text: 'Працаваў у Рускім драматычным тэатры ім. М. Горкага (Мінск).'},
      {date: '1985', text: 'Рэжысёр Нацыянальнага акадэмічнага тэатра імя Я. Купалы.'},
      {date: '1985 — 1987', text: 'Выкладчык кафедры «Майстэрства акцёра і рэжысуры» у Беларускай акадэміі мастацтваў.'},
      {date: '1998', text: 'Рэжысёр Вялікага драматычнага тэатра ім. Г. А. Таўстаногава (Санкт-Пецярбург)'},
      {date: '2008', text: 'Прызначаны галоўным рэжысёрам Нацыянальнага акадэмічнага тэатру імя Я. Купалы.'},
    ],
    project: [
      {date: '1979', text: '«Начны дыліжанс»'},
      {date: '1984', text: '«Жанчына з мора»'},
      {date: '1990', text: '«Тутэйшыя» Я. Купалы'},
      {date: '1997', text: '«Сваволі Марыяны» А. Мюсэ'},
      {date: '1999', text: '«Каліфарнійская сюіта» Ніл Сайман'},
      {date: '2000', text: '«Хлусня на доўгіх нагах» Э. дэ Філіпа'},
      {date: '2001', text: '«Таленты і прыхільнікі» А. М. Астроўскага'},
    ],
    video: 'https://www.youtube.com/embed/lexVZsR-GF0',
    mapData: {
      center: [59.927614, 30.330527],
      place: 'Вялікі драматычны тэатр імя Г. Таўстаногава',
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://s14.stc.all.kpcdn.net/share/i/4/1435121/inx960x1439.jpg'
      },
      {
        num: 1,
        src: 'https://cdn12.img.sputnik.by/images/102328/96/1023289681.jpg'
      },
      {
        num: 2,
        src: 'https://s13.stc.all.kpcdn.net/share/i/12/11199960/inx960x640.jpg'
      },
      {
        num: 3,
        src: 'https://www.nv-online.info/images/cms-image-000152301.jpg'
      },
    ],
  },
  {
    id: '4',
    name: 'Ларыса Пампееўна Александроўская',
    born: '15 лютага 1904',
    deceased: '23 мая 1980',
    description: 'Беларуская оперная спявачка (сапрана), тэатральны рэжысёр, рэжысёр і грамадскі дзеяч',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/%C5%81arysa_Aleksandro%C5%ADskaja._%D0%9B%D0%B0%D1%80%D1%8B%D1%81%D0%B0_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D1%9E%D1%81%D0%BA%D0%B0%D1%8F_%281937%29.jpg',
    placeOfBirth: 'Мінск',
    shortBiography : 'Беларуская оперная спявачка (сапрана), тэатральны рэжысёр, рэжысёр і грамадскі дзеяч. Незвычайнай прыгажосці голас, унутраны напор і энергетыка. Ёй першай з беларускіх артыстаў у 1940 годзе было прысуджана званне народнай артысткі Савецкага Саюза. Праз год прысуджана Сталінская прэмія. Аляксандраўская валодала ўсім, каб лічыцца зоркай першай велічыні ў дзяржаве. І сапраўды, непадзельна кіравала беларускім оперным тэатрам некалькі дзесяцігоддзяў, таму што была не проста часткай беларускай музычнай культуры, а адным з яе заснавальнікаў. На Аляксандраўскую арыентаваліся ўсе вядучыя беларускія кампазітары, ствараючы свае оперы ў сярэдзіне 1930-х і пасляваенныя гады. У гэты час Аляксандраўская стала сімвалам беларускага мастацтва і Беларусі наогул.',
    timeline: [
      {date: '1919 — 1924', text: 'Удзельніца арганізаванай ёю самадзейнай трупы пры Палітаддзеле Заходняга фронту.'},
      {date: '1927', text: 'Выконвае беларускія народныя песні на Міжнароднай музычнай выстаўцы ў Франкфурце-на-Майне.'},
      {date: '1933', text: 'Артыстка Беларускага тэатра оперы і балета.'},
      {date: '1946', text: 'Прызначана старшынёй Беларускага тэатральнага аб\'яднання.'},
      {date: '1951 — 1960', text: 'Галоўны рэжысёр Беларускага тэатра оперы і балета.'},
      {date: '1976', text: 'Прызначана ганаровай старшынёй Беларускага тэатральнага аб\'яднання.'},
    ],
    project: [
      {date: '1951', text: '«Запарожац за Дунаем» С. Гулак-Арцямоўскага'},
      {date: '1952', text: '«Страшны двор» С. Манюшкі'},
      {date: '1953', text: '«Аіда» Джузэпэ Вердзі'},
      {date: '1954', text: '«Барыс Гадуноў» М. Мусаргскага'},
      {date: '1957', text: '«Міхась Падгорны» Я. Цікоцкага'},
      {date: '1960', text: '«Пікавая дама» П. Чайкоўскага'},
    ],
    video: 'https://www.youtube.com/embed/eDYuC8m5wsw',
    mapData: {
      center: [53.9103046, 27.5615253],
      place: 'Нацыянальны акадэмічны Вялікі тэатр оперы і балета',
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/ru/6/62/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B0_%D0%BF%D0%B5%D0%B2%D0%B8%D1%86%D1%8B_%D0%9B%D0%B0%D1%80%D0%B8%D1%81%D1%8B_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B9.JPG'
      },
      {
        num: 1,
        src: 'https://minsknews.by/wp-content/uploads/2018/03/4-9.jpg'
      },
      {
        num: 2,
        src: 'https://www.sb.by/upload/medialibrary/377/3775af02273a590150a1e89012960225.jpg'
      },
      {
        num: 3,
        src: 'https://hb.bizmrg.com/ex-press/images/content/original/alex-1-cd4966e62fedf6ed9f7203ea9133fdd044fe2785.jpg'
      },
    ],
  },
  {
    id: '5',
    name: 'Барыс Іванавіч Луцэнка',
    born: '16 верасня 1937',
    deceased: '5 лютага 2020',
    description: 'Беларускі тэатральны рэжысёр, народны артыст Беларусі.',
    image: 'https://www.rustheatre.by/images/stories/administration/lutsenko_black.jpg',
    placeOfBirth: 'Майкоп, Адыгейская аўтаномная вобласць, СССР',
    shortBiography : 'Беларускі рэжысёр-пастаноўшчык тэатра і кіно. Народны артыст Рэспублікі Беларусь. Заслужаны дзеяч мастацтваў Беларускай ССР. Творчасці Б.Луцэнкі ўласціва імкненне да сцэнічнай метафарычнасці, псіхалагічнай дакладнасці ў характарыстыках персанажаў, пошук выразных пластычных рашэнняў. Мае ўласнае бачанне свету і ролі чалавека ў ім, верыць, што чароўная рампа калі не ацаліць, то хаця б суцешыць і ледзь-ледзь дапаможа, хай не ўсім, але хоць бы нешматлікім. З\'яўляецца адным з вядучых і вядомых рэжысёраў Беларусі. На сцэнах краіны і за мяжой паставіў больш за сто спектакляў.',
    timeline: [
      {date: '1962 — 1967', text: 'Вучыўся ў Беларускім тэатральна-мастацкім інстытуце.'},
      {date: '1967', text: 'Прыняты ў Беларускі тэатр імя Я. Купалы.'},
      {date: '1970', text: 'Пачаў выкладаць у Беларускай акадэміі мастацтваў.'},
      {date: '1973 — 1981', text: 'Галоўны рэжысёр Дзяржаўнага рускага драматычнага тэатра імя М. Горкага.'},
      {date: '1981 — 1982', text: 'Рэжысёр Купалаўскага тэатра.'},
      {date: '1982 — 1991', text: 'Галоўны рэжысёр Тэатра-студыі кінаакцёра.'},
      {date: '1991 — 2007', text: 'Мастацкі кіраўнік Нацыянальнага акадэмічнага драматычнага тэатра імя М. Горкага.'},
    ],
    project: [
      {date: '1970', text: '«Памяць сэрца» Аляксандра Карнейчука'},
      {date: '1976', text: '«Трохграшовая опера» Бертальда Брэхта'},
      {date: '1979', text: '«Трагедыя чалавека» Імрэ Мадача'},
      {date: '1985', text: '«Не баюся Вірджыніі Вульф» Эдварда Олбі'},
      {date: '1990', text: '«Генералы ў спадніцах» Жана Ануя'},
    ],
    video: 'https://www.youtube.com/embed/C3TMCDZA2rY',
    mapData: {
      center: [53.898314, 27.5507955],
      place: 'Тэатр імя М. Горкага',
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Alexey_Kuzmich_Portrait_of_national_actor_Boris_Lutsenko_2001.JPG/1643px-Alexey_Kuzmich_Portrait_of_national_actor_Boris_Lutsenko_2001.JPG',

      },
      {
        num: 1,
        src: 'http://images.aif.by/007/667/03b8ec457923e6c67efae3f6275f67cd.JPG'
      },
      {
        num: 2,
        src: 'https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2020-02/TASS_18992976%20copy.jpg?itok=LmXoBDLI'
      },
      {
        num: 3,
        src: 'https://i1.wp.com/www.mlyn.by/wp-content/uploads/2020/02/206005-12-copy.jpg?w=900&ssl=1'
      },
    ],
  },
  {
    id: '6',
    name: 'Яўген Анатолевіч Крыжаноўскі',
    born: '6 чэрвеня 1955',
    deceased: 'нашы дні',
    description: 'Беларускі акцёр і галоўны рэжысёр Мінскага тэатра сатыры і гумару «Хрыстафор», заслужаны артыст Рэспублікі Беларусь.',
		image: 'http://st.oede.by/st/files/new%20year%202014/zvezda/zvezda_6.jpg',
    placeOfBirth: 'Мікалаеў, Мікалаеўская вобласць, УССР, СССР',
    shortBiography : 'Беларускі гумарыст, акцёр і галоўны рэжысёр Мінскага тэатра сатыры і гумару «Хрыстафор». Мастацкі кіраўнік тэлевізійнага праекту «Юмарынка». Мастацкі кіраўнік "кінацэнтры Яўгена Крыжаноўскага". Заслужаны артыст Рэспублікі Беларусь.',
    timeline: [
      {date: '1972', text: 'Скончыў школу ў Казельску (РСФСР).'},
      {date: '1973', text: 'Паступіў у Беларускі тэатральна-мастацкі інстытут на акцёрскае аддзяленне.'},
      {date: '1977', text: 'Прыняты ў трупу Акадэмічнага тэатра імя Янкі Купалы.'},
      {date: '1986', text: 'Стварыў тэатр сатыры і гумару «Хрыстафор». Згуляў больш за 30 вялікіх і галоўных роляў.'},
    ],
    project: [
      {date: '1987', text: '«Хто каго?»'},
      {date: '1987', text: '«Дабранач, малышы»'},
      {date: '1992', text: '«Добра сядзім!»'},
      {date: '1996', text: '«Учора, сёння, заўтра»'},
      {date: '2000', text: '«Хоць стой, хоць падай»'},
    ],
    video: 'https://www.youtube.com/embed/2q_HkfBF3AY',
    mapData: {
      center: [53.9008774, 27.5626722],
      place: 'Нацыянальны акадэмічны тэатр імя Янкі Купалы',
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Jaugen_Kryzhanouski_and_his_daughter_-_on_an_International_book_exhibition_in_Minsk_city_-_14_February_2015_AD_-_1.JPG'
      },
      {
        num: 1,
        src: 'https://www.intex-press.by/images/cms-image-000035009.JPG'
      },
      {
        num: 2,
        src: 'http://zviazda.by/sites/default/files/field/image/14-6_kopiya_4.jpg'
      },
      {
        num: 3,
        src: 'http://mediapsart.ru/sites/default/files/imagecache/actor_gallery_full/actor_gallery/3-41.jpg'
      },
    ],
  },
];

const mainText = 'Прафесія тэатральнага рэжысёра ў тым выглядзе, у якім мы прывыклі бачыць яе, развівалася ў другой палове XIX стагоддзя. Але канцэпцыя рэжысуры з\'явілася значна раней - у 1742 г. Рэжысёр тэатра вызначае агульную ідэю, якая будзе раскрыта падчас спектакля. Гэты творчы работнік аб\'ядноўвае намаганні ўсіх астатніх - дэкаратараў і акцёраў, кампазітараў і візажыстаў. Менавіта ён павінен аб\'яднаць усіх працаўнікоў тэатра, прымусіць іх пранікнуць сэнсам, укласці іх душу ў пастаноўку. Для гэтага рэжысёру трэба быць добрым псіхолагам, маючы магчымасць кантраляваць сябе. Рэжысёр тэатра - прафесія складаная. Каб стаць адным, трэба валодаць напорыстасцю, сур\'ёзнасцю, пісьменнасцю, кемлівасцю і арыгінальнасцю. Гэты чалавек інтэрпрэтуе п\'есы - зразумела, згодна са сваім бачаннем, каб яны гучалі па-новаму, цікавілі публіку.';
const addText = 'З сярэдзіны XVIII стагоддзя ў Беларусі сталі распаўсюджвацца прыгонныя тэатры - Радзівілы, Сапегі, Агінскія і іншыя магнаты спаборнічалі адзін з адным, у тым ліку ў галіне мастацтва. Таму яны не пашкадавалі грошай на падрыхтоўку прыгонных мастакоў і запрасілі самых кваліфікаваных еўрапейскіх харэографаў: аўстрыйцаў, французаў, італьянцаў, чэхаў. Бліжэй да 19 стагоддзю балет з «выпадковага» танца паступова ператвараецца ў высокае мастацтва з гарманічнымі харэаграфічнымі кампазіцыямі і асаблівай музыкай. У гэты час праславіліся беларускія балетныя школы Паставы, Слоніма, Шклова, Віцебска. Прафесіяналізм беларусаў неаднаразова адзначаўся тэатральнымі крытыкамі таго часу, сцвярджаючы, што іншыя спектаклі па сваёй пышнасці пераўзыходзілі нават маскоўскі балет. Беларуская тэатральная школа развівалася паралельна з еўрапейскім тэатрам. Беларускія школы і прыгонныя тэатры, народныя баталіі былі вядомыя. Пачаткам беларускага прафесійнага тэатра можна лічыць пастаноўку спектакля «Салянка» на лібрэта В. Дуніна-Марцінкевіча і музыкі С. Манюшкі. Гэта адбылося амаль 155 гадоў таму - 9 лютага 1852 года. Сёння ў Беларусі дзейнічаюць 29 прафесійных дзяржаўных тэатраў. Сярод іх больш за ўсё тэатраў драматургіі (19). У рэспубліцы таксама ёсць 7 тэатраў лялек (у кожным рэгіёне і сталіцы) і 3 музычных тэатра. У гэтай разнастайнасці тэатраў многія рэжысёры прысвяцілі сябе працы ў гэтых установах. І ў гэтым праекце мы хочам пагаварыць пра самых вядомых тэатральных рэжысёраў у Беларусі.';

const firstQuote = {
  author: 'Жарко Петан',
  text: "\"У тэатры рэжысёр - Бог, а акцёры, нажаль, атэісты.\"",
}

const secondQuote = {
  author: 'Джордж Бернард Шоу',
  text: "\"Праца рэжысёра несумяшчальна з акцёрскай гульнёй: акцёр пацерпіць няўдачу, калі крытычна зірне на сваіх партнёраў.\"",
}

const directorOfTheDay = 'Рэжысёр дня';

const directorPageTitles = {
  timeline: 'Хроніка',
  work: 'Работа',
  dateOfCreation: 'Дата стварэння',
  map: 'Карта',
  gallery: 'Галерэя'
}

export default {
  developersFeatures,
  worklogNav,
  tasksData,
  styleguideNav,
  colors,
  directors,
  developers,
  directorsLink: 'Рэжысёры',
  developersLink: 'Распрацоўшчыкі',
  homePageLink: 'Галоўная',
  worklogLink: 'Рабочы журнал',
  styleguideLink: 'Гід па стылі',
  close: 'Зачыніць',
  otherInfo: {
    title: 'Тэатральныя рэжысёры Беларусі'
  },
  mainText,
  addText,
  firstQuote,
  secondQuote,
  directorOfTheDay,
  directorPageTitles
}
