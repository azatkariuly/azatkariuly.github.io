type Project = {
    name: string
    description: string
    link: string
    video: string
    id: string
  }
  
  type WorkExperience = {
    company: string
    title: string
    start: string
    end: string
    link: string
    id: string
  }
  
  type BlogPost = {
    title: string
    description: string
    link: string
    uid: string
  }
  
  type SocialLink = {
    label: string
    link: string
  }
  
  export const PROJECTS: Project[] = [
    {
      name: 'SPOCLIP Website',
      description:
        'Advanced components and templates to craft beautiful websites.',
      link: 'https://www.spoclip.ai',
      video:
        '/videos/projects_spoclip.mp4',
      id: 'spoclip',
    },
    {
      name: 'Dandycv Tools',
      description:
        'Advanced components and templates to craft beautiful websites.',
      link: 'https://www.dandycv.com',
      video:
        '/videos/projects_dandycv.mp4',
      id: 'dandycv',
    },
  ]
  
  export const WORK_EXPERIENCE: WorkExperience[] = [
    {
      company: 'SPOCLIP AI',
      title: 'AI Engineer & Full Stack Developer',
      start: '2023',
      end: 'Present',
      link: 'https://www.spoclip.ai',
      id: 'work1',
    },
    {
      company: 'Intelligent Computing & Codesign Lab',
      title: 'Research Assistant',
      start: '2022',
      end: '2023',
      link: 'https://iccl.unist.ac.kr/',
      id: 'work2',
    },
  ]
  
  export const BLOG_POSTS: BlogPost[] = [
    {
      title: 'Exploring the Intersection of Design, AI, and Design Engineering',
      description: 'How AI is changing the way we design',
      link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
      uid: 'blog-1',
    },
    {
      title: 'Why I left my job to start my own company',
      description:
        'A deep dive into my decision to leave my job and start my own company',
      link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
      uid: 'blog-2',
    },
    {
      title: 'What I learned from my first year of freelancing',
      description:
        'A look back at my first year of freelancing and what I learned',
      link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
      uid: 'blog-3',
    },
  ]
  
  export const SOCIAL_LINKS: SocialLink[] = [
    {
      label: 'Github',
      link: 'https://github.com/azatkariuly',
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/azatkariuly',
    },
    {
      label: 'Google Scholar',
      link: 'https://scholar.google.com/citations?user=vvrwfuIAAAAJ&hl=en&oi=ao',
    },
  ]
  
  export const SKILLS = [
    {
      src: '/images/skills/python-ar21.svg',
      name: 'python',
    },
    {
      src: '/images/skills/pytorch-ar21.svg',
      name: 'pytorch',
    },
    {
      src: '/images/skills/opencv-ar21.svg',
      name: 'opencv',
    },
    {
      src: '/images/skills/numpy-ar21.svg',
      name: 'numpy',
    },
    {
      src: '/images/skills/reactjs-ar21.svg',
      name: 'react',
    },
    {
      src: '/images/skills/nextjs-ar21.svg',
      name: 'next.js',
    },
    {
      src: '/images/skills/nodejs-ar21.svg',
      name: 'node.js',
    },
    {
      src: '/images/skills/expressjs-ar21.svg',
      name: 'express.js',
    },
    {
      src: '/images/skills/firebase-ar21.svg',
      name: 'firebase',
    },
    {
      src: '/images/skills/supabase-ar21.svg',
      name: 'supabase',
    },
    {
      src: '/images/skills/postgresql-ar21.svg',
      name: 'postgresql',
    },
    {
      src: '/images/skills/mongodb-ar21.svg',
      name: 'mongodb',
    },
    {
      src: '/images/skills/docker-ar21.svg',
      name: 'docker',
    },
    {
      src: '/images/skills/amazon_aws-ar21.svg',
      name: 'aws',
    },
  ]
  
  export const EMAIL = 'azat.kariuly@gmail.com'
  