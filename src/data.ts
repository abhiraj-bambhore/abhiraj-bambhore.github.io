export const RESUME_DATA = {
    name: "Abhiraj Bambhore",
    avatarName: "Abhiraj B",
    title: "Founder & CEO, MirageX",
    handle: "@abhiraj_bambhore",
    tagline: "Engineering smart systems with AI and cloud.",
    summary: "Founder & CEO of MirageX, a startup pioneering autonomous decentralized energy orchestration. Computer Science student at REVA University with a focus on Agentic AI, NLP, and distributed systems. Passionate about building high-impact, scalable solutions that merge AI with real-world infrastructure. Expert in workflow automation and intelligent system architecture.",
    email: "abhirajbambhore@gmail.com",
    phone: "+91 9611941155",
    github: "https://github.com/Abhiraj-ux",
    linkedin: "https://linkedin.com/in/abhiraj-bambhore",

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
            image: "/miragex-arch.png"
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
            id: "crop-advisory for small and marginal farmers",
            title: "Smart Crop Advisory",
            status: "SIH 2025 Selected in College level",
            description: "Full-stack platform serving 25+ crops. Integrated multilingual voice interface (89% accuracy) and real-time market price aggregation from 50+ mandis.",
            tags: ["Hugging Face", "MongoDB", "Python", "Voice AI", "fastbots llm"],
            link: "https://drive.google.com/file/d/1Ftt4PHo_3acvUE_o6Gcw0aK0c5dH7hTf/view?usp=drivesdk",
            videoDemo: "https://drive.google.com/file/d/1Ftt4PHo_3acvUE_o6Gcw0aK0c5dH7hTf/view?usp=drivesdk",
            type: "primary"
        },
        {
            id: "neurovoice",
            title: "NeuroVoice AI",
            status: "95% ACCURACY",
            description: "Multimodal diagnostic platform fusing vocal biomarkers and kinematic motor analysis to screen for Parkinson's Disease. Features an Acoustic Core extracting MDVP biomarkers (Jitter, Shimmer, HNR) via Parselmouth/Praat to detect micro-tremors. Integrated AI4Bharat for regional Indic language support and real-time clinical dashboard using React 19 and Recharts.",
            tags: ["React 19", "FastAPI", "XGBoost", "Parselmouth", "AI4Bharat", "Recharts"],
            link: "https://github.com/Abhiraj-ux/neuro_voice",
            type: "accent"
        },
        {
            id: "email-agent",
            title: "AI Email Reply Agent",
            status: "AUTOMATION DONE",
            description: "Autonomous Gmail assistant using n8n and Google Gemini. Automatically fetches, analyzes, and drafts context-aware replies to incoming messages in real-time.",
            tags: ["n8n", "Google Gemini", "Gmail API", "Automation"],
            link: "#",
            type: "primary",
            image: "/email-workflow.jpg"
        },
        {
            id: "feedback-system",
            title: "Smart Feedback Workflow",
            status: "COMPLETE SYSTEM",
            description: "Enterprise-grade feedback processing system. Utilizes AI agents to categorize form submissions (complaints, compliments, features) and routes them to Slack/Gmail.",
            tags: ["n8n", "AI Agents", "Slack API", "Workflow Engineering"],
            link: "#",
            type: "accent",
            image: "/feedback-workflow.jpg"
        }
    ],

    skills: {
        languages: ["Python", "C++", "Java (OOPs)", "SQL"],
        frameworks: ["LangChain", "LangGraph", "Scikit-learn", "pandas", "Numpy", "FastAPI"],
        systems: ["Agentic AI", "LLM Pipelines", "Docker", "AWS cloud"],
        tools: ["Antigravity", "n8n", "Jenkins", "Git", "GitHub", "VS Code", "Supabase"]
    }
};
