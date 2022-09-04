import {FC} from "react";
import {useRouter} from "next/router";

const HelloPage: FC = () => {
    const router = useRouter();
    return <div>Hello {router.query.name}! </div>
}

export default HelloPage
