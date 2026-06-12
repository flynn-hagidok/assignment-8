import { useLoaderData } from "react-router";
import AllApps from "../AllApps/AllApps";


const Apps = () => {

    const appsData = useLoaderData()

    return (
        <div className="mt-8 grid grid-cols-4 max-w-350 mx-auto gap-10">
            {
                appsData.map(app => <AllApps key={app.id} app={app}></AllApps>)
            }
        </div>
    )
}

export default Apps;