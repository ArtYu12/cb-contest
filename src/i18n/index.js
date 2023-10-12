import ru from './locales/ru.json' assert { type: "json" };
import en from './locales/en.json' assert { type: "json" };
import es from './locales/es.json' assert { type: "json" };
import pt from './locales/pt.json' assert { type: "json" };
import uk from './locales/uk.json' assert { type: "json" };
import zh from './locales/zh.json' assert { type: "json" };
import tr from './locales/tr.json' assert { type: "json" };
import de from './locales/de.json' assert { type: "json" };
import fr from './locales/fr.json' assert { type: "json" };
import it from './locales/it.json' assert { type: "json" };
import ja from './locales/ja.json' assert { type: "json" };
import id from './locales/id.json' assert { type: "json" };
import pl from './locales/pl.json' assert { type: "json" };
import nl from './locales/nl.json' assert { type: "json" };

export const resources = {
    ru: { translation: ru },
    en: { translation: en },
    es: { translation: es },
    pt: { translation: pt },
    uk: { translation: uk },
    zh: { translation: zh },
    tr: { translation: tr },
    de: { translation: de },
    fr: { translation: fr },
    it: { translation: it },
    ja: { translation: ja },
    id: { translation: id },
    pl: { translation: pl },
    nl: { translation: nl },
}

export function _(lang, key) {
    return resources[lang].translation[key]
}