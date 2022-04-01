import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer";
import ServiceCard1 from "components/Cards/Services/ServiceCard1";
import "../assets/styles/Service.css";
import ServiceCard2 from "components/Cards/Services/ServiceCard2";
import ServiceCard3 from "components/Cards/Services/ServiceCard3";
import ServiceCard4 from "components/Cards/Services/ServiceCard4";

const Services = () => {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center bg-blueGray-200 flex h-screen max-h-860-px ">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-12/12 lg:w-12/12 xl:w-12/12 px-4">
            <div className="pt-32 sm:pt-0 text-center">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                ZAGROO - SERVICES
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                ZAGROO has vast experience and best practices knowhow associated
                with the successful deployment of large scale identity solutions
                in real world environments. We try to conceive all of our
                solutions as modular and adaptable as possible as customers
                needs and preconditions differ throughout the world. In
                addition, we provide turnkey solution with industry partners and
                trusted local agents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="service-all mt-5">
        <div className="service ">
          <div className="service-text ">
            <h1 className="service-heading font-bold text-blueGray-800">
              Software Development
            </h1>
            <div>
              <p className="service-details mt-5 text-blueGray-600">
                With a large portfolio of industry leading mobile application
                development services, we know how to translate our solutions
                into the result of your business growth. We work on
                cross-platform, responsive mobile apps & web app. Where others
                struggle, we thrive for the most attractive user interface and
                secure backend.Team ZAGROO provides the cutting-edge mobile app
                development service to diverse industries and clients including
                large scale organizations and startups similar to Uber
                <br /> <br />
                Integrating trendy and smart notification features and secure
                payment gateways, we create a constant digital presence and
                enhance customer engagement for you. Our team has already
                developed customized mobile apps & web app for the Banking,
                E-commerce industries and Augmented Reality or Virtual Reality
                platforms. We also have an amazingly dedicated team to develop
                mobile games.
              </p>
            </div>
          </div>
          <div>
            <ServiceCard2 />
          </div>
        </div>

        <div className="service mt-5">
          <div className="service-text">
            <h1 className="service-heading font-bold text-blueGray-800">
              ML Readiness & Cloud Infrastructure for ML
            </h1>
            <p className="service-details mt-5 text-blueGray-600">
              Do you have infrastructure capable of hyper-parameter
              optimization, model evaluation, automated training and retraining,
              version tracking and governance, or model and drift monitoring? Is
              your data centralized, clean, and ready for ML? A technology
              backbone that provides you with all the capabilities required to
              successfully scale and operate an ML environment. We can develop
              your whole environment or lead specific components.
              <br /> <br /> Do you have the quality and volume of data
              necessary? How do you know you need ML over traditional analytics?
              What is your data strategy? Have your model prototypes shown
              causation or correlation? ‍ Assess how close your business is to
              being able to build reliable ML products and identify concrete
              steps needed to be successful.
            </p>
          </div>
          <div>
            <ServiceCard1 />
          </div>
        </div>

        <div className="service">
          <div className="service-text">
            <h1 className="service-heading font-bold text-blueGray-800">
              Cloud And Cyber Security, AR VR Solution
            </h1>
            <p className="service-details mt-5 text-blueGray-600">
              ZAGROO offers a wide range of cloud support and cyber security
              services to fit your business applications. We are the team of
              certified cyber security experts and proud official partner of
              Amazon Web Services (AWS), Microsoft for Azure cloud support. We
              give you access to our AWS and Microsoft certified professionals
              and tools to guarantee that your infrastructure is secure &
              scalable.
              <br /> <br /> Virtual Reality and Augmented Reality applications
              change the way of your traditional business approaches. We develop
              platform independent AR & VR applications cut for your own
              operating industry. Our solutions are based on realistic business
              analysis to reinvent your company showcase and enhance customer
              experience. To meet your business challenges, we build native
              end-to-end solutions for your market requirements.
            </p>
          </div>
          <div>
            <ServiceCard3 />
          </div>
        </div>

        <div className="service">
          <div className="service-text">
            <h1 className="service-heading font-bold text-blueGray-800">
              Business Intelligence & SharePoint
            </h1>
            <p className="service-details mt-5 text-blueGray-600">
              The term Business Intelligence (BI) refers to technologies,
              applications and practices for the collection, integration,
              analysis, and presentation of business information. This
              information can be used to help companies make better decisions
              and take advantage of new opportunities. BI is about getting the
              right information, to the right people at the right time.
              <br /> <br /> Discover and focus on strategic business management,
              magnify the growth prospects with SharePoint services provided
              exclusively by ZAGROO. Our strategic system integration,
              administration, upgradation and development enhances proactive
              decisiveness of overall business productivity and agility while
              maintaining a simplified technology landscape. ZAGROO offers the
              most robust guarantee for availability in performance, along with
              a steady service response time and expert technical support.
            </p>
          </div>
          <div>
            <ServiceCard4 />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
