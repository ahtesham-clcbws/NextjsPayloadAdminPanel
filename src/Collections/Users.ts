import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    read: ({ req: { user }, data }) => {
      return Boolean(user?.role == 'superadmin')
    },
    create: ({ req: { user }, data }) => {
      return Boolean(user?.role == 'superadmin')
    }
  },
  admin: {
    group: 'Others',
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      access: {
        update: ({ req: { user }, data }) => {
          return Boolean(user?.role == 'superadmin')
        }
      },
      name: 'role',
      type: 'select',
      defaultValue: "admin",
      options: [
        {
          label: "Super Admin",
          value: "superadmin",
        },
        {
          label: "Admin",
          value: "admin",
        }
      ]
    }
  ],
}