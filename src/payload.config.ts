// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { EXPERIMENTAL_TableFeature, FixedToolbarFeature, LinkFeature, UploadFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Collections } from './Collections'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { resendAdapter } from '@payloadcms/email-resend'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { Media } from './Collections/Media'
import { Globals } from './globals'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const adminConfig = {
  user: 'users',
  importMap: {
    baseDir: path.resolve(dirname),
  }
};

const editorConfig = () => {
  return lexicalEditor({
    features: ({ defaultFeatures, rootFeatures }) => [
      ...defaultFeatures,
      FixedToolbarFeature(),
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
  })
}
const pluginsConfig = [
  nestedDocsPlugin({
    collections: ['categories', 'services'],
  }),
  vercelBlobStorage({
    enabled: true, // Optional, defaults to true,
    addRandomSuffix: true,
    // Specify which collections should use Vercel Blob
    collections: {
      [Media.slug]: true
    },
    // Token provided by Vercel once Blob storage is added to your Vercel project
    token: process.env.BLOB_READ_WRITE_TOKEN || '',
  }),
];

const emailConfig = () => {
  return resendAdapter({
    defaultFromAddress: process.env.EMAIL_FROM || 'noreply@clcbws.com',
    defaultFromName: process.env.EMAIL_FROM_NAME || 'Broadway Web Services',
    apiKey: process.env.RESEND_API_KEY || '',
  })
}

export default buildConfig({
  admin: {
    ...adminConfig
  },
  collections: [...Collections],
  globals: [...Globals],
  upload: {
    limits: {
      fileSize: 500000, // 500KB, written in bytes
    },
  },
  editor: editorConfig(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  serverURL: process.env.SERVER_URL,
  plugins: [...pluginsConfig],
  email: emailConfig(),
  debug: true,
})
