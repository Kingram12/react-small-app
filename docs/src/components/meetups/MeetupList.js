// when making lists its best not to use the list component to fetch the data, but rather for it not to care what the data is, just to be able to display the data it was given - which means this display of the list is reusable vs not. 
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

const c = classes;

function MeetupList({meetups}) {
    return <ul className={c.list}>
        {meetups.map((meetup) => <MeetupItem key={meetup.id} id={meetup.id} image={meetup.image} title={meetup.title} address={meetup.address} description={meetup.description}/>)}
    </ul>

}

export default MeetupList;