import React from 'react'
import './Demo.scss'
import Heading from '../../components/Headings/Heading'
import { EventCard } from '../../components/Cards/Card'

// const Demo = () => {

//   document.title = 'Tesla NIT Patna | Events';


//   const events = [
//     {
//             id: 0,
//             name: "Blockchain Technology for Next-Generation Applications",
//             image: "https://algorand.com/static/algorand-og-image-98d634bc4a6f00c455b35830674ae96b.png",
//             tag: "BlockChain",
//             description: 'Faculty Development Program on “Blockchain Technology for Next-Generation Applications”',
//             date: "19th-24th June 2023",
//             time: "10:00 AM",
//             venue: "Vishwesharaiya Hall",
//             link: "https://forms.gle/G29EKJovMpqAr4ei6"
//         },
//         {
//             id: 1,
//             name: "Algo Camp",
//             image: "https://miro.medium.com/max/700/1*BFpFCJepifaREIg7qLSLag.jpeg",
//             tag: "BlockChain",
//             description: "A 3-day workshop on Blockchain Technology by Algorand Foundation.",
//             date: "2023-01-25",
//             time: "10:00 AM",
//             venue: "Meghnad Saha Hall",
//             link: "/404"
//         },
//         {
//             id: 2,
//             name: "EduDAO Info Session",
//             image: "https://pbs.twimg.com/profile_images/1470977630946181122/rXTRvqJV_400x400.jpg",
//             tag: "Technology",
//             description: "An info session on EduDAO, a DAO for students by students.",
//             date: "2023-05-02",
//             time: "05:00 PM",
//             venue: "Meghnad Saha Hall",
//             link: "/404"
//         }]

//   return (
//     <div className='pt-16'>
//       <Heading heading="DEMO"></Heading>
//       <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
//         {events.map((event, id) => (
//           <EventCard data={event} key={id} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Demo

const Demo = () => {
  document.title = 'MedPIE | Chatbot Demo';

  return (
    <div className='pt-16 min-h-screen'>
      <Heading heading="MedPIE Chat Demo"></Heading>
      <div className="paragraph-body">
        <p data-aos="fade-up" >
          Please provide your current chest X-ray and chat with the agent.
        </p>

        <iframe
          title="MedPIE Chatbot"
          width="100%"
          height="800px"
          src="http://3.23.92.153:8501/"  // replace with the URL of your Streamlit app
        />
      </div>
    </div>
  )
}

export default Demo;