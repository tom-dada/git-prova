import { Logo } from "../components/danti/Logo";

export const PageDanti = () => {
  return (
    <div>
      <Logo />
      <h1>Tommaso Danti</h1>
      <p>
        Ho fatto checkout sulla branch personale
        Poi ho fatto una merge sul main
        Poi ho fatto checkout sul main e ho fatto un reset alla commit precedente
      </p>
    </div>
  );
};
