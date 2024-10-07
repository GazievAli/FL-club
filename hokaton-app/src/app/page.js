import "./styles/HomePage.css"
import Translations from "@/app/components/Translations/Translations";
import Matches from "@/app/components/Matches/Matches";
import {components, main} from "@/app/server/data/data";


export default function Home() {
  return (
    <div className="HomePage">
      <Translations
          body={components.HomePage.news}
          isTranslation={main.isTranslation}
      />
      <Matches body={components.HomePage.matches} />
    </div>
  );
}
