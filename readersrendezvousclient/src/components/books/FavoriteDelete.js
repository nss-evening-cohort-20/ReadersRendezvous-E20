import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const FavoriteDelete = ({ Id, Title,Clicked }) => {
    console.log(Id, Title);
    const navigate = useNavigate();
    /* ------------------------delete-------------------------- */

    return (
        <>
        <button
        type="button"
        className="btn btn-danger"
        // onClick={(click) => {
        //     window.confirm(
        //         `Are you sure you want to delete ${Title}?`
        //     ) &&
        //         fetch(
        //             `https://localhost:7229/api/FavoriteBook/DeleteById/${Id}`,
        //             {
        //                 method: "DELETE",
        //             }
        //         );
        // }}
                onClick={(click) => {
            
                    Clicked();
        }}
                
    >
        DELETE
    </button>
        </>
    );
};
