import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'HealthSpan360 - Turning Insight Into Impact',
  description = 'HealthSpan360 integrates peptide science, genetic insights, and advanced laboratory testing to help providers and patients achieve better health outcomes. Professional wellness and diagnostics solutions for licensed healthcare providers.',
  keywords = 'peptides, genetic testing, micronutrient testing, wellness diagnostics, longevity lab, functional medicine testing, HealthSpan360, healthcare providers, precision medicine, personalized medicine',
  ogImage = '/Logo_web.webp',
  ogType = 'website',
  canonical
}) => {
  const siteUrl = 'https://www.healthspan360.com';
  const fullTitle = title.includes('HealthSpan360') ? title : `${title} | HealthSpan360`;
  const canonicalUrl = canonical || `${siteUrl}${window.location.pathname}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="HealthSpan360" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MedicalBusiness',
          name: 'HealthSpan360',
          description: description,
          url: siteUrl,
          logo: fullOgImage,
          telephone: '1-800-HEALTHSPAN',
          email: 'info@hs360.co',
          slogan: 'Turning Insight Into Impact',
          serviceType: [
            'Peptide Therapy',
            'Genetic Testing',
            'Micronutrient Testing',
            'Clinical Laboratory Services'
          ],
          medicalSpecialty: [
            'Precision Medicine',
            'Functional Medicine',
            'Preventive Medicine'
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
