export const Headder = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div
                    className="container-fluid"
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <a href="#">
                        {" "}
                        <img
                            src={require(`../images/Headder2_Logo.jpg`)}
                            alt=""
                            style={{ width: "300px" }}
                        />
                    </a>

                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                    <hr />
                </div>
            </nav>
        </>
    );
};
