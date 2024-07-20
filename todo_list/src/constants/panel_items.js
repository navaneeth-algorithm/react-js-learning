const PANEL_ITEMS = {
  'start': [
    {id: 's1a2b3c4', title: 'Project Google Map', content: 'Just started with initial setup and planning. The team is currently defining project scope.', created_date: '2024-07-01'},
    {id: 's2b3c4d5', title: 'Project Alpha', content: 'Research phase includes gathering requirements and competitor analysis. The team is focusing on feasibility studies.', created_date: '2024-07-02'},
    {id: 's3c4d5e6', title: 'Project Beta', content: 'Initial planning and strategy meetings are ongoing. Team roles and responsibilities are being assigned.', created_date: '2024-07-03'},
    {id: 's4d5e6f7', title: 'Project Gamma', content: 'Team formation is in progress with recruitment and onboarding. Kick-off meetings are scheduled for next week.', created_date: '2024-07-04'},
    {id: 's5e6f7g8', title: 'Project Delta', content: 'Requirement gathering sessions are being conducted with stakeholders. Detailed project documentation is being prepared.', created_date: '2024-07-05'},
    {id: 's6f7g8h9', title: 'Project Epsilon', content: 'Initial design and brainstorming. The project is in the conceptual phase.', created_date: '2024-07-06'},
    {id: 's7g8h9i0', title: 'Project Zeta', content: 'Meeting with stakeholders and gathering input. Preliminary designs are being considered.', created_date: '2024-07-07'},
    {id: 's8h9i0j1', title: 'Project Eta', content: 'Setting up the project team and initial tools. Basic frameworks are being established.', created_date: '2024-07-08'},
    {id: 's9i0j1k2', title: 'Project Theta', content: 'Defining project milestones and deliverables. The team is finalizing the project timeline.', created_date: '2024-07-09'},
    {id: 's0j1k2l3', title: 'Project Iota', content: 'Identifying potential risks and mitigation strategies. The project charter is being drafted.', created_date: '2024-07-10'}
  ],
  'progress': [
    {id: 'p1a2b3c4', title: 'Project Epsilon', content: 'Development ongoing with daily sprints and code reviews. The team is addressing initial bugs and issues.', created_date: '2024-06-20'},
    {id: 'p2b3c4d5', title: 'Project Zeta', content: 'Design phase includes creating wireframes and mockups. User experience is being refined through feedback.', created_date: '2024-06-21'},
    {id: 'p3c4d5e6', title: 'Project Eta', content: 'Prototyping stage involves building and testing initial models. Adjustments are being made based on user testing results.', created_date: '2024-06-22'},
    {id: 'p4d5e6f7', title: 'Project Theta', content: 'Testing phase is in full swing with various test cases. The team is ensuring functionality and performance meet standards.', created_date: '2024-06-23'},
    {id: 'p5e6f7g8', title: 'Project Iota', content: 'Integration of different modules is currently happening. The team is resolving compatibility issues between components.', created_date: '2024-06-24'},
    {id: 'p6f7g8h9', title: 'Project Kappa', content: 'System integration tests are being conducted. User feedback is being collected and analyzed.', created_date: '2024-06-25'},
    {id: 'p7g8h9i0', title: 'Project Lambda', content: 'Performance tuning and optimization. Ensuring the system meets all performance benchmarks.', created_date: '2024-06-26'},
    {id: 'p8h9i0j1', title: 'Project Mu', content: 'Security testing and vulnerability assessment. Implementing fixes and enhancements.', created_date: '2024-06-27'},
    {id: 'p9i0j1k2', title: 'Project Nu', content: 'Preparing for the final release. All features are being locked down and finalized.', created_date: '2024-06-28'},
    {id: 'p0j1k2l3', title: 'Project Xi', content: 'Finalizing documentation and user guides. The team is preparing for project handover.', created_date: '2024-06-29'}
  ],
  'done': [
    {id: 'd1a2b3c4', title: 'Project Kappa', content: 'Completed successfully with all deliverables met. Final reports and presentations have been submitted.', created_date: '2024-05-15'},
    {id: 'd2b3c4d5', title: 'Project Lambda', content: 'Deployed to production environment. The team is monitoring system performance and user feedback.', created_date: '2024-05-16'},
    {id: 'd3c4d5e6', title: 'Project Mu', content: 'Reviewed by stakeholders and approved. Post-project review and lessons learned session has been conducted.', created_date: '2024-05-17'},
    {id: 'd4d5e6f7', title: 'Project Nu', content: 'Documentation finished and archived for future reference. The team is wrapping up and moving to new assignments.', created_date: '2024-05-18'},
    {id: 'd5e6f7g8', title: 'Project Xi', content: 'Closed after final approval from the client. All project resources have been reallocated to other projects.', created_date: '2024-05-19'},
    {id: 'd6f7g8h9', title: 'Project Omicron', content: 'Successfully transitioned to maintenance mode. Final user training sessions have been completed.', created_date: '2024-05-20'},
    {id: 'd7g8h9i0', title: 'Project Pi', content: 'Post-deployment monitoring is complete. The project achieved all performance targets.', created_date: '2024-05-21'},
    {id: 'd8h9i0j1', title: 'Project Rho', content: 'Client satisfaction survey results are positive. The team is conducting a post-mortem analysis.', created_date: '2024-05-22'},
    {id: 'd9i0j1k2', title: 'Project Sigma', content: 'Final data migration completed. The legacy system has been decommissioned.', created_date: '2024-05-23'},
    {id: 'd0j1k2l3', title: 'Project Tau', content: 'Project closure documentation has been signed off. All project files have been archived.', created_date: '2024-05-24'}
  ]
}


export {PANEL_ITEMS};
