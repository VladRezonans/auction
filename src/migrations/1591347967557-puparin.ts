import {MigrationInterface, QueryRunner} from "typeorm";

export class puparin1591347967557 implements MigrationInterface {
    name = 'puparin1591347967557'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bid" ("id" SERIAL NOT NULL, "userId" character varying NOT NULL, "lotId" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL, "proposedPrice" integer NOT NULL DEFAULT 0, CONSTRAINT "PK_ed405dda320051aca2dcb1a50bb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b0f254bd6d29d3da2b6a8af262" ON "bid" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_03de8f257efea9dc91146efd78" ON "bid" ("lotId") `);
        await queryRunner.query(`CREATE TABLE "lot" ("id" SERIAL NOT NULL, "userId" character varying NOT NULL, "title" character varying NOT NULL, "image" character varying NOT NULL, "description" character varying NOT NULL, "status" integer NOT NULL DEFAULT 0, "createdAt" TIMESTAMP NOT NULL, "currentPrice" integer NOT NULL DEFAULT 0, "estimatedPrice" integer NOT NULL DEFAULT 0, "startAt" TIMESTAMP NOT NULL, "endAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_2ba293e2165c7b93cd766c8ac9b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d96dd0000fda7f9f94386e5b87" ON "lot" ("userId") `);
        await queryRunner.query(`CREATE TABLE "order" ("id" SERIAL NOT NULL, "userId" character varying NOT NULL, "lotId" character varying NOT NULL, "arrivalLocation" character varying NOT NULL, "arrivalType" integer NOT NULL DEFAULT 0, "status" integer NOT NULL DEFAULT 0, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_caabe91507b3379c7ba73637b8" ON "order" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6ff3196948003a5276c03d327f" ON "order" ("lotId") `);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "phone" integer NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "birthDay" TIMESTAMP NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP INDEX "IDX_6ff3196948003a5276c03d327f"`);
        await queryRunner.query(`DROP INDEX "IDX_caabe91507b3379c7ba73637b8"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP INDEX "IDX_d96dd0000fda7f9f94386e5b87"`);
        await queryRunner.query(`DROP TABLE "lot"`);
        await queryRunner.query(`DROP INDEX "IDX_03de8f257efea9dc91146efd78"`);
        await queryRunner.query(`DROP INDEX "IDX_b0f254bd6d29d3da2b6a8af262"`);
        await queryRunner.query(`DROP TABLE "bid"`);
    }

}
