import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  title: string;
  items: string[];
  icon: LucideIcon;
}

export interface TechItem {
  name: string;
  description: string;
}

export interface TimelineItem {
  stage: string;
  duration?: string;
  details: string[];
}