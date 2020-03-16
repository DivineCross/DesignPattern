import { ISkill } from './i-skill.js';

export class FireSkill implements ISkill {
    cast() {
        return 'Fire Blast';
    }
}
