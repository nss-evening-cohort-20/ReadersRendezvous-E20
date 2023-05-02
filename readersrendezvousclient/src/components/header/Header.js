export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a href="#">
                        {" "}
                        <img
                            src={require(`../images/Header2_Logo.jpg`)}
                            alt=""
                            style={{ width: "250px" }}
                            className="navbar-brand"
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
