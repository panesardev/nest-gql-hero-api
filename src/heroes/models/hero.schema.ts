import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Hero } from './hero.object';

export type HeroDoc = Hero & Document;

@Schema()
export class HeroModel {
	@Prop({ required: true })
	heroId: string;

	@Prop({ required: true })
	name: string;
	
	@Prop({ required: true })
	health: number
}

export const HeroSchema = SchemaFactory.createForClass(HeroModel);
