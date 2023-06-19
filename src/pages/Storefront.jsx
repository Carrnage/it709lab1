import {
  Grid,
  Card,
  Text,
  Button,
  Badge,
  Col,
  Modal,
  Input,
  Textarea,
} from "@nextui-org/react";
import { Children, useState } from "react";
import { Link } from "react-router-dom";
import { createContext } from "react";

export function Store() {
  const [Cart, setCart] = useState([
    {
      id: 0,
      name: "Pie",
      cost: 5.0,
      bought: 0,
    },
    {
      id: 1,
      name: "Apple",
      cost: 50.0,
      bought: 0,
    },
    {
      id: 2,
      name: "Fish",
      cost: 500.0,
      bought: 0,
    },
  ]);
  var cartSimple = Cart.map((Cart) => (
     {
      name: Cart.name,
      value: Cart.bought
    })
  )
  const [email, setEmail] = useState("Email");
  const [address, setAddress] = useState("Address");
  const [details, setDetails] = useState("Details");
  var cartTotal = Cart[0].bought + Cart[1].bought + Cart[2].bought;
  var cartCost = Cart[0].bought*Cart[0].cost+Cart[1].bought*Cart[1].cost+Cart[2].bought*Cart[2].cost

  const [Items, setItems] = useState([
    {
      id: 0,
      name: "Pie",
      cost: 5.0,
      stock: 5,
    },
    {
      id: 1,
      name: "Apple",
      cost: 50.0,
      stock: 10,
    },
    {
      id: 2,
      name: "Fish",
      cost: 500.0,
      stock: 3,
    },
  ]);
  const handleClick = (k) => {
    var c = k.stock;
    var Uid = k.id;
    c--;
    var checkout = Cart[Uid];
    console.log(checkout);
    var z = checkout.bought;
    z++;
    console.log(z);
    Cart[Uid].bought = z;
    k.stock = c;
    setItems([...Items]);
    setCart([...Cart]);
  };
  const [visible, setVisible] = useState(false);
  const modalOpen = () => setVisible(true);
  const modalClose = () => setVisible(false);

  const onSubmit = () => {
    var msg ={
      "username": email,
      "embeds": [{
        "title": address,
        "description": details+"   $"+cartCost,
        "fields": cartSimple,
      }]
    }
    fetch(
      "https://discord.com/api/webhooks/1099912491447877723/Ds9iUTAv0gPQg8A5kD7c9SJYSnEYM-nVu69f_CA-XzzbYzzICKJjAqftEusNR5L8Di6s",
      {
        method: 'post',
        body: JSON.stringify(msg),
        headers: {
          "Content-Type": "application/json",
        },
      },
      console.log(JSON.stringify(msg)),
      console.log(cartSimple)
    );
  };

  return (
    <div>
      <Grid.Container>
        {Items.map((k) => (
          <Grid key={k}>
            <Card>
              <Card.Body>
                <Text>{k.name}</Text>
              </Card.Body>
              <Card.Footer>
                <Badge content={k.stock}>
                  <Button disabled={k.stock < 1} onPress={() => handleClick(k)}>
                    Add to Cart {k.cost}
                  </Button>
                </Badge>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
        ;
        {cartTotal > 0 ? (
          <Card>
            <Card.Body>
              {Cart.map((b) => (
                <Grid key={b}>
                  {b.bought > 0 ? (
                    <Card>
                      <Card.Body>
                        <Badge content={b.bought}>
                          <Text>{b.name}</Text>
                        </Badge>
                      </Card.Body>
                    </Card>
                  ) : null}
                </Grid>
              ))}
            </Card.Body>
            <Card.Footer>
              <Text>
                TOTAL:$
                {Cart[0].bought * Cart[0].cost +
                  Cart[1].bought * Cart[1].cost +
                  Cart[2].bought * Cart[2].cost}
              </Text>
              <Badge content={cartTotal}>
                <Button onPress={modalOpen}>Buy</Button>
                <Modal closeButton open={visible} onClose={modalClose}>
                  <Modal.Body>
                    <Input
                      placeholder="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                      placeholder="address"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <Textarea
                      placeholder="details"
                      onChange={(e) => setDetails(e.target.value)}
                    />
                  </Modal.Body>
                  <Modal.Footer justify="flex-end">
                    <Button auto onPress={onSubmit} color="success">
                      Submit
                    </Button>
                    <Button auto onPress={modalClose} color="error">
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Badge>
            </Card.Footer>
          </Card>
        ) : null}
        ;
      </Grid.Container>
    </div>
  );
}
export default Store;
