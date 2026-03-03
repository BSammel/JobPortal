import{
Search,
Users,
Building2,
FileText,
MessageSquare,
BarChart3,
Shield,
Clock,
Briefcase,
Award,
LayoutDashboard,
Plus
}from "lucide-react";


export const jobSeekerFeatures = [
    {
        icon: Search,
        title: "Find Jobs",
        description: "AI-powered algorithm matches you with relevant opportunities based on your skills and preferences."

    },
    {
        icon: FileText,
        title: "Resume Builder",
        description: "Create a professional resume to stand out in the job market with our intuitive builder and templates designed by experts."
    },
    {
        icon: MessageSquare,
        title: "Direct Communication",
        description: "Connect directly with employers and recruiters through our secure messaging platform."
    },
    {
        icon: Award,
        title: "Skill Assessments",
        description: "Showcase your expertise with verified skill tests and earn badges that employers trust."
    },
    
];

export const employersFeatures = [
    {
        icon: Users,
        title: "Talent Pool Access",
        description: "Access our database of pre-screened candidates to find the perfect match for your job openings."
    },
    {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description: "Track your hiring performance with detailed analytics and insights on candidate engagement"
    },
    {
        icon: Shield,
        title: "Verified Candidates",
        description: "All candidates undergo background verification toensure you are hiring trustworthy professionals"
    },
    {
        icon: Clock,
        title: "Quick Hiring",
        description: "Streamlined hiring process reduces time-to-hire by 65% with automated screening tools "
    },
];


export const NAVIGATION_MENU = [

    {id: "employer-dashboard", name: "Dashboard", icon: LayoutDashboard},
    {id: "post-job", name: "Post Job", icon: Plus},
    {id: "manage-jobs", name: "Manage Jobs", icon: Briefcase},
    {id: "company-profile", name: "Company Profile", icon: Building2},
];

export const CATEGORIES =[
    {value: "Engineering", label: "Engineering"},
    {value: "Design", label: "Design"},
    {value: "Marketing", label: "Marketing"},
    {value: "Sales", label: "Sales"},
    {value: "IT & Software", label: "IT & Software"},
    {value: "Customer-Service", label: "Customer Service"},
    {value: "Product", label: "Product"},
    {value: "Operations", label: "Operations"},
    {value: "Finance", label: "Finance"},
    {value: "HR", label: "HR"},
    {value: "Other", label: "Other"},
];

export const JOB_TYPES =[
    {value: "Remote", label: "Remote"},
    {value: "Full-Time", label: "Full-Time"},
    {value: "Part-Time", label: "Part-Time"},
    {value: "Contract", label: "Contract"},
    {value: "Internship", label: "Internship"},

];

export const SALARY_RANGES = [
    "Less than $1000",
    "$1000 - $15,000",
    "More than $15,000",
]