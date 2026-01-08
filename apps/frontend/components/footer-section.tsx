'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Activity, FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Product',
		links: [
			{ title: 'Features', href: '#features' },
			{ title: 'Pricing', href: '#pricing' },
			{ title: 'Status Pages', href: '#status-pages' },
			{ title: 'Integrations', href: '#integrations' },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'About', href: '#about' },
			{ title: 'Blog', href: '/blog' },
			{ title: 'Privacy Policy', href: '/privacy' },
			{ title: 'Terms of Service', href: '/terms' },
		],
	},
	{
		label: 'Resources',
		links: [
			{ title: 'Documentation', href: '#docs' },
			{ title: 'API Reference', href: '#api' },
			{ title: 'Changelog', href: '/changelog' },
			{ title: 'Support', href: '/help' },
		],
	},
	{
		label: 'Social',
		links: [
			{ title: 'Twitter', href: '#', icon: FacebookIcon },
			{ title: 'GitHub', href: '#', icon: InstagramIcon },
			{ title: 'Discord', href: '#', icon: YoutubeIcon },
			{ title: 'LinkedIn', href: '#', icon: LinkedinIcon },
		],
	},
];

export function Footer() {
	return (
		<footer className="md:rounded-t-6xl relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
			<div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full gap-6 md:gap-8 xl:grid-cols-3">
				<AnimatedContainer className="space-y-3 md:space-y-4">
					<Activity className="size-6 md:size-7" />
					<p className="text-muted-foreground text-sm leading-relaxed">
						© {new Date().getFullYear()} BetterStack Clone. All rights reserved.
					</p>
				</AnimatedContainer>

				<div className="mt-6 md:mt-0 grid grid-cols-2 gap-6 md:gap-8 md:grid-cols-4 xl:col-span-2">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div>
								<h3 className="text-xs font-semibold mb-3 md:mb-4 uppercase tracking-wide">{section.label}</h3>
								<ul className="text-muted-foreground space-y-2 text-sm leading-relaxed">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="hover:text-foreground inline-flex items-center transition-all duration-300"
											>
												{link.icon && <link.icon className="me-1 size-4" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		// @ts-expect-error - framer-motion types issue with motion props
		<motion.div
			initial={{ filter: 'blur(4px)', y: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', y: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};