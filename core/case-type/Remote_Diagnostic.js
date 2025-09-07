// Case Type: Remote_Diagnostic
module.exports = {
  "caseType": {
    "id": "Remote_Diagnostic",
    "label": "Remote Diagnostic"
  },
  "stages": [
    {
      "id": "Request",
      "label": "Request",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "remote-diagnostic-request-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "request_diagnostic",
          "label": "Request Diagnostic Session",
          "type": "manual",
          "status": "pending",
          "view": "remote-diagnostic-request-request-diagnostic-session",
          "dataModelReference": {
            "attributes": [
              "diagnostic_id",
              "customer_id",
              "device_id",
              "serial_number",
              "reported_symptoms"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "remote-diagnostic-request-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Remote_Analysis",
      "label": "Remote Analysis",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "remote-diagnostic-remote-analysis-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "execute_checks",
          "label": "Execute Remote Check Routines",
          "type": "manual",
          "status": "pending",
          "view": "remote-diagnostic-remote-analysis-execute-remote-check-routines",
          "dataModelReference": {
            "attributes": [
              "remote_diagnostics_run",
              "error_codes",
              "logs_link",
              "diagnostic_timestamp"
            ]
          }
        },
        {
          "id": "aggregate_telemetry",
          "label": "Aggregate Telemetry & Correlate",
          "type": "manual",
          "status": "pending",
          "view": "remote-diagnostic-remote-analysis-aggregate-telemetry-&-correlate",
          "dataModelReference": {
            "attributes": [
              "logs_link",
              "error_codes",
              "firmware_version"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "remote-diagnostic-remote-analysis-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Report",
      "label": "Report",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "remote-diagnostic-report-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "generate_report",
          "label": "Generate Diagnostic Report",
          "type": "manual",
          "status": "pending",
          "view": "remote-diagnostic-report-generate-diagnostic-report",
          "dataModelReference": {
            "attributes": [
              "diagnostic_id",
              "root_cause",
              "recommended_actions",
              "diagnostic_timestamp"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "remote-diagnostic-report-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Customer_Review",
      "label": "Customer Review",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "remote-diagnostic-customer-review-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "present_findings",
          "label": "Present Findings & Options",
          "type": "manual",
          "status": "pending",
          "view": "remote-diagnostic-customer-review-present-findings-&-options",
          "dataModelReference": {
            "attributes": [
              "diagnostic_id",
              "recommended_actions",
              "estimated_cost"
            ]
          }
        },
        {
          "id": "approve_next_steps",
          "label": "Customer Approves Next Steps",
          "type": "manual",
          "status": "pending",
          "view": "remote-diagnostic-customer-review-customer-approves-next-steps",
          "dataModelReference": {
            "attributes": [
              "repair_id",
              "order_id",
              "claim_id"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "remote-diagnostic-customer-review-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Closure",
      "label": "Closure",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "remote-diagnostic-closure-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "archive_diagnostic",
          "label": "Archive Diagnostic Artefacts",
          "type": "manual",
          "status": "pending",
          "view": "remote-diagnostic-closure-archive-diagnostic-artefacts",
          "dataModelReference": {
            "attributes": [
              "diagnostic_id",
              "logs_link",
              "diagnostic_timestamp"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "remote-diagnostic-closure-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    }
  ]
};