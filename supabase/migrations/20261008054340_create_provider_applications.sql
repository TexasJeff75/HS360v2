/*
# Create provider_applications table

1. Purpose
   Stores partnership applications submitted from the public "For Providers" page.
   The website has no sign-in, so visitors submit as the anonymous role.

2. New Tables
   - `provider_applications`
     - `id` (uuid, primary key)
     - `full_name` (text, required)
     - `email` (text, required)
     - `phone` (text, required)
     - `practice_name` (text, optional)
     - `practice_type` (text, required)
     - `license_type` (text, required)
     - `license_number` (text, required)
     - `practice_state` (text, optional)
     - `interests` (text[], services the provider wants to offer)
     - `message` (text, optional)
     - `created_at` (timestamptz)

3. Security
   - RLS enabled.
   - Visitors (anon + authenticated) may INSERT only, with length/format checks.
   - No SELECT, UPDATE, or DELETE policies: applications contain license details,
     so the public cannot read or change them. Staff review them in the dashboard.

4. Notes
   1. Check constraints cap field lengths to prevent abuse.
   2. Index on created_at for reviewing newest applications first.
*/

CREATE TABLE IF NOT EXISTS provider_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 1 AND 200),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 320 AND email LIKE '%_@_%'),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 40),
  practice_name text CHECK (practice_name IS NULL OR char_length(practice_name) <= 200),
  practice_type text NOT NULL CHECK (char_length(practice_type) BETWEEN 1 AND 60),
  license_type text NOT NULL CHECK (char_length(license_type) BETWEEN 1 AND 60),
  license_number text NOT NULL CHECK (char_length(license_number) BETWEEN 1 AND 60),
  practice_state text CHECK (practice_state IS NULL OR char_length(practice_state) <= 60),
  interests text[] NOT NULL DEFAULT '{}' CHECK (cardinality(interests) <= 10),
  message text CHECK (message IS NULL OR char_length(message) <= 3000),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS provider_applications_created_at_idx
  ON provider_applications (created_at DESC);

ALTER TABLE provider_applications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Visitors can submit applications" ON provider_applications;
CREATE POLICY "Visitors can submit applications"
  ON provider_applications FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
