import Image from 'next/image';
import Head from 'next/head';
import router from 'next/router';
import loadingImage from '../../../public/images/loading.gif';
import useAuth from '../../data/hook/useAuth';

export default function ForceAuth(props) {

  const { user, loading } = useAuth();

  function renderContent() {
    return (
      <>
        <Head>
          <script dangerouslySetInnerHTML={{
            __html: `
              if(!document.cookie?.includes("admin-template-cod3r-auth")) {
                window.location.href = "/auth";
              }
            `
          }}/>
        </Head>
        {props.children}
      </>
    )
  }

  function renderLoading() {
    return (
      <div className={`
        flex justify-center items-center h-screen
      `}>
        <Image src={loadingImage} />
      </div>
    )
  }

  if(!loading && user?.email) {
    return renderContent();
  } else if(loading) {
    return renderLoading();
  } else {
    router.push('/auth');
    return null;
  }
}