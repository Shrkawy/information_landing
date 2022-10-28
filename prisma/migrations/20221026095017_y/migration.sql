/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the `Brand` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CallToAction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EmailCollecting` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Feature` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Features` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Hero` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Plan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pricing` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `data` to the `Site` table without a default value. This is not possible if the table is not empty.

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
DROP INDEX "Site_id_key";

-- AlterTable
ALTER TABLE "Site" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "data" JSONB NOT NULL;

-- DropTable
DROP TABLE "Brand";

-- DropTable
DROP TABLE "CallToAction";

-- DropTable
DROP TABLE "EmailCollecting";

-- DropTable
DROP TABLE "Feature";

-- DropTable
DROP TABLE "Features";

-- DropTable
DROP TABLE "Hero";

-- DropTable
DROP TABLE "Plan";

-- DropTable
DROP TABLE "Pricing";
