import classes from "./MeetupItem.module.css";

const c = classes;

function MeetupItem({ image, title, address, description }) {
  return (
    <li className={c.item}>
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
    </li>
  );
}

export default MeetupItem;
