import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { cardEvent } from './cardEvent';

const cards = [
  {
    image: 'https://via.placeholder.com/400x200?text=Healthy+Lifestyle',
    title: 'Healthy Lifestyle and happy living tips',
    tag: { label: 'Featured', color: 'bg-danger text-white' },
  },
  {
    image: 'https://via.placeholder.com/400x200?text=Healthy+Meal',
    title: 'How to make a healthy meal',
    tag: { label: 'Featured', color: 'bg-danger text-white' },
  },
  {
    image: 'https://via.placeholder.com/400x200?text=Coconut',
    title: 'Is Coconut good for you?',
    tag: { label: 'Nutrition', color: 'bg-info text-white' },
    date: '8 April 2022',
  },
  {
    image: 'https://via.placeholder.com/400x200?text=Salmon+Steak',
    title: 'Salmon Steak Noodle',
  },
  {
    image: 'https://via.placeholder.com/400x200?text=Salad',
    title: 'Making a healthy salad',
    tag: { label: 'Health', color: 'bg-info text-white' },
    date: '30 April 2022',
  },
];

export const cardEventGrid = () => {
  return (
    <div className='container mt-5'>
        <div className="row">
            {cards.map((card,index)=>(
                <cardEvent key={index} {...card}/>
            ))}
        </div>
    </div> 
  )
}
