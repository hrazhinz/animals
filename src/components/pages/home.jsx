import {Layout} from "../layout/layout";
import {animals} from "../../utils/data/animals";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";

export const HomePage = () => {

    const navigator = useNavigate();

    return (
        <div>
            <div className="w-full text-center">
                <h1 className="font-bold text-xl">Информация о животных</h1>
            </div>
            <div className="mt-5">
                <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                    {animals.map((item, index) => (
                        <Card shadow="sm" key={index} isPressable onPress={() => navigator("animals/" + item.id)}>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    alt={item.name}
                                    className="w-full object-cover h-[240px]"
                                    src={item.photo_url}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-around">
                                <b>{item.name}</b>
                            </CardFooter>
                            <div className="px-2 pb-2">
                                <p className="text-default-500">{item.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}