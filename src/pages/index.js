import React from "react"

import Layout from "../components/layout"
import Movie from '../components/movie'
import {imageNew} from '../images/google.jpg'


const searchEngines = {
  title: "Google",
  about: "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Facebook.",
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
