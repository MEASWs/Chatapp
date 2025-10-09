import { MessageSquare } from "lucide-react";

const AuthImagePattern = ({ title, subtitle, titlesignup, titlesignin }) => {
    return (
        <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 bg-gradient-to-bl from-white/15 via-black/90 to-black/90 shadow-lg backdrop-blur-sm">
            <div className="max-w-md text-center">

                <div className="flex flex-col items-center gap-1 group mb-8">
                    <div className="flex items-center gap-3">

                        <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                            <MessageSquare className="w-5 h-5 text-primary" />
                        </div>
                        <h1 className="text-4xl font-bold py-6">appchat</h1>
                    </div>
                    <h2 className="text-2xl">{titlesignin}</h2>
                    <h2 className="text-2xl">{titlesignup}</h2>
                    <p className="text-base-content/60">{subtitle}</p>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-8">
                    {[...Array(9)].map((_, i) => (
                        <div
                            key={i}
                            className={`aspect-square rounded-2xl bg-primary/10 ${i % 2 === 0 ? "animate-pulse" : ""
                                }`}
                        />
                    ))}
                </div>
                <h2 className="text-2xl pb-2">{title}</h2>
            </div>
        </div>
    );
};

export default AuthImagePattern;