# Firmware: ArduinoBMS Logic

The brain of Akku-Craft is the ArduinoBMS firmware. It is responsible for the "Decentralized" aspect of our slogan, managing state-of-charge (SoC), state-of-health (SoH), and safety protocols.

## Software Architecture
The code is written in C++/Arduino and follows a modular structure to match our hardware. It handles real-time data acquisition and decision-making.

### Core Functions
- Cell Voltage Measurement: Filtering noise to get accurate readings.
- Over/Under Voltage Protection: Immediate cutoff if cells leave the safe operating window.
- Thermal Throttling: Reducing current flow if the temperature rises above defined thresholds.

## Dependencies and Libraries
To compile the ArduinoBMS, you will need the following environment:
- Arduino IDE or PlatformIO
- Specific libraries for the ADC (Analog-to-Digital Converter) used in the schematics.
- Communication libraries for the internal bus (e.g., I2C or CAN-bus protocols).

## Key Logic Loops
The firmware operates on a high-priority loop for safety and a low-priority loop for telemetry.

```cpp
void loop() {
  unsigned long currentMillis = millis();

  // 1. HIGH PRIORITY: Safety Check (alle 10ms)
  if (currentMillis - lastSafetyCheck >= 10) {
    checkVoltages();
    checkTemperatures();
    lastSafetyCheck = currentMillis;
  }

  // 2. MEDIUM PRIORITY: Logic & SoC (alle 500ms)
  if (currentMillis - lastLogicTick >= 500) {
    calculateSoC();
    manageBalancing();
    lastLogicTick = currentMillis;
  }

  // 3. LOW PRIORITY: Telemetry (alle 1000ms)
  if (currentMillis - lastCommTick >= 1000) {
    broadcastStatus();
    lastCommTick = currentMillis;
  }
}
```