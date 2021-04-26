export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '6086603012176d4d5f45c7bd',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-4fpbgivd',
                  apiId: '90057175-076f-4b86-a177-d6357ac1a94a'
                },
                {
                  buildHookId: '608660315d40b5e95cb7258a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mrv2v3ss',
                  apiId: '76549bff-cd72-4ad0-b39d-3f35ad33ab09'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/raveling/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mrv2v3ss.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
