import prisma from "./prisma";
import INITIAL_SITE from "data/form_initial_data.json";

export type SiteData = typeof INITIAL_SITE;

class SiteControllers {
  static async getOne(id: number) {
    const site = await prisma.site.findUnique({
      where: { id },
    });

    if (!site) {
      throw new Error("Site not found");
    }

    return site;
  }

  static async getMany() {
    const sites = await prisma.site.findMany();
    return sites;
  }

  static async update(id: number, site: any) {
    const updatedSite = await prisma.site.update({
      where: { id },
      data: {
        data: {
          ...site,
        },
      },
    });
    return updatedSite;
  }

  static async create(site: SiteData) {
    const newSite = await prisma.site.create({
      data: {
        data: {
          ...site,
        },
      },
    });
    return newSite;
  }

  static async deleteOne(id: number) {
    const deletedSite = await prisma.site.delete({
      where: { id },
    });
    return deletedSite;
  }
}

export default SiteControllers;
