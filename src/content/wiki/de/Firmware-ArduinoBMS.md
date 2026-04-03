# Firmware: ArduinoBMS

Die ArduinoBMS-Firmware ist das Gehirn von Akku-Craft und die technische Grundlage unseres Grundpfeilers „Dezentral". Sie verwaltet den Ladezustand (State of Charge, SoC), den Gesundheitszustand (State of Health, SoH) und alle Sicherheitsprotokolle in Echtzeit.

## Software-Architektur

Die Firmware ist in C++/Arduino geschrieben und folgt einer modularen Struktur, die unser Hardware-Design widerspiegelt. Sie übernimmt die Echtzeit-Datenerfassung und autonome Entscheidungsfindung.

### Kernfunktionen

- **Zellspannungsmessung** — Rauschgefilterte Messungen für präzise zellenindividuelle Daten.
- **Über-/Unterspannungsschutz** — Sofortige Abschaltung, wenn eine Zelle ihren sicheren Betriebsbereich verlässt.
- **Thermisches Throttling** — Der Strom wird automatisch reduziert, wenn die Temperaturen definierte Schwellenwerte überschreiten.

## Abhängigkeiten & Bibliotheken

Zum Kompilieren von ArduinoBMS wird Folgendes benötigt:

- Arduino IDE oder PlatformIO
- ADC-Bibliotheken passend zum in den Schaltplänen verwendeten Chip
- Kommunikationsbibliotheken für den internen Bus (I²C oder CAN)

## Hauptschleifen-Struktur

Die Firmware arbeitet auf drei Prioritätsstufen: einer hochprioritären Sicherheitsschleife, einer mittelprioritären Logikschleife und einer niedrigprioritären Telemetrieschleife.

```cpp
void loop() {
  unsigned long currentMillis = millis();

  // HOHE PRIORITÄT: Sicherheitsprüfung (alle 10 ms)
  if (currentMillis - lastSafetyCheck >= 10) {
    checkVoltages();
    checkTemperatures();
    lastSafetyCheck = currentMillis;
  }

  // MITTLERE PRIORITÄT: SoC & Balancing-Logik (alle 500 ms)
  if (currentMillis - lastLogicTick >= 500) {
    calculateSoC();
    manageBalancing();
    lastLogicTick = currentMillis;
  }

  // NIEDRIGE PRIORITÄT: Telemetrie-Übertragung (alle 1000 ms)
  if (currentMillis - lastCommTick >= 1000) {
    broadcastStatus();
    lastCommTick = currentMillis;
  }
}
```
