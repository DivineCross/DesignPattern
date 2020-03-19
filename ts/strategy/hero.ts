import { ISkill } from './i-skill.js';

export class Hero {
    #skill: ISkill

    attack() {
        if (!this.#skill)
            return 'Normal Attack';

        return this.#skill.cast();
    }

    equipSkill(skill?: ISkill) {
        const s = skill
            ? skill
            : undefined;

        const name = (!s || !s.constructor)
            ? 'Nothing'
            : s.constructor.name;

        this.#skill = s;

        return name;
    }
}
