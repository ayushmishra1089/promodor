import React from "react";

function About() {
  return (
    <div className="w-11/12 mx-auto mt-36 text-white p-5">
      <div>
        <h1 className="text-xl sm:text-2xl font-medium">
          <span className="border-b-4 border-red-400">What</span> is the
          Pomodoro Technique?
        </h1>
        <p className="mt-5 tracking-wide opacity-70 text-lg">
          The Pomodoro Technique was created by Francesco Cirillo as a more
          productive way to work and study. The technique uses a timer to break
          down work into intervals, traditionally 25 minutes in length,
          separated by short breaks. Each interval is known as a
          &ldquo;pomodoro,&rdquo; derived from the Italian word for
          &lsquo;tomato,&rsquo; as Cirillo used a tomato-shaped kitchen timer
          during his university days.
        </p>
      </div>
    </div>
  );
}

export default React.memo(About);
