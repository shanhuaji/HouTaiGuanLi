
export default [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ 'Views/home'),
  },
  {
    path: "/edit",
    name: "Edit",
    component: () => import(/* webpackChunkName: "edit" */ 'Views/edit'),
  },
  {
    path: "/chart",
    name: "Chart",
    component: () => import(/* webpackChunkName: "chart" */ 'Views/chart'),
  },
  {
    path: "/login",
    name: "Lgoin",
    component: () => import(/* webpackChunkName: "login" */ 'Views/login'),
  },
  {
    path: "/setting",
    name: "Setting",
    component: () => import(/* webpackChunkName: "setting" */ 'Views/setting'),
  },
  {
    path: "/explain",
    name: "Explain",
    component: () => import(/* webpackChunkName: "explain" */ 'Views/explain'),
  },
  {
    path: "/add-commodity",
    name: "AddCommodity",
    component: () => import(/* webpackChunkName: "commodity" */ 'Views/add-data/AddCommodity'),
  },
  {
    path: "/add-shop",
    name: "AddShop",
    component: () => import(/* webpackChunkName: "shop" */ 'Views/add-data/AddShop'),
  },
  {
    path: "/admin-list",
    name: "AdminList",
    component: () => import(/* webpackChunkName: "admin" */ 'Views/data-management/AdminList'),
  },
  
  {
    path: "/food-list",
    name: "FoodList",
    component: () => import(/* webpackChunkName: "food" */ 'Views/data-management/FoodList'),
  },
  {
    path: "/merchant-list",
    name: "MerchantList",
    component: () => import(/* webpackChunkName: "merchant" */ 'Views/data-management/MerchantList'),
  },
  {
    path: "/order-list",
    name: "OrderList",
    component: () => import(/* webpackChunkName: "order" */ 'Views/data-management/OrderList'),
  },
  {
    path: "/user-list",
    name: "UserList",
    component: () => import(/* webpackChunkName: "user" */ 'Views/data-management/UserList'),
  },
];


