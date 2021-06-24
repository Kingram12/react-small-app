import classes from "./Card.module.css";

const c = classes;


function Card(props){
return <div className={c.card}>{props.children}</div>

}

//IN ORDER TO WRAP A CUSTOM COMPONENT AROUND OTHER COMPONENTS ---- Children prop is a prop every component gets by default
//children stores all content between opening and closing tags of the component. 
// ex: <Card> * a bunch of code here that will be stored as children prop * </Card>

export default Card;