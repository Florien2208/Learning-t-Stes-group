import i18next from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    // lng: "en",
    resources: {
      en: {
        translation: {
          Home: "HOME",
          About: "ABOUT",
          Login: "LOGIN",
          App: "STES GROUP",
          Sign: "sign in",
          Signupdes: "Sign in to your account",
          Email: "enter email",
          welcomedes:
            "Welcome to the electrifying world of DJ Flo! Prepare to embark on a journey of pulsating beats, infectious rhythms, and unforgettable melodies. Dive into a realm where music transcends boundaries and ignites the dance floor. Get ready to groove with DJ Flo!",
          GetStart: "Get Started",
          wel: "Welcome to Our Website",
          Aboutd:
            "STES Group Ltd (Seed Technology Engineering and Science) is a private company founded in 2015 with objective to develop digital solutions, provides training in Internet of Things (IoT) and other different emerging technologies. STES Group young engineers were supported by the Rwandan Government to undertake different trainings in USA, Japan, India, South Korea and Israel. This has equipped them with practical hands on skills that enabled them to develop different projects that were awarded both locally and internationally",
          bout: "About Us",
          Signup: "Signup",
        },
      },
      fr: {
        translation: {
          Home: "ACCUEL",
          About: "À propos",
          Login: "CONNEXTION",

          App: "STES GROUP",
          Sign: "entree",
          Signupdes: "Connectez-vous à votre compte",
          Email: "Adresse e-mail",
          welcomedes:
            "Bienvenue dans le monde électrisant de DJ Flo ! Préparez-vous à embarquer pour un voyage de rythmes palpitants, de rythmes entraînants et de mélodies inoubliables. Plongez dans un univers où la musique transcende les frontières et enflamme la piste de danse. Préparez-vous à danser avec DJ Flo !",
          GetStart: "commencer",
          wel: "Bienvenue sur mon site web",
          Aboutd:
            "STES Group Ltd (Seed Technology Engineering and Science) est une société privée fondée en 2015 dans le but de développer des solutions numériques, de dispenser des formations sur l'Internet des objets (IoT) et d'autres technologies émergentes. Les jeunes ingénieurs du STES Group ont été soutenus par le gouvernement rwandais pour suivre différentes formations aux États-Unis, au Japon, en Inde, en Corée du Sud et en Israël. Cela leur a permis d'acquérir des compétences pratiques leur permettant de développer différents projets qui ont été primés tant au niveau local qu'international.",
          bout: "À PROPOS DE",
          Signup: "Inscription",
        },
      },
      kin: {
        translation: {
          Home: "AHABANZA",
          About: "IBINDI",
          Login: "INJIRA",
          App: "STES GROUP",
          Sign: "injira",
          Signupdes: "INJIRA MURI KONTI YAWE",
          Email: "Shyiramo email yawe",
          welcomedes:
            "Murakaza neza mu isi y'imyaka ya DJ Flo! Tangira gukora inshingano y'inzira y'ibyishimo, ibyifuzo bishimishije, n'amabanga atangwa. Turangire mu bihugu bya muzika aho muzika irangwa n'ibyabaye n'ikirere. Turabasha kugenda kudansi na DJ Flo!",
          GetStart: "Tangira",
          wel: "Murakaza neza kuri website yanjye",
          Aboutd:
            "STES Group Ltd (Seed Technology Engineering and Science) ni ikigo gishya cy’ibihugu rikorana amaboko y’ubuhanga gusuzumisha imikorere y’ubushobozi bw’interneti y’ibintu (IoT) n’ibindi bya tekinoloji zitandukanye. Abahanga b’inkoramaraso b’ikigo cya STES babaye bafashwe na Leta y’u Rwanda kwiga mu buryo bwa mbere muri Leta zunze ubumwe z’Amerika, Ubuyapani, Ubuhindi, Korea y’amajyepfo n’Isirayeli. Ibyo byabo bishimisha ubushobozi bwo kwigarurira ibikorwa byinshi by’umurage bishimishijwe kimwe mu bice by’ibihugu byo mu bihugu bitandukanye.",
          bout: "ANDI MAKURU",
          Signup: "Fungura Konte",
        },
      },
    },
  });
