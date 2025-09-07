// Data Model: technician_assignment
module.exports = {
  "id": "technician_assignment",
  "label": "Technician Assignment",
  "description": "Field engineer allocation, schedule and on-site metrics.",
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
      "id": "assignment_id",
      "label": "Assignment ID",
      "type": "text",
      "description": "Unique ID for a dispatch/assignment.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "technician_id",
      "label": "Technician ID",
      "type": "text",
      "description": "Unique technician identifier.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "technician_name",
      "label": "Technician Name",
      "type": "text",
      "description": "Assigned technician full name.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "scheduled_start",
      "label": "Scheduled Start",
      "type": "date",
      "description": "Planned on-site start datetime.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "scheduled_end",
      "label": "Scheduled End",
      "type": "date",
      "description": "Planned on-site end datetime.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "travel_eta_minutes",
      "label": "Travel ETA (minutes)",
      "type": "number",
      "description": "Estimated travel time to site in minutes.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "on_site_tools",
      "label": "On-site Tools",
      "type": "text",
      "description": "Tooling and kit assigned to the technician.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    }
  ],
  "extends": null,
  "isProtected": false
};