import mainImage from '../../../assets/img/homemain.png';
import mainLogo from '../../../assets/img/homemainlogo.png';

export default function Header() {
    return (
        <section>
            <div class="heads">
                <img class="mainimage" src={mainImage} />
                <a href ="/">
                    <div class="logo">
                        <img class="logo-restrocafe" src={mainLogo} />
                    </div>
                </a >
                <div class="quotes">
                    <h1 class="head_quote">
                        Good food is <br /> The Foundation of <br />
                        <span>GENUINE HAPPINESS</span>
                    </h1>
                </div>
            </div>
        </section>
    );
}