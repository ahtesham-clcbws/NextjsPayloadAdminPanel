import { GlobalConfig } from 'payload'

export const Branding: GlobalConfig = {
    admin: {
        group: 'Settings',
    },
    slug: 'site-branding',
    fields: [
        {
            name: "title",
            type: 'text'
        },
        {
            name: "tagline",
            type: 'text'
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'primaryColor',
                    type: 'text'
                },
                {
                    name: 'secondaryColor',
                    type: 'text'
                }
            ]
        },
        {
            type: 'row',
            fields: [
                {
                    name: "favicon",
                    type: 'upload', // required
                    relationTo: 'media', // required
                    required: true,
                    filterOptions: {
                        mimeType: { contains: 'image' },
                    },
                    admin: {
                        width: '30%',
                    },
                },
                {
                    name: "logo",
                    type: 'upload', // required
                    relationTo: 'media', // required
                    required: true,
                    filterOptions: {
                        mimeType: { contains: 'image' },
                    },
                    admin: {
                        width: '35%',
                    },
                },
                {
                    name: "logoDark",
                    type: 'upload', // required
                    relationTo: 'media', // required
                    required: true,
                    filterOptions: {
                        mimeType: { contains: 'image' },
                    },
                    admin: {
                        width: '35%',
                    },
                }
            ]
        }
    ],
}