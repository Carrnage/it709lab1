import { Navbar } from "@nextui-org/react";

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
        </Navbar>
    </div>
);
}

export default Nav;