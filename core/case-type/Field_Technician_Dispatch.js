// Case Type: Field_Technician_Dispatch
module.exports = {
  "caseType": {
    "id": "Field_Technician_Dispatch",
    "label": "Field Technician Dispatch"
  },
  "stages": [
    {
      "id": "Dispatch_Request",
      "label": "Dispatch Request",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "field-technician-dispatch-dispatch-request-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "create_dispatch_request",
          "label": "Create Dispatch Request",
          "type": "manual",
          "status": "pending",
          "view": "field-technician-dispatch-dispatch-request-create-dispatch-request",
          "dataModelReference": {
            "attributes": [
              "assignment_id",
              "repair_id",
              "customer_id",
              "device_id",
              "issue_summary"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "field-technician-dispatch-dispatch-request-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Scheduling",
      "label": "Scheduling",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "field-technician-dispatch-scheduling-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "assign_technician",
          "label": "Assign Technician & Slot",
          "type": "manual",
          "status": "pending",
          "view": "field-technician-dispatch-scheduling-assign-technician-&-slot",
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
          "id": "confirm_with_customer",
          "label": "Confirm Appointment with Customer",
          "type": "manual",
          "status": "pending",
          "view": "field-technician-dispatch-scheduling-confirm-appointment-with-customer",
          "dataModelReference": {
            "attributes": [
              "customer_id",
              "email",
              "scheduled_start",
              "scheduled_end"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "field-technician-dispatch-scheduling-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "En_Route",
      "label": "En Route",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "field-technician-dispatch-en-route-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "update_en_route",
          "label": "Update En Route Status & ETA",
          "type": "manual",
          "status": "pending",
          "view": "field-technician-dispatch-en-route-update-en-route-status-&-eta",
          "dataModelReference": {
            "attributes": [
              "assignment_id",
              "travel_eta_minutes",
              "technician_id"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "field-technician-dispatch-en-route-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "On_Site_Work",
      "label": "On Site Work",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "field-technician-dispatch-on-site-work-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "perform_on_site_work",
          "label": "Perform On-Site Repair & Record",
          "type": "manual",
          "status": "pending",
          "view": "field-technician-dispatch-on-site-work-perform-on-site-repair-&-record",
          "dataModelReference": {
            "attributes": [
              "repair_id",
              "repair_status",
              "on_site_tools",
              "parts_list",
              "root_cause"
            ]
          }
        },
        {
          "id": "capture_signoff",
          "label": "Capture Customer Signoff & Evidence",
          "type": "manual",
          "status": "pending",
          "view": "field-technician-dispatch-on-site-work-capture-customer-signoff-&-evidence",
          "dataModelReference": {
            "attributes": [
              "repair_id",
              "customer_id",
              "logs_link"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "field-technician-dispatch-on-site-work-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Completion",
      "label": "Completion",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "field-technician-dispatch-completion-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "close_assignment",
          "label": "Close Assignment & Update Records",
          "type": "manual",
          "status": "pending",
          "view": "field-technician-dispatch-completion-close-assignment-&-update-records",
          "dataModelReference": {
            "attributes": [
              "assignment_id",
              "repair_status",
              "order_id",
              "order_status"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "field-technician-dispatch-completion-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    }
  ]
};