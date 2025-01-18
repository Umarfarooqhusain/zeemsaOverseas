export default {
  name: 'topitem',
  title: 'TopItem',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Item Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Item Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'products', // Array to store product information directly within topitem
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Product Name',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Product Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
}
