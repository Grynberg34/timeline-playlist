import type { Metadata } from "next";
import "../styles/global.scss";
import Provider from "@/store/provider";

export const metadata: Metadata = {
  title: "The Timeline Playlist",
  description: "The Timeline Playlist curates one song for each year within a chosen range, filtered by genre and popularity. ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}