import type { NextPage } from 'next'
import {Me} from "../components/Me";
import {Seo} from "../components/Seo";

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <Me />
    </>
  )
}

export default Home
