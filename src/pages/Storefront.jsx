import { Grid , Card, Row, Text, Col, Button, Spacer } from "@nextui-org/react";
import { useState } from "react";


function Store() {
    const [itemCount, setItemCount] = useState("99")
    return (
        <div>
            <Grid.Container gap={1} justify="center">
            <Grid>
                    <Card>
                        <Card.Body>
                            <Text>
                                hello
                            </Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button auto onclick={() => {setItemCount(itemCount-1)}}>
                                {itemCount}
                            </Button>
                        </Card.Footer>
                    </Card>
                </Grid>
                <Grid>
                    <Card>
                        <Card.Body>
                            <Text>
                                hello
                            </Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button auto onclick={() => {setItemCount(itemCount-1)}}>
                                click me
                            </Button>
                        </Card.Footer>
                    </Card>
                </Grid>
                <Grid>
                    <Card>
                        <Card.Body>
                            <Text>
                                hello
                            </Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button auto onclick={() => {setItemCount(itemCount-1)}}>
                                click me
                            </Button>
                        </Card.Footer>
                    </Card>
                </Grid>
                <Grid>
                    <Card>
                        <Card.Body>
                            <Text>
                                hello
                            </Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button auto onclick={() => {setItemCount(itemCount-1)}}>
                                click me
                            </Button>
                        </Card.Footer>
                    </Card>
                </Grid>
            </Grid.Container>
        </div>
    );
}



export default Store;