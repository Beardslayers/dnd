function search_all(terms) {
    if (terms.length == 0) {
        var results_elem = document.getElementById('search_results');
        console.log(results_elem);
        results_elem.innerHTML = "";
        return;
    }
    var search = terms.toLowerCase();
    var classes = [
        ["Artificer", "/Classes/Artificer/Artificer.html"],
        ["Barbarian", "/Classes/Barbarian/Barbarian.html"],
        ["Bard", "/Classes/Bard/Bard.html"],
        ["Cleric", "/Classes/Cleric/Cleric.html"],
        ["Druid", "/Classes/Druid/Druid.html"],
        ["Fighter", "/Classes/Fighter/Fighter.html"],
        ["Monk", "/Classes/Monk/Monk.html"],
        ["Paladin", "/Classes/Paladin/Paladin.html"],
        ["Ranger", "/Classes/Ranger/Ranger.html"],
        ["Rogue", "/Classes/Rogue/Rogue.html"],
        ["Sorcerer", "/Classes/Sorcerer/Sorcerer.html"],
        ["Warlock", "/Classes/Warlock/Warlock.html"],
        ["Wizard", "/Classes/Wizard.html"],
    ]
    var artificer_features = [
        "Spellcasting",
    ]
    var barbarian_features = [
        ["Rage — Barbarian", "/Classes/Barbarian/Barbarian.html#rage"],
        ["Unarmored Defense — Barbarian", "/Classes/Barbarian/Barbarian.html#unarmored_defense"],
        ["Reckless Attack — Barbarian", "/Classes/Barbarian/Barbarian.html#reckless_attack"],
        ["Danger Sense — Barbarian", "/Classes/Barbarian/Barbarian.html#danger_sense"],
        ["Primal Path — Barbarian", "/Classes/Barbarian/Barbarian.html#primal_path"],
        ["Primal Knowledge — Barbarian", "/Classes/Barbarian/Barbarian.html#primal_knowledge"],
        ["Ability Score Improvement — Barbarian", "/Classes/Barbarian/Barbarian.html#ability_score_improvement"],
        ["Extra Attack — Barbarian", "/Classes/Barbarian/Barbarian.html#extra_attack"],
        ["Fast Movement — Barbarian", "/Classes/Barbarian/Barbarian.html#fast_movement"],
        ["Feral Instinct — Barbarian", "/Classes/Barbarian/Barbarian.html#feral_instinct"],
        ["Instinctive Pounce — Barbarian", "/Classes/Barbarian/Barbarian.html#instinctive_pounce"],
        ["Instinctive Critical — Barbarian", "/Classes/Barbarian/Barbarian.html#instinctive_critical"],
        ["Relentless Rage — Barbarian", "/Classes/Barbarian/Barbarian.html#relentless_rage"],
        ["Mighty Critical — Barbarian", "/Classes/Barbarian/Barbarian.html#mighty_critical"],
        ["Persistent Rage — Barbarian", "/Classes/Barbarian/Barbarian.html#persistent_rage"],
        ["Brutal Critical — Barbarian", "/Classes/Barbarian/Barbarian.html#brutal_critical"],
        ["Indomitable Might — Barbarian", "/Classes/Barbarian/Barbarian.html#indomitable_might"],
        ["Primal Champion — Barbarian", "/Classes/Barbarian/Barbarian.html#primal_champion"],
    ]
    var bard_features = [
        ["Spellcasting — Bard", "/Classes/Bard/Bard.html#spellcasting"],
        ["Bardic Inspiration — Bard", "/Classes/Bard/Bard.html#bardic_inspiration"],
        ["Jack of All Trades — Bard", "/Classes/Bard/Bard.html#jack_of_all_trades"],
        ["Song of Rest — Bard", "/Classes/Bard/Bard.html#song_of_rest"],
        ["Magical Inspiration — Bard", "/Classes/Bard/Bard.html#magical_inspiration"],
        ["Bard College — Bard", "/Classes/Bard/Bard.html#bard_college"],
        ["Expertise — Bard", "/Classes/Bard/Bard.html#expertise"],
        ["Ability Score Improvement — Bard", "/Classes/Bard/Bard.html#ability_score_improvement"],
        ["Font of Inspiration — Bard", "/Classes/Bard/Bard.html#font_of_inspiration"],
        ["Countercharm — Bard", "/Classes/Bard/Bard.html#countercharm"],
        ["Magical Secrets — Bard", "/Classes/Bard/Bard.html#magical_secrets"],
        ["Transcendent Artist — Bard", "/Classes/Bard/Bard.html#transcendent_artist"],
    ]
    var cleric_features = [
        ["Spellcasting — Cleric", "/Classes/Cleric/Cleric.html#spellcasting"],
        ["Divine Domain — Cleric", "/Classes/Cleric/Cleric.html#divine_domain"],
        ["Channel Divinity — Cleric", "/Classes/Cleric/Cleric.html#channel_divinity"],
        ["Ability Score Improvement — Cleric", "/Classes/Cleric/Cleric.html#ability_score_improvement"],
        ["Destroy Undead — Cleric", "/Classes/Cleric/Cleric.html#destroy_undead"],
        ["Divine Combat — Cleric", "/Classes/Cleric/Cleric.html#divine_combat"],
        ["Divine Intervention — Cleric", "/Classes/Cleric/Cleric.html#divine_intervention"],
        ["Improved Divine Combat — Cleric", "/Classes/Cleric/Cleric.html#improved_divine_combat"],
        ["Exalted Priest — Cleric", "/Classes/Cleric/Cleric.html#exalted_priest"],
    ]
    var druid_features = [
        ["Druidic — Druid", "/Classes/Druid/Druid.html#druidic"],
        ["Spellcasting — Druid", "/Classes/Druid/Druid.html#spellcasting"],
        ["Wild Shape — Druid", "/Classes/Druid/Druid.html#wild_shape"],
        ["Druid Circle — Druid", "/Classes/Druid/Druid.html#druid_circle"],
        ["Wild Companion — Druid", "/Classes/Druid/Druid.html#wild_companion"],
        ["Ability Score Improvement — Druid", "/Classes/Druid/Druid.html#ability_score_improvement"],
        ["Timeless Body — Druid", "/Classes/Druid/Druid.html#timeless_body"],
        ["Beast Spells — Druid", "/Classes/Druid/Druid.html#beast_spells"],
        ["Archdruid — Druid", "/Classes/Druid/Druid.html#archdruid"],
    ]
    var fighter_features = [
        ["Fighting Style — Fighter", "/Classes/Fighter/Fighter.html#fighting_style"],
        ["Second Wind — Fighter", "/Classes/Fighter/Fighter.html#second_wind"],
        ["Action Surge — Fighter", "/Classes/Fighter/Fighter.html#action_surge"],
        ["Martial Archetype — Fighter", "/Classes/Fighter/Fighter.html#martial_archetype"],
        ["Ability Score Improvement — Fighter", "/Classes/Fighter/Fighter.html#ability_score_improvement"],
        ["Extra Attack — Fighter", "/Classes/Fighter/Fighter.html#extra_attack"],
        ["Indomitable — Fighter", "/Classes/Fighter/Fighter.html#indomitable"],
        ["Battlefield Hero — Fighter", "/Classes/Fighter/Fighter.html#battlefield_hero"],
    ]
    var monk_features = [
        ["Dexterous Combat — Monk", "/Classes/Monk/Monk.html#dexterous_combat"],
        ["Unarmored Defense — Monk", "/Classes/Monk/Monk.html#unarmored_defense"],
        ["Martial Arts — Monk", "/Classes/Monk/Monk.html#martial_arts"],
        ["Unarmored Movement — Monk", "/Classes/Monk/Monk.html#unarmored_movement"],
        ["Energy Points — Monk", "/Classes/Monk/Monk.html#energy_points"],
        ["Flurry of Blows — Monk", "/Classes/Monk/Monk.html#flurry_of_blows"],
        ["Deflect Attacks — Monk", "/Classes/Monk/Monk.html#deflect_attacks"],
        ["Monastic Tradition — Monk", "/Classes/Monk/Monk.html#monastic_tradition"],
        ["Slow Fall — Monk", "/Classes/Monk/Monk.html#slow_fall"],
        ["Ability Score Improvement — Monk", "/Classes/Monk/Monk.html#ability_score_improvement"],
        ["Extra Attack — Monk", "/Classes/Monk/Monk.html#extra_attack"],
        ["Stunning Strike — Monk", "/Classes/Monk/Monk.html#stunning_strike"],
        ["Energy Strikes — Monk", "/Classes/Monk/Monk.html#energy_strikes"],
        ["Evasion — Monk", "/Classes/Monk/Monk.html#evasion"],
        ["Iron Will — Monk", "/Classes/Monk/Monk.html#iron_will"],
        ["Perfect Deflection — Monk", "/Classes/Monk/Monk.html#perfect_deflection"],
        ["Step of the Wind — Monk", "/Classes/Monk/Monk.html#step_of_the_wind"],
        ["Focused Aim — Monk", "/Classes/Monk/Monk.html#focused_aim"],
        ["Universal Mind — Monk", "/Classes/Monk/Monk.html#universal_mind"],
        ["Timeless Body — Monk", "/Classes/Monk/Monk.html#timeless_body"],
        ["Uncanny Metabolism — Monk", "/Classes/Monk/Monk.html#uncanny_metabolism"],
        ["Survivor", "/Classes/Monk/Monk.html#survivor"],
        ["Eyes of Truth — Monk", "/Classes/Monk/Monk.html#eyes_of_truth"],
        ["Conquering Will — Monk", "/Classes/Monk/Monk.html#conquering_will"],
        ["Diamond Soul — Monk", "/Classes/Monk/Monk.html#diamond_soul"],
    ]
    var paladin_features = [
        ["Divine Sense — Paladin", "/Classes/Paladin/Paladin.html#divine_sense"],
        ["Lay on Hands — Paladin", "/Classes/Paladin/Paladin.html#lay_on_hands"],
        ["Sacred Oath — Paladin", "/Classes/Paladin/Paladin.html#sacred_oath"],
        ["Fighting Style — Paladin", "/Classes/Paladin/Paladin.html#fighting_style"],
        ["Spellcasting — Paladin", "/Classes/Paladin/Paladin.html#spellcasting"],
        ["Divine Smite — Paladin", "/Classes/Paladin/Paladin.html#divine_smite"],
        ["Channel Divinity — Paladin", "/Classes/Paladin/Paladin.html#channel_divinity"],
        ["Divine Health — Paladin", "/Classes/Paladin/Paladin.html#divine_health"],
        ["Ability Score Improvement — Paladin", "/Classes/Paladin/Paladin.html#ability_score_improvement"],
        ["Extra Attack — Paladin", "/Classes/Paladin/Paladin.html#extra_attack"],
        ["Aura of Protection — Paladin", "/Classes/Paladin/Paladin.html#aura_of_protection"],
        ["Aura of Courage — Paladin", "/Classes/Paladin/Paladin.html#aura_of_courage"],
        ["Improved Divine Smite — Paladin", "/Classes/Paladin/Paladin.html#improved_divine_smite"],
        ["Cleansing Touch — Paladin", "/Classes/Paladin/Paladin.html#cleansing_touch"],
    ]
    var ranger_features = [
        ["Expertise — Ranger", "/Classes/Ranger/Ranger.html#expertise"],
        ["Favored Enemy — Ranger", "/Classes/Ranger/Ranger.html#favored_enemy"],
        ["Roving — Ranger", "/Classes/Ranger/Ranger.html#roving"],
        ["Fighting Style — Ranger", "/Classes/Ranger/Ranger.html#fighting_style"],
        ["Spellcasting — Ranger", "/Classes/Ranger/Ranger.html#spellcasting"],
        ["Crippling Strike — Ranger", "/Classes/Ranger/Ranger.html#crippling_strike"],
        ["Primeval Awareness — Ranger", "/Classes/Ranger/Ranger.html#primeval_awareness"],
        ["Ranger Conclave — Ranger", "/Classes/Ranger/Ranger.html#ranger_conclave"],
        ["Ability Score Improvement — Ranger", "/Classes/Ranger/Ranger.html#ability_score_improvement"],
        ["Extra Attack — Ranger", "/Classes/Ranger/Ranger.html#extra_attack"],
        ["Vanish — Ranger", "/Classes/Ranger/Ranger.html#vanish"],
        ["Land's Stride — Ranger", "/Classes/Ranger/Ranger.html#lands_stride"],
        ["Nature's Veil — Ranger", "/Classes/Ranger/Ranger.html#natures_veil"],
        ["Tireless — Ranger", "/Classes/Ranger/Ranger.html#tireless"],
        ["Adaptive Training — Ranger", "/Classes/Ranger/Ranger.html#adaptive_training"],
        ["Feral Senses — Ranger", "/Classes/Ranger/Ranger.html#feral_senses"],
        ["Apex Hunter — Ranger", "/Classes/Ranger/Ranger.html#apex_hunter"],
    ]
    var rogue_features = [
        ["Expertise — Rogue", "/Classes/Rogue/Rogue.html#expertise"],
        ["Sneak Attack — Rogue", "/Classes/Rogue/Rogue.html#sneak_attack"],
        ["Thieves' Cant — Rogue", "/Classes/Rogue/Rogue.html#thieves_cant"],
        ["Cunning Action — Rogue", "/Classes/Rogue/Rogue.html#cunning_action"],
        ["Roguish Archetype — Rogue", "/Classes/Rogue/Rogue.html#roguish_archetype"],
        ["Steady Aim — Rogue", "/Classes/Rogue/Rogue.html#steady_aim"],
        ["Ability Score Improvement — Rogue", "/Classes/Rogue/Rogue.html#ability_score_improvement"],
        ["Uncanny Dodge — Rogue", "/Classes/Rogue/Rogue.html#uncanny_dodge"],
        ["Evasion — Rogue", "/Classes/Rogue/Rogue.html#evasion"],
        ["Reliable Talent — Rogue", "/Classes/Rogue/Rogue.html#reliable_talent"],
        ["Blindsense — Rogue", "/Classes/Rogue/Rogue.html#blindsense"],
        ["Slippery Mind — Rogue", "/Classes/Rogue/Rogue.html#slippery_mind"],
        ["Elusive — Rogue", "/Classes/Rogue/Rogue.html#elusive"],
        ["Successful Maverick — Rogue", "/Classes/Rogue/Rogue.html#successful_maverick"],
    ]
    var sorcerer_features = [
        ["Spellcasting — Sorcerer", "/Classes/Sorcerer/Sorcerer.html#spellcasting"],
        ["Sorcerous Origin — Sorcerer", "/Classes/Sorcerer/Sorcerer.html#sorcerous_origin"],
        ["Metamagic — Sorcerer", "/Classes/Sorcerer/Sorcerer.html#metamagic"],
        ["Font of Magic — Sorcerer", "/Classes/Sorcerer/Sorcerer.html#font_of_magic"],
        ["Ability Score Improvement — Sorcerer", "/Classes/Sorcerer/Sorcerer.html#ability_score_improvement"],
        ["Magical Guidance — Sorcerer", "/Classes/Sorcerer/Sorcerer.html#magical_guidance"],
        ["Spellcrafter — Sorcerer", "/Classes/Sorcerer/Sorcerer.html#spellcrafter"],
    ]
    var warlock_features = [
        ["Otherworldly Patron — Warlock", "/Classes/Warlock/Warlock.html#otherworldly_patron"],
        ["Pact Magic — Warlock", "/Classes/Warlock/Warlock.html#pact_magic"],
        ["Unearthly Invocations — Warlock", "/Classes/Warlock/Warlock.html#unearthly_invocations"],
        ["Patron's Boon — Warlock", "/Classes/Warlock/Warlock.html#patrons_boon"],
        ["Ability Score Improvement — Warlock", "/Classes/Warlock/Warlock.html#ability_score_improvement"],
        ["Contact Patron — Warlock", "/Classes/Warlock/Warlock.html#contact_patron"],
        ["Mystic Arcanum — Warlock", "/Classes/Warlock/Warlock.html#mystic_arcanum"],
        ["Eldritch Master — Warlock", "/Classes/Warlock/Warlock.html#eldritch_master"],
    ]
    var wizard_features = [
        ["Spellcasting — Wizard", "/Classes/Wizard.html#spellcasting"],
        ["Arcane Recovery — Wizard", "/Classes/Wizard.html#arcane_recovery"],
        ["Arcane Tradition — Wizard", "/Classes/Wizard.html#arcane_tradition"],
        ["Cantrip Formulas — Wizard", "/Classes/Wizard.html#cantrip_formulas"],
        ["Ability Score Improvement — Wizard", "/Classes/Wizard.html#ability_score_improvement"],
        ["Spell Mastery — Wizard", "/Classes/Wizard.html#spell_mastery"],
        ["Archmage — Wizard", "/Classes/Wizard.html#archmage"],
    ]

    var spell_lists = [
        ["Artificer Spell List", "/Spells/ArtificerSpellList.html"],
        ["Bard Spell List", "/Spells/BardSpellList.html"],
        ["Cleric Spell List", "/Spells/ClericSpellList.html"],
        ["Druid Spell List", "/Spells/DruidSpellList.html"],
        ["Paladin Spell List", "/Spells/PaladinSpellList.html"],
        ["Ranger Spell List", "/Spells/RangerSpellList.html"],
        ["Sorcerer Spell List", "/Spells/SorcererSpellList.html"],
        ["Warlock Spell List", "/Spells/WarlockSpellList.html"],
        ["Wizard Spell List", "/Spells/WizardSpellList.html"],
    ]
    var arr_arr = [
        classes,
        artificer_features,
        barbarian_features,
        bard_features,
        cleric_features,
        druid_features,
        fighter_features,
        monk_features,
        paladin_features,
        ranger_features,
        rogue_features,
        sorcerer_features,
        warlock_features,
        wizard_features,
        spell_lists,
    ]

    for (let i = 0; i < arr_arr.length; i++) {
        arr_arr[i] = arr_arr[i].filter(x => x[0].toLowerCase().includes(search));
    }
    var results_arr = [];
    for (let i = 0; i < arr_arr.length; i++) {
        for (let j = 0; j < arr_arr[i].length; j++) {
            results_arr.push(arr_arr[i][j]);
        }
    }
    results_arr = results_arr.sort((a, b) => {
        var lowerCasedA = a[0].toLowerCase();
        var lowerCasedB = b[0].toLowerCase();
        var lowerCasedIndexA = lowerCasedA.indexOf(search.toLowerCase());
        var lowerCasedIndexB = lowerCasedB.indexOf(search.toLowerCase());
        if (lowerCasedIndexA == 0 && lowerCasedIndexB == 0) {
            if (lowerCasedA < lowerCasedB) {
                return -1;
            } else if (lowerCasedA > lowerCasedB) {
                return 1;
            } else {
                return 0;
            }
        } else if (lowerCasedIndexA == 0) {
            return -1;
        } else if (lowerCasedIndexB == 0) {
            return 1;
        } else if (lowerCasedA[lowerCasedIndexA - 1] == " " && lowerCasedB[lowerCasedIndexB - 1] == " ") {
            if (lowerCasedA < lowerCasedB) {
                return -1;
            } else if (lowerCasedA > lowerCasedB) {
                return 1;
            } else {
                return 0;
            }
        } else if (lowerCasedA[lowerCasedIndexA - 1] == " ") {
            return -1;
        } else if (lowerCasedB[lowerCasedIndexB - 1] == " ") {
            return 1;
        } else {
            if (lowerCasedA < lowerCasedB) {
                return -1;
            } else if (lowerCasedA > lowerCasedB) {
                return 1;
            } else {
                return 0;
            }
        }
    });
    var results = "";
    results += '<a class="search_link" href=' + results_arr[0][1] + '>' + '<div class="search_result" style="border-top-width: 3px">' + results_arr[0][0] + "</div></a>";
    for (let i = 1; i < results_arr.length - 1; i++) {
        //results += '<div class="search_result" style="border-width: 10px">' + arr_arr[i][j][0] + "</div>";
        results += '<a class="search_link" href=' + results_arr[i][1] + '>' + '<div class="search_result">' + results_arr[i][0] + "</div></a>";
    }
    console.log(results_arr);
    if (results_arr.length > 1) {
        results += '<a class="search_link" href=' + results_arr[results_arr.length - 1][1] + '>' + '<div class="search_result" style="border-bottom-width: 3px">' + results_arr[results_arr.length -1][0] + "</div></a>";
    }
    //results += '<a class="search_link" href=' + results_arr[results_arr.length - 1][1] + '>' + '<div class="search_result" style="border-bottom-width: 0px">' + results_arr[results_arr.length -1][0] + "</div></a>";

    var results_elem = document.getElementById('search_results');
    console.log(results_elem);
    results_elem.innerHTML = results;
    results_elem.scrollTop = 2;
}

function start_search() {
    var search_input = document.getElementById('search_input');
    search_input.focus();
    search_input.select();
}