//your JS code here. If required.
const output = document.getElementById("output");

function createPromise() {
	const startTime = Date.now();
	const delay = Math.floor(Math.random() * 2000) + 1000;

	return new Promise((resolve) =>{
		setTimeout(() => {
			const timeTaken = (Date.now() - startTime)/1000;
			resolve(timeTaken);
		},delay);
	});
}

const promise1 = createPromise();
const promise2 =  createPromise();
const promise3 =  createPromise();

const totalStartTime = Date.now();

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        const totalTime = (Date.now() - totalStartTime) / 1000;

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
        const totalRow = document.createElement("tr");

        totalRow.innerHTML = `
            <td><strong>Total</strong></td>
            <td><strong>${totalTime.toFixed(3)}</strong></td>
        `;

        output.appendChild(totalRow);
    });
