function TrustedBy() {
  const companies = [
    "VERTEX",
    "NEXORA",
    "LUMEN",
    "ORBIT",
    "PULSE",
  ];

  return (
    <section className="trusted-section">
      <div className="trusted-container">
        <p className="trusted-label">
          Trusted by forward-thinking teams worldwide
        </p>

        <div className="company-logos">
          {companies.map((company) => (
            <span key={company}>{company}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;