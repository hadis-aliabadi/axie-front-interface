import { LinkComponent } from "@/components/core";
import { useTranslation } from "react-i18next";

export const TextBox = ({ text, coloredTxt, href, className }:any) => {
  return (
    <section className={`rounded-3xl bg-white p-6 shadow-textbox  font-medium ${className}`}>
      <p>
        {text.split(' ').map((word:any, index:any) => {
          if (coloredTxt.includes(word)) {
            return (
              <LinkComponent key={index} href={href}>
                {word}{' '}
              </LinkComponent>
            );
          }
          return <span key={index}>{word}{' '}</span>;
        })}
      </p>
    </section>
  );
};