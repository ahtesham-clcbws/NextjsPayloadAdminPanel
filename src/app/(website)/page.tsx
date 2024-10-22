
import { getPayloadHMR } from "@payloadcms/next/utilities"
import configPromise from '@payload-config'
import { getPayload } from "payload"

export default async function Page() {
    // const payload = await getPayloadHMR({ config: configPromise })

    // const dataDocs = await payload.find({
    //     collection: 'posts',
    //     depth: 1,
    //     limit: 12,
    //     // overrideAccess: false,
    // })
    // console.log('dataDocs: ', dataDocs)

    return (
        <div>
            <h1 className="">Full website in <code>src/app/(website) </code></h1>
            {/* { JSON.stringify(dataDocs) } */}
        </div>
    )
}