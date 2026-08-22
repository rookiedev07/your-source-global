import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(80, { message: 'Full name is too long.' }),
  company: z
    .string()
    .min(2, { message: 'Company or organization name is required.' })
    .max(100, { message: 'Company name is too long.' }),
  email: z
    .string()
    .email({ message: 'Please provide a valid corporate email address.' }),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(val), {
      message: 'Please provide a valid phone number format.',
    }),
  service: z
    .string()
    .min(1, { message: 'Please select a primary service discipline of interest.' }),
  message: z
    .string()
    .min(10, { message: 'Please provide a brief description of your requirements (min 10 characters).' })
    .max(1000, { message: 'Message cannot exceed 1000 characters.' }),
});

export const SERVICE_OPTIONS = [
  { value: 'finance-accounting', label: '01. Finance & Accounting' },
  { value: 'ap-ar', label: '02. Accounts Payable / Receivable' },
  { value: 'customer-support', label: '03. Customer Support (24/7 Omnichannel)' },
  { value: 'data-processing', label: '04. Data Processing & Management' },
  { value: 'back-office', label: '05. Back-Office Operations' },
  { value: 'it-support', label: '06. IT / Technical Support' },
  { value: 'hr-recruitment', label: '07. HR & Recruitment Support' },
  { value: 'custom-multi-pod', label: 'Multi-Discipline Dedicated Pod' },
];
