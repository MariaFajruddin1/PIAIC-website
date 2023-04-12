import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import NavBar from './components/navBar'
import Header from './components/header'
import SectionOne from './components/sectionOne'
import SectionTwo from './components/sectionTwo'
import SentionThree from './components/sentionThree'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <NavBar />
    <Header />
    <SectionOne />
    <SectionTwo />
    <SentionThree />
    <Footer />
    </>
  )
}
