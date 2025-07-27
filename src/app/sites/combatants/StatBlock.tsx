import { Ability } from "@/app/constants/Ability";
import { ATTRIBUTE } from "@/app/constants/enums/Attribute";
import { CONDITION } from "@/app/constants/enums/Condition";
import { DAMAGE_TYPE } from "@/app/constants/enums/DamageType";
import { LANGUAGE } from "@/app/constants/enums/Language";
import { SENSE } from "@/app/constants/enums/Sense";
import { SKILL } from "@/app/constants/enums/Skill";
import { SpeedType } from "@/app/constants/enums/SpeedType";
import { Spell } from "@/app/constants/Spell";

interface StatBlockProps {
    name: string;
    cr: number;
    size: string;
    type?: string;
    subtype?: string;
    alignment?: string;
    ac: number;
    acDescription?: string;
    hp: number;
    hitDice?: string;
    speed: {type: SpeedType; value: number}[];
    stats: Record<ATTRIBUTE, number>;
    saves: Record<ATTRIBUTE, number>;
    skills: Record<SKILL, number>;
    vulnerabilities?: DAMAGE_TYPE[];
    resistances?: DAMAGE_TYPE[];
    immunities?: DAMAGE_TYPE[];
    conditionImmunities?: CONDITION[];
    senses: SENSE[];
    languages: LANGUAGE[];
    traits?: Ability[];
    actions?: Ability[];
    bonusActions?: Ability[];
    reactions?: Ability[];
    legendaryActions?: Ability[];
    spells?: Spell[]
}

export default function StatBlock() {

} 