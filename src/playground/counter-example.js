let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
}

const minusOne = () => {
    count--;
    renderCounterApp();
}

const reset = () => {
    count = 0;
    renderCounterApp();
}

const appRoot = document.querySelector('#app');

const renderCounterApp = () => {
    const tamplateTwo = (
        <div>
            <h1>Conunt: {count}</h1>
            <button onClick = {addOne}>+1</button> 
            <button onClick = {minusOne}>-1</button>
            <button onClick = {reset}>Reset</button>
        </div>
    );

    ReactDOM.render(tamplateTwo, appRoot);
}

renderCounterApp();