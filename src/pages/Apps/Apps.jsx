import { useLoaderData } from "react-router";
import AllApps from "../AllApps/AllApps";


const Apps = () => {

    const appsData = useLoaderData()
    // console.log(appsData);

    return (
        <div className="mt-8">
            {
                appsData.map(app => <AllApps key={app.id} app={app}></AllApps>)
            }
        </div>
    )
}

export default Apps;