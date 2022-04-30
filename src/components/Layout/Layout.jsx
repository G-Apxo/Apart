// import custom components
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/Header";
export default function Layout({ children }) {
  // styles the main html tag
  const styles = {
    display: "flex",
    flexDirection: "row"
  };
  return (
    <>
      <Header />
      <main style={styles}>
        <section style={{ width: "1024px" }}>{children}</section>
  
      </main>
      <Footer />
    </>
  );
}
