import React, { useState } from "react";

//importing css code
import ".././assets/css/style.css";

//importing css vendor variables
import ".././assets/vendor/bootstrap/css/bootstrap.min.css";
import ".././assets/vendor/bootstrap-icons/bootstrap-icons.css";
import ".././assets/vendor/boxicons/css/boxicons.min.css";
import ".././assets/vendor/glightbox/css/glightbox.min.css";
import ".././assets/vendor/remixicon/remixicon.css";
import ".././assets/vendor/swiper/swiper-bundle.min.css";

function HomeScreen() {
  const [links, setLinks] = useState(Array(15).fill("")); // Array to store links for each category

  // Function to handle copying link to clipboard
  const copyToClipboard = (index) => {
    const linkToCopy = links[index];
    navigator.clipboard.writeText(linkToCopy)
      .then(() => {
        console.log("Link copied to clipboard:", linkToCopy);
        // You can add a toast or notification to indicate successful copy
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
      });
  };

  return (
    <div>
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 d-flex flex-column align-items-center justify-content-center">
                  {links.map((link, index) => (
                    <div key={index} className="mb-3">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          value={link}
                          disabled
                        />
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={() => copyToClipboard(index)}
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default HomeScreen;
