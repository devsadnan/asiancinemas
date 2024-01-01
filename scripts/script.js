
// Function inside form Calculation to update cost of tickets selected for persons
// Function to update the total cost based on the number of tickets
function updateTotal() {
    const numTicketsInput = document.getElementById("numTickets");
    const totalCostInput = document.getElementById("totalCost");

    // Assuming each ticket costs $10 that can be increased to other amounts from here.
    const ticketPrice = 10;

    // Calculate total cost
    const numTickets = parseInt(numTicketsInput.value) || 0;
    const totalCost = numTickets * ticketPrice;

    // Display the total cost
    totalCostInput.value = `$${totalCost}`;
}
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll events and trigger the animations
function handleScroll() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const slideUpElements = document.querySelectorAll('.slide-up');
    const slideLeftElements = document.querySelectorAll('.slide-left');

    fadeElements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('show');
        }
    });

    slideUpElements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('show');
        }
    });

    slideLeftElements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('show');
        }
    });
}

// Add a scroll event listener to the document
document.addEventListener('scroll', handleScroll);

// Trigger the handleScroll function on page load
handleScroll();





document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("#slider .slider-container img");
    const circlesContainer = document.querySelector("#slider .slider-circles");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });

        updateCircles(index);
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    function updateCircles(index) {
        circlesContainer.innerHTML = "";
        for (let i = 0; i < images.length; i++) {
            const circle = document.createElement("div");
            circle.classList.add("slider-circle");
            circle.classList.toggle("active", i === index);
            circle.onclick = () => showImage(i);
            circlesContainer.appendChild(circle);
        }
    }

    setInterval(nextImage, 5000); // Chaneging image every 5 seconds 

    document.querySelector("#slider .slider-navigation button:first-child").onclick = prevImage;
    document.querySelector("#slider .slider-navigation button:last-child").onclick = nextImage;

    updateCircles(currentIndex);
    showMovies('2023-04-10');
});


// Script for the movie section
function watchTrailer(link) {
    // logic to open the trailer link
    console.log(`Watch Trailer: ${link}`);
}

function buyTickets(link) {
    // logic to open the ticket purchase link
    console.log(`Buy Tickets: ${link}`);
}



// Scripts for the Modal Section to open a youtube video on the same page

function openTrailer(trailerLink) {
    const trailerModal = document.getElementById("trailer-modal");
    const trailerIframe = document.getElementById("trailer-iframe");

    // Set the YouTube video URL
    const youtubeVideoId = getYouTubeVideoId(trailerLink);
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;

    trailerIframe.src = youtubeEmbedUrl;
    trailerModal.style.display = "block";
}

function closeTrailerModal() {
    const trailerModal = document.getElementById("trailer-modal");
    const trailerIframe = document.getElementById("trailer-iframe");

    // Stop the video when closing the modal
    trailerIframe.src = "";

    trailerModal.style.display = "none";
}

function getYouTubeVideoId(url) {
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);

    return match ? match[1] : null;
}


// Scripts for the Show time

const showtimesData = [
    { date: "2023-04-10", movie: "Thanks Giving", screen: "Screen 1", availability: "green", color: "#e67e22", showtimes: ["7:00 PM"] },
    { date: "2023-04-10", movie: "Napoleon", screen: "Screen 2", showtimes: ["11:15 AM", "3:45 PM", "8:30 PM"] },
    { date: "2023-04-11", movie: "Silent Night", screen: "Screen 3", availability: "orange", color: "#e67e22",showtimes: ["12:30 PM"] },
    { date: "2023-04-12", movie: "Thanks Giving", screen: "Screen 1", showtimes: ["10:00 AM", "2:30 PM", "7:00 PM"] },
    { date: "2023-04-10", movie: "Napoleon", screen: "Screen 2",  availability: "green", color: "#e67e22", showtimes: [ "8:30 PM"] },
    { date: "2023-04-11", movie: "3 idots", screen: "Screen 3", availability: "red", color: "#e74c3c",showtimes: ["12:30 PM", "5:00 PM", "9:15 PM"] },
    { date: "2023-04-12", movie: "Maujaan Hi Maujaan", screen: "Screen 1", showtimes: ["10:00 AM", "2:30 PM", "7:00 PM"] },
    { date: "2023-04-12", movie: "The Hunger Games", screen: "Screen 4", showtimes: ["11:15 AM", "3:45 PM", "8:30 PM"] },
    { date: "2023-04-12", movie: "The Marvels", screen: "Screen 4", showtimes: ["12:30 PM", "5:00 PM", "9:15 PM"] },
    { date: "2023-04-10", movie: "3 idots", screen: "Screen 3", availability: "red", color: "#e74c3c",showtimes: ["12:30 PM", "5:00 PM"] },
    { date: "2023-04-10", movie: "Maujaadddn Hi Maujaan", screen: "Screen 1", showtimes: ["10:00 AM", "2:30 PM", "7:00 PM"] },
    { date: "2023-04-10", movie: "The Hunger Games", screen: "Screen 4", showtimes: ["11:15 AM", "3:45 PM", "8:30 PM"] },
    { date: "2023-04-10", movie: "The Marvels", screen: "Screen 4", availability: "orange", color: "#e67e22",showtimes: ["12:30 PM", "5:00 PM", "9:15 PM"] },
    
];


// puting some sample data for demonstration purposes
   
function showMovies(selectedDate) {
    
        // Filter showtimes based on the selected date
        const filteredShowtimes = showtimesData.filter(entry => entry.date === selectedDate);

        // Update the showtimes table
        const showtimesBody = document.getElementById("showtimes-body");
        showtimesBody.innerHTML = "";

        filteredShowtimes.forEach(entry => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${entry.movie}</td>
                <td>${entry.screen}</td>
                <td>
                    ${entry.showtimes.map(time => `<div class="showtime" style="background-color: ${entry.color};">${time}</div>`).join("")}
                </td>
            `;
            showtimesBody.appendChild(row);
        });

        // Update the active state of the date
        const dateButtons = document.querySelectorAll(".date");
        dateButtons.forEach(button => {
            button.classList.remove("active");
        });
       // const selectedButton = document.querySelector(`.date[data-date="${selectedDate}"]`);
       // selectedButton.classList.add("active");
    }

    // Filter showtimes based on the selected date
    //const filteredShowtimes = showtimesData.filter(entry => entry.date === selectedDate);

    // Update the showtimes table
    const showtimesBody = document.getElementById("showtimes-body");
   // showtimesBody.innerHTML = "";

    filteredShowtimes.forEach(entry => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${entry.movie}</td>
            <td>${entry.screen}</td>
            <td>
                ${entry.showtimes.map(time => `<div class="showtime">${time}</div>`).join("")}
            </td>
        `;
        showtimesBody.appendChild(row);
    });

    
    

    
//   Code for the buy ticket modal
function openTicketModal(movieName) {
    document.getElementById("selectedMovie").value = movieName;
    document.getElementById("ticketModal").style.display = "block";
    document.getElementById("selectedMovie1").value = movieName;
    document.getElementById("selectedMovie1").style.display = "block";
    document.getElementById("selectedMovie").value = movieName;

    // Dynamically populate seat options
    const seatSelect = document.getElementById("seatNumber");
    seatSelect.innerHTML = "";
    for (let i = 1; i <= 30; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.text = `Seat ${i}`;
      seatSelect.appendChild(option);
    }
  }
  
  // Function to close the modal
  function closeTicketModal() {
    document.getElementById("ticketModal").style.display = "none";
  }
  
  // Function to reserve the selected seat
  function reserveTicket() {
    // For simplicity, we'll just close the modal in this example
    if(validateForm()){
        alert("Ticket Reserved!\nDetails:\nName: " + document.getElementById("name").value +
        "\nContact Number: " + document.getElementById("contactNumber").value +
        "\nDate: " + document.getElementById("date").value +
        "\nTime: " + document.getElementById("time").value +
        "\nEmail: " + document.getElementById("email").value +
        "\nSeat: " + document.getElementById("seatNumber").value);
  
  closeTicketModal();
    }else{
        alert("Fill the Complete Form Fields");
    }
    
  }
  
  // Function to cancel the reservation
  function cancelReservation() {
    // closing the modal
    closeTicketModal();
  }


  function validateForm() {
    var name = document.getElementById("name").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var email = document.getElementById("email").value;

    // validation for required fields
    if (name === "" || contactNumber === "" || date === "" || time === "" || email === "") {
    //   alert("All fields are required");
      return false;
    }


    // Validate email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email address");
      return false;
    }


    // If all validations pass, the form is submitted
    return true;
  }


// Mouse Scroll Animation
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll events and trigger the animations

function handleScroll() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const slideUpElements = document.querySelectorAll('.slide-up');
    const slideLeftElements = document.querySelectorAll('.slide-left');

    fadeElements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('show');
        } else {
            element.classList.remove('show'); // Reset animation if not in viewport
        }
    });

    slideUpElements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('show');
        } else {
            element.classList.remove('show'); // Reset animation if not in viewport
        }
    });

    slideLeftElements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('show');
        } else {
            element.classList.remove('show'); // Reset animation if not in viewport
        }
    });
}

// Add a scroll event listener to the document
document.addEventListener('scroll', handleScroll);

// Trigger the handleScroll function on page load
handleScroll();