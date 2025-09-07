// Data Model: repair_record
module.exports = {
  "id": "repair_record",
  "label": "Repair Record",
  "description": "Structured record of reported issues, repair actions and financials.",
  "isEditable": true,
  "attributes": [
    {
      "id": "id",
      "type": "string",
      "label": "ID",
      "required": true,
      "unique": true,
      "indexed": true
    },
    {
      "id": "description",
      "type": "string",
      "label": "Description",
      "defaultValue": ""
    },
    {
      "id": "startDate",
      "type": "date",
      "label": "Start Date",
      "required": true
    },
    {
      "id": "endDate",
      "type": "date",
      "label": "End Date"
    },
    {
      "id": "createdBy",
      "type": "string",
      "label": "Created By",
      "accessControl": {
        "read": [
          "admin"
        ],
        "write": [
          "admin"
        ]
      }
    },
    {
      "id": "createdAt",
      "type": "datetime",
      "label": "Created At"
    },
    {
      "id": "status",
      "type": "string",
      "label": "Status",
      "defaultValue": "draft",
      "allowedValues": [
        "draft",
        "active",
        "inactive",
        "archived"
      ]
    },
    {
      "id": "version",
      "type": "number",
      "label": "Version",
      "defaultValue": 1
    },
    {
      "id": "createdAge",
      "type": "computed",
      "label": "Age (days)",
      "dependencies": [
        "createdAt"
      ]
    },
    {
      "id": "repair_id",
      "label": "Repair ID",
      "type": "text",
      "description": "Unique identifier for the repair case.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "issue_summary",
      "label": "Issue Summary",
      "type": "text",
      "description": "Short description of the reported problem.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "reported_symptoms",
      "label": "Reported Symptoms",
      "type": "text",
      "description": "Detailed symptoms and reproducible steps.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "severity_level",
      "label": "Severity Level",
      "type": "number",
      "description": "Numeric severity (1-5) to drive priority and SLAs.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "estimated_cost",
      "label": "Estimated Cost",
      "type": "number",
      "description": "Preliminary cost estimate for repair.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "repair_status",
      "label": "Repair Status",
      "type": "text",
      "description": "Current lifecycle state of the repair (e.g., Open, In Progress, Completed).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    }
  ],
  "extends": null,
  "isProtected": false
};