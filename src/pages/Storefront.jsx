import { Grid , Card, Text, Button, Badge } from "@nextui-org/react";
import { Children, useState } from "react";
import { Link } from "react-router-dom";
import { createContext } from "react";

export function Store({cartTotal}) {
    const [Cart, setCart] = useState({
        pieCart:0,
        appleCart:0,
        fishCart:0
    });
    const cartTotal = createContext(Cart.appleCart+Cart.pieCart+Cart.fishCart);
    const [Items, setItems] = useState([
        {
            id:0,
            name: "Pie",
            cost: "$5.00",
            stock: 5
        }, {
            id:1,
            name: "Apple",
            cost: "$50.00",
            stock: 10
        }, {
            id:2,
            name: "Fish",
            cost: "$500.00",
            stock: 3
    
        }
    ]);
    
    const handleClick = (k) => {
        var c =(k.stock)
        c++
        k.stock=c
        setItems([...Items])
        console.log(Items[k.id])
    }

    return (
        <div>
            <Grid.Container>
                {Items.map( ( k) => 
                <Grid key={k}>
                    <Card>
                        <Card.Body>
                            <Text>
                              {k.name}
                            </Text>
                        </Card.Body>
                        <Card.Footer>
                            <Badge content={k.stock}>
                                <Button onPress={() => handleClick(k)}>
                                    Add to Cart {k.cost}
                                </Button>
                            </Badge>
                        </Card.Footer>
                    </Card>
                </Grid>
                )}
            </Grid.Container>
        </div>
    );
}
export default Store;