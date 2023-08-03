import React, { useState, useEffect } from 'react'
import { databases } from '../appwrite/appwriteConfig'

function Todos({ refresh }) {
    const [todos, setTodos] = useState();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        fetchTodos();
        setLoader(false);
    }, []);

    useEffect(() => {
        if (refresh) {
            setLoader(true);
            fetchTodos();
            setLoader(false);
        }
    }, [refresh]);

    const fetchTodos = () => {
        const getTodos = databases.listDocuments("64cbe2f0598e919688f7");

        getTodos.then(
            function (response) {
                setTodos(response.documents);
            },
            function (error) {
                console.log(error);
            }
        );
    }

    const deleteTodo = (id) => {
        const promise = databases.deleteDocument("64cbe2f0598e919688f7", id);
        promise.then(
            function (response) {
                fetchTodos();
            },
            function (error) {
                console.log(error);
            }
        );
        // window.location.reload();
    }


    return (
        <div className="max-w-7xl mx-auto">
            <p className="text-xl font-bold mb-2">Todo List</p>
            {loader ? (
                <p>Loading ...</p>
            ) : (
                <div>

                    {todos && todos.map(item => (
                        <div key={item.$id} >
                            <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
                                <div>
                                    <p>{item.todo}</p>
                                </div>
                                <div>
                                    <span
                                        className="text-red-400 cursor-pointer"
                                        onClick={() => {
                                            deleteTodo(item.$id)
                                        }}
                                    >
                                        Delete
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            )}
        </div>
    )
}

export default Todos