import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function HeaderAndSidebar({ children }) {
  return (
    <div>
      <Header></Header>
      <Sidebar></Sidebar>
      <div className="container">
        <div className="content">{children}</div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default HeaderAndSidebar;
