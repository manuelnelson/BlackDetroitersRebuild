const mainTitle = 'Black Detroiters Rebuild'


export const routes : IRoute =  
  {
    home:  {
      path: '/',
      name: 'home',
      meta: {
        title: `Home - ${mainTitle}`
      }
    },
    about:  {
      path: '/about',
      name: 'about',
      meta: {
        title: `About Us - ${mainTitle}`
      }
    },
    problem: {
      path: '/why',
      name: 'why',
      meta: {
        title: `Our Why - ${mainTitle}`
      }
    },
    solution: {
      path: '/plan',
      name: 'plan',
      meta: {
        title: `Our Plan - ${mainTitle}`
      }
    },
    work: {
      path: '/work',
      name: 'work',
      meta: {
        title: `Work - ${mainTitle}`
      }
    },
    rebuild: {
      path: '/rebuild',
      name: 'rebuild',
      meta: {
        title: `Rebuild - ${mainTitle}`
      }
    },
    support: {
      path: '/support',
      name: 'support',
      meta: {
        title: `Support - ${mainTitle}`
      }
    },
  };

class RouteRecordRaw {
  path!: string
  name!: string
  meta!: {
    title: string
  }

}


export interface IRoute {
  home: RouteRecordRaw,
  work: RouteRecordRaw,
  problem: RouteRecordRaw,
  solution: RouteRecordRaw,
  rebuild: RouteRecordRaw,
  support: RouteRecordRaw,
  about: RouteRecordRaw
}