import {Outlet} from "react-router-dom";
import {Menu} from "../menu/menu";

export const Layout = () => {
    return (
        <div>
            <Menu/>
            <div className="mt-10 flex flex-col gap-5 items-center justify-center">
                <div className="max-w-[1250px] opacity-90 w-full p-5 bg-background/70 rounded-xl">
                    <Outlet/>
                </div>
                <div className="max-w-[1250px] mb-5 opacity-90 w-full p-5 bg-background/70 rounded-xl">
                    <p className="text-gray">© 2024 by hrazhyna</p>
                </div>
            </div>
        </div>
    )
}