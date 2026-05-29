import React from 'react';
import Layout from '@theme/Layout';

const sectionStyle = {
  padding: '4rem 2rem',
  maxWidth: '1000px',
  margin: '0 auto',
};

const cardContainer = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '1.5rem',
  marginTop: '2rem',
};

const cardStyle = {
  border: '1px solid #e5e7eb',
  borderRadius: '12px',
  padding: '1.5rem',
};

export default function Home() {
  return (
    <Layout
      title="Ronak Giri"
      description="Technical Writer Portfolio">

      <main>

        {/* HERO SECTION */}
        <section
          style={{
            padding: '6rem 2rem',
            textAlign: 'center',
          }}>

          <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>
            Ronak Giri
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.8',
            }}>

            Technical Writer specializing in Developer Documentation,
            SaaS Platforms, SDK Documentation, and Docs-as-Code workflows.
          </p>

          <div style={{marginTop: '2rem'}}>

            <a
              href="/portfolio/docs/intro"
              style={{
                padding: '12px 22px',
                borderRadius: '8px',
                textDecoration: 'none',
                marginRight: '1rem',
                border: '1px solid #ccc',
              }}>
              View Documentation
            </a>

            <a
              href="https://github.com/Ronakmrup"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: '12px 22px',
                borderRadius: '8px',
                textDecoration: 'none',
                border: '1px solid #ccc',
              }}>
              GitHub
            </a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section style={sectionStyle}>
          <h2>About Me</h2>

          <p style={{lineHeight: '1.9', marginTop: '1rem'}}>
            I’m a technical writer with experience in API documentation,
            SaaS platforms, Windows SDK documentation, release notes,
            and developer-focused content systems.

            I enjoy simplifying complex technical concepts into
            scalable and user-friendly documentation experiences.
          </p>
        </section>

        {/* EXPERTISE SECTION */}
        <section style={sectionStyle}>
          <h2>Core Expertise</h2>

          <div style={cardContainer}>

            <div style={cardStyle}>
              <h3>API Documentation</h3>
              <p>
                REST APIs, developer onboarding,
                endpoint documentation, and integration guides.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>SDK Documentation</h3>
              <p>
                Windows SDKs, installation guides,
                deployment workflows, and implementation examples.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Docs-as-Code</h3>
              <p>
                Git, GitHub, Markdown, Docusaurus,
                branching workflows, and deployment pipelines.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>SaaS Documentation</h3>
              <p>
                Admin guides, onboarding content,
                product documentation, and release communication.
              </p>
            </div>

          </div>
        </section>

        {/* FEATURED WORK */}
        <section style={sectionStyle}>
          <h2>Featured Work</h2>

          <div style={cardContainer}>

            <div style={cardStyle}>
              <h3>Developer Documentation Portal</h3>
              <p>
                Documentation architecture built using Docusaurus
                and GitHub Pages deployment workflows.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Release Notes Workflow</h3>
              <p>
                Structured release documentation process
                using Git branching and pull request reviews.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>SDK Documentation Samples</h3>
              <p>
                Installation guides, API references,
                deployment instructions, and onboarding examples.
              </p>
            </div>

          </div>
        </section>

        {/* CTA SECTION */}
        <section
          style={{
            ...sectionStyle,
            textAlign: 'center',
            paddingBottom: '6rem',
          }}>

          <h2>Let’s Connect</h2>

          <p style={{marginTop: '1rem'}}>
            Interested in developer documentation,
            docs-as-code workflows, or technical writing collaboration?
          </p>

          <div style={{marginTop: '2rem'}}>

            <a
              href="https://github.com/Ronakmrup"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: '12px 24px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                textDecoration: 'none',
              }}>
              Visit GitHub
            </a>

          </div>
        </section>

      </main>
    </Layout>
  );
}