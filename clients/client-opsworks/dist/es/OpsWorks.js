import { __extends } from "tslib";
import { OpsWorksClient } from "./OpsWorksClient";
import { AssignInstanceCommand, } from "./commands/AssignInstanceCommand";
import { AssignVolumeCommand, } from "./commands/AssignVolumeCommand";
import { AssociateElasticIpCommand, } from "./commands/AssociateElasticIpCommand";
import { AttachElasticLoadBalancerCommand, } from "./commands/AttachElasticLoadBalancerCommand";
import { CloneStackCommand } from "./commands/CloneStackCommand";
import { CreateAppCommand } from "./commands/CreateAppCommand";
import { CreateDeploymentCommand, } from "./commands/CreateDeploymentCommand";
import { CreateInstanceCommand, } from "./commands/CreateInstanceCommand";
import { CreateLayerCommand } from "./commands/CreateLayerCommand";
import { CreateStackCommand } from "./commands/CreateStackCommand";
import { CreateUserProfileCommand, } from "./commands/CreateUserProfileCommand";
import { DeleteAppCommand } from "./commands/DeleteAppCommand";
import { DeleteInstanceCommand, } from "./commands/DeleteInstanceCommand";
import { DeleteLayerCommand } from "./commands/DeleteLayerCommand";
import { DeleteStackCommand } from "./commands/DeleteStackCommand";
import { DeleteUserProfileCommand, } from "./commands/DeleteUserProfileCommand";
import { DeregisterEcsClusterCommand, } from "./commands/DeregisterEcsClusterCommand";
import { DeregisterElasticIpCommand, } from "./commands/DeregisterElasticIpCommand";
import { DeregisterInstanceCommand, } from "./commands/DeregisterInstanceCommand";
import { DeregisterRdsDbInstanceCommand, } from "./commands/DeregisterRdsDbInstanceCommand";
import { DeregisterVolumeCommand, } from "./commands/DeregisterVolumeCommand";
import { DescribeAgentVersionsCommand, } from "./commands/DescribeAgentVersionsCommand";
import { DescribeAppsCommand, } from "./commands/DescribeAppsCommand";
import { DescribeCommandsCommand, } from "./commands/DescribeCommandsCommand";
import { DescribeDeploymentsCommand, } from "./commands/DescribeDeploymentsCommand";
import { DescribeEcsClustersCommand, } from "./commands/DescribeEcsClustersCommand";
import { DescribeElasticIpsCommand, } from "./commands/DescribeElasticIpsCommand";
import { DescribeElasticLoadBalancersCommand, } from "./commands/DescribeElasticLoadBalancersCommand";
import { DescribeInstancesCommand, } from "./commands/DescribeInstancesCommand";
import { DescribeLayersCommand, } from "./commands/DescribeLayersCommand";
import { DescribeLoadBasedAutoScalingCommand, } from "./commands/DescribeLoadBasedAutoScalingCommand";
import { DescribeMyUserProfileCommand, } from "./commands/DescribeMyUserProfileCommand";
import { DescribeOperatingSystemsCommand, } from "./commands/DescribeOperatingSystemsCommand";
import { DescribePermissionsCommand, } from "./commands/DescribePermissionsCommand";
import { DescribeRaidArraysCommand, } from "./commands/DescribeRaidArraysCommand";
import { DescribeRdsDbInstancesCommand, } from "./commands/DescribeRdsDbInstancesCommand";
import { DescribeServiceErrorsCommand, } from "./commands/DescribeServiceErrorsCommand";
import { DescribeStackProvisioningParametersCommand, } from "./commands/DescribeStackProvisioningParametersCommand";
import { DescribeStackSummaryCommand, } from "./commands/DescribeStackSummaryCommand";
import { DescribeStacksCommand, } from "./commands/DescribeStacksCommand";
import { DescribeTimeBasedAutoScalingCommand, } from "./commands/DescribeTimeBasedAutoScalingCommand";
import { DescribeUserProfilesCommand, } from "./commands/DescribeUserProfilesCommand";
import { DescribeVolumesCommand, } from "./commands/DescribeVolumesCommand";
import { DetachElasticLoadBalancerCommand, } from "./commands/DetachElasticLoadBalancerCommand";
import { DisassociateElasticIpCommand, } from "./commands/DisassociateElasticIpCommand";
import { GetHostnameSuggestionCommand, } from "./commands/GetHostnameSuggestionCommand";
import { GrantAccessCommand } from "./commands/GrantAccessCommand";
import { ListTagsCommand } from "./commands/ListTagsCommand";
import { RebootInstanceCommand, } from "./commands/RebootInstanceCommand";
import { RegisterEcsClusterCommand, } from "./commands/RegisterEcsClusterCommand";
import { RegisterElasticIpCommand, } from "./commands/RegisterElasticIpCommand";
import { RegisterInstanceCommand, } from "./commands/RegisterInstanceCommand";
import { RegisterRdsDbInstanceCommand, } from "./commands/RegisterRdsDbInstanceCommand";
import { RegisterVolumeCommand, } from "./commands/RegisterVolumeCommand";
import { SetLoadBasedAutoScalingCommand, } from "./commands/SetLoadBasedAutoScalingCommand";
import { SetPermissionCommand, } from "./commands/SetPermissionCommand";
import { SetTimeBasedAutoScalingCommand, } from "./commands/SetTimeBasedAutoScalingCommand";
import { StartInstanceCommand, } from "./commands/StartInstanceCommand";
import { StartStackCommand } from "./commands/StartStackCommand";
import { StopInstanceCommand, } from "./commands/StopInstanceCommand";
import { StopStackCommand } from "./commands/StopStackCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UnassignInstanceCommand, } from "./commands/UnassignInstanceCommand";
import { UnassignVolumeCommand, } from "./commands/UnassignVolumeCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateAppCommand } from "./commands/UpdateAppCommand";
import { UpdateElasticIpCommand, } from "./commands/UpdateElasticIpCommand";
import { UpdateInstanceCommand, } from "./commands/UpdateInstanceCommand";
import { UpdateLayerCommand } from "./commands/UpdateLayerCommand";
import { UpdateMyUserProfileCommand, } from "./commands/UpdateMyUserProfileCommand";
import { UpdateRdsDbInstanceCommand, } from "./commands/UpdateRdsDbInstanceCommand";
import { UpdateStackCommand } from "./commands/UpdateStackCommand";
import { UpdateUserProfileCommand, } from "./commands/UpdateUserProfileCommand";
import { UpdateVolumeCommand, } from "./commands/UpdateVolumeCommand";
/**
 * <fullname>AWS OpsWorks</fullname>
 *          <p>Welcome to the <i>AWS OpsWorks Stacks API Reference</i>. This guide provides descriptions, syntax, and
 *       usage examples for AWS OpsWorks Stacks actions and data types, including common parameters and error
 *       codes. </p>
 *          <p>AWS OpsWorks Stacks is an application management service that provides an integrated experience for
 *       overseeing the complete application lifecycle. For information about this product, go to the
 *         <a href="http://aws.amazon.com/opsworks/">AWS OpsWorks</a> details page. </p>
 *
 *          <p>
 *             <b>SDKs and CLI</b>
 *          </p>
 *          <p>The most common way to use the AWS OpsWorks Stacks API is by using the AWS Command Line Interface (CLI) or by using one of the AWS SDKs to implement applications in your preferred language. For more information, see:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">AWS CLI</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/opsworks/AWSOpsWorksClient.html">AWS SDK for Java</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/html/N_Amazon_OpsWorks.htm">AWS SDK for
 *           .NET</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/aws-sdk-php-2/latest/class-Aws.OpsWorks.OpsWorksClient.html">AWS
 *           SDK for PHP 2</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://docs.aws.amazon.com/sdkforruby/api/">AWS SDK for Ruby</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/documentation/sdkforjavascript/">AWS SDK for Node.js</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://docs.pythonboto.org/en/latest/ref/opsworks.html">AWS SDK for
 *           Python(Boto)</a>
 *                </p>
 *             </li>
 *          </ul>
 *
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>AWS OpsWorks Stacks supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Stacks
 *           can only be accessed or managed within the endpoint in which they are created.</p>
 *          <ul>
 *             <li>
 *                <p>opsworks.us-east-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.us-east-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.us-west-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.us-west-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ca-central-1.amazonaws.com (API only; not available in the AWS console)</p>
 *             </li>
 *             <li>
 *                <p>opsworks.eu-west-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.eu-west-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.eu-west-3.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.eu-central-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-northeast-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-northeast-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-south-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-southeast-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-southeast-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.sa-east-1.amazonaws.com</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Chef Versions</b>
 *          </p>
 *          <p>When you call <a>CreateStack</a>, <a>CloneStack</a>, or <a>UpdateStack</a> we recommend you
 *       use the <code>ConfigurationManager</code> parameter to specify the Chef version.
 *       The recommended and default value for Linux stacks is currently 12. Windows stacks use Chef 12.2. For more information,
 *       see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-chef11.html">Chef Versions</a>.</p>
 *          <note>
 *             <p>You can specify Chef 12, 11.10, or 11.4 for your Linux stack. We recommend migrating your existing Linux stacks to Chef 12 as soon as possible.</p>
 *          </note>
 */
var OpsWorks = /** @class */ (function (_super) {
    __extends(OpsWorks, _super);
    function OpsWorks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpsWorks.prototype.assignInstance = function (args, optionsOrCb, cb) {
        var command = new AssignInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.assignVolume = function (args, optionsOrCb, cb) {
        var command = new AssignVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.associateElasticIp = function (args, optionsOrCb, cb) {
        var command = new AssociateElasticIpCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.attachElasticLoadBalancer = function (args, optionsOrCb, cb) {
        var command = new AttachElasticLoadBalancerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.cloneStack = function (args, optionsOrCb, cb) {
        var command = new CloneStackCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.createApp = function (args, optionsOrCb, cb) {
        var command = new CreateAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.createDeployment = function (args, optionsOrCb, cb) {
        var command = new CreateDeploymentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.createInstance = function (args, optionsOrCb, cb) {
        var command = new CreateInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.createLayer = function (args, optionsOrCb, cb) {
        var command = new CreateLayerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.createStack = function (args, optionsOrCb, cb) {
        var command = new CreateStackCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.createUserProfile = function (args, optionsOrCb, cb) {
        var command = new CreateUserProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.deleteApp = function (args, optionsOrCb, cb) {
        var command = new DeleteAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.deleteInstance = function (args, optionsOrCb, cb) {
        var command = new DeleteInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.deleteLayer = function (args, optionsOrCb, cb) {
        var command = new DeleteLayerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.deleteStack = function (args, optionsOrCb, cb) {
        var command = new DeleteStackCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.deleteUserProfile = function (args, optionsOrCb, cb) {
        var command = new DeleteUserProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.deregisterEcsCluster = function (args, optionsOrCb, cb) {
        var command = new DeregisterEcsClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.deregisterElasticIp = function (args, optionsOrCb, cb) {
        var command = new DeregisterElasticIpCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.deregisterInstance = function (args, optionsOrCb, cb) {
        var command = new DeregisterInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.deregisterRdsDbInstance = function (args, optionsOrCb, cb) {
        var command = new DeregisterRdsDbInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.deregisterVolume = function (args, optionsOrCb, cb) {
        var command = new DeregisterVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.describeAgentVersions = function (args, optionsOrCb, cb) {
        var command = new DescribeAgentVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.describeApps = function (args, optionsOrCb, cb) {
        var command = new DescribeAppsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.describeCommands = function (args, optionsOrCb, cb) {
        var command = new DescribeCommandsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.describeDeployments = function (args, optionsOrCb, cb) {
        var command = new DescribeDeploymentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.describeEcsClusters = function (args, optionsOrCb, cb) {
        var command = new DescribeEcsClustersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.describeElasticIps = function (args, optionsOrCb, cb) {
        var command = new DescribeElasticIpsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.describeElasticLoadBalancers = function (args, optionsOrCb, cb) {
        var command = new DescribeElasticLoadBalancersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.describeInstances = function (args, optionsOrCb, cb) {
        var command = new DescribeInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.describeLayers = function (args, optionsOrCb, cb) {
        var command = new DescribeLayersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.describeLoadBasedAutoScaling = function (args, optionsOrCb, cb) {
        var command = new DescribeLoadBasedAutoScalingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.describeMyUserProfile = function (args, optionsOrCb, cb) {
        var command = new DescribeMyUserProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.describeOperatingSystems = function (args, optionsOrCb, cb) {
        var command = new DescribeOperatingSystemsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.describePermissions = function (args, optionsOrCb, cb) {
        var command = new DescribePermissionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.describeRaidArrays = function (args, optionsOrCb, cb) {
        var command = new DescribeRaidArraysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.describeRdsDbInstances = function (args, optionsOrCb, cb) {
        var command = new DescribeRdsDbInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.describeServiceErrors = function (args, optionsOrCb, cb) {
        var command = new DescribeServiceErrorsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.describeStackProvisioningParameters = function (args, optionsOrCb, cb) {
        var command = new DescribeStackProvisioningParametersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.describeStacks = function (args, optionsOrCb, cb) {
        var command = new DescribeStacksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.describeStackSummary = function (args, optionsOrCb, cb) {
        var command = new DescribeStackSummaryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.describeTimeBasedAutoScaling = function (args, optionsOrCb, cb) {
        var command = new DescribeTimeBasedAutoScalingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.describeUserProfiles = function (args, optionsOrCb, cb) {
        var command = new DescribeUserProfilesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.describeVolumes = function (args, optionsOrCb, cb) {
        var command = new DescribeVolumesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.detachElasticLoadBalancer = function (args, optionsOrCb, cb) {
        var command = new DetachElasticLoadBalancerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.disassociateElasticIp = function (args, optionsOrCb, cb) {
        var command = new DisassociateElasticIpCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.getHostnameSuggestion = function (args, optionsOrCb, cb) {
        var command = new GetHostnameSuggestionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.grantAccess = function (args, optionsOrCb, cb) {
        var command = new GrantAccessCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.listTags = function (args, optionsOrCb, cb) {
        var command = new ListTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.rebootInstance = function (args, optionsOrCb, cb) {
        var command = new RebootInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.registerEcsCluster = function (args, optionsOrCb, cb) {
        var command = new RegisterEcsClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.registerElasticIp = function (args, optionsOrCb, cb) {
        var command = new RegisterElasticIpCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.registerInstance = function (args, optionsOrCb, cb) {
        var command = new RegisterInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.registerRdsDbInstance = function (args, optionsOrCb, cb) {
        var command = new RegisterRdsDbInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.registerVolume = function (args, optionsOrCb, cb) {
        var command = new RegisterVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.setLoadBasedAutoScaling = function (args, optionsOrCb, cb) {
        var command = new SetLoadBasedAutoScalingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.setPermission = function (args, optionsOrCb, cb) {
        var command = new SetPermissionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.setTimeBasedAutoScaling = function (args, optionsOrCb, cb) {
        var command = new SetTimeBasedAutoScalingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.startInstance = function (args, optionsOrCb, cb) {
        var command = new StartInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.startStack = function (args, optionsOrCb, cb) {
        var command = new StartStackCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.stopInstance = function (args, optionsOrCb, cb) {
        var command = new StopInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.stopStack = function (args, optionsOrCb, cb) {
        var command = new StopStackCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.tagResource = function (args, optionsOrCb, cb) {
        var command = new TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.unassignInstance = function (args, optionsOrCb, cb) {
        var command = new UnassignInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.unassignVolume = function (args, optionsOrCb, cb) {
        var command = new UnassignVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.untagResource = function (args, optionsOrCb, cb) {
        var command = new UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.updateApp = function (args, optionsOrCb, cb) {
        var command = new UpdateAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.updateElasticIp = function (args, optionsOrCb, cb) {
        var command = new UpdateElasticIpCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.updateInstance = function (args, optionsOrCb, cb) {
        var command = new UpdateInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.updateLayer = function (args, optionsOrCb, cb) {
        var command = new UpdateLayerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.updateMyUserProfile = function (args, optionsOrCb, cb) {
        var command = new UpdateMyUserProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.updateRdsDbInstance = function (args, optionsOrCb, cb) {
        var command = new UpdateRdsDbInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.updateStack = function (args, optionsOrCb, cb) {
        var command = new UpdateStackCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.updateUserProfile = function (args, optionsOrCb, cb) {
        var command = new UpdateUserProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    OpsWorks.prototype.updateVolume = function (args, optionsOrCb, cb) {
        var command = new UpdateVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return OpsWorks;
}(OpsWorksClient));
export { OpsWorks };
//# sourceMappingURL=OpsWorks.js.map