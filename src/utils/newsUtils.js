export function getStoryTitle(index) {
    const titles = {
      1: 'New AI Development Promises Breakthrough in Healthcare',
      2: 'Global Markets React to Economic Policy Changes',
      3: 'Historic Victory in International Championships'
    };
    return titles[index];
  }
  
  export function getCategoryTitle(category) {
    const titles = {
      'World News': 'International Summit Addresses Climate Change',
      'Technology': 'Next Generation Smartphones Revealed',
      'Sports': 'Championship Finals Set New Records'
    };
    return titles[category];
  }
  
  export function getCategoryDescription(category) {
    const descriptions = {
      'World News': 'Global leaders gather to discuss environmental policies and set new goals.',
      'Technology': 'Leading tech companies showcase innovative features in upcoming devices.',
      'Sports': 'Unprecedented achievements mark this years sporting events.'  // Fixed apostrophe
    };
    return descriptions[category];
  }