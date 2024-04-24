import { z } from "zod";

export const accurateSpecialtySchema = z.object({
    id: z.number(),
    title: z.string(),
});

export const generalSpecialtySchema = z.object({
    id: z.number(),
    title: z.string(),
});

export const degreeSchema = z.object({
    id: z.number(),
    title: z.string(),
    need_certificate: z.number(),
});

export const nationalitySchema = z.object({
    id: z.number(),
    name: z.string(),
});

export const countrySchema = z.object({
    id: z.number(),
    name: z.string(),
});

export const regionSchema = z.object({
    id: z.number(),
    name: z.string(),
});

export const citySchema = z.object({
    id: z.number(),
    title: z.string(),
});

export const importanceSchema = z.object({
    id: z.number(),
    title: z.string(),
});

export const lawyerPriceSchema = z.array(
    z.object({
        price: z.number(),
        importance: importanceSchema,
    })
);

export const sectionSchema = z.object({
    id: z.number(),
    title: z.string(),
    image: z.string(),
    need_license: z.number(),
    lawyers_count: z.number(),
});

export const sectionsSchema = z.array(
    z.object({
        id: z.number(),
        section: sectionSchema,
        lawyer_license_no: z.string().nullable(),
        lawyer_license_file: z.string().nullable(),
    })
);

export const serviceSchema = z.object({
    service_id: z.number(),
    category_id: z.number().nullable(),
    request_level_id: z.number().nullable(),
    title: z.string(),
    image: z.string(),
    intro: z.string(),
    details: z.nullable(z.string()),
    slug: z.string(),
    section_id: z.number().nullable(),
    min_price: z.number(),
    max_price: z.number(),
    sections: z.string(),
    ymtaz_price: z.number(),
    status: z.number(),
    need_appointment: z.number(),
    lawyer_prices: lawyerPriceSchema,
});


export const lawyerDataSchema = z.object({
    id: z.number(),
    first_name: z.string(),
    second_name: z.string(),
    third_name: z.nullable(z.string()),
    fourth_name: z.string(),
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    phone_code: z.string(),
    about: z.string(),
    accurate_specialty: accurateSpecialtySchema,
    general_specialty: generalSpecialtySchema,
    degree: degreeSchema,
    gender: z.string(),
    day: z.string(),
    month: z.string(),
    year: z.string(),
    birthday: z.string(),
    nationality: nationalitySchema,
    country: countrySchema,
    region: regionSchema,
    city: citySchema,
    longitude: z.nullable(z.string()),
    latitude: z.nullable(z.string()),
    type: z.number(),
    identity_type: z.number(),
    nat_id: z.string(),
    functional_cases: z.object({
        id: z.number(),
        title: z.string(),
    }),
    company_lisences_no: z.string().nullable(),
    company_name: z.nullable(z.string()),
    office_request_status: z.number(),
    office_request_from: z.string().nullable(),
    office_request_to: z.string().nullable(),
    is_favorite: z.number(),
    special: z.number(),
    logo: z.string(),
    id_file: z.string(),
    cv: z.nullable(z.string()),
    degree_certificate: z.string().nullable(),
    photo: z.string(),
    company_lisences_file: z.string().nullable(),
    accept_rules: z.number(),
    sections: sectionsSchema,
    services: z.array(serviceSchema),
    work_times: z.array(z.object({})),
    rates_count: z.number().nullable(),
    rates_avg: z.number().nullable(),
    digital_guide_subscription: z.number(),
    digital_guide_subscription_payment_status: z.number(),
    accepted: z.number(),
});