import { Link } from "react-router-dom";

export const Book = ({ Id, ImageUrl}) => {
    return (
        <section className="book" key={`book--${Id}`}>
            <Link to={`/books/${Id}`}>
                <img src={ImageUrl} className="bookImg" />
            </Link>
        </section>
    );
};

