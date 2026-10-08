import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2, AlertCircle, ShieldCheck } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const PRACTICE_TYPES = [
  'Primary Care',
  'Functional Medicine',
  'Integrative Medicine',
  'Wellness Center',
  'Anti-Aging / Longevity',
  'Weight Management',
  'Chiropractic',
  'Other',
];

const LICENSE_TYPES = [
  'MD - Doctor of Medicine',
  'DO - Doctor of Osteopathic Medicine',
  'NP - Nurse Practitioner',
  'PA - Physician Assistant',
  'PharmD - Doctor of Pharmacy',
  'DC - Doctor of Chiropractic',
  'ND - Naturopathic Doctor',
  'Other Licensed Practitioner',
];

const INTERESTS = ['Genetic Testing', 'Micronutrient Testing', 'Allergy Testing', 'Clinical Lab Services'];

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  practiceName: string;
  practiceType: string;
  licenseType: string;
  licenseNumber: string;
  practiceState: string;
  interests: string[];
  message: string;
};

type Errors = Partial<Record<keyof FormValues, string>>;

const EMPTY: FormValues = {
  fullName: '',
  email: '',
  phone: '',
  practiceName: '',
  practiceType: '',
  licenseType: '',
  licenseNumber: '',
  practiceState: '',
  interests: [],
  message: '',
};

const validate = (v: FormValues): Errors => {
  const errors: Errors = {};
  if (!v.fullName.trim()) errors.fullName = 'Please enter your full name.';
  if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) errors.email = 'Please enter a valid email address.';
  if (v.phone.replace(/\D/g, '').length < 10) errors.phone = 'Please enter a valid phone number.';
  if (!v.practiceType) errors.practiceType = 'Please choose a practice type.';
  if (!v.licenseType) errors.licenseType = 'Please choose a license type.';
  if (!v.licenseNumber.trim()) errors.licenseNumber = 'Please enter your license number.';
  return errors;
};

const inputBase =
  'w-full px-4 py-3 rounded-xl border bg-white font-inter text-gray-900 placeholder:text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-magenta-500 focus:border-transparent';

const Field = ({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
      {label}
      {required && <span className="text-magenta-600"> *</span>}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} className="mt-2 text-sm text-red-600 font-inter">
        {error}
      </p>
    )}
  </div>
);

const ProviderApplicationForm = () => {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const update = (name: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const toggleInterest = (interest: string) => {
    setValues((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('submitting');
    const { error } = await supabase.from('provider_applications').insert({
      full_name: values.fullName.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      practice_name: values.practiceName.trim() || null,
      practice_type: values.practiceType,
      license_type: values.licenseType,
      license_number: values.licenseNumber.trim(),
      practice_state: values.practiceState.trim() || null,
      interests: values.interests,
      message: values.message.trim() || null,
    });

    if (error) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setValues(EMPTY);
  };

  const fieldProps = (name: keyof FormValues) => ({
    id: name,
    name,
    value: values[name] as string,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
    className: `${inputBase} ${errors[name] ? 'border-red-400' : 'border-gray-200'}`,
  });

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
          role="status"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-9 w-9 text-green-600" />
          </div>
          <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-3">Application received</h3>
          <p className="text-gray-600 font-inter max-w-md mx-auto mb-8 leading-relaxed">
            Thank you for your interest in partnering with HealthSpan360. A member of our provider team will reach
            out within two business days to schedule your onboarding call.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="text-magenta-600 hover:text-magenta-700 font-poppins font-semibold"
          >
            Submit another application
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          noValidate
          className="space-y-8"
        >
          <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <legend className="sr-only">Contact details</legend>
            <Field id="fullName" label="Full name" required error={errors.fullName}>
              <input type="text" autoComplete="name" {...fieldProps('fullName')} onChange={(e) => update('fullName', e.target.value)} />
            </Field>
            <Field id="email" label="Work email" required error={errors.email}>
              <input type="email" autoComplete="email" {...fieldProps('email')} onChange={(e) => update('email', e.target.value)} />
            </Field>
            <Field id="phone" label="Phone" required error={errors.phone}>
              <input type="tel" autoComplete="tel" {...fieldProps('phone')} onChange={(e) => update('phone', e.target.value)} />
            </Field>
            <Field id="practiceName" label="Practice name">
              <input type="text" autoComplete="organization" {...fieldProps('practiceName')} onChange={(e) => update('practiceName', e.target.value)} />
            </Field>
            <Field id="practiceType" label="Practice type" required error={errors.practiceType}>
              <select {...fieldProps('practiceType')} onChange={(e) => update('practiceType', e.target.value)}>
                <option value="">Select practice type</option>
                {PRACTICE_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </Field>
            <Field id="practiceState" label="State">
              <input type="text" autoComplete="address-level1" {...fieldProps('practiceState')} onChange={(e) => update('practiceState', e.target.value)} />
            </Field>
            <Field id="licenseType" label="License type" required error={errors.licenseType}>
              <select {...fieldProps('licenseType')} onChange={(e) => update('licenseType', e.target.value)}>
                <option value="">Select license type</option>
                {LICENSE_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </Field>
            <Field id="licenseNumber" label="License number" required error={errors.licenseNumber}>
              <input type="text" {...fieldProps('licenseNumber')} onChange={(e) => update('licenseNumber', e.target.value)} />
            </Field>
          </fieldset>

          <fieldset>
            <legend className="block text-sm font-poppins font-semibold text-gray-700 mb-3">
              Which services would you like to offer?
            </legend>
            <div className="flex flex-wrap gap-3">
              {INTERESTS.map((interest) => {
                const active = values.interests.includes(interest);
                return (
                  <button
                    key={interest}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2 rounded-full border font-inter text-sm transition-all ${
                      active
                        ? 'bg-gradient-primary text-white border-transparent shadow-md'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-magenta-500 hover:text-magenta-600'
                    }`}
                  >
                    {interest}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <Field id="message" label="Tell us about your practice goals">
            <textarea
              rows={4}
              placeholder="What would you like to offer your patients? Any questions for our team?"
              {...fieldProps('message')}
              onChange={(e) => update('message', e.target.value)}
            />
          </Field>

          {status === 'error' && (
            <div role="alert" className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
              <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <p className="font-inter text-sm">
                We couldn't send your application. Please try again, or email providers@hs360.co.
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
            <p className="flex items-center gap-2 text-sm text-gray-500 font-inter">
              <ShieldCheck className="h-4 w-4 text-green-600 flex-shrink-0" />
              Licenses are verified before activation.
            </p>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="group inline-flex items-center justify-center bg-gradient-primary text-white px-8 py-4 rounded-xl font-poppins font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Submit Application
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
};

export default ProviderApplicationForm;
