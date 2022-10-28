/*
  Warnings:

  - The primary key for the `Feature` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Feature` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Hero` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Hero` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `brandId` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `emailCollectingId` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `featuresId` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `heroId` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `pricingId` on the `Site` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[siteId]` on the table `Brand` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[siteId]` on the table `EmailCollecting` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[callToActionId]` on the table `EmailCollecting` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[featuresId]` on the table `Feature` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[siteId]` on the table `Features` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[siteId]` on the table `Hero` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[callToActionId]` on the table `Hero` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[callToActionId]` on the table `Plan` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[siteId]` on the table `Pricing` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `siteId` to the `Brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siteId` to the `EmailCollecting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siteId` to the `Features` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siteId` to the `Hero` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siteId` to the `Pricing` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Site" DROP CONSTRAINT "Site_brandId_fkey";

-- DropForeignKey
ALTER TABLE "Site" DROP CONSTRAINT "Site_emailCollectingId_fkey";

-- DropForeignKey
ALTER TABLE "Site" DROP CONSTRAINT "Site_featuresId_fkey";

-- DropForeignKey
ALTER TABLE "Site" DROP CONSTRAINT "Site_heroId_fkey";

-- DropForeignKey
ALTER TABLE "Site" DROP CONSTRAINT "Site_pricingId_fkey";

-- AlterTable
ALTER TABLE "Brand" ADD COLUMN     "siteId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "EmailCollecting" ADD COLUMN     "siteId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Feature_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Features" ADD COLUMN     "siteId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Hero" DROP CONSTRAINT "Hero_pkey",
ADD COLUMN     "siteId" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Hero_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Pricing" ADD COLUMN     "siteId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Site" DROP COLUMN "brandId",
DROP COLUMN "emailCollectingId",
DROP COLUMN "featuresId",
DROP COLUMN "heroId",
DROP COLUMN "pricingId";

-- CreateIndex
CREATE UNIQUE INDEX "Brand_siteId_key" ON "Brand"("siteId");

-- CreateIndex
CREATE UNIQUE INDEX "EmailCollecting_siteId_key" ON "EmailCollecting"("siteId");

-- CreateIndex
CREATE UNIQUE INDEX "EmailCollecting_callToActionId_key" ON "EmailCollecting"("callToActionId");

-- CreateIndex
CREATE UNIQUE INDEX "Feature_id_key" ON "Feature"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Feature_featuresId_key" ON "Feature"("featuresId");

-- CreateIndex
CREATE UNIQUE INDEX "Features_siteId_key" ON "Features"("siteId");

-- CreateIndex
CREATE UNIQUE INDEX "Hero_id_key" ON "Hero"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Hero_siteId_key" ON "Hero"("siteId");

-- CreateIndex
CREATE UNIQUE INDEX "Hero_callToActionId_key" ON "Hero"("callToActionId");

-- CreateIndex
CREATE UNIQUE INDEX "Plan_callToActionId_key" ON "Plan"("callToActionId");

-- CreateIndex
CREATE UNIQUE INDEX "Pricing_siteId_key" ON "Pricing"("siteId");

-- AddForeignKey
ALTER TABLE "Brand" ADD CONSTRAINT "Brand_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hero" ADD CONSTRAINT "Hero_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Features" ADD CONSTRAINT "Features_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pricing" ADD CONSTRAINT "Pricing_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailCollecting" ADD CONSTRAINT "EmailCollecting_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
