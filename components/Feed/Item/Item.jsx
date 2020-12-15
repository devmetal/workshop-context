import Card from "../../Card/Card";
import Button from "../../Button/Button";
import { useContext } from "react";
import { NetworkContext } from "../../Network/NetworkProvider";

const Footer = () => {
  const network = useContext(NetworkContext);
  if (network === "online") {
    return <Button variant="ok">Leave a comment</Button>;
  } else {
    return <Button variant="err">Go back to online for a comment</Button>;
  }
};

const Item = ({ title, content }) => (
  <Card header={title}>
    <div>{content}</div>
    <Footer />
  </Card>
);

export default Item;
