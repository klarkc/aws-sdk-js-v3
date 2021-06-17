import { ServerlessApplicationRepositoryClient } from "./ServerlessApplicationRepositoryClient";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand";
import { CreateApplicationVersionCommandInput, CreateApplicationVersionCommandOutput } from "./commands/CreateApplicationVersionCommand";
import { CreateCloudFormationChangeSetCommandInput, CreateCloudFormationChangeSetCommandOutput } from "./commands/CreateCloudFormationChangeSetCommand";
import { CreateCloudFormationTemplateCommandInput, CreateCloudFormationTemplateCommandOutput } from "./commands/CreateCloudFormationTemplateCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "./commands/GetApplicationCommand";
import { GetApplicationPolicyCommandInput, GetApplicationPolicyCommandOutput } from "./commands/GetApplicationPolicyCommand";
import { GetCloudFormationTemplateCommandInput, GetCloudFormationTemplateCommandOutput } from "./commands/GetCloudFormationTemplateCommand";
import { ListApplicationDependenciesCommandInput, ListApplicationDependenciesCommandOutput } from "./commands/ListApplicationDependenciesCommand";
import { ListApplicationVersionsCommandInput, ListApplicationVersionsCommandOutput } from "./commands/ListApplicationVersionsCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand";
import { PutApplicationPolicyCommandInput, PutApplicationPolicyCommandOutput } from "./commands/PutApplicationPolicyCommand";
import { UnshareApplicationCommandInput, UnshareApplicationCommandOutput } from "./commands/UnshareApplicationCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>The AWS Serverless Application Repository makes it easy for developers and enterprises to quickly find
 *  and deploy serverless applications in the AWS Cloud. For more information about serverless applications,
 *  see Serverless Computing and Applications on the AWS website.</p><p>The AWS Serverless Application Repository is deeply integrated with the AWS Lambda console, so that developers of
 *  all levels can get started with serverless computing without needing to learn anything new. You can use category
 *  keywords to browse for applications such as web and mobile backends, data processing applications, or chatbots.
 *  You can also search for applications by name, publisher, or event source. To use an application, you simply choose it,
 *  configure any required fields, and deploy it with a few clicks. </p><p>You can also easily publish applications, sharing them publicly with the community at large, or privately
 *  within your team or across your organization. To publish a serverless application (or app), you can use the
 *  AWS Management Console, AWS Command Line Interface (AWS CLI), or AWS SDKs to upload the code. Along with the
 *  code, you upload a simple manifest file, also known as the AWS Serverless Application Model (AWS SAM) template.
 *  For more information about AWS SAM, see AWS Serverless Application Model (AWS SAM) on the AWS Labs
 *  GitHub repository.</p><p>The AWS Serverless Application Repository Developer Guide contains more information about the two developer
 *  experiences available:</p><ul>
 *  <li>
 *  <p>Consuming Applications – Browse for applications and view information about them, including
 *  source code and readme files. Also install, configure, and deploy applications of your choosing. </p>
 *  <p>Publishing Applications – Configure and upload applications to make them available to other
 *  developers, and publish new versions of applications. </p>
 *  </li>
 *  </ul>
 */
export declare class ServerlessApplicationRepository extends ServerlessApplicationRepositoryClient {
    /**
     * <p>Creates an application, optionally including an AWS SAM file to create the first application version in the same call.</p>
     */
    createApplication(args: CreateApplicationCommandInput, options?: __HttpHandlerOptions): Promise<CreateApplicationCommandOutput>;
    createApplication(args: CreateApplicationCommandInput, cb: (err: any, data?: CreateApplicationCommandOutput) => void): void;
    createApplication(args: CreateApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateApplicationCommandOutput) => void): void;
    /**
     * <p>Creates an application version.</p>
     */
    createApplicationVersion(args: CreateApplicationVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreateApplicationVersionCommandOutput>;
    createApplicationVersion(args: CreateApplicationVersionCommandInput, cb: (err: any, data?: CreateApplicationVersionCommandOutput) => void): void;
    createApplicationVersion(args: CreateApplicationVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateApplicationVersionCommandOutput) => void): void;
    /**
     * <p>Creates an AWS CloudFormation change set for the given application.</p>
     */
    createCloudFormationChangeSet(args: CreateCloudFormationChangeSetCommandInput, options?: __HttpHandlerOptions): Promise<CreateCloudFormationChangeSetCommandOutput>;
    createCloudFormationChangeSet(args: CreateCloudFormationChangeSetCommandInput, cb: (err: any, data?: CreateCloudFormationChangeSetCommandOutput) => void): void;
    createCloudFormationChangeSet(args: CreateCloudFormationChangeSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCloudFormationChangeSetCommandOutput) => void): void;
    /**
     * <p>Creates an AWS CloudFormation template.</p>
     */
    createCloudFormationTemplate(args: CreateCloudFormationTemplateCommandInput, options?: __HttpHandlerOptions): Promise<CreateCloudFormationTemplateCommandOutput>;
    createCloudFormationTemplate(args: CreateCloudFormationTemplateCommandInput, cb: (err: any, data?: CreateCloudFormationTemplateCommandOutput) => void): void;
    createCloudFormationTemplate(args: CreateCloudFormationTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCloudFormationTemplateCommandOutput) => void): void;
    /**
     * <p>Deletes the specified application.</p>
     */
    deleteApplication(args: DeleteApplicationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApplicationCommandOutput>;
    deleteApplication(args: DeleteApplicationCommandInput, cb: (err: any, data?: DeleteApplicationCommandOutput) => void): void;
    deleteApplication(args: DeleteApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteApplicationCommandOutput) => void): void;
    /**
     * <p>Gets the specified application.</p>
     */
    getApplication(args: GetApplicationCommandInput, options?: __HttpHandlerOptions): Promise<GetApplicationCommandOutput>;
    getApplication(args: GetApplicationCommandInput, cb: (err: any, data?: GetApplicationCommandOutput) => void): void;
    getApplication(args: GetApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetApplicationCommandOutput) => void): void;
    /**
     * <p>Retrieves the policy for the application.</p>
     */
    getApplicationPolicy(args: GetApplicationPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetApplicationPolicyCommandOutput>;
    getApplicationPolicy(args: GetApplicationPolicyCommandInput, cb: (err: any, data?: GetApplicationPolicyCommandOutput) => void): void;
    getApplicationPolicy(args: GetApplicationPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetApplicationPolicyCommandOutput) => void): void;
    /**
     * <p>Gets the specified AWS CloudFormation template.</p>
     */
    getCloudFormationTemplate(args: GetCloudFormationTemplateCommandInput, options?: __HttpHandlerOptions): Promise<GetCloudFormationTemplateCommandOutput>;
    getCloudFormationTemplate(args: GetCloudFormationTemplateCommandInput, cb: (err: any, data?: GetCloudFormationTemplateCommandOutput) => void): void;
    getCloudFormationTemplate(args: GetCloudFormationTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCloudFormationTemplateCommandOutput) => void): void;
    /**
     * <p>Retrieves the list of applications nested in the containing application.</p>
     */
    listApplicationDependencies(args: ListApplicationDependenciesCommandInput, options?: __HttpHandlerOptions): Promise<ListApplicationDependenciesCommandOutput>;
    listApplicationDependencies(args: ListApplicationDependenciesCommandInput, cb: (err: any, data?: ListApplicationDependenciesCommandOutput) => void): void;
    listApplicationDependencies(args: ListApplicationDependenciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListApplicationDependenciesCommandOutput) => void): void;
    /**
     * <p>Lists applications owned by the requester.</p>
     */
    listApplications(args: ListApplicationsCommandInput, options?: __HttpHandlerOptions): Promise<ListApplicationsCommandOutput>;
    listApplications(args: ListApplicationsCommandInput, cb: (err: any, data?: ListApplicationsCommandOutput) => void): void;
    listApplications(args: ListApplicationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListApplicationsCommandOutput) => void): void;
    /**
     * <p>Lists versions for the specified application.</p>
     */
    listApplicationVersions(args: ListApplicationVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListApplicationVersionsCommandOutput>;
    listApplicationVersions(args: ListApplicationVersionsCommandInput, cb: (err: any, data?: ListApplicationVersionsCommandOutput) => void): void;
    listApplicationVersions(args: ListApplicationVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListApplicationVersionsCommandOutput) => void): void;
    /**
     * <p>Sets the permission policy for an application. For the list of actions supported for this operation, see
     *  <a href="https://docs.aws.amazon.com/serverlessrepo/latest/devguide/access-control-resource-based.html#application-permissions">Application
     *  Permissions</a>
     *  .</p>
     */
    putApplicationPolicy(args: PutApplicationPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutApplicationPolicyCommandOutput>;
    putApplicationPolicy(args: PutApplicationPolicyCommandInput, cb: (err: any, data?: PutApplicationPolicyCommandOutput) => void): void;
    putApplicationPolicy(args: PutApplicationPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutApplicationPolicyCommandOutput) => void): void;
    /**
     * <p>Unshares an application from an AWS Organization.</p><p>This operation can be called only from the organization's master account.</p>
     */
    unshareApplication(args: UnshareApplicationCommandInput, options?: __HttpHandlerOptions): Promise<UnshareApplicationCommandOutput>;
    unshareApplication(args: UnshareApplicationCommandInput, cb: (err: any, data?: UnshareApplicationCommandOutput) => void): void;
    unshareApplication(args: UnshareApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UnshareApplicationCommandOutput) => void): void;
    /**
     * <p>Updates the specified application.</p>
     */
    updateApplication(args: UpdateApplicationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateApplicationCommandOutput>;
    updateApplication(args: UpdateApplicationCommandInput, cb: (err: any, data?: UpdateApplicationCommandOutput) => void): void;
    updateApplication(args: UpdateApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateApplicationCommandOutput) => void): void;
}
