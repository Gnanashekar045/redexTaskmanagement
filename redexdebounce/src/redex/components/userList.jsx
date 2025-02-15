import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers } from "../userSlice";

const userList = () => {
    const usedispatch = usedispatch();
    const users = useSelector((state) => state.users.users)
    const loading = useSelector((state) => state.users.loading)
    const query = useSelector((state) => state.users.query);

    useEffect(()=> {
        if (query) {
            dispatch(fetchUsers(query));
        }
    }, [dispatch, query]);

    return (
        <div>
            {loading ? (<p>Loading</p>):(<ul>{users.map((user) => (<li key={user.id}>{user.name}</li>))}</ul>)}
        </div>
    );

};