-- CreateTable
CREATE TABLE "Site" (
    "id" TEXT NOT NULL DEFAULT 'uuid()',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Site_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CallToAction" (
    "id" TEXT NOT NULL DEFAULT 'uuid()',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "text" TEXT NOT NULL,
    "href" TEXT NOT NULL,

    CONSTRAINT "CallToAction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" TEXT NOT NULL DEFAULT 'uuid()',
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "favicon" TEXT NOT NULL,
    "siteId" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hero" (
    "id" TEXT NOT NULL DEFAULT 'uuid()',
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "background_image" TEXT NOT NULL,
    "siteId" TEXT NOT NULL,
    "callToActionId" TEXT NOT NULL,

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feature" (
    "id" TEXT NOT NULL DEFAULT 'uuid()',
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "featuresId" TEXT NOT NULL,

    CONSTRAINT "Feature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Features" (
    "id" TEXT NOT NULL DEFAULT 'uuid()',
    "title" TEXT NOT NULL,
    "siteId" TEXT NOT NULL,

    CONSTRAINT "Features_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pricing" (
    "id" TEXT NOT NULL DEFAULT 'uuid()',
    "title" TEXT NOT NULL,
    "siteId" TEXT NOT NULL,

    CONSTRAINT "Pricing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plan" (
    "id" TEXT NOT NULL DEFAULT 'uuid()',
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT[],
    "pricingId" TEXT NOT NULL,
    "callToActionId" TEXT NOT NULL,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailCollecting" (
    "id" TEXT NOT NULL DEFAULT 'uuid()',
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "siteId" TEXT NOT NULL,
    "callToActionId" TEXT NOT NULL,

    CONSTRAINT "EmailCollecting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Brand_siteId_key" ON "Brand"("siteId");

-- CreateIndex
CREATE UNIQUE INDEX "Hero_siteId_key" ON "Hero"("siteId");

-- CreateIndex
CREATE UNIQUE INDEX "Features_siteId_key" ON "Features"("siteId");

-- CreateIndex
CREATE UNIQUE INDEX "Pricing_siteId_key" ON "Pricing"("siteId");

-- CreateIndex
CREATE UNIQUE INDEX "Plan_pricingId_key" ON "Plan"("pricingId");

-- CreateIndex
CREATE UNIQUE INDEX "EmailCollecting_siteId_key" ON "EmailCollecting"("siteId");

-- AddForeignKey
ALTER TABLE "Brand" ADD CONSTRAINT "Brand_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hero" ADD CONSTRAINT "Hero_callToActionId_fkey" FOREIGN KEY ("callToActionId") REFERENCES "CallToAction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hero" ADD CONSTRAINT "Hero_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_featuresId_fkey" FOREIGN KEY ("featuresId") REFERENCES "Features"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Features" ADD CONSTRAINT "Features_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pricing" ADD CONSTRAINT "Pricing_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_callToActionId_fkey" FOREIGN KEY ("callToActionId") REFERENCES "CallToAction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_pricingId_fkey" FOREIGN KEY ("pricingId") REFERENCES "Pricing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailCollecting" ADD CONSTRAINT "EmailCollecting_callToActionId_fkey" FOREIGN KEY ("callToActionId") REFERENCES "CallToAction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailCollecting" ADD CONSTRAINT "EmailCollecting_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
