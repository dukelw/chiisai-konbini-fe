import Home from '~/pages/Home';
import SellerSignIn from '~/pages/SellerSignIn';
import SellerSignUp from '~/pages/SellerSignUp';
import Product from '~/pages/Product';
import config from '~/config';
import { HeaderAndSidebar } from '~/layouts';
import ProductDetail from '~/pages/ProductDetail';
import Cart from '~/pages/Cart';
import About from '~/pages/About';
import BuyerSignIn from '~/pages/BuyerSignIn';
import BuyerSignUp from '~/pages/BuyerSignUp';

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.sellerSignin, component: SellerSignIn, layout: null },
  { path: config.routes.sellerSignup, component: SellerSignUp, layout: null },
  { path: config.routes.product, component: Product, layout: HeaderAndSidebar },
  { path: config.routes.detail, component: ProductDetail },
  { path: config.routes.cart, component: Cart },
  { path: config.routes.about, component: About, layout: null },
  { path: config.routes.buyerSignin, component: BuyerSignIn, layout: null },
  { path: config.routes.buyerSignup, component: BuyerSignUp, layout: null },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
