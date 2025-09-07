// Data Model: warranty_claim
module.exports = {
  "id": "warranty_claim",
  "label": "Warranty Claim",
  "description": "Claim lifecycle, coverage evaluation and decisions for warranty-managed repairs.",
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
      "id": "claim_id",
      "label": "Claim ID",
      "type": "text",
      "description": "Unique warranty claim identifier.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "warranty_status",
      "label": "Warranty Status",
      "type": "text",
      "description": "Computed warranty state (Covered, Excluded, Expired).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "coverage_type",
      "label": "Coverage Type",
      "type": "text",
      "description": "Type of coverage (RTB, Extended, SLA).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "claim_decision",
      "label": "Claim Decision",
      "type": "text",
      "description": "Outcome of the warranty review (Approved, Denied, Partial).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "claim_decision_date",
      "label": "Claim Decision Date",
      "type": "date",
      "description": "Date the claim decision was recorded.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    }
  ],
  "extends": null,
  "isProtected": false
};