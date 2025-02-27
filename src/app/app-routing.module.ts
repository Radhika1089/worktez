/*********************************************************** 
* Copyright (C) 2022 
* Worktez 
* 
* This program is free software; you can redistribute it and/or 
* modify it under the terms of the MIT License 
* 
* 
* This program is distributed in the hope that it will be useful, 
* but WITHOUT ANY WARRANTY; without even the implied warranty of 
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
* See the MIT License for more details. 
***********************************************************/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './body/login/login.component';
import { BoardComponent } from './body/board/board.component';
import { TaskDetailsComponent } from './body/task-details/task-details.component';
import { TasksComponent } from './body/tasks/tasks.component';
import { AngularFireAuthGuard, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';
import { MyDashBoardComponent } from './body/my-dashboard/my-dashboard.component';
import { SocialPageComponent } from './body/social-page/social-page.component';
import { CreateNewOrganizationComponent } from './body/create-new-organization/create-new-organization.component';
import { CreateNewTeamComponent } from './body/create-new-team/create-new-team.component';
// import { Patch1Component } from './patches/patch1/patch1.component';
// import { Patch2Component } from './patches/patch2/patch2.component';
// import { Patch3Component } from './patches/patch3/patch3.component';
// import { Patch4Component } from './patches/patch4/patch4.component';
// import { Patch5Component } from './patches/patch5/patch5.component';
// import { Patch6Component } from './patches/patch6/patch6.component';
// import { Patch7Component } from './patches/patch7/patch7.component';
// import { Patch8Component } from './patches/patch8/patch8.component';
// import { Patch9Component } from './patches/patch9/patch9.component';
// import { Patch10Component } from './patches/patch10/patch10.component';
import { UserVerificationComponent } from './user-verification/user-verification.component';
import { ProfileComponent } from './body/profile/profile.component';
import { SetupComponent } from './body/setup/setup.component';
import { HomeComponent } from './body/home/home.component';
import { ViewOrganizationDetailsComponent } from './body/view-organization-details/view-organization-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TasksEvaluationComponent } from './body/tasks-evaluation/tasks-evaluation.component';
import { ListPatchesComponent } from './list-patches/list-patches.component';
import { PrivacyComponent} from './body/privacy/privacy.component';
import { CopyrightComponent } from './body/copyright/copyright.component'
import { ContributorsComponent } from './body/contributors/contributors.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { ReleaseNotesComponent } from './body/release-notes/release-notes.component';
import { KanbanBoardComponent } from './body/kanban-board/kanban-board.component';
import { SchedularPatchComponent } from './patches/schedular-patch/schedular-patch.component';
import { TeamDetailsComponent } from './body/team-details/team-details.component';
import { FilterPageComponent } from './body/filter-page/filter-page.component';
import { MilestoneComponent } from './body/milestone/milestone.component';
import { MilestoneDetailsComponent } from './body/milestone-details/milestone-details.component';
import { PricingComponent } from './body/pricing/pricing.component';
import { AllNotificationComponent } from './header/notification-center/all-notification/all-notification.component';
import { CurrenPlanComponent } from './body/curren-plan/curren-plan.component';
import { PaymentStatusComponent } from './body/payment-status/payment-status.component';
import { StandardSubscriptionComponent } from './body/standard-subscription/standard-subscription.component';
import { ReleaseComponent } from './body/release/release.component';
import { ReleaseDetailsComponent } from './body/release-details/release-details.component';
import { DocumentationsComponent } from './body/documentations/documentations.component';
import { GetStartedComponent } from './body/get-started/get-started.component';
import { FeaturesPageComponent } from './body/features-page/features-page.component';
import { ResetPasswordComponent } from './body/reset-password/reset-password.component';
import { BlogsComponent } from './body/blogs/blogs.component';
import { GitIntegrationBlogComponent } from './body/blogs/git-integration-blog/git-integration-blog.component';
import { AgileFunctionalitiesComponent } from './body/blogs/agile-functionalities/agile-functionalities.component';
import { DevOpsComponent } from './body/blogs/dev-ops/dev-ops.component';
import { MetaVerseComponent } from './body/blogs/meta-verse/meta-verse.component';
import { KanbanBoardBlogComponent } from './body/blogs/kanban-board-blog/kanban-board-blog.component';

const redirectLoggedInToDashboard = () => redirectLoggedInTo(['MyDashboard']);

const routes: Routes = [
  { path: '', component: HomeComponent, title: "Worktez"},
  // { path: 'Home', component: HomeComponent, title: "Worktez"},
  { path: 'verifyUser/:organizationDomain/:teamName/:teamId/:userEmail', component: UserVerificationComponent },
  { path: 'Board', component: BoardComponent, title: "Board", canActivate: [AngularFireAuthGuard]},
  { path: 'Tasks/:teamId/:currentSprintName', component: TasksComponent, canActivate: [AngularFireAuthGuard] },
  { path: 'TasksEvaluation', component: TasksEvaluationComponent, canActivate: [AngularFireAuthGuard] },
  { path: 'TaskDetails/:taskId', component: TaskDetailsComponent, canActivate: [AngularFireAuthGuard] },
  { path: 'MyDashboard', component: MyDashBoardComponent, canActivate: [AngularFireAuthGuard] },
  { path: 'techverse', component: SocialPageComponent, title: "Techverse"},
  { path: 'FilterPage', component: FilterPageComponent},
  { path: 'CreateNewOrganization', component: CreateNewOrganizationComponent, canActivate: [AngularFireAuthGuard] },
  { path: 'CreateNewTeam', component: CreateNewTeamComponent, canActivate: [AngularFireAuthGuard] },
  { path: 'TeamDetails/:teamId', component: TeamDetailsComponent, canActivate: [AngularFireAuthGuard] },
  { path: 'CurrentPlan', component: CurrenPlanComponent, canActivate: [AngularFireAuthGuard] },
  // { path: 'Patch1', component: Patch1Component },
  // { path: 'Patch2', component: Patch2Component },
  // { path: 'Patch3', component: Patch3Component },
  // { path: 'Patch4', component: Patch4Component },
  // { path: 'Patch5', component: Patch5Component },
  // { path: 'Patch6', component: Patch6Component },
  // { path: 'Patch7', component: Patch7Component },
  // { path: 'Patch8', component: Patch8Component },
  // { path: 'Patch9', component: Patch9Component },
  // { path: 'Patch10', component: Patch10Component },
  { path: 'SchedularPatch', component: SchedularPatchComponent },
  { path: "login", component: LoginComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToDashboard } },
  { path: 'profile/:username', component: ProfileComponent, canActivate: [AngularFireAuthGuard] },
  { path: 'UpdateTeam/:teamId', component: CreateNewTeamComponent, canActivate: [AngularFireAuthGuard]},
  { path: 'setup', component: SetupComponent, canActivate: [AngularFireAuthGuard]},
  { path: 'ViewOrganizationDetails', component: ViewOrganizationDetailsComponent, canActivate: [AngularFireAuthGuard]},
  { path: 'Releases', component:ReleaseComponent},
  { path: 'ListPatches', component: ListPatchesComponent },
  { path: 'privacy', component: PrivacyComponent, title: "Privacy" },
  { path: 'copyright', component: CopyrightComponent, title: "Copyright" },
  { path: 'contributors', component: ContributorsComponent },
  { path: 'termsandcondition', component: TermsAndConditionComponent},
  { path: 'releasenotes', component: ReleaseNotesComponent },
  { path: 'KanbanBoard', component: KanbanBoardComponent, canActivate: [AngularFireAuthGuard]},
  { path: 'Milestones', component:MilestoneComponent, canActivate: [AngularFireAuthGuard]},
  { path: 'ReleaseDetails/:ReleaseId', component:ReleaseDetailsComponent, canActivate:[AngularFireAuthGuard]},
  { path: 'MilestoneDetails/:MilestoneId', component:MilestoneDetailsComponent, canActivate:[AngularFireAuthGuard]},
  { path: 'Pricing', component:PricingComponent, title: "Pricing" },
  { path: 'PaymentStatus/:orderId/:paymentId/:signature/:subscriptionId', component:PaymentStatusComponent, canActivate:[AngularFireAuthGuard] },
  { path: 'Standard', component:StandardSubscriptionComponent},
  { path: 'Notifications', component:AllNotificationComponent },
  { path: 'PaymentStatus/:orderId/:paymentId/:signature/:subscriptionId', component:PaymentStatusComponent, canActivate:[AngularFireAuthGuard] },
  { path: 'Standard', component:StandardSubscriptionComponent},
  { path: 'Documentations', component:DocumentationsComponent },
  { path: 'GettingStarted', component: GetStartedComponent },
  { path: 'Features/:currentSection', component: FeaturesPageComponent,},
  {
    path: 'auth',
    children: [
      {
        path: 'resetPass',
        component: ResetPasswordComponent,
        data: { title: 'Reset Password' }
      }
    ]
  },
  {path: 'blogs', component: BlogsComponent},
  {path: 'blogs/git-integration', component: GitIntegrationBlogComponent},
  {path: 'blogs/agile-functionalities', component: AgileFunctionalitiesComponent},
  {path: 'blogs/devops-functionalities', component: DevOpsComponent},
  {path: 'blogs/metaverse', component: MetaVerseComponent},
  {path: 'blogs/kanban-board', component: KanbanBoardBlogComponent, },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
