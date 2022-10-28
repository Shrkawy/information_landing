/*
  Warnings:

  - The primary key for the `Site` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `Site` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Site" DROP CONSTRAINT "Site_pkey",
ALTER COLUMN "id" SET DEFAULT 'uuid()',
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Site_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Site_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Site_id_key" ON "Site"("id");
