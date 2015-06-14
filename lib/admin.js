AdminConfig = {
  name: 'Ramon Serrano',
  collections: {
    Categories: {
      icon: 'tag',
      tableColumns: [
        {label: 'ID', name: '_id'},
        {label: 'Name', name: 'name'},
      ]
    },
    Projects: {
      icon: 'briefcase',
      tableColumns: [
        {label: 'ID', name: '_id'},
        {label: 'Title', name: 'title'},
        {label: 'Category', name: 'category'},
        {label: 'Description', name: 'description'},
        {label: 'URL Image', name: 'url_image'}
      ],
      color: 'red'
    },
    Tags: {
      icon: 'tags',
      tableColumns: [
        {label: 'ID', name: '_id'},
        {label: 'Name', name: 'name'},
      ]
    }
  },
  autoForm:{
    omitFields: ['createdAt','updatedAt']
  }
};
