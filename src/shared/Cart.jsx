import { Badge, Image } from "@nextui-org/react";

function Cart() {
    return(
    <div>
        <Badge color={"error"} content showSkeleton>
            <Image src="public\Cartimg.png" alt="cartimg" sizes="xs"/>
        </Badge>
    </div>
    );
}



export default Cart;