import { __extends } from "tslib";
import { IoTClient } from "./IoTClient";
import { AcceptCertificateTransferCommand, } from "./commands/AcceptCertificateTransferCommand";
import { AddThingToBillingGroupCommand, } from "./commands/AddThingToBillingGroupCommand";
import { AddThingToThingGroupCommand, } from "./commands/AddThingToThingGroupCommand";
import { AssociateTargetsWithJobCommand, } from "./commands/AssociateTargetsWithJobCommand";
import { AttachPolicyCommand, } from "./commands/AttachPolicyCommand";
import { AttachPrincipalPolicyCommand, } from "./commands/AttachPrincipalPolicyCommand";
import { AttachSecurityProfileCommand, } from "./commands/AttachSecurityProfileCommand";
import { AttachThingPrincipalCommand, } from "./commands/AttachThingPrincipalCommand";
import { CancelAuditMitigationActionsTaskCommand, } from "./commands/CancelAuditMitigationActionsTaskCommand";
import { CancelAuditTaskCommand, } from "./commands/CancelAuditTaskCommand";
import { CancelCertificateTransferCommand, } from "./commands/CancelCertificateTransferCommand";
import { CancelDetectMitigationActionsTaskCommand, } from "./commands/CancelDetectMitigationActionsTaskCommand";
import { CancelJobCommand } from "./commands/CancelJobCommand";
import { CancelJobExecutionCommand, } from "./commands/CancelJobExecutionCommand";
import { ClearDefaultAuthorizerCommand, } from "./commands/ClearDefaultAuthorizerCommand";
import { ConfirmTopicRuleDestinationCommand, } from "./commands/ConfirmTopicRuleDestinationCommand";
import { CreateAuditSuppressionCommand, } from "./commands/CreateAuditSuppressionCommand";
import { CreateAuthorizerCommand, } from "./commands/CreateAuthorizerCommand";
import { CreateBillingGroupCommand, } from "./commands/CreateBillingGroupCommand";
import { CreateCertificateFromCsrCommand, } from "./commands/CreateCertificateFromCsrCommand";
import { CreateCustomMetricCommand, } from "./commands/CreateCustomMetricCommand";
import { CreateDimensionCommand, } from "./commands/CreateDimensionCommand";
import { CreateDomainConfigurationCommand, } from "./commands/CreateDomainConfigurationCommand";
import { CreateDynamicThingGroupCommand, } from "./commands/CreateDynamicThingGroupCommand";
import { CreateJobCommand } from "./commands/CreateJobCommand";
import { CreateJobTemplateCommand, } from "./commands/CreateJobTemplateCommand";
import { CreateKeysAndCertificateCommand, } from "./commands/CreateKeysAndCertificateCommand";
import { CreateMitigationActionCommand, } from "./commands/CreateMitigationActionCommand";
import { CreateOTAUpdateCommand, } from "./commands/CreateOTAUpdateCommand";
import { CreatePolicyCommand, } from "./commands/CreatePolicyCommand";
import { CreatePolicyVersionCommand, } from "./commands/CreatePolicyVersionCommand";
import { CreateProvisioningClaimCommand, } from "./commands/CreateProvisioningClaimCommand";
import { CreateProvisioningTemplateCommand, } from "./commands/CreateProvisioningTemplateCommand";
import { CreateProvisioningTemplateVersionCommand, } from "./commands/CreateProvisioningTemplateVersionCommand";
import { CreateRoleAliasCommand, } from "./commands/CreateRoleAliasCommand";
import { CreateScheduledAuditCommand, } from "./commands/CreateScheduledAuditCommand";
import { CreateSecurityProfileCommand, } from "./commands/CreateSecurityProfileCommand";
import { CreateStreamCommand, } from "./commands/CreateStreamCommand";
import { CreateThingCommand } from "./commands/CreateThingCommand";
import { CreateThingGroupCommand, } from "./commands/CreateThingGroupCommand";
import { CreateThingTypeCommand, } from "./commands/CreateThingTypeCommand";
import { CreateTopicRuleCommand, } from "./commands/CreateTopicRuleCommand";
import { CreateTopicRuleDestinationCommand, } from "./commands/CreateTopicRuleDestinationCommand";
import { DeleteAccountAuditConfigurationCommand, } from "./commands/DeleteAccountAuditConfigurationCommand";
import { DeleteAuditSuppressionCommand, } from "./commands/DeleteAuditSuppressionCommand";
import { DeleteAuthorizerCommand, } from "./commands/DeleteAuthorizerCommand";
import { DeleteBillingGroupCommand, } from "./commands/DeleteBillingGroupCommand";
import { DeleteCACertificateCommand, } from "./commands/DeleteCACertificateCommand";
import { DeleteCertificateCommand, } from "./commands/DeleteCertificateCommand";
import { DeleteCustomMetricCommand, } from "./commands/DeleteCustomMetricCommand";
import { DeleteDimensionCommand, } from "./commands/DeleteDimensionCommand";
import { DeleteDomainConfigurationCommand, } from "./commands/DeleteDomainConfigurationCommand";
import { DeleteDynamicThingGroupCommand, } from "./commands/DeleteDynamicThingGroupCommand";
import { DeleteJobCommand } from "./commands/DeleteJobCommand";
import { DeleteJobExecutionCommand, } from "./commands/DeleteJobExecutionCommand";
import { DeleteJobTemplateCommand, } from "./commands/DeleteJobTemplateCommand";
import { DeleteMitigationActionCommand, } from "./commands/DeleteMitigationActionCommand";
import { DeleteOTAUpdateCommand, } from "./commands/DeleteOTAUpdateCommand";
import { DeletePolicyCommand, } from "./commands/DeletePolicyCommand";
import { DeletePolicyVersionCommand, } from "./commands/DeletePolicyVersionCommand";
import { DeleteProvisioningTemplateCommand, } from "./commands/DeleteProvisioningTemplateCommand";
import { DeleteProvisioningTemplateVersionCommand, } from "./commands/DeleteProvisioningTemplateVersionCommand";
import { DeleteRegistrationCodeCommand, } from "./commands/DeleteRegistrationCodeCommand";
import { DeleteRoleAliasCommand, } from "./commands/DeleteRoleAliasCommand";
import { DeleteScheduledAuditCommand, } from "./commands/DeleteScheduledAuditCommand";
import { DeleteSecurityProfileCommand, } from "./commands/DeleteSecurityProfileCommand";
import { DeleteStreamCommand, } from "./commands/DeleteStreamCommand";
import { DeleteThingCommand } from "./commands/DeleteThingCommand";
import { DeleteThingGroupCommand, } from "./commands/DeleteThingGroupCommand";
import { DeleteThingTypeCommand, } from "./commands/DeleteThingTypeCommand";
import { DeleteTopicRuleCommand, } from "./commands/DeleteTopicRuleCommand";
import { DeleteTopicRuleDestinationCommand, } from "./commands/DeleteTopicRuleDestinationCommand";
import { DeleteV2LoggingLevelCommand, } from "./commands/DeleteV2LoggingLevelCommand";
import { DeprecateThingTypeCommand, } from "./commands/DeprecateThingTypeCommand";
import { DescribeAccountAuditConfigurationCommand, } from "./commands/DescribeAccountAuditConfigurationCommand";
import { DescribeAuditFindingCommand, } from "./commands/DescribeAuditFindingCommand";
import { DescribeAuditMitigationActionsTaskCommand, } from "./commands/DescribeAuditMitigationActionsTaskCommand";
import { DescribeAuditSuppressionCommand, } from "./commands/DescribeAuditSuppressionCommand";
import { DescribeAuditTaskCommand, } from "./commands/DescribeAuditTaskCommand";
import { DescribeAuthorizerCommand, } from "./commands/DescribeAuthorizerCommand";
import { DescribeBillingGroupCommand, } from "./commands/DescribeBillingGroupCommand";
import { DescribeCACertificateCommand, } from "./commands/DescribeCACertificateCommand";
import { DescribeCertificateCommand, } from "./commands/DescribeCertificateCommand";
import { DescribeCustomMetricCommand, } from "./commands/DescribeCustomMetricCommand";
import { DescribeDefaultAuthorizerCommand, } from "./commands/DescribeDefaultAuthorizerCommand";
import { DescribeDetectMitigationActionsTaskCommand, } from "./commands/DescribeDetectMitigationActionsTaskCommand";
import { DescribeDimensionCommand, } from "./commands/DescribeDimensionCommand";
import { DescribeDomainConfigurationCommand, } from "./commands/DescribeDomainConfigurationCommand";
import { DescribeEndpointCommand, } from "./commands/DescribeEndpointCommand";
import { DescribeEventConfigurationsCommand, } from "./commands/DescribeEventConfigurationsCommand";
import { DescribeIndexCommand, } from "./commands/DescribeIndexCommand";
import { DescribeJobCommand } from "./commands/DescribeJobCommand";
import { DescribeJobExecutionCommand, } from "./commands/DescribeJobExecutionCommand";
import { DescribeJobTemplateCommand, } from "./commands/DescribeJobTemplateCommand";
import { DescribeMitigationActionCommand, } from "./commands/DescribeMitigationActionCommand";
import { DescribeProvisioningTemplateCommand, } from "./commands/DescribeProvisioningTemplateCommand";
import { DescribeProvisioningTemplateVersionCommand, } from "./commands/DescribeProvisioningTemplateVersionCommand";
import { DescribeRoleAliasCommand, } from "./commands/DescribeRoleAliasCommand";
import { DescribeScheduledAuditCommand, } from "./commands/DescribeScheduledAuditCommand";
import { DescribeSecurityProfileCommand, } from "./commands/DescribeSecurityProfileCommand";
import { DescribeStreamCommand, } from "./commands/DescribeStreamCommand";
import { DescribeThingCommand, } from "./commands/DescribeThingCommand";
import { DescribeThingGroupCommand, } from "./commands/DescribeThingGroupCommand";
import { DescribeThingRegistrationTaskCommand, } from "./commands/DescribeThingRegistrationTaskCommand";
import { DescribeThingTypeCommand, } from "./commands/DescribeThingTypeCommand";
import { DetachPolicyCommand, } from "./commands/DetachPolicyCommand";
import { DetachPrincipalPolicyCommand, } from "./commands/DetachPrincipalPolicyCommand";
import { DetachSecurityProfileCommand, } from "./commands/DetachSecurityProfileCommand";
import { DetachThingPrincipalCommand, } from "./commands/DetachThingPrincipalCommand";
import { DisableTopicRuleCommand, } from "./commands/DisableTopicRuleCommand";
import { EnableTopicRuleCommand, } from "./commands/EnableTopicRuleCommand";
import { GetBehaviorModelTrainingSummariesCommand, } from "./commands/GetBehaviorModelTrainingSummariesCommand";
import { GetCardinalityCommand, } from "./commands/GetCardinalityCommand";
import { GetEffectivePoliciesCommand, } from "./commands/GetEffectivePoliciesCommand";
import { GetIndexingConfigurationCommand, } from "./commands/GetIndexingConfigurationCommand";
import { GetJobDocumentCommand, } from "./commands/GetJobDocumentCommand";
import { GetLoggingOptionsCommand, } from "./commands/GetLoggingOptionsCommand";
import { GetOTAUpdateCommand, } from "./commands/GetOTAUpdateCommand";
import { GetPercentilesCommand, } from "./commands/GetPercentilesCommand";
import { GetPolicyCommand } from "./commands/GetPolicyCommand";
import { GetPolicyVersionCommand, } from "./commands/GetPolicyVersionCommand";
import { GetRegistrationCodeCommand, } from "./commands/GetRegistrationCodeCommand";
import { GetStatisticsCommand, } from "./commands/GetStatisticsCommand";
import { GetTopicRuleCommand, } from "./commands/GetTopicRuleCommand";
import { GetTopicRuleDestinationCommand, } from "./commands/GetTopicRuleDestinationCommand";
import { GetV2LoggingOptionsCommand, } from "./commands/GetV2LoggingOptionsCommand";
import { ListActiveViolationsCommand, } from "./commands/ListActiveViolationsCommand";
import { ListAttachedPoliciesCommand, } from "./commands/ListAttachedPoliciesCommand";
import { ListAuditFindingsCommand, } from "./commands/ListAuditFindingsCommand";
import { ListAuditMitigationActionsExecutionsCommand, } from "./commands/ListAuditMitigationActionsExecutionsCommand";
import { ListAuditMitigationActionsTasksCommand, } from "./commands/ListAuditMitigationActionsTasksCommand";
import { ListAuditSuppressionsCommand, } from "./commands/ListAuditSuppressionsCommand";
import { ListAuditTasksCommand, } from "./commands/ListAuditTasksCommand";
import { ListAuthorizersCommand, } from "./commands/ListAuthorizersCommand";
import { ListBillingGroupsCommand, } from "./commands/ListBillingGroupsCommand";
import { ListCACertificatesCommand, } from "./commands/ListCACertificatesCommand";
import { ListCertificatesByCACommand, } from "./commands/ListCertificatesByCACommand";
import { ListCertificatesCommand, } from "./commands/ListCertificatesCommand";
import { ListCustomMetricsCommand, } from "./commands/ListCustomMetricsCommand";
import { ListDetectMitigationActionsExecutionsCommand, } from "./commands/ListDetectMitigationActionsExecutionsCommand";
import { ListDetectMitigationActionsTasksCommand, } from "./commands/ListDetectMitigationActionsTasksCommand";
import { ListDimensionsCommand, } from "./commands/ListDimensionsCommand";
import { ListDomainConfigurationsCommand, } from "./commands/ListDomainConfigurationsCommand";
import { ListIndicesCommand } from "./commands/ListIndicesCommand";
import { ListJobExecutionsForJobCommand, } from "./commands/ListJobExecutionsForJobCommand";
import { ListJobExecutionsForThingCommand, } from "./commands/ListJobExecutionsForThingCommand";
import { ListJobTemplatesCommand, } from "./commands/ListJobTemplatesCommand";
import { ListJobsCommand } from "./commands/ListJobsCommand";
import { ListMitigationActionsCommand, } from "./commands/ListMitigationActionsCommand";
import { ListOTAUpdatesCommand, } from "./commands/ListOTAUpdatesCommand";
import { ListOutgoingCertificatesCommand, } from "./commands/ListOutgoingCertificatesCommand";
import { ListPoliciesCommand, } from "./commands/ListPoliciesCommand";
import { ListPolicyPrincipalsCommand, } from "./commands/ListPolicyPrincipalsCommand";
import { ListPolicyVersionsCommand, } from "./commands/ListPolicyVersionsCommand";
import { ListPrincipalPoliciesCommand, } from "./commands/ListPrincipalPoliciesCommand";
import { ListPrincipalThingsCommand, } from "./commands/ListPrincipalThingsCommand";
import { ListProvisioningTemplateVersionsCommand, } from "./commands/ListProvisioningTemplateVersionsCommand";
import { ListProvisioningTemplatesCommand, } from "./commands/ListProvisioningTemplatesCommand";
import { ListRoleAliasesCommand, } from "./commands/ListRoleAliasesCommand";
import { ListScheduledAuditsCommand, } from "./commands/ListScheduledAuditsCommand";
import { ListSecurityProfilesCommand, } from "./commands/ListSecurityProfilesCommand";
import { ListSecurityProfilesForTargetCommand, } from "./commands/ListSecurityProfilesForTargetCommand";
import { ListStreamsCommand } from "./commands/ListStreamsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ListTargetsForPolicyCommand, } from "./commands/ListTargetsForPolicyCommand";
import { ListTargetsForSecurityProfileCommand, } from "./commands/ListTargetsForSecurityProfileCommand";
import { ListThingGroupsCommand, } from "./commands/ListThingGroupsCommand";
import { ListThingGroupsForThingCommand, } from "./commands/ListThingGroupsForThingCommand";
import { ListThingPrincipalsCommand, } from "./commands/ListThingPrincipalsCommand";
import { ListThingRegistrationTaskReportsCommand, } from "./commands/ListThingRegistrationTaskReportsCommand";
import { ListThingRegistrationTasksCommand, } from "./commands/ListThingRegistrationTasksCommand";
import { ListThingTypesCommand, } from "./commands/ListThingTypesCommand";
import { ListThingsCommand } from "./commands/ListThingsCommand";
import { ListThingsInBillingGroupCommand, } from "./commands/ListThingsInBillingGroupCommand";
import { ListThingsInThingGroupCommand, } from "./commands/ListThingsInThingGroupCommand";
import { ListTopicRuleDestinationsCommand, } from "./commands/ListTopicRuleDestinationsCommand";
import { ListTopicRulesCommand, } from "./commands/ListTopicRulesCommand";
import { ListV2LoggingLevelsCommand, } from "./commands/ListV2LoggingLevelsCommand";
import { ListViolationEventsCommand, } from "./commands/ListViolationEventsCommand";
import { RegisterCACertificateCommand, } from "./commands/RegisterCACertificateCommand";
import { RegisterCertificateCommand, } from "./commands/RegisterCertificateCommand";
import { RegisterCertificateWithoutCACommand, } from "./commands/RegisterCertificateWithoutCACommand";
import { RegisterThingCommand, } from "./commands/RegisterThingCommand";
import { RejectCertificateTransferCommand, } from "./commands/RejectCertificateTransferCommand";
import { RemoveThingFromBillingGroupCommand, } from "./commands/RemoveThingFromBillingGroupCommand";
import { RemoveThingFromThingGroupCommand, } from "./commands/RemoveThingFromThingGroupCommand";
import { ReplaceTopicRuleCommand, } from "./commands/ReplaceTopicRuleCommand";
import { SearchIndexCommand } from "./commands/SearchIndexCommand";
import { SetDefaultAuthorizerCommand, } from "./commands/SetDefaultAuthorizerCommand";
import { SetDefaultPolicyVersionCommand, } from "./commands/SetDefaultPolicyVersionCommand";
import { SetLoggingOptionsCommand, } from "./commands/SetLoggingOptionsCommand";
import { SetV2LoggingLevelCommand, } from "./commands/SetV2LoggingLevelCommand";
import { SetV2LoggingOptionsCommand, } from "./commands/SetV2LoggingOptionsCommand";
import { StartAuditMitigationActionsTaskCommand, } from "./commands/StartAuditMitigationActionsTaskCommand";
import { StartDetectMitigationActionsTaskCommand, } from "./commands/StartDetectMitigationActionsTaskCommand";
import { StartOnDemandAuditTaskCommand, } from "./commands/StartOnDemandAuditTaskCommand";
import { StartThingRegistrationTaskCommand, } from "./commands/StartThingRegistrationTaskCommand";
import { StopThingRegistrationTaskCommand, } from "./commands/StopThingRegistrationTaskCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { TestAuthorizationCommand, } from "./commands/TestAuthorizationCommand";
import { TestInvokeAuthorizerCommand, } from "./commands/TestInvokeAuthorizerCommand";
import { TransferCertificateCommand, } from "./commands/TransferCertificateCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateAccountAuditConfigurationCommand, } from "./commands/UpdateAccountAuditConfigurationCommand";
import { UpdateAuditSuppressionCommand, } from "./commands/UpdateAuditSuppressionCommand";
import { UpdateAuthorizerCommand, } from "./commands/UpdateAuthorizerCommand";
import { UpdateBillingGroupCommand, } from "./commands/UpdateBillingGroupCommand";
import { UpdateCACertificateCommand, } from "./commands/UpdateCACertificateCommand";
import { UpdateCertificateCommand, } from "./commands/UpdateCertificateCommand";
import { UpdateCustomMetricCommand, } from "./commands/UpdateCustomMetricCommand";
import { UpdateDimensionCommand, } from "./commands/UpdateDimensionCommand";
import { UpdateDomainConfigurationCommand, } from "./commands/UpdateDomainConfigurationCommand";
import { UpdateDynamicThingGroupCommand, } from "./commands/UpdateDynamicThingGroupCommand";
import { UpdateEventConfigurationsCommand, } from "./commands/UpdateEventConfigurationsCommand";
import { UpdateIndexingConfigurationCommand, } from "./commands/UpdateIndexingConfigurationCommand";
import { UpdateJobCommand } from "./commands/UpdateJobCommand";
import { UpdateMitigationActionCommand, } from "./commands/UpdateMitigationActionCommand";
import { UpdateProvisioningTemplateCommand, } from "./commands/UpdateProvisioningTemplateCommand";
import { UpdateRoleAliasCommand, } from "./commands/UpdateRoleAliasCommand";
import { UpdateScheduledAuditCommand, } from "./commands/UpdateScheduledAuditCommand";
import { UpdateSecurityProfileCommand, } from "./commands/UpdateSecurityProfileCommand";
import { UpdateStreamCommand, } from "./commands/UpdateStreamCommand";
import { UpdateThingCommand } from "./commands/UpdateThingCommand";
import { UpdateThingGroupCommand, } from "./commands/UpdateThingGroupCommand";
import { UpdateThingGroupsForThingCommand, } from "./commands/UpdateThingGroupsForThingCommand";
import { UpdateTopicRuleDestinationCommand, } from "./commands/UpdateTopicRuleDestinationCommand";
import { ValidateSecurityProfileBehaviorsCommand, } from "./commands/ValidateSecurityProfileBehaviorsCommand";
/**
 * <fullname>AWS IoT</fullname>
 *         <p>AWS IoT provides secure, bi-directional communication between Internet-connected
 *             devices (such as sensors, actuators, embedded devices, or smart appliances) and the AWS
 *             cloud. You can discover your custom IoT-Data endpoint to communicate with, configure
 *             rules for data processing and integration with other services, organize resources
 *             associated with each device (Registry), configure logging, and create and manage
 *             policies and credentials to authenticate devices.</p>
 *         <p>The service endpoints that expose this API are listed in
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/iot-core.html">AWS IoT Core Endpoints and Quotas</a>.
 *             You must use the endpoint for the region that has the resources you want to access.</p>
 *         <p>The service name used by <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">AWS
 *                 Signature Version 4</a> to sign the request is:
 *             <i>execute-api</i>.</p>
 *         <p>For more information about how AWS IoT works, see the <a href="https://docs.aws.amazon.com/iot/latest/developerguide/aws-iot-how-it-works.html">Developer
 *             Guide</a>.</p>
 *         <p>For information about how to use the credentials provider for AWS IoT, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/authorizing-direct-aws.html">Authorizing Direct Calls to AWS Services</a>.</p>
 */
var IoT = /** @class */ (function (_super) {
    __extends(IoT, _super);
    function IoT() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IoT.prototype.acceptCertificateTransfer = function (args, optionsOrCb, cb) {
        var command = new AcceptCertificateTransferCommand(args);
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
    IoT.prototype.addThingToBillingGroup = function (args, optionsOrCb, cb) {
        var command = new AddThingToBillingGroupCommand(args);
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
    IoT.prototype.addThingToThingGroup = function (args, optionsOrCb, cb) {
        var command = new AddThingToThingGroupCommand(args);
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
    IoT.prototype.associateTargetsWithJob = function (args, optionsOrCb, cb) {
        var command = new AssociateTargetsWithJobCommand(args);
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
    IoT.prototype.attachPolicy = function (args, optionsOrCb, cb) {
        var command = new AttachPolicyCommand(args);
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
    IoT.prototype.attachPrincipalPolicy = function (args, optionsOrCb, cb) {
        var command = new AttachPrincipalPolicyCommand(args);
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
    IoT.prototype.attachSecurityProfile = function (args, optionsOrCb, cb) {
        var command = new AttachSecurityProfileCommand(args);
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
    IoT.prototype.attachThingPrincipal = function (args, optionsOrCb, cb) {
        var command = new AttachThingPrincipalCommand(args);
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
    IoT.prototype.cancelAuditMitigationActionsTask = function (args, optionsOrCb, cb) {
        var command = new CancelAuditMitigationActionsTaskCommand(args);
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
    IoT.prototype.cancelAuditTask = function (args, optionsOrCb, cb) {
        var command = new CancelAuditTaskCommand(args);
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
    IoT.prototype.cancelCertificateTransfer = function (args, optionsOrCb, cb) {
        var command = new CancelCertificateTransferCommand(args);
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
    IoT.prototype.cancelDetectMitigationActionsTask = function (args, optionsOrCb, cb) {
        var command = new CancelDetectMitigationActionsTaskCommand(args);
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
    IoT.prototype.cancelJob = function (args, optionsOrCb, cb) {
        var command = new CancelJobCommand(args);
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
    IoT.prototype.cancelJobExecution = function (args, optionsOrCb, cb) {
        var command = new CancelJobExecutionCommand(args);
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
    IoT.prototype.clearDefaultAuthorizer = function (args, optionsOrCb, cb) {
        var command = new ClearDefaultAuthorizerCommand(args);
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
    IoT.prototype.confirmTopicRuleDestination = function (args, optionsOrCb, cb) {
        var command = new ConfirmTopicRuleDestinationCommand(args);
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
    IoT.prototype.createAuditSuppression = function (args, optionsOrCb, cb) {
        var command = new CreateAuditSuppressionCommand(args);
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
    IoT.prototype.createAuthorizer = function (args, optionsOrCb, cb) {
        var command = new CreateAuthorizerCommand(args);
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
    IoT.prototype.createBillingGroup = function (args, optionsOrCb, cb) {
        var command = new CreateBillingGroupCommand(args);
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
    IoT.prototype.createCertificateFromCsr = function (args, optionsOrCb, cb) {
        var command = new CreateCertificateFromCsrCommand(args);
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
    IoT.prototype.createCustomMetric = function (args, optionsOrCb, cb) {
        var command = new CreateCustomMetricCommand(args);
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
    IoT.prototype.createDimension = function (args, optionsOrCb, cb) {
        var command = new CreateDimensionCommand(args);
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
    IoT.prototype.createDomainConfiguration = function (args, optionsOrCb, cb) {
        var command = new CreateDomainConfigurationCommand(args);
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
    IoT.prototype.createDynamicThingGroup = function (args, optionsOrCb, cb) {
        var command = new CreateDynamicThingGroupCommand(args);
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
    IoT.prototype.createJob = function (args, optionsOrCb, cb) {
        var command = new CreateJobCommand(args);
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
    IoT.prototype.createJobTemplate = function (args, optionsOrCb, cb) {
        var command = new CreateJobTemplateCommand(args);
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
    IoT.prototype.createKeysAndCertificate = function (args, optionsOrCb, cb) {
        var command = new CreateKeysAndCertificateCommand(args);
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
    IoT.prototype.createMitigationAction = function (args, optionsOrCb, cb) {
        var command = new CreateMitigationActionCommand(args);
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
    IoT.prototype.createOTAUpdate = function (args, optionsOrCb, cb) {
        var command = new CreateOTAUpdateCommand(args);
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
    IoT.prototype.createPolicy = function (args, optionsOrCb, cb) {
        var command = new CreatePolicyCommand(args);
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
    IoT.prototype.createPolicyVersion = function (args, optionsOrCb, cb) {
        var command = new CreatePolicyVersionCommand(args);
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
    IoT.prototype.createProvisioningClaim = function (args, optionsOrCb, cb) {
        var command = new CreateProvisioningClaimCommand(args);
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
    IoT.prototype.createProvisioningTemplate = function (args, optionsOrCb, cb) {
        var command = new CreateProvisioningTemplateCommand(args);
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
    IoT.prototype.createProvisioningTemplateVersion = function (args, optionsOrCb, cb) {
        var command = new CreateProvisioningTemplateVersionCommand(args);
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
    IoT.prototype.createRoleAlias = function (args, optionsOrCb, cb) {
        var command = new CreateRoleAliasCommand(args);
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
    IoT.prototype.createScheduledAudit = function (args, optionsOrCb, cb) {
        var command = new CreateScheduledAuditCommand(args);
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
    IoT.prototype.createSecurityProfile = function (args, optionsOrCb, cb) {
        var command = new CreateSecurityProfileCommand(args);
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
    IoT.prototype.createStream = function (args, optionsOrCb, cb) {
        var command = new CreateStreamCommand(args);
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
    IoT.prototype.createThing = function (args, optionsOrCb, cb) {
        var command = new CreateThingCommand(args);
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
    IoT.prototype.createThingGroup = function (args, optionsOrCb, cb) {
        var command = new CreateThingGroupCommand(args);
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
    IoT.prototype.createThingType = function (args, optionsOrCb, cb) {
        var command = new CreateThingTypeCommand(args);
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
    IoT.prototype.createTopicRule = function (args, optionsOrCb, cb) {
        var command = new CreateTopicRuleCommand(args);
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
    IoT.prototype.createTopicRuleDestination = function (args, optionsOrCb, cb) {
        var command = new CreateTopicRuleDestinationCommand(args);
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
    IoT.prototype.deleteAccountAuditConfiguration = function (args, optionsOrCb, cb) {
        var command = new DeleteAccountAuditConfigurationCommand(args);
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
    IoT.prototype.deleteAuditSuppression = function (args, optionsOrCb, cb) {
        var command = new DeleteAuditSuppressionCommand(args);
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
    IoT.prototype.deleteAuthorizer = function (args, optionsOrCb, cb) {
        var command = new DeleteAuthorizerCommand(args);
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
    IoT.prototype.deleteBillingGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteBillingGroupCommand(args);
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
    IoT.prototype.deleteCACertificate = function (args, optionsOrCb, cb) {
        var command = new DeleteCACertificateCommand(args);
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
    IoT.prototype.deleteCertificate = function (args, optionsOrCb, cb) {
        var command = new DeleteCertificateCommand(args);
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
    IoT.prototype.deleteCustomMetric = function (args, optionsOrCb, cb) {
        var command = new DeleteCustomMetricCommand(args);
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
    IoT.prototype.deleteDimension = function (args, optionsOrCb, cb) {
        var command = new DeleteDimensionCommand(args);
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
    IoT.prototype.deleteDomainConfiguration = function (args, optionsOrCb, cb) {
        var command = new DeleteDomainConfigurationCommand(args);
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
    IoT.prototype.deleteDynamicThingGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteDynamicThingGroupCommand(args);
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
    IoT.prototype.deleteJob = function (args, optionsOrCb, cb) {
        var command = new DeleteJobCommand(args);
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
    IoT.prototype.deleteJobExecution = function (args, optionsOrCb, cb) {
        var command = new DeleteJobExecutionCommand(args);
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
    IoT.prototype.deleteJobTemplate = function (args, optionsOrCb, cb) {
        var command = new DeleteJobTemplateCommand(args);
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
    IoT.prototype.deleteMitigationAction = function (args, optionsOrCb, cb) {
        var command = new DeleteMitigationActionCommand(args);
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
    IoT.prototype.deleteOTAUpdate = function (args, optionsOrCb, cb) {
        var command = new DeleteOTAUpdateCommand(args);
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
    IoT.prototype.deletePolicy = function (args, optionsOrCb, cb) {
        var command = new DeletePolicyCommand(args);
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
    IoT.prototype.deletePolicyVersion = function (args, optionsOrCb, cb) {
        var command = new DeletePolicyVersionCommand(args);
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
    IoT.prototype.deleteProvisioningTemplate = function (args, optionsOrCb, cb) {
        var command = new DeleteProvisioningTemplateCommand(args);
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
    IoT.prototype.deleteProvisioningTemplateVersion = function (args, optionsOrCb, cb) {
        var command = new DeleteProvisioningTemplateVersionCommand(args);
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
    IoT.prototype.deleteRegistrationCode = function (args, optionsOrCb, cb) {
        var command = new DeleteRegistrationCodeCommand(args);
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
    IoT.prototype.deleteRoleAlias = function (args, optionsOrCb, cb) {
        var command = new DeleteRoleAliasCommand(args);
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
    IoT.prototype.deleteScheduledAudit = function (args, optionsOrCb, cb) {
        var command = new DeleteScheduledAuditCommand(args);
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
    IoT.prototype.deleteSecurityProfile = function (args, optionsOrCb, cb) {
        var command = new DeleteSecurityProfileCommand(args);
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
    IoT.prototype.deleteStream = function (args, optionsOrCb, cb) {
        var command = new DeleteStreamCommand(args);
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
    IoT.prototype.deleteThing = function (args, optionsOrCb, cb) {
        var command = new DeleteThingCommand(args);
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
    IoT.prototype.deleteThingGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteThingGroupCommand(args);
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
    IoT.prototype.deleteThingType = function (args, optionsOrCb, cb) {
        var command = new DeleteThingTypeCommand(args);
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
    IoT.prototype.deleteTopicRule = function (args, optionsOrCb, cb) {
        var command = new DeleteTopicRuleCommand(args);
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
    IoT.prototype.deleteTopicRuleDestination = function (args, optionsOrCb, cb) {
        var command = new DeleteTopicRuleDestinationCommand(args);
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
    IoT.prototype.deleteV2LoggingLevel = function (args, optionsOrCb, cb) {
        var command = new DeleteV2LoggingLevelCommand(args);
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
    IoT.prototype.deprecateThingType = function (args, optionsOrCb, cb) {
        var command = new DeprecateThingTypeCommand(args);
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
    IoT.prototype.describeAccountAuditConfiguration = function (args, optionsOrCb, cb) {
        var command = new DescribeAccountAuditConfigurationCommand(args);
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
    IoT.prototype.describeAuditFinding = function (args, optionsOrCb, cb) {
        var command = new DescribeAuditFindingCommand(args);
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
    IoT.prototype.describeAuditMitigationActionsTask = function (args, optionsOrCb, cb) {
        var command = new DescribeAuditMitigationActionsTaskCommand(args);
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
    IoT.prototype.describeAuditSuppression = function (args, optionsOrCb, cb) {
        var command = new DescribeAuditSuppressionCommand(args);
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
    IoT.prototype.describeAuditTask = function (args, optionsOrCb, cb) {
        var command = new DescribeAuditTaskCommand(args);
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
    IoT.prototype.describeAuthorizer = function (args, optionsOrCb, cb) {
        var command = new DescribeAuthorizerCommand(args);
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
    IoT.prototype.describeBillingGroup = function (args, optionsOrCb, cb) {
        var command = new DescribeBillingGroupCommand(args);
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
    IoT.prototype.describeCACertificate = function (args, optionsOrCb, cb) {
        var command = new DescribeCACertificateCommand(args);
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
    IoT.prototype.describeCertificate = function (args, optionsOrCb, cb) {
        var command = new DescribeCertificateCommand(args);
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
    IoT.prototype.describeCustomMetric = function (args, optionsOrCb, cb) {
        var command = new DescribeCustomMetricCommand(args);
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
    IoT.prototype.describeDefaultAuthorizer = function (args, optionsOrCb, cb) {
        var command = new DescribeDefaultAuthorizerCommand(args);
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
    IoT.prototype.describeDetectMitigationActionsTask = function (args, optionsOrCb, cb) {
        var command = new DescribeDetectMitigationActionsTaskCommand(args);
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
    IoT.prototype.describeDimension = function (args, optionsOrCb, cb) {
        var command = new DescribeDimensionCommand(args);
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
    IoT.prototype.describeDomainConfiguration = function (args, optionsOrCb, cb) {
        var command = new DescribeDomainConfigurationCommand(args);
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
    IoT.prototype.describeEndpoint = function (args, optionsOrCb, cb) {
        var command = new DescribeEndpointCommand(args);
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
    IoT.prototype.describeEventConfigurations = function (args, optionsOrCb, cb) {
        var command = new DescribeEventConfigurationsCommand(args);
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
    IoT.prototype.describeIndex = function (args, optionsOrCb, cb) {
        var command = new DescribeIndexCommand(args);
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
    IoT.prototype.describeJob = function (args, optionsOrCb, cb) {
        var command = new DescribeJobCommand(args);
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
    IoT.prototype.describeJobExecution = function (args, optionsOrCb, cb) {
        var command = new DescribeJobExecutionCommand(args);
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
    IoT.prototype.describeJobTemplate = function (args, optionsOrCb, cb) {
        var command = new DescribeJobTemplateCommand(args);
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
    IoT.prototype.describeMitigationAction = function (args, optionsOrCb, cb) {
        var command = new DescribeMitigationActionCommand(args);
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
    IoT.prototype.describeProvisioningTemplate = function (args, optionsOrCb, cb) {
        var command = new DescribeProvisioningTemplateCommand(args);
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
    IoT.prototype.describeProvisioningTemplateVersion = function (args, optionsOrCb, cb) {
        var command = new DescribeProvisioningTemplateVersionCommand(args);
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
    IoT.prototype.describeRoleAlias = function (args, optionsOrCb, cb) {
        var command = new DescribeRoleAliasCommand(args);
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
    IoT.prototype.describeScheduledAudit = function (args, optionsOrCb, cb) {
        var command = new DescribeScheduledAuditCommand(args);
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
    IoT.prototype.describeSecurityProfile = function (args, optionsOrCb, cb) {
        var command = new DescribeSecurityProfileCommand(args);
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
    IoT.prototype.describeStream = function (args, optionsOrCb, cb) {
        var command = new DescribeStreamCommand(args);
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
    IoT.prototype.describeThing = function (args, optionsOrCb, cb) {
        var command = new DescribeThingCommand(args);
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
    IoT.prototype.describeThingGroup = function (args, optionsOrCb, cb) {
        var command = new DescribeThingGroupCommand(args);
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
    IoT.prototype.describeThingRegistrationTask = function (args, optionsOrCb, cb) {
        var command = new DescribeThingRegistrationTaskCommand(args);
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
    IoT.prototype.describeThingType = function (args, optionsOrCb, cb) {
        var command = new DescribeThingTypeCommand(args);
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
    IoT.prototype.detachPolicy = function (args, optionsOrCb, cb) {
        var command = new DetachPolicyCommand(args);
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
    IoT.prototype.detachPrincipalPolicy = function (args, optionsOrCb, cb) {
        var command = new DetachPrincipalPolicyCommand(args);
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
    IoT.prototype.detachSecurityProfile = function (args, optionsOrCb, cb) {
        var command = new DetachSecurityProfileCommand(args);
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
    IoT.prototype.detachThingPrincipal = function (args, optionsOrCb, cb) {
        var command = new DetachThingPrincipalCommand(args);
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
    IoT.prototype.disableTopicRule = function (args, optionsOrCb, cb) {
        var command = new DisableTopicRuleCommand(args);
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
    IoT.prototype.enableTopicRule = function (args, optionsOrCb, cb) {
        var command = new EnableTopicRuleCommand(args);
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
    IoT.prototype.getBehaviorModelTrainingSummaries = function (args, optionsOrCb, cb) {
        var command = new GetBehaviorModelTrainingSummariesCommand(args);
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
    IoT.prototype.getCardinality = function (args, optionsOrCb, cb) {
        var command = new GetCardinalityCommand(args);
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
    IoT.prototype.getEffectivePolicies = function (args, optionsOrCb, cb) {
        var command = new GetEffectivePoliciesCommand(args);
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
    IoT.prototype.getIndexingConfiguration = function (args, optionsOrCb, cb) {
        var command = new GetIndexingConfigurationCommand(args);
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
    IoT.prototype.getJobDocument = function (args, optionsOrCb, cb) {
        var command = new GetJobDocumentCommand(args);
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
    IoT.prototype.getLoggingOptions = function (args, optionsOrCb, cb) {
        var command = new GetLoggingOptionsCommand(args);
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
    IoT.prototype.getOTAUpdate = function (args, optionsOrCb, cb) {
        var command = new GetOTAUpdateCommand(args);
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
    IoT.prototype.getPercentiles = function (args, optionsOrCb, cb) {
        var command = new GetPercentilesCommand(args);
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
    IoT.prototype.getPolicy = function (args, optionsOrCb, cb) {
        var command = new GetPolicyCommand(args);
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
    IoT.prototype.getPolicyVersion = function (args, optionsOrCb, cb) {
        var command = new GetPolicyVersionCommand(args);
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
    IoT.prototype.getRegistrationCode = function (args, optionsOrCb, cb) {
        var command = new GetRegistrationCodeCommand(args);
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
    IoT.prototype.getStatistics = function (args, optionsOrCb, cb) {
        var command = new GetStatisticsCommand(args);
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
    IoT.prototype.getTopicRule = function (args, optionsOrCb, cb) {
        var command = new GetTopicRuleCommand(args);
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
    IoT.prototype.getTopicRuleDestination = function (args, optionsOrCb, cb) {
        var command = new GetTopicRuleDestinationCommand(args);
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
    IoT.prototype.getV2LoggingOptions = function (args, optionsOrCb, cb) {
        var command = new GetV2LoggingOptionsCommand(args);
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
    IoT.prototype.listActiveViolations = function (args, optionsOrCb, cb) {
        var command = new ListActiveViolationsCommand(args);
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
    IoT.prototype.listAttachedPolicies = function (args, optionsOrCb, cb) {
        var command = new ListAttachedPoliciesCommand(args);
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
    IoT.prototype.listAuditFindings = function (args, optionsOrCb, cb) {
        var command = new ListAuditFindingsCommand(args);
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
    IoT.prototype.listAuditMitigationActionsExecutions = function (args, optionsOrCb, cb) {
        var command = new ListAuditMitigationActionsExecutionsCommand(args);
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
    IoT.prototype.listAuditMitigationActionsTasks = function (args, optionsOrCb, cb) {
        var command = new ListAuditMitigationActionsTasksCommand(args);
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
    IoT.prototype.listAuditSuppressions = function (args, optionsOrCb, cb) {
        var command = new ListAuditSuppressionsCommand(args);
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
    IoT.prototype.listAuditTasks = function (args, optionsOrCb, cb) {
        var command = new ListAuditTasksCommand(args);
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
    IoT.prototype.listAuthorizers = function (args, optionsOrCb, cb) {
        var command = new ListAuthorizersCommand(args);
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
    IoT.prototype.listBillingGroups = function (args, optionsOrCb, cb) {
        var command = new ListBillingGroupsCommand(args);
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
    IoT.prototype.listCACertificates = function (args, optionsOrCb, cb) {
        var command = new ListCACertificatesCommand(args);
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
    IoT.prototype.listCertificates = function (args, optionsOrCb, cb) {
        var command = new ListCertificatesCommand(args);
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
    IoT.prototype.listCertificatesByCA = function (args, optionsOrCb, cb) {
        var command = new ListCertificatesByCACommand(args);
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
    IoT.prototype.listCustomMetrics = function (args, optionsOrCb, cb) {
        var command = new ListCustomMetricsCommand(args);
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
    IoT.prototype.listDetectMitigationActionsExecutions = function (args, optionsOrCb, cb) {
        var command = new ListDetectMitigationActionsExecutionsCommand(args);
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
    IoT.prototype.listDetectMitigationActionsTasks = function (args, optionsOrCb, cb) {
        var command = new ListDetectMitigationActionsTasksCommand(args);
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
    IoT.prototype.listDimensions = function (args, optionsOrCb, cb) {
        var command = new ListDimensionsCommand(args);
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
    IoT.prototype.listDomainConfigurations = function (args, optionsOrCb, cb) {
        var command = new ListDomainConfigurationsCommand(args);
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
    IoT.prototype.listIndices = function (args, optionsOrCb, cb) {
        var command = new ListIndicesCommand(args);
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
    IoT.prototype.listJobExecutionsForJob = function (args, optionsOrCb, cb) {
        var command = new ListJobExecutionsForJobCommand(args);
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
    IoT.prototype.listJobExecutionsForThing = function (args, optionsOrCb, cb) {
        var command = new ListJobExecutionsForThingCommand(args);
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
    IoT.prototype.listJobs = function (args, optionsOrCb, cb) {
        var command = new ListJobsCommand(args);
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
    IoT.prototype.listJobTemplates = function (args, optionsOrCb, cb) {
        var command = new ListJobTemplatesCommand(args);
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
    IoT.prototype.listMitigationActions = function (args, optionsOrCb, cb) {
        var command = new ListMitigationActionsCommand(args);
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
    IoT.prototype.listOTAUpdates = function (args, optionsOrCb, cb) {
        var command = new ListOTAUpdatesCommand(args);
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
    IoT.prototype.listOutgoingCertificates = function (args, optionsOrCb, cb) {
        var command = new ListOutgoingCertificatesCommand(args);
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
    IoT.prototype.listPolicies = function (args, optionsOrCb, cb) {
        var command = new ListPoliciesCommand(args);
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
    IoT.prototype.listPolicyPrincipals = function (args, optionsOrCb, cb) {
        var command = new ListPolicyPrincipalsCommand(args);
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
    IoT.prototype.listPolicyVersions = function (args, optionsOrCb, cb) {
        var command = new ListPolicyVersionsCommand(args);
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
    IoT.prototype.listPrincipalPolicies = function (args, optionsOrCb, cb) {
        var command = new ListPrincipalPoliciesCommand(args);
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
    IoT.prototype.listPrincipalThings = function (args, optionsOrCb, cb) {
        var command = new ListPrincipalThingsCommand(args);
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
    IoT.prototype.listProvisioningTemplates = function (args, optionsOrCb, cb) {
        var command = new ListProvisioningTemplatesCommand(args);
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
    IoT.prototype.listProvisioningTemplateVersions = function (args, optionsOrCb, cb) {
        var command = new ListProvisioningTemplateVersionsCommand(args);
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
    IoT.prototype.listRoleAliases = function (args, optionsOrCb, cb) {
        var command = new ListRoleAliasesCommand(args);
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
    IoT.prototype.listScheduledAudits = function (args, optionsOrCb, cb) {
        var command = new ListScheduledAuditsCommand(args);
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
    IoT.prototype.listSecurityProfiles = function (args, optionsOrCb, cb) {
        var command = new ListSecurityProfilesCommand(args);
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
    IoT.prototype.listSecurityProfilesForTarget = function (args, optionsOrCb, cb) {
        var command = new ListSecurityProfilesForTargetCommand(args);
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
    IoT.prototype.listStreams = function (args, optionsOrCb, cb) {
        var command = new ListStreamsCommand(args);
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
    IoT.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    IoT.prototype.listTargetsForPolicy = function (args, optionsOrCb, cb) {
        var command = new ListTargetsForPolicyCommand(args);
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
    IoT.prototype.listTargetsForSecurityProfile = function (args, optionsOrCb, cb) {
        var command = new ListTargetsForSecurityProfileCommand(args);
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
    IoT.prototype.listThingGroups = function (args, optionsOrCb, cb) {
        var command = new ListThingGroupsCommand(args);
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
    IoT.prototype.listThingGroupsForThing = function (args, optionsOrCb, cb) {
        var command = new ListThingGroupsForThingCommand(args);
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
    IoT.prototype.listThingPrincipals = function (args, optionsOrCb, cb) {
        var command = new ListThingPrincipalsCommand(args);
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
    IoT.prototype.listThingRegistrationTaskReports = function (args, optionsOrCb, cb) {
        var command = new ListThingRegistrationTaskReportsCommand(args);
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
    IoT.prototype.listThingRegistrationTasks = function (args, optionsOrCb, cb) {
        var command = new ListThingRegistrationTasksCommand(args);
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
    IoT.prototype.listThings = function (args, optionsOrCb, cb) {
        var command = new ListThingsCommand(args);
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
    IoT.prototype.listThingsInBillingGroup = function (args, optionsOrCb, cb) {
        var command = new ListThingsInBillingGroupCommand(args);
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
    IoT.prototype.listThingsInThingGroup = function (args, optionsOrCb, cb) {
        var command = new ListThingsInThingGroupCommand(args);
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
    IoT.prototype.listThingTypes = function (args, optionsOrCb, cb) {
        var command = new ListThingTypesCommand(args);
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
    IoT.prototype.listTopicRuleDestinations = function (args, optionsOrCb, cb) {
        var command = new ListTopicRuleDestinationsCommand(args);
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
    IoT.prototype.listTopicRules = function (args, optionsOrCb, cb) {
        var command = new ListTopicRulesCommand(args);
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
    IoT.prototype.listV2LoggingLevels = function (args, optionsOrCb, cb) {
        var command = new ListV2LoggingLevelsCommand(args);
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
    IoT.prototype.listViolationEvents = function (args, optionsOrCb, cb) {
        var command = new ListViolationEventsCommand(args);
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
    IoT.prototype.registerCACertificate = function (args, optionsOrCb, cb) {
        var command = new RegisterCACertificateCommand(args);
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
    IoT.prototype.registerCertificate = function (args, optionsOrCb, cb) {
        var command = new RegisterCertificateCommand(args);
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
    IoT.prototype.registerCertificateWithoutCA = function (args, optionsOrCb, cb) {
        var command = new RegisterCertificateWithoutCACommand(args);
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
    IoT.prototype.registerThing = function (args, optionsOrCb, cb) {
        var command = new RegisterThingCommand(args);
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
    IoT.prototype.rejectCertificateTransfer = function (args, optionsOrCb, cb) {
        var command = new RejectCertificateTransferCommand(args);
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
    IoT.prototype.removeThingFromBillingGroup = function (args, optionsOrCb, cb) {
        var command = new RemoveThingFromBillingGroupCommand(args);
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
    IoT.prototype.removeThingFromThingGroup = function (args, optionsOrCb, cb) {
        var command = new RemoveThingFromThingGroupCommand(args);
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
    IoT.prototype.replaceTopicRule = function (args, optionsOrCb, cb) {
        var command = new ReplaceTopicRuleCommand(args);
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
    IoT.prototype.searchIndex = function (args, optionsOrCb, cb) {
        var command = new SearchIndexCommand(args);
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
    IoT.prototype.setDefaultAuthorizer = function (args, optionsOrCb, cb) {
        var command = new SetDefaultAuthorizerCommand(args);
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
    IoT.prototype.setDefaultPolicyVersion = function (args, optionsOrCb, cb) {
        var command = new SetDefaultPolicyVersionCommand(args);
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
    IoT.prototype.setLoggingOptions = function (args, optionsOrCb, cb) {
        var command = new SetLoggingOptionsCommand(args);
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
    IoT.prototype.setV2LoggingLevel = function (args, optionsOrCb, cb) {
        var command = new SetV2LoggingLevelCommand(args);
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
    IoT.prototype.setV2LoggingOptions = function (args, optionsOrCb, cb) {
        var command = new SetV2LoggingOptionsCommand(args);
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
    IoT.prototype.startAuditMitigationActionsTask = function (args, optionsOrCb, cb) {
        var command = new StartAuditMitigationActionsTaskCommand(args);
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
    IoT.prototype.startDetectMitigationActionsTask = function (args, optionsOrCb, cb) {
        var command = new StartDetectMitigationActionsTaskCommand(args);
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
    IoT.prototype.startOnDemandAuditTask = function (args, optionsOrCb, cb) {
        var command = new StartOnDemandAuditTaskCommand(args);
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
    IoT.prototype.startThingRegistrationTask = function (args, optionsOrCb, cb) {
        var command = new StartThingRegistrationTaskCommand(args);
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
    IoT.prototype.stopThingRegistrationTask = function (args, optionsOrCb, cb) {
        var command = new StopThingRegistrationTaskCommand(args);
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
    IoT.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    IoT.prototype.testAuthorization = function (args, optionsOrCb, cb) {
        var command = new TestAuthorizationCommand(args);
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
    IoT.prototype.testInvokeAuthorizer = function (args, optionsOrCb, cb) {
        var command = new TestInvokeAuthorizerCommand(args);
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
    IoT.prototype.transferCertificate = function (args, optionsOrCb, cb) {
        var command = new TransferCertificateCommand(args);
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
    IoT.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    IoT.prototype.updateAccountAuditConfiguration = function (args, optionsOrCb, cb) {
        var command = new UpdateAccountAuditConfigurationCommand(args);
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
    IoT.prototype.updateAuditSuppression = function (args, optionsOrCb, cb) {
        var command = new UpdateAuditSuppressionCommand(args);
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
    IoT.prototype.updateAuthorizer = function (args, optionsOrCb, cb) {
        var command = new UpdateAuthorizerCommand(args);
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
    IoT.prototype.updateBillingGroup = function (args, optionsOrCb, cb) {
        var command = new UpdateBillingGroupCommand(args);
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
    IoT.prototype.updateCACertificate = function (args, optionsOrCb, cb) {
        var command = new UpdateCACertificateCommand(args);
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
    IoT.prototype.updateCertificate = function (args, optionsOrCb, cb) {
        var command = new UpdateCertificateCommand(args);
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
    IoT.prototype.updateCustomMetric = function (args, optionsOrCb, cb) {
        var command = new UpdateCustomMetricCommand(args);
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
    IoT.prototype.updateDimension = function (args, optionsOrCb, cb) {
        var command = new UpdateDimensionCommand(args);
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
    IoT.prototype.updateDomainConfiguration = function (args, optionsOrCb, cb) {
        var command = new UpdateDomainConfigurationCommand(args);
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
    IoT.prototype.updateDynamicThingGroup = function (args, optionsOrCb, cb) {
        var command = new UpdateDynamicThingGroupCommand(args);
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
    IoT.prototype.updateEventConfigurations = function (args, optionsOrCb, cb) {
        var command = new UpdateEventConfigurationsCommand(args);
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
    IoT.prototype.updateIndexingConfiguration = function (args, optionsOrCb, cb) {
        var command = new UpdateIndexingConfigurationCommand(args);
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
    IoT.prototype.updateJob = function (args, optionsOrCb, cb) {
        var command = new UpdateJobCommand(args);
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
    IoT.prototype.updateMitigationAction = function (args, optionsOrCb, cb) {
        var command = new UpdateMitigationActionCommand(args);
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
    IoT.prototype.updateProvisioningTemplate = function (args, optionsOrCb, cb) {
        var command = new UpdateProvisioningTemplateCommand(args);
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
    IoT.prototype.updateRoleAlias = function (args, optionsOrCb, cb) {
        var command = new UpdateRoleAliasCommand(args);
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
    IoT.prototype.updateScheduledAudit = function (args, optionsOrCb, cb) {
        var command = new UpdateScheduledAuditCommand(args);
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
    IoT.prototype.updateSecurityProfile = function (args, optionsOrCb, cb) {
        var command = new UpdateSecurityProfileCommand(args);
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
    IoT.prototype.updateStream = function (args, optionsOrCb, cb) {
        var command = new UpdateStreamCommand(args);
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
    IoT.prototype.updateThing = function (args, optionsOrCb, cb) {
        var command = new UpdateThingCommand(args);
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
    IoT.prototype.updateThingGroup = function (args, optionsOrCb, cb) {
        var command = new UpdateThingGroupCommand(args);
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
    IoT.prototype.updateThingGroupsForThing = function (args, optionsOrCb, cb) {
        var command = new UpdateThingGroupsForThingCommand(args);
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
    IoT.prototype.updateTopicRuleDestination = function (args, optionsOrCb, cb) {
        var command = new UpdateTopicRuleDestinationCommand(args);
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
    IoT.prototype.validateSecurityProfileBehaviors = function (args, optionsOrCb, cb) {
        var command = new ValidateSecurityProfileBehaviorsCommand(args);
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
    return IoT;
}(IoTClient));
export { IoT };
//# sourceMappingURL=IoT.js.map