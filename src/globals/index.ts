import type { GlobalConfig } from "payload";
import { Branding } from "./Settings/Branding";
import { Contacts } from "./Settings/Contacts";
import { SiteData } from "./Settings/SiteData";

export const Globals: GlobalConfig[] = [
    Branding,
    Contacts,
    SiteData
];