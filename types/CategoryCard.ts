import { LucideIcon } from "lucide-react";

export interface CategoryCardProps {
    Icon: ({ ...props }: CustomIconProps) => JSX.Element;
    title: string;
    subTitle: string;
}

export interface CustomIconProps {
    className?: string;
}
