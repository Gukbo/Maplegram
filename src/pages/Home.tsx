import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <div>Maplegram 홈화면</div>
      <Link className="" to="/Meso">
        결정석 계산기
      </Link>
    </section>
  );
}
