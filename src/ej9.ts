/**
 *
 * @param myPokemonsType Consists on the type of your Pokemon
 * @param myOpponentsPokemonsType Consists on the type of your oponent's Pokemon
 * @param myPokemonsAttack Consists of the attack of your pokemon
 * @param myOpponentsPokemonsDefense Consists of the defense of your
 * oponent's Pokemon
 * @return Returns the damage your Pokemon will deal to the oponent's Pokemon
 * Usage:
 * ```typescript
 * damage("Fire", "Water", 60, 35)
 * ```
 */
type pokemonType = 'Fire' | 'Water' | 'Grass' | 'Electric';
type efficiency = 0.5 | 1 | 2;
export function damage(
    myPokemonsType: pokemonType,
    myOpponentsPokemonsType: pokemonType,
    myPokemonsAttack: number,
    myOpponentsPokemonsDefense: number): number {
  let attackEfficiency: efficiency = 1;
  if (myPokemonsType === myOpponentsPokemonsType) {
    attackEfficiency = 0.5;
  } else {
    switch (myPokemonsType) {
      case 'Water':
        switch (myOpponentsPokemonsType) {
          case 'Fire':
            attackEfficiency = 2;
            break;
          case 'Grass':
            attackEfficiency = 0.5;
            break;
          case 'Electric':
            attackEfficiency = 0.5;
            break;
        }
        break;
      case 'Fire':
        switch (myOpponentsPokemonsType) {
          case 'Water':
            attackEfficiency = 0.5;
            break;
          case 'Grass':
            attackEfficiency = 2;
            break;
          case 'Electric':
            attackEfficiency = 1;
            break;
        }
        break;
      case 'Grass':
        switch (myOpponentsPokemonsType) {
          case 'Fire':
            attackEfficiency = 0.5;
            break;
          case 'Water':
            attackEfficiency = 2;
            break;
          case 'Electric':
            attackEfficiency = 1;
            break;
        }
        break;
      case 'Electric':
        switch (myOpponentsPokemonsType) {
          case 'Fire':
            attackEfficiency = 1;
            break;
          case 'Grass':
            attackEfficiency = 1;
            break;
          case 'Water':
            attackEfficiency = 2;
            break;
        }
        break;
    }
  }
  const damageCaused: number =
    +(50 * (myPokemonsAttack / myOpponentsPokemonsDefense) *
    attackEfficiency).toFixed(2);
  return damageCaused;
}
