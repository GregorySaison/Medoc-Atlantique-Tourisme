import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class City extends Model {
    @Column
    name: string;

    @Column
    rate: number;
}