import { cn } from "@/lib/utils";
import { Info, Server, ServerOff, type LucideIcon, } from "lucide-react";


export default function NotFoundComponent({
    ...props
}: { icon?: LucideIcon, className?: string; children?: React.ReactNode, title?: string, subTitle?: string, }) {
    return (
        <div className={cn("h-full w-full flex  flex-col items-center justify-center text-center", props.className)}>
            {
                props.icon != null ? <props.icon className="mb-4 text-gray-500" size={90} /> : <ServerOff size={90} className="mb-4 text-gray-500" />
            }
            <h2 className=" text-lg font-bold mb-2">{props.title ?? "Internal server error"}</h2>
            <p className="mb-3 text-center text-gray-500">{props.subTitle ?? "Please contact the customer support for more inforemation."}</p>
            {props.children}
        </div>
    )
}
