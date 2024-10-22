import type { CollectionConfig } from "payload";
import Categories from "./Categories";
import ContactForm from "./Forms/ContactForm";
import QuotationForm from "./Forms/QuotationForm";
import { Media } from "./Media";
import { Pages } from "./Pages";
import { PolicyPages } from "./PolicyPages";
import { Posts } from "./Posts";
import Services from "./Services";
import Solutions from "./Solutions";
import { Users } from "./Users";

export const Collections: CollectionConfig[] = [
    QuotationForm,
    ContactForm,

    Categories,
    Posts,

    PolicyPages,
    Services,
    Solutions,

    Media,
    Pages,
    Users
];