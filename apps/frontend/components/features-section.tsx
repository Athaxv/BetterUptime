'use client';

import { Activity, Globe, Shield, Bell, AlertTriangle, BarChart } from 'lucide-react';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Everything you need to monitor your infrastructure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to keep your services running smoothly
          </p>
        </div>
        <BentoGrid className="lg:grid-rows-3">
          <BentoCard
            name="Real-time Monitoring"
            description="Monitor your websites and APIs with checks every 30 seconds. Get instant notifications when something goes wrong."
            href="#"
            cta="Learn more"
            className="lg:col-span-3 lg:row-span-2"
            Icon={Activity}
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10" />
            }
          />
          <BentoCard
            name="Multi-region Checks"
            description="Monitor from multiple locations worldwide to ensure your services are accessible globally."
            href="#"
            cta="Explore"
            className="lg:col-span-1"
            Icon={Globe}
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 dark:from-green-500/10 dark:to-emerald-500/10" />
            }
          />
          <BentoCard
            name="Status Pages"
            description="Create beautiful, customizable status pages that keep your users informed during incidents."
            href="#"
            cta="See examples"
            className="lg:col-span-2"
            Icon={Shield}
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 dark:from-yellow-500/10 dark:to-orange-500/10" />
            }
          />
          <BentoCard
            name="Alert Management"
            description="Get notified via email, SMS, Slack, Discord, and more. Never miss a critical incident."
            href="#"
            cta="View integrations"
            className="lg:col-span-2"
            Icon={Bell}
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 dark:from-red-500/10 dark:to-pink-500/10" />
            }
          />
          <BentoCard
            name="Incident Management"
            description="Track and manage incidents with detailed timelines, postmortems, and communication tools."
            href="#"
            cta="Learn more"
            className="lg:col-span-1"
            Icon={AlertTriangle}
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 dark:from-purple-500/10 dark:to-indigo-500/10" />
            }
          />
          <BentoCard
            name="Analytics & Reports"
            description="Comprehensive uptime statistics, response time analytics, and detailed reports for your stakeholders."
            href="#"
            cta="View dashboard"
            className="lg:col-span-3"
            Icon={BarChart}
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/10 dark:to-blue-500/10" />
            }
          />
        </BentoGrid>
      </div>
    </section>
  );
}

