import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/portfolio/__docusaurus/debug',
    component: ComponentCreator('/portfolio/__docusaurus/debug', '040'),
    exact: true
  },
  {
    path: '/portfolio/__docusaurus/debug/config',
    component: ComponentCreator('/portfolio/__docusaurus/debug/config', '9ca'),
    exact: true
  },
  {
    path: '/portfolio/__docusaurus/debug/content',
    component: ComponentCreator('/portfolio/__docusaurus/debug/content', 'da5'),
    exact: true
  },
  {
    path: '/portfolio/__docusaurus/debug/globalData',
    component: ComponentCreator('/portfolio/__docusaurus/debug/globalData', '46a'),
    exact: true
  },
  {
    path: '/portfolio/__docusaurus/debug/metadata',
    component: ComponentCreator('/portfolio/__docusaurus/debug/metadata', '138'),
    exact: true
  },
  {
    path: '/portfolio/__docusaurus/debug/registry',
    component: ComponentCreator('/portfolio/__docusaurus/debug/registry', '3df'),
    exact: true
  },
  {
    path: '/portfolio/__docusaurus/debug/routes',
    component: ComponentCreator('/portfolio/__docusaurus/debug/routes', 'dd6'),
    exact: true
  },
  {
    path: '/portfolio/blog',
    component: ComponentCreator('/portfolio/blog', '3fe'),
    exact: true
  },
  {
    path: '/portfolio/blog/archive',
    component: ComponentCreator('/portfolio/blog/archive', '5f2'),
    exact: true
  },
  {
    path: '/portfolio/blog/authors',
    component: ComponentCreator('/portfolio/blog/authors', '569'),
    exact: true
  },
  {
    path: '/portfolio/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/portfolio/blog/authors/all-sebastien-lorber-articles', '4e7'),
    exact: true
  },
  {
    path: '/portfolio/blog/authors/yangshun',
    component: ComponentCreator('/portfolio/blog/authors/yangshun', '2c6'),
    exact: true
  },
  {
    path: '/portfolio/blog/first-blog-post',
    component: ComponentCreator('/portfolio/blog/first-blog-post', '3be'),
    exact: true
  },
  {
    path: '/portfolio/blog/long-blog-post',
    component: ComponentCreator('/portfolio/blog/long-blog-post', '0b6'),
    exact: true
  },
  {
    path: '/portfolio/blog/mdx-blog-post',
    component: ComponentCreator('/portfolio/blog/mdx-blog-post', 'dbe'),
    exact: true
  },
  {
    path: '/portfolio/blog/tags',
    component: ComponentCreator('/portfolio/blog/tags', '921'),
    exact: true
  },
  {
    path: '/portfolio/blog/tags/docusaurus',
    component: ComponentCreator('/portfolio/blog/tags/docusaurus', 'c72'),
    exact: true
  },
  {
    path: '/portfolio/blog/tags/facebook',
    component: ComponentCreator('/portfolio/blog/tags/facebook', '40e'),
    exact: true
  },
  {
    path: '/portfolio/blog/tags/hello',
    component: ComponentCreator('/portfolio/blog/tags/hello', 'c10'),
    exact: true
  },
  {
    path: '/portfolio/blog/tags/hola',
    component: ComponentCreator('/portfolio/blog/tags/hola', '006'),
    exact: true
  },
  {
    path: '/portfolio/blog/welcome',
    component: ComponentCreator('/portfolio/blog/welcome', '869'),
    exact: true
  },
  {
    path: '/portfolio/markdown-page',
    component: ComponentCreator('/portfolio/markdown-page', '642'),
    exact: true
  },
  {
    path: '/portfolio/docs',
    component: ComponentCreator('/portfolio/docs', '346'),
    routes: [
      {
        path: '/portfolio/docs',
        component: ComponentCreator('/portfolio/docs', '1b6'),
        routes: [
          {
            path: '/portfolio/docs',
            component: ComponentCreator('/portfolio/docs', '261'),
            routes: [
              {
                path: '/portfolio/docs/category/tutorial---basics',
                component: ComponentCreator('/portfolio/docs/category/tutorial---basics', 'e44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/category/tutorial---extras',
                component: ComponentCreator('/portfolio/docs/category/tutorial---extras', 'e1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/intro',
                component: ComponentCreator('/portfolio/docs/intro', '710'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/portfolio/docs/tutorial-basics/congratulations', 'bb6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/portfolio/docs/tutorial-basics/create-a-blog-post', 'f39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/portfolio/docs/tutorial-basics/create-a-document', '219'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/portfolio/docs/tutorial-basics/create-a-page', '479'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/portfolio/docs/tutorial-basics/deploy-your-site', '043'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/portfolio/docs/tutorial-basics/markdown-features', '6f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/portfolio/docs/tutorial-extras/manage-docs-versions', '06b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/portfolio/docs/tutorial-extras/translate-your-site', 'dff'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/portfolio/',
    component: ComponentCreator('/portfolio/', 'acb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
