import React from 'react';
import Navbar from "./Navbar";
import tec from "../assets/tecture.png";
import Foot from "./Footer";

function Sub() {
  return (
    <>
    <Navbar />
    <div className="bg-cover min-h-screen pt-1 " style={{ backgroundImage: `url(${tec})` }}>
      
      <div className="ml-[7%] mt-6 mr-[7%] text-lg leading-relaxed ">
        <h1 className="font-bold text-2xl mt-35">Submission Guidelines</h1>
        <div className="h-[4px] w-[78px] bg-blue-500 mt-2 mb-5"></div>

        <h2 className="font-semibold text-xl mt-4">Title of the Article</h2>
        <p>[Enter the title of your article here.]</p>

        <h2 className="font-semibold text-xl mt-4">Authors</h2>
        <p>[First Author Name], [Affiliation]</p>
        <p>[Second Author Name], [Affiliation]</p>
        <p>[Additional Authors and Affiliations as necessary]</p>

        <h2 className="font-semibold text-xl mt-4">Corresponding Author</h2>
        <p>[Corresponding Author Name]</p>
        <p>[Affiliation]</p>
        <p>[Email Address]</p>
        <p>[Phone Number]</p>

        <h2 className="font-semibold text-xl mt-4">Abstract</h2>
        <p>Provide a concise summary of the study. The abstract should be structured into the following sections:</p>
        <ul className="list-disc ml-5">
          <li><b>Background:</b> Provide the rationale for the study and its objectives.</li>
          <li><b>Methods:</b> Briefly describe the study design, participants, and methodologies used.</li>
          <li><b>Results:</b> Summarize the key findings.</li>
          <li><b>Conclusions:</b> State the main conclusions and their implications.</li>
        </ul>

        <h2 className="font-semibold text-xl mt-4">Keywords</h2>
        <p>[List 4-6 keywords that represent the article content.]</p>

        <h2 className="font-semibold text-xl mt-4">Introduction</h2>
        <p>[Provide a detailed background of the study, including relevant literature review, the problem being addressed, and the study's objectives.]</p>

        <h2 className="font-semibold text-xl mt-4">Methods and Materials</h2>
        <p>[Describe the study design, settings, participants, inclusion/exclusion criteria, materials used, and statistical methods. The section should be detailed enough for another researcher to replicate the study.]</p>

        <h2 className="font-semibold text-xl mt-4">Results</h2>
        <p>[Present the study findings with appropriate data analysis. This section may include tables, figures, and other visuals as necessary.]</p>

        <h2 className="font-semibold text-xl mt-4">Discussion</h2>
        <p>[Interpret the results in the context of existing literature. Discuss the implications, limitations, and possible avenues for future research.]</p>

        <h2 className="font-semibold text-xl mt-4">Conclusion</h2>
        <p>[Summarize the main findings and their relevance to medical science or clinical practice. Include any recommendations or potential applications of the findings.]</p>

        <h2 className="font-semibold text-xl mt-4">References</h2>
        <p>List all references cited in your article in the appropriate format (e.g., APA, AMA).</p>
        <p>Refer to: <a href="https://www.cureusjournals.com/journal/computer-science/guide#!/author-instructions/references" 
          className="text-blue-500 underline">Reference Format</a></p>

        <h2 className="font-semibold text-xl mt-4">Figures and Tables</h2>
        <ul className="list-disc ml-5">
          <li>Figures should be 600dpi with clear labels on both axes.</li>
          <li>The first row of tables should be the header.</li>
        </ul>

        <h2 className="font-semibold text-xl mt-4">Conflict of Interest Statement</h2>
        <p>[Declare any potential conflicts of interest or state "The authors have no conflict of interest to disclose."]</p>

        <h2 className="font-semibold text-xl mt-4">Acknowledgments</h2>
        <p>[Optional: Acknowledge any individuals or organizations that contributed to the study but are not listed as authors.]</p>

        <p className="mt-5 text-sm italic">Note: Text format should be Times New Roman, size 12.</p>
      </div>
      <Foot />
    </div>
    </>
  );
}

export default Sub;
