import { Navbar, Badge, Button } from "@nextui-org/react";
import { Buy } from "react-iconly";
import { Store } from "../pages/Storefront"
import { useContext } from "react";

function Nav() {
    return (
    <div>
        <Navbar isBordered variant={"sticky"}>
            <Navbar.Content>
                <Navbar.Link href="/">
                        Home
                </Navbar.Link>
                <Navbar.Link href="/Store">
                        Store
                </Navbar.Link>
                <Navbar.Link href="About">
                        About
                </Navbar.Link>
            </Navbar.Content>
            <Badge color={"error"} content={0} showSkeleton>
            <Button auto bordered icon={<Buy/>} filled>
            </Button>
        </Badge>

        </Navbar>
    </div>
);
}

export default Nav;