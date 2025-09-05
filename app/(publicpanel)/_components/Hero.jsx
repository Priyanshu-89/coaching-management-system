"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const HomeHero = () => {
  return (
    <section className="w-full flex justify-center items-center py-16 px-6 bg-gradient-to-r from-slate-600 via-slate-400 to-slate-500">
      <Card className="w-full max-w-4xl shadow-xl rounded-2xl border border-gray-200 bg-white p-6 md:p-12">
        <CardContent className="space-y-6 text-center">
          {/* Title */}
          <CardTitle>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Unlock Your{" "}
              <span className="text-blue-600">Potential</span> <br />
              with the Best Coaching
            </h1>
          </CardTitle>

          {/* Description */}
          <CardDescription>
            <p className="mt-4 text-lg text-gray-600 md:w-4/5 mx-auto">
              Join our coaching programs designed to help you excel in
              academics, competitive exams, and career growth with expert
              faculty and personalized guidance.
            </p>
          </CardDescription>

          {/* CTA Buttons */}
          <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link href="/courses">
              <Button className="px-6 py-3 text-lg font-medium rounded-xl shadow-md hover:scale-105 transition">
                Explore Courses
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="px-6 py-3 text-lg font-medium rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:scale-105 transition"
              >
                Contact
              </Button>
            </Link>
          </CardFooter>
        </CardContent>
      </Card>
    </section>
  );
};

export default HomeHero;
