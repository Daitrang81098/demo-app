import React, {useState} from "react";

const Index = () => {
    const [number, setNumber] = useState(0)

    return (
        <React.Fragment>
            <div className="container">
                <h2>
                    { number }
                </h2>

                <button onClick={() => setNumber(number + 1)}>Add</button>
            </div>

        </React.Fragment>
    )
}

export default Index;
