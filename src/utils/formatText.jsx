export function formatText(text) {
  // First, handle double-asterisk sections
  let result = [];
  let currentText = '';
  let boldActive = false;
  let italicActive = false;
  
  for (let i = 0; i < text.length; i++) {
    // Check for double asterisk pattern
    if (text[i] === '*' && text[i + 1] === '*') {
      // Add any accumulated text
      if (currentText) {
        result.push(currentText);
        currentText = '';
      }
      
      // Toggle bold state
      boldActive = !boldActive;
      i++; // Skip second asterisk
      continue;
    }
    
    // Check for italic text (text between parentheses)
    if (text[i] === '(' && !italicActive) {
      if (currentText) {
        result.push(currentText);
        currentText = '';
      }
      italicActive = true;
      currentText = '(';
      continue;
    }
    
    if (text[i] === ')' && italicActive) {
      currentText += ')';
      result.push(
        <em key={`italic-${i}`} className="italic">
          {currentText}
        </em>
      );
      currentText = '';
      italicActive = false;
      continue;
    }
    
    // Add character to current text
    currentText += text[i];
    
    // If we have bold text ready, wrap it
    if (!boldActive && currentText.trim() !== '') {
      if (i === text.length - 1 || (text[i + 1] === '*' && text[i + 2] === '*')) {
        if (boldActive) {
          result.push(
            <strong key={`bold-${i}`} className="font-bold">
              {currentText}
            </strong>
          );
        } else {
          result.push(currentText);
        }
        currentText = '';
      }
    }
  }
  
  // Add any remaining text
  if (currentText) {
    if (boldActive) {
      result.push(
        <strong key={`bold-final`} className="font-bold">
          {currentText}
        </strong>
      );
    } else {
      result.push(currentText);
    }
  }
  
  return result;
}