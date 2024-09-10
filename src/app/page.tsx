"use client";

import React, { useState } from "react";

const ResumeBuilder = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [education, setEducation] = useState([{ school: "", degree: "", year: "" }]);
  const [experience, setExperience] = useState([{ company: "", role: "", years: "" }]);
  const [skills, setSkills] = useState([""]);
  const [previewMode, setPreviewMode] = useState(false);

  const addEducation = () => setEducation([...education, { school: "", degree: "", year: "" }]);
  const addExperience = () => setExperience([...experience, { company: "", role: "", years: "" }]);
  const addSkill = () => setSkills([...skills, ""]);

  const deleteEducation = (index: number) => {
    const newEdu = education.filter((_, eduIndex) => eduIndex !== index);
    setEducation(newEdu);
  };

  const deleteExperience = (index: number) => {
    const newExp = experience.filter((_, expIndex) => expIndex !== index);
    setExperience(newExp);
  };

  const deleteSkill = (index: number) => {
    const newSkills = skills.filter((_, skillIndex) => skillIndex !== index);
    setSkills(newSkills);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPreviewMode(true);
  };

  const sendResume = () => {
    const resumeContent = `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Address: ${address}
      
      Education:
      ${education.map(edu => `${edu.school} - ${edu.degree} (${edu.year})`).join("\n")}
      
      Experience:
      ${experience.map(exp => `${exp.company} - ${exp.role} (${exp.years})`).join("\n")}
      
      Skills:
      ${skills.join(", ")}
    `;

    const mailtoLink = `mailto:syedshahmeer360@gmail.com?subject=New Resume Submission&body=${encodeURIComponent(resumeContent)}`;
    window.location.href = mailtoLink;
  };

  const renderInputFields = () => (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Education Fields */}
      <h2 className="text-xl font-bold text-sky-500">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="relative grid grid-cols-1 gap-6 sm:grid-cols-3">
          <input
            type="text"
            placeholder="School"
            value={edu.school}
            onChange={(e) => {
              const newEdu = [...education];
              newEdu[index].school = e.target.value;
              setEducation(newEdu);
            }}
            className="border border-gray-300 rounded-lg p-3 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => {
              const newEdu = [...education];
              newEdu[index].degree = e.target.value;
              setEducation(newEdu);
            }}
            className="border border-gray-300 rounded-lg p-3 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Year"
            value={edu.year}
            onChange={(e) => {
              const newEdu = [...education];
              newEdu[index].year = e.target.value;
              setEducation(newEdu);
            }}
            className="border border-gray-300 rounded-lg p-3 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="button"
            onClick={() => deleteEducation(index)}
            className="absolute top-0 right-0 text-red-500 hover:text-red-700 transition duration-200"
          >
            Delete
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addEducation}
        className="bg-indigo-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-600 transition duration-200"
      >
        Add Education
      </button>

      {/* Experience Fields */}
      <h2 className="text-xl font-bold text-sky-500">Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="relative grid grid-cols-1 gap-6 sm:grid-cols-3">
          <input
            type="text"
            placeholder="Company"
            value={exp.company}
            onChange={(e) => {
              const newExp = [...experience];
              newExp[index].company = e.target.value;
              setExperience(newExp);
            }}
            className="border border-gray-300 rounded-lg p-3 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Role"
            value={exp.role}
            onChange={(e) => {
              const newExp = [...experience];
              newExp[index].role = e.target.value;
              setExperience(newExp);
            }}
            className="border border-gray-300 rounded-lg p-3 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Years"
            value={exp.years}
            onChange={(e) => {
              const newExp = [...experience];
              newExp[index].years = e.target.value;
              setExperience(newExp);
            }}
            className="border border-gray-300 rounded-lg p-3 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="button"
            onClick={() => deleteExperience(index)}
            className="absolute top-0 right-0 text-red-500 hover:text-red-700 transition duration-200"
          >
            Delete
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addExperience}
        className="bg-indigo-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-600 transition duration-200"
      >
        Add Experience
      </button>

      {/* Skills Fields */}
      <h2 className="text-xl font-bold text-sky-500">Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="relative grid grid-cols-1 gap-6">
          <input
            type="text"
            placeholder="Skill"
            value={skill}
            onChange={(e) => {
              const newSkills = [...skills];
              newSkills[index] = e.target.value;
              setSkills(newSkills);
            }}
            className="border border-gray-300 rounded-lg p-3 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="button"
            onClick={() => deleteSkill(index)}
            className="absolute top-0 right-0 text-red-500 hover:text-red-700 transition duration-200"
          >
            Delete
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addSkill}
        className="bg-indigo-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-600 transition duration-200"
      >
        Add Skill
      </button>

      <button
        type="submit"
        className="bg-green-500 text-white px-8 py-3 mt-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-105"
      >
        Preview Resume
      </button>
    </form>
  );

  const renderResume = () => (
    <div className="max-w-4xl mx-auto bg-black bg-opacity-75 p-8 rounded-lg shadow-2xl transition duration-500">
      <h1 className="text-4xl font-extrabold text-center mb-4 text-white">Shahmeer's Resume Builder</h1>
      <p className="text-center text-gray-300 mb-6">
        {email} | {phone} | {address}
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-sky-500 mb-4">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <p className="font-semibold text-white">{edu.school}</p>
            <p className="text-gray-300">
              {edu.degree} ({edu.year})
            </p>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-sky-500 mb-4">Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <p className="font-semibold text-white">{exp.company}</p>
            <p className="text-gray-300">
              {exp.role} ({exp.years})
            </p>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-sky-500 mb-4">Skills</h2>
        {skills.map((skill, index) => (
          <div key={index} className="mb-2">
            <p className="text-white">{skill}</p>
          </div>
        ))}
      </section>

      <button
        onClick={() => setPreviewMode(false)}
        className="bg-gray-500 text-white px-8 py-3 mt-4 rounded-full shadow-lg hover:bg-gray-600 transition duration-300 transform hover:scale-105"
      >
        Back to Form
      </button>

      <button
        onClick={sendResume}
        className="bg-blue-500 text-white px-8 py-3 mt-4 ml-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
      >
        Send to My Email
      </button>
    </div>
  );

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-5xl font-bold text-sky-500 text-center mb-8">Shahmeer's Resume Builder</h1>
      {previewMode ? renderResume() : renderInputFields()}
    </div>
  );
};

export default ResumeBuilder;
