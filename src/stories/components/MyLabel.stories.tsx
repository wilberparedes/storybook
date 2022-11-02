import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
  title: "UI/MyLabel", //punto en el cual se va a mostrar la historia
  component: MyLabel, //componente a probar
  //como quiere mostar las property
  argTypes: {
    // tipo de dato que quiero controlar en este caso convertirlo a un select
    size: { control: "select" },
    color: { control: "select" },
    fontColor: { control: "color" },
  },
} as ComponentMeta<typeof MyLabel>;
//ComponentMeta = configuracion de una descripción del objeto

//decir que renderice en ese path
// creando template que construye /utiliza el componente
// componentStory para configurar de que tipo son las props
const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

//creando paginas
export const Basic = Template.bind({}); // crea una copia del boton
Basic.args = {
  size: "normal",
  allCaps: false, //true: capitalizar toda la palabra
};
export const AllCaps = Template.bind({}); // crea una copia del boton
AllCaps.args = {
  size: "normal",
  allCaps: true, //true: capitalizar toda la palabra
};
export const Secondary = Template.bind({}); // crea una copia del boton
Secondary.args = {
  size: "normal",
  color: "secondary", //color del text
};
export const Tertiary = Template.bind({}); // crea una copia del boton
Tertiary.args = {
  size: "normal",
  color: "tertiary", //color del text
};

export const CustomFontColor = Template.bind({}); // crea una copia del boton
CustomFontColor.args = {
  size: "h1",
  fontColor: "#5517ac", //color del text
};

// customfontcolor
