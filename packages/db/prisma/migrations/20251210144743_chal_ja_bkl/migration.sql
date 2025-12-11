-- CreateEnum
CREATE TYPE "WebsiteStatus" AS ENUM ('Up', 'Down', 'Unknown');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Website" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "timeAdded" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Website_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "websiteTick" (
    "id" TEXT NOT NULL,
    "response_time_ms" INTEGER NOT NULL,
    "timeAdded" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "status" "WebsiteStatus" NOT NULL,
    "region_id" TEXT NOT NULL,
    "website_id" TEXT NOT NULL,

    CONSTRAINT "websiteTick_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "websiteTick" ADD CONSTRAINT "websiteTick_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "websiteTick" ADD CONSTRAINT "websiteTick_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "websiteTick" ADD CONSTRAINT "websiteTick_website_id_fkey" FOREIGN KEY ("website_id") REFERENCES "Website"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
