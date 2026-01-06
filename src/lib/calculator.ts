export type MapStatus = 'criticalLow' | 'borderline' | 'normal' | 'elevated' | 'high';
export type PulsePressureStatus = 'narrow' | 'normal' | 'wide';

export interface MapResult {
  value: number;
  status: MapStatus;
  pulsePressure: number;
  pulsePressureStatus: PulsePressureStatus;
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
    status = 'criticalLow';
  } else if (value < 65) {
    status = 'borderline';
  } else if (value > 110) {
    status = 'high';
  } else if (value > 100) {
    status = 'elevated';
  }

  const pulsePressure = systolic - diastolic;
  let pulsePressureStatus: PulsePressureStatus = 'normal';
  if (pulsePressure > 60) {
    pulsePressureStatus = 'wide';
  } else if (pulsePressure < 25) {
    pulsePressureStatus = 'narrow';
  }

  return { value, status, pulsePressure, pulsePressureStatus };
}
