-- CreateTable
CREATE TABLE "admin_credentials" (
    "id" SERIAL NOT NULL,
    "hash1" TEXT NOT NULL,
    "hash2" TEXT NOT NULL,

    CONSTRAINT "admin_credentials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grid_posts" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "publication_date" TIMESTAMP(6) NOT NULL,
    "tags" TEXT[],
    "recent" BOOLEAN NOT NULL,
    "banner_url" TEXT,
    "path_id" TEXT NOT NULL,

    CONSTRAINT "grid_posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "json_posts" (
    "id" SERIAL NOT NULL,
    "grid_posts_id" INTEGER NOT NULL,
    "post_title" TEXT NOT NULL,
    "grid_post_path_id" TEXT NOT NULL,
    "post_data" JSONB NOT NULL,

    CONSTRAINT "json_posts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "grid_posts_path_id_key" ON "grid_posts"("path_id");

-- CreateIndex
CREATE UNIQUE INDEX "json_posts_grid_post_path_id_key" ON "json_posts"("grid_post_path_id");

-- AddForeignKey
ALTER TABLE "json_posts" ADD CONSTRAINT "json_posts_grid_posts_id_fkey" FOREIGN KEY ("grid_posts_id") REFERENCES "grid_posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

