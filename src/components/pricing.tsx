import Link from "next/link";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$499",
      description: "Perfect for small businesses just beginning their sustainability journey.",
      features: [
        "Basic biodegradable packaging",
        "Standard size options",
        "Basic branding options",
        "24/7 email support",
        "Monthly order fulfillment"
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Business",
      price: "$999",
      description: "Ideal for growing businesses with regular packaging needs.",
      features: [
        "Premium biodegradable packaging",
        "Custom size options",
        "Full branding customization",
        "24/7 priority support",
        "Weekly order fulfillment",
        "Carbon offset certification"
      ],
      cta: "Get Started",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large businesses with complex requirements.",
      features: [
        "Enterprise-grade eco materials",
        "Fully customized sizing",
        "White-label solutions",
        "Dedicated account manager",
        "On-demand fulfillment",
        "Carbon offset certification",
        "Supply chain integration"
      ],
      cta: "Contact Us",
      highlighted: false,
    },
  ];

  return (
    <div id="pricing" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
            Choose the plan that works best for your business. All plans include access to our sustainable packaging options.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-8 shadow-sm transition-all duration-200 hover:shadow-md ${
                plan.highlighted
                  ? "border-primary/50 bg-accent/50 dark:bg-accent/20"
                  : "border-border bg-card"
              }`}
            >
              <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight text-foreground">
                  {plan.price}
                </span>
                <span className="ml-1 text-xl text-foreground/70">/month</span>
              </div>
              <p className="mt-6 text-foreground/80">{plan.description}</p>
              
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-primary"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10">
                <Link
                  href={plan.name === "Enterprise" ? "/#contact" : "/#signup"}
                  className={`w-full inline-flex justify-center rounded-md px-4 py-3 text-base font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 