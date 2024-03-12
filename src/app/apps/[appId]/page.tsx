import { BackgroundGradient } from "@/components/ui/background-gradient";
import apps from "@/data/products.json";
interface product {
    id : number,
    name : string,
    title : string,
    description : string,
    isFeature : boolean
}
export default function AppDetails ({
     params ,
    } : { 
        params : { appId : string};
}) {
    const product = apps.lists.filter((list:product) => list.name == params.appId) 
    console.log('product ',typeof(product))
    return (
        <div className="min-h-screen bg-black py-12 pt-36">
        { product && product.length > 0 && product.map((app,index) => (
            <div key={index}>
                    <h1 className="text-lg sm:text-xl text-black mt-2 mb-1 dark:text-neutral-200 text-center"> {  app.title } </h1>
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{app.description}</p>
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">Privacy Policy: {app.PrivacyPolicy}</p>
            </div>
            ))
        }
    </div>
    )
}