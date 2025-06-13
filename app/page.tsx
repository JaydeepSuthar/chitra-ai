"use client";

import { Button } from "@/components/landing-page/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/landing-page/card";
import { Badge } from "@/components/landing-page/badge";
import { Sparkles, ImageIcon, Type, Smartphone, Download, Palette, Wand2, Brush } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { GeometricBackground } from "@/components/landing-page/geometric-background";
import { ScrollReveal } from "@/components/landing-page/scroll-reveal";

export default function Home() {
    const scrollToMobileApp = () => {
        const element = document.getElementById("mobile-app");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground relative overflow-hidden">
            <GeometricBackground />

            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center">
                    <div className="mr-4 flex">
                        <Link href="/" className="mr-6 flex items-center space-x-2 group">
                            <div className="animate-pulse-glow">
                                <Sparkles className="h-5 w5 text-purple-300 transition-transform group-hover:scale-110" />
                            </div>
                            {/* bg-gradient-to-r from-primary to-violet-400 */}
                            <span className="font-bold text-xl bg-white bg-clip-text text-transparent">Chitra AI</span>
                        </Link>
                    </div>
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        <nav className="flex items-center space-x-6 text-sm font-medium">
                            <Link href="#features" className="transition-all hover:text-primary hover:scale-105">
                                Features
                            </Link>
                            <Link href="#retouch" className="transition-all hover:text-primary hover:scale-105">
                                Retouch
                            </Link>
                            <Link href="#how-it-works" className="transition-all hover:text-primary hover:scale-105">
                                How it Works
                            </Link>
                            <button
                                onClick={scrollToMobileApp}
                                className="transition-all hover:text-primary hover:scale-105"
                            >
                                Download App
                            </button>
                            <Link href="/delete-me" className="transition-all hover:text-primary hover:scale-105">
                                Account
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="flex-1 relative z-20">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-8 text-center">
                            <div className="space-y-6 animate-fade-in-up">
                                <Badge variant="secondary" className="mb-4 animate-pulse-glow hover-lift">
                                    <Sparkles className="mr-1 h-3 w-3" />
                                    AI-Powered Image Generation
                                </Badge>
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                                    Transform Ideas into
                                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-violet-400 to-purple-500  animate-gradient">
                                        Stunning Visuals
                                    </span>
                                </h1>
                                <p
                                    className="mx-auto max-w-[700px] text-muted-foreground md:text-xl animate-fade-in-up"
                                    style={{ animationDelay: "0.2s" }}
                                >
                                    Chitra AI brings your imagination to life with cutting-edge text-to-image and
                                    image-to-image generation. Create unique visual content in seconds, whether you're
                                    starting from scratch or transforming existing images.
                                </p>
                            </div>
                            <div className="space-x-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                                <Button
                                    size="lg"
                                    className="h-12 px-8 hover-lift glow-border animate-gradient text-white"
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Download for iOS
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="h-12 px-8 hover-lift border-primary/20 hover:border-primary"
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Download for Android
                                </Button>
                            </div>
                            <ScrollReveal delay={600}>
                                <div className="w-full max-w-5xl mt-16">
                                    <div className="relative rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm p-6 hover-lift shimmer-effect">
                                        <Image
                                            src="/placeholder.svg?height=500&width=900"
                                            width={900}
                                            height={500}
                                            alt="Chitra AI Interface Preview"
                                            className="rounded-xl object-cover w-full animate-float"
                                        />
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/20 relative">
                    <div className="container px-4 md:px-6">
                        <ScrollReveal>
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <Badge variant="secondary" className="animate-pulse-glow">
                                        Core Features
                                    </Badge>
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-white bg-clip-text text-transparent">
                                        Powerful AI Generation Capabilities
                                    </h2>
                                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Experience the future of visual content creation with our advanced AI models
                                        designed for both beginners and professionals.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                        <div className="mx-auto grid max-w-6xl items-start gap-8 py-12 lg:grid-cols-2 lg:gap-12">
                            <ScrollReveal delay={200}>
                                <Card className="relative overflow-hidden hover-lift glow-border bg-card/50 backdrop-blur-sm border-primary/20">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                                    <CardHeader>
                                        <div className="flex items-center space-x-2">
                                            <div className="p-2 rounded-lg bg-primary/10 animate-pulse-glow">
                                                <Type className="h-6 w-6 text-primary" />
                                            </div>
                                            <CardTitle className="text-xl">Text-to-Image Generation</CardTitle>
                                        </div>
                                        <CardDescription className="text-muted-foreground">
                                            Transform your written descriptions into stunning visual artwork with our
                                            advanced AI models.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-primary">Key Features:</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-center space-x-2">
                                                    <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                                                    <span>Natural language processing for detailed prompts</span>
                                                </li>
                                                <li className="flex items-center space-x-2">
                                                    <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                                                    <span>Multiple art styles and genres</span>
                                                </li>
                                                <li className="flex items-center space-x-2">
                                                    <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                                                    <span>High-resolution output up to 4K</span>
                                                </li>
                                                <li className="flex items-center space-x-2">
                                                    <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                                                    <span>Batch generation capabilities</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="pt-4">
                                            <div className="relative rounded-lg overflow-hidden">
                                                <Image
                                                    src="/placeholder.svg?height=200&width=350"
                                                    width={350}
                                                    height={200}
                                                    alt="Text-to-Image Example"
                                                    className="object-cover w-full transition-transform hover:scale-105"
                                                />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>

                            <ScrollReveal delay={400}>
                                <Card className="relative overflow-hidden hover-lift glow-border bg-card/50 backdrop-blur-sm border-primary/20">
                                    <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-transparent"></div>
                                    <CardHeader>
                                        <div className="flex items-center space-x-2">
                                            <div className="p-2 rounded-lg bg-primary/10 animate-pulse-glow">
                                                <ImageIcon className="h-6 w-6 text-primary" />
                                            </div>
                                            <CardTitle className="text-xl">Image-to-Image Transformation</CardTitle>
                                        </div>
                                        <CardDescription className="text-muted-foreground">
                                            Upload existing images and transform them into new artistic creations while
                                            preserving key elements.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-primary">Key Features:</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-center space-x-2">
                                                    <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                                                    <span>Style transfer and artistic filters</span>
                                                </li>
                                                <li className="flex items-center space-x-2">
                                                    <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                                                    <span>Content-aware modifications</span>
                                                </li>
                                                <li className="flex items-center space-x-2">
                                                    <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                                                    <span>Preserve or modify specific elements</span>
                                                </li>
                                                <li className="flex items-center space-x-2">
                                                    <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                                                    <span>Multiple transformation options</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="pt-4">
                                            <div className="relative rounded-lg overflow-hidden">
                                                <Image
                                                    src="/placeholder.svg?height=200&width=350"
                                                    width={350}
                                                    height={200}
                                                    alt="Image-to-Image Example"
                                                    className="object-cover w-full transition-transform hover:scale-105"
                                                />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Retouch Section */}
                <section id="retouch" className="w-full py-12 md:py-24 lg:py-32 relative">
                    <div className="container px-4 md:px-6">
                        <ScrollReveal>
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <Badge variant="secondary" className="animate-pulse-glow">
                                        <Palette className="mr-1 h-3 w-3" />
                                        Advanced Retouching
                                    </Badge>
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-white bg-clip-text text-transparent">
                                        Professional Image Retouching
                                    </h2>
                                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Perfect your images with AI-powered retouching tools that enhance, restore, and
                                        refine your visuals with professional-grade precision.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                        <div className="mx-auto grid max-w-6xl items-start gap-8 py-12 lg:grid-cols-3 lg:gap-12">
                            {[
                                {
                                    icon: Wand2,
                                    title: "Smart Enhancement",
                                    description:
                                        "Automatically enhance colors, contrast, and sharpness with AI-powered algorithms.",
                                    features: [
                                        "Auto color correction",
                                        "Noise reduction",
                                        "Smart sharpening",
                                        "Dynamic range optimization",
                                    ],
                                    delay: 200,
                                },
                                {
                                    icon: Brush,
                                    title: "Object Removal",
                                    description:
                                        "Remove unwanted objects, people, or blemishes seamlessly from your images.",
                                    features: [
                                        "Content-aware fill",
                                        "Background cleanup",
                                        "Blemish removal",
                                        "Watermark removal",
                                    ],
                                    delay: 400,
                                },
                                {
                                    icon: Palette,
                                    title: "Style Transfer",
                                    description:
                                        "Apply artistic styles and filters to transform the mood and aesthetic of your images.",
                                    features: [
                                        "Artistic filters",
                                        "Mood adjustment",
                                        "Color grading",
                                        "Vintage effects",
                                    ],
                                    delay: 600,
                                },
                            ].map((item, index) => (
                                <ScrollReveal key={index} delay={item.delay}>
                                    <Card className="relative overflow-hidden hover-lift glow-border bg-card/50 backdrop-blur-sm border-primary/20 h-full">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                                        <CardHeader>
                                            <div className="flex items-center space-x-2">
                                                <div className="p-2 rounded-lg bg-primary/10 animate-pulse-glow">
                                                    <item.icon className="h-6 w-6 text-primary" />
                                                </div>
                                                <CardTitle className="text-xl">{item.title}</CardTitle>
                                            </div>
                                            <CardDescription className="text-muted-foreground">
                                                {item.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="space-y-2">
                                                <h4 className="font-semibold text-primary">Capabilities:</h4>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    {item.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="flex items-center space-x-2">
                                                            <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="pt-4">
                                                <div className="relative rounded-lg overflow-hidden">
                                                    <Image
                                                        src="/placeholder.svg?height=150&width=300"
                                                        width={300}
                                                        height={150}
                                                        alt={`${item.title} Example`}
                                                        className="object-cover w-full transition-transform hover:scale-105"
                                                    />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted/20 relative">
                    <div className="container px-4 md:px-6">
                        <ScrollReveal>
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <Badge variant="secondary" className="animate-pulse-glow">
                                        Simple Process
                                    </Badge>
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-white bg-clip-text text-transparent">
                                        Create in Three Easy Steps
                                    </h2>
                                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Our intuitive interface makes AI image generation accessible to everyone, from
                                        creative professionals to casual users.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                        <div className="mx-auto grid max-w-6xl items-start gap-8 py-12 lg:grid-cols-3 lg:gap-12">
                            {[
                                {
                                    step: "1",
                                    title: "Describe or Upload",
                                    description:
                                        "Either describe your vision in natural language or upload an existing image you want to transform.",
                                    delay: 200,
                                },
                                {
                                    step: "2",
                                    title: "Customize Settings",
                                    description:
                                        "Choose your preferred style, resolution, and other parameters to fine-tune the generation process.",
                                    delay: 400,
                                },
                                {
                                    step: "3",
                                    title: "Generate & Download",
                                    description:
                                        "Watch as our AI creates your unique visual content in seconds, then download in your preferred format.",
                                    delay: 600,
                                },
                            ].map((item, index) => (
                                <ScrollReveal key={index} delay={item.delay}>
                                    <div className="flex flex-col items-center space-y-4 text-center group hover-lift">
                                        <div className="relative">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-violet-400 text-primary-foreground font-bold text-xl animate-pulse-glow group-hover:scale-110 transition-transform">
                                                {item.step}
                                            </div>
                                            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping group-hover:animate-none"></div>
                                        </div>
                                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                                            {item.description}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mobile App Section */}
                <section id="mobile-app" className="w-full py-12 md:py-24 lg:py-32 relative">
                    <div className="container px-4 md:px-6">
                        <div className="grid items-center gap-8 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                            <ScrollReveal>
                                <div className="flex flex-col justify-center space-y-6">
                                    <div className="space-y-4">
                                        <Badge variant="secondary" className="animate-pulse-glow">
                                            <Smartphone className="mr-1 h-3 w-3" />
                                            Mobile App
                                        </Badge>
                                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-white bg-clip-text text-transparent">
                                            Create on the Go
                                        </h2>
                                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                            Take Chitra AI with you anywhere. Our mobile app brings the full power of AI
                                            image generation to your smartphone, with an intuitive touch interface
                                            designed for mobile creativity.
                                        </p>
                                    </div>
                                    <ul className="grid gap-3 py-4">
                                        {[
                                            "Offline generation capabilities",
                                            "Cloud sync across devices",
                                            "Social sharing features",
                                            "Camera integration",
                                        ].map((feature, index) => (
                                            <li key={index} className="flex items-center gap-3 group">
                                                <div className="h-2 w-2 rounded-full bg-primary animate-pulse group-hover:scale-150 transition-transform" />
                                                <span className="text-sm group-hover:text-primary transition-colors">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-col gap-3 min-[400px]:flex-row">
                                        <Button
                                            size="lg"
                                            className="h-12 hover-lift glow-border animate-gradient text-white"
                                        >
                                            <Download className="mr-2 h-4 w-4" />
                                            Download for iOS
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="h-12 hover-lift border-primary/20 hover:border-primary"
                                        >
                                            <Download className="mr-2 h-4 w-4" />
                                            Download for Android
                                        </Button>
                                    </div>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={300}>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-violet-400/20 rounded-2xl blur-3xl animate-pulse"></div>
                                    <Image
                                        src="/placeholder.svg?height=600&width=400"
                                        width={400}
                                        height={600}
                                        alt="Chitra AI Mobile App"
                                        className="mx-auto aspect-[2/3] overflow-hidden rounded-2xl object-cover hover-lift animate-float relative z-10"
                                    />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>
                    <div className="absolute -inset-[100px] bg-primary/5 animate-morph blur-3xl"></div>
                    <div className="container px-4 md:px-6 relative z-10">
                        <ScrollReveal>
                            <div className="flex flex-col items-center justify-center space-y-6 text-center">
                                <div className="space-y-4">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
                                        Ready to Create Amazing Visuals?
                                    </h2>
                                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Join thousands of creators who are already using Chitra AI to bring their ideas
                                        to life. Start your creative journey today.
                                    </p>
                                </div>
                                <div className="space-x-4">
                                    <Button
                                        size="lg"
                                        className="h-12 px-8 hover-lift glow-border animate-gradient text-white"
                                    >
                                        <Download className="mr-2 h-4 w-4" />
                                        Download for iOS
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="h-12 px-8 hover-lift border-primary/20 hover:border-primary"
                                    >
                                        <Download className="mr-2 h-4 w-4" />
                                        Download for Android
                                    </Button>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="flex flex-col gap-2 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t border-border/40 bg-card/20 backdrop-blur-sm relative z-20">
                <div className="flex items-center space-x-2">
                    <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                    <p className="text-xs text-muted-foreground">© 2024 Chitra AI. All rights reserved.</p>
                </div>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link
                        href="#"
                        className="text-xs hover:underline underline-offset-4 hover:text-primary transition-colors"
                    >
                        Terms of Service
                    </Link>
                    <Link
                        href="#"
                        className="text-xs hover:underline underline-offset-4 hover:text-primary transition-colors"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/delete-me"
                        className="text-xs hover:underline underline-offset-4 hover:text-primary transition-colors"
                    >
                        Delete Account
                    </Link>
                </nav>
            </footer>
        </div>
    );
}
