export default function getRandomItemsFromArray(array: any[], numberOfItems: number) {
    // Clone the original array to avoid modifying it
    const shuffledArray = array.slice();
  
    // Function to shuffle the array using the Fisher-Yates algorithm
    function shuffleArray(arr: any[]) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  
    // Shuffle the cloned array
    shuffleArray(shuffledArray);
  
    // Return the first numberOfItems items
    return shuffledArray.slice(0, numberOfItems);
  }
  