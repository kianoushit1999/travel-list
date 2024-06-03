
function Form() {

    function submitHandler(e) {
        e.preventDefault();
        console.log(e.target[1].value);
    }

    return <div className='add-form'>
        <h3>What do you need for your trip ?</h3>
        <form onSubmit={submitHandler}>
            <select>
                {Array.from({length:20}, (_, index) => index + 1).map((val, index, array) => {
                    return <option key={val}>{val}</option>
                })}
            </select>

            <input type="text" placeholder="Item ..." />
            <button>Add</button>
        </form>
    </div>
}

export default Form;