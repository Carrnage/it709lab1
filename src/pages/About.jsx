import { Container, Card, Row, Text, Col, useTheme } from "@nextui-org/react";

function About() {
    return (
        <div>
            <Container gap={3}>
                <Row gap={3}>
                    <Col >
                    <Card>
                    <Card.Body css={{bgColor:'$blue800'}}>
                    <Text style={{ color:'gold' }}>iugv</Text>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Text>sfdggj</Text>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}



export default About;