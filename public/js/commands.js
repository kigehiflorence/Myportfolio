var linkedin = "YOUR_LINKEDIN_URL_HERE"; // Please insert your actual LinkedIn URL
var github = "https://github.com/kigehiflorence";
var sudo = "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1";
var email = "mailto:florencekigehi@gmail.com";

let banner = [
  `<div id="banner-section" class="banner">
 Welcome to my portfolio! — Type <span class="command">help</span> for a list of supported commands.
  </div>`,
];

let aboutme = [
  "<br>",
  `<div id="aboutme-section">`,
  `<span class='underline'>Hey, I'm Florence Kigehi! 👋</span>`,
  "<br>",
[cite_start]  `<li>💻 I'm a **Certified, creative, and highly skilled Front-End Developer**[cite: 30].</li>`,
[cite_start]  `<li>✨ Demonstrated expertise in designing and building scalable, user-centric web applications[cite: 30].</li>`,
  `<li>🎓 Currently pursuing B.Sc. [cite_start]Computer Science at Kibabii University (Expected 2026)[cite: 6, 7].</li>`,
[cite_start]  `<li>🧠 Proficient in HTML5, CSS3, JavaScript, TypeScript, and React, with experience in REST APIs, Node.js, and Next.js[cite: 31, 32].</li>`,
[cite_start]  `<li>🚀 Dedicated to delivering clean and efficient digital solutions that elevate usability and optimize performance[cite: 33].</li>`,
  `<li>📂 Use the <span class="command">education</span>, <span class="command">experience</span>, <span class="command">skills</span>, and <span class="command">projects</span> commands to explore my background!</li>`,
  `<li>📫 Contact: <a href="mailto:florencekigehi@gmail.com">florencekigehi@gmail.com</a> | [cite_start]Phone: +254720223385 [cite: 3, 4]</li>`,
  "</div>",
  "<br>",
];

let social = [
  "<br>",
  'github         <a href="' +
    github +
    '" target="_blank">github/kigehiflorence</a>',
  'email          <a href="' +
    email +
    '" target="_blank">florencekigehi@gmail.com</a>',
    [cite_start]'phone          +254720223385 [cite: 3]',
  "<br>",
];

let help = [
  `<br><div id="help-section"><pre class="whitespace-pre-wrap">
<span class="command">aboutme</span>
↳ Displays who I am?
<span class="command">social</span>
↳ Lists social networks.
<span class="command">education</span>
↳ View educational background & certifications.
<span class="command">experience</span>
↳ View work experience & projects.
<span class="command">skills</span>
↳ View technical skills & expertise.
<span class="command">projects</span>
↳ View front-end development projects.
<span class="command">email</span>
↳ To send me an email.
<span class="command">history</span>
↳ View command history.
<span class="command">help</span>
↳ Displays this help message.
<span class="command">sudo</span>
↳ Try it out for yourself.
<span class="command">snake</span>
↳ Run Snake Game.
<span class="command">clear</span>
↳ Clear the terminal.
</pre></div><br>`,
];

let projects = [
  "<br>",
  `<div id="projects-section">`,
  `<span class='underline'>Front-End Development Projects (Work Sample)</span>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
⚛️ React-based Learning App
[cite_start]• Built a React-based learning app with an intuitive, user-friendly interface[cite: 41].

🛒 Mock Shopping Site
[cite_start]• Created a mock shopping site with product listings, cart, and API-powered checkout[cite: 42].

✍️ Interactive Web Forms
[cite_start]• Designed interactive web forms with validation, error handling, and smooth UX[cite: 43].

🌐 General Web Development
[cite_start]• Developed websites and web apps with a focus on usability, responsiveness, and accessibility[cite: 40].
[cite_start]• Applied responsive design for mobile-friendly, high-performance applications[cite: 44].
[cite_start]• Managed version control with GitHub and collaborated with online developer communities[cite: 45].
[cite_start]• Live Project Example: https://689ce7998b0eb27aa73d266a--kigehimo-vie-reccomender.netlify.app/ [cite: 57, 58]
</pre>`,
  "</div>",
  "<br>",
];

let skills = [
  "<br>",
  `<div id="skills-section">`,
  `<span class='underline'>Technical Skills</span>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
[cite_start]Core Languages: HTML5, CSS3, Javascript, Typescript [cite: 17]
[cite_start]Frameworks/Libraries: React, Node.js, Next.js, WordPress [cite: 20, 21]
[cite_start]Styling: SCSS, SAAS, Tailwind CSS, Responsive UI Design [cite: 18, 22]
[cite_start]APIs: REST APIS, RESTful WebServices [cite: 19]
[cite_start]Version Control: Git [cite: 23]
[cite_start]Design Tools: Figma [cite: 24]
[cite_start]Other: Python, PHP, Data Management, MongoDB [cite: 25, 26, 27]
</pre>`,

  `<span class='underline'>Soft Skills</span>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
[cite_start]• Project Management [cite: 47]
[cite_start]• Collaborative Problem Solving [cite: 48]
[cite_start]• Teamwork & Team Leadership [cite: 49, 50]
[cite_start]• Creative Problem Solving [cite: 51]
</pre>`,
  "</div>",
  "<br>",
];

let education = [
  "<br>",
  `<div id="education-section">`,
  `<span class='underline'>Education</span>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
KIBABII UNIVERSITY | [cite_start]Expected 2026 [cite: 6, 7]
• Bachelor of Computer science
[cite_start]• Relevant Coursework: Web Design, Computing Essentials, Internet technologies [cite: 9, 10, 11]

ALX ACADEMY | [cite_start]2025 [cite: 12, 13, 14]
• Professional Foundations Certificate
• Front-end development Certificate
• Pro-Dev Front-end Certificate
</pre>`,
  
  `<span class='underline'>Certifications</span>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
• Responsive web design | Freecodecamp | [cite_start]2024 [cite: 15]
• Professional Foundations Certificate | [cite_start]2025 [cite: 60]
• Front-end Web Development Certificate | [cite_start]2025 [cite: 61]
• Pro-Dev Front-end | [cite_start]2025 [cite: 62]
</pre>`,
  "</div>",
  "<br>",
];

let experience = [
  "<br>",
  `<div id="experience-section">`,
  `<span class='underline'>Web Developer | Applications Developer (Personal Projects) | [cite_start]2023 - Present [cite: 38]</span>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
[cite_start]• Developed websites and web apps focusing on usability, responsiveness, and accessibility[cite: 40].
[cite_start]• Built a React-based learning app with an intuitive, user-friendly interface[cite: 41].
[cite_start]• Created a mock shopping site with product listings, cart, and API-powered checkout[cite: 42].
[cite_start]• Applied responsive design for mobile-friendly, high-performance applications[cite: 44].
[cite_start]• Managed version control with GitHub and collaborated with online developer communities[cite: 45].
</pre>`,

  `<span class='underline'>ICT Intern (County Government of Bungoma) | [cite_start]May - July 2025 [cite: 35, 36]</span>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
[cite_start]• Contributed to the development of official county websites[cite: 37].
[cite_start]• Supported content management, IT operations, and system troubleshooting[cite: 37].
</pre>`,
  "</div>",
  "<br>",
];