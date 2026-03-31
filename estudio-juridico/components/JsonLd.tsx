export const JsonLd = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": "https://ramirotiteabogado.vercel.app/#organization",
        name: "Institución Jurídica Dr. Ramiro Tite",
        alternateName: "Estudio Jurídico Ramiro Tite",
        description:
          "Estudio jurídico especializado en derecho penal, constitucional y penal económico en Píllaro, Tungurahua, Ecuador. Más de 25 años de experiencia en defensa legal de alto impacto.",
        url: "https://ramirotiteabogado.vercel.app",
        telephone: "+593989983262",
        email: "rtitelegal@yahoo.es",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bolívar y Carlos Tamayo",
          addressLocality: "Píllaro",
          addressRegion: "Tungurahua",
          addressCountry: "EC",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -1.1731843,
          longitude: -78.5418647,
        },
        areaServed: [
          {
            "@type": "City",
            name: "Píllaro",
          },
          {
            "@type": "AdministrativeArea",
            name: "Tungurahua",
          },
          {
            "@type": "Country",
            name: "Ecuador",
          },
        ],
        priceRange: "$$",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "08:00",
          closes: "18:00",
        },
        founder: {
          "@type": "Person",
          "@id": "https://ramirotiteabogado.vercel.app/#person",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios Legales",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Derecho Penal",
                description:
                  "Defensa integral en delitos penales, con enfoque en la protección de los derechos fundamentales y el debido proceso.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Derecho Constitucional",
                description:
                  "Acciones de protección, hábeas corpus y garantías constitucionales para la defensa efectiva frente a actos de poder.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Penal Económico",
                description:
                  "Asesoría y defensa estratégica en delitos contra la administración, propiedad y orden económico nacional.",
              },
            },
          ],
        },
      },
      {
        "@type": "Attorney",
        "@id": "https://ramirotiteabogado.vercel.app/#person",
        name: "Mg. Ramiro Tite",
        jobTitle: "Abogado Penalista y Constitucionalista",
        description:
          "Abogado con Maestría y más de 25 años de experiencia en derecho penal y constitucional en Ecuador. Fundador de la Institución Jurídica Dr. Ramiro Tite.",
        image: "https://ramirotiteabogado.vercel.app/Ramiro.jpeg",
        url: "https://ramirotiteabogado.vercel.app",
        telephone: "+593989983262",
        email: "rtitelegal@yahoo.es",
        worksFor: {
          "@id": "https://ramirotiteabogado.vercel.app/#organization",
        },
        knowsAbout: [
          "Derecho Penal",
          "Derecho Constitucional",
          "Penal Económico",
          "Hábeas Corpus",
          "Acciones de Protección",
          "Garantías Constitucionales",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://ramirotiteabogado.vercel.app/#website",
        url: "https://ramirotiteabogado.vercel.app",
        name: "Mg. Ramiro Tite | Estudio Jurídico",
        description:
          "Defensa Legal con Excelencia en Píllaro y todo el Ecuador",
        publisher: {
          "@id": "https://ramirotiteabogado.vercel.app/#organization",
        },
        inLanguage: "es",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
