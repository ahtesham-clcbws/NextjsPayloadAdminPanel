import type { CollectionConfig } from 'payload'

const ContactForm: CollectionConfig = {
  slug: 'contactForms',
  admin: {
      group: 'Form Submitions',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phoneNumber',
      type: 'text',
      required: true,
      minLength: 10,
      maxLength: 15,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
  ],
}

export default ContactForm;