import { CarListing } from "../../entities/CarListing.js";

// Function to load user accounts dynamically
export async function loadAccounts() {
	try {
		const table = document.getElementById("listing_table");

		// fetch all accounts
		const list = await new CarListing().getListing();

		// clear table body
		table.innerHTML = "";

		// iterate through all listings fetched
		list.forEach(listing => {
			// add row
			let row = document.createElement("tr");

			// add listing name
			let clName = document.createElement("td");
			clName.textContent = listing.listingName;
			row.appendChild(clName);

			table.appendChild(row);

			// add car listing ID
			let clID = document.createElement("td");
			clID.textContent = listing.carListingID;
			row.appendChild(clID);

			// add car model
			let clModel = document.createElement("td");
			clModel.textContent = listing.carModel;
			row.appendChild(clModel);

			// add car price
			let clprice = document.createElement("td");
			clprice.textContent = listing.price;
			row.appendChild(clprice);

			// Add Edit button
			let editCell = document.createElement("td");
			let editButton = document.createElement("button");
			editButton.textContent = "Edit";
			editButton.onclick = () => {
				// Redirect to editAcc.html with the user ID in the query string
				window.location.href = `editAcc.html?userId=${account.id}`;
			};
			editCell.appendChild(editButton);
			row.appendChild(editCell);

			// Add Suspend button
			const suspendCell = document.createElement("td");
			const suspendButton = document.createElement("button");
			suspendButton.textContent = "Suspend";
			suspendButton.onclick = () => {
				// Call the suspendAccount function with the user ID
				if (confirm(`Are you sure you want to suspend ${account.name}?`)) {
					suspendAccount(account.id);
				}
			};
			suspendCell.appendChild(suspendButton);
			row.appendChild(suspendCell);

			// Append the row to the table body
			userTableBody.appendChild(row);
		});

		console.log("Accounts loaded successfully!");
	} catch (error) {
		console.error("Error loading accounts:", error);
		alert("Failed to load user accounts.");
	}
}