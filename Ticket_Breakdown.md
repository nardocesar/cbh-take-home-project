# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1: Allow Facilities to add custom IDs for Agents

Currently, the Agent IDs in reports are internal database IDs. This feature will allow Facilities to add custom IDs for Agents which will be used in reports.

#### Acceptance Criteria:

- Facilities can add custom IDs for Agents
- Reports show the custom ID instead of the internal database ID
- Agents can have different custom IDs across Facilities

### Ticket 2: Update the database schema to store custom Agent IDs

This feature will update the database schema to add a new "custom_id" field to the Agents table so Facilities can add custom IDs.

#### Acceptance Criteria:

- The database schema is updated to add a "custom_id" field to the Agents table
- The custom ID field is nullable

### Ticket 3: Add the ability to update custom Agent IDs via API

This feature will allow Facilities to update custom Agent IDs via the API, in case they need to change an ID at a later time.

#### Acceptance Criteria:

- Facilities can update custom IDs for Agents via the API
- The updated custom ID is reflected in the database

### Ticket 4: Update Shifts table to reference custom Agent IDs

This feature will update the Shifts table to reference custom Agent IDs instead of internal database IDs, so that reports can show the custom IDs.

#### Acceptance Criteria:

- The Shifts table is updated to reference custom Agent IDs
- Reports show the custom Agent ID instead of the internal database ID
- The old internal database ID is still accessible if needed for historical purposes

### Ticket 5 (Bonus): Ensure backwards compatibility with old Agent IDs

This ticket was created to ensure that old reports using internal database IDs will still be valid and accurate after the custom ID feature is released.

#### Acceptance Criteria:

Old reports still work and show internal database IDs
Reports generated after custom IDs are added show the custom ID
Custom IDs can be updated for Agents who have old reports
