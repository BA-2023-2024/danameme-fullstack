import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata = {
    title: "DANAMEME",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="de">
            <body className="bg-background flex min-h-screen flex-col items-center">
                <Navigation />
                <main className="justify-center mx-auto container max-w-xl">
                    <div className="mx-auto">{children}</div>
                </main>
            </body>
        </html>
    );
}
