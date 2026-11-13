export const tickets = [
  {
    id: "RF-1042",
    customer: "Olivia Martin",
    subject: "Unable to update billing",
    priority: "Urgent",
    status: "Open",
    createdAt: "2026-11-14",
    messages: [
      {
        id: 1,
        sender: "Olivia Martin",
        message:
          "I'm unable to update my billing information. Every time I save the changes, I get an error.",
        createdAt: "2026-11-14T09:15:00",
        type: "reply",
      },
      {
        id: 2,
        sender: "Support Agent",
        message:
          "Hi Olivia, sorry you're experiencing this. Could you share a screenshot of the error?",
        createdAt: "2026-11-14T09:30:00",
        type: "reply",
      },
      {
        id: 3,
        sender: "Support Agent",
        message: "Billing issue reported. Needs urgent investigation.",
        createdAt: "2026-11-14T09:35:00",
        type: "note",
      },
    ],
  },
  {
    id: "RF-1041",
    customer: "Liam Johnson",
    subject: "Question about account permissions",
    priority: "High",
    status: "Pending",
    createdAt: "2026-11-13",
    messages: [
      {
        id: 1,
        sender: "Liam Johnson",
        message:
          "How can I give my team members access to specific sections of the dashboard?",
        createdAt: "2026-11-13T10:00:00",
        type: "reply",
      },
      {
        id: 2,
        sender: "Support Agent",
        message:
          "You can manage team permissions from Settings > Team Management.",
        createdAt: "2026-11-13T10:20:00",
        type: "reply",
      },
      {
        id: 3,
        sender: "Support Agent",
        message:
          "Waiting for the customer to confirm whether the instructions worked.",
        createdAt: "2026-11-13T10:25:00",
        type: "note",
      },
    ],
  },
  {
    id: "RF-1040",
    customer: "Emma Williams",
    subject: "Exported report has missing data",
    priority: "Medium",
    status: "Open",
    createdAt: "2026-11-13",
    messages: [
      {
        id: 1,
        sender: "Emma Williams",
        message:
          "I exported my monthly report, but several rows are missing from the downloaded file.",
        createdAt: "2026-11-13T11:00:00",
        type: "reply",
      },
      {
        id: 2,
        sender: "Support Agent",
        message:
          "Thanks for reporting this, Emma. Could you tell us which date range you selected?",
        createdAt: "2026-11-13T11:15:00",
        type: "reply",
      },
    ],
  },
  {
    id: "RF-1039",
    customer: "Noah Brown",
    subject: "Password reset email not received",
    priority: "High",
    status: "Resolved",
    createdAt: "2026-11-12",
    messages: [
      {
        id: 1,
        sender: "Noah Brown",
        message:
          "I've requested a password reset several times, but I haven't received an email.",
        createdAt: "2026-11-12T08:30:00",
        type: "reply",
      },
      {
        id: 2,
        sender: "Support Agent",
        message:
          "We found that the reset email was being blocked. Please check your spam folder and try again.",
        createdAt: "2026-11-12T09:00:00",
        type: "reply",
      },
      {
        id: 3,
        sender: "Noah Brown",
        message:
          "That worked! I received the email and successfully reset my password. Thanks!",
        createdAt: "2026-11-12T09:20:00",
        type: "reply",
      },
    ],
  },
  {
    id: "RF-1038",
    customer: "Sophia Davis",
    subject: "Change notification settings",
    priority: "Low",
    status: "Resolved",
    createdAt: "2026-11-12",
    messages: [
      {
        id: 1,
        sender: "Sophia Davis",
        message:
          "I'd like to stop receiving email notifications for product updates. How can I do that?",
        createdAt: "2026-11-12T10:00:00",
        type: "reply",
      },
      {
        id: 2,
        sender: "Support Agent",
        message:
          "You can manage these preferences under Settings > Notifications.",
        createdAt: "2026-11-12T10:15:00",
        type: "reply",
      },
      {
        id: 3,
        sender: "Sophia Davis",
        message: "Found it! I've updated my preferences. Thank you.",
        createdAt: "2026-11-12T10:30:00",
        type: "reply",
      },
    ],
  },
  {
    id: "RF-1037",
    customer: "James Wilson",
    subject: "Unable to access dashboard",
    priority: "Urgent",
    status: "Open",
    createdAt: "2026-11-11",
    messages: [
      {
        id: 1,
        sender: "James Wilson",
        message:
          "My dashboard keeps showing a blank screen after I log in. This is preventing me from working.",
        createdAt: "2026-11-11T08:45:00",
        type: "reply",
      },
      {
        id: 2,
        sender: "Support Agent",
        message:
          "We're investigating this issue. Could you confirm which browser you're using?",
        createdAt: "2026-11-11T09:00:00",
        type: "reply",
      },
      {
        id: 3,
        sender: "Support Agent",
        message:
          "Possible dashboard rendering issue. Escalated for technical investigation.",
        createdAt: "2026-11-11T09:10:00",
        type: "note",
      },
    ],
  },
  {
    id: "RF-1036",
    customer: "Ava Taylor",
    subject: "Request for subscription upgrade",
    priority: "Medium",
    status: "Pending",
    createdAt: "2026-11-10",
    messages: [
      {
        id: 1,
        sender: "Ava Taylor",
        message:
          "I'd like to upgrade my current subscription to the next available plan.",
        createdAt: "2026-11-10T12:00:00",
        type: "reply",
      },
      {
        id: 2,
        sender: "Support Agent",
        message:
          "Certainly! Could you confirm which plan you're interested in?",
        createdAt: "2026-11-10T12:20:00",
        type: "reply",
      },
    ],
  },
  {
    id: "RF-1035",
    customer: "William Anderson",
    subject: "Invoice download issue",
    priority: "Low",
    status: "Open",
    createdAt: "2026-11-09",
    messages: [
      {
        id: 1,
        sender: "William Anderson",
        message:
          "I'm unable to download my latest invoice. The download button doesn't seem to work.",
        createdAt: "2026-11-09T14:00:00",
        type: "reply",
      },
      {
        id: 2,
        sender: "Support Agent",
        message:
          "Please try downloading the invoice using a different browser and let us know if the issue persists.",
        createdAt: "2026-11-09T14:15:00",
        type: "reply",
      },
    ],
  },
  {
    id: "RF-1034",
    customer: "Mia Thomas",
    subject: "Account temporarily locked",
    priority: "High",
    status: "Resolved",
    createdAt: "2026-11-08",
    messages: [
      {
        id: 1,
        sender: "Mia Thomas",
        message:
          "My account has been temporarily locked after multiple login attempts.",
        createdAt: "2026-11-08T09:00:00",
        type: "reply",
      },
      {
        id: 2,
        sender: "Support Agent",
        message:
          "We've verified your account and restored access. Please try logging in again.",
        createdAt: "2026-11-08T09:30:00",
        type: "reply",
      },
      {
        id: 3,
        sender: "Mia Thomas",
        message: "I'm able to log in now. Thank you for your help!",
        createdAt: "2026-11-08T09:45:00",
        type: "reply",
      },
    ],
  },
  {
    id: "RF-1033",
    customer: "Benjamin Moore",
    subject: "Unable to change email address",
    priority: "Medium",
    status: "Pending",
    createdAt: "2026-11-07",
    messages: [
      {
        id: 1,
        sender: "Benjamin Moore",
        message:
          "I want to change the email address associated with my account, but the verification link isn't working.",
        createdAt: "2026-11-07T11:00:00",
        type: "reply",
      },
      {
        id: 2,
        sender: "Support Agent",
        message:
          "We've sent you a new verification link. Please check your inbox and try again.",
        createdAt: "2026-11-07T11:20:00",
        type: "reply",
      },
    ],
  },
];
