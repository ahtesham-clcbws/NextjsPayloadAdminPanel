import { GlobalConfig } from 'payload'

export const Contacts: GlobalConfig = {
    admin: {
        group: 'Settings',
    },
    slug: 'site-contacts',
    fields: [
        {
            name: "whatsApp",
            type: "number",
        },
        {
            name: "emails",
            type: 'array',
            maxRows: 3,
            fields: [
                {
                    name: "email",
                    type: "email",
                }
            ]
        },
        {
            name: "phoneNumbers",
            type: 'array',
            maxRows: 3,
            fields: [
                {
                    name: "phoneNumber",
                    type: "number",
                }
            ]
        },
        {
            name: "addresses",
            type: 'array',
            maxRows: 3,
            fields: [
                {
                    name: "streetAddress",
                    type: "text",
                },
                {
                    name: "pincode",
                    type: "text",
                },
                {
                    name: "city",
                    type: "text",
                },
                {
                    name: "state",
                    type: "text",
                },
                {
                    name: "country",
                    type: "text",
                },
            ]
        },
        {
            name: "googleMapLink",
            type: "text"
        }
    ],
}