// regex that checks if value contains digits only
const digitsOnly = /^\d+$/;

// function to mask digits into US phone format
function maskNIGPhone(phone) {
  // returning null when getting null, undefined, or an object that is no string as a parameter
  if (!phone || typeof phone !== 'string') {
    return null;
  }

  // returning the untouched value when it contains non-digit chars or when it has a length != 10
  if (digitsOnly.test(phone) === false || phone.length !== 10) {
    return phone;
  }

  // returning the masked value
  const countryCode = '234';
  const prefix = phone.substring(0, 2);
  const midfix = phone.substring(2, 6);
  const sufix = phone.substring(6, 10);

  return `(${countryCode}) ${prefix}-${midfix}-${sufix}`;
}

export default maskNIGPhone;
