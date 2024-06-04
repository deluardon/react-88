

const Nav = ({props}) => {
    console.log(props);
    const {id, name, path} = props;
    // console.log(props.path);
    return (
        <nav className="text-center">
            
            <ul className="">
                <li className="mr-12 text-center ">
                    <a className="" href="path">{name}</a>
                </li>
            </ul>
            {/* <a href="path">{id}</a> */}
        </nav>
    );
};

export default Nav;