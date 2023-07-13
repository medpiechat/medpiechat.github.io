import './About.scss'
import Heading from '../../components/Headings/Heading'

const About = () => {

  document.title = 'MedPIE | About';

  return (
    <div className='pt-16 min-h-screen'>
      <Heading heading="About"></Heading>
      <div className="paragraph-body">
        <p data-aos="fade-up" >
          <span>MedPIE</span> is a revolutionary start-up at the forefront of disease progression simulation, addressing a critical gap in current healthcare research. The challenge of lacking continuous, individualized patient imaging data over time has hampered the accurate forecasting of disease progression. This obstacle has stymied our ability to tailor treatment plans and predict patient outcomes. However, MedPIE has pioneered an innovative solution: a framework leveraging the latest advancements in large language models and text-to-image generative models to simulate disease progression realistically and personally for each patient.
        </p>

        <p data-aos="fade-up" >
          Our unique approach, the Progressive Image Editing (PIE), allows for the manipulation of disease-related image features, resulting in precise disease progression simulations. The sophistication of our methodology includes a theoretical analysis of the iterative refining process as a gradient descent with an exponentially decayed learning rate.
        </p>

        <p data-aos="fade-up" >
          Our proprietary technology has the potential to revolutionize clinical practice and medical research. By enabling healthcare providers to model disease trajectories accurately over time, we can predict treatment responses and improve patient outcomes. MedPIE is proud to be the pioneer in producing disease progression images that meet real-world standards. Our commitment to innovation and our dedicated approach to improving patient care positions us at the cutting edge of medical research and technology.
        </p>

        <div className="m-2 basis-[40%] sm:px-5  py-2 px-2 overflow-hidden rounded-xl lg:mt-0 md:mt-0 mt-5 " d>
          <img data-aos="fade-up" src="./images/progression.jpg" alt="pie_fig_1" />
        </div>

      </div>
    </div>
  )
}

export default About
