import { CarListing } from "../../entities/carListing.js";

console.log('Image file:', image);
console.log('Form data:', carName, model, price, description);

// Handle form submission
export async function handleSubmit(event) {
    event.preventDefault();

    // Get form values
    const carName = document.getElementById('carName').value;
    const model = document.getElementById('model').value;
    const price = parseFloat(document.getElementById('price').value);
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').files[0]; // For file upload

    console.log('Form submitted!', carName, model, price, description, image);

    // Assuming the agent name is the logged-in user's name (you'll need to get this dynamically)
    const agent = "some_agent_name";  // Replace with actual agent name from session or user context

    // Create a new CarListing instance
    const newListing = new CarListing(agent, "", "", "", model, description, carName, price, 0, 0);

    try {
        const success = await newListing.createListing(image);

        if (success) {
            alert('Car listing created successfully');
            window.location.href = 'agentHome.html';  // Redirect to home page after successful creation
        } else {
            alert('Error creating car listing');
        }
    } catch (error) {
        console.error("Error creating car listing:", error);
        alert('Error creating car listing. Please try again.');
    }
}
