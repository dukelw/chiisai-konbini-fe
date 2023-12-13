import Home from '~/pages/Home';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Product from '~/pages/Product';
import config from '~/config';
import { HeaderAndSidebar } from '~/layouts';
import ProductDetail from '~/pages/ProductDetail';
import Cart from '~/pages/Cart';

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.signin, component: SignIn, layout: null },
  { path: config.routes.signup, component: SignUp, layout: null },
  { path: config.routes.product, component: Product, layout: HeaderAndSidebar },
  { path: config.routes.detail, component: ProductDetail },
  { path: config.routes.cart, component: Cart },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
