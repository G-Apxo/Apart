// import custom components
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/Header";
export default function Layout({ children }) {
  // styles the main html tag

  return (
    <>
      <Header />
      <main >
        <section >{children}</section>
  
      </main>
      <Footer />
    </>
  );
}
