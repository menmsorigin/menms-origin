const translations = {

    en:{

        navStory:"About",

        heroTitle:"Every Card Has A Story.",

        heroText:"Trusted by players. Built by collectors.<br><br>Premium Magic: The Gathering cards, carefully inspected and shipped with care.",

        heroButton:"Visit Cardmarket",

        aboutTitle:"About MenMs Origin",

        aboutText:"MenMs Origin began with a passion for Magic: The Gathering. What started as collecting, opening boosters and building decks gradually became a trusted Cardmarket store. Every card is carefully inspected before shipment because quality, reliability and customer satisfaction always come first. Every card has a story—and we're proud to help yours continue.",

        whyTitle:"Why MenMs Origin?",

        whyText:"🛡 Carefully inspected cards before shipping.<br><br>📦 Secure packaging for every order.<br><br>⭐ Personal service and fast communication.<br><br>🎴 Built by collectors, for collectors.",

        ctaTitle:"Ready for your next card?",

        ctaButton:"Visit Cardmarket",

        footer:"Every Card Has A Story."

    },

    nl:{

        navStory:"Over",

        heroTitle:"Elke kaart heeft een verhaal.",

        heroText:"Vertrouwd door spelers. Gebouwd door verzamelaars.<br><br>Premium Magic: The Gathering kaarten, zorgvuldig gecontroleerd en met zorg verzonden.",

        heroButton:"Bezoek Cardmarket",

        aboutTitle:"Over MenMs Origin",

        aboutText:"MenMs Origin is ontstaan uit een passie voor Magic: The Gathering. Wat begon met verzamelen, boosters openen en decks bouwen groeide uit tot een betrouwbare Cardmarket-winkel. Elke kaart wordt zorgvuldig gecontroleerd voordat deze wordt verzonden. Kwaliteit, betrouwbaarheid en persoonlijke service staan altijd voorop. Iedere kaart heeft een verhaal.",

        whyTitle:"Waarom MenMs Origin?",

        whyText:"🛡 Elke kaart wordt zorgvuldig gecontroleerd.<br><br>📦 Veilig verpakt voor iedere bestelling.<br><br>⭐ Persoonlijke service en snelle communicatie.<br><br>🎴 Door verzamelaars, voor verzamelaars.",

        ctaTitle:"Klaar voor je volgende kaart?",

        ctaButton:"Bezoek Cardmarket",

        footer:"Elke kaart heeft een verhaal."

    }

};

let language = localStorage.getItem("language") || "en";

function updateLanguage(){

    const t = translations[language];

    document.documentElement.lang = language;

    document.getElementById("nav-story").textContent = t.navStory;

    document.getElementById("hero-title").textContent = t.heroTitle;

    document.getElementById("hero-text").innerHTML = t.heroText;

    document.getElementById("hero-button").textContent = t.heroButton;

    document.getElementById("about-title").textContent = t.aboutTitle;

    document.getElementById("about-text").textContent = t.aboutText;

    document.getElementById("why-title").textContent = t.whyTitle;

    document.getElementById("why-text").innerHTML = t.whyText;

    document.getElementById("cta-title").textContent = t.ctaTitle;

    document.getElementById("cta-button").textContent = t.ctaButton;

    document.getElementById("footer-text").textContent = t.footer;

    document.getElementById("lang-switch").textContent =
        language === "en" ? "NL" : "EN";

}

document.getElementById("lang-switch").addEventListener("click",function(){

    language = language === "en" ? "nl" : "en";

    localStorage.setItem("language",language);

    updateLanguage();

});

updateLanguage();
