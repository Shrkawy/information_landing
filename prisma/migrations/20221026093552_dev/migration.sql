/*
  Warnings:

  - The primary key for the `Brand` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `siteId` on the `Brand` table. All the data in the column will be lost.
  - The `id` column on the `Brand` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `CallToAction` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `CallToAction` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `EmailCollecting` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `siteId` on the `EmailCollecting` table. All the data in the column will be lost.
  - The `id` column on the `EmailCollecting` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Features` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `siteId` on the `Features` table. All the data in the column will be lost.
  - The `id` column on the `Features` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `siteId` on the `Hero` table. All the data in the column will be lost.
  - The primary key for the `Plan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Plan` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Pricing` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `siteId` on the `Pricing` table. All the data in the column will be lost.
  - The `id` column on the `Pricing` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Site` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Site` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `callToActionId` on the `EmailCollecting` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `featuresId` on the `Feature` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `callToActionId` on the `Hero` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `pricingId` on the `Plan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `callToActionId` on the `Plan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Brand" DROP CONSTRAINT "Brand_siteId_fkey";

-- DropForeignKey
ALTER TABLE "EmailCollecting" DROP CONSTRAINT "EmailCollecting_callToActionId_fkey";

-- DropForeignKey
ALTER TABLE "EmailCollecting" DROP CONSTRAINT "EmailCollecting_siteId_fkey";

-- DropForeignKey
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_featuresId_fkey";

-- DropForeignKey
ALTER TABLE "Features" DROP CONSTRAINT "Features_siteId_fkey";

-- DropForeignKey
ALTER TABLE "Hero" DROP CONSTRAINT "Hero_callToActionId_fkey";

-- DropForeignKey
ALTER TABLE "Hero" DROP CONSTRAINT "Hero_siteId_fkey";

-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_callToActionId_fkey";

-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_pricingId_fkey";

-- DropForeignKey
ALTER TABLE "Pricing" DROP CONSTRAINT "Pricing_siteId_fkey";

-- DropIndex
DROP INDEX "Brand_siteId_key";

-- DropIndex
DROP INDEX "EmailCollecting_siteId_key";

-- DropIndex
DROP INDEX "Features_siteId_key";

-- DropIndex
DROP INDEX "Hero_siteId_key";

-- DropIndex
DROP INDEX "Pricing_siteId_key";

-- AlterTable
ALTER TABLE "Brand" DROP CONSTRAINT "Brand_pkey",
DROP COLUMN "siteId",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Brand_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "CallToAction" DROP CONSTRAINT "CallToAction_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "CallToAction_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "EmailCollecting" DROP CONSTRAINT "EmailCollecting_pkey",
DROP COLUMN "siteId",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "callToActionId",
ADD COLUMN     "callToActionId" INTEGER NOT NULL,
ADD CONSTRAINT "EmailCollecting_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Feature" ALTER COLUMN "id" DROP DEFAULT,
DROP COLUMN "featuresId",
ADD COLUMN     "featuresId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Features" DROP CONSTRAINT "Features_pkey",
DROP COLUMN "siteId",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Features_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Hero" DROP COLUMN "siteId",
DROP COLUMN "callToActionId",
ADD COLUMN     "callToActionId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "pricingId",
ADD COLUMN     "pricingId" INTEGER NOT NULL,
DROP COLUMN "callToActionId",
ADD COLUMN     "callToActionId" INTEGER NOT NULL,
ADD CONSTRAINT "Plan_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Pricing" DROP CONSTRAINT "Pricing_pkey",
DROP COLUMN "siteId",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Pricing_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Site" DROP CONSTRAINT "Site_pkey",
ADD COLUMN     "brandId" INTEGER,
ADD COLUMN     "emailCollectingId" INTEGER,
ADD COLUMN     "featuresId" INTEGER,
ADD COLUMN     "heroId" TEXT,
ADD COLUMN     "pricingId" INTEGER,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Site_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_id_key" ON "Brand"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CallToAction_id_key" ON "CallToAction"("id");

-- CreateIndex
CREATE UNIQUE INDEX "EmailCollecting_id_key" ON "EmailCollecting"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Features_id_key" ON "Features"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Plan_id_key" ON "Plan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Plan_pricingId_key" ON "Plan"("pricingId");

-- CreateIndex
CREATE UNIQUE INDEX "Pricing_id_key" ON "Pricing"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Site_id_key" ON "Site"("id");

-- AddForeignKey
ALTER TABLE "Site" ADD CONSTRAINT "Site_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Site" ADD CONSTRAINT "Site_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "Hero"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Site" ADD CONSTRAINT "Site_featuresId_fkey" FOREIGN KEY ("featuresId") REFERENCES "Features"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Site" ADD CONSTRAINT "Site_pricingId_fkey" FOREIGN KEY ("pricingId") REFERENCES "Pricing"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Site" ADD CONSTRAINT "Site_emailCollectingId_fkey" FOREIGN KEY ("emailCollectingId") REFERENCES "EmailCollecting"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hero" ADD CONSTRAINT "Hero_callToActionId_fkey" FOREIGN KEY ("callToActionId") REFERENCES "CallToAction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_featuresId_fkey" FOREIGN KEY ("featuresId") REFERENCES "Features"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_callToActionId_fkey" FOREIGN KEY ("callToActionId") REFERENCES "CallToAction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_pricingId_fkey" FOREIGN KEY ("pricingId") REFERENCES "Pricing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailCollecting" ADD CONSTRAINT "EmailCollecting_callToActionId_fkey" FOREIGN KEY ("callToActionId") REFERENCES "CallToAction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
