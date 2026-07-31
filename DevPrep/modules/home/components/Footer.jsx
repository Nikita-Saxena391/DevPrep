import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              Dev<span className="text-indigo-600">Prep</span>
            </h2>

            <p className="mt-4 text-muted-foreground">
              Master coding interviews with structured
              preparation paths.
            </p>
          </div>


          {/* Platform */}
          <div>
            <h3 className="font-semibold mb-4">
              Platform
            </h3>

            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link href="/problems" className="hover:text-indigo-600">
                  Problems
                </Link>
              </li>

              <li>
                <Link href="/roadmap" className="hover:text-indigo-600">
                  Roadmaps
                </Link>
              </li>

             
            </ul>
          </div>


          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">
              Resources
            </h3>

            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link href="/notes" className="hover:text-indigo-600">
                  Notes
                </Link>
              </li>

              <li>
                <Link href="/interviews" className="hover:text-indigo-600">
                  Interview Prep
                </Link>
              </li>

              
            </ul>
          </div>


          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">
              Connect
            </h3>

            <div className="flex gap-4">

              <Link
                href="https://github.com/Nikita-Saxena391"
                className="p-2 rounded-lg border hover:bg-muted"
              >
                <Github size={20}/>
              </Link>

              <Link
                href="https://www.linkedin.com/in/nikita-saxena-928672320/"
                className="p-2 rounded-lg border hover:bg-muted"
              >
                <Linkedin size={20}/>
              </Link>

              <Link
                href="#"
                className="p-2 rounded-lg border hover:bg-muted"
              >
                <Twitter size={20}/>
              </Link>

            </div>
          </div>

        </div>


        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-muted-foreground">

          <p>
            © {new Date().getFullYear()} DevPrep. All rights reserved.
          </p>

          <div className="flex gap-5 mt-3 md:mt-0">
            <Link href="/privacy" className="hover:text-indigo-600">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-indigo-600">
              Terms
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}