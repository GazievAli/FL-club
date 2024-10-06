import "./styles/HomePage.css"
import Translations from "@/app/components/Translations/Translations";
import Matches from "@/app/components/Matches/Matches";

export default function Home() {
  return (
    <div className="HomePage">
      <Translations />
      <Matches />
    </div>
  );
}
