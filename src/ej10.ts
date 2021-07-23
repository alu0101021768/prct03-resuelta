/**
 *
 * @param user Consists of the username given
 * @return Returns if the username was valid
 *
 * Rules:
 * - The username lenght has to be between 4 and 30 characters (both included)
 * - The username cannot start or end with character '_'
 * - The username must have: 1 uppercase letter, 1 lowercase letter ,
 * 1 number, 1 special symbol ($, -, _)
 * - The username can't have more than 2 consecutive occurrences of characters
 * with the same type
 *
 * Usage:
 * This should return true, cause it is a valid username
 * ```typescript
 * isValidUsername("-U__he1ll2o$12")
 * ```
 * This shouldn't return true, cause it isn't a valid username
 * ```typescript
 * isValidUsername("u__hello$122__")
 * ```
 */
export function isValidUsername(user: string): boolean {
  const valid: boolean = true;
  // Tiene que tener desde 4 hasta 30 caracteres
  if (user.length < 4 || user.length > 30) {
    return false;
  }

  // No puede empezar ni acabar con _
  if ((user[0] === '_') || (user[user.length - 1] === '_')) {
    return false;
  }
  // Tiene que tener como minimo:
  // 1 minuscula, 1 mayuscula , 1 numero y alguno de los simbolo ($, - , _)
  if (!(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-_$]))/.test(user))) {
    return false;
  }
  // Comprobamos que no haya 3 ocurrencias consecutivas
  // de caracteres del mismo tipo (numeros, simbolos o letras)
  if ((/[-_$]{3,}/.test(user)) || (/[0-9]{3,}/.test(user)) ||
    (/[a-zA-Z]{3,}/.test(user)) ||
    (/[!%^&* () +| ~=`{}\[\]:";'<>?,.\/]{3,}/.test(user))) {
    return false;
  }
  // Si hemos llegado hasta aqui, es que el username es correcto! :)
  return valid;
}
