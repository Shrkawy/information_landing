/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Brand` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `CallToAction` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `EmailCollecting` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Feature` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Features` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Hero` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Plan` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Pricing` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Site` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Brand_id_key" ON "Brand"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CallToAction_id_key" ON "CallToAction"("id");

-- CreateIndex
CREATE UNIQUE INDEX "EmailCollecting_id_key" ON "EmailCollecting"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Feature_id_key" ON "Feature"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Features_id_key" ON "Features"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Hero_id_key" ON "Hero"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Plan_id_key" ON "Plan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Pricing_id_key" ON "Pricing"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Site_id_key" ON "Site"("id");
