import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as neededß
    {
      name: 'role',
      type: 'select',
      hasMany: false,
      options: ['admin', 'user'],
    },
    {
      name: 'firstName',
      type: 'text',
    },
    {
      name: 'lastName',
      type: 'text',
    },
    {
      name: 'phone',
      type: 'text',
    },

    {
      name: 'fullName',
      type: 'text',
      admin: {
        readOnly: true,
        components: {
          Field: '@/collections/CustomFields/CustomFullNameTextFieldClient',
        },
      },
    },
    {
      name: 'serverFullName',
      type: 'text',
      admin: {
        readOnly: true,
        components: {
          Field: '@/collections/CustomFields/CustomFullNameTextFieldServer',
        },
      },
    },
  ],
}
