import { DantiButton } from "../components/danti/DantiButton";
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
      <p>
        Mozzarelline Fritte
      </p>
      <p>
        Paccheri al sugo
      </p>
      <p>
        Salsiccia e peperoni
      </p>
      <p>
        Cheesecake al limone
      </p>
      <p>
        Josh Homme
      </p>
      <p>
        Jeff Bridges
      </p>
      <p>
        Cristiano Ronaldo
      </p>
      <p>
      Esiste un modo per unire tutti questi commit in un unico commit quando si esegue il merge su master?
      Si, con uno squash. Si può fare anche con una pull request.
      </p>
      <p>
      Unire tanti commit in un unico commit?
      Eseguire uno squash.
      </p>
      <DantiButton></DantiButton>
      <p>
        per splittare due commit diverse, eseguire un git rebase e poi un git reset.
      </p>
      <p>
        per riavvolgere il tempo, eseguire una git reset --hard
      </p>
      <p>
        per mettere in pausa il lavoro su una branch e riprenderlo in un secondo momento,
        utilizzare il comando git stash
      </p>
    </div>
  );
};
