import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "./en.json";
import RU from "./ru.json";

i18next.use(initReactI18next).init({
	lng: "ru",
	resources: {
		ru: {
			translation: RU,
		},
		en: {
			translation: EN,
		},
	},
	keySeparator: ".",
});
