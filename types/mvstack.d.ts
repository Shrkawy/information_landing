declare type TSite = typeof INITIAL_SITE;

declare class SiteControllers {
  static async getOne(id: number): Promise<TSite>;
  static async getMany(): Promise<TSite[]>;
  static async update(id: number, site: any): Promise<TSite>;
  static async create(site: TSite): Promise<TSite>;
  static async deleteOne(id: number): Promise<TSite>;
}

export default SiteControllers;
