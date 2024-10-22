import { slugField } from '@/fields/slug';
import type { CollectionConfig } from 'payload'

const Solutions: CollectionConfig = {
    slug: 'solutions',
    admin: {
        group: 'Pages',
        useAsTitle: 'title',
    },
    access: {
      read: () => true,
    },
    // versions: {
    //     drafts: true
    // },
    fields: [
        {
            name: 'cover',
            type: 'upload',
            relationTo: 'media',
            required: true,
            filterOptions: {
                mimeType: { contains: 'image' },
            },
        },
        {
            name: 'title',
            type: 'text',
            required: true,
            index: true,
        },
        {
            name: 'summary',
            type: 'textarea',
            required: true,
            index: true,
        },
        // Features
        {
            name: 'Content',
            type: 'group',
            fields: [
                {
                    name: 'features',
                    type: 'array',
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'content',
                            type: 'textarea',
                            required: true,
                        },
                        {
                            name: 'feature_image', // required
                            type: 'upload', // required
                            relationTo: 'media', // required
                            required: true,
                            filterOptions: {
                                mimeType: { contains: 'image' },
                            },
                        },
                    ],
                },
                {
                    name: 'services',
                    type: 'array',
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'content',
                            type: 'textarea',
                            required: true,
                        }
                    ],
                },
            ]
        },
        // call to action
        {
            name: 'call_to_action',
            label: 'Call to Action Block',
            type: 'group',
            admin: {
              position: 'sidebar',
            },
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'summary',
                    type: 'textarea',
                    required: true,
                },
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'button_text',
                            label: 'Button Text',
                            type: 'text',
                            required: true,
                            maxLength: 50,
                            defaultValue: 'Get a free consultation'
                        },
                        {
                            name: 'button_link',
                            label: 'Button Link',
                            type: 'select',
                            admin: {
                                isClearable: true
                            },
                            options: [
                                {
                                    label: 'Contact Page',
                                    value: 'contact',
                                },
                                {
                                    label: 'Contact Popup',
                                    value: 'contact_popup',
                                },
                                {
                                    label: 'Quotation Page',
                                    value: 'quotation',
                                },
                                {
                                    label: 'Quotation Popup',
                                    value: 'quotation_popup',
                                },
                            ]
                        }
                    ]
                }
            ]
        },
        // FAQ
        {
            name: 'faq',
            label: 'Frequently Asked Questions',
            type: 'array',
            minRows: 1,
            fields: [
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'question',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'answer',
                            type: 'text',
                            required: true,
                        }
                    ]
                }
            ],
        },
        ...slugField()
    ],
    timestamps: true
}

export default Solutions 