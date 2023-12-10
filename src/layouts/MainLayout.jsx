import MobileMenu from 'components/Header/components/MobileMenu/MobileMenu';
import LoginModal from 'components/ModalWindow/modals/LoginModal/LoginModal';
import RegistrationModal from 'components/ModalWindow/modals/RegistrationModal/RegistrationModal';
import { Header, Footer } from 'components/index';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <MobileMenu />
      <LoginModal />
      <RegistrationModal />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
