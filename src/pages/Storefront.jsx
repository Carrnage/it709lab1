import { Grid , Card, Text, Button, Badge } from "@nextui-org/react";
import { Children, useState } from "react";
import { Link } from "react-router-dom";

function Store() {
    const [Cart, setCart] = useState({
        pieCart:0,
        appleCart:0,
        fishCart:0
    });

    const ItemArray = [
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
    ]
    const [Items, setItems] = useState({ItemArray});
    
    const handleClick = (k) => {
        console.log(k.name)
    }

    return (
        <div>
            <Grid.Container>
                {ItemArray.map( ( k) => 
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