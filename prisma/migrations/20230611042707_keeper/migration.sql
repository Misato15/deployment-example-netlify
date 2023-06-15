-- CreateTable
CREATE TABLE "Keeper" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
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
    "gender" TEXT NOT NULL,
    "specie" TEXT NOT NULL,
    "photo_url" TEXT,
    "keeper_id" TEXT,
    CONSTRAINT "Animal_keeper_id_fkey" FOREIGN KEY ("keeper_id") REFERENCES "Keeper" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Animal" ("age", "color", "gender", "id", "name", "photo_url", "size", "specie") SELECT "age", "color", "gender", "id", "name", "photo_url", "size", "specie" FROM "Animal";
DROP TABLE "Animal";
ALTER TABLE "new_Animal" RENAME TO "Animal";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
