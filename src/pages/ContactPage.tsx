import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CustomPageLoader from "@/components/CustomPageLoader";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";

const ContactPage = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "ubaidsheikh800@gmail.com";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [focused, setFocused] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            toast.error("Please fill in all fields");
            return;
        }

        setIsSubmitting(true);

        try {
            // EmailJS configuration from environment variables
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            // Debug: Check if env variables are loaded
            console.log("EmailJS Config:", { serviceId, templateId, publicKey });

            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EmailJS credentials not found. Please check your .env file.");
            }

            // Initialize EmailJS with public key
            emailjs.init(publicKey);

            // Template parameters - match your EmailJS template exactly
            const templateParams = {
                name: formData.name,              // {{name}} in template
                email: formData.email,             // {{email}} in template
                from_email: formData.email,       // {{from_email}} in template
                title: formData.subject,          // {{title}} in template
                message: formData.message,        // {{message}} in template
                to_email: import.meta.env.VITE_RECIPIENT_EMAIL,
            };

            console.log("Sending email with params:", templateParams);

            // Send email using EmailJS
            const result = await emailjs.send(
                serviceId,
                templateId,
                templateParams
            );

            console.log("EmailJS Response:", result);

            if (result.status === 200) {
                setIsSuccess(true);
                toast.success("Message sent successfully! I'll get back to you soon.", {
                    duration: 5000,
                });

                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });

                // Reset success state after 3 seconds
                setTimeout(() => {
                    setIsSuccess(false);
                }, 3000);
            }
        } catch (error: any) {
            console.error("EmailJS Error Details:", error);
            console.error("Error text:", error?.text);
            console.error("Error status:", error?.status);

            let errorMessage = "Failed to send message. ";

            if (error?.text?.includes("blocked")) {
                errorMessage += "Please disable your ad blocker and try again.";
            } else if (error?.status === 400) {
                errorMessage += "Template configuration error. Please check EmailJS dashboard.";
            } else {
                errorMessage += "Please try again or email me directly.";
            }

            toast.error(errorMessage, {
                duration: 5000,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Location",
            value: "Islamabad, Pakistan",
            link: null,
        },
        {
            icon: Mail,
            title: "Email",
            value: contactEmail,
            link: `mailto:${contactEmail}`,
        },
        {
            icon: Phone,
            title: "Phone",
            value: "+92 321 9509045",
            link: "tel:+923219509045",
        },
    ];

    return (
        <main className="min-h-screen bg-background relative">
            <Toaster position="top-right" richColors />
            <CustomPageLoader pageName="Contact" />
            <Navigation />
            <PageHero
                title="Get In Touch"
                subtitle="Have a project in mind? Let's work together to bring your ideas to life"
            />

            <div className="relative z-10">
                {/* Contact Section */}
                <section className="py-20 px-6">
                    <div className="container max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-5 gap-12">
                            {/* Contact Info - Left Side */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="lg:col-span-2 space-y-8"
                            >
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">Let's talk about everything!</h2>
                                    <p className="text-muted-foreground">
                                        Don't like forms? Send me an{" "}
                                        <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">
                                            email
                                        </a>
                                        . 👋
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {contactInfo.map((item, index) => (
                                        <motion.div
                                            key={item.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-start gap-4"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0">
                                                <item.icon className="text-primary" size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                                                {item.link ? (
                                                    <a
                                                        href={item.link}
                                                        className="font-medium hover:text-primary transition-colors"
                                                    >
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="font-medium">{item.value}</p>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Map */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="rounded-2xl overflow-hidden border border-border h-[300px] mt-8"
                                >
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.5484487598!2d72.8088599!3d33.6144394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Location Map"
                                    />
                                </motion.div>
                            </motion.div>

                            {/* Contact Form - Right Side */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="lg:col-span-3"
                            >
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        {/* Name Input */}
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                onFocus={() => setFocused("name")}
                                                onBlur={() => setFocused(null)}
                                                required
                                                className="peer w-full px-0 py-3 bg-transparent border-0 border-b-2 border-border focus:border-primary focus:outline-none transition-colors placeholder-transparent"
                                                placeholder="Your Name"
                                            />
                                            <label
                                                htmlFor="name"
                                                className={`absolute left-0 -top-3.5 text-sm transition-all ${focused === "name" || formData.name
                                                    ? "text-primary"
                                                    : "text-muted-foreground"
                                                    } peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary`}
                                            >
                                                Your Name
                                            </label>
                                        </div>

                                        {/* Email Input */}
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                onFocus={() => setFocused("email")}
                                                onBlur={() => setFocused(null)}
                                                required
                                                className="peer w-full px-0 py-3 bg-transparent border-0 border-b-2 border-border focus:border-primary focus:outline-none transition-colors placeholder-transparent"
                                                placeholder="Email Address"
                                            />
                                            <label
                                                htmlFor="email"
                                                className={`absolute left-0 -top-3.5 text-sm transition-all ${focused === "email" || formData.email
                                                    ? "text-primary"
                                                    : "text-muted-foreground"
                                                    } peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary`}
                                            >
                                                Email Address
                                            </label>
                                        </div>
                                    </div>

                                    {/* Subject Input */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            onFocus={() => setFocused("subject")}
                                            onBlur={() => setFocused(null)}
                                            required
                                            className="peer w-full px-0 py-3 bg-transparent border-0 border-b-2 border-border focus:border-primary focus:outline-none transition-colors placeholder-transparent"
                                            placeholder="Subject"
                                        />
                                        <label
                                            htmlFor="subject"
                                            className={`absolute left-0 -top-3.5 text-sm transition-all ${focused === "subject" || formData.subject
                                                ? "text-primary"
                                                : "text-muted-foreground"
                                                } peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary`}
                                        >
                                            Subject
                                        </label>
                                    </div>

                                    {/* Message Textarea */}
                                    <div className="relative">
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            onFocus={() => setFocused("message")}
                                            onBlur={() => setFocused(null)}
                                            required
                                            rows={6}
                                            className="peer w-full px-0 py-3 bg-transparent border-0 border-b-2 border-border focus:border-primary focus:outline-none transition-colors resize-none placeholder-transparent"
                                            placeholder="Your Message"
                                        />
                                        <label
                                            htmlFor="message"
                                            className={`absolute left-0 -top-3.5 text-sm transition-all ${focused === "message" || formData.message
                                                ? "text-primary"
                                                : "text-muted-foreground"
                                                } peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary`}
                                        >
                                            Your Message
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium overflow-hidden transition-all ${isSubmitting || isSuccess
                                            ? "bg-primary/70 cursor-not-allowed"
                                            : "bg-primary hover:shadow-lg hover:shadow-primary/20"
                                            } text-primary-foreground`}
                                        whileHover={!isSubmitting && !isSuccess ? { scale: 1.02 } : {}}
                                        whileTap={!isSubmitting && !isSuccess ? { scale: 0.98 } : {}}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="relative z-10 animate-spin" size={18} />
                                                <span className="relative z-10">Sending...</span>
                                            </>
                                        ) : isSuccess ? (
                                            <>
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ type: "spring", stiffness: 200 }}
                                                >
                                                    <CheckCircle2 className="relative z-10" size={18} />
                                                </motion.div>
                                                <span className="relative z-10">Sent!</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="relative z-10">Send Message</span>
                                                <Send className="relative z-10 group-hover:translate-x-1 transition-transform" size={18} />
                                            </>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary bg-[length:200%_100%] group-hover:bg-[position:100%_0] transition-all duration-500" />
                                    </motion.button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
            <ScrollToTop />
        </main>
    );
};

export default ContactPage;
