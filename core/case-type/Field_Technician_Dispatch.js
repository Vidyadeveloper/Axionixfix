const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class FieldTechnicianDispatchCase extends BlazeCase {
  constructor() {
    super(
      "Field_Technician_Dispatch",
      "Field Technician Dispatch",
      [
        {
          id: "Dispatch_Request",
          label: "Dispatch Request",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "field-technician-dispatch-dispatch-request-start",
              dataModelReference: { models: [] }
            },
            {
              id: "create_dispatch_request",
              label: "Create Dispatch Request",
              type: "manual",
              status: "pending",
              view: "field-technician-dispatch-dispatch-request-create-dispatch-request",
              dataModelReference: { models: ["assignment_id", "repair_id", "customer_id", "device_id", "issue_summary"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "field-technician-dispatch-dispatch-request-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Scheduling",
          label: "Scheduling",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "field-technician-dispatch-scheduling-start",
              dataModelReference: { models: [] }
            },
            {
              id: "assign_technician",
              label: "Assign Technician & Slot",
              type: "manual",
              status: "pending",
              view: "field-technician-dispatch-scheduling-assign-technician-&-slot",
              dataModelReference: { models: ["assignment_id", "technician_id", "technician_name", "scheduled_start", "scheduled_end", "travel_eta_minutes"] }
            },
            {
              id: "confirm_with_customer",
              label: "Confirm Appointment with Customer",
              type: "manual",
              status: "pending",
              view: "field-technician-dispatch-scheduling-confirm-appointment-with-customer",
              dataModelReference: { models: ["customer_id", "email", "scheduled_start", "scheduled_end"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "field-technician-dispatch-scheduling-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "En_Route",
          label: "En Route",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "field-technician-dispatch-en-route-start",
              dataModelReference: { models: [] }
            },
            {
              id: "update_en_route",
              label: "Update En Route Status & ETA",
              type: "manual",
              status: "pending",
              view: "field-technician-dispatch-en-route-update-en-route-status-&-eta",
              dataModelReference: { models: ["assignment_id", "travel_eta_minutes", "technician_id"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "field-technician-dispatch-en-route-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "On_Site_Work",
          label: "On Site Work",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "field-technician-dispatch-on-site-work-start",
              dataModelReference: { models: [] }
            },
            {
              id: "perform_on_site_work",
              label: "Perform On-Site Repair & Record",
              type: "manual",
              status: "pending",
              view: "field-technician-dispatch-on-site-work-perform-on-site-repair-&-record",
              dataModelReference: { models: ["repair_id", "repair_status", "on_site_tools", "parts_list", "root_cause"] }
            },
            {
              id: "capture_signoff",
              label: "Capture Customer Signoff & Evidence",
              type: "manual",
              status: "pending",
              view: "field-technician-dispatch-on-site-work-capture-customer-signoff-&-evidence",
              dataModelReference: { models: ["repair_id", "customer_id", "logs_link"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "field-technician-dispatch-on-site-work-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Completion",
          label: "Completion",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "field-technician-dispatch-completion-start",
              dataModelReference: { models: [] }
            },
            {
              id: "close_assignment",
              label: "Close Assignment & Update Records",
              type: "manual",
              status: "pending",
              view: "field-technician-dispatch-completion-close-assignment-&-update-records",
              dataModelReference: { models: ["assignment_id", "repair_status", "order_id", "order_status"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "field-technician-dispatch-completion-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new FieldTechnicianDispatchCase();