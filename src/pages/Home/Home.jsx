import React from 'react'
import Banner from '../../components/Banner/Banner'
import Faq from '../../components/FAQ/Faq'
import TeamSections from '../../components/Team/TeamSections'
import Contact from '../../components/Contact/Contact'

const Home = () => {
  return (
    <div>
      <Banner />
      <TeamSections />
      <Faq />
      <Contact id='contact' />
    </div>
  )
}

export default Home