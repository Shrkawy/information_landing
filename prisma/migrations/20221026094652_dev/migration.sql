/*
  Warnings:

  - The primary key for the `Brand` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `CallToAction` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `EmailCollecting` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Feature` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Features` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Hero` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Plan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Pricing` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "EmailCollecting" DROP CONSTRAINT "EmailCollecting_callToActionId_fkey";

-- DropForeignKey
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_featuresId_fkey";

-- DropForeignKey
ALTER TABLE "Hero" DROP CONSTRAINT "Hero_callToActionId_fkey";

-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_callToActionId_fkey";

-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_pricingId_fkey";

-- DropIndex
DROP INDEX "EmailCollecting_callToActionId_key";

-- DropIndex
DROP INDEX "Feature_featuresId_key";

-- DropIndex
DROP INDEX "Hero_callToActionId_key";

-- DropIndex
DROP INDEX "Plan_callToActionId_key";

-- AlterTable
ALTER TABLE "Brand" DROP CONSTRAINT "Brand_pkey",
ALTER COLUMN "id" SET DEFAULT 'uuid()',
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Brand_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Brand_id_seq";

-- AlterTable
ALTER TABLE "CallToAction" DROP CONSTRAINT "CallToAction_pkey",
ALTER COLUMN "id" SET DEFAULT 'uuid()',
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "CallToAction_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "CallToAction_id_seq";

-- AlterTable
ALTER TABLE "EmailCollecting" DROP CONSTRAINT "EmailCollecting_pkey",
ALTER COLUMN "id" SET DEFAULT 'uuid()',
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "callToActionId" SET DATA TYPE TEXT,
ADD CONSTRAINT "EmailCollecting_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "EmailCollecting_id_seq";

-- AlterTable
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_pkey",
ALTER COLUMN "featuresId" SET DATA TYPE TEXT,
ALTER COLUMN "id" SET DEFAULT 'uuid()',
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Feature_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Feature_id_seq";

-- AlterTable
ALTER TABLE "Features" DROP CONSTRAINT "Features_pkey",
ALTER COLUMN "id" SET DEFAULT 'uuid()',
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Features_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Features_id_seq";

-- AlterTable
ALTER TABLE "Hero" DROP CONSTRAINT "Hero_pkey",
ALTER COLUMN "callToActionId" SET DATA TYPE TEXT,
ALTER COLUMN "id" SET DEFAULT 'uuid()',
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Hero_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Hero_id_seq";

-- AlterTable
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_pkey",
ALTER COLUMN "id" SET DEFAULT 'uuid()',
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "pricingId" SET DATA TYPE TEXT,
ALTER COLUMN "callToActionId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Plan_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Plan_id_seq";

-- AlterTable
ALTER TABLE "Pricing" DROP CONSTRAINT "Pricing_pkey",
ALTER COLUMN "id" SET DEFAULT 'uuid()',
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Pricing_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Pricing_id_seq";

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
