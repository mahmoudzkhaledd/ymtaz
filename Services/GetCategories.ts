import { appAxios } from "@/lib/appAxios";
import { DigitalDirectoryCategories } from "@/types/Categories";

export const getCategories = async () => {
    try {
        const res = await appAxios.get('digital-guide/categories');
        const parsed = DigitalDirectoryCategories.parse(res.data);
        return parsed;
    } catch (ex: any) {
        return null;
    }
};