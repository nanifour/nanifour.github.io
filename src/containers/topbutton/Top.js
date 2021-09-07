import React from "react";
import "./Top.scss";


export default function Top() {
  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  // When the user scrolls down 30px from the top of the document, show the button
  function scrollFunction() {
    //top button
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30 
    ) {
      document.getElementById("topButton").style.visibility = "visible";
    } else {
      document.getElementById("topButton").style.visibility = "hidden";
    }
    //social media bar
      //hide social bar for smaller screens
      if (
        (document.body.scrollTop > 30 && document.body.clientWidth > 768)||
        (document.documentElement.scrollTop > 30 && document.documentElement.clientWidth > 768)
      ) {
        document.getElementById("socialBar").style.visibility = "visible";
      } else {
        document.getElementById("socialBar").style.visibility = "hidden";
      }
  }
  window.onscroll = function () {
    scrollFunction();
  };
  window.onload = function () {
    scrollFunction();
  }; //To make sure that this button is not visible at starting.
  // When the user clicks on the button, scroll to the top of the document
  // show social bar when scroll
  return (
    <section>
      <section class="social-icons" id="socialBar">
      <a href="https://github.com/nanifour" target="_blank" rel="noopener noreferrer" title="GitHub" class="fab fa-github social-icon" id="profile-link"></a>
      <a href="https://www.linkedin.com/in/darnisha-holloway-013/" target="_blank" rel="noopener noreferrer" title="Linked-in" class="fab fa-linkedin-in social-icon" id="profile-link"></a>
      <a href="mailto: nholloway013@gmail.com" target="_blank" rel="noopener noreferrer" title="Gmail" class="fab fa-google social-icon"></a>
      </section>
    
      <button onClick={TopEvent} id="topButton" title="Go to top">
        <i className="fas fa-hand-point-up" aria-hidden="true"></i>
      </button>
    </section>

  );
}
