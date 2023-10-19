import {quotes} from '../assets/index';
import Content from '../components/Content';

function TesimonialCard({img}) {
  return (
    <div className=' p-12 hover:bg-slate-600 rounded-lg  max-w-sm'>
      <img src={quotes} alt="" className=' mb-8' />
      <Content>
      Money makes your life easier. If you're lucky to have it, you're lucky.
      </Content>
      <div className=' mt-8 flex '>
        <img src={img} alt="profile pic" className=' w-14 mr-4' />
        <div>
          <h1 className=' text-lg font-bold text-white'>Steve Mark</h1>
          <p className=' text-gray-300 font-medium'>Founder & Leader</p>
        </div>
      </div>

    </div>
  )
}

export default TesimonialCard