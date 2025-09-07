// Case Type: Warranty_Claim
module.exports = {
  "caseType": {
    "id": "Warranty_Claim",
    "label": "Warranty Claim"
  },
  "stages": [
    {
      "id": "Submission",
      "label": "Submission",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "warranty-claim-submission-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "submit_claim",
          "label": "Submit Claim",
          "type": "manual",
          "status": "pending",
          "view": "warranty-claim-submission-submit-claim",
          "dataModelReference": {
            "attributes": [
              "claim_id",
              "customer_id",
              "serial_number",
              "purchase_date",
              "issue_summary",
              "diagnostic_id"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "warranty-claim-submission-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Validation",
      "label": "Validation",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "warranty-claim-validation-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "validate_eligibility",
          "label": "Validate Eligibility",
          "type": "manual",
          "status": "pending",
          "view": "warranty-claim-validation-validate-eligibility",
          "dataModelReference": {
            "attributes": [
              "serial_number",
              "purchase_date",
              "warranty_status",
              "coverage_type",
              "error_codes"
            ]
          }
        },
        {
          "id": "gather_supporting_data",
          "label": "Gather Supporting Data",
          "type": "manual",
          "status": "pending",
          "view": "warranty-claim-validation-gather-supporting-data",
          "dataModelReference": {
            "attributes": [
              "logs_link",
              "reported_symptoms",
              "diagnostic_timestamp",
              "diagnostic_id"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "warranty-claim-validation-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Decision",
      "label": "Decision",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "warranty-claim-decision-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "claim_review",
          "label": "Claims Review",
          "type": "manual",
          "status": "pending",
          "view": "warranty-claim-decision-claims-review",
          "dataModelReference": {
            "attributes": [
              "claim_id",
              "claim_decision",
              "claim_decision_date",
              "claim_decision"
            ]
          }
        },
        {
          "id": "notify_customer",
          "label": "Notify Customer of Decision",
          "type": "manual",
          "status": "pending",
          "view": "warranty-claim-decision-notify-customer-of-decision",
          "dataModelReference": {
            "attributes": [
              "customer_id",
              "email",
              "claim_decision",
              "claim_decision_date"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "warranty-claim-decision-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Fulfillment",
      "label": "Fulfillment",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "warranty-claim-fulfillment-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "authorise_repair",
          "label": "Authorize Repair / Parts",
          "type": "manual",
          "status": "pending",
          "view": "warranty-claim-fulfillment-authorize-repair-/-parts",
          "dataModelReference": {
            "attributes": [
              "claim_id",
              "repair_id",
              "order_id",
              "order_status"
            ]
          }
        },
        {
          "id": "arrange_service",
          "label": "Arrange Service Delivery",
          "type": "manual",
          "status": "pending",
          "view": "warranty-claim-fulfillment-arrange-service-delivery",
          "dataModelReference": {
            "attributes": [
              "assignment_id",
              "technician_name",
              "scheduled_start"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "warranty-claim-fulfillment-end",
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
          "view": "warranty-claim-closure-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "record_resolution",
          "label": "Record Resolution & Close Claim",
          "type": "manual",
          "status": "pending",
          "view": "warranty-claim-closure-record-resolution-&-close-claim",
          "dataModelReference": {
            "attributes": [
              "claim_id",
              "repair_status",
              "claim_decision"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "warranty-claim-closure-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    }
  ]
};