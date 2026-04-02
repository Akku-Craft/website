# Hardware Design and Schematics

The electrical foundation of Akku-Craft is built on reliability and modularity. Our schematics are designed to handle high currents while maintaining precise monitoring capabilities for every single cell string.

## Core Design Principles

Our circuits are not just about connecting batteries. Each module is designed to be part of a larger network.

| Feature            | Description                                                    |
| ------------------ | -------------------------------------------------------------- |
| Voltage Monitoring | High-precision sensing for individual cell banks.              |
| Balancing          | Active or passive balancing circuits to ensure cell longevity. |
| Protection         | Integrated fuses and MOSFET-based disconnects.                 |

![Main PCB Schematic Diagram](/wiki/schaltplan.png)

<sub>This is not always the newest version. Please check the `schematics` repository for the latest files.</sub>

## Repository Structure

The hardware files are hosted in the `schematics` repository. We use industry-standard tools to ensure that anyone can audit or improve our designs.

## Safety Warnings

Working with lithium-ion batteries is inherently dangerous.

- Always double-check polarity before connecting modules.
- Ensure that your bench power supply has current limiting enabled during the first test run of a new board.
- Keep a fire-safe container nearby when testing unverified hardware.
