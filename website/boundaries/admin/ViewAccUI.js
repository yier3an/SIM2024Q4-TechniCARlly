import { UserAccount } from "../../entities/userAccount.js";

// Function to load user accounts dynamically
export async function loadAccounts() {
    try {
        const userTableBody = document.querySelector("#userTable tbody");

        // Fetch all accounts
        const accounts = await UserAccount.getAllAccounts();

        // Clear table body
        userTableBody.innerHTML = "";

        // Loop through accounts and populate the table
        accounts.forEach(account => {
            const row = document.createElement("tr");

            // Add user type
            const userTypeCell = document.createElement("td");
            userTypeCell.textContent = account.role;
            row.appendChild(userTypeCell);

            // Add name
            const nameCell = document.createElement("td");
            nameCell.textContent = account.name;
            row.appendChild(nameCell);

            // Add email
            const emailCell = document.createElement("td");
            emailCell.textContent = account.email;
            row.appendChild(emailCell);

            // Add Edit button
            const editCell = document.createElement("td");
            const editButton = document.createElement("button");
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
