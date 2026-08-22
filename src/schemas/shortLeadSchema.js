import { z } from 'zod';

export const shortLeadFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Full name is required (min 2 chars).' })
    .max(80, { message: 'Name is too long.' }),
  email: z
    .string()
    .email({ message: 'Valid corporate email is required.' }),
  company: z
    .string()
    .min(2, { message: 'Company name is required.' })
    .max(100, { message: 'Company name is too long.' }),
  message: z
    .string()
    .min(5, { message: 'Please describe your requirement (min 5 chars).' })
    .max(300, { message: 'Message is too long (max 300 chars).' }),
});
