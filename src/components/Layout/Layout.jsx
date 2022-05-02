// import custom components
import Footer_white from "../../components/Footer/Footer_white";
import Header from "../../components/Header/Header";
export default function Layout({ children }) {
  // styles the main html tag

  return (
    <>
      <Header />
      <main >
        <section >{children}</section>
  
      </main>
      <Footer_white />
    </>
  );
}
