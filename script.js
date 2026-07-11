// ========================================
// MenMs Origin
// script.js
// ========================================

const translations = {
    en: {
        navStory: "Our Story",

        heroTitle: "Every Card Has a Story.",
        heroText: "Premium Magic: The Gathering cards for players and collectors.",
        heroButton: "Visit our Cardmarket Store",

        aboutTitle: "Our Story",
        aboutText: "MenMs Origin started from a shared passion for Magic: The Gathering. What began with opening boosters, collecting cards and building decks slowly evolved into a trusted Cardmarket store. We carefully inspect every card before shipping because quality, reliability and customer satisfaction always come first. We truly believe that every card has a story.",

        ctaTitle: "Ready for your next card?",
        ctaButton: "Shop on Cardmarket",

        language: "NL"
    },

    nl: {
        navStory: "Ons Verhaal",

        heroTitle: "Elke kaart heeft een verhaal.",
        heroText: "Premium Magic: The Gathering kaarten voor spelers en verzamelaars.",
        heroButton: "Bezoek onze Cardmarket Store",

        aboutTitle: "Ons Verhaal",
        aboutText: "MenMs Origin is ontstaan uit een passie voor Magic: The Gathering. Wat begon met boosters openen, kaarten verzamelen en decks bouwen groeide uit tot een betrouwbare Cardmarket-winkel. Iedere kaart wordt zorgvuldig gecontroleerd voordat deze wordt verzonden. Kwaliteit, betrouwbaarheid en persoonlijke service staan bij ons voorop. Wij geloven dat iedere kaart een eigen verhaal heeft.",

        ctaTitle: "Klaar voor jouw volgende kaart?",
        ctaButton: "Bekijk Cardmarket",

        language: "EN"
    }
};

let currentLanguage = "en";

function setLanguage(lang){

    currentLanguage = lang;

    const t = translations[lang];

    document.documentElement.lang = lang;

    document.getElementById("nav-story").textContent = t.navStory;

    document.getElementById("hero-title").textContent = t.heroTitle;
    document.getElementById("hero-text").textContent = t.heroText;
    document.getElementById("hero-button").textContent = t.heroButton;

    document.getElementById("about-title").textContent = t.aboutTitle;
    document.getElementById("about-text").textContent = t.aboutText;

    document.getElementById("cta-title").textContent = t.ctaTitle;
    document.getElementById("cta-button").textContent = t.ctaButton;

    document.querySelector(".lang").textContent = t.language;
}

document.addEventListener("DOMContentLoaded", () => {

    const languageButton = document.querySelector(".lang");

    languageButton.addEventListener("click", () => {

        if(currentLanguage === "en"){
            setLanguage("nl");
        }else{
            setLanguage("en");
        }

    });

    setLanguage("en");

});