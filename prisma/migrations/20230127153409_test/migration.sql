/*
  Warnings:

  - Added the required column `logo` to the `Collection` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "collectionId" TEXT NOT NULL,
    CONSTRAINT "Todo_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Collection" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "logo" TEXT NOT NULL
);
INSERT INTO "new_Collection" ("id", "name", "userId") SELECT "id", "name", "userId" FROM "Collection";
DROP TABLE "Collection";
ALTER TABLE "new_Collection" RENAME TO "Collection";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
