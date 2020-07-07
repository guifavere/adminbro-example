import AdminBro from 'admin-bro';

// resources
import Article from '../app/schemas/Article';
import User from '../app/schemas/User';

export default {
  branding: { companyName: 'Admin example' },
  dashboard: { component: require('../../../client/src/components/dashboard') },
  resources: [
    { resource: User },
    {
      resource: Article,
      options: {
        properties: {
          body: { type: 'richtext' },
          created_at: { isVisible: { list: true, filter: false, show: true, edit: false } },
        },
      },
    },
  ],
  rootPath: '/admin2',
};
