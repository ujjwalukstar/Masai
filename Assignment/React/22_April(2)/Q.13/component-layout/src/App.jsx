import React from "react";
import Header from "./components/Header";
import PricingCard from "./components/PricingCard";

const App = () => {
  const plans = [
    {
      planName: "Starter",
      price: "Free",
      features: ["1 lorem ipsum", "Lorem, ipsum dolor.", "Monthly Updates"],
    },
    {
      planName: "Lorem Plus",
      price: "$32.00",
      features: ["1 lorem ipsum", "Lorem, ipsum dolor.", "Monthly Updates"],
    },
    {
      planName: "Lorem Pro",
      price: "$50.00",
      features: ["1 lorem ipsum", "Lorem, ipsum dolor.", "Monthly Updates"],
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8f9fa",
        padding: "30px",
      }}
    >
      <Header
        title="The Right Plan for Your Business"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod in iure vero. Facilis magnam, sed officiis commodi labore odit."
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            planName={plan.planName}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
