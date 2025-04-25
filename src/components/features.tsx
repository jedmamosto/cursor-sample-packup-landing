export function Features() {
  const features = [
    {
      title: "Biodegradable Materials",
      description:
        "Our packaging solutions are made from 100% biodegradable materials that decompose naturally, leaving no harmful residues.",
      icon: (
        <svg
          className="h-8 w-8 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.53 14.961C4.53 17.055 6.345 18.75 8.58 18.75H13.42C15.655 18.75 17.47 17.055 17.47 14.961C17.47 12.867 15.655 11.172 13.42 11.172H8.58C6.345 11.172 4.53 9.477 4.53 7.383C4.53 5.289 6.345 3.594 8.58 3.594H13.42C15.655 3.594 17.47 5.289 17.47 7.383"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 21V2.25"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Reduced Carbon Footprint",
      description:
        "Our manufacturing processes are designed to minimize carbon emissions, using renewable energy sources and optimized supply chains.",
      icon: (
        <svg
          className="h-8 w-8 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.66 9.657L5.25 8.25L5.25 13.5C5.25 16.814 8.051 19.5 11.5 19.5C14.949 19.5 17.75 16.814 17.75 13.5L17.75 8.25L13.166 9.733"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.25 8.25C5.25 5.765 8.051 3.75 11.5 3.75C14.949 3.75 17.75 5.765 17.75 8.25"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.5 10.5V16.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.934 12.75H8.934"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Customizable Solutions",
      description:
        "We offer tailored packaging solutions for your specific products, ensuring both sustainability and perfect presentation for your brand.",
      icon: (
        <svg
          className="h-8 w-8 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 21.25H10C7.382 21.25 5.25 19.118 5.25 16.5V7.5C5.25 4.882 7.382 2.75 10 2.75H14C16.618 2.75 18.75 4.882 18.75 7.5V16.5C18.75 19.118 16.618 21.25 14 21.25Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.25 6.75H14.75"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.25 10.75H14.75"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 21.25V17.75"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div id="features" className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Sustainable Solutions for Every Need
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
            Our innovative packaging technologies help businesses reduce
            environmental impact without compromising on quality or design.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-2xl bg-card p-8 shadow-sm duration-200 hover:shadow-lg transition-shadow"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-foreground/70">{feature.description}</p>
              <div className="mt-4 h-1.5 w-12 rounded-full bg-primary/30 transition-all duration-300 group-hover:w-16 group-hover:bg-primary"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 