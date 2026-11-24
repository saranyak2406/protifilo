export const personalInfo = {
  name: "K. Saranya Sree",
  initials: "KS",
  fullName: "Kunchanapalli VSSL Saranya Sree",
  role: "Full Stack Python Developer",
  tagline: "Building Modern Web Applications & Intelligent Digital Solutions.",
  intro: "I'm a passionate Full Stack Python Developer with experience in building responsive web applications, AI-powered solutions and database-driven systems. I enjoy transforming ideas into practical digital products using modern technologies.",
  aboutText: "I'm a Full Stack Python Developer with a background in Computer Science and Engineering. I enjoy developing user-friendly web applications, building backend systems, working with databases and exploring AI-based technologies. I focus on writing clean code and creating meaningful digital experiences.",
  rotatingTitles: [
    "Full Stack Python Developer",
    "React Developer",
    "Python Developer",
    "Web Application Developer",
  ],
  education: "B.Tech – Computer Science and Engineering",
  college: "The Apollo University",
  graduationYear: "2026",
  cgpa: "8.62 / 10",
  location: "Andhra Pradesh, India",
  email: "saranyak368@gmail.com",
  phone: "+91 96761 11389",
  github: "https://github.com/saranyak2406",
  linkedin: "https://linkedin.com/in/saranya-sree",
  resumePdf: "/Saranya_Sree_Resume.pdf",
  resumeDocx: "/Saranya_Sree_Resume.docx",
  status: "Available for Full-Time Roles & High-Impact Projects",
};

export const aboutCards = [
  {
    title: "Degree",
    value: "B.Tech in CSE",
    detail: "The Apollo University (2022 – 2026)",
    icon: "GraduationCap",
  },
  {
    title: "Graduation",
    value: "2026",
    detail: "CGPA: 8.62 / 10",
    icon: "Calendar",
  },
  {
    title: "Role",
    value: "Full Stack Developer",
    detail: "Python, FastAPI & React.js",
    icon: "Code2",
  },
  {
    title: "Experience",
    value: "1 Year Verified",
    detail: "Lomaa IT Solutions & GrapleSoft",
    icon: "Briefcase",
  },
];

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Building responsive, modern, user-friendly client interfaces with clean component architectures.",
    skills: [
      { name: "HTML", tag: "Markup & Semantics", icon: "Layout" },
      { name: "CSS", tag: "Styling & Responsive Design", icon: "Layers" },
      { name: "JavaScript", tag: "ES6+ Core Programming", icon: "FileCode" },
      { name: "React.js", tag: "Single Page Applications", icon: "Code2" },
      { name: "Tailwind CSS", tag: "Utility-First Design", icon: "Palette" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Architecting high-performance asynchronous server services, data pipelines, and RESTful APIs.",
    skills: [
      { name: "Python", tag: "Primary Language", icon: "Terminal" },
      { name: "FastAPI", tag: "High-Speed Async APIs", icon: "Cpu" },
      { name: "Node.js", tag: "Runtime Environment", icon: "Server" },
      { name: "Express.js", tag: "Web Application Framework", icon: "Server" },
      { name: "REST APIs", tag: "API Architecture & Contracts", icon: "Network" },
    ],
  },
  {
    id: "database",
    title: "Database",
    description: "Designing reliable relational schemas, data persistence layers, and optimized queries.",
    skills: [
      { name: "PostgreSQL", tag: "Relational Database", icon: "Database" },
      { name: "MySQL", tag: "Relational Database", icon: "Database" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description: "Modern developer workflow tools, version control, and API testing utilities.",
    skills: [
      { name: "Git", tag: "Version Control", icon: "GitBranch" },
      { name: "GitHub", tag: "Collaboration & Code Hosting", icon: "Github" },
      { name: "VS Code", tag: "Primary IDE", icon: "Laptop" },
      { name: "Postman", tag: "API Testing & Documentation", icon: "Send" },
    ],
  },
  {
    id: "testing",
    title: "Testing",
    description: "Automated end-to-end and integration testing to ensure software reliability.",
    skills: [
      { name: "Playwright", tag: "Automated E2E Testing", icon: "CheckCircle2" },
    ],
  },
];

export const experienceData = [
  {
    company: "Lomaa IT Solutions",
    role: "Full Stack Python Developer / Intern",
    period: "2024 – Present (1 Year)",
    location: "Andhra Pradesh, India",
    description: "Full-stack development experience covering end-to-end web applications, RESTful API design, frontend-backend integration, and automated testing.",
    responsibilities: [
      "Web application development using Python, React.js, and Node.js for client and internal software platforms.",
      "Frontend and backend integration ensuring seamless data flow between React user interfaces and Python APIs.",
      "API development: Designed and deployed secure, modular REST APIs with clean JSON schemas.",
      "Database integration: Modeled relational databases in MySQL and PostgreSQL, improving query response time.",
      "Responsive design: Built mobile-first, cross-device accessible user interfaces using Tailwind CSS.",
      "Testing and debugging: Performed automated API assertions with Postman and browser testing with Playwright.",
    ],
    tech: ["Python", "FastAPI", "React.js", "Node.js", "MySQL", "Tailwind CSS", "Playwright", "REST APIs", "Git"],
  },
  {
    company: "GrapleSoft",
    role: "Full Stack Project Developer",
    period: "Project Engagement",
    location: "Andhra Pradesh, India",
    description: "Spearheaded the development of the Smart QR Equipment Management project to modernize enterprise physical asset tracking.",
    responsibilities: [
      "Engineered the Smart QR Equipment Management system linking unique QR codes to equipment records.",
      "Implemented quick-access scanning workflows that reduced manual asset lookup time and logging errors.",
      "Structured relational database tables for asset movement history, custodian tracking, and maintenance logs.",
      "Delivered a responsive web interface accessible on both handheld warehouse devices and desktop browsers.",
    ],
    tech: ["Python", "JavaScript", "MySQL", "QR Matrix", "REST APIs", "Tailwind CSS"],
  },
];

export const projectsData = [
  {
    id: "ai-travel-planner",
    title: "AI Travel Planner",
    company: "Lomaa IT Solutions",
    category: "AI & Travel",
    tagline: "AI-Powered Personalized Travel Itinerary Application",
    shortDescription: "AI-powered application designed to assist users in planning personalized trips and travel itineraries with budget estimates.",
    overview: "An intelligent travel planning platform that analyzes traveler preferences, trip length, and budget constraints to synthesize day-by-day itineraries and destination recommendations.",
    problemStatement: "Travelers spend hours navigating fragmented travel guides, estimating budgets across different cities, and manually coordinating daily schedules.",
    solution: "An automated travel intelligence engine that generates complete, pacing-optimized daily itineraries with realistic expense breakdowns in seconds.",
    features: [
      "AI-driven custom day-by-day travel itinerary generation",
      "Dynamic budget estimation covering transport, lodging, food, and sightseeing",
      "Interactive destination discovery and activity recommendations",
      "Responsive schedule dashboard with exportable trip summaries",
    ],
    technologies: ["Python", "FastAPI", "React.js", "Tailwind CSS", "REST APIs"],
    myContribution: "Engineered the FastAPI backend endpoints for itinerary generation and built the interactive React itinerary view.",
    liveDemoUrl: null, // Editable placeholder
    githubUrl: "https://github.com/saranyak2406",
    gradient: "from-purple-500/10 via-pink-500/5 to-transparent",
    codeSnippet: `@router.post("/api/v1/travel/itinerary")
async def generate_itinerary(request: TripRequest):
    plan = await ai_travel_engine.create_schedule(
        destination=request.destination,
        days=request.duration,
        budget_tier=request.budget,
        interests=request.interests
    )
    return {"status": "success", "itinerary": plan}`,
  },
  {
    id: "ai-skin-disease-detection",
    title: "AI Skin Disease Detection",
    company: "Lomaa IT Solutions",
    category: "AI & Computer Vision",
    tagline: "AI & Computer Vision-Based Dermatological Lesion Analysis",
    shortDescription: "AI and computer vision-based application for skin image analysis and lesion category prediction to support early screening.",
    overview: "A healthcare diagnostic support application that analyzes clinical skin lesion images using computer vision and deep learning to predict disease categories and present confidence scores.",
    problemStatement: "Early-stage dermatological symptoms often go unexamined due to limited clinic availability and lack of accessible initial screening tools.",
    solution: "A computer vision screening pipeline that processes uploaded skin lesion imagery, detects probable diagnostic categories, and advises timely clinical consultations.",
    features: [
      "Image upload canvas with instant artifact reduction and preprocessing",
      "Multi-class dermatological disease probability classification",
      "Comprehensive screening report generation with safety notices",
      "Privacy-first architecture ensuring confidential image handling",
    ],
    technologies: ["Python", "OpenCV", "FastAPI", "React.js", "Tailwind CSS"],
    myContribution: "Developed the image upload and preprocessing API in Python and integrated prediction score visualization on the frontend.",
    liveDemoUrl: null,
    githubUrl: "https://github.com/saranyak2406",
    gradient: "from-pink-500/10 via-rose-500/5 to-transparent",
    codeSnippet: `def analyze_skin_lesion(image_bytes: bytes) -> dict:
    preprocessed = preprocess_dermatological_image(image_bytes)
    prediction = vision_classifier(preprocessed)
    confidence = float(np.max(prediction))
    return {
        "predicted_category": decode_class(prediction),
        "confidence_score": round(confidence * 100, 2)
    }`,
  },
  {
    id: "ai-timetable-generator",
    title: "AI Timetable Generator",
    company: "Lomaa IT Solutions",
    category: "AI & Scheduling",
    tagline: "Automated Academic Scheduling & Constraint-Solving System",
    shortDescription: "An application that automates timetable creation and scheduling, eliminating classroom and faculty conflicts.",
    overview: "An automated scheduling platform that models complex educational constraints—classroom availability, instructor workloads, course tracks, and lab hours—to compile clash-free timetables in seconds.",
    problemStatement: "Manual academic timetable scheduling requires days of trial-and-error, frequently leading to room overlap and faculty scheduling collisions.",
    solution: "A constraint-satisfaction scheduling engine that systematically assigns course slots, classrooms, and instructors with zero collisions.",
    features: [
      "Collision-free automated timetable computation",
      "Faculty workload balancing and classroom capacity constraints",
      "Multi-department and laboratory period scheduling",
      "Exportable schedules in clean printable and tabular formats",
    ],
    technologies: ["Python", "FastAPI", "React.js", "MySQL", "Tailwind CSS"],
    myContribution: "Implemented the constraint-solving assignment algorithm in Python and designed the interactive timetable grid view.",
    liveDemoUrl: null,
    githubUrl: "https://github.com/saranyak2406",
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    codeSnippet: `class TimetableSolver:
    def solve(self, batches, faculty, classrooms):
        model = ConstraintModel()
        model.add_no_clash_rules(batches, faculty, classrooms)
        solution = model.solve_optimal()
        return self.format_schedule_matrix(solution)`,
  },
  {
    id: "mca-cricket",
    title: "MCA Cricket",
    company: "Lomaa IT Solutions",
    category: "Web Application",
    tagline: "Cricket League Management & Live Scoreboard Web Platform",
    shortDescription: "A cricket-related web application providing tournament match tracking, live scores, and comprehensive player analytics.",
    overview: "A dynamic web application designed for cricket tournaments to handle team registrations, live ball-by-ball score updates, tournament points tables, and player performance stats.",
    problemStatement: "Amateur and institutional sports tournaments lack automated platforms for live scoring, resulting in delayed statistics and manual points calculations.",
    solution: "A responsive web application that allows scorers to log deliveries in real time, automatically computing strike rates, economy figures, and tournament standings.",
    features: [
      "Live ball-by-ball score logging with instant net run rate calculation",
      "Player career analytics: batting averages, strike rates, wickets taken",
      "Automated points table updates after match completion",
      "Mobile-friendly viewing interface for spectators and participants",
    ],
    technologies: ["React.js", "Python", "Node.js", "MySQL", "Tailwind CSS"],
    myContribution: "Engineered responsive score cards and player statistic dashboards in React, paired with a MySQL statistics database.",
    liveDemoUrl: null,
    githubUrl: "https://github.com/saranyak2406",
    gradient: "from-purple-500/10 via-indigo-500/5 to-transparent",
    codeSnippet: `export function calculateLiveNRR(teamRuns, teamOvers, oppRuns, oppOvers) {
    const runRateFor = teamRuns / teamOvers;
    const runRateAgainst = oppRuns / oppOvers;
    return (runRateFor - runRateAgainst).toFixed(3);
}`,
  },
  {
    id: "smart-qr-equipment-management",
    title: "Smart QR Equipment Management",
    company: "GrapleSoft",
    category: "QR & Asset Management",
    tagline: "QR-Based Asset Tracking & Inventory Visibility System",
    shortDescription: "QR-based equipment management system for tracking and managing assets, reducing audit times and paperwork.",
    overview: "An enterprise equipment management concept that links unique encrypted QR codes to asset records, providing instant lookup, custodian history, and maintenance tracking.",
    problemStatement: "Traditional asset tracking depends on manual paper logs, causing audit discrepancies, misplaced equipment, and slow verification.",
    solution: "A dynamic QR management system where scanning an equipment tag on any mobile device immediately reveals its full history, status, and assigned custodian.",
    features: [
      "Unique encrypted QR code generation and quick scanner lookup",
      "Complete equipment maintenance, check-in, and check-out logs",
      "Reduces manual audit time by over 70% and eliminates paperwork",
      "Role-based verification for warehouse custodians and operators",
    ],
    technologies: ["Python", "JavaScript", "MySQL", "Tailwind CSS", "REST APIs"],
    myContribution: "Engineered the asset lookup backend, QR generation routines, and responsive asset status dashboard.",
    liveDemoUrl: null,
    githubUrl: "https://github.com/saranyak2406",
    gradient: "from-teal-500/10 via-emerald-500/5 to-transparent",
    codeSnippet: `async function lookupAssetByQR(qrSignature) {
    const asset = await db.query(
        "SELECT * FROM assets WHERE qr_code = ? LIMIT 1",
        [qrSignature]
    );
    return asset;
}`,
  },
  {
    id: "we-care-for-you",
    title: "We Care For You",
    company: "Healthcare Platform",
    category: "AI & Full Stack",
    tagline: "Family-First Elder Care Coordination & Assistance Platform",
    shortDescription: "Family-first elder care coordination platform designed to help families coordinate daily care and stay connected.",
    overview: "A family-first elder care coordination platform that connects elderly relatives with family caregivers, automated health check-ins, medication reminders, and emergency assistance protocols.",
    problemStatement: "Caring for aging family members from a distance leads to communication gaps, missed medication routines, and delayed emergency responses.",
    solution: "A unified platform combining proactive AI medication reminders, family caregiver status feeds, and one-touch emergency escalation protocols.",
    features: [
      "Proactive automated medication and vitals reminder engine",
      "One-touch emergency alert protocol with instant family notification",
      "Real-time family circle dashboard for shared caregiving",
      "Confidential health logs and doctor visit records",
    ],
    technologies: ["Python", "FastAPI", "React.js", "PostgreSQL", "Tailwind CSS"],
    myContribution: "Architected the full-stack web platform using FastAPI for the backend service and React.js for the responsive caregiver dashboard.",
    liveDemoUrl: null,
    githubUrl: "https://github.com/saranyak2406",
    gradient: "from-pink-500/10 via-purple-500/5 to-transparent",
    codeSnippet: `@app.post("/api/v1/care/alert")
async def trigger_care_alert(payload: AlertPayload):
    status = await orchestrator.dispatch_emergency(
        patient_id=payload.patient_id,
        severity=payload.level,
        family_circle=payload.contacts
    )
    return {"status": "dispatched", "receipt": status.id}`,
  },
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "The Apollo University",
    location: "Chittoor, Andhra Pradesh",
    period: "Nov 2022 – Mar 2026",
    grade: "CGPA: 8.62 / 10",
    description: "Comprehensive curriculum focusing on full-stack software development, database systems, artificial intelligence, algorithms, and cloud technologies.",
    highlights: [
      "Strong foundation in Data Structures, Algorithms, DBMS, and Operating Systems",
      "Consistent academic excellence across all semesters with 8.62 CGPA",
      "Hands-on project work in AI, computer vision, and modern web application development",
    ],
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Narayana Junior College",
    location: "Vijayawada, Andhra Pradesh",
    period: "2018 – 2020",
    grade: "Score: 647 / 1000",
    description: "Rigorous focus on Mathematics, Physics, and Chemistry cultivating analytical problem solving.",
    highlights: ["Analytical and mathematical fundamentals"],
  },
  {
    degree: "Secondary School (Class X)",
    institution: "Bhashyam English Medium High School",
    location: "Vijayawada, Andhra Pradesh",
    period: "2017 – 2018",
    grade: "CGPA: 9.2 / 10",
    description: "Academic distinction with leadership in science and mathematics activities.",
    highlights: ["Graduated with 9.2 CGPA distinction"],
  },
];

export const certificationsData = [
  {
    title: "SDSC SHAR, ISRO Quiz Award",
    issuer: "Satish Dhawan Space Centre (SDSC SHAR), ISRO",
    category: "Technical Achievement",
    date: "Verified Award",
    description: "Winner and certificate recipient in a competitive scientific and space technology quiz event organized by ISRO.",
    verificationUrl: null,
  },
  {
    title: "Ethical Hacking & Cybersecurity Workshop",
    issuer: "IIT Hyderabad",
    category: "Workshop",
    date: "Participation Certificate",
    description: "Hands-on technical workshop covering network defense, vulnerability assessment, and fundamental cybersecurity protocols.",
    verificationUrl: null,
  },
  {
    title: "Inter-College Technical Hackathon",
    issuer: "Madanapalle Institute of Technology & Science (MITS)",
    category: "Hackathon",
    date: "Certificate of Participation",
    description: "Collaborated in an intensive hackathon environment designing rapid software prototypes for real-world challenge statements.",
    verificationUrl: null,
  },
  {
    title: "Web and Mobile Development Training",
    issuer: "NAVACHIS IT Solutions",
    category: "Technical Certification",
    date: "Industry Training",
    description: "Comprehensive practical training spanning HTML, CSS, JavaScript, Angular, Laravel, MySQL, and Flutter.",
    verificationUrl: null,
  },
];


export const webDevelopmentServices = [
  {
    id: "fullstack",
    badge: "Full-Stack Development",
    title: "Full-Stack Web Applications",
    subtitle: "Python FastAPI & React.js Integration",
    description: "End-to-end web application development connecting fluid React client interfaces with scalable Python backends.",
    features: [
      "Modular microservices and RESTful API architectures",
      "Seamless client-server JSON contract schemas",
      "Robust state management and responsive layouts",
      "Production-ready deployment workflows"
    ],
    tech: ["Python", "FastAPI", "React.js", "Node.js", "Tailwind CSS"]
  },
  {
    id: "frontend",
    badge: "Client Interfaces",
    title: "Modern Reactive Frontends",
    subtitle: "Apple & Linear Inspired Design",
    description: "Building responsive, accessible, pixel-perfect user interfaces with smooth interactions and high-contrast typography.",
    features: [
      "Custom reusable component libraries in React",
      "Dark and light mode responsive themes",
      "Interactive data visualizations and dashboards",
      "Mobile-first responsive CSS with Tailwind"
    ],
    tech: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    id: "apis",
    badge: "Backend Engineering",
    title: "High-Throughput REST APIs",
    subtitle: "FastAPI, Express & Python Services",
    description: "Architecting high-concurrency asynchronous API endpoints with strict validation, error handling, and documentation.",
    features: [
      "Asynchronous request pipelines with FastAPI and Uvicorn",
      "Secure authentication and data serialization",
      "Integration with computer vision and AI pipelines",
      "Automated endpoint testing and Postman documentation"
    ],
    tech: ["Python", "FastAPI", "Express.js", "REST APIs", "Postman"]
  },
  {
    id: "database",
    badge: "Data Persistence",
    title: "Database Design & Optimization",
    subtitle: "PostgreSQL & MySQL Relational Models",
    description: "Structuring clean relational databases, normalized schemas, and optimized indexes for fast query response times.",
    features: [
      "Relational schema modeling and entity-relationship mapping",
      "Optimized query performance and transactional integrity",
      "Audit trail tables and historical data retention",
      "Secure connection pooling and migration management"
    ],
    tech: ["PostgreSQL", "MySQL", "Supabase", "SQL"]
  }
];
