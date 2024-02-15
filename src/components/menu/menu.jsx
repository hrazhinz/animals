import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
    Dropdown, DropdownTrigger
} from "@nextui-org/react";
import {useState} from "react";
import {animals} from "../../utils/data/animals";

export const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = animals;

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href="/" className="font-bold text-inherit">Главная</Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem isActive={
                        window.location.href.includes(item.id)
                    } key={`${item}-${index}`}>
                        <Link
                            color={window.location.href.includes(item.id) ? "secondary" : "foreground"}
                            className="w-full"
                            href={"/animals/" + item.id}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color="foreground"
                            className="w-full"
                            href={"/animals/" + item.id}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}