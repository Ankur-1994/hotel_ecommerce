import React from "react";
import "./locationDetail.css";

const LocationDetail = () => {
  return (
    <div className="location_container">
      <div className="location_intro">
        <h1 className="location_intro_heading">Hour & Location</h1>
        <address className="location_intro_address">
          111 Udyog Vihar, <br />
          Phase V, Gurgaon, 122 016, India <br />
          (959) 901-5901
        </address>
        <p className="location_intro_text">
          Monday through Wednesday
          <br />
          4:30pm to 11:00 pm
        </p>
        <p style={{ margin: 0 }} className="location_intro_text">
          (Kitchen Open Until 11pm)
        </p>

        <p className="location_intro_text">
          Thursday through Friday
          <br />
          4:30pm to 12:00 am
        </p>
        <p style={{ margin: 0 }} className="location_intro_text">
          (Kitchen Open Until 12am)
        </p>

        <p className="location_intro_text">
          Saturday through Sunday
          <br />
          Enjoy full night
        </p>

        <hr />

        <p className="location_intro_text">
          Bar and Lounge, features two experiences: The first is an a la carte
          menu—an elevated, carefully curated selection of dishes—to complement
          the restaurant’s spotlight on the best champagnes as well as French
          and Californian wines.
        </p>
        <p style={{ margin: 0 }} className="location_intro_text">
          Available by reservation and as a walk in diner.
        </p>

        <p className="location_intro_text">
          The second is an intimate, salon-style tasting menu, “The Counter at
          Bar Crenn," a two-hour dining experience featuring 6 unique courses in
          the restaurant’s lush setting.
        </p>
        <p style={{ margin: 0 }} className="location_intro_text">
          Available by reservation only.
        </p>

        <p className="location_intro_text">
          We accept reservations for parties of 2-5 through our reservation
          platform, Tock.
        </p>

        <p className="location_intro_text">
          For parties of 1 & 6, please call the restaurant directly at{" "}
          <span style={{ color: "rgb(233, 197, 94)" }}>959-901-5901</span> for
          availability.
        </p>

        <p className="location_intro_text">
          As a courtesy to fellow guests, please plan accordingly to arrive on
          time for your reservation. Late arrivals of over 15 minutes will
          result in forfeiture of your reservation.
        </p>

        <hr />

        <p className="location_intro_text">Frequently Asked Questions...</p>
        <p className="location_intro_text">What is your cancellation policy?</p>
        <p className="location_intro_address">
          Table Reservations can be cancelled at any time before the time of the
          reservation should your plans change. However, we request that you do
          so at least 24 hours in advance so staff can plan accordingly.
        </p>

        <p className="location_intro_address">
          Reservations for The Counter at Bar Crenn are final and
          non-refundable. However, the booking is completely transferable.
          Anyone who purchases a ticket from another patron should take care to
          ensure that they have received a formal transfer of the ticket through
          the restaurant's official website. Any tickets purchased on the
          secondary market are at the purchaser's risk. We cannot accept
          responsibility for forgeries or misrepresentations.
        </p>

        <p className="location_intro_text">Do you accept Walk-ins?</p>
        <p className="location_intro_address">
          Yes! Walk-in guests are welcomed on a first-come, first-served basis.
          If we are unable to seat you immediately, we will take your name and
          phone number and can notify you when space becomes available.
        </p>

        <p className="location_intro_text">
          How far in advance can I make a reservation?
        </p>
        <p className="location_intro_address">
          Reservations are released on the first of 1st of the month for the
          second following month. For example: On January 1st, reservations for
          March will become available.
        </p>

        <p className="location_intro_text">What is your parking situation?</p>
        <p className="location_intro_address">
          In addition to street parking, we recommend private Garage, located
          near by. The garage is attended and credit cards are accepted.
          Ride-hailing services are also a great alternative for those who
          prefer not to drive. We do not offer a valet service.
        </p>

        <p className="location_intro_text">What is your dress code?</p>
        <p className="location_intro_address">
          Our suggested dress code is casual-elegant, jacket not required. We do
          however encourage dressing up for this special night.
        </p>

        <p className="location_intro_text">Do you have a corkage policy?</p>
        <p className="location_intro_address">
          Yes, we allow up to two 750ml bottles per table for 1500 per bottle. We
          respectfully ask that wine brought in is not currently featured on our
          wine list. If you have a selection in mind, please email
          barandlaunge@testgmail.com to confirm with our team as to whether or not the
          chosen bottle is eligible for corkage at Bar Crenn.
        </p>

        <hr />
      </div>
    </div>
  );
};

export default LocationDetail;
