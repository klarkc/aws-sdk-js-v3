import { __extends } from "tslib";
import { ElasticBeanstalkClient } from "./ElasticBeanstalkClient";
import { AbortEnvironmentUpdateCommand, } from "./commands/AbortEnvironmentUpdateCommand";
import { ApplyEnvironmentManagedActionCommand, } from "./commands/ApplyEnvironmentManagedActionCommand";
import { AssociateEnvironmentOperationsRoleCommand, } from "./commands/AssociateEnvironmentOperationsRoleCommand";
import { CheckDNSAvailabilityCommand, } from "./commands/CheckDNSAvailabilityCommand";
import { ComposeEnvironmentsCommand, } from "./commands/ComposeEnvironmentsCommand";
import { CreateApplicationCommand, } from "./commands/CreateApplicationCommand";
import { CreateApplicationVersionCommand, } from "./commands/CreateApplicationVersionCommand";
import { CreateConfigurationTemplateCommand, } from "./commands/CreateConfigurationTemplateCommand";
import { CreateEnvironmentCommand, } from "./commands/CreateEnvironmentCommand";
import { CreatePlatformVersionCommand, } from "./commands/CreatePlatformVersionCommand";
import { CreateStorageLocationCommand, } from "./commands/CreateStorageLocationCommand";
import { DeleteApplicationCommand, } from "./commands/DeleteApplicationCommand";
import { DeleteApplicationVersionCommand, } from "./commands/DeleteApplicationVersionCommand";
import { DeleteConfigurationTemplateCommand, } from "./commands/DeleteConfigurationTemplateCommand";
import { DeleteEnvironmentConfigurationCommand, } from "./commands/DeleteEnvironmentConfigurationCommand";
import { DeletePlatformVersionCommand, } from "./commands/DeletePlatformVersionCommand";
import { DescribeAccountAttributesCommand, } from "./commands/DescribeAccountAttributesCommand";
import { DescribeApplicationVersionsCommand, } from "./commands/DescribeApplicationVersionsCommand";
import { DescribeApplicationsCommand, } from "./commands/DescribeApplicationsCommand";
import { DescribeConfigurationOptionsCommand, } from "./commands/DescribeConfigurationOptionsCommand";
import { DescribeConfigurationSettingsCommand, } from "./commands/DescribeConfigurationSettingsCommand";
import { DescribeEnvironmentHealthCommand, } from "./commands/DescribeEnvironmentHealthCommand";
import { DescribeEnvironmentManagedActionHistoryCommand, } from "./commands/DescribeEnvironmentManagedActionHistoryCommand";
import { DescribeEnvironmentManagedActionsCommand, } from "./commands/DescribeEnvironmentManagedActionsCommand";
import { DescribeEnvironmentResourcesCommand, } from "./commands/DescribeEnvironmentResourcesCommand";
import { DescribeEnvironmentsCommand, } from "./commands/DescribeEnvironmentsCommand";
import { DescribeEventsCommand, } from "./commands/DescribeEventsCommand";
import { DescribeInstancesHealthCommand, } from "./commands/DescribeInstancesHealthCommand";
import { DescribePlatformVersionCommand, } from "./commands/DescribePlatformVersionCommand";
import { DisassociateEnvironmentOperationsRoleCommand, } from "./commands/DisassociateEnvironmentOperationsRoleCommand";
import { ListAvailableSolutionStacksCommand, } from "./commands/ListAvailableSolutionStacksCommand";
import { ListPlatformBranchesCommand, } from "./commands/ListPlatformBranchesCommand";
import { ListPlatformVersionsCommand, } from "./commands/ListPlatformVersionsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { RebuildEnvironmentCommand, } from "./commands/RebuildEnvironmentCommand";
import { RequestEnvironmentInfoCommand, } from "./commands/RequestEnvironmentInfoCommand";
import { RestartAppServerCommand, } from "./commands/RestartAppServerCommand";
import { RetrieveEnvironmentInfoCommand, } from "./commands/RetrieveEnvironmentInfoCommand";
import { SwapEnvironmentCNAMEsCommand, } from "./commands/SwapEnvironmentCNAMEsCommand";
import { TerminateEnvironmentCommand, } from "./commands/TerminateEnvironmentCommand";
import { UpdateApplicationCommand, } from "./commands/UpdateApplicationCommand";
import { UpdateApplicationResourceLifecycleCommand, } from "./commands/UpdateApplicationResourceLifecycleCommand";
import { UpdateApplicationVersionCommand, } from "./commands/UpdateApplicationVersionCommand";
import { UpdateConfigurationTemplateCommand, } from "./commands/UpdateConfigurationTemplateCommand";
import { UpdateEnvironmentCommand, } from "./commands/UpdateEnvironmentCommand";
import { UpdateTagsForResourceCommand, } from "./commands/UpdateTagsForResourceCommand";
import { ValidateConfigurationSettingsCommand, } from "./commands/ValidateConfigurationSettingsCommand";
/**
 * <fullname>AWS Elastic Beanstalk</fullname>
 *
 *
 *          <p>AWS Elastic Beanstalk makes it easy for you to create, deploy, and manage scalable,
 *       fault-tolerant applications running on the Amazon Web Services cloud.</p>
 *          <p>For more information about this product, go to the <a href="http://aws.amazon.com/elasticbeanstalk/">AWS Elastic Beanstalk</a> details page. The location of the
 *       latest AWS Elastic Beanstalk WSDL is <a href="https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl">https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl</a>.
 *       To install the Software Development Kits (SDKs), Integrated Development Environment (IDE)
 *       Toolkits, and command line tools that enable you to access the API, go to <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>For a list of region-specific endpoints that AWS Elastic Beanstalk supports, go to
 *         <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#elasticbeanstalk_region">Regions and Endpoints</a> in the <i>Amazon Web Services
 *       Glossary</i>.</p>
 */
