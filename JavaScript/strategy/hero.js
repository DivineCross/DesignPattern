import { ISkill } from './i-skill.js';

export class Hero {
    /** @type { ISkill } */
    #skill

    attack() {
        if (!this.#skill)
            return 'Normal Attack';

        return this.#skill.cast();
    }

    equipSkill(skill) {
        const s = skill instanceof ISkill && skill.constructor !== ISkill
            ? skill
            : undefined;

        const name = (!s || !s.constructor)
            ? 'Nothing'
            : s.constructor.name;

        this.#skill = s;

        return name;
    }
}
