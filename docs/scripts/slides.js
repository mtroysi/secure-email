function introductionSlides() {
  return ['00-intro/title.md', '00-intro/morgane_troysi.md'];
}

function secureEmailSlides() {
  return ['01-secure-email/story_beginning.md'];
}

function searchCriteriasSlides() {
  return [
    '02-search-criterias/storage_price.md',
    '02-search-criterias/features.md',
    '02-search-criterias/security.md',
    '02-search-criterias/usage.md',
  ];
}

function endangeredSpeciesSlides() {
  return ['03-endangered-species/endangered_species.md'];
}

function conclusionSlides() {
  return ['04-conclusion/conclusion.md'];
}

function talk() {
  const slides = [
    ...introductionSlides(),
    ...secureEmailSlides(),
    ...searchCriteriasSlides(),
    // ...endangeredSpeciesSlides(),
    ...conclusionSlides(),
  ];
  return slides.map((slidePath) => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return talk();
}
