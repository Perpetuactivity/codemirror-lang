import { LRLanguage, LanguageSupport } from "@codemirror/language";

declare const aplLanguage: LRLanguage;

declare function apl(): LanguageSupport;

export { apl, aplLanguage };