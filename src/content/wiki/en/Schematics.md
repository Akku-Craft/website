# Hardware Design & Schematics

The electrical foundation of Akku-Craft is built on reliability and modularity. Our schematics are designed to handle high currents while maintaining precise monitoring capabilities for every individual cell string.

## Core Design Principles

Each module is designed to function as part of a larger network — not just to connect batteries.

| Feature            | Description                                                      |
| ------------------ | ---------------------------------------------------------------- |
| Voltage Monitoring | High-precision sensing for individual cell banks.                |
| Balancing          | Active or passive balancing circuits to maximize cell longevity. |
| Protection         | Integrated fuses and MOSFET-based disconnect switches.           |

![Main PCB Schematic Diagram](/wiki/schaltplan.png)

> **Note:** This image may not reflect the latest revision. Check the `schematics` repository for up-to-date files.

## Repository Structure

Hardware files are hosted in the `schematics` repository. We use industry-standard tooling to ensure that anyone can audit or contribute to our designs.

## Safety Warnings

Working with lithium-ion batteries carries real risk. Please follow these precautions:

- Always verify polarity before connecting any modules.
- Enable current limiting on your bench power supply during the first test run of a new board.
- Keep a fire-safe container nearby when testing unverified hardware.
