# Firmware: ArduinoBMS

The ArduinoBMS firmware is the brain of Akku-Craft and the technical foundation of our "Decentralized" pillar. It manages state-of-charge (SoC), state-of-health (SoH), and all safety protocols in real time.

## Software Architecture

The firmware is written in C++/Arduino and follows a modular structure that mirrors our hardware design. It handles real-time data acquisition and autonomous decision-making.

### Core Functions

- **Cell Voltage Measurement** — Noise-filtered readings for accurate per-cell data.
- **Over/Undervoltage Protection** — Immediate cutoff if any cell leaves its safe operating window.
- **Thermal Throttling** — Current is reduced automatically when temperatures exceed defined thresholds.

## Dependencies & Libraries

To compile ArduinoBMS, you will need:

- Arduino IDE or PlatformIO
- ADC libraries matching the chip used in the schematics
- Communication libraries for the internal bus (I²C or CAN)

## Main Loop Structure

The firmware operates on three priority tiers: a high-priority safety loop, a medium-priority logic loop, and a low-priority telemetry loop.

```cpp
void loop() {
  unsigned long currentMillis = millis();

  // HIGH PRIORITY: Safety check (every 10 ms)
  if (currentMillis - lastSafetyCheck >= 10) {
    checkVoltages();
    checkTemperatures();
    lastSafetyCheck = currentMillis;
  }

  // MEDIUM PRIORITY: SoC & balancing logic (every 500 ms)
  if (currentMillis - lastLogicTick >= 500) {
    calculateSoC();
    manageBalancing();
    lastLogicTick = currentMillis;
  }

  // LOW PRIORITY: Telemetry broadcast (every 1000 ms)
  if (currentMillis - lastCommTick >= 1000) {
    broadcastStatus();
    lastCommTick = currentMillis;
  }
}
```
