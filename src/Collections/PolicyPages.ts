import { slugField } from '@/fields/slug'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

export const PolicyPages: CollectionConfig = {
    slug: 'policyPages',
    admin: {
        group: 'Pages',
        useAsTitle: 'title',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        ...slugField(),
        {
            name: 'summary',
            type: 'textarea',
            required: true,
        },
        {
            name: 'content',
            type: 'richText',
            editor: lexicalEditor({}),
            required: true,
        }
    ],
    timestamps: true
}