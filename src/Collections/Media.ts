import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    group: "Others",
    // hidden: ({ user }): boolean => {
    //   return Boolean(user.role == 'admin');
    // }
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text'
    },
  ],
  upload: {
    // disableLocalStorage: true,
    mimeTypes: ['image/*']
  },
}
