import { Grid , Card, Text, Button, Badge } from "@nextui-org/react";
import { Children, useState } from "react";
import { Link } from "react-router-dom";

let id = null


function Store() {
    const [Stock, setStock] = useState({
        pieStock:10,
        appleStock:3,
        fishStock:5
    });
    const [Cart, setCart] = useState({
        pieCart:0,
        appleCart:0,
        fishCart:0
    });
    console.log(Object.keys(Stock).length+"test1");
    return (
        <div>
            <Grid.Container>
                <Grid>
                    <Card>
                        <Card.Body>
                            <Text>
                              Pie
                            </Text>
                        </Card.Body>
                        <Card.Footer>
                            <Badge content={Stock.pieStock}>
                                <Button onClick={(e) => handleClick(e)}>
                                    Add to Cart
                                </Button>
                            </Badge>
                        </Card.Footer>
                    </Card>
                </Grid>
                <Grid>
                    <Card>
                        <Card.Body>
                            <Text>
                              Apple
                            </Text>
                        </Card.Body>
                        <Card.Footer>
                            <Badge content={Stock.appleStock}>
                                <Button>
                                    Add to Cart
                                </Button>
                            </Badge>
                        </Card.Footer>
                    </Card>
                </Grid>
                <Grid>
                    <Card>
                        <Card.Body>
                            <Text>
                              Fish
                            </Text>
                        </Card.Body>
                        <Card.Footer>
                            <Badge content={Stock.fishStock}>
                                <Button>
                                    Add to Cart
                                </Button>
                            </Badge>
                        </Card.Footer>
                    </Card>
                </Grid>

            </Grid.Container>
        </div>
    );
    function handleClick({e}) {
        console.log(e)
        switch (e) {
            case  1:
            Stock.pieStock++
            setStock({...Stock})
            Cart.pieCart++
            setCart({...Cart})
            break
        case 2:
            Stock.appleStock--
            setStock({...Stock})
            Cart.appleCart++
            setCart({...Cart})
            break
        case 3:            
            Stock.fishStock--
            setStock({...Stock})
            Cart.fishCart++
            setCart({...Cart})
            break
        default:
            console.log("This is outside of use cases",id)
            break
        }
        
    }
    
}

export default Store;