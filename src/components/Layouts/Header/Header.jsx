import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/Technical-Skills">Habilidades Técnicas<Sociales></Sociales></NavLink></li>
                    <li><NavLink to="/Social-Skill">Habilidades sociales</NavLink></li>
                    <li><NavLink to="/EnglishLevel">Nivel de inglés</NavLink></li>
                    <li><NavLink to="/Experience">Experiencia</NavLink></li>
                    <li><NavLink to="Studies">Estudios</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}