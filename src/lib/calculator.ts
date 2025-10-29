export type MapStatus = 'low' | 'normal' | 'high';

export interface MapResult {
  value: number;
  status: MapStatus;
  messageKey: 'calculator.lowMap' | 'calculator.normalMap' | 'calculator.highMap';
}

/**
 * Calculates the Mean Arterial Pressure (MAP) using the standard formula:
 * MAP = (SBP + 2 × DBP) / 3.
 */
export function calculateMap(systolic: number, diastolic: number): MapResult {
  const rawValue = (systolic + 2 * diastolic) / 3;
  const value = Number(rawValue.toFixed(1));

  let status: MapStatus = 'normal';
  if (value < 60) {
    status = 'low';
  } else if (value > 100) {
    status = 'high';
  }

  const messageKey = status === 'low'
    ? 'calculator.lowMap'
    : status === 'high'
    ? 'calculator.highMap'
    : 'calculator.normalMap';

  return { value, status, messageKey };
}
