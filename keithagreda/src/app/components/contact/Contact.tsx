import { contactEmail } from "../../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-8 px-4 lg:px-6">
      <h2 id="contact-heading" className="mb-6 font-display text-2xl font-semibold text-secondary">
        Let&apos;s work together
      </h2>
      <p className="text-secondary">Available for remote roles.</p>
      <p className="mt-3 leading-relaxed">
        Looking for a full-stack developer for business applications or AI
        integrations? Get in touch to discuss the role.
      </p>
      <a
        href={`mailto:${contactEmail}`}
        className="mt-5 inline-block break-all font-medium text-[#00d9a6] underline decoration-[#00d9a6]/40 underline-offset-4 hover:decoration-[#00d9a6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00d9a6]"
      >
        {contactEmail}
      </a>
      <p className="mt-4 text-sm text-secondary/60">General Santos City, Philippines · UTC+8</p>
    </section>
  );
}