var ElasticBeanstalk = /** @class */ (function (_super) {
    __extends(ElasticBeanstalk, _super);
    function ElasticBeanstalk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElasticBeanstalk.prototype.abortEnvironmentUpdate = function (args, optionsOrCb, cb) {
        var command = new AbortEnvironmentUpdateCommand(args);
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
    ElasticBeanstalk.prototype.applyEnvironmentManagedAction = function (args, optionsOrCb, cb) {
        var command = new ApplyEnvironmentManagedActionCommand(args);
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
    ElasticBeanstalk.prototype.associateEnvironmentOperationsRole = function (args, optionsOrCb, cb) {
        var command = new AssociateEnvironmentOperationsRoleCommand(args);
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
    ElasticBeanstalk.prototype.checkDNSAvailability = function (args, optionsOrCb, cb) {
        var command = new CheckDNSAvailabilityCommand(args);
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
    ElasticBeanstalk.prototype.composeEnvironments = function (args, optionsOrCb, cb) {
        var command = new ComposeEnvironmentsCommand(args);
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
    ElasticBeanstalk.prototype.createApplication = function (args, optionsOrCb, cb) {
        var command = new CreateApplicationCommand(args);
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
    ElasticBeanstalk.prototype.createApplicationVersion = function (args, optionsOrCb, cb) {
        var command = new CreateApplicationVersionCommand(args);
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
    ElasticBeanstalk.prototype.createConfigurationTemplate = function (args, optionsOrCb, cb) {
        var command = new CreateConfigurationTemplateCommand(args);
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
    ElasticBeanstalk.prototype.createEnvironment = function (args, optionsOrCb, cb) {
        var command = new CreateEnvironmentCommand(args);
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
    ElasticBeanstalk.prototype.createPlatformVersion = function (args, optionsOrCb, cb) {
        var command = new CreatePlatformVersionCommand(args);
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
    ElasticBeanstalk.prototype.createStorageLocation = function (args, optionsOrCb, cb) {
        var command = new CreateStorageLocationCommand(args);
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
    ElasticBeanstalk.prototype.deleteApplication = function (args, optionsOrCb, cb) {
        var command = new DeleteApplicationCommand(args);
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
    ElasticBeanstalk.prototype.deleteApplicationVersion = function (args, optionsOrCb, cb) {
        var command = new DeleteApplicationVersionCommand(args);
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
    ElasticBeanstalk.prototype.deleteConfigurationTemplate = function (args, optionsOrCb, cb) {
        var command = new DeleteConfigurationTemplateCommand(args);
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
    ElasticBeanstalk.prototype.deleteEnvironmentConfiguration = function (args, optionsOrCb, cb) {
        var command = new DeleteEnvironmentConfigurationCommand(args);
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
    ElasticBeanstalk.prototype.deletePlatformVersion = function (args, optionsOrCb, cb) {
        var command = new DeletePlatformVersionCommand(args);
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
    ElasticBeanstalk.prototype.describeAccountAttributes = function (args, optionsOrCb, cb) {
        var command = new DescribeAccountAttributesCommand(args);
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
    ElasticBeanstalk.prototype.describeApplications = function (args, optionsOrCb, cb) {
        var command = new DescribeApplicationsCommand(args);
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
    ElasticBeanstalk.prototype.describeApplicationVersions = function (args, optionsOrCb, cb) {
        var command = new DescribeApplicationVersionsCommand(args);
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
    ElasticBeanstalk.prototype.describeConfigurationOptions = function (args, optionsOrCb, cb) {
        var command = new DescribeConfigurationOptionsCommand(args);
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
    ElasticBeanstalk.prototype.describeConfigurationSettings = function (args, optionsOrCb, cb) {
        var command = new DescribeConfigurationSettingsCommand(args);
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
    ElasticBeanstalk.prototype.describeEnvironmentHealth = function (args, optionsOrCb, cb) {
        var command = new DescribeEnvironmentHealthCommand(args);
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
    ElasticBeanstalk.prototype.describeEnvironmentManagedActionHistory = function (args, optionsOrCb, cb) {
        var command = new DescribeEnvironmentManagedActionHistoryCommand(args);
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
    ElasticBeanstalk.prototype.describeEnvironmentManagedActions = function (args, optionsOrCb, cb) {
        var command = new DescribeEnvironmentManagedActionsCommand(args);
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
    ElasticBeanstalk.prototype.describeEnvironmentResources = function (args, optionsOrCb, cb) {
        var command = new DescribeEnvironmentResourcesCommand(args);
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
    ElasticBeanstalk.prototype.describeEnvironments = function (args, optionsOrCb, cb) {
        var command = new DescribeEnvironmentsCommand(args);
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
    ElasticBeanstalk.prototype.describeEvents = function (args, optionsOrCb, cb) {
        var command = new DescribeEventsCommand(args);
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
    ElasticBeanstalk.prototype.describeInstancesHealth = function (args, optionsOrCb, cb) {
        var command = new DescribeInstancesHealthCommand(args);
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
    ElasticBeanstalk.prototype.describePlatformVersion = function (args, optionsOrCb, cb) {
        var command = new DescribePlatformVersionCommand(args);
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
    ElasticBeanstalk.prototype.disassociateEnvironmentOperationsRole = function (args, optionsOrCb, cb) {
        var command = new DisassociateEnvironmentOperationsRoleCommand(args);
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
    ElasticBeanstalk.prototype.listAvailableSolutionStacks = function (args, optionsOrCb, cb) {
        var command = new ListAvailableSolutionStacksCommand(args);
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
    ElasticBeanstalk.prototype.listPlatformBranches = function (args, optionsOrCb, cb) {
        var command = new ListPlatformBranchesCommand(args);
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
    ElasticBeanstalk.prototype.listPlatformVersions = function (args, optionsOrCb, cb) {
        var command = new ListPlatformVersionsCommand(args);
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
    ElasticBeanstalk.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
        var command = new ListTagsForResourceCommand(args);
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
    ElasticBeanstalk.prototype.rebuildEnvironment = function (args, optionsOrCb, cb) {
        var command = new RebuildEnvironmentCommand(args);
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
    ElasticBeanstalk.prototype.requestEnvironmentInfo = function (args, optionsOrCb, cb) {
        var command = new RequestEnvironmentInfoCommand(args);
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
    ElasticBeanstalk.prototype.restartAppServer = function (args, optionsOrCb, cb) {
        var command = new RestartAppServerCommand(args);
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
    ElasticBeanstalk.prototype.retrieveEnvironmentInfo = function (args, optionsOrCb, cb) {
        var command = new RetrieveEnvironmentInfoCommand(args);
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
    ElasticBeanstalk.prototype.swapEnvironmentCNAMEs = function (args, optionsOrCb, cb) {
        var command = new SwapEnvironmentCNAMEsCommand(args);
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
    ElasticBeanstalk.prototype.terminateEnvironment = function (args, optionsOrCb, cb) {
        var command = new TerminateEnvironmentCommand(args);
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
    ElasticBeanstalk.prototype.updateApplication = function (args, optionsOrCb, cb) {
        var command = new UpdateApplicationCommand(args);
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
    ElasticBeanstalk.prototype.updateApplicationResourceLifecycle = function (args, optionsOrCb, cb) {
        var command = new UpdateApplicationResourceLifecycleCommand(args);
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
    ElasticBeanstalk.prototype.updateApplicationVersion = function (args, optionsOrCb, cb) {
        var command = new UpdateApplicationVersionCommand(args);
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
    ElasticBeanstalk.prototype.updateConfigurationTemplate = function (args, optionsOrCb, cb) {
        var command = new UpdateConfigurationTemplateCommand(args);
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
    ElasticBeanstalk.prototype.updateEnvironment = function (args, optionsOrCb, cb) {
        var command = new UpdateEnvironmentCommand(args);
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
    ElasticBeanstalk.prototype.updateTagsForResource = function (args, optionsOrCb, cb) {
        var command = new UpdateTagsForResourceCommand(args);
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
    ElasticBeanstalk.prototype.validateConfigurationSettings = function (args, optionsOrCb, cb) {
        var command = new ValidateConfigurationSettingsCommand(args);
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
    return ElasticBeanstalk;
}(ElasticBeanstalkClient));
export { ElasticBeanstalk };
//# sourceMappingURL=ElasticBeanstalk.js.map