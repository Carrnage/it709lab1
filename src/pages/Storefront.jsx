import { Grid, Card, Text, Button, Badge, Col } from "@nextui-org/react";
import { Children, useState } from "react";
import { Link } from "react-router-dom";
import { createContext } from "react";

export function Store() {
  const [Cart, setCart] = useState([
    {
      id: 0,
      name: "Pie",
      cost: "$5.00",
      bought: 0,
    },
    {
      id: 1,
      name: "Apple",
      cost: "$50.00",
      bought: 0,
    },
    {
      id: 2,
      name: "Fish",
      cost: "$500.00",
      bought: 0,
    },
  ]);
  var cartTotal = Cart[0].bought+Cart[1].bought+Cart[2].bought;
  const [Items, setItems] = useState([
    {
      id: 0,
      name: "Pie",
      cost: "$5.00",
      stock: 5,
    },
    {
      id: 1,
      name: "Apple",
      cost: "$50.00",
      stock: 10,
    },
    {
      id: 2,
      name: "Fish",
      cost: "$500.00",
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
        ))};
        { cartTotal>0 ? 
        <Card>
        <Card.Body>
        {Cart.map((b) => (
          <Grid key={b}>
            {b.bought>0 ? 
            <Card >
              <Card.Body>
                <Text>{b.bought}</Text>
              </Card.Body>
            </Card>
            : null }
          </Grid>
        ))}
        </Card.Body>
        </Card>
        : null };
      </Grid.Container>
    </div>
  );
}
export default Store;
