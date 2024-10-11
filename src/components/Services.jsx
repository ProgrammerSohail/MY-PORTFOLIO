import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const ServicesComponent = () => {
  const chartRef = useRef(null);
  const [activeService, setActiveService] = useState(null);

  const services = [
    { name: "eCommerce Websites", demand: 85, icon: "🛒" },
    { name: "Blockchain Solutions", demand: 70, icon: "🔗" },
    { name: "Business Websites", demand: 90, icon: "💼" },
    { name: "Web Applications", demand: 80, icon: "🖥️" },
    { name: "Mobile-Responsive Design", demand: 95, icon: "📱" },
  ];

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      const chart = new Chart(ctx, {
        type: "polarArea",
        data: {
          labels: services.map((service) => service.name),
          datasets: [
            {
              data: services.map((service) => service.demand),
              backgroundColor: [
                "rgba(250, 204, 20, 0.7)",
                "rgba(235, 189, 18, 0.7)",
                "rgba(220, 174, 16, 0.7)",
                "rgba(205, 159, 14, 0.7)",
                "rgba(190, 144, 12, 0.7)",
              ],
              borderColor: "rgba(204, 141, 4, 1)",
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            r: {
              ticks: {
                display: false,
              },
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
              },
            },
          },
        },
      });

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return (
    <div className="min-h-screen  text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          Innovative Web Solutions
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full max-w-lg mx-auto">
            <canvas ref={chartRef}></canvas>
          </div>
          <div>
            <p className="text-lg mb-8 leading-relaxed">
              Elevate your digital presence with our cutting-edge web
              development services. From sleek eCommerce platforms to robust
              blockchain solutions, we craft tailored experiences that drive
              your business forward in the digital age.
            </p>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li
                  key={index}
                  className={`bg-gray-800 rounded-lg p-4 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    activeService === index ? "ring-2 ring-yellow-400" : ""
                  }`}
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl mr-4">{service.icon}</span>
                    <div className="flex-grow">
                      <h3 className="font-semibold">{service.name}</h3>
                      <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                        <div
                          className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2.5 rounded-full"
                          style={{ width: `${service.demand}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-yellow-400 font-bold ml-4">
                      {service.demand}%
                    </span>
                  </div>
                  {activeService === index && (
                    <p className="mt-2 text-sm text-gray-400 animate-fade-in">
                      Our {service.name.toLowerCase()} are tailored to meet your
                      unique business needs, ensuring optimal performance and
                      user engagement.
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
