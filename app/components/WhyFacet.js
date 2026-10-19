"use client";

export default function WhyFacet() {
  const pillars = [
    {
      number: "01",
      title: "Defined Scope & Boundaries",
      description: "Know exactly what the engagement covers and excludes. We articulate searched jurisdictions, time horizons, and source parameters in advance to eliminate ambiguity."
    },
    {
      number: "02",
      title: "Evidence-Led Sourcing",
      description: "Findings are explicitly connected to primary source registers, gazettes, deed volumes, and judicial dockets, with dates accessed and document references catalogued."
    },
    {
      number: "03",
      title: "Investigative Context",
      description: "Cross-referencing related entities, promoter cross-directorships, and historical timeline gaps helps explain why a discrepancy may matter to your transaction."
    },
    {
      number: "04",
      title: "Decision-Ready Reporting",
      description: "Findings are structured with an executive risk summary, clear Red/Amber/Green flags, and concrete questions to arm your transaction counsel or credit committee."
    }
  ];

  return (
    <section className="section-padding bg-navy" aria-label="Why Choose FACET Verify">
      <div className="container">
        <div style={{ maxWidth: "780px", marginBottom: "3.5rem" }}>
          <div className="eyebrow eyebrow-dark">
            Our Differentiating Approach
          </div>
          <h2 className="heading-lg" style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
            A More Structured View of Risk.
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#94A3B8", lineHeight: "1.7" }}>
            Rather than relying solely on automated keyword sweeps or unverified declarations, FACET Verify applies rigorous human analysis and source-backed verification to high-stakes decisions.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "2rem"
        }}>
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="card-dark"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "2.25rem 1.75rem",
                position: "relative"
              }}
            >
              <div style={{
                fontFamily: "monospace",
                fontSize: "1.5rem",
                fontWeight: "800",
                color: "var(--facet-red)",
                marginBottom: "1rem",
                letterSpacing: "-0.03em"
              }}>
                {pillar.number}
              </div>

              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#FFFFFF", marginBottom: "0.75rem", lineHeight: "1.3" }}>
                {pillar.title}
              </h3>

              <p style={{ fontSize: "0.9375rem", color: "#94A3B8", lineHeight: "1.65" }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
