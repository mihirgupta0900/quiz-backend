import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1613915626267 implements MigrationInterface {
    name = 'Init1613915626267'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "googleId" character varying NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "profile_pic_url" character varying, CONSTRAINT "UQ_470355432cc67b2c470c30bef7c" UNIQUE ("googleId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
