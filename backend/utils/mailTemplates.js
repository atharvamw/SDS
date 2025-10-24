export const mailTemplates = {
  projectApproved: ({ name, title }) => `
    <div style="font-family:Arial,sans-serif; padding:20px; line-height:1.6;">
      <h2 style="color:#6d28d9;">Hi ${name},</h2>
      <p>Your project <strong>${title}</strong> has been <b>approved</b> by SDS Club 🎉</p>
      <p>We’re excited to see your idea come to life!</p>
      <br/>
      <p style="color:#555;">– SDS Club, COEP</p>
    </div>
  `,

  projectRejected: ({ name, title }) => `
    <div style="font-family:Arial,sans-serif; padding:20px; line-height:1.6;">
      <h2 style="color:#dc2626;">Hi ${name},</h2>
      <p>Unfortunately, your project <strong>${title}</strong> was <b>not approved</b> this time.</p>
      <p>You can refine and reapply later. Keep innovating!</p>
      <br/>
      <p style="color:#555;">– SDS Club, COEP</p>
    </div>
  `,

  contactForm: ({ name, email, message }) => `
    <div style="font-family:Arial,sans-serif; padding:20px; line-height:1.6;">
      <h2 style="color:#6d28d9;">New Contact Form Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="background:#f3f4f6; padding:10px; border-left:4px solid #6d28d9;">${message}</blockquote>
      <br/>
      <p style="color:#555;">– SDS Website</p>
    </div>
  `,
  projectRequestSent: ({ name, title }) => `
    <div style="font-family:Arial,sans-serif; padding:20px; line-height:1.6;">
      <h2 style="color:#6d28d9;">Hi ${name},</h2>
      <p>Your project <strong>${title}</strong> has been <b>received</b> by SDS Club</p>
      <p>Please wait while SDS team goes through your project.</p>
      <br/>
      <p style="color:#555;">– SDS Club, COEP</p>
    </div>
  `
};
