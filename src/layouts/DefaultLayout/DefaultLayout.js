import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header></Header>
      <div className='container'>
        <div className="content">{children}</div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default DefaultLayout;
