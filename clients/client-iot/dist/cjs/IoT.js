"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IoT = void 0;
const IoTClient_1 = require("./IoTClient");
const AcceptCertificateTransferCommand_1 = require("./commands/AcceptCertificateTransferCommand");
const AddThingToBillingGroupCommand_1 = require("./commands/AddThingToBillingGroupCommand");
const AddThingToThingGroupCommand_1 = require("./commands/AddThingToThingGroupCommand");
const AssociateTargetsWithJobCommand_1 = require("./commands/AssociateTargetsWithJobCommand");
const AttachPolicyCommand_1 = require("./commands/AttachPolicyCommand");
const AttachPrincipalPolicyCommand_1 = require("./commands/AttachPrincipalPolicyCommand");
const AttachSecurityProfileCommand_1 = require("./commands/AttachSecurityProfileCommand");
const AttachThingPrincipalCommand_1 = require("./commands/AttachThingPrincipalCommand");
const CancelAuditMitigationActionsTaskCommand_1 = require("./commands/CancelAuditMitigationActionsTaskCommand");
const CancelAuditTaskCommand_1 = require("./commands/CancelAuditTaskCommand");
const CancelCertificateTransferCommand_1 = require("./commands/CancelCertificateTransferCommand");
const CancelDetectMitigationActionsTaskCommand_1 = require("./commands/CancelDetectMitigationActionsTaskCommand");
const CancelJobCommand_1 = require("./commands/CancelJobCommand");
const CancelJobExecutionCommand_1 = require("./commands/CancelJobExecutionCommand");
const ClearDefaultAuthorizerCommand_1 = require("./commands/ClearDefaultAuthorizerCommand");
const ConfirmTopicRuleDestinationCommand_1 = require("./commands/ConfirmTopicRuleDestinationCommand");
const CreateAuditSuppressionCommand_1 = require("./commands/CreateAuditSuppressionCommand");
const CreateAuthorizerCommand_1 = require("./commands/CreateAuthorizerCommand");
const CreateBillingGroupCommand_1 = require("./commands/CreateBillingGroupCommand");
const CreateCertificateFromCsrCommand_1 = require("./commands/CreateCertificateFromCsrCommand");
const CreateCustomMetricCommand_1 = require("./commands/CreateCustomMetricCommand");
const CreateDimensionCommand_1 = require("./commands/CreateDimensionCommand");
const CreateDomainConfigurationCommand_1 = require("./commands/CreateDomainConfigurationCommand");
const CreateDynamicThingGroupCommand_1 = require("./commands/CreateDynamicThingGroupCommand");
const CreateJobCommand_1 = require("./commands/CreateJobCommand");
const CreateJobTemplateCommand_1 = require("./commands/CreateJobTemplateCommand");
const CreateKeysAndCertificateCommand_1 = require("./commands/CreateKeysAndCertificateCommand");
const CreateMitigationActionCommand_1 = require("./commands/CreateMitigationActionCommand");
const CreateOTAUpdateCommand_1 = require("./commands/CreateOTAUpdateCommand");
const CreatePolicyCommand_1 = require("./commands/CreatePolicyCommand");
const CreatePolicyVersionCommand_1 = require("./commands/CreatePolicyVersionCommand");
const CreateProvisioningClaimCommand_1 = require("./commands/CreateProvisioningClaimCommand");
const CreateProvisioningTemplateCommand_1 = require("./commands/CreateProvisioningTemplateCommand");
const CreateProvisioningTemplateVersionCommand_1 = require("./commands/CreateProvisioningTemplateVersionCommand");
const CreateRoleAliasCommand_1 = require("./commands/CreateRoleAliasCommand");
const CreateScheduledAuditCommand_1 = require("./commands/CreateScheduledAuditCommand");
const CreateSecurityProfileCommand_1 = require("./commands/CreateSecurityProfileCommand");
const CreateStreamCommand_1 = require("./commands/CreateStreamCommand");
const CreateThingCommand_1 = require("./commands/CreateThingCommand");
const CreateThingGroupCommand_1 = require("./commands/CreateThingGroupCommand");
const CreateThingTypeCommand_1 = require("./commands/CreateThingTypeCommand");
const CreateTopicRuleCommand_1 = require("./commands/CreateTopicRuleCommand");
const CreateTopicRuleDestinationCommand_1 = require("./commands/CreateTopicRuleDestinationCommand");
const DeleteAccountAuditConfigurationCommand_1 = require("./commands/DeleteAccountAuditConfigurationCommand");
const DeleteAuditSuppressionCommand_1 = require("./commands/DeleteAuditSuppressionCommand");
const DeleteAuthorizerCommand_1 = require("./commands/DeleteAuthorizerCommand");
const DeleteBillingGroupCommand_1 = require("./commands/DeleteBillingGroupCommand");
const DeleteCACertificateCommand_1 = require("./commands/DeleteCACertificateCommand");
const DeleteCertificateCommand_1 = require("./commands/DeleteCertificateCommand");
const DeleteCustomMetricCommand_1 = require("./commands/DeleteCustomMetricCommand");
const DeleteDimensionCommand_1 = require("./commands/DeleteDimensionCommand");
const DeleteDomainConfigurationCommand_1 = require("./commands/DeleteDomainConfigurationCommand");
const DeleteDynamicThingGroupCommand_1 = require("./commands/DeleteDynamicThingGroupCommand");
const DeleteJobCommand_1 = require("./commands/DeleteJobCommand");
const DeleteJobExecutionCommand_1 = require("./commands/DeleteJobExecutionCommand");
const DeleteJobTemplateCommand_1 = require("./commands/DeleteJobTemplateCommand");
const DeleteMitigationActionCommand_1 = require("./commands/DeleteMitigationActionCommand");
const DeleteOTAUpdateCommand_1 = require("./commands/DeleteOTAUpdateCommand");
const DeletePolicyCommand_1 = require("./commands/DeletePolicyCommand");
const DeletePolicyVersionCommand_1 = require("./commands/DeletePolicyVersionCommand");
const DeleteProvisioningTemplateCommand_1 = require("./commands/DeleteProvisioningTemplateCommand");
const DeleteProvisioningTemplateVersionCommand_1 = require("./commands/DeleteProvisioningTemplateVersionCommand");
const DeleteRegistrationCodeCommand_1 = require("./commands/DeleteRegistrationCodeCommand");
const DeleteRoleAliasCommand_1 = require("./commands/DeleteRoleAliasCommand");
const DeleteScheduledAuditCommand_1 = require("./commands/DeleteScheduledAuditCommand");
const DeleteSecurityProfileCommand_1 = require("./commands/DeleteSecurityProfileCommand");
const DeleteStreamCommand_1 = require("./commands/DeleteStreamCommand");
const DeleteThingCommand_1 = require("./commands/DeleteThingCommand");
const DeleteThingGroupCommand_1 = require("./commands/DeleteThingGroupCommand");
const DeleteThingTypeCommand_1 = require("./commands/DeleteThingTypeCommand");
const DeleteTopicRuleCommand_1 = require("./commands/DeleteTopicRuleCommand");
const DeleteTopicRuleDestinationCommand_1 = require("./commands/DeleteTopicRuleDestinationCommand");
const DeleteV2LoggingLevelCommand_1 = require("./commands/DeleteV2LoggingLevelCommand");
const DeprecateThingTypeCommand_1 = require("./commands/DeprecateThingTypeCommand");
const DescribeAccountAuditConfigurationCommand_1 = require("./commands/DescribeAccountAuditConfigurationCommand");
const DescribeAuditFindingCommand_1 = require("./commands/DescribeAuditFindingCommand");
const DescribeAuditMitigationActionsTaskCommand_1 = require("./commands/DescribeAuditMitigationActionsTaskCommand");
const DescribeAuditSuppressionCommand_1 = require("./commands/DescribeAuditSuppressionCommand");
const DescribeAuditTaskCommand_1 = require("./commands/DescribeAuditTaskCommand");
const DescribeAuthorizerCommand_1 = require("./commands/DescribeAuthorizerCommand");
const DescribeBillingGroupCommand_1 = require("./commands/DescribeBillingGroupCommand");
const DescribeCACertificateCommand_1 = require("./commands/DescribeCACertificateCommand");
const DescribeCertificateCommand_1 = require("./commands/DescribeCertificateCommand");
const DescribeCustomMetricCommand_1 = require("./commands/DescribeCustomMetricCommand");
const DescribeDefaultAuthorizerCommand_1 = require("./commands/DescribeDefaultAuthorizerCommand");
const DescribeDetectMitigationActionsTaskCommand_1 = require("./commands/DescribeDetectMitigationActionsTaskCommand");
const DescribeDimensionCommand_1 = require("./commands/DescribeDimensionCommand");
const DescribeDomainConfigurationCommand_1 = require("./commands/DescribeDomainConfigurationCommand");
const DescribeEndpointCommand_1 = require("./commands/DescribeEndpointCommand");
const DescribeEventConfigurationsCommand_1 = require("./commands/DescribeEventConfigurationsCommand");
const DescribeIndexCommand_1 = require("./commands/DescribeIndexCommand");
const DescribeJobCommand_1 = require("./commands/DescribeJobCommand");
const DescribeJobExecutionCommand_1 = require("./commands/DescribeJobExecutionCommand");
const DescribeJobTemplateCommand_1 = require("./commands/DescribeJobTemplateCommand");
const DescribeMitigationActionCommand_1 = require("./commands/DescribeMitigationActionCommand");
const DescribeProvisioningTemplateCommand_1 = require("./commands/DescribeProvisioningTemplateCommand");
const DescribeProvisioningTemplateVersionCommand_1 = require("./commands/DescribeProvisioningTemplateVersionCommand");
const DescribeRoleAliasCommand_1 = require("./commands/DescribeRoleAliasCommand");
const DescribeScheduledAuditCommand_1 = require("./commands/DescribeScheduledAuditCommand");
const DescribeSecurityProfileCommand_1 = require("./commands/DescribeSecurityProfileCommand");
const DescribeStreamCommand_1 = require("./commands/DescribeStreamCommand");
const DescribeThingCommand_1 = require("./commands/DescribeThingCommand");
const DescribeThingGroupCommand_1 = require("./commands/DescribeThingGroupCommand");
const DescribeThingRegistrationTaskCommand_1 = require("./commands/DescribeThingRegistrationTaskCommand");
const DescribeThingTypeCommand_1 = require("./commands/DescribeThingTypeCommand");
const DetachPolicyCommand_1 = require("./commands/DetachPolicyCommand");
const DetachPrincipalPolicyCommand_1 = require("./commands/DetachPrincipalPolicyCommand");
const DetachSecurityProfileCommand_1 = require("./commands/DetachSecurityProfileCommand");
const DetachThingPrincipalCommand_1 = require("./commands/DetachThingPrincipalCommand");
const DisableTopicRuleCommand_1 = require("./commands/DisableTopicRuleCommand");
const EnableTopicRuleCommand_1 = require("./commands/EnableTopicRuleCommand");
const GetBehaviorModelTrainingSummariesCommand_1 = require("./commands/GetBehaviorModelTrainingSummariesCommand");
const GetCardinalityCommand_1 = require("./commands/GetCardinalityCommand");
const GetEffectivePoliciesCommand_1 = require("./commands/GetEffectivePoliciesCommand");
const GetIndexingConfigurationCommand_1 = require("./commands/GetIndexingConfigurationCommand");
const GetJobDocumentCommand_1 = require("./commands/GetJobDocumentCommand");
const GetLoggingOptionsCommand_1 = require("./commands/GetLoggingOptionsCommand");
const GetOTAUpdateCommand_1 = require("./commands/GetOTAUpdateCommand");
const GetPercentilesCommand_1 = require("./commands/GetPercentilesCommand");
const GetPolicyCommand_1 = require("./commands/GetPolicyCommand");
const GetPolicyVersionCommand_1 = require("./commands/GetPolicyVersionCommand");
const GetRegistrationCodeCommand_1 = require("./commands/GetRegistrationCodeCommand");
const GetStatisticsCommand_1 = require("./commands/GetStatisticsCommand");
const GetTopicRuleCommand_1 = require("./commands/GetTopicRuleCommand");
const GetTopicRuleDestinationCommand_1 = require("./commands/GetTopicRuleDestinationCommand");
const GetV2LoggingOptionsCommand_1 = require("./commands/GetV2LoggingOptionsCommand");
const ListActiveViolationsCommand_1 = require("./commands/ListActiveViolationsCommand");
const ListAttachedPoliciesCommand_1 = require("./commands/ListAttachedPoliciesCommand");
const ListAuditFindingsCommand_1 = require("./commands/ListAuditFindingsCommand");
const ListAuditMitigationActionsExecutionsCommand_1 = require("./commands/ListAuditMitigationActionsExecutionsCommand");
const ListAuditMitigationActionsTasksCommand_1 = require("./commands/ListAuditMitigationActionsTasksCommand");
const ListAuditSuppressionsCommand_1 = require("./commands/ListAuditSuppressionsCommand");
const ListAuditTasksCommand_1 = require("./commands/ListAuditTasksCommand");
const ListAuthorizersCommand_1 = require("./commands/ListAuthorizersCommand");
const ListBillingGroupsCommand_1 = require("./commands/ListBillingGroupsCommand");
const ListCACertificatesCommand_1 = require("./commands/ListCACertificatesCommand");
const ListCertificatesByCACommand_1 = require("./commands/ListCertificatesByCACommand");
const ListCertificatesCommand_1 = require("./commands/ListCertificatesCommand");
const ListCustomMetricsCommand_1 = require("./commands/ListCustomMetricsCommand");
const ListDetectMitigationActionsExecutionsCommand_1 = require("./commands/ListDetectMitigationActionsExecutionsCommand");
const ListDetectMitigationActionsTasksCommand_1 = require("./commands/ListDetectMitigationActionsTasksCommand");
const ListDimensionsCommand_1 = require("./commands/ListDimensionsCommand");
const ListDomainConfigurationsCommand_1 = require("./commands/ListDomainConfigurationsCommand");
const ListIndicesCommand_1 = require("./commands/ListIndicesCommand");
const ListJobExecutionsForJobCommand_1 = require("./commands/ListJobExecutionsForJobCommand");
const ListJobExecutionsForThingCommand_1 = require("./commands/ListJobExecutionsForThingCommand");
const ListJobTemplatesCommand_1 = require("./commands/ListJobTemplatesCommand");
const ListJobsCommand_1 = require("./commands/ListJobsCommand");
const ListMitigationActionsCommand_1 = require("./commands/ListMitigationActionsCommand");
const ListOTAUpdatesCommand_1 = require("./commands/ListOTAUpdatesCommand");
const ListOutgoingCertificatesCommand_1 = require("./commands/ListOutgoingCertificatesCommand");
const ListPoliciesCommand_1 = require("./commands/ListPoliciesCommand");
const ListPolicyPrincipalsCommand_1 = require("./commands/ListPolicyPrincipalsCommand");
const ListPolicyVersionsCommand_1 = require("./commands/ListPolicyVersionsCommand");
const ListPrincipalPoliciesCommand_1 = require("./commands/ListPrincipalPoliciesCommand");
const ListPrincipalThingsCommand_1 = require("./commands/ListPrincipalThingsCommand");
const ListProvisioningTemplateVersionsCommand_1 = require("./commands/ListProvisioningTemplateVersionsCommand");
const ListProvisioningTemplatesCommand_1 = require("./commands/ListProvisioningTemplatesCommand");
const ListRoleAliasesCommand_1 = require("./commands/ListRoleAliasesCommand");
const ListScheduledAuditsCommand_1 = require("./commands/ListScheduledAuditsCommand");
const ListSecurityProfilesCommand_1 = require("./commands/ListSecurityProfilesCommand");
const ListSecurityProfilesForTargetCommand_1 = require("./commands/ListSecurityProfilesForTargetCommand");
const ListStreamsCommand_1 = require("./commands/ListStreamsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListTargetsForPolicyCommand_1 = require("./commands/ListTargetsForPolicyCommand");
const ListTargetsForSecurityProfileCommand_1 = require("./commands/ListTargetsForSecurityProfileCommand");
const ListThingGroupsCommand_1 = require("./commands/ListThingGroupsCommand");
const ListThingGroupsForThingCommand_1 = require("./commands/ListThingGroupsForThingCommand");
const ListThingPrincipalsCommand_1 = require("./commands/ListThingPrincipalsCommand");
const ListThingRegistrationTaskReportsCommand_1 = require("./commands/ListThingRegistrationTaskReportsCommand");
const ListThingRegistrationTasksCommand_1 = require("./commands/ListThingRegistrationTasksCommand");
const ListThingTypesCommand_1 = require("./commands/ListThingTypesCommand");
const ListThingsCommand_1 = require("./commands/ListThingsCommand");
const ListThingsInBillingGroupCommand_1 = require("./commands/ListThingsInBillingGroupCommand");
const ListThingsInThingGroupCommand_1 = require("./commands/ListThingsInThingGroupCommand");
const ListTopicRuleDestinationsCommand_1 = require("./commands/ListTopicRuleDestinationsCommand");
const ListTopicRulesCommand_1 = require("./commands/ListTopicRulesCommand");
const ListV2LoggingLevelsCommand_1 = require("./commands/ListV2LoggingLevelsCommand");
const ListViolationEventsCommand_1 = require("./commands/ListViolationEventsCommand");
const RegisterCACertificateCommand_1 = require("./commands/RegisterCACertificateCommand");
const RegisterCertificateCommand_1 = require("./commands/RegisterCertificateCommand");
const RegisterCertificateWithoutCACommand_1 = require("./commands/RegisterCertificateWithoutCACommand");
const RegisterThingCommand_1 = require("./commands/RegisterThingCommand");
const RejectCertificateTransferCommand_1 = require("./commands/RejectCertificateTransferCommand");
const RemoveThingFromBillingGroupCommand_1 = require("./commands/RemoveThingFromBillingGroupCommand");
const RemoveThingFromThingGroupCommand_1 = require("./commands/RemoveThingFromThingGroupCommand");
const ReplaceTopicRuleCommand_1 = require("./commands/ReplaceTopicRuleCommand");
const SearchIndexCommand_1 = require("./commands/SearchIndexCommand");
const SetDefaultAuthorizerCommand_1 = require("./commands/SetDefaultAuthorizerCommand");
const SetDefaultPolicyVersionCommand_1 = require("./commands/SetDefaultPolicyVersionCommand");
const SetLoggingOptionsCommand_1 = require("./commands/SetLoggingOptionsCommand");
const SetV2LoggingLevelCommand_1 = require("./commands/SetV2LoggingLevelCommand");
const SetV2LoggingOptionsCommand_1 = require("./commands/SetV2LoggingOptionsCommand");
const StartAuditMitigationActionsTaskCommand_1 = require("./commands/StartAuditMitigationActionsTaskCommand");
const StartDetectMitigationActionsTaskCommand_1 = require("./commands/StartDetectMitigationActionsTaskCommand");
const StartOnDemandAuditTaskCommand_1 = require("./commands/StartOnDemandAuditTaskCommand");
const StartThingRegistrationTaskCommand_1 = require("./commands/StartThingRegistrationTaskCommand");
const StopThingRegistrationTaskCommand_1 = require("./commands/StopThingRegistrationTaskCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const TestAuthorizationCommand_1 = require("./commands/TestAuthorizationCommand");
const TestInvokeAuthorizerCommand_1 = require("./commands/TestInvokeAuthorizerCommand");
const TransferCertificateCommand_1 = require("./commands/TransferCertificateCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateAccountAuditConfigurationCommand_1 = require("./commands/UpdateAccountAuditConfigurationCommand");
const UpdateAuditSuppressionCommand_1 = require("./commands/UpdateAuditSuppressionCommand");
const UpdateAuthorizerCommand_1 = require("./commands/UpdateAuthorizerCommand");
const UpdateBillingGroupCommand_1 = require("./commands/UpdateBillingGroupCommand");
const UpdateCACertificateCommand_1 = require("./commands/UpdateCACertificateCommand");
const UpdateCertificateCommand_1 = require("./commands/UpdateCertificateCommand");
const UpdateCustomMetricCommand_1 = require("./commands/UpdateCustomMetricCommand");
const UpdateDimensionCommand_1 = require("./commands/UpdateDimensionCommand");
const UpdateDomainConfigurationCommand_1 = require("./commands/UpdateDomainConfigurationCommand");
const UpdateDynamicThingGroupCommand_1 = require("./commands/UpdateDynamicThingGroupCommand");
const UpdateEventConfigurationsCommand_1 = require("./commands/UpdateEventConfigurationsCommand");
const UpdateIndexingConfigurationCommand_1 = require("./commands/UpdateIndexingConfigurationCommand");
const UpdateJobCommand_1 = require("./commands/UpdateJobCommand");
const UpdateMitigationActionCommand_1 = require("./commands/UpdateMitigationActionCommand");
const UpdateProvisioningTemplateCommand_1 = require("./commands/UpdateProvisioningTemplateCommand");
const UpdateRoleAliasCommand_1 = require("./commands/UpdateRoleAliasCommand");
const UpdateScheduledAuditCommand_1 = require("./commands/UpdateScheduledAuditCommand");
const UpdateSecurityProfileCommand_1 = require("./commands/UpdateSecurityProfileCommand");
const UpdateStreamCommand_1 = require("./commands/UpdateStreamCommand");
const UpdateThingCommand_1 = require("./commands/UpdateThingCommand");
const UpdateThingGroupCommand_1 = require("./commands/UpdateThingGroupCommand");
const UpdateThingGroupsForThingCommand_1 = require("./commands/UpdateThingGroupsForThingCommand");
const UpdateTopicRuleDestinationCommand_1 = require("./commands/UpdateTopicRuleDestinationCommand");
const ValidateSecurityProfileBehaviorsCommand_1 = require("./commands/ValidateSecurityProfileBehaviorsCommand");
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
class IoT extends IoTClient_1.IoTClient {
    acceptCertificateTransfer(args, optionsOrCb, cb) {
        const command = new AcceptCertificateTransferCommand_1.AcceptCertificateTransferCommand(args);
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
    addThingToBillingGroup(args, optionsOrCb, cb) {
        const command = new AddThingToBillingGroupCommand_1.AddThingToBillingGroupCommand(args);
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
    addThingToThingGroup(args, optionsOrCb, cb) {
        const command = new AddThingToThingGroupCommand_1.AddThingToThingGroupCommand(args);
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
    associateTargetsWithJob(args, optionsOrCb, cb) {
        const command = new AssociateTargetsWithJobCommand_1.AssociateTargetsWithJobCommand(args);
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
    attachPolicy(args, optionsOrCb, cb) {
        const command = new AttachPolicyCommand_1.AttachPolicyCommand(args);
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
    attachPrincipalPolicy(args, optionsOrCb, cb) {
        const command = new AttachPrincipalPolicyCommand_1.AttachPrincipalPolicyCommand(args);
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
    attachSecurityProfile(args, optionsOrCb, cb) {
        const command = new AttachSecurityProfileCommand_1.AttachSecurityProfileCommand(args);
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
    attachThingPrincipal(args, optionsOrCb, cb) {
        const command = new AttachThingPrincipalCommand_1.AttachThingPrincipalCommand(args);
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
    cancelAuditMitigationActionsTask(args, optionsOrCb, cb) {
        const command = new CancelAuditMitigationActionsTaskCommand_1.CancelAuditMitigationActionsTaskCommand(args);
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
    cancelAuditTask(args, optionsOrCb, cb) {
        const command = new CancelAuditTaskCommand_1.CancelAuditTaskCommand(args);
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
    cancelCertificateTransfer(args, optionsOrCb, cb) {
        const command = new CancelCertificateTransferCommand_1.CancelCertificateTransferCommand(args);
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
    cancelDetectMitigationActionsTask(args, optionsOrCb, cb) {
        const command = new CancelDetectMitigationActionsTaskCommand_1.CancelDetectMitigationActionsTaskCommand(args);
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
    cancelJob(args, optionsOrCb, cb) {
        const command = new CancelJobCommand_1.CancelJobCommand(args);
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
    cancelJobExecution(args, optionsOrCb, cb) {
        const command = new CancelJobExecutionCommand_1.CancelJobExecutionCommand(args);
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
    clearDefaultAuthorizer(args, optionsOrCb, cb) {
        const command = new ClearDefaultAuthorizerCommand_1.ClearDefaultAuthorizerCommand(args);
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
    confirmTopicRuleDestination(args, optionsOrCb, cb) {
        const command = new ConfirmTopicRuleDestinationCommand_1.ConfirmTopicRuleDestinationCommand(args);
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
    createAuditSuppression(args, optionsOrCb, cb) {
        const command = new CreateAuditSuppressionCommand_1.CreateAuditSuppressionCommand(args);
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
    createAuthorizer(args, optionsOrCb, cb) {
        const command = new CreateAuthorizerCommand_1.CreateAuthorizerCommand(args);
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
    createBillingGroup(args, optionsOrCb, cb) {
        const command = new CreateBillingGroupCommand_1.CreateBillingGroupCommand(args);
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
    createCertificateFromCsr(args, optionsOrCb, cb) {
        const command = new CreateCertificateFromCsrCommand_1.CreateCertificateFromCsrCommand(args);
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
    createCustomMetric(args, optionsOrCb, cb) {
        const command = new CreateCustomMetricCommand_1.CreateCustomMetricCommand(args);
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
    createDimension(args, optionsOrCb, cb) {
        const command = new CreateDimensionCommand_1.CreateDimensionCommand(args);
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
    createDomainConfiguration(args, optionsOrCb, cb) {
        const command = new CreateDomainConfigurationCommand_1.CreateDomainConfigurationCommand(args);
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
    createDynamicThingGroup(args, optionsOrCb, cb) {
        const command = new CreateDynamicThingGroupCommand_1.CreateDynamicThingGroupCommand(args);
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
    createJob(args, optionsOrCb, cb) {
        const command = new CreateJobCommand_1.CreateJobCommand(args);
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
    createJobTemplate(args, optionsOrCb, cb) {
        const command = new CreateJobTemplateCommand_1.CreateJobTemplateCommand(args);
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
    createKeysAndCertificate(args, optionsOrCb, cb) {
        const command = new CreateKeysAndCertificateCommand_1.CreateKeysAndCertificateCommand(args);
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
    createMitigationAction(args, optionsOrCb, cb) {
        const command = new CreateMitigationActionCommand_1.CreateMitigationActionCommand(args);
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
    createOTAUpdate(args, optionsOrCb, cb) {
        const command = new CreateOTAUpdateCommand_1.CreateOTAUpdateCommand(args);
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
    createPolicy(args, optionsOrCb, cb) {
        const command = new CreatePolicyCommand_1.CreatePolicyCommand(args);
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
    createPolicyVersion(args, optionsOrCb, cb) {
        const command = new CreatePolicyVersionCommand_1.CreatePolicyVersionCommand(args);
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
    createProvisioningClaim(args, optionsOrCb, cb) {
        const command = new CreateProvisioningClaimCommand_1.CreateProvisioningClaimCommand(args);
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
    createProvisioningTemplate(args, optionsOrCb, cb) {
        const command = new CreateProvisioningTemplateCommand_1.CreateProvisioningTemplateCommand(args);
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
    createProvisioningTemplateVersion(args, optionsOrCb, cb) {
        const command = new CreateProvisioningTemplateVersionCommand_1.CreateProvisioningTemplateVersionCommand(args);
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
    createRoleAlias(args, optionsOrCb, cb) {
        const command = new CreateRoleAliasCommand_1.CreateRoleAliasCommand(args);
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
    createScheduledAudit(args, optionsOrCb, cb) {
        const command = new CreateScheduledAuditCommand_1.CreateScheduledAuditCommand(args);
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
    createSecurityProfile(args, optionsOrCb, cb) {
        const command = new CreateSecurityProfileCommand_1.CreateSecurityProfileCommand(args);
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
    createStream(args, optionsOrCb, cb) {
        const command = new CreateStreamCommand_1.CreateStreamCommand(args);
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
    createThing(args, optionsOrCb, cb) {
        const command = new CreateThingCommand_1.CreateThingCommand(args);
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
    createThingGroup(args, optionsOrCb, cb) {
        const command = new CreateThingGroupCommand_1.CreateThingGroupCommand(args);
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
    createThingType(args, optionsOrCb, cb) {
        const command = new CreateThingTypeCommand_1.CreateThingTypeCommand(args);
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
    createTopicRule(args, optionsOrCb, cb) {
        const command = new CreateTopicRuleCommand_1.CreateTopicRuleCommand(args);
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
    createTopicRuleDestination(args, optionsOrCb, cb) {
        const command = new CreateTopicRuleDestinationCommand_1.CreateTopicRuleDestinationCommand(args);
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
    deleteAccountAuditConfiguration(args, optionsOrCb, cb) {
        const command = new DeleteAccountAuditConfigurationCommand_1.DeleteAccountAuditConfigurationCommand(args);
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
    deleteAuditSuppression(args, optionsOrCb, cb) {
        const command = new DeleteAuditSuppressionCommand_1.DeleteAuditSuppressionCommand(args);
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
    deleteAuthorizer(args, optionsOrCb, cb) {
        const command = new DeleteAuthorizerCommand_1.DeleteAuthorizerCommand(args);
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
    deleteBillingGroup(args, optionsOrCb, cb) {
        const command = new DeleteBillingGroupCommand_1.DeleteBillingGroupCommand(args);
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
    deleteCACertificate(args, optionsOrCb, cb) {
        const command = new DeleteCACertificateCommand_1.DeleteCACertificateCommand(args);
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
    deleteCertificate(args, optionsOrCb, cb) {
        const command = new DeleteCertificateCommand_1.DeleteCertificateCommand(args);
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
    deleteCustomMetric(args, optionsOrCb, cb) {
        const command = new DeleteCustomMetricCommand_1.DeleteCustomMetricCommand(args);
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
    deleteDimension(args, optionsOrCb, cb) {
        const command = new DeleteDimensionCommand_1.DeleteDimensionCommand(args);
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
    deleteDomainConfiguration(args, optionsOrCb, cb) {
        const command = new DeleteDomainConfigurationCommand_1.DeleteDomainConfigurationCommand(args);
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
    deleteDynamicThingGroup(args, optionsOrCb, cb) {
        const command = new DeleteDynamicThingGroupCommand_1.DeleteDynamicThingGroupCommand(args);
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
    deleteJob(args, optionsOrCb, cb) {
        const command = new DeleteJobCommand_1.DeleteJobCommand(args);
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
    deleteJobExecution(args, optionsOrCb, cb) {
        const command = new DeleteJobExecutionCommand_1.DeleteJobExecutionCommand(args);
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
    deleteJobTemplate(args, optionsOrCb, cb) {
        const command = new DeleteJobTemplateCommand_1.DeleteJobTemplateCommand(args);
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
    deleteMitigationAction(args, optionsOrCb, cb) {
        const command = new DeleteMitigationActionCommand_1.DeleteMitigationActionCommand(args);
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
    deleteOTAUpdate(args, optionsOrCb, cb) {
        const command = new DeleteOTAUpdateCommand_1.DeleteOTAUpdateCommand(args);
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
    deletePolicy(args, optionsOrCb, cb) {
        const command = new DeletePolicyCommand_1.DeletePolicyCommand(args);
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
    deletePolicyVersion(args, optionsOrCb, cb) {
        const command = new DeletePolicyVersionCommand_1.DeletePolicyVersionCommand(args);
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
    deleteProvisioningTemplate(args, optionsOrCb, cb) {
        const command = new DeleteProvisioningTemplateCommand_1.DeleteProvisioningTemplateCommand(args);
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
    deleteProvisioningTemplateVersion(args, optionsOrCb, cb) {
        const command = new DeleteProvisioningTemplateVersionCommand_1.DeleteProvisioningTemplateVersionCommand(args);
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
    deleteRegistrationCode(args, optionsOrCb, cb) {
        const command = new DeleteRegistrationCodeCommand_1.DeleteRegistrationCodeCommand(args);
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
    deleteRoleAlias(args, optionsOrCb, cb) {
        const command = new DeleteRoleAliasCommand_1.DeleteRoleAliasCommand(args);
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
    deleteScheduledAudit(args, optionsOrCb, cb) {
        const command = new DeleteScheduledAuditCommand_1.DeleteScheduledAuditCommand(args);
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
    deleteSecurityProfile(args, optionsOrCb, cb) {
        const command = new DeleteSecurityProfileCommand_1.DeleteSecurityProfileCommand(args);
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
    deleteStream(args, optionsOrCb, cb) {
        const command = new DeleteStreamCommand_1.DeleteStreamCommand(args);
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
    deleteThing(args, optionsOrCb, cb) {
        const command = new DeleteThingCommand_1.DeleteThingCommand(args);
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
    deleteThingGroup(args, optionsOrCb, cb) {
        const command = new DeleteThingGroupCommand_1.DeleteThingGroupCommand(args);
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
    deleteThingType(args, optionsOrCb, cb) {
        const command = new DeleteThingTypeCommand_1.DeleteThingTypeCommand(args);
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
    deleteTopicRule(args, optionsOrCb, cb) {
        const command = new DeleteTopicRuleCommand_1.DeleteTopicRuleCommand(args);
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
    deleteTopicRuleDestination(args, optionsOrCb, cb) {
        const command = new DeleteTopicRuleDestinationCommand_1.DeleteTopicRuleDestinationCommand(args);
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
    deleteV2LoggingLevel(args, optionsOrCb, cb) {
        const command = new DeleteV2LoggingLevelCommand_1.DeleteV2LoggingLevelCommand(args);
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
    deprecateThingType(args, optionsOrCb, cb) {
        const command = new DeprecateThingTypeCommand_1.DeprecateThingTypeCommand(args);
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
    describeAccountAuditConfiguration(args, optionsOrCb, cb) {
        const command = new DescribeAccountAuditConfigurationCommand_1.DescribeAccountAuditConfigurationCommand(args);
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
    describeAuditFinding(args, optionsOrCb, cb) {
        const command = new DescribeAuditFindingCommand_1.DescribeAuditFindingCommand(args);
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
    describeAuditMitigationActionsTask(args, optionsOrCb, cb) {
        const command = new DescribeAuditMitigationActionsTaskCommand_1.DescribeAuditMitigationActionsTaskCommand(args);
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
    describeAuditSuppression(args, optionsOrCb, cb) {
        const command = new DescribeAuditSuppressionCommand_1.DescribeAuditSuppressionCommand(args);
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
    describeAuditTask(args, optionsOrCb, cb) {
        const command = new DescribeAuditTaskCommand_1.DescribeAuditTaskCommand(args);
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
    describeAuthorizer(args, optionsOrCb, cb) {
        const command = new DescribeAuthorizerCommand_1.DescribeAuthorizerCommand(args);
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
    describeBillingGroup(args, optionsOrCb, cb) {
        const command = new DescribeBillingGroupCommand_1.DescribeBillingGroupCommand(args);
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
    describeCACertificate(args, optionsOrCb, cb) {
        const command = new DescribeCACertificateCommand_1.DescribeCACertificateCommand(args);
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
    describeCertificate(args, optionsOrCb, cb) {
        const command = new DescribeCertificateCommand_1.DescribeCertificateCommand(args);
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
    describeCustomMetric(args, optionsOrCb, cb) {
        const command = new DescribeCustomMetricCommand_1.DescribeCustomMetricCommand(args);
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
    describeDefaultAuthorizer(args, optionsOrCb, cb) {
        const command = new DescribeDefaultAuthorizerCommand_1.DescribeDefaultAuthorizerCommand(args);
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
    describeDetectMitigationActionsTask(args, optionsOrCb, cb) {
        const command = new DescribeDetectMitigationActionsTaskCommand_1.DescribeDetectMitigationActionsTaskCommand(args);
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
    describeDimension(args, optionsOrCb, cb) {
        const command = new DescribeDimensionCommand_1.DescribeDimensionCommand(args);
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
    describeDomainConfiguration(args, optionsOrCb, cb) {
        const command = new DescribeDomainConfigurationCommand_1.DescribeDomainConfigurationCommand(args);
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
    describeEndpoint(args, optionsOrCb, cb) {
        const command = new DescribeEndpointCommand_1.DescribeEndpointCommand(args);
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
    describeEventConfigurations(args, optionsOrCb, cb) {
        const command = new DescribeEventConfigurationsCommand_1.DescribeEventConfigurationsCommand(args);
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
    describeIndex(args, optionsOrCb, cb) {
        const command = new DescribeIndexCommand_1.DescribeIndexCommand(args);
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
    describeJob(args, optionsOrCb, cb) {
        const command = new DescribeJobCommand_1.DescribeJobCommand(args);
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
    describeJobExecution(args, optionsOrCb, cb) {
        const command = new DescribeJobExecutionCommand_1.DescribeJobExecutionCommand(args);
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
    describeJobTemplate(args, optionsOrCb, cb) {
        const command = new DescribeJobTemplateCommand_1.DescribeJobTemplateCommand(args);
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
    describeMitigationAction(args, optionsOrCb, cb) {
        const command = new DescribeMitigationActionCommand_1.DescribeMitigationActionCommand(args);
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
    describeProvisioningTemplate(args, optionsOrCb, cb) {
        const command = new DescribeProvisioningTemplateCommand_1.DescribeProvisioningTemplateCommand(args);
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
    describeProvisioningTemplateVersion(args, optionsOrCb, cb) {
        const command = new DescribeProvisioningTemplateVersionCommand_1.DescribeProvisioningTemplateVersionCommand(args);
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
    describeRoleAlias(args, optionsOrCb, cb) {
        const command = new DescribeRoleAliasCommand_1.DescribeRoleAliasCommand(args);
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
    describeScheduledAudit(args, optionsOrCb, cb) {
        const command = new DescribeScheduledAuditCommand_1.DescribeScheduledAuditCommand(args);
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
    describeSecurityProfile(args, optionsOrCb, cb) {
        const command = new DescribeSecurityProfileCommand_1.DescribeSecurityProfileCommand(args);
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
    describeStream(args, optionsOrCb, cb) {
        const command = new DescribeStreamCommand_1.DescribeStreamCommand(args);
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
    describeThing(args, optionsOrCb, cb) {
        const command = new DescribeThingCommand_1.DescribeThingCommand(args);
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
    describeThingGroup(args, optionsOrCb, cb) {
        const command = new DescribeThingGroupCommand_1.DescribeThingGroupCommand(args);
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
    describeThingRegistrationTask(args, optionsOrCb, cb) {
        const command = new DescribeThingRegistrationTaskCommand_1.DescribeThingRegistrationTaskCommand(args);
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
    describeThingType(args, optionsOrCb, cb) {
        const command = new DescribeThingTypeCommand_1.DescribeThingTypeCommand(args);
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
    detachPolicy(args, optionsOrCb, cb) {
        const command = new DetachPolicyCommand_1.DetachPolicyCommand(args);
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
    detachPrincipalPolicy(args, optionsOrCb, cb) {
        const command = new DetachPrincipalPolicyCommand_1.DetachPrincipalPolicyCommand(args);
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
    detachSecurityProfile(args, optionsOrCb, cb) {
        const command = new DetachSecurityProfileCommand_1.DetachSecurityProfileCommand(args);
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
    detachThingPrincipal(args, optionsOrCb, cb) {
        const command = new DetachThingPrincipalCommand_1.DetachThingPrincipalCommand(args);
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
    disableTopicRule(args, optionsOrCb, cb) {
        const command = new DisableTopicRuleCommand_1.DisableTopicRuleCommand(args);
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
    enableTopicRule(args, optionsOrCb, cb) {
        const command = new EnableTopicRuleCommand_1.EnableTopicRuleCommand(args);
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
    getBehaviorModelTrainingSummaries(args, optionsOrCb, cb) {
        const command = new GetBehaviorModelTrainingSummariesCommand_1.GetBehaviorModelTrainingSummariesCommand(args);
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
    getCardinality(args, optionsOrCb, cb) {
        const command = new GetCardinalityCommand_1.GetCardinalityCommand(args);
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
    getEffectivePolicies(args, optionsOrCb, cb) {
        const command = new GetEffectivePoliciesCommand_1.GetEffectivePoliciesCommand(args);
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
    getIndexingConfiguration(args, optionsOrCb, cb) {
        const command = new GetIndexingConfigurationCommand_1.GetIndexingConfigurationCommand(args);
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
    getJobDocument(args, optionsOrCb, cb) {
        const command = new GetJobDocumentCommand_1.GetJobDocumentCommand(args);
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
    getLoggingOptions(args, optionsOrCb, cb) {
        const command = new GetLoggingOptionsCommand_1.GetLoggingOptionsCommand(args);
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
    getOTAUpdate(args, optionsOrCb, cb) {
        const command = new GetOTAUpdateCommand_1.GetOTAUpdateCommand(args);
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
    getPercentiles(args, optionsOrCb, cb) {
        const command = new GetPercentilesCommand_1.GetPercentilesCommand(args);
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
    getPolicy(args, optionsOrCb, cb) {
        const command = new GetPolicyCommand_1.GetPolicyCommand(args);
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
    getPolicyVersion(args, optionsOrCb, cb) {
        const command = new GetPolicyVersionCommand_1.GetPolicyVersionCommand(args);
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
    getRegistrationCode(args, optionsOrCb, cb) {
        const command = new GetRegistrationCodeCommand_1.GetRegistrationCodeCommand(args);
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
    getStatistics(args, optionsOrCb, cb) {
        const command = new GetStatisticsCommand_1.GetStatisticsCommand(args);
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
    getTopicRule(args, optionsOrCb, cb) {
        const command = new GetTopicRuleCommand_1.GetTopicRuleCommand(args);
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
    getTopicRuleDestination(args, optionsOrCb, cb) {
        const command = new GetTopicRuleDestinationCommand_1.GetTopicRuleDestinationCommand(args);
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
    getV2LoggingOptions(args, optionsOrCb, cb) {
        const command = new GetV2LoggingOptionsCommand_1.GetV2LoggingOptionsCommand(args);
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
    listActiveViolations(args, optionsOrCb, cb) {
        const command = new ListActiveViolationsCommand_1.ListActiveViolationsCommand(args);
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
    listAttachedPolicies(args, optionsOrCb, cb) {
        const command = new ListAttachedPoliciesCommand_1.ListAttachedPoliciesCommand(args);
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
    listAuditFindings(args, optionsOrCb, cb) {
        const command = new ListAuditFindingsCommand_1.ListAuditFindingsCommand(args);
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
    listAuditMitigationActionsExecutions(args, optionsOrCb, cb) {
        const command = new ListAuditMitigationActionsExecutionsCommand_1.ListAuditMitigationActionsExecutionsCommand(args);
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
    listAuditMitigationActionsTasks(args, optionsOrCb, cb) {
        const command = new ListAuditMitigationActionsTasksCommand_1.ListAuditMitigationActionsTasksCommand(args);
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
    listAuditSuppressions(args, optionsOrCb, cb) {
        const command = new ListAuditSuppressionsCommand_1.ListAuditSuppressionsCommand(args);
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
    listAuditTasks(args, optionsOrCb, cb) {
        const command = new ListAuditTasksCommand_1.ListAuditTasksCommand(args);
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
    listAuthorizers(args, optionsOrCb, cb) {
        const command = new ListAuthorizersCommand_1.ListAuthorizersCommand(args);
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
    listBillingGroups(args, optionsOrCb, cb) {
        const command = new ListBillingGroupsCommand_1.ListBillingGroupsCommand(args);
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
    listCACertificates(args, optionsOrCb, cb) {
        const command = new ListCACertificatesCommand_1.ListCACertificatesCommand(args);
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
    listCertificates(args, optionsOrCb, cb) {
        const command = new ListCertificatesCommand_1.ListCertificatesCommand(args);
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
    listCertificatesByCA(args, optionsOrCb, cb) {
        const command = new ListCertificatesByCACommand_1.ListCertificatesByCACommand(args);
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
    listCustomMetrics(args, optionsOrCb, cb) {
        const command = new ListCustomMetricsCommand_1.ListCustomMetricsCommand(args);
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
    listDetectMitigationActionsExecutions(args, optionsOrCb, cb) {
        const command = new ListDetectMitigationActionsExecutionsCommand_1.ListDetectMitigationActionsExecutionsCommand(args);
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
    listDetectMitigationActionsTasks(args, optionsOrCb, cb) {
        const command = new ListDetectMitigationActionsTasksCommand_1.ListDetectMitigationActionsTasksCommand(args);
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
    listDimensions(args, optionsOrCb, cb) {
        const command = new ListDimensionsCommand_1.ListDimensionsCommand(args);
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
    listDomainConfigurations(args, optionsOrCb, cb) {
        const command = new ListDomainConfigurationsCommand_1.ListDomainConfigurationsCommand(args);
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
    listIndices(args, optionsOrCb, cb) {
        const command = new ListIndicesCommand_1.ListIndicesCommand(args);
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
    listJobExecutionsForJob(args, optionsOrCb, cb) {
        const command = new ListJobExecutionsForJobCommand_1.ListJobExecutionsForJobCommand(args);
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
    listJobExecutionsForThing(args, optionsOrCb, cb) {
        const command = new ListJobExecutionsForThingCommand_1.ListJobExecutionsForThingCommand(args);
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
    listJobs(args, optionsOrCb, cb) {
        const command = new ListJobsCommand_1.ListJobsCommand(args);
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
    listJobTemplates(args, optionsOrCb, cb) {
        const command = new ListJobTemplatesCommand_1.ListJobTemplatesCommand(args);
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
    listMitigationActions(args, optionsOrCb, cb) {
        const command = new ListMitigationActionsCommand_1.ListMitigationActionsCommand(args);
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
    listOTAUpdates(args, optionsOrCb, cb) {
        const command = new ListOTAUpdatesCommand_1.ListOTAUpdatesCommand(args);
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
    listOutgoingCertificates(args, optionsOrCb, cb) {
        const command = new ListOutgoingCertificatesCommand_1.ListOutgoingCertificatesCommand(args);
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
    listPolicies(args, optionsOrCb, cb) {
        const command = new ListPoliciesCommand_1.ListPoliciesCommand(args);
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
    listPolicyPrincipals(args, optionsOrCb, cb) {
        const command = new ListPolicyPrincipalsCommand_1.ListPolicyPrincipalsCommand(args);
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
    listPolicyVersions(args, optionsOrCb, cb) {
        const command = new ListPolicyVersionsCommand_1.ListPolicyVersionsCommand(args);
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
    listPrincipalPolicies(args, optionsOrCb, cb) {
        const command = new ListPrincipalPoliciesCommand_1.ListPrincipalPoliciesCommand(args);
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
    listPrincipalThings(args, optionsOrCb, cb) {
        const command = new ListPrincipalThingsCommand_1.ListPrincipalThingsCommand(args);
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
    listProvisioningTemplates(args, optionsOrCb, cb) {
        const command = new ListProvisioningTemplatesCommand_1.ListProvisioningTemplatesCommand(args);
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
    listProvisioningTemplateVersions(args, optionsOrCb, cb) {
        const command = new ListProvisioningTemplateVersionsCommand_1.ListProvisioningTemplateVersionsCommand(args);
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
    listRoleAliases(args, optionsOrCb, cb) {
        const command = new ListRoleAliasesCommand_1.ListRoleAliasesCommand(args);
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
    listScheduledAudits(args, optionsOrCb, cb) {
        const command = new ListScheduledAuditsCommand_1.ListScheduledAuditsCommand(args);
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
    listSecurityProfiles(args, optionsOrCb, cb) {
        const command = new ListSecurityProfilesCommand_1.ListSecurityProfilesCommand(args);
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
    listSecurityProfilesForTarget(args, optionsOrCb, cb) {
        const command = new ListSecurityProfilesForTargetCommand_1.ListSecurityProfilesForTargetCommand(args);
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
    listStreams(args, optionsOrCb, cb) {
        const command = new ListStreamsCommand_1.ListStreamsCommand(args);
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
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
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
    listTargetsForPolicy(args, optionsOrCb, cb) {
        const command = new ListTargetsForPolicyCommand_1.ListTargetsForPolicyCommand(args);
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
    listTargetsForSecurityProfile(args, optionsOrCb, cb) {
        const command = new ListTargetsForSecurityProfileCommand_1.ListTargetsForSecurityProfileCommand(args);
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
    listThingGroups(args, optionsOrCb, cb) {
        const command = new ListThingGroupsCommand_1.ListThingGroupsCommand(args);
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
    listThingGroupsForThing(args, optionsOrCb, cb) {
        const command = new ListThingGroupsForThingCommand_1.ListThingGroupsForThingCommand(args);
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
    listThingPrincipals(args, optionsOrCb, cb) {
        const command = new ListThingPrincipalsCommand_1.ListThingPrincipalsCommand(args);
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
    listThingRegistrationTaskReports(args, optionsOrCb, cb) {
        const command = new ListThingRegistrationTaskReportsCommand_1.ListThingRegistrationTaskReportsCommand(args);
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
    listThingRegistrationTasks(args, optionsOrCb, cb) {
        const command = new ListThingRegistrationTasksCommand_1.ListThingRegistrationTasksCommand(args);
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
    listThings(args, optionsOrCb, cb) {
        const command = new ListThingsCommand_1.ListThingsCommand(args);
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
    listThingsInBillingGroup(args, optionsOrCb, cb) {
        const command = new ListThingsInBillingGroupCommand_1.ListThingsInBillingGroupCommand(args);
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
    listThingsInThingGroup(args, optionsOrCb, cb) {
        const command = new ListThingsInThingGroupCommand_1.ListThingsInThingGroupCommand(args);
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
    listThingTypes(args, optionsOrCb, cb) {
        const command = new ListThingTypesCommand_1.ListThingTypesCommand(args);
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
    listTopicRuleDestinations(args, optionsOrCb, cb) {
        const command = new ListTopicRuleDestinationsCommand_1.ListTopicRuleDestinationsCommand(args);
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
    listTopicRules(args, optionsOrCb, cb) {
        const command = new ListTopicRulesCommand_1.ListTopicRulesCommand(args);
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
    listV2LoggingLevels(args, optionsOrCb, cb) {
        const command = new ListV2LoggingLevelsCommand_1.ListV2LoggingLevelsCommand(args);
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
    listViolationEvents(args, optionsOrCb, cb) {
        const command = new ListViolationEventsCommand_1.ListViolationEventsCommand(args);
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
    registerCACertificate(args, optionsOrCb, cb) {
        const command = new RegisterCACertificateCommand_1.RegisterCACertificateCommand(args);
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
    registerCertificate(args, optionsOrCb, cb) {
        const command = new RegisterCertificateCommand_1.RegisterCertificateCommand(args);
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
    registerCertificateWithoutCA(args, optionsOrCb, cb) {
        const command = new RegisterCertificateWithoutCACommand_1.RegisterCertificateWithoutCACommand(args);
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
    registerThing(args, optionsOrCb, cb) {
        const command = new RegisterThingCommand_1.RegisterThingCommand(args);
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
    rejectCertificateTransfer(args, optionsOrCb, cb) {
        const command = new RejectCertificateTransferCommand_1.RejectCertificateTransferCommand(args);
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
    removeThingFromBillingGroup(args, optionsOrCb, cb) {
        const command = new RemoveThingFromBillingGroupCommand_1.RemoveThingFromBillingGroupCommand(args);
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
    removeThingFromThingGroup(args, optionsOrCb, cb) {
        const command = new RemoveThingFromThingGroupCommand_1.RemoveThingFromThingGroupCommand(args);
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
    replaceTopicRule(args, optionsOrCb, cb) {
        const command = new ReplaceTopicRuleCommand_1.ReplaceTopicRuleCommand(args);
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
    searchIndex(args, optionsOrCb, cb) {
        const command = new SearchIndexCommand_1.SearchIndexCommand(args);
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
    setDefaultAuthorizer(args, optionsOrCb, cb) {
        const command = new SetDefaultAuthorizerCommand_1.SetDefaultAuthorizerCommand(args);
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
    setDefaultPolicyVersion(args, optionsOrCb, cb) {
        const command = new SetDefaultPolicyVersionCommand_1.SetDefaultPolicyVersionCommand(args);
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
    setLoggingOptions(args, optionsOrCb, cb) {
        const command = new SetLoggingOptionsCommand_1.SetLoggingOptionsCommand(args);
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
    setV2LoggingLevel(args, optionsOrCb, cb) {
        const command = new SetV2LoggingLevelCommand_1.SetV2LoggingLevelCommand(args);
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
    setV2LoggingOptions(args, optionsOrCb, cb) {
        const command = new SetV2LoggingOptionsCommand_1.SetV2LoggingOptionsCommand(args);
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
    startAuditMitigationActionsTask(args, optionsOrCb, cb) {
        const command = new StartAuditMitigationActionsTaskCommand_1.StartAuditMitigationActionsTaskCommand(args);
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
    startDetectMitigationActionsTask(args, optionsOrCb, cb) {
        const command = new StartDetectMitigationActionsTaskCommand_1.StartDetectMitigationActionsTaskCommand(args);
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
    startOnDemandAuditTask(args, optionsOrCb, cb) {
        const command = new StartOnDemandAuditTaskCommand_1.StartOnDemandAuditTaskCommand(args);
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
    startThingRegistrationTask(args, optionsOrCb, cb) {
        const command = new StartThingRegistrationTaskCommand_1.StartThingRegistrationTaskCommand(args);
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
    stopThingRegistrationTask(args, optionsOrCb, cb) {
        const command = new StopThingRegistrationTaskCommand_1.StopThingRegistrationTaskCommand(args);
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
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
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
    testAuthorization(args, optionsOrCb, cb) {
        const command = new TestAuthorizationCommand_1.TestAuthorizationCommand(args);
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
    testInvokeAuthorizer(args, optionsOrCb, cb) {
        const command = new TestInvokeAuthorizerCommand_1.TestInvokeAuthorizerCommand(args);
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
    transferCertificate(args, optionsOrCb, cb) {
        const command = new TransferCertificateCommand_1.TransferCertificateCommand(args);
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
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
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
    updateAccountAuditConfiguration(args, optionsOrCb, cb) {
        const command = new UpdateAccountAuditConfigurationCommand_1.UpdateAccountAuditConfigurationCommand(args);
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
    updateAuditSuppression(args, optionsOrCb, cb) {
        const command = new UpdateAuditSuppressionCommand_1.UpdateAuditSuppressionCommand(args);
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
    updateAuthorizer(args, optionsOrCb, cb) {
        const command = new UpdateAuthorizerCommand_1.UpdateAuthorizerCommand(args);
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
    updateBillingGroup(args, optionsOrCb, cb) {
        const command = new UpdateBillingGroupCommand_1.UpdateBillingGroupCommand(args);
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
    updateCACertificate(args, optionsOrCb, cb) {
        const command = new UpdateCACertificateCommand_1.UpdateCACertificateCommand(args);
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
    updateCertificate(args, optionsOrCb, cb) {
        const command = new UpdateCertificateCommand_1.UpdateCertificateCommand(args);
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
    updateCustomMetric(args, optionsOrCb, cb) {
        const command = new UpdateCustomMetricCommand_1.UpdateCustomMetricCommand(args);
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
    updateDimension(args, optionsOrCb, cb) {
        const command = new UpdateDimensionCommand_1.UpdateDimensionCommand(args);
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
    updateDomainConfiguration(args, optionsOrCb, cb) {
        const command = new UpdateDomainConfigurationCommand_1.UpdateDomainConfigurationCommand(args);
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
    updateDynamicThingGroup(args, optionsOrCb, cb) {
        const command = new UpdateDynamicThingGroupCommand_1.UpdateDynamicThingGroupCommand(args);
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
    updateEventConfigurations(args, optionsOrCb, cb) {
        const command = new UpdateEventConfigurationsCommand_1.UpdateEventConfigurationsCommand(args);
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
    updateIndexingConfiguration(args, optionsOrCb, cb) {
        const command = new UpdateIndexingConfigurationCommand_1.UpdateIndexingConfigurationCommand(args);
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
    updateJob(args, optionsOrCb, cb) {
        const command = new UpdateJobCommand_1.UpdateJobCommand(args);
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
    updateMitigationAction(args, optionsOrCb, cb) {
        const command = new UpdateMitigationActionCommand_1.UpdateMitigationActionCommand(args);
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
    updateProvisioningTemplate(args, optionsOrCb, cb) {
        const command = new UpdateProvisioningTemplateCommand_1.UpdateProvisioningTemplateCommand(args);
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
    updateRoleAlias(args, optionsOrCb, cb) {
        const command = new UpdateRoleAliasCommand_1.UpdateRoleAliasCommand(args);
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
    updateScheduledAudit(args, optionsOrCb, cb) {
        const command = new UpdateScheduledAuditCommand_1.UpdateScheduledAuditCommand(args);
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
    updateSecurityProfile(args, optionsOrCb, cb) {
        const command = new UpdateSecurityProfileCommand_1.UpdateSecurityProfileCommand(args);
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
    updateStream(args, optionsOrCb, cb) {
        const command = new UpdateStreamCommand_1.UpdateStreamCommand(args);
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
    updateThing(args, optionsOrCb, cb) {
        const command = new UpdateThingCommand_1.UpdateThingCommand(args);
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
    updateThingGroup(args, optionsOrCb, cb) {
        const command = new UpdateThingGroupCommand_1.UpdateThingGroupCommand(args);
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
    updateThingGroupsForThing(args, optionsOrCb, cb) {
        const command = new UpdateThingGroupsForThingCommand_1.UpdateThingGroupsForThingCommand(args);
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
    updateTopicRuleDestination(args, optionsOrCb, cb) {
        const command = new UpdateTopicRuleDestinationCommand_1.UpdateTopicRuleDestinationCommand(args);
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
    validateSecurityProfileBehaviors(args, optionsOrCb, cb) {
        const command = new ValidateSecurityProfileBehaviorsCommand_1.ValidateSecurityProfileBehaviorsCommand(args);
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
exports.IoT = IoT;
//# sourceMappingURL=IoT.js.map