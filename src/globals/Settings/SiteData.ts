import { GlobalConfig } from 'payload'

export const SiteData: GlobalConfig = {
    admin: {
        group: 'Settings',
    },
    slug: 'site-data',
    fields: [
        {
            label: "Homepage Banners",
            type: 'collapsible',
            fields: [
                {
                    name: "banners",
                    type: 'array',
                    fields: [
                        {
                            name: 'image',
                            type: 'upload',
                            relationTo: 'media',
                            required: true
                        },
                        {
                            name: 'title',
                            type: "text",
                        },
                        {
                            name: "subTitle",
                            type: 'text'
                        },
                        {
                            name: 'description',
                            type: 'textarea'
                        },
                        {
                            name: 'buttons',
                            type: 'array',
                            fields: [
                                {
                                    type: 'row',
                                    fields: [
                                        {
                                            name: 'buttonText',
                                            type: 'text'
                                        },
                                        {
                                            name: 'buttonLink',
                                            type: 'text'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: 'About Us',
            type: 'collapsible',
            fields: [
                {
                    name: 'aboutUs',
                    type: 'group',
                    fields: [
                        {
                            type: 'row',
                            fields: [
                                {
                                    name: 'image',
                                    type: 'upload',
                                    relationTo: 'media',
                                    admin: { width: '100%' }
                                },
                                {
                                    name: 'title',
                                    type: 'text',
                                    admin: { width: '50%' }
                                },
                                {
                                    name: 'subTitle',
                                    type: 'text',
                                    admin: { width: '50%' }
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                    admin: { width: '100%' }
                                },
                                {
                                    name: 'buttonText',
                                    type: 'text',
                                    admin: { width: '50%' }
                                },
                                {
                                    name: 'buttonLink',
                                    type: 'text',
                                    admin: { width: '50%' }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: 'Feature Cards',
            type: 'collapsible',
            fields: [
                {
                    name: 'featureCards',
                    type: 'array',
                    fields: [{
                        type: 'row',
                        fields: [
                            {
                                name: 'image',
                                type: 'upload',
                                relationTo: 'media',
                                required: true,
                                admin: { width: '100%' }
                            },
                            {
                                name: 'title',
                                type: "text"
                            },
                            {
                                name: "subTitle",
                                type: 'text'
                            },
                            {
                                name: 'buttonText',
                                type: 'text'
                            },
                            {
                                name: 'buttonLink',
                                type: 'text'
                            },
                            {
                                name: 'description',
                                type: 'textarea',
                                admin: { width: '100%' }
                            },
                        ]
                    }
                    ]
                }

            ]
        }
    ],
}