import React from 'react'
import Banner from '../../components/Banner/Banner'
import Collections from '../../components/Collections/Collections'
import Contact from '../../components/Contact/Contact'
import Faq from '../../components/FAQ/Faq'
import TeamSections from '../../components/Team/TeamSections'
import Categories from '../../components/categories.jsx/Categories'

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Collections />
      <TeamSections />
      <Faq />
      <Contact id='contact' />
    </div>
  )
}

export default Home