import classes from './CardList.module.css';
import Card from '../Card/Card';

const journalsData = [
  {
    'id': 1,
    'country': 'Japan',
    'image': '../../images/image1.svg',
    'locationName': 'Mount Fuji',
    'startDate': '2022-03-03',
    'endDate': '2022-03-22',
    'description': 'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'
  },
  {
    'id': 2,
    'country': 'Australia',
    'image': '../../images/image2.svg',
    'locationName': 'Sydney Opera House',
    'startDate': '2022-05-27',
    'endDate': '2022-06-08',
    'description': 'The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century\'s most famous and distinctive buildngs.'
  },
  {
    'id': 3,
    'country': 'Norway',
    'image': '../../images/image3.svg',
    'locationName': 'Geirangerfjord',
    'startDate': '2022-08-27',
    'endDate': '2022-09-18',
    'description': 'The Geiranger Fjord is a fjord in the Sunnmore region of Moreog Romsdal county, Norway. It is located entirely in the Stranda Municipality, and is the largest fjord in the country.'
  },
];

const CardList = (props) => {
  return (
    <div className={classes['card-list']}>
      { journalsData.map( (journal) => {
        return <Card
          key = {journal.id}
          country = {journal.country}
          image = {journal.image}
          locationName = {journal.locationName}
          startDate = {journal.startDate}
          endDate = {journal.endDate}
          description = {journal.description}
        />
      })}
    </div>
  )
};

export default CardList;
