const sourcePole = [3, 2, 1];
const auxiliaryPole = [];
const targetPole = [];

// Function: Move disks in the Hanoi Tower
function hanoiTower(n, source, auxiliary, target) {
    if (n === 0) {
        // No disk to move
        return;
    }

    if (n === 1) {
        // Move a single disk from the source pole to the target pole
        target.push(source.pop());
        displayState();
        return;
    }

    // Recursive steps for Tower of Hanoi
    hanoiTower(n - 1, source, target, auxiliary); // Move n-1 disks from source to auxiliary
    target.push(source.pop()); // Move the remaining disk from source to target
    displayState();
    hanoiTower(n - 1, auxiliary, source, target); // Move n-1 disks from auxiliary to target
}

// Function: Display the current state on the web page
function displayState() {
    document.getElementById('output').innerHTML += `
      <p>A: ${sourcePole.join(', ')}</p>
      <p>B: ${auxiliaryPole.join(', ')}</p>
      <p>C: ${targetPole.join(', ')}</p>
      <hr>
    `;
}

// Display the initial state
displayState();

// Solve the Hanoi Tower problem
hanoiTower(sourcePole.length, sourcePole, auxiliaryPole, targetPole);
