import React, { useState } from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { useForm } from 'react-hook-form';
import { contactFormSchema, SERVICE_OPTIONS } from '../schemas/contactSchema';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  Mail,
  Phone,
  Clock,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';

export const ContactSection = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = async (values) => {
    setIsSubmitting(true);

    const result = contactFormSchema.safeParse(values);

    if (!result.success) {
      result.error.errors.forEach((err) => {
        const fieldName = err.path[0];
        if (fieldName) {
          setError(fieldName, { type: 'manual', message: err.message });
        }
      });
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      console.log('=== [YSG LEAD CAPTURE PAYLOAD] ===');
      console.log(JSON.stringify(result.data, null, 2));
      console.log('==================================');

      setSubmittedData(result.data);
      setIsSubmitting(false);
      reset();
    }, 600);
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    reset();
  };

  return (
    <Section
      id="contact"
      bg="subtle"
      padding="spacious"
      className="border-b border-slate-200 overflow-hidden"
    >
      <ScrollReveal className="flex items-center justify-between mb-4 max-w-4xl mx-auto text-center flex-col">
        <div className="mb-3">
          <span className="text-eyebrow uppercase tracking-widest font-bold px-3 py-1 bg-navy-50 text-navy-800 rounded-full border border-navy-100">
            Initiate Partnership
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-h2 font-display font-bold text-navy-900 tracking-tight leading-tight max-w-3xl">
          Request a Custom Staffing &amp; BPO Proposal
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-body-lg text-slate-600 max-w-2xl">
          Connect directly with our corporate solutions team. We'll design a dedicated pod architecture aligned with your operational targets and budget.
        </p>
      </ScrollReveal>

      <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">

        <ScrollReveal delay={100} className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-navy-950 text-white border border-navy-800 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold block mb-1">
                Executive Coordination
              </span>
              <h3 className="text-xl font-display font-bold text-white">
                Enterprise Client Relations
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Receive a preliminary pod staffing model, rate card, and timezone alignment schedule within 24 hours of submission.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-navy-800 text-xs">
              <div className="flex items-start gap-3">
                <Building className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Global Headquarters:</span>
                  <span className="text-slate-300 font-mono text-[11px] leading-relaxed block mt-0.5">
                    FDRK7243 Compass Building, Al Shohada Road, Al Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <div>
                  <span className="font-bold text-white block">Direct Inquiries:</span>
                  <span className="text-slate-300 font-mono">inquiry@yoursource.global</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <div>
                  <span className="font-bold text-white block">Client Advisory Line:</span>
                  <span className="text-slate-300 font-mono">+971 (0) 7 204 1111</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="font-bold text-white block">Response SLA:</span>
                  <span className="text-emerald-300 font-mono">&lt; 24 business hours guaranteed</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-navy-900 border border-navy-800 space-y-2 text-[11px] text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-slate-300 shrink-0" />
                <span>Mutual Non-Disclosure Agreement applied to all inquiries</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0" />
                <span>Zero obligation pod sizing &amp; feasibility assessment</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150} className="lg:col-span-7">
          <div className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-md">

            {submittedData ? (
              <div className="py-8 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold text-navy-900">
                    Quote Request Received Successfully
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mt-2">
                    Thank you, <strong className="text-navy-900">{submittedData.name}</strong> from <strong className="text-navy-900">{submittedData.company}</strong>. Our enterprise solutions director will contact you at <strong className="text-navy-900">{submittedData.email}</strong> shortly.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs font-mono text-slate-700 space-y-1.5 max-w-md mx-auto">
                  <div className="flex justify-between border-b border-slate-200 pb-1">
                    <span className="text-slate-500">Service Pod:</span>
                    <span className="font-bold text-navy-900">{submittedData.service}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-1">
                    <span className="text-slate-500">Company:</span>
                    <span className="font-bold text-navy-900">{submittedData.company}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Timestamp:</span>
                    <span>{new Date().toLocaleTimeString()}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-left text-xs text-amber-900 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-amber-800">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Developer Integration Notice:</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-amber-800">
                    Client-side validation verified. Full JSON payload logged to console. Real email delivery (e.g. Resend/SendGrid) or CRM webhook (e.g. HubSpot/Salesforce) needs to be wired prior to launch.
                  </p>
                </div>

                <Button
                  onClick={handleResetForm}
                  variant="outline"
                  size="md"
                  icon={RotateCcw}
                  iconPosition="left"
                  className="mx-auto"
                >
                  Submit Another Quote Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-navy-900">
                    Tell Us About Your Requirements
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fields marked with <span className="text-red-500 font-bold">*</span> are required for quote generation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-navy-900 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      {...register('name')}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${errors.name
                          ? 'border-red-400 bg-red-50/30 focus:ring-red-300'
                          : 'border-slate-300 bg-slate-50/50 focus:border-navy-600 focus:ring-navy-100'
                        }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs font-bold text-navy-900 mb-1.5">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="e.g. Apex Global Solutions"
                      {...register('company')}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${errors.company
                          ? 'border-red-400 bg-red-50/30 focus:ring-red-300'
                          : 'border-slate-300 bg-slate-50/50 focus:border-navy-600 focus:ring-navy-100'
                        }`}
                    />
                    {errors.company && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.company.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-navy-900 mb-1.5">
                      Corporate Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="sarah@company.com"
                      {...register('email')}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${errors.email
                          ? 'border-red-400 bg-red-50/30 focus:ring-red-300'
                          : 'border-slate-300 bg-slate-50/50 focus:border-navy-600 focus:ring-navy-100'
                        }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-navy-900 mb-1.5">
                      Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      {...register('phone')}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${errors.phone
                          ? 'border-red-400 bg-red-50/30 focus:ring-red-300'
                          : 'border-slate-300 bg-slate-50/50 focus:border-navy-600 focus:ring-navy-100'
                        }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-navy-900 mb-1.5">
                    Primary Service of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    {...register('service')}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 bg-white ${errors.service
                        ? 'border-red-400 bg-red-50/30 focus:ring-red-300'
                        : 'border-slate-300 bg-slate-50/50 focus:border-navy-600 focus:ring-navy-100'
                      }`}
                  >
                    <option value="">Select one of our 7 core disciplines...</option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.label}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.service.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-navy-900 mb-1.5">
                    Scope &amp; Staffing Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Briefly describe your team size, expected hours/timezone, target start date, and software toolchains..."
                    {...register('message')}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${errors.message
                        ? 'border-red-400 bg-red-50/30 focus:ring-red-300'
                        : 'border-slate-300 bg-slate-50/50 focus:border-navy-600 focus:ring-navy-100'
                      }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  icon={Send}
                  iconPosition="right"
                  className="w-full justify-center bg-navy-800 text-white hover:bg-navy-900 font-bold py-3.5 shadow-md"
                >
                  {isSubmitting ? 'Validating & Submitting...' : 'Submit Request For Quote'}
                </Button>

                <p className="text-[11px] text-center text-slate-400 leading-normal">
                  By submitting this form, you agree to our confidential partnership terms. We respect your privacy and never distribute business contact information.
                </p>
              </form>
            )}

          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
};

export default ContactSection;
