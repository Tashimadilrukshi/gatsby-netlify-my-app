import React from "react"

import Layout from "../components/layout"
import Movie from '../components/movie'
import {imageNew} from '../images/google.jpg'


const searchEngines = {
  title: "Google",
  about: "ccdcd",
  image: {imageNew}
}

const IndexPage = () => {
    return(
      <Layout>
        <Movie data={searchEngines}/>
      </Layout>
    );
}
  

export default IndexPage;
