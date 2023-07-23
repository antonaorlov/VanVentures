import React from "react";
import { SiChainguard } from "react-icons/si";
import myImage from "../assets/images/reviews-graph.png";

export default function Reviews() {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text:
        "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1"
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text:
        "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2"
    },
    {
      rating: 5,
      name: "Jimmy",
      date: "Feb 21, 2023",
      text:
        "VanLife Perfection! Our journey with the Road Roamer was an absolute delight. The van's layout was spacious, and the beds were surprisingly comfortable. The hosts' attention to detail was evident throughout, making the van feel like a true home on wheels.",
      id: "3"
    },
    {
      rating: 5,
      name: "Jessica",
      date: "April 4, 2021",
      text:
        "VanVenture Bliss! We rented the Free Spirit for a family vacation, and it was pure bliss on wheels. The van was thoughtfully equipped with all necessities, making it a breeze to hit the road and explore. It comfortably accommodated our entire family, and we enjoyed cozy evenings under the starry skies. The Free Spirit, along with the fantastic hosts, made our vacation one for the books. Don't hesitate to book this van for your next adventure!",
      id: "4"
    }
  ];

  return (
    <section className="host-reviews">
      <div className="top-text">
        <h2>Your reviews</h2>
        <p>
          Last <span>30 days</span>
        </p>
      </div>
      <img className="graph" src={myImage} alt="Review graph" />
      <h3>Reviews (2)</h3>
      {reviewsData.map((review) => (
        <div key={review.id}>
          <div className="review">
            {[...Array(review.rating)].map((_, i) => (
              <SiChainguard className="review-star" key={i} />
            ))}
            <div className="info">
              <p className="name">{review.name}</p>
              <p className="date">{review.date}</p>
            </div>
            <p>{review.text}</p>
          </div>
          <hr />
        </div>
      ))}
    </section>
  );
}
