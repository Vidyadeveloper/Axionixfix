// Data Model: diagnostic_report
module.exports = {
  "id": "diagnostic_report",
  "label": "Diagnostic Report",
  "description": "Technical telemetry, logs and root-cause analysis for diagnostics.",
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
      "id": "diagnostic_id",
      "label": "Diagnostic ID",
      "type": "text",
      "description": "Unique identifier for the diagnostic run.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "remote_diagnostics_run",
      "label": "Remote Diagnostics Run",
      "type": "text",
      "description": "Summary of automated/remote checks executed.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "error_codes",
      "label": "Error Codes",
      "type": "text",
      "description": "Consolidated error and fault codes captured during analysis.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "logs_link",
      "label": "Logs Link",
      "type": "text",
      "description": "URI or reference to full diagnostic logs.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "root_cause",
      "label": "Root Cause",
      "type": "text",
      "description": "Determined root cause of failure.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "recommended_actions",
      "label": "Recommended Actions",
      "type": "text",
      "description": "Suggested remediation steps and parts required.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "diagnostic_timestamp",
      "label": "Diagnostic Timestamp",
      "type": "date",
      "description": "When diagnostics were performed.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    }
  ],
  "extends": null,
  "isProtected": false
};