const Policies = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 space-y-12 text-gray-800">
      {/* Privacy Policy */}
      <section className="bg-white rounded-2xl shadow p-6 space-y-4">
        <h3>Privacy Policy</h3>
        <p>
          <strong>Effective Date:</strong> [09/25/2025]
        </p>
        <p>
          Julia Rose Photography (“we,” “our,” or “us”) respects your privacy
          and is committed to protecting the personal information you share with
          us.
        </p>

        <h5 className="font-bold">Information We Collect</h5>
        <p>
          When you use our website’s contact page, we may collect personal
          information such as your name, email address, phone number, and
          details related to your photography needs.
        </p>

        <h5 className="font-bold">How We Use Your Information</h5>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>
            Respond to your inquiries and provide our photography services.
          </li>
          <li>
            Communicate with you regarding bookings, sessions, or updates.
          </li>
          <li>Improve our website and client experience.</li>
        </ul>

        <h5 className="font-bold">Data Protection</h5>
        <p>
          We use reasonable safeguards to protect your personal information.
          However, no online transmission or storage method can be guaranteed
          100% secure.
        </p>

        <h5 className="font-bold">Sharing of Information</h5>
        <p>
          We do not sell or rent your personal information. We may disclose
          information only when required by law or when necessary to protect our
          rights.
        </p>

        <h5 className="font-bold">Your Rights</h5>
        <p>
          You may contact us to request updates or deletion of your personal
          information.
        </p>

        <h5 className="font-bold">Contact Us</h5>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at: <strong>julia@juliarosephotography.com</strong>
        </p>
      </section>

      {/* Terms & Conditions */}
      <section className="bg-white rounded-2xl shadow p-6 space-y-4">
        <h3>Terms & Conditions</h3>
        <p>
          <strong>Effective Date:</strong> [09/25/2025]
        </p>
        <p>
          These Terms and Conditions (“Terms”) apply to all services provided by
          Julia Rose Photography in the State of Florida. By booking services,
          you agree to these Terms.
        </p>

        <h5 className="font-bold">Services</h5>
        <p>
          We provide photography services as described on our website and in our
          communications with you. Details, including pricing, packages, and
          deliverables, will be confirmed in writing before booking.
        </p>

        <h5 className="font-bold">Booking & Payment</h5>
        <p>
          A signed agreement and deposit may be required to confirm your
          booking. Payment terms and deadlines will be specified in your
          contract.
        </p>

        <h5 className="font-bold">Cancellations & Rescheduling</h5>
        <p>
          Cancellations or rescheduling must be communicated in writing.
          Deposits may be non-refundable depending on the timing and agreement.
        </p>

        <h5 className="font-bold">Image Rights</h5>
        <p>
          Julia Rose Photography retains the copyright to all images created
          unless otherwise agreed in writing. Clients receive a license for
          personal use of the delivered images. Commercial use or reproduction
          without permission is prohibited.
        </p>

        <h5 className="font-bold">Liability</h5>
        <p>
          We are not liable for circumstances beyond our control, such as
          weather, illness, equipment failure, or unforeseen events that may
          affect your session.
        </p>

        <h5 className="font-bold">Governing Law</h5>
        <p>These Terms are governed by the laws of the State of Florida.</p>
      </section>
    </div>
  );
};

export default Policies;
