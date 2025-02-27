import { Code, BookOpen, Users, Zap, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Code className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Level Up Learning</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Features
              </Link>
              <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Courses
              </Link>
              <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Testimonials
              </Link>
              <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Pricing
              </Link>
            </nav>
            <div className="flex items-center">
              <Link
                href="/login"
                className="hidden md:inline-flex px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
              >
                Log in
              </Link>
              <Link
                href="/sign-up"
                className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Learn to code with confidence
              </h1>
              <p className="text-lg md:text-xl text-indigo-100 dark:text-indigo-200">
                Interactive lessons, real-world projects, and a supportive community to help you master programming skills.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 dark:text-indigo-900 bg-white dark:bg-gray-100 hover:bg-indigo-50 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Get started
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white dark:border-gray-300 text-base font-medium rounded-md text-white dark:text-gray-300 hover:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  View demo
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative rounded-lg bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm p-6 shadow-xl">
                <pre className="text-indigo-100 dark:text-indigo-200 overflow-x-auto">
                  <code>{`function learnToCode() {
  const skills = [];
  const dedication = true;
  
  while (dedication) {
    const newSkill = practice();
    skills.push(newSkill);
    
    if (skills.length >= 100) {
      return "You're a developer!";
    }
  }
}

learnToCode();`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Why choose CodeLearn?</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our platform is designed to make learning to code accessible, engaging, and effective.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 dark:bg-indigo-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Interactive Lessons</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Learn by doing with our hands-on coding exercises and interactive tutorials that make complex concepts easy to understand.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 dark:bg-indigo-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Join a thriving community of learners and mentors who are ready to help you overcome challenges and grow.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 dark:bg-indigo-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Real-World Projects</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Build a portfolio of projects that demonstrate your skills to potential employers and solidify your learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Popular Courses</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Start your coding journey with our most popular learning paths.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-800 flex items-center justify-center">
                <Code className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">Beginner</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">8 weeks</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Web Development Fundamentals</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Learn HTML, CSS, and JavaScript to build responsive websites from scratch.
                </p>
                <Link href="/courses/web-fundamentals" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Course 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-700 dark:to-green-800 flex items-center justify-center">
                <Code className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">Intermediate</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">10 weeks</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">React Development</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Master React.js and build modern, interactive web applications.</p>
                <Link href="/courses/react-development" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Course 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-700 dark:to-purple-800 flex items-center justify-center">
                <Code className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">Advanced</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">12 weeks</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Full-Stack Development</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Build complete applications with Node.js, Express, and MongoDB.</p>
                <Link href="/courses/fullstack-development" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">What Our Students Say</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from people who have transformed their careers with CodeLearn.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">JD</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Jane Doe</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Software Engineer at Tech Co.</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "CodeLearn helped me transition from a non-technical role to a full-time developer in just 6 months. The structured curriculum and supportive community made all the difference."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">MS</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Mike Smith</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Frontend Developer at StartUp Inc.</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "The project-based approach to learning on CodeLearn gave me practical skills that I use every day in my job. It's not just theory - you build real things that employers value."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">AJ</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Alex Johnson</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Full-Stack Developer at Big Corp</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "I tried several coding platforms before finding CodeLearn. The difference is the community and mentorship - having experienced developers review my code took my skills to the next level."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-indigo-600 dark:bg-indigo-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to start your coding journey?</h2>
            <p className="text-xl text-indigo-100 dark:text-indigo-200 mb-8">
              Join thousands of students who have transformed their careers with CodeLearn.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 dark:text-indigo-900 bg-white dark:bg-gray-100 hover:bg-indigo-50 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Get started for free
              </Link>
              <Link
                href="/curriculum"
                className="inline-flex items-center justify-center px-6 py-3 border border-white dark:border-gray-300 text-base font-medium rounded-md text-white dark:text-gray-300 hover:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                View curriculum
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Code className="h-8 w-8 text-indigo-400 dark:text-indigo-300" />
                <span className="ml-2 text-xl font-bold">CodeLearn</span>
              </div>
              <p className="text-gray-400 dark:text-gray-300">Making coding education accessible to everyone, everywhere.</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors">
                    Mentorship
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 text-center text-gray-400 dark:text-gray-300 text-sm">
            <p>© {new Date().getFullYear()} CodeLearn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}