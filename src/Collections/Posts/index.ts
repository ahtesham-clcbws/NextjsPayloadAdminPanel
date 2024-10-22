import { slugField } from '@/fields/slug'
import { EXPERIMENTAL_TableFeature, FixedToolbarFeature, lexicalEditor, LinkFeature, UploadFeature } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
    slug: 'posts',
    admin: {
        group: 'Blog',
        useAsTitle: 'title',
    },
    versions: {
        drafts: true,
    },
    access: {
      read: () => true,
    },
    fields: [
        {
            name: 'cover', // required
            type: 'upload', // required
            relationTo: 'media', // required
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
            name: 'categories',
            type: 'relationship',
            relationTo: 'categories',
            hasMany: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'publishedAt',
            type: 'date',
            admin: {
                position: 'sidebar',
                date: {
                    pickerAppearance: 'dayAndTime',
                },
            },
            hooks: {
                beforeChange: [
                    ({ siblingData, value }) => {
                        if (siblingData._status === 'published' && !value) {
                            return new Date()
                        }
                        return value
                    },
                ],
            },
        },
        {
            name: 'summary',
            type: 'textarea',
            required: true,
        },
        ...slugField(),
        {
            name: 'content',
            type: 'richText',
            // Pass the Slate editor here and configure it accordingly
            editor: lexicalEditor({
                features: ({ defaultFeatures, rootFeatures }) => [
                    ...defaultFeatures,
                    FixedToolbarFeature({
                        applyToFocusedEditor: true
                    }),
                    EXPERIMENTAL_TableFeature(),
                    LinkFeature({
                        // Example showing how to customize the built-in fields
                        // of the Link feature
                        fields: ({ defaultFields }) => [
                            ...defaultFields,
                            {
                                name: 'rel',
                                label: 'Rel Attribute',
                                type: 'select',
                                hasMany: true,
                                options: ['noopener', 'noreferrer', 'nofollow'],
                                admin: {
                                    description:
                                        'The rel attribute defines the relationship between a linked resource and the current document. This is a custom link field.',
                                },
                            },
                        ],
                    }),
                    UploadFeature({
                        collections: {
                            uploads: {
                                // Example showing how to customize the built-in fields
                                // of the Upload feature
                                fields: [
                                    {
                                        name: 'caption',
                                        type: 'richText',
                                        editor: lexicalEditor(),
                                    },
                                ],
                            },
                        },
                    }),
                    // This is incredibly powerful. You can re-use your Payload blocks
                    // directly in the Lexical editor as follows:
                    // BlocksFeature({
                    //   blocks: [Banner, CallToAction],
                    // }),
                ],
            }),
        },
        {
            name: 'tags',
            type: 'text',
            hasMany: true,
            required: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'relatedPosts',
            type: 'relationship',
            relationTo: 'posts',
            hasMany: true,
            filterOptions: ({ id }) => {
                return {
                    id: {
                        not_in: [id],
                    },
                }
            },
        },
    ],
    timestamps: true
}