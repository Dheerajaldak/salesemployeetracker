import React from 'react';

const CaseStudies = ({ caseStudies, handleCaseStudySubmit, newCaseStudy, handleInputChange }) => {
  return (
    <section>
      <h2>Case Studies</h2>
      <form onSubmit={handleCaseStudySubmit}>
        <input
          type="text"
          name="label"
          placeholder="Label"
          value={newCaseStudy.label}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newCaseStudy.title}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newCaseStudy.image}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newCaseStudy.description}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Case Study</button>
      </form>

      <div>
        {caseStudies.map((caseStudy) => (
          <div key={caseStudy.id}>
            <h3>{caseStudy.title}</h3>
            <img src={caseStudy.image} alt={caseStudy.title} width="200" />
            <p>{caseStudy.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
