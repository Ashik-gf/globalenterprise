import React from 'react'
import Faq from '../../components/FAQ/Faq'
import TeamSections from '../../components/Team/TeamSections'
import Contact from '../../components/Contact/Contact'
import Categories from '../../components/categories.jsx/Categories'
import Banner from '../../components/Banner/Banner'

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <TeamSections />
      <Faq />
      <Contact id='contact' />
    </div>
  )
}

export default Home