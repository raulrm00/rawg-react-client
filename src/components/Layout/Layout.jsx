import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout (props) {
  return (
    <>
      <Navbar />
      <main className="p-4">{props.children}</main>
      <Footer />
    </>
  )
}
