export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe772c469f90d425c7cdaf7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qdkeeeyq',
                  apiId: '01e1534d-2acd-4a13-82c8-69b9a01d575e'
                },
                {
                  buildHookId: '5fe772c4ee5a2f8c6af7a50c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jmjqjted',
                  apiId: '975cf711-c450-4ab3-8467-70c4e43ffdd8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nrmarston/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jmjqjted.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
