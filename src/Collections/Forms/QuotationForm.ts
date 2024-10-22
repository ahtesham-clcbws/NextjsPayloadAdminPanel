
import type { CollectionConfig } from 'payload'

const QuotationForm: CollectionConfig = {
    slug: 'quotationForms',
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
            name: 'company',
            type: 'text',
        },
        {
            name: 'service',
            type: 'relationship',
            relationTo: 'services',
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'message',
            type: 'textarea',
            required: true,
        }
    ],
}

export default QuotationForm; 
