const Footer = () => {
  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6 bg-primary text-white">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Contact Us</h2>
          <p>Optimal Hospice of Michigan, Inc.</p>
          <p>33250 Warren Rd, Suite 15</p>
          <p>Westland, MI 48185</p>
        </div>
        <div className="space-y-2">
          <p>
            <strong>Phone:</strong> <a href="tel:+1-734-237-6440">(734) 237-6440</a>
          </p>
          <p>
            <strong>Fax:</strong> (734) 237-6445
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:office@optimalhospicemi.com">office@optimalhospicemi.com</a>
          </p>
          <p className="mt-4">Available 24 hours a day, 7 days a week</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
