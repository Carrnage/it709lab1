import { Grid , Card, Text, Button, Badge } from "@nextui-org/react";
import { Children, useState } from "react";
import { Link } from "react-router-dom";

function Store() {
    const [Stock, setStock] = useState({
        pieStock:10,
        piePrice:0.75,
        appleStock:100,
        applePrice:1.50,
        fishStock:5,
        fishPrice:1000
    });
    return (
        <div>
            <Grid.Container gap={1} justify="center">
            <Grid>
                    <Card>
                        <Card.Body>
                            <Text>
                                pie
                            </Text>
                        </Card.Body>
                        <Card.Footer>
                            <Badge content={pieStock} >
                                <Button auto>
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
                                Raspberry Pi
                            </Text>
                        </Card.Body>
                        <Card.Footer>
                        <Badge content>
                                <Button auto>
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
                                Pecan Pi
                            </Text>
                        </Card.Body>
                        <Card.Footer>
                        <Badge content>
                            <Button auto>
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
                                Kiwifruit Pi
                            </Text>
                        </Card.Body>
                        <Card.Footer>
                        <Badge content>
                            <Button auto>
                                Add to Cart
                            </Button>
                        </Badge>
                        </Card.Footer>
                    </Card>
                </Grid>
            </Grid.Container>
        </div>
    );
}


export default Store;