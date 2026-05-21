import { toast } from "react-toastify";
import { submitContactForm } from "./actions";
import { useActionState, useEffect } from "react";
import type { FormActionState } from "../../types";
import { useTranslation } from "../../i18n/TranslationContext";

export default function ContactForm() {
  const { t } = useTranslation();
  const [state, formAction, isPending] = useActionState<
    FormActionState | null,
    FormData
  >(submitContactForm, {
    error: undefined,
    success: false,
  });

  useEffect(() => {
    if (state?.success) {
      toast.success(t("formSuccess"), {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else if (state?.error) {
      toast.error(t("formError"), {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [state?.success, state?.error]);

  const getFieldError = (fieldName: string): string | null => {
    if (!state?.error || !state.error[fieldName]) {
      return null;
    }
    return state.error[fieldName].errors[0] || null;
  };

  return (
    <form
      id="contact-form"
      className="form-horizontal"
      role="form"
      action={formAction}
    >
      <div className="form-group">
        <label htmlFor="name" className="sr-only">
          {t("formName")}
        </label>
        <input
          type="text"
          className={`form-control ${
            getFieldError("name") ? "input-error" : ""
          }`}
          id="name"
          placeholder={t("formName")}
          name="name"
          defaultValue={state?.data?.name || ""}
          aria-describedby={getFieldError("name") ? "name-error" : undefined}
        />
        {getFieldError("name") && (
          <span className="error-message" id="name-error">
            {getFieldError("name")}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email" className="sr-only">
          {t("formEmail")}
        </label>
        <input
          type="email"
          className={`form-control ${
            getFieldError("email") ? "input-error" : ""
          }`}
          id="email"
          placeholder={t("formEmail")}
          name="email"
          defaultValue={state?.data?.email || ""}
          aria-describedby={getFieldError("email") ? "email-error" : undefined}
        />
        {getFieldError("email") && (
          <span className="error-message" id="email-error">
            {getFieldError("email")}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="message" className="sr-only">
          {t("formMessage")}
        </label>
        <textarea
          className={`form-control ${
            getFieldError("message") ? "input-error" : ""
          }`}
          rows={10}
          placeholder={t("formMessage")}
          name="message"
          id="message"
          defaultValue={state?.data?.message || ""}
          aria-describedby={
            getFieldError("message") ? "message-error" : undefined
          }
        ></textarea>
        {getFieldError("message") && (
          <span className="error-message" id="message-error">
            {getFieldError("message")}
          </span>
        )}
      </div>

      <button
        className="btn btn-primary send-button"
        id="submit"
        type="submit"
        disabled={isPending}
      >
        <div className="alt-send-button">
          <i className="fa fa-paper-plane"></i>
          <span className="send-text">
            {isPending ? t("formSending") : t("formSend")}
          </span>
        </div>
      </button>
    </form>
  );
}
