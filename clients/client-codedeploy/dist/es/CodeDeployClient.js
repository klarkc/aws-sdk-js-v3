import { __assign, __extends } from "tslib";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import { resolveEndpointsConfig, resolveRegionConfig, } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { getHostHeaderPlugin, resolveHostHeaderConfig, } from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import { getAwsAuthPlugin, resolveAwsAuthConfig, } from "@aws-sdk/middleware-signing";
import { getUserAgentPlugin, resolveUserAgentConfig, } from "@aws-sdk/middleware-user-agent";
import { Client as __Client, } from "@aws-sdk/smithy-client";
/**
 * <fullname>AWS CodeDeploy</fullname>
 *         <p>AWS CodeDeploy is a deployment service that automates application deployments to
 *             Amazon EC2 instances, on-premises instances running in your own facility, serverless AWS
 *             Lambda functions, or applications in an Amazon ECS service.</p>
 *         <p>You can deploy a nearly unlimited variety of application content, such as an updated
 *             Lambda function, updated applications in an Amazon ECS service, code, web and
 *             configuration files, executables, packages, scripts, multimedia files, and so on. AWS
 *             CodeDeploy can deploy application content stored in Amazon S3 buckets, GitHub
 *             repositories, or Bitbucket repositories. You do not need to make changes to your
 *             existing code before you can use AWS CodeDeploy.</p>
 *         <p>AWS CodeDeploy makes it easier for you to rapidly release new features, helps you
 *             avoid downtime during application deployment, and handles the complexity of updating
 *             your applications, without many of the risks associated with error-prone manual
 *             deployments.</p>
 *         <p>
 *             <b>AWS CodeDeploy Components</b>
 *         </p>
 *         <p>Use the information in this guide to help you work with the following AWS CodeDeploy
 *             components:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <b>Application</b>: A name that uniquely identifies
 *                     the application you want to deploy. AWS CodeDeploy uses this name, which
 *                     functions as a container, to ensure the correct combination of revision,
 *                     deployment configuration, and deployment group are referenced during a
 *                     deployment.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Deployment group</b>: A set of individual
 *                     instances, CodeDeploy Lambda deployment configuration settings, or an Amazon ECS
 *                     service and network details. A Lambda deployment group specifies how to route
 *                     traffic to a new version of a Lambda function. An Amazon ECS deployment group
 *                     specifies the service created in Amazon ECS to deploy, a load balancer, and a
 *                     listener to reroute production traffic to an updated containerized application.
 *                     An EC2/On-premises deployment group contains individually tagged instances,
 *                     Amazon EC2 instances in Amazon EC2 Auto Scaling groups, or both. All deployment
 *                     groups can specify optional trigger, alarm, and rollback settings.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Deployment configuration</b>: A set of deployment
 *                     rules and deployment success and failure conditions used by AWS CodeDeploy
 *                     during a deployment.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Deployment</b>: The process and the components used
 *                     when updating a Lambda function, a containerized application in an Amazon ECS
 *                     service, or of installing content on one or more instances. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Application revisions</b>: For an AWS Lambda
 *                     deployment, this is an AppSpec file that specifies the Lambda function to be
 *                     updated and one or more functions to validate deployment lifecycle events. For
 *                     an Amazon ECS deployment, this is an AppSpec file that specifies the Amazon ECS
 *                     task definition, container, and port where production traffic is rerouted. For
 *                     an EC2/On-premises deployment, this is an archive file that contains source
 *                     content—source code, webpages, executable files, and deployment scripts—along
 *                     with an AppSpec file. Revisions are stored in Amazon S3 buckets or GitHub
 *                     repositories. For Amazon S3, a revision is uniquely identified by its Amazon S3
 *                     object key and its ETag, version, or both. For GitHub, a revision is uniquely
 *                     identified by its commit ID.</p>
 *             </li>
 *          </ul>
 *         <p>This guide also contains information to help you get details about the instances in
 *             your deployments, to make on-premises instances available for AWS CodeDeploy
 *             deployments, to get details about a Lambda function deployment, and to get details about
 *             Amazon ECS service deployments.</p>
 *         <p>
 *             <b>AWS CodeDeploy Information Resources</b>
 *          </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide">AWS CodeDeploy
 *                         User Guide</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/">AWS
 *                         CodeDeploy API Reference Guide</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/cli/latest/reference/deploy/index.html">AWS
 *                         CLI Reference for AWS CodeDeploy</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a href="https://forums.aws.amazon.com/forum.jspa?forumID=179">AWS CodeDeploy
 *                         Developer Forum</a>
 *                 </p>
 *             </li>
 *          </ul>
 */
var CodeDeployClient = /** @class */ (function (_super) {
    __extends(CodeDeployClient, _super);
    function CodeDeployClient(configuration) {
        var _this = this;
        var _config_0 = __assign(__assign({}, __ClientDefaultValues), configuration);
        var _config_1 = resolveRegionConfig(_config_0);
        var _config_2 = resolveEndpointsConfig(_config_1);
        var _config_3 = resolveRetryConfig(_config_2);
        var _config_4 = resolveHostHeaderConfig(_config_3);
        var _config_5 = resolveAwsAuthConfig(_config_4);
        var _config_6 = resolveUserAgentConfig(_config_5);
        _this = _super.call(this, _config_6) || this;
        _this.config = _config_6;
        _this.middlewareStack.use(getRetryPlugin(_this.config));
        _this.middlewareStack.use(getContentLengthPlugin(_this.config));
        _this.middlewareStack.use(getHostHeaderPlugin(_this.config));
        _this.middlewareStack.use(getLoggerPlugin(_this.config));
        _this.middlewareStack.use(getAwsAuthPlugin(_this.config));
        _this.middlewareStack.use(getUserAgentPlugin(_this.config));
        return _this;
    }
    /**
     * Destroy underlying resources, like sockets. It's usually not necessary to do this.
     * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
     * Otherwise, sockets might stay open for quite a long time before the server terminates them.
     */
    CodeDeployClient.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return CodeDeployClient;
}(__Client));
export { CodeDeployClient };
//# sourceMappingURL=CodeDeployClient.js.map