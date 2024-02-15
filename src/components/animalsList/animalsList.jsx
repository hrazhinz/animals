import {useParams} from "react-router-dom";
import {useMemo, useState} from "react";
import {Card, CardBody, CardFooter, Code, Divider, Image, Pagination} from "@nextui-org/react";
import {animals} from "../../utils/data/animals";

export const AnimalsList = () => {

    const params = useParams()

    const [data, setData] = useState(animals.filter(x => x.id === params.id));
    const [page, setPage] = useState(1);
    const rowsPerPage = 12;

    const pages = Math.ceil(data[0].data.length / rowsPerPage);

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return data[0].data.slice(start, end);
    }, [page, data]);

    return (
        <div>
            <Code color="primary" className="font-bold text-xl">{data[0].title}</Code>
            <Divider className="m-3"/>
            <p className="text-center text-[#0450ca]">{data[0].subtitle}</p>
            <div className="mt-5">
                <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                    {items.map((item, index) => (
                        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
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

                        </Card>
                    ))}
                </div>
                <div className="flex w-full justify-center mt-5">
                    <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="secondary"
                        page={page}
                        total={pages}
                        onChange={(page) => setPage(page)}
                    />
                </div>
            </div>
        </div>
    )
}