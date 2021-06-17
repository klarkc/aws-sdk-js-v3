"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerlessApplicationRepository = void 0;
const ServerlessApplicationRepositoryClient_1 = require("./ServerlessApplicationRepositoryClient");
const CreateApplicationCommand_1 = require("./commands/CreateApplicationCommand");
const CreateApplicationVersionCommand_1 = require("./commands/CreateApplicationVersionCommand");
const CreateCloudFormationChangeSetCommand_1 = require("./commands/CreateCloudFormationChangeSetCommand");
const CreateCloudFormationTemplateCommand_1 = require("./commands/CreateCloudFormationTemplateCommand");
const DeleteApplicationCommand_1 = require("./commands/DeleteApplicationCommand");
const GetApplicationCommand_1 = require("./commands/GetApplicationCommand");
const GetApplicationPolicyCommand_1 = require("./commands/GetApplicationPolicyCommand");
const GetCloudFormationTemplateCommand_1 = require("./commands/GetCloudFormationTemplateCommand");
const ListApplicationDependenciesCommand_1 = require("./commands/ListApplicationDependenciesCommand");
const ListApplicationVersionsCommand_1 = require("./commands/ListApplicationVersionsCommand");
const ListApplicationsCommand_1 = require("./commands/ListApplicationsCommand");
const PutApplicationPolicyCommand_1 = require("./commands/PutApplicationPolicyCommand");
const UnshareApplicationCommand_1 = require("./commands/UnshareApplicationCommand");
const UpdateApplicationCommand_1 = require("./commands/UpdateApplicationCommand");
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
class ServerlessApplicationRepository extends ServerlessApplicationRepositoryClient_1.ServerlessApplicationRepositoryClient {
    createApplication(args, optionsOrCb, cb) {
        const command = new CreateApplicationCommand_1.CreateApplicationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createApplicationVersion(args, optionsOrCb, cb) {
        const command = new CreateApplicationVersionCommand_1.CreateApplicationVersionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createCloudFormationChangeSet(args, optionsOrCb, cb) {
        const command = new CreateCloudFormationChangeSetCommand_1.CreateCloudFormationChangeSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createCloudFormationTemplate(args, optionsOrCb, cb) {
        const command = new CreateCloudFormationTemplateCommand_1.CreateCloudFormationTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteApplication(args, optionsOrCb, cb) {
        const command = new DeleteApplicationCommand_1.DeleteApplicationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getApplication(args, optionsOrCb, cb) {
        const command = new GetApplicationCommand_1.GetApplicationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getApplicationPolicy(args, optionsOrCb, cb) {
        const command = new GetApplicationPolicyCommand_1.GetApplicationPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getCloudFormationTemplate(args, optionsOrCb, cb) {
        const command = new GetCloudFormationTemplateCommand_1.GetCloudFormationTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listApplicationDependencies(args, optionsOrCb, cb) {
        const command = new ListApplicationDependenciesCommand_1.ListApplicationDependenciesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listApplications(args, optionsOrCb, cb) {
        const command = new ListApplicationsCommand_1.ListApplicationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listApplicationVersions(args, optionsOrCb, cb) {
        const command = new ListApplicationVersionsCommand_1.ListApplicationVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putApplicationPolicy(args, optionsOrCb, cb) {
        const command = new PutApplicationPolicyCommand_1.PutApplicationPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    unshareApplication(args, optionsOrCb, cb) {
        const command = new UnshareApplicationCommand_1.UnshareApplicationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateApplication(args, optionsOrCb, cb) {
        const command = new UpdateApplicationCommand_1.UpdateApplicationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.ServerlessApplicationRepository = ServerlessApplicationRepository;
//# sourceMappingURL=ServerlessApplicationRepository.js.map