import sImg1 from '/public/images/services/service_image_1.webp'
import sImg2 from '/public/images/services/service_image_2.webp'
import sImg3 from '/public/images/services/service_image_3.webp'
import sImg4 from '/public/images/services/service_image_4.webp'
import sImg5 from '/public/images/services/service_image_5.webp'

import icon1 from '/public/images/icons/icon_code.svg'
import icon2 from '/public/images/icons/icon_programming_tree.svg'
import icon3 from '/public/images/icons/icon_monitor_2.svg'
import icon4 from '/public/images/icons/icon_phone.svg'
import icon5 from '/public/images/icons/icon_bug.svg'
import icon6 from '/public/images/icons/icon_programming.svg'

import icon7 from '/public/images/icons/icon_analisis_2.svg'
import icon8 from '/public/images/icons/icon_process.svg'
import icon21 from '/public/images/icons/icon_home.svg'
import icon22 from '/public/images/icons/icon_hand_shake.svg'
import icon23 from '/public/images/icons/icon_trophy.svg'
import icon24 from '/public/images/icons/icon_deal.svg'
import icon9 from '/public/images/icons/icon_chart_2.svg'
import icon10 from '/public/images/icons/icon_meeting.svg'
import icon11 from '/public/images/icons/icon_bulb_2.svg'
import icon12 from '/public/images/icons/icon_speed_miter.svg'



const Services = [
    {
        Id: '1',
        sImg:sImg1,
        title: 'IT Management Services',
        slug: 'IT-Management-Services',
        thumb1:'Strategy',
        thumb2:'Consultation',
        col:'col-lg-6',
        description:'Visit new places to discover with a Tourist Visa. We deliver your documents ...',
    },
    {
        Id: '2',
        sImg:sImg2,
        title: 'Data Tracking and Security',
        slug: 'Data-Tracking-and-Security',
        thumb1:'Management',
        thumb2:'Transfer',
        col:'col-lg-6',
        description:'Developing your trade, setting up new sales channels Your visa is ready...',
    },
    {
        Id: '3',
        sImg:sImg3,
        title: 'Website Development',
        slug: 'Website-Development',
        thumb1:'Landing Page',
        thumb2:'Plugins',
        col:'col-lg-4',
        description:'Developing your trade, setting up new sales channels Your visa is ready...',
    },
    {
        Id: '4',
        sImg:sImg4,
        title: 'Modern Technology Solution',
        slug: 'Modern-Technology-Solution',
        thumb1:'Consultation',
        thumb2:'solution',
        col:'col-lg-4',
        description:'Embarking on a journey of higher education in a foreign country opens doors to...',
    },
    {
        Id: '5',
        sImg:sImg5,
        title: 'UI/UX Design Services',
        slug: 'UI-UX-Design-Services',
        thumb1:'Website',
        thumb2:'Mobile App',
        col:'col-lg-4',
        description:'Expert Guidance for a Seamless Immigration Journey Expert Guidance...',
    },
    {
        Id: '6',
        sImg:icon1,
        title: 'Custom Software Development',
        slug: 'Custom Software Development',
        features: ['Software architecture design', 'System integration services', 'Data migration services', 'Legacy app modernization']
    },
    {
        Id: '7',
        sImg:icon2,
        title: 'Audit & IT Consulting Services',
        slug: 'Audit-&-IT-Consulting-Services',
        features: ['TechGuard Audit', 'CyberSafe Audit & IT Consulting', 'AssuranceEdge & IT Consulting', 'IT Sentry Audit & IT Consulting']
    },
    {
        Id: '8',
        sImg:icon3,
        title: 'Web Application Design and Development',
        slug: 'Web-Application-Design-and-Development',
        features: ['Web app development services', 'Web portal development services', 'Website development services', 'Offshore web development']
    },
    {
        Id: '9',
        sImg:icon4,
        title: 'Mobile App Design and Development',
        slug: 'Mobile-App-Design-and-Development',
        features: ['Android development services', 'iOS app development services', 'Mobile application design services', 'Enterprise mobile app development']
    },
    {
        Id: '10',
        sImg:icon5,
        title: 'Best UI/UX Design Services',
        slug: 'Best-UI/UX-Design-Services',
        features: ['PixelPerfection UI/UX Design', 'DesignCraft UI/UX Design', 'CreativeWave UI/UX Design', 'InterfaceGenius UI/UX Design']
    },
    {
        Id: '11',
        sImg:icon6,
        title: 'Maintenance and Customer Support',
        slug: 'Maintenance-and-Customer-Support',
        features: ['CareCraft Maintenance', 'FixItPro Maintenance', 'TechCare Maintenance', 'AssistEdge Maintenance']
    },
    {
        Id: '12',
        sImg:icon10,
        title: 'Personalized College Guidance',
        slug: 'Personalized-College-Guidance',
        description:'Confused about courses, colleges, or career paths? Get expert advice and real-world insights to make informed decisions about your future.',
    },
    {
        Id: '13',
        sImg:icon21,
        title: 'PG & Accommodation Assistance',
        slug: 'Business-Process-Optimization',
        description:'Struggling to find the perfect place to stay? We connect you with safe, affordable, and verified PGs and hostels near your college.',
    },
    {
        Id: '14',
        sImg:icon22,
        title: 'Events Exclusive for Students',
        slug: 'Digital-Transformation-Consulting',
        description:' From networking meetups to college fests, workshops, and cultural nights—discover events that help you learn, grow, and have fun.',
    },
    {
        Id: '15',
        sImg:icon23,
        title: 'Sports & Tournaments',
        slug: 'Strategic-Planning-and-Executions',
        description:'Showcase your talent and compete in exciting sports tournaments designed exclusively for students. Build skills, make friends, and win super big!',
    },
    {
        Id: '16',
        sImg:icon11,
        title: 'Community & Networking',
        slug: 'Change-Management-Solutions',
        description:' Join a thriving student community. Connect with like-minded peers, seniors, and mentors who can guide and support you throughout your journey.',
    },
    {
        Id: '17',
        sImg:icon24,
        title: 'Deals & Discounts',
        slug: 'Performance-Metrics-and-KPI-Development',
        description:'Enjoy student-exclusive deals on food, travel, books, gadgets, and more. Because saving money while living the college life is a skill!',
    },
]    

export default Services;