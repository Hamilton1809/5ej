import { expect, test } from 'vitest'
    import { miFuncion } from './js/ejercicios.js' // Ajusta el nombre de la función

    test('descripción de mi prueba', () => {
      // Aquí pones lo que esperas que pase
      // ejemplo: expect(miFuncion(2)).toBe(4)
      expect(1 + 1).toBe(2) // Prueba básica para verificar que Vitest corre
    })
    ```

---

### Paso 4: Ejecutar el Test
En la terminal de VS Code (donde escribiste los comandos en `image_577163.png`), escribe:
```bash
npm test