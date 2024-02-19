

type ListItemPropsType = {
  title?: string;
  src?: string;
  alt?: string;

};

export const ListItem = (props: ListItemPropsType) => {
  return (
    <div>
    <img src={props.src} alt={props.alt}></img>
    <p>{props.title}</p>
  </div>
  );
};
