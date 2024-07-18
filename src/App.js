import './App.css'
import CardItems from './components/CardItem'

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
  },
  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2',
  },
  {
    id: 3,
    title: 'VR Developer',
    description:
      'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3',
  },
  {
    id: 4,
    title: 'ML Engineer',
    description:
      'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4',
  },
]

const App = () => (
  <div className="background-container">
    <h1 className="heading-style">Learn 4.0 Technologies</h1>
    <p className="paragraph">
      Get Trained By alumni of IITs and top companies like
      Amazon,google,Microsoft,Intel,Nividia,Qualcomm,etc.Learn directly from
      professionals involved in product Development.
    </p>
    <ul className="inner-container">
      {cardsList.map(eachitem => (
        <CardItems cardsList={eachitem} key={eachitem.id} />
      ))}
    </ul>
  </div>
)

export default App
