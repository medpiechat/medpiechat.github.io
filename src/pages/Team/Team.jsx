import React from 'react'
import './Team.scss'
import Heading from '../../components/Headings/Heading'
import TeamCard from './TeamCard'



const Team = () => {
  document.title = 'MedPIE | Team';


  const members = [
    {
      name: 'Xu Cao',
      position: 'Co-founder & CEO & Technologist',
      image: '/images/xucao.jpg',
      linkedin: 'https://www.linkedin.com/in/irohxu/',
      github: 'https://github.com/IrohXu',
      twitter: 'https://twitter.com/IrohXu',
      about: "Ex-Software Engineer & CS PhD Student, UIUC",
      email: "xucao2@illinois.edu",
      id: "0"
    },
    {
      name: 'Wenqian Ye',
      position: 'Co-founder & CTO',
      image: '/images/wenqian.jpg',
      linkedin: 'https://www.linkedin.com/in/wenqian-yeh/',
      github: 'https://github.com/wenqian-ye',
      twitter: 'https://twitter.com/wy2029',
      about: "Ex-Software Engineer & CS PhD Student, University of Virginia",
      email: "wenqian@virginia.edu",
      id: "1"
    }
  ]

  return (
    <div className='pt-16'>
      <Heading heading="Team"></Heading>
      <div className='my-20 mx-5 flex flex-wrap gap-10 items-center justify-center' id='Team_main'>
        {members.map((member, id) => (
          <TeamCard member={member} key={id} />
        ))}
      </div>
    </div>
  )
}

export default Team