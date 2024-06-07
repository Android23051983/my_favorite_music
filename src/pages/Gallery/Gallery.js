import film1 from "../../images/1920x.webp"
import film2 from "../../images/1920x (Star Trak).webp";
import film3 from "../../images/1920x (The Magicians).webp";
import work4 from "../../images/1920x (The Expanse).webp";
// import work5 from "../../images/work5.jpg";
// import work6 from "../../images/work6.jpg";
import CardsCollection from "./components/CardsCollection";

const data = [
    {name: "Сотня ", text: "фантастика, драма, детектив", image: film1},
    {name: "Звёздный путь: Дискавери", text: "фантастика, боевик, драма, ", image: film2},
    {name: "Волшебники", text: "фэнтези, драма, детектив", image: film3},
    {name: "Пространство", text: "фантастика, драма, детектив", image: work4},
    // {name: "Card #5", text: "Some description for card #5", image: work5},
    // {name: "Card #6", text: "Some description for card #6", image: work6}
]

const Gallery = () => {
    return (
        <div className="container my-2">
            <CardsCollection data={data} />
        </div>
    )
}

export default Gallery;