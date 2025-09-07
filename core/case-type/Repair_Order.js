// Case Type: Repair_Order
module.exports = {
  "caseType": {
    "id": "Repair_Order",
    "label": "Repair Order"
  },
  "stages": [
    {
      "id": "Intake",
      "label": "Intake",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "repair-order-intake-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "create_repair_request",
          "label": "Create Repair Request",
          "type": "manual",
          "status": "pending",
          "view": "repair-order-intake-create-repair-request",
          "dataModelReference": {
            "attributes": [
              "customer_id",
              "full_name",
              "email",
              "phone",
              "device_id",
              "serial_number",
              "model_number",
              "purchase_date",
              "issue_summary",
              "reported_symptoms"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "repair-order-intake-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Triage",
      "label": "Triage",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "repair-order-triage-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "verify_warranty",
          "label": "Verify Warranty & Coverage",
          "type": "manual",
          "status": "pending",
          "view": "repair-order-triage-verify-warranty-&-coverage",
          "dataModelReference": {
            "attributes": [
              "serial_number",
              "warranty_status",
              "coverage_type",
              "claim_id"
            ]
          }
        },
        {
          "id": "set_priority",
          "label": "Set Priority & SLA",
          "type": "manual",
          "status": "pending",
          "view": "repair-order-triage-set-priority-&-sla",
          "dataModelReference": {
            "attributes": [
              "severity_level",
              "repair_id"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "repair-order-triage-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Diagnostics",
      "label": "Diagnostics",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "repair-order-diagnostics-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "run_remote_diagnostics",
          "label": "Run Remote Diagnostics",
          "type": "manual",
          "status": "pending",
          "view": "repair-order-diagnostics-run-remote-diagnostics",
          "dataModelReference": {
            "attributes": [
              "diagnostic_id",
              "remote_diagnostics_run",
              "error_codes",
              "logs_link",
              "diagnostic_timestamp"
            ]
          }
        },
        {
          "id": "analyze_results",
          "label": "Analyze Diagnostic Results",
          "type": "manual",
          "status": "pending",
          "view": "repair-order-diagnostics-analyze-diagnostic-results",
          "dataModelReference": {
            "attributes": [
              "root_cause",
              "recommended_actions",
              "diagnostic_id"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "repair-order-diagnostics-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Parts_&_Scheduling",
      "label": "Parts & Scheduling",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "repair-order-parts-&-scheduling-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "order_parts",
          "label": "Order Required Parts",
          "type": "manual",
          "status": "pending",
          "view": "repair-order-parts-&-scheduling-order-required-parts",
          "dataModelReference": {
            "attributes": [
              "order_id",
              "parts_list",
              "total_cost",
              "supplier",
              "expected_lead_time",
              "order_status"
            ]
          }
        },
        {
          "id": "schedule_technician",
          "label": "Schedule Technician",
          "type": "manual",
          "status": "pending",
          "view": "repair-order-parts-&-scheduling-schedule-technician",
          "dataModelReference": {
            "attributes": [
              "assignment_id",
              "technician_id",
              "technician_name",
              "scheduled_start",
              "scheduled_end",
              "travel_eta_minutes"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "repair-order-parts-&-scheduling-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Repair_&_QA",
      "label": "Repair & QA",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "repair-order-repair-&-qa-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "perform_repair",
          "label": "Perform Repair/Replace",
          "type": "manual",
          "status": "pending",
          "view": "repair-order-repair-&-qa-perform-repair/replace",
          "dataModelReference": {
            "attributes": [
              "repair_id",
              "repair_status",
              "estimated_cost",
              "root_cause",
              "recommended_actions",
              "on_site_tools"
            ]
          }
        },
        {
          "id": "quality_assurance",
          "label": "Quality Assurance & Test",
          "type": "manual",
          "status": "pending",
          "view": "repair-order-repair-&-qa-quality-assurance-&-test",
          "dataModelReference": {
            "attributes": [
              "repair_status",
              "diagnostic_id",
              "logs_link"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "repair-order-repair-&-qa-end",
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
          "view": "repair-order-closure-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "invoice_and_close",
          "label": "Invoice, Record & Close",
          "type": "manual",
          "status": "pending",
          "view": "repair-order-closure-invoice,-record-&-close",
          "dataModelReference": {
            "attributes": [
              "repair_id",
              "estimated_cost",
              "total_cost",
              "claim_id",
              "repair_status"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "repair-order-closure-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    }
  ]
};