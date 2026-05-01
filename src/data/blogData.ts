export interface BlogPostData {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export const blogData: BlogPostData[] = [
  {
    slug: 'tycalk9-top-5-k9-trainer-2026',
    title: 'TyCalK9 Named Top 5 K9 Trainer for 2026 by Epic Benchmark',
    date: 'Mar 20, 2026',
    excerpt: 'We are thrilled to share some incredible news with our pack! TyCalK9 has officially been named a Top 5 Award Winner for 2026 by Benchmark BusinessRate.',
    content: `We are thrilled to share some incredible news with our pack! TyCalK9 has officially been named a Top 5 Award Winner for 2026 by Benchmark BusinessRate. This recognition is especially meaningful because it is "Powered by Google Reviews"—meaning it comes directly from the feedback, stories, and successes of the families and dogs we work with every day here in Fort Bend County.

Training a dog is about more than just commands; it's about building a bond of communication and trust. Being ranked among the best in Texas validates our commitment to providing elite K9 training that actually works. We want to extend a huge thank you to our amazing clients for trusting us with your four-legged best friends and for sharing your experiences with the community. We couldn't have reached this milestone without you!`,
    image: '/tycalK9award.jpeg'
  }
];
