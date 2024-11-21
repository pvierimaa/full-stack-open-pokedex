const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('front page can be opened', async ({ page }) => {
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')
    ).toBeVisible()
  })

  test('should navigate to ivysaur page', async ({ page }) => {
    await page.click('text=ivysaur')

    await expect(page).toHaveURL('/pokemon/ivysaur')
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})
