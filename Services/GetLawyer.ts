import { appAxios } from "@/lib/appAxios";
import { lawyerDataSchema } from "@/types/lawyer";

export const getLawyerProfile = async (id:string) => {
    try {
        const res = await appAxios.get(`lawyer/${id}`);
        const parsed = lawyerDataSchema.parse(res.data.data.lawyer);
        return parsed;
    } catch (ex: any) {
        return null;
    }
};