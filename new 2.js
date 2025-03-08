<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SS Finance - Smart Solutions for a Strong Future</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            text-align: center;
            background: linear-gradient(to right, #1e3c72, #2a5298);
            color: white;
            margin: 0;
            padding: 0;
        }
        header {
            background: #152238;
            color: white;
            padding: 20px;
            font-size: 1.8em;
            font-weight: bold;
        }
        #services {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
            padding: 30px;
        }
        .service {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border-radius: 15px;
            padding: 20px;
            width: 300px;
            cursor: pointer;
            transition: transform 0.3s, box-shadow 0.3s;
            box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(10px);
        }
        .service:hover {
            transform: scale(1.1);
            box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.25);
        }
        footer {
            background: #152238;
            color: white;
            padding: 20px;
            font-size: 1.2em;
        }
        button {
            background: #e67e22;
            color: white;
            border: none;
            padding: 12px 25px;
            font-size: 1.2em;
            cursor: pointer;
            border-radius: 5px;
            transition: background 0.3s;
        }
        button:hover {
            background: #d35400;
        }
    </style>
</head>
<body>
    <header>
        SS Finance - Smart Solutions for a Strong Future
    </header>
    
    <section id="services">
        <div class="service" onclick="openForm('motor')">
            <h3>Motor Insurance</h3>
            <p>Protect your vehicle against accidents, theft, and damages. Secure your ride today.</p>
        </div>
        <div class="service" onclick="openForm('life')">
            <h3>Life Insurance</h3>
            <p>Ensure financial security for your family with life coverage and investment benefits.</p>
        </div>
        <div class="service" onclick="openForm('health')">
            <h3>Health Insurance</h3>
            <p>Cover medical expenses and safeguard your family's health with the best plans.</p>
        </div>
        <div class="service" onclick="openForm('loans')">
            <h3>Loans</h3>
            <p>Get financial assistance for your dreams, whether for home, education, or business.</p>
        </div>
        <div class="service" onclick="openForm('nonmotor')">
            <h3>Non-Motor Insurance</h3>
            <p>Comprehensive coverage for businesses, contractors, and property owners.</p>
        </div>
    </section>
    
    <div id="formPopup" style="display:none;">
        <h2>Enter Your Details</h2>
        <label for="productType">Select Type:</label>
        <select id="productType"></select>
        <input type="text" id="name" placeholder="Your Name">
        <input type="text" id="number" placeholder="Your Phone Number">
        <input type="text" id="location" placeholder="Your Location">
        <button onclick="submitForm()">Submit</button>
    </div>
    
    <footer>
        <p>SS Finance is committed to providing fast, reliable, and hassle-free financial and insurance solutions. With strong tie-ups with top companies like Policy Bazaar, Tata AIG, Paisa Bazaar, and leading banks in India, we ensure seamless service and expert guidance. Our dedicated team ensures pre-sales and post-sales support for all clients.</p>
        <p>All Rights Reserved &copy; 2025 SS Finance</p>
    </footer>
    
    <script>
        function openForm(service) {
            document.getElementById("formPopup").style.display = "block";
            let productType = document.getElementById("productType");
            productType.innerHTML = ""; 
            if (service === "motor") {
                productType.innerHTML = "<option value='two wheeler'>Two Wheeler</option><option value='private car'>Private Car</option><option value='taxi'>Taxi</option><option value='commercial vehicle'>Commercial Vehicle</option>";
            } else if (service === "life") {
                productType.innerHTML = "<option value='term'>Term</option><option value='whole'>Whole</option><option value='endowment'>Endowment</option><option value='ulip'>Unit-Linked Insurance Plans (ULIPs)</option>";
            } else if (service === "health") {
                productType.innerHTML = "<option value='individual'>Individual Health Insurance</option><option value='family'>Family Health Insurance</option><option value='senior'>Senior Citizen Health Insurance</option><option value='group'>Group Health Insurance</option>";
            } else if (service === "loans") {
                productType.innerHTML = "<option value='secured'>Secured Loan</option><option value='home'>Home Loan</option><option value='lap'>Loan Against Property (LAP)</option><option value='vehicle'>Vehicle Loan</option>";
            } else if (service === "nonmotor") {
                productType.innerHTML = "<option value='car'>Contractors All Risk (CAR)</option><option value='cpm'>Contractors Plant and Machinery (CPM)</option><option value='ear'>Erection All Risk (EAR)</option><option value='wc'>Workmen Compensation (WC)</option><option value='fire'>Fire</option><option value='dwelling'>Dwelling</option>";
            }
        }
        function submitForm() {
            alert("Your query has been noted. Our manager will contact you shortly.");
            // Code to send data to Google Sheets will be implemented here.
        }
    </script>
</body>
</html>
