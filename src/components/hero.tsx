import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-background py-16 md:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary blur-3xl"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl md:leading-tight">
              Sustainable packaging
              <span className="block text-primary">for businesses that care</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-foreground/70">
              We help eco-conscious businesses reduce their environmental impact with innovative, 
              biodegradable packaging solutions. Join the sustainable packaging revolution today.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/#pricing"
                className="rounded-md bg-primary px-6 py-3 text-center text-lg font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              >
                Get Started
              </Link>
              <Link
                href="/#features"
                className="rounded-md bg-muted px-6 py-3 text-center text-lg font-medium text-foreground/80 hover:text-foreground hover:bg-muted/70 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 shadow-xl">
              <div className="relative h-full w-full">
                {/* Placeholder for image - in production you'd use a real image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="h-40 w-40 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 10V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 4H20L18 9H6L4 4Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 