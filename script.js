//your JS code here. If required.
const output = document.getElementById("output");

function createPromise() {
	const startTime = Date.now();
	const delay = Math.floor(Math.random() * 2000) + 1000;

	function createPromise(){
	return new Promise((resolve) =>{
		 const time = Math.floor(Math.random() * 3) + 1;
		setTimeout(() => {
		
			resolve(time);
		},time * 1000);
	});
}


Promise.all([
    createPromise(),
    createPromise(),
    createPromise()
]).then((results) => {
        // Remove the Loading... row
        output.innerHTML = "";

        // Display each promise's result
        results.forEach((time, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>Promise ${index + 1}</td>
                <td>${time.toFixed(3)}</td>
            `;

            output.appendChild(row);
        });

        // Display total execution time
        const totalTime = Math.max(...results);
		const totalRow = document.createElement("tr");

        totalRow.innerHTML = `
            <td><b>Total</b></td>
            <td><b>${totalTime.toFixed(3)}</b></td>
        `;

        output.appendChild(totalRow);
    });
