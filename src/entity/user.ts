import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  googleId: string

  @Column()
  username: string

  @Column()
  email: string

  @Column({ nullable: true })
  profile_pic_url?: string
}
