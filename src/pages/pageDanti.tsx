import { Logo } from "../components/danti/Logo";

export const PageDanti = () => {
  return (
    <div>
      <Logo />
      <h1>Tommaso Danti</h1>
      <p>
        Ho fatto checkout sulla branch personale Poi ho fatto una merge sul main
        Poi ho fatto checkout sul main e ho fatto un reset alla commit
        precedente
      </p>
      <p>
        Come faccio a portare le modifiche fatte su master sulla mia branch dedicata?
        Devo Fare una git merge.
      </p>
    </div>
  );
};
