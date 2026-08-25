/**
 * Sacred Journey Editorial design reminder:
 * Forms should feel pastoral and composed—parchment surfaces, calm labels,
 * dignified language and direct confirmation rather than sales-heavy treatment.
 */
import { Loader2 } from "lucide-react";
import { FormEvent, ReactNode, useState } from "react";

type MandateFormProps = {
  formName: string;
  submitLabel: string;
  children: ReactNode;
  compact?: boolean;
};

// Replace this with the ministry's Formspree endpoint once it is created.
// Example: "https://formspree.io/f/yourFormId"
const FORMSPREE_ENDPOINT = "";

export function MandateForm({
  formName,
  submitLabel,
  children,
  compact = false,
}: MandateFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "preview" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("form_name", formName);

    if (!FORMSPREE_ENDPOINT) {
      setStatus("preview");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Submission unavailable");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success" || status === "preview") {
    return (
      <div className={`form-success ${compact ? "form-success--compact" : ""}`} role="status">
        <span className="form-success__eyebrow">Thank you</span>
        <h3>{status === "success" ? "We have received your message." : "Your message is ready to be received."}</h3>
        <p>
          {status === "success"
            ? "Thank you for taking this step with The Great Mandate. Someone from the ministry will follow up where appropriate."
            : "The site is ready for its secure ministry form endpoint. Once connected, future messages will be sent directly to the ministry team."}
        </p>
        <button className="text-link" type="button" onClick={() => setStatus("idle")}>
          Send another response
        </button>
      </div>
    );
  }

  return (
    <form className={`mandate-form ${compact ? "mandate-form--compact" : ""}`} onSubmit={handleSubmit} noValidate>
      {children}
      <button className="button button--burgundy form-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? <Loader2 size={16} className="animate-spin" /> : null}
        {status === "sending" ? "Sending…" : submitLabel}
      </button>
      {status === "error" ? (
        <p className="form-error" role="alert">We could not send this response just now. Please try again or contact the ministry directly.</p>
      ) : null}
    </form>
  );
}

export function Field({ label, children, hint }: { label: string; children: ReactNode; hint?: string }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      {children}
      {hint ? <small>{hint}</small> : null}
    </label>
  );
}
