import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold text-green-800 mb-4">Welcome to Futbolito</h1>
      <p className="text-lg text-center mb-6">
        Futbolito is a simple app to help you manage your soccer tournament with ease.
      </p>

      <section className="w-full max-w-3xl p-6 rounded-md shadow-md bg-white">
        <h2 className="text-3xl font-bold text-green-800 mb-4">What is Futbolito?</h2>
        <p className="text-gray-600">
          Futbolito is your all-in-one solution for organizing and tracking soccer tournaments. 
          Whether you're managing a local league or just a friendly match, our app has you covered.
        </p>
      </section>

      <section className="w-full max-w-3xl p-6 mt-8 rounded-md shadow-md bg-white">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Key Features</h2>
        <ul className="list-disc pl-6">
          <li className="text-gray-600">Effortless tournament setup and management</li>
          <li className="text-gray-600">Customization options to match your tournament's style</li>
          <li className="text-gray-600">Connect with other soccer enthusiasts in our community</li>
        </ul>
      </section>

      <section className="w-full max-w-3xl p-6 mt-8 rounded-md shadow-md bg-white">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Get Started with Our Trial Web App</h2>
        <p className="text-gray-600">
          Ready to simplify your tournament management? Access Futbolito now and
          start your soccer tournament journey with ease. Please note that this
          is a trial version with a database of fictitious teams and more features will be add.
        </p>

      </section>

      <footer className="mt-8 w-full max-w-3xl">
        <section className="mb-6">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            We value your feedback and are here to assist you. If you have any
            questions, suggestions, or need support, please reach out to our
            dedicated support team. Your success is our priority!
          </p>
        </section>
      </footer>
    </main>
  );
}
