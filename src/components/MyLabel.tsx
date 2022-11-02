import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Este es el mensaje que se va a mostrar en la etiqueta
   */
  label: string;
  /**
   * Tipos de size que el componente puede tener
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Si el texto será de tipo Capitalize o no.
   */
  allCaps?: boolean;
  /**
   * Tipos de color existentes
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Enviar código hexadecimal del color
   */
  fontColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  color = "primary",
  label = "No Label",
  size = "normal",
  fontColor,
}: MyLabelProps) => {
  const textFormated = allCaps ? label.toUpperCase() : label;
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {textFormated}
    </span>
  );
};
