import { Grid , Card, Text, Button, Badge } from "@nextui-org/react";
import { Link } from "react-router-dom";


function Store() {
    return (
        <div>
            <Grid.Container gap={1} justify="center">
            <Grid>
                    <Card>
                        <Card.Body>
                            <Text>
                                <Link/>
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