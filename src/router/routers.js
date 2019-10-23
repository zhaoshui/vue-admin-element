
// 页面导入
import Login from '@/page/Login/Login'
import Layout from '@/common/Layout'
import Dashboard from '@/page/Dashboard/Dashboard'
import List from '@/page/List/List'
import List1 from '@/page/List/List1'
import List2 from '@/page/List/List2'
import Table from '@/page/Table/Table'
import Table1 from '@/page/Table/Table1'
import Table2 from '@/page/Table/Table2'

export default [
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path: '/',
      name: '仪表盘',
      icon:'el-icon-s-home',
      index:'1',
      to:'/Dashboard',
      redirect:'/Dashboard',
      component: Layout,
      children: [
      {
          path: '/Dashboard',
          name: '仪表盘',
          to:'/Dashboard',
          component: Dashboard,
          icon:'el-icon-s-home',
      },
      {
        path: '/list',
        name: '列表页',
        index:'2',
        // component: () => import('@/components/HelloWorld')
        component: List,
        icon:'el-icon-s-order',
        children: [
          {
            path: '/list/list1',
            name: '列表1',
            component: List1,
            icon:'el-icon-s-order',
          },
          {
            path: '/list/list2',
            name: '列表2',
            component: List2,
            icon:'el-icon-s-order',
          }
        ]
      },
      {
        path: '/table',
        name: '表格页',
        index:'3',
        component: Table,
        icon:'el-icon-s-management',
        children: [
          {
            path: '/table/table1',
            name: '表格1',
            component: Table1,
            icon:'el-icon-s-management',
          },
          {
            path: '/table/table2',
            name: '表格2',
            component: Table2,
            icon:'el-icon-s-management',
          }
        ]
      }]
    }
  ]