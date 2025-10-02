import {Compass, MapPinIcon} from "lucide-react"

export default function LogPose() {
    return (
        <div className={"absolute w-[200px] top-0 left-0 m-4 p-2 bg-[#92400e] border-2 border-[#d97706] text-white rounded-lg"}>
            <h2 className={"flex items-center gap-2 text-lg font-bold mb-2"}><Compass /> Compass</h2>

            <div className={"bg-[#78350f] text-sm p-2 rounded"}>
                <h3 className={"flex items-center gap-1 text-[#fbbf24] font-bold mb-1"}><MapPinIcon className={"w-4"} /> Current Location</h3>
                <p className={"font-bold"}>Drum Island</p>
            </div>
        </div>
    )
}