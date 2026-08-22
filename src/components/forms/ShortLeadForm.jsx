import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { shortLeadFormSchema } from '../../schemas/shortLeadSchema';
import { Button } from '../ui/Button';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  RotateCcw,
} from 'lucide-react';

export const ShortLeadForm = ({
  theme = 'light',
  title = 'Quick Quote & Pod Feasibility',
  subtitle = 'Get a custom team structure and rate proposal in < 24 hours.',
  buttonText = 'Get Instant Proposal',
  formId = 'short-lead-form',
  className = '',
}) => {
  const [submitted, setSubmitted] = useState(null);
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
      email: '',
      company: '',
      message: '',
    },
  });

  const isDark = theme === 'dark';

  const onSubmit = (values) => {
    setIsSubmitting(true);
    const result = shortLeadFormSchema.safeParse(values);

    if (!result.success) {
      result.error.errors.forEach((err) => {
        const field = err.path[0];
        if (field) {
          setError(field, { type: 'manual', message: err.message });
        }
      });
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      console.log(`=== [YSG SHORT LEAD CAPTURE (${formId})] ===`);
      console.log(JSON.stringify(result.data, null, 2));
      console.log('============================================');

      setSubmitted(result.data);
      setIsSubmitting(false);
      reset();
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(null);
    reset();
  };

  return (
    <div
      className={`p-6 sm:p-8 md:p-10 rounded-3xl border transition-all duration-300 ${
        isDark
          ? 'bg-navy-900/90 border-navy-700/80 text-white shadow-2xl backdrop-blur-md'
          : 'bg-white border-slate-200 text-navy-900 shadow-lg'
      } ${className}`}
    >
      {submitted ? (
        <div className="py-6 text-center space-y-4 animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>

          <div>
            <h4 className="text-xl font-display font-bold">
              Thank You, {submitted.name}!
            </h4>
            <p className={`text-xs mt-1.5 max-w-sm mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Your inquiry for <strong>{submitted.company}</strong> has been logged. Our solutions team will reach out at <strong>{submitted.email}</strong> shortly.
            </p>
          </div>

          <div className={`p-3 rounded-xl text-left text-[11px] font-mono space-y-1 max-w-xs mx-auto ${
            isDark ? 'bg-navy-950 border border-navy-800 text-slate-300' : 'bg-slate-50 border border-slate-200 text-slate-700'
          }`}>
            <div>Payload logged to console.</div>
            <div className="text-amber-400 text-[10px]">[Notice: Connect real CRM/Email prior to live launch]</div>
          </div>

          <Button
            onClick={handleReset}
            variant={isDark ? 'secondary' : 'outline'}
            size="sm"
            icon={RotateCcw}
            iconPosition="left"
            className="mx-auto mt-2"
          >
            Submit Another Request
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
          <div className="mb-4">
            <div className="mb-1">
              <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                isDark ? 'bg-navy-800 text-slate-300 border border-navy-700' : 'bg-navy-50 text-navy-800 border border-navy-100'
              }`}>
                Fast-Track Quote
              </span>
            </div>
            <h4 className={`text-xl font-display font-bold ${isDark ? 'text-white' : 'text-navy-900'}`}>
              {title}
            </h4>
            <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
              {subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor={`${formId}-name`} className="block text-[11px] font-bold mb-1">
                Full Name *
              </label>
              <input
                id={`${formId}-name`}
                type="text"
                placeholder="Sarah Jenkins"
                {...register('name')}
                className={`w-full px-3.5 py-2 rounded-xl text-xs border transition-colors focus:outline-none focus:ring-2 ${
                  errors.name
                    ? 'border-red-400 bg-red-50/20 focus:ring-red-300'
                    : isDark
                    ? 'bg-navy-950/80 border-navy-700 text-white placeholder-slate-500 focus:border-slate-400 focus:ring-navy-600'
                    : 'bg-slate-50 border-slate-200 text-navy-900 placeholder-slate-400 focus:border-navy-600 focus:ring-navy-100'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor={`${formId}-email`} className="block text-[11px] font-bold mb-1">
                Corporate Email *
              </label>
              <input
                id={`${formId}-email`}
                type="email"
                placeholder="sarah@company.com"
                {...register('email')}
                className={`w-full px-3.5 py-2 rounded-xl text-xs border transition-colors focus:outline-none focus:ring-2 ${
                  errors.email
                    ? 'border-red-400 bg-red-50/20 focus:ring-red-300'
                    : isDark
                    ? 'bg-navy-950/80 border-navy-700 text-white placeholder-slate-500 focus:border-slate-400 focus:ring-navy-600'
                    : 'bg-slate-50 border-slate-200 text-navy-900 placeholder-slate-400 focus:border-navy-600 focus:ring-navy-100'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor={`${formId}-company`} className="block text-[11px] font-bold mb-1">
                Company Name *
              </label>
              <input
                id={`${formId}-company`}
                type="text"
                placeholder="Apex Technologies"
                {...register('company')}
                className={`w-full px-3.5 py-2 rounded-xl text-xs border transition-colors focus:outline-none focus:ring-2 ${
                  errors.company
                    ? 'border-red-400 bg-red-50/20 focus:ring-red-300'
                    : isDark
                    ? 'bg-navy-950/80 border-navy-700 text-white placeholder-slate-500 focus:border-slate-400 focus:ring-navy-600'
                    : 'bg-slate-50 border-slate-200 text-navy-900 placeholder-slate-400 focus:border-navy-600 focus:ring-navy-100'
                }`}
              />
              {errors.company && (
                <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.company.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor={`${formId}-message`} className="block text-[11px] font-bold mb-1">
                Primary Requirement (One-Line) *
              </label>
              <input
                id={`${formId}-message`}
                type="text"
                placeholder="e.g. 5x AP Specialists, 24/7 Support Pod"
                {...register('message')}
                className={`w-full px-3.5 py-2 rounded-xl text-xs border transition-colors focus:outline-none focus:ring-2 ${
                  errors.message
                    ? 'border-red-400 bg-red-50/20 focus:ring-red-300'
                    : isDark
                    ? 'bg-navy-950/80 border-navy-700 text-white placeholder-slate-500 focus:border-slate-400 focus:ring-navy-600'
                    : 'bg-slate-50 border-slate-200 text-navy-900 placeholder-slate-400 focus:border-navy-600 focus:ring-navy-100'
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={isSubmitting}
            icon={Send}
            iconPosition="right"
            className={`w-full justify-center font-bold mt-2 ${
              isDark
                ? 'bg-white text-navy-950 hover:bg-slate-100'
                : 'bg-navy-800 text-white hover:bg-navy-900'
            }`}
          >
            {isSubmitting ? 'Validating...' : buttonText}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ShortLeadForm;
