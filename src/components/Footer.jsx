import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-card relative border-t border-border mt-12 flex flex-wrap justify-between items-center">
      {/* Left side - copyright */}
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Arpit Kesarwani. All rights reserved.
      </p>

      {/* Right side - social links + back to top */}
      <div className="flex items-center gap-4">
        {/* GitHub */}
        <a
          href="https://github.com/arpitkesarwani"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          GitHub
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/arpit-kesarwani-645576243"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          LinkedIn
        </a>

        {/* Back to top button */}
        <a
          href="#hero"
          aria-label="Back to top"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
