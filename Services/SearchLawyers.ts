import { appAxios } from "@/lib/appAxios";
import { lawyerDataSchema } from "@/types/lawyer";
import { z } from "zod";

export const searchLawyers = async () => {
    try {
        const res = await appAxios.post(`digital-guide/search`);

        const parsed = z.array(lawyerDataSchema).parse(res.data.data.lawyers);

        return parsed;
    } catch (ex: any) {
        return null;
    }
};