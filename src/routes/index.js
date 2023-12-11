import Home from '~/pages/Home';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Product from '~/pages/Product';
import { HeaderAndSidebar } from '~/layouts';

// Public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/signin', component: SignIn, layout: null },
  { path: '/signup', component: SignUp, layout: null },
  { path: '/product', component: Product, layout: HeaderAndSidebar },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
