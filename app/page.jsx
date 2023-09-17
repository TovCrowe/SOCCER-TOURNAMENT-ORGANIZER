export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="text-5xl font-bold text-green-800">Futbolito</h1>
      <p>This is a simple app to help you manage your soccer tournament.</p>

      <section className="mt-8">
        <h2 className="text-3xl font-bold text-green-800">What is Futbolito?</h2>
        <p>
          At Futbolito, we're passionate about soccer and tournament management.
          Our goal is to provide you with a user-friendly platform to streamline
          the organization of your soccer tournaments, so you can focus on what
          you love—playing and enjoying the game.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-green-800">Key Features</h2>
        <ul>
          <li>Effortless tournament setup and management</li>
          <li>Real-time score and schedule updates</li>
          <li>Customization options to match your tournament's style</li>
          <li>Connect with other soccer enthusiasts in our community</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-green-800">Get Started with Our Trial Web App</h2>
        <p>
          Ready to simplify your tournament management? Access Futbolito now and
          start your soccer tournament journey with ease. Please note that this
          is a trial version with a database of fictitious teams.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-green-800">Contact Us</h2>
        <p>
          We value your feedback and are here to assist you. If you have any
          questions, suggestions, or need support, please reach out to our
          dedicated support team. Your success is our priority!
        </p>
      </section>
    </main>
  );
}
