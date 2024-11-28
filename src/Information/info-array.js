const links = {
  link: [
    // MARKETING,
    // SR_Logo,
    // Work title,
    // SCALES,
    1, 2, 3, 4, 5, 6, 7, 8, 9
  ],
  descr: {
    eng: [
      "A saw is cutting marketing sign.",
      "A SR logo with laurels and three columns in the background.",
      "A neon themed visual.",
      "Scales weighing an anvil and a briefcase.",
      "Classification in Machine Learning poster.",
      "The Turing test poster.",
      "Robot holding a brain poster.",
      "STRIDE methodology poster.",
    ],
    srb: [
      "Testera koja seče natpis marketing.",
      "SR logo sa lovorikama i sa tri stuba u pozadini.",
      "Vizual sa neonskom temom.",
      "Vaga koja odmerava nakovanj sa akten tašnom.",
      "Poster klasifikacija kod mašinskog učenja.",
      "Turing test poster.",
      "Robot drži mozak u rukama poster.",
      "STRIDE metodologija poster.",
    ],
  },
};

const engInfo = {
  nav: ["srb", "eng", "About", "Skills", "Contact"],
  home: [
    "Well hello,",
    "My name is Stefan",
    "And I love creating wonderful digital things like this.",
    "CV click here",
  ],
  about: [
    "As you have already seen, my name is Stefan and I started working on my frontend development skills about a year ago. The enthusiasm for this topic reached its peak when I enrolled in the Comtrade CODE academy, which is based here in Belgrade. Since completing the course, I've been continuously working on my resume.",

    'I also have experience with digital marketing. I participated as a volunteer in a mental health awareness project called "Svako može da pukne", organized by mental health awareness network NaUm from Belgrade. My task in this project was to create visual content.',
    "Apart from that, I am an enthusiastic nature lover who is at home in the forest.",
    "P.S. In case you haven't noticed, there is a resume file hidden on an avatar on the home page.",
  ],
  aboutImg: "This is non cartonized me.",
  skills: {
    a: "Hard skills:",
    hardSkills: [
      "React JS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SCSS",
      "Canva",
      "Photoshop",
      "SEO",
    ],
    b: "Soft skills:",
    softSkills: [
      "Communicative",
      "Team player",
      "Problem solver",
      "Willing to learn and improve",
      "Creative",
    ],
  },
  contact: {
    message: [
      "Here you can find my GitHub project portfolio, my LinkedIn profile and my contact email address,",
      "I hope I have aroused your interest and look forward to hearing from you.",
    ],
    email: ["E-mail adress:", "stefanrandjelovic413@gmail.com"],
    gitHub: ["GitHub profile:", "https://github.com/StefanRandjelovic"],
    socialMedia: {
      socialM: "Social media:",
      linkedIn: [
        "LinkedIn:",
        "https://www.linkedin.com/in/stefan-randjelovic-4948b3160",
      ],
    },
  },
  errorPage: "Could not find this page.🤯",
  gallery: {
    name: "Gallery",
    description:
      "Here are some of my visual creative works, of course there will be more in the future, stay tuned...",
  },
};

const srbInfo = {
  nav: ["O meni", "Veštine", "Kontakt"],
  home: [
    "Pozdrav,",
    "Zovem se Stefan",
    "I volim da pravim lepe digitalne kreacije kao što je ova.",
    "CV kilikni ovde",
  ],
  about: [
    "Kao što ste već mogli videti, moje ime je Stefan, pre odprilke godinu dana sam počeo sa radom na mojim front-end development veštinama. Entuzijazam za ovom temom je dostigao svoj vrhunac kada sam počeo da pohađam Comtrade CODE akademiju koja ima svoje sedište ovde u Beogradu. Od kada sam završio obuku, kontinuirano radim na svom portfoliu.",
    'Takođe imam iskustvo u digitalnom marketingu, volontirao sam na projektu "Svako može da pukne" vezanom za podizanje svesti o značaju mentalnog zdravlja, organizovanog od strane mreže za mentalno zdravlje NaUM iz Beograda. Moja uloga u projektu bila je pravljenje vizuelnog sadržaja.',
    "Pored toga sam strastveni zaljubljenik u prirodu, koji je u šumi kao kod svoje kuće.",
    "P.S. Za slučaj da niste primetili, moj rezime file se nalazi skriven unutar avatara u Home stranici.",
  ],
  aboutImg: "Ovo sam ja u ne nacrtanoj verziji.",
  skills: {
    a: "Tvrde veštine:",
    hardSkills: [
      "React JS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SCSS",
      "Canva",
      "Photoshop",
      "SEO",
    ],
    b: "Meke veštine:",
    softSkills: [
      "Komunikativan",
      "Timski igrač",
      "Rešavanje problema",
      "Voljan da uči i usavršava se",
      "Kreativan",
    ],
  },
  contact: {
    message: [
      "Ovde možete pronaći moj GitHub projekt portfolio, LinkedIn profil, i moju email adresu za kontakt,",
      "Nadam se da sam vas zainteresovao, i očekujem da se čujem sa vama",
    ],
    email: "E-mail adresa:",
    gitHub: "GitHub profil:",
    socialMedia: {
      socialM: "Društvene mreže:",
    },
  },
  errorPage: "Ne možemo pronaći ovu stranicu.🤯",
  gallery: {
    name: "Galerija",
    description:
      "Evo nekih od mojih vizuelnih kreacija, naravno biće ih više u budućnosti, tako da ostanite samnom...",
  },
};

export { engInfo, srbInfo, links };
