import { ContentfulPreviewProvider } from "@/components/contentful-preview-provider";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.css";

export const metadata = {
  title: "Live Preview Example",
};

export default function RootLayout({ children }) {
  const linkClassname =
    "whitespace-nowrap mr-2 py-2 px-4 cursor-pointer rounded-xl bg-yellow-300 hover:bg-yellow-500";

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="bg-blue-200 w-full">
          <div className="flex flex-row px-4 md:px-20 lg:px-40 py-10">
          </div>
        </div>

        <ContentfulPreviewProvider locale="en-US">
          {children}
        </ContentfulPreviewProvider>
        <div>
          <div className="bg-blue-200 w-full py-20 text-center"></div>
        </div>
      </body>
    </html>
  );
}
