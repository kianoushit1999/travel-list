
import { useState } from "react";

function Form({updateItems}) {

    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    

    function submitHandler(e) {
        e.preventDefault();

        if (!description) return

        updateItems(description, quantity);
    }

    return <div className='add-form'>
        <h3>What do you need for your trip ?</h3>
        <form onSubmit={submitHandler}>
            <select value={quantity} onChange={(e)=> {
                setQuantity(Number(e.target.value));
            }}>
                {Array.from({length:20}, (_, index) => index + 1).map((val, index, array) => {
                    return <option key={val}>{val}</option>
                })}
            </select>

            <input type="text" placeholder="Item ..." value={description} onChange={(e) => {
                setDescription(e.target.value);
            }} />
            <button>Add</button>
        </form>
    </div>
}

export default Form;