/*
  Warnings:

  - You are about to drop the column `timeAdded` on the `websiteTick` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `websiteTick` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `Region` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "websiteTick" DROP CONSTRAINT "websiteTick_user_id_fkey";

-- AlterTable
ALTER TABLE "Region" ADD COLUMN     "timeAdded" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Website" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "websiteTick" DROP COLUMN "timeAdded",
DROP COLUMN "user_id";

-- AddForeignKey
ALTER TABLE "Website" ADD CONSTRAINT "Website_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Region" ADD CONSTRAINT "Region_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
