'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export function CTASection() {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedGroup variants={transitionVariants}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              Start Monitoring Your Sites Today
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of teams who trust us to keep their services running smoothly. 
              Get started in minutes, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="bg-foreground/10 rounded-[14px] border p-0.5">
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl px-8 text-base">
                  <Link href="#">
                    Get Started Free
                  </Link>
                </Button>
              </div>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="h-12 rounded-xl px-8">
                <Link href="#">
                  Schedule Demo
                </Link>
              </Button>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}

