import Header from "@/Next/Components/Header/Header"
import type { headerDataInterface, NextMedia } from "@/nextjs-interfaces";
import type { SiteBranding } from "@/payload-types";
import { getCachedDocument } from "@/utilities/getDocument";
import { getCachedGlobal } from "@/utilities/getGlobals";
import React from "react"
import '../style.css'
import type { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  const Branding: SiteBranding = (await getCachedGlobal('site-branding')()) as SiteBranding;
 
  return {
    title: Branding.title,
    description: Branding.tagline
  }
}

export default async function WebsiteLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {

  const Branding: SiteBranding = (await getCachedGlobal('site-branding')()) as SiteBranding;
  const logoId:any = Branding.logo;
  const logoDarkId:any = Branding.logoDark;
  const faviconId:any = Branding.favicon;
  const Logo = (await getCachedDocument('media', logoId, 'id')()) as NextMedia;
  const LogoDark = (await getCachedDocument('media', logoDarkId, 'id')()) as NextMedia;
  const Favicon = (await getCachedDocument('media', faviconId, 'id')()) as NextMedia;

  const headerData:headerDataInterface = {
    title: Branding?.title,
    logo: Logo,
    LogoDark: LogoDark,
    Favicon: Favicon
  }
  // const Logo = await getCachedDocument('media', '6717aa848ff7e8e88b33e136')

  // console.log('logo: ', Logo)

  // console.log('branding: ', Logo, JSON.stringify(Branding))

  return (
    <html lang="en">
      <body>
        <Header data={headerData} />
        <main>{children}</main>
      </body>
    </html>
  )
}