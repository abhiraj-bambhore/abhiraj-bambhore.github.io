export const RESUME_DATA = {
    name: "Abhiraj Bambhore",
    avatarName: "Abhiraj B",
    title: "Founder & CEO, MirageX",
    handle: "@abhiraj_bambhore",
    tagline: "Engineering smart systems with AI and cloud.",
    summary: "Founder & CEO of MirageX, a startup pioneering autonomous decentralized energy orchestration. Computer Science student at REVA University with a focus on Agentic AI, NLP, and distributed systems. Passionate about building high-impact, scalable solutions that merge AI with real-world infrastructure. Expert in workflow automation and intelligent system architecture.",
    email: "abhirajbambhore@gmail.com",
    phone: "+91 9611941155",
    github: "https://github.com/abhiraj-bambhore",
    linkedin: "https://www.linkedin.com/in/abhiraj-bambhore",

    about: {
        philosophy: "I am a dedicated Computer Science student at REVA University and the Founder of MirageX. With a stellar CGPA of 9.62, my expertise lies at the intersection of AWS cloud, agentic AI, NLP and automation tools. I build scalable, decentralized solutions for real-world orchestration.",
        stats: [
            { label: "CGPA (REVA)", value: "9.62", type: "brain" },
            { label: "MirageX", value: "CEO", type: "zap" }
        ]
    },

    projects: [
        {
            id: "miragex",
            title: "MirageX: Energy Orchestration",
            status: "CEO & FOUNDER @ REVA NEST",
            description: "Pioneering autonomous peer-to-peer energy orchestration via multi-agent systems. Architecture integrates satellite data (Copernicus ESA), Federated Learning, and Microsoft AutoGen for decentralized, privacy-first energy trading with 100% local, open-source AI (Ollama/Llama 3.1).",
            tags: ["Multi-Agent Systems", "AutoGen", "Ollama", "FastAPI", "Energy Tech"],
            link: "#",
            type: "primary",
            image: "/miragex-arch.png",
            images: ["/miragex-arch.png"]
        },
        {
            id: "neurovoice",
            title: "NeuroVoice AI",
            status: "95% ACCURACY",
            description: "Multimodal diagnostic platform fusing vocal biomarkers and kinematic motor analysis to screen for Parkinson's Disease. Features an Acoustic Core extracting MDVP biomarkers (Jitter, Shimmer, HNR) via Parselmouth/Praat to detect micro-tremors. Integrated AI4Bharat for regional Indic language support and real-time clinical dashboard using React 19 and Recharts.",
            tags: ["React 19", "FastAPI", "XGBoost", "Parselmouth", "AI4Bharat", "Recharts"],
            link: "https://github.com/Abhiraj-ux/neuro_voice",
            type: "accent",
            image: "/neurovoice1.jfif",
            images: ["/neurovoice1.jfif", "/neurovoice2.jfif", "/neurovoice3.jfif"]
        },
        {
            id: "omnivoice",
            title: "OmniVoice — Voice AI Agent",
            status: "MULTILINGUAL RAG",
            description: "Built a multilingual voice AI agent using Vapi and RAG architecture, delivering accessible guidance across services in 8 Indian languages. Integrated Qdrant vector database with real-time web search for hybrid semantic retrieval.",
            tags: ["Vapi", "Qdrant", "RAG", "Python", "AI"],
            link: "#",
            videoDemo: "https://drive.google.com/file/d/1klxzSh81bY5HiZ4bKl_eY4x2SPLawhEV/view?usp=drivesdk&usp=embed_facebook",
            type: "accent",
            image: "/omnivoice1.jfif",
            images: ["/omnivoice1.jfif"]
        },
        {
            id: "intern-recommender",
            title: "Internship Recommendation Engine",
            status: "87% MATCH ACCURACY",
            description: "Designed an intelligent engine analyzing 10,000+ listings across 20+ cities. Implemented cosine similarity matching students based on 15+ skill parameters, connecting 250+ students in pilot phase. Established automated Jenkins CI/CD pipeline for daily database updates.",
            tags: ["Python", "scikit-learn", "Pandas", "Jenkins"],
            link: "https://github.com/Abhiraj-ux/intership_recommendation_system",
            type: "primary"
        },
        {
            id: "email-agent",
            title: "AI-Powered Smart Email Reply Workflow",
            status: "AUTOMATION DONE",
            description: "Autonomous Gmail assistant using n8n and Google Gemini. Automatically fetches, analyzes, and drafts context-aware replies to incoming messages in real-time.",
            tags: ["n8n", "Google Gemini", "Gmail API", "Automation"],
            link: "#",
            type: "primary",
            image: "/email-reply1.jfif",
            images: ["/email-reply1.jfif", "/email-reply2.jfif"]
        },
        {
            id: "feedback-system",
            title: "AI-Powered Feedback Management Automation",
            status: "Apr 2026 – May 2026",
            description: "Enterprise-grade feedback processing system. Utilizes AI agents to categorize form submissions (complaints, compliments, features) and routes them to Slack/Gmail.",
            tags: ["n8n", "AI Agents", "Slack API", "Workflow Engineering"],
            link: "#",
            type: "accent",
            image: "/feedback-auto.jfif",
            images: ["/feedback-auto.jfif"]
        },
        {
            id: "crop-advisory for small and marginal farmers",
            title: "Smart Crop Advisory",
            status: "SIH 2025 Selected in College level",
            description: "Full-stack platform serving 25+ crops. Integrated multilingual voice interface (89% accuracy) and real-time market price aggregation from 50+ mandis.",
            tags: ["Hugging Face", "MongoDB", "Python", "Voice AI", "fastbots llm"],
            link: "https://drive.google.com/file/d/1Ftt4PHo_3acvUE_o6Gcw0aK0c5dH7hTf/view?usp=drivesdk",
            videoDemo: "https://drive.google.com/file/d/1Ftt4PHo_3acvUE_o6Gcw0aK0c5dH7hTf/view?usp=drivesdk",
            type: "primary",
            image: "/smart-crop1.jfif",
            images: ["/smart-crop1.jfif", "/smart-crop2.jfif"]
        },
        {
            id: "logistics-optimization",
            title: "AI Enhanced Logistics and Supply Chain",
            status: "Apr 2026 – Apr 2026",
            description: "AI-based demand forecasting (LSTM, TFT), smart routing optimizing cost, time, and emissions, blockchain-powered carbon tracking (Ethereum), and real-time monitoring via a control tower dashboard.",
            tags: ["LSTM", "TFT", "Ethereum", "AI"],
            link: "#",
            type: "primary",
            image: "/logistics1.jfif",
            images: ["/logistics1.jfif", "/logistics2.jfif", "/logistics3.jfif"]
        },
        {
            id: "lakehouse-article",
            title: "Data Lakehouse & Warehouse Guide",
            status: "TECHNICAL ARTICLE",
            description: "A comprehensive guide on modern data architectures, comparing Data Lakes, Data Warehouses, and Data Lakehouses with their respective use cases and architectures.",
            tags: ["Data Architecture", "Technical Writing", "Big Data"],
            link: "https://lakehouse-article.vercel.app/",
            type: "accent",
            image: "/datalake1.jpeg",
            images: ["/datalake1.jpeg"]
        }
    ],

    skills: {
        languages: ["Python", "C++", "Java", "SQL", "JavaScript", "HTML", "CSS"],
        frameworks: ["LangChain", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "FastAPI", "Pydantic"],
        systems: ["Agentic AI", "Prompt Engineering", "NLP", "LLM Pipelines", "AWS Cloud", "Docker", "MySQL", "Qdrant DB", "REST APIs", "Informatica Cloud"],
        tools: ["n8n", "Supabase", "Jenkins", "Git", "GitHub", "VS Code", "Antigravity", "Data Analysis"]
    },

    certifications: [
        "AWS Cloud Practitioner Training Certification (2026)",
        "DevOps Certification – Mevi Technology",
        "JPMorganChase Software Engineering Job Simulation – Forage (January 2026)",
        "Agentic AI: Build AI Agents with LangGraph, CrewAI & MCP (2026)"
    ],

    achievements: [
        "Secured 2nd place at AINEX National Level Hackathon 2026"
    ],

    spokenLanguages: [
        "English", "Kannada", "Hindi", "Marathi"
    ],

    education: [
        {
            institution: "REVA University, Bengaluru",
            duration: "Nov 2023 – Present (Expected Nov 2027)",
            degree: "B.Tech in Computer Science and Engineering",
            score: "CGPA: 9.62 / 10.0"
        },
        {
            institution: "Excellent PU College, Moodbidri, Dakshina Kannada",
            duration: "2021 – 2023",
            degree: "Pre-University",
            score: "Percentage: 87%"
        }
    ]
};
