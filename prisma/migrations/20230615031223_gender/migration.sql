/*
  Warnings:

  - You are about to drop the column `gender` on the `Animal` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Gender" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "gender" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Animal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "gender_id" TEXT,
    "specie" TEXT NOT NULL,
    "photo_url" TEXT,
    "keeper_id" TEXT,
    CONSTRAINT "Animal_gender_id_fkey" FOREIGN KEY ("gender_id") REFERENCES "Gender" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Animal_keeper_id_fkey" FOREIGN KEY ("keeper_id") REFERENCES "Keeper" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Animal" ("age", "color", "id", "keeper_id", "name", "photo_url", "size", "specie") SELECT "age", "color", "id", "keeper_id", "name", "photo_url", "size", "specie" FROM "Animal";
DROP TABLE "Animal";
ALTER TABLE "new_Animal" RENAME TO "Animal";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
