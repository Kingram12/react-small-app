import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

const c = classes;

function MeetupItem({ image, title, address, description }) {
  return (
    <li className={c.item}>
      <Card>
        <div className={c.image}>
          <img src={image} alt={title} />
        </div>
        <div className={c.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={c.actions}>
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
