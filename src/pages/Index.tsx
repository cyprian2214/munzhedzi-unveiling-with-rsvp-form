import UnveilingPoster from "@/components/UnveilingPoster";

const Index = () => {
  return (
    <main>
      <UnveilingPoster />
      {/* RSVP FORM */}
      <section className="mt-10 p-6 bg-white rounded-lg shadow-md max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">RSVP Form</h2>
        <form name="rsvp" data-netlify="true" className="space-y-4" action="/success" netlify>
          <input type="hidden" name="form-name" value="rsvp" />
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" name="name" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"></textarea>
          </div>
          <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">Send</button>
        </form>
      </section>
    </main>
  );
};

export default Index;