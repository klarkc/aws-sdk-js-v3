import { IoTClient } from "./IoTClient";
import { AcceptCertificateTransferCommandInput, AcceptCertificateTransferCommandOutput } from "./commands/AcceptCertificateTransferCommand";
import { AddThingToBillingGroupCommandInput, AddThingToBillingGroupCommandOutput } from "./commands/AddThingToBillingGroupCommand";
import { AddThingToThingGroupCommandInput, AddThingToThingGroupCommandOutput } from "./commands/AddThingToThingGroupCommand";
import { AssociateTargetsWithJobCommandInput, AssociateTargetsWithJobCommandOutput } from "./commands/AssociateTargetsWithJobCommand";
import { AttachPolicyCommandInput, AttachPolicyCommandOutput } from "./commands/AttachPolicyCommand";
import { AttachPrincipalPolicyCommandInput, AttachPrincipalPolicyCommandOutput } from "./commands/AttachPrincipalPolicyCommand";
import { AttachSecurityProfileCommandInput, AttachSecurityProfileCommandOutput } from "./commands/AttachSecurityProfileCommand";
import { AttachThingPrincipalCommandInput, AttachThingPrincipalCommandOutput } from "./commands/AttachThingPrincipalCommand";
import { CancelAuditMitigationActionsTaskCommandInput, CancelAuditMitigationActionsTaskCommandOutput } from "./commands/CancelAuditMitigationActionsTaskCommand";
import { CancelAuditTaskCommandInput, CancelAuditTaskCommandOutput } from "./commands/CancelAuditTaskCommand";
import { CancelCertificateTransferCommandInput, CancelCertificateTransferCommandOutput } from "./commands/CancelCertificateTransferCommand";
import { CancelDetectMitigationActionsTaskCommandInput, CancelDetectMitigationActionsTaskCommandOutput } from "./commands/CancelDetectMitigationActionsTaskCommand";
import { CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand";
import { CancelJobExecutionCommandInput, CancelJobExecutionCommandOutput } from "./commands/CancelJobExecutionCommand";
import { ClearDefaultAuthorizerCommandInput, ClearDefaultAuthorizerCommandOutput } from "./commands/ClearDefaultAuthorizerCommand";
import { ConfirmTopicRuleDestinationCommandInput, ConfirmTopicRuleDestinationCommandOutput } from "./commands/ConfirmTopicRuleDestinationCommand";
import { CreateAuditSuppressionCommandInput, CreateAuditSuppressionCommandOutput } from "./commands/CreateAuditSuppressionCommand";
import { CreateAuthorizerCommandInput, CreateAuthorizerCommandOutput } from "./commands/CreateAuthorizerCommand";
import { CreateBillingGroupCommandInput, CreateBillingGroupCommandOutput } from "./commands/CreateBillingGroupCommand";
import { CreateCertificateFromCsrCommandInput, CreateCertificateFromCsrCommandOutput } from "./commands/CreateCertificateFromCsrCommand";
import { CreateCustomMetricCommandInput, CreateCustomMetricCommandOutput } from "./commands/CreateCustomMetricCommand";
import { CreateDimensionCommandInput, CreateDimensionCommandOutput } from "./commands/CreateDimensionCommand";
import { CreateDomainConfigurationCommandInput, CreateDomainConfigurationCommandOutput } from "./commands/CreateDomainConfigurationCommand";
import { CreateDynamicThingGroupCommandInput, CreateDynamicThingGroupCommandOutput } from "./commands/CreateDynamicThingGroupCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import { CreateJobTemplateCommandInput, CreateJobTemplateCommandOutput } from "./commands/CreateJobTemplateCommand";
import { CreateKeysAndCertificateCommandInput, CreateKeysAndCertificateCommandOutput } from "./commands/CreateKeysAndCertificateCommand";
import { CreateMitigationActionCommandInput, CreateMitigationActionCommandOutput } from "./commands/CreateMitigationActionCommand";
import { CreateOTAUpdateCommandInput, CreateOTAUpdateCommandOutput } from "./commands/CreateOTAUpdateCommand";
import { CreatePolicyCommandInput, CreatePolicyCommandOutput } from "./commands/CreatePolicyCommand";
import { CreatePolicyVersionCommandInput, CreatePolicyVersionCommandOutput } from "./commands/CreatePolicyVersionCommand";
import { CreateProvisioningClaimCommandInput, CreateProvisioningClaimCommandOutput } from "./commands/CreateProvisioningClaimCommand";
import { CreateProvisioningTemplateCommandInput, CreateProvisioningTemplateCommandOutput } from "./commands/CreateProvisioningTemplateCommand";
import { CreateProvisioningTemplateVersionCommandInput, CreateProvisioningTemplateVersionCommandOutput } from "./commands/CreateProvisioningTemplateVersionCommand";
import { CreateRoleAliasCommandInput, CreateRoleAliasCommandOutput } from "./commands/CreateRoleAliasCommand";
import { CreateScheduledAuditCommandInput, CreateScheduledAuditCommandOutput } from "./commands/CreateScheduledAuditCommand";
import { CreateSecurityProfileCommandInput, CreateSecurityProfileCommandOutput } from "./commands/CreateSecurityProfileCommand";
import { CreateStreamCommandInput, CreateStreamCommandOutput } from "./commands/CreateStreamCommand";
import { CreateThingCommandInput, CreateThingCommandOutput } from "./commands/CreateThingCommand";
import { CreateThingGroupCommandInput, CreateThingGroupCommandOutput } from "./commands/CreateThingGroupCommand";
import { CreateThingTypeCommandInput, CreateThingTypeCommandOutput } from "./commands/CreateThingTypeCommand";
import { CreateTopicRuleCommandInput, CreateTopicRuleCommandOutput } from "./commands/CreateTopicRuleCommand";
import { CreateTopicRuleDestinationCommandInput, CreateTopicRuleDestinationCommandOutput } from "./commands/CreateTopicRuleDestinationCommand";
import { DeleteAccountAuditConfigurationCommandInput, DeleteAccountAuditConfigurationCommandOutput } from "./commands/DeleteAccountAuditConfigurationCommand";
import { DeleteAuditSuppressionCommandInput, DeleteAuditSuppressionCommandOutput } from "./commands/DeleteAuditSuppressionCommand";
import { DeleteAuthorizerCommandInput, DeleteAuthorizerCommandOutput } from "./commands/DeleteAuthorizerCommand";
import { DeleteBillingGroupCommandInput, DeleteBillingGroupCommandOutput } from "./commands/DeleteBillingGroupCommand";
import { DeleteCACertificateCommandInput, DeleteCACertificateCommandOutput } from "./commands/DeleteCACertificateCommand";
import { DeleteCertificateCommandInput, DeleteCertificateCommandOutput } from "./commands/DeleteCertificateCommand";
import { DeleteCustomMetricCommandInput, DeleteCustomMetricCommandOutput } from "./commands/DeleteCustomMetricCommand";
import { DeleteDimensionCommandInput, DeleteDimensionCommandOutput } from "./commands/DeleteDimensionCommand";
import { DeleteDomainConfigurationCommandInput, DeleteDomainConfigurationCommandOutput } from "./commands/DeleteDomainConfigurationCommand";
import { DeleteDynamicThingGroupCommandInput, DeleteDynamicThingGroupCommandOutput } from "./commands/DeleteDynamicThingGroupCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import { DeleteJobExecutionCommandInput, DeleteJobExecutionCommandOutput } from "./commands/DeleteJobExecutionCommand";
import { DeleteJobTemplateCommandInput, DeleteJobTemplateCommandOutput } from "./commands/DeleteJobTemplateCommand";
import { DeleteMitigationActionCommandInput, DeleteMitigationActionCommandOutput } from "./commands/DeleteMitigationActionCommand";
import { DeleteOTAUpdateCommandInput, DeleteOTAUpdateCommandOutput } from "./commands/DeleteOTAUpdateCommand";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand";
import { DeletePolicyVersionCommandInput, DeletePolicyVersionCommandOutput } from "./commands/DeletePolicyVersionCommand";
import { DeleteProvisioningTemplateCommandInput, DeleteProvisioningTemplateCommandOutput } from "./commands/DeleteProvisioningTemplateCommand";
import { DeleteProvisioningTemplateVersionCommandInput, DeleteProvisioningTemplateVersionCommandOutput } from "./commands/DeleteProvisioningTemplateVersionCommand";
import { DeleteRegistrationCodeCommandInput, DeleteRegistrationCodeCommandOutput } from "./commands/DeleteRegistrationCodeCommand";
import { DeleteRoleAliasCommandInput, DeleteRoleAliasCommandOutput } from "./commands/DeleteRoleAliasCommand";
import { DeleteScheduledAuditCommandInput, DeleteScheduledAuditCommandOutput } from "./commands/DeleteScheduledAuditCommand";
import { DeleteSecurityProfileCommandInput, DeleteSecurityProfileCommandOutput } from "./commands/DeleteSecurityProfileCommand";
import { DeleteStreamCommandInput, DeleteStreamCommandOutput } from "./commands/DeleteStreamCommand";
import { DeleteThingCommandInput, DeleteThingCommandOutput } from "./commands/DeleteThingCommand";
import { DeleteThingGroupCommandInput, DeleteThingGroupCommandOutput } from "./commands/DeleteThingGroupCommand";
import { DeleteThingTypeCommandInput, DeleteThingTypeCommandOutput } from "./commands/DeleteThingTypeCommand";
import { DeleteTopicRuleCommandInput, DeleteTopicRuleCommandOutput } from "./commands/DeleteTopicRuleCommand";
import { DeleteTopicRuleDestinationCommandInput, DeleteTopicRuleDestinationCommandOutput } from "./commands/DeleteTopicRuleDestinationCommand";
import { DeleteV2LoggingLevelCommandInput, DeleteV2LoggingLevelCommandOutput } from "./commands/DeleteV2LoggingLevelCommand";
import { DeprecateThingTypeCommandInput, DeprecateThingTypeCommandOutput } from "./commands/DeprecateThingTypeCommand";
import { DescribeAccountAuditConfigurationCommandInput, DescribeAccountAuditConfigurationCommandOutput } from "./commands/DescribeAccountAuditConfigurationCommand";
import { DescribeAuditFindingCommandInput, DescribeAuditFindingCommandOutput } from "./commands/DescribeAuditFindingCommand";
import { DescribeAuditMitigationActionsTaskCommandInput, DescribeAuditMitigationActionsTaskCommandOutput } from "./commands/DescribeAuditMitigationActionsTaskCommand";
import { DescribeAuditSuppressionCommandInput, DescribeAuditSuppressionCommandOutput } from "./commands/DescribeAuditSuppressionCommand";
import { DescribeAuditTaskCommandInput, DescribeAuditTaskCommandOutput } from "./commands/DescribeAuditTaskCommand";
import { DescribeAuthorizerCommandInput, DescribeAuthorizerCommandOutput } from "./commands/DescribeAuthorizerCommand";
import { DescribeBillingGroupCommandInput, DescribeBillingGroupCommandOutput } from "./commands/DescribeBillingGroupCommand";
import { DescribeCACertificateCommandInput, DescribeCACertificateCommandOutput } from "./commands/DescribeCACertificateCommand";
import { DescribeCertificateCommandInput, DescribeCertificateCommandOutput } from "./commands/DescribeCertificateCommand";
import { DescribeCustomMetricCommandInput, DescribeCustomMetricCommandOutput } from "./commands/DescribeCustomMetricCommand";
import { DescribeDefaultAuthorizerCommandInput, DescribeDefaultAuthorizerCommandOutput } from "./commands/DescribeDefaultAuthorizerCommand";
import { DescribeDetectMitigationActionsTaskCommandInput, DescribeDetectMitigationActionsTaskCommandOutput } from "./commands/DescribeDetectMitigationActionsTaskCommand";
import { DescribeDimensionCommandInput, DescribeDimensionCommandOutput } from "./commands/DescribeDimensionCommand";
import { DescribeDomainConfigurationCommandInput, DescribeDomainConfigurationCommandOutput } from "./commands/DescribeDomainConfigurationCommand";
import { DescribeEndpointCommandInput, DescribeEndpointCommandOutput } from "./commands/DescribeEndpointCommand";
import { DescribeEventConfigurationsCommandInput, DescribeEventConfigurationsCommandOutput } from "./commands/DescribeEventConfigurationsCommand";
import { DescribeIndexCommandInput, DescribeIndexCommandOutput } from "./commands/DescribeIndexCommand";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand";
import { DescribeJobExecutionCommandInput, DescribeJobExecutionCommandOutput } from "./commands/DescribeJobExecutionCommand";
import { DescribeJobTemplateCommandInput, DescribeJobTemplateCommandOutput } from "./commands/DescribeJobTemplateCommand";
import { DescribeMitigationActionCommandInput, DescribeMitigationActionCommandOutput } from "./commands/DescribeMitigationActionCommand";
import { DescribeProvisioningTemplateCommandInput, DescribeProvisioningTemplateCommandOutput } from "./commands/DescribeProvisioningTemplateCommand";
import { DescribeProvisioningTemplateVersionCommandInput, DescribeProvisioningTemplateVersionCommandOutput } from "./commands/DescribeProvisioningTemplateVersionCommand";
import { DescribeRoleAliasCommandInput, DescribeRoleAliasCommandOutput } from "./commands/DescribeRoleAliasCommand";
import { DescribeScheduledAuditCommandInput, DescribeScheduledAuditCommandOutput } from "./commands/DescribeScheduledAuditCommand";
import { DescribeSecurityProfileCommandInput, DescribeSecurityProfileCommandOutput } from "./commands/DescribeSecurityProfileCommand";
import { DescribeStreamCommandInput, DescribeStreamCommandOutput } from "./commands/DescribeStreamCommand";
import { DescribeThingCommandInput, DescribeThingCommandOutput } from "./commands/DescribeThingCommand";
import { DescribeThingGroupCommandInput, DescribeThingGroupCommandOutput } from "./commands/DescribeThingGroupCommand";
import { DescribeThingRegistrationTaskCommandInput, DescribeThingRegistrationTaskCommandOutput } from "./commands/DescribeThingRegistrationTaskCommand";
import { DescribeThingTypeCommandInput, DescribeThingTypeCommandOutput } from "./commands/DescribeThingTypeCommand";
import { DetachPolicyCommandInput, DetachPolicyCommandOutput } from "./commands/DetachPolicyCommand";
import { DetachPrincipalPolicyCommandInput, DetachPrincipalPolicyCommandOutput } from "./commands/DetachPrincipalPolicyCommand";
import { DetachSecurityProfileCommandInput, DetachSecurityProfileCommandOutput } from "./commands/DetachSecurityProfileCommand";
import { DetachThingPrincipalCommandInput, DetachThingPrincipalCommandOutput } from "./commands/DetachThingPrincipalCommand";
import { DisableTopicRuleCommandInput, DisableTopicRuleCommandOutput } from "./commands/DisableTopicRuleCommand";
import { EnableTopicRuleCommandInput, EnableTopicRuleCommandOutput } from "./commands/EnableTopicRuleCommand";
import { GetBehaviorModelTrainingSummariesCommandInput, GetBehaviorModelTrainingSummariesCommandOutput } from "./commands/GetBehaviorModelTrainingSummariesCommand";
import { GetCardinalityCommandInput, GetCardinalityCommandOutput } from "./commands/GetCardinalityCommand";
import { GetEffectivePoliciesCommandInput, GetEffectivePoliciesCommandOutput } from "./commands/GetEffectivePoliciesCommand";
import { GetIndexingConfigurationCommandInput, GetIndexingConfigurationCommandOutput } from "./commands/GetIndexingConfigurationCommand";
import { GetJobDocumentCommandInput, GetJobDocumentCommandOutput } from "./commands/GetJobDocumentCommand";
import { GetLoggingOptionsCommandInput, GetLoggingOptionsCommandOutput } from "./commands/GetLoggingOptionsCommand";
import { GetOTAUpdateCommandInput, GetOTAUpdateCommandOutput } from "./commands/GetOTAUpdateCommand";
import { GetPercentilesCommandInput, GetPercentilesCommandOutput } from "./commands/GetPercentilesCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import { GetPolicyVersionCommandInput, GetPolicyVersionCommandOutput } from "./commands/GetPolicyVersionCommand";
import { GetRegistrationCodeCommandInput, GetRegistrationCodeCommandOutput } from "./commands/GetRegistrationCodeCommand";
import { GetStatisticsCommandInput, GetStatisticsCommandOutput } from "./commands/GetStatisticsCommand";
import { GetTopicRuleCommandInput, GetTopicRuleCommandOutput } from "./commands/GetTopicRuleCommand";
import { GetTopicRuleDestinationCommandInput, GetTopicRuleDestinationCommandOutput } from "./commands/GetTopicRuleDestinationCommand";
import { GetV2LoggingOptionsCommandInput, GetV2LoggingOptionsCommandOutput } from "./commands/GetV2LoggingOptionsCommand";
import { ListActiveViolationsCommandInput, ListActiveViolationsCommandOutput } from "./commands/ListActiveViolationsCommand";
import { ListAttachedPoliciesCommandInput, ListAttachedPoliciesCommandOutput } from "./commands/ListAttachedPoliciesCommand";
import { ListAuditFindingsCommandInput, ListAuditFindingsCommandOutput } from "./commands/ListAuditFindingsCommand";
import { ListAuditMitigationActionsExecutionsCommandInput, ListAuditMitigationActionsExecutionsCommandOutput } from "./commands/ListAuditMitigationActionsExecutionsCommand";
import { ListAuditMitigationActionsTasksCommandInput, ListAuditMitigationActionsTasksCommandOutput } from "./commands/ListAuditMitigationActionsTasksCommand";
import { ListAuditSuppressionsCommandInput, ListAuditSuppressionsCommandOutput } from "./commands/ListAuditSuppressionsCommand";
import { ListAuditTasksCommandInput, ListAuditTasksCommandOutput } from "./commands/ListAuditTasksCommand";
import { ListAuthorizersCommandInput, ListAuthorizersCommandOutput } from "./commands/ListAuthorizersCommand";
import { ListBillingGroupsCommandInput, ListBillingGroupsCommandOutput } from "./commands/ListBillingGroupsCommand";
import { ListCACertificatesCommandInput, ListCACertificatesCommandOutput } from "./commands/ListCACertificatesCommand";
import { ListCertificatesByCACommandInput, ListCertificatesByCACommandOutput } from "./commands/ListCertificatesByCACommand";
import { ListCertificatesCommandInput, ListCertificatesCommandOutput } from "./commands/ListCertificatesCommand";
import { ListCustomMetricsCommandInput, ListCustomMetricsCommandOutput } from "./commands/ListCustomMetricsCommand";
import { ListDetectMitigationActionsExecutionsCommandInput, ListDetectMitigationActionsExecutionsCommandOutput } from "./commands/ListDetectMitigationActionsExecutionsCommand";
import { ListDetectMitigationActionsTasksCommandInput, ListDetectMitigationActionsTasksCommandOutput } from "./commands/ListDetectMitigationActionsTasksCommand";
import { ListDimensionsCommandInput, ListDimensionsCommandOutput } from "./commands/ListDimensionsCommand";
import { ListDomainConfigurationsCommandInput, ListDomainConfigurationsCommandOutput } from "./commands/ListDomainConfigurationsCommand";
import { ListIndicesCommandInput, ListIndicesCommandOutput } from "./commands/ListIndicesCommand";
import { ListJobExecutionsForJobCommandInput, ListJobExecutionsForJobCommandOutput } from "./commands/ListJobExecutionsForJobCommand";
import { ListJobExecutionsForThingCommandInput, ListJobExecutionsForThingCommandOutput } from "./commands/ListJobExecutionsForThingCommand";
import { ListJobTemplatesCommandInput, ListJobTemplatesCommandOutput } from "./commands/ListJobTemplatesCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import { ListMitigationActionsCommandInput, ListMitigationActionsCommandOutput } from "./commands/ListMitigationActionsCommand";
import { ListOTAUpdatesCommandInput, ListOTAUpdatesCommandOutput } from "./commands/ListOTAUpdatesCommand";
import { ListOutgoingCertificatesCommandInput, ListOutgoingCertificatesCommandOutput } from "./commands/ListOutgoingCertificatesCommand";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "./commands/ListPoliciesCommand";
import { ListPolicyPrincipalsCommandInput, ListPolicyPrincipalsCommandOutput } from "./commands/ListPolicyPrincipalsCommand";
import { ListPolicyVersionsCommandInput, ListPolicyVersionsCommandOutput } from "./commands/ListPolicyVersionsCommand";
import { ListPrincipalPoliciesCommandInput, ListPrincipalPoliciesCommandOutput } from "./commands/ListPrincipalPoliciesCommand";
import { ListPrincipalThingsCommandInput, ListPrincipalThingsCommandOutput } from "./commands/ListPrincipalThingsCommand";
import { ListProvisioningTemplateVersionsCommandInput, ListProvisioningTemplateVersionsCommandOutput } from "./commands/ListProvisioningTemplateVersionsCommand";
import { ListProvisioningTemplatesCommandInput, ListProvisioningTemplatesCommandOutput } from "./commands/ListProvisioningTemplatesCommand";
import { ListRoleAliasesCommandInput, ListRoleAliasesCommandOutput } from "./commands/ListRoleAliasesCommand";
import { ListScheduledAuditsCommandInput, ListScheduledAuditsCommandOutput } from "./commands/ListScheduledAuditsCommand";
import { ListSecurityProfilesCommandInput, ListSecurityProfilesCommandOutput } from "./commands/ListSecurityProfilesCommand";
import { ListSecurityProfilesForTargetCommandInput, ListSecurityProfilesForTargetCommandOutput } from "./commands/ListSecurityProfilesForTargetCommand";
import { ListStreamsCommandInput, ListStreamsCommandOutput } from "./commands/ListStreamsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListTargetsForPolicyCommandInput, ListTargetsForPolicyCommandOutput } from "./commands/ListTargetsForPolicyCommand";
import { ListTargetsForSecurityProfileCommandInput, ListTargetsForSecurityProfileCommandOutput } from "./commands/ListTargetsForSecurityProfileCommand";
import { ListThingGroupsCommandInput, ListThingGroupsCommandOutput } from "./commands/ListThingGroupsCommand";
import { ListThingGroupsForThingCommandInput, ListThingGroupsForThingCommandOutput } from "./commands/ListThingGroupsForThingCommand";
import { ListThingPrincipalsCommandInput, ListThingPrincipalsCommandOutput } from "./commands/ListThingPrincipalsCommand";
import { ListThingRegistrationTaskReportsCommandInput, ListThingRegistrationTaskReportsCommandOutput } from "./commands/ListThingRegistrationTaskReportsCommand";
import { ListThingRegistrationTasksCommandInput, ListThingRegistrationTasksCommandOutput } from "./commands/ListThingRegistrationTasksCommand";
import { ListThingTypesCommandInput, ListThingTypesCommandOutput } from "./commands/ListThingTypesCommand";
import { ListThingsCommandInput, ListThingsCommandOutput } from "./commands/ListThingsCommand";
import { ListThingsInBillingGroupCommandInput, ListThingsInBillingGroupCommandOutput } from "./commands/ListThingsInBillingGroupCommand";
import { ListThingsInThingGroupCommandInput, ListThingsInThingGroupCommandOutput } from "./commands/ListThingsInThingGroupCommand";
import { ListTopicRuleDestinationsCommandInput, ListTopicRuleDestinationsCommandOutput } from "./commands/ListTopicRuleDestinationsCommand";
import { ListTopicRulesCommandInput, ListTopicRulesCommandOutput } from "./commands/ListTopicRulesCommand";
import { ListV2LoggingLevelsCommandInput, ListV2LoggingLevelsCommandOutput } from "./commands/ListV2LoggingLevelsCommand";
import { ListViolationEventsCommandInput, ListViolationEventsCommandOutput } from "./commands/ListViolationEventsCommand";
import { RegisterCACertificateCommandInput, RegisterCACertificateCommandOutput } from "./commands/RegisterCACertificateCommand";
import { RegisterCertificateCommandInput, RegisterCertificateCommandOutput } from "./commands/RegisterCertificateCommand";
import { RegisterCertificateWithoutCACommandInput, RegisterCertificateWithoutCACommandOutput } from "./commands/RegisterCertificateWithoutCACommand";
import { RegisterThingCommandInput, RegisterThingCommandOutput } from "./commands/RegisterThingCommand";
import { RejectCertificateTransferCommandInput, RejectCertificateTransferCommandOutput } from "./commands/RejectCertificateTransferCommand";
import { RemoveThingFromBillingGroupCommandInput, RemoveThingFromBillingGroupCommandOutput } from "./commands/RemoveThingFromBillingGroupCommand";
import { RemoveThingFromThingGroupCommandInput, RemoveThingFromThingGroupCommandOutput } from "./commands/RemoveThingFromThingGroupCommand";
import { ReplaceTopicRuleCommandInput, ReplaceTopicRuleCommandOutput } from "./commands/ReplaceTopicRuleCommand";
import { SearchIndexCommandInput, SearchIndexCommandOutput } from "./commands/SearchIndexCommand";
import { SetDefaultAuthorizerCommandInput, SetDefaultAuthorizerCommandOutput } from "./commands/SetDefaultAuthorizerCommand";
import { SetDefaultPolicyVersionCommandInput, SetDefaultPolicyVersionCommandOutput } from "./commands/SetDefaultPolicyVersionCommand";
import { SetLoggingOptionsCommandInput, SetLoggingOptionsCommandOutput } from "./commands/SetLoggingOptionsCommand";
import { SetV2LoggingLevelCommandInput, SetV2LoggingLevelCommandOutput } from "./commands/SetV2LoggingLevelCommand";
import { SetV2LoggingOptionsCommandInput, SetV2LoggingOptionsCommandOutput } from "./commands/SetV2LoggingOptionsCommand";
import { StartAuditMitigationActionsTaskCommandInput, StartAuditMitigationActionsTaskCommandOutput } from "./commands/StartAuditMitigationActionsTaskCommand";
import { StartDetectMitigationActionsTaskCommandInput, StartDetectMitigationActionsTaskCommandOutput } from "./commands/StartDetectMitigationActionsTaskCommand";
import { StartOnDemandAuditTaskCommandInput, StartOnDemandAuditTaskCommandOutput } from "./commands/StartOnDemandAuditTaskCommand";
import { StartThingRegistrationTaskCommandInput, StartThingRegistrationTaskCommandOutput } from "./commands/StartThingRegistrationTaskCommand";
import { StopThingRegistrationTaskCommandInput, StopThingRegistrationTaskCommandOutput } from "./commands/StopThingRegistrationTaskCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TestAuthorizationCommandInput, TestAuthorizationCommandOutput } from "./commands/TestAuthorizationCommand";
import { TestInvokeAuthorizerCommandInput, TestInvokeAuthorizerCommandOutput } from "./commands/TestInvokeAuthorizerCommand";
import { TransferCertificateCommandInput, TransferCertificateCommandOutput } from "./commands/TransferCertificateCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAccountAuditConfigurationCommandInput, UpdateAccountAuditConfigurationCommandOutput } from "./commands/UpdateAccountAuditConfigurationCommand";
import { UpdateAuditSuppressionCommandInput, UpdateAuditSuppressionCommandOutput } from "./commands/UpdateAuditSuppressionCommand";
import { UpdateAuthorizerCommandInput, UpdateAuthorizerCommandOutput } from "./commands/UpdateAuthorizerCommand";
import { UpdateBillingGroupCommandInput, UpdateBillingGroupCommandOutput } from "./commands/UpdateBillingGroupCommand";
import { UpdateCACertificateCommandInput, UpdateCACertificateCommandOutput } from "./commands/UpdateCACertificateCommand";
import { UpdateCertificateCommandInput, UpdateCertificateCommandOutput } from "./commands/UpdateCertificateCommand";
import { UpdateCustomMetricCommandInput, UpdateCustomMetricCommandOutput } from "./commands/UpdateCustomMetricCommand";
import { UpdateDimensionCommandInput, UpdateDimensionCommandOutput } from "./commands/UpdateDimensionCommand";
import { UpdateDomainConfigurationCommandInput, UpdateDomainConfigurationCommandOutput } from "./commands/UpdateDomainConfigurationCommand";
import { UpdateDynamicThingGroupCommandInput, UpdateDynamicThingGroupCommandOutput } from "./commands/UpdateDynamicThingGroupCommand";
import { UpdateEventConfigurationsCommandInput, UpdateEventConfigurationsCommandOutput } from "./commands/UpdateEventConfigurationsCommand";
import { UpdateIndexingConfigurationCommandInput, UpdateIndexingConfigurationCommandOutput } from "./commands/UpdateIndexingConfigurationCommand";
import { UpdateJobCommandInput, UpdateJobCommandOutput } from "./commands/UpdateJobCommand";
import { UpdateMitigationActionCommandInput, UpdateMitigationActionCommandOutput } from "./commands/UpdateMitigationActionCommand";
import { UpdateProvisioningTemplateCommandInput, UpdateProvisioningTemplateCommandOutput } from "./commands/UpdateProvisioningTemplateCommand";
import { UpdateRoleAliasCommandInput, UpdateRoleAliasCommandOutput } from "./commands/UpdateRoleAliasCommand";
import { UpdateScheduledAuditCommandInput, UpdateScheduledAuditCommandOutput } from "./commands/UpdateScheduledAuditCommand";
import { UpdateSecurityProfileCommandInput, UpdateSecurityProfileCommandOutput } from "./commands/UpdateSecurityProfileCommand";
import { UpdateStreamCommandInput, UpdateStreamCommandOutput } from "./commands/UpdateStreamCommand";
import { UpdateThingCommandInput, UpdateThingCommandOutput } from "./commands/UpdateThingCommand";
import { UpdateThingGroupCommandInput, UpdateThingGroupCommandOutput } from "./commands/UpdateThingGroupCommand";
import { UpdateThingGroupsForThingCommandInput, UpdateThingGroupsForThingCommandOutput } from "./commands/UpdateThingGroupsForThingCommand";
import { UpdateTopicRuleDestinationCommandInput, UpdateTopicRuleDestinationCommandOutput } from "./commands/UpdateTopicRuleDestinationCommand";
import { ValidateSecurityProfileBehaviorsCommandInput, ValidateSecurityProfileBehaviorsCommandOutput } from "./commands/ValidateSecurityProfileBehaviorsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
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
export declare class IoT extends IoTClient {
    /**
     * <p>Accepts a pending certificate transfer. The default state of the certificate is
     *          INACTIVE.</p>
     *          <p>To check for pending certificate transfers, call <a>ListCertificates</a>
     *          to enumerate your certificates.</p>
     */
    acceptCertificateTransfer(args: AcceptCertificateTransferCommandInput, options?: __HttpHandlerOptions): Promise<AcceptCertificateTransferCommandOutput>;
    acceptCertificateTransfer(args: AcceptCertificateTransferCommandInput, cb: (err: any, data?: AcceptCertificateTransferCommandOutput) => void): void;
    acceptCertificateTransfer(args: AcceptCertificateTransferCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AcceptCertificateTransferCommandOutput) => void): void;
    /**
     * <p>Adds a thing to a billing group.</p>
     */
    addThingToBillingGroup(args: AddThingToBillingGroupCommandInput, options?: __HttpHandlerOptions): Promise<AddThingToBillingGroupCommandOutput>;
    addThingToBillingGroup(args: AddThingToBillingGroupCommandInput, cb: (err: any, data?: AddThingToBillingGroupCommandOutput) => void): void;
    addThingToBillingGroup(args: AddThingToBillingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddThingToBillingGroupCommandOutput) => void): void;
    /**
     * <p>Adds a thing to a thing group.</p>
     */
    addThingToThingGroup(args: AddThingToThingGroupCommandInput, options?: __HttpHandlerOptions): Promise<AddThingToThingGroupCommandOutput>;
    addThingToThingGroup(args: AddThingToThingGroupCommandInput, cb: (err: any, data?: AddThingToThingGroupCommandOutput) => void): void;
    addThingToThingGroup(args: AddThingToThingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddThingToThingGroupCommandOutput) => void): void;
    /**
     * <p>Associates a group with a continuous job. The following criteria must be met: </p>
     *         <ul>
     *             <li>
     *                 <p>The job must have been created with the <code>targetSelection</code> field set to
     *                     "CONTINUOUS".</p>
     *             </li>
     *             <li>
     *                 <p>The job status must currently be "IN_PROGRESS".</p>
     *             </li>
     *             <li>
     *                 <p>The total number of targets associated with a job must not exceed 100.</p>
     *             </li>
     *          </ul>
     */
    associateTargetsWithJob(args: AssociateTargetsWithJobCommandInput, options?: __HttpHandlerOptions): Promise<AssociateTargetsWithJobCommandOutput>;
    associateTargetsWithJob(args: AssociateTargetsWithJobCommandInput, cb: (err: any, data?: AssociateTargetsWithJobCommandOutput) => void): void;
    associateTargetsWithJob(args: AssociateTargetsWithJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateTargetsWithJobCommandOutput) => void): void;
    /**
     * <p>Attaches a policy to the specified target.</p>
     */
    attachPolicy(args: AttachPolicyCommandInput, options?: __HttpHandlerOptions): Promise<AttachPolicyCommandOutput>;
    attachPolicy(args: AttachPolicyCommandInput, cb: (err: any, data?: AttachPolicyCommandOutput) => void): void;
    attachPolicy(args: AttachPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AttachPolicyCommandOutput) => void): void;
    /**
     * @deprecated
     *
     * <p>Attaches the specified policy to the specified principal (certificate or other
     *          credential).</p>
     *          <p>
     *             <b>Note:</b> This API is deprecated. Please use <a>AttachPolicy</a> instead.</p>
     */
    attachPrincipalPolicy(args: AttachPrincipalPolicyCommandInput, options?: __HttpHandlerOptions): Promise<AttachPrincipalPolicyCommandOutput>;
    attachPrincipalPolicy(args: AttachPrincipalPolicyCommandInput, cb: (err: any, data?: AttachPrincipalPolicyCommandOutput) => void): void;
    attachPrincipalPolicy(args: AttachPrincipalPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AttachPrincipalPolicyCommandOutput) => void): void;
    /**
     * <p>Associates a Device Defender security profile with a thing group or this account. Each
     *         thing group or account can have up to five security profiles associated with it.</p>
     */
    attachSecurityProfile(args: AttachSecurityProfileCommandInput, options?: __HttpHandlerOptions): Promise<AttachSecurityProfileCommandOutput>;
    attachSecurityProfile(args: AttachSecurityProfileCommandInput, cb: (err: any, data?: AttachSecurityProfileCommandOutput) => void): void;
    attachSecurityProfile(args: AttachSecurityProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AttachSecurityProfileCommandOutput) => void): void;
    /**
     * <p>Attaches the specified principal to the specified thing. A principal can be X.509
     * 			certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
     * 			identities.</p>
     */
    attachThingPrincipal(args: AttachThingPrincipalCommandInput, options?: __HttpHandlerOptions): Promise<AttachThingPrincipalCommandOutput>;
    attachThingPrincipal(args: AttachThingPrincipalCommandInput, cb: (err: any, data?: AttachThingPrincipalCommandOutput) => void): void;
    attachThingPrincipal(args: AttachThingPrincipalCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AttachThingPrincipalCommandOutput) => void): void;
    /**
     * <p>Cancels a mitigation action task that is in progress. If the task
     *       is not
     *       in progress, an InvalidRequestException occurs.</p>
     */
    cancelAuditMitigationActionsTask(args: CancelAuditMitigationActionsTaskCommandInput, options?: __HttpHandlerOptions): Promise<CancelAuditMitigationActionsTaskCommandOutput>;
    cancelAuditMitigationActionsTask(args: CancelAuditMitigationActionsTaskCommandInput, cb: (err: any, data?: CancelAuditMitigationActionsTaskCommandOutput) => void): void;
    cancelAuditMitigationActionsTask(args: CancelAuditMitigationActionsTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelAuditMitigationActionsTaskCommandOutput) => void): void;
    /**
     * <p>Cancels an audit that is in progress. The audit can be either scheduled or on demand. If the audit isn't in progress, an "InvalidRequestException" occurs.</p>
     */
    cancelAuditTask(args: CancelAuditTaskCommandInput, options?: __HttpHandlerOptions): Promise<CancelAuditTaskCommandOutput>;
    cancelAuditTask(args: CancelAuditTaskCommandInput, cb: (err: any, data?: CancelAuditTaskCommandOutput) => void): void;
    cancelAuditTask(args: CancelAuditTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelAuditTaskCommandOutput) => void): void;
    /**
     * <p>Cancels a pending transfer for the specified certificate.</p>
     *          <p>
     *             <b>Note</b> Only the transfer source account can use this
     *          operation to cancel a transfer. (Transfer destinations can use <a>RejectCertificateTransfer</a> instead.) After transfer, AWS IoT returns the
     *          certificate to the source account in the INACTIVE state. After the destination account has
     *          accepted the transfer, the transfer cannot be cancelled.</p>
     *          <p>After a certificate transfer is cancelled, the status of the certificate changes from
     *          PENDING_TRANSFER to INACTIVE.</p>
     */
    cancelCertificateTransfer(args: CancelCertificateTransferCommandInput, options?: __HttpHandlerOptions): Promise<CancelCertificateTransferCommandOutput>;
    cancelCertificateTransfer(args: CancelCertificateTransferCommandInput, cb: (err: any, data?: CancelCertificateTransferCommandOutput) => void): void;
    cancelCertificateTransfer(args: CancelCertificateTransferCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelCertificateTransferCommandOutput) => void): void;
    /**
     * <p>
     *         Cancels a Device Defender ML Detect mitigation action.
     *       </p>
     */
    cancelDetectMitigationActionsTask(args: CancelDetectMitigationActionsTaskCommandInput, options?: __HttpHandlerOptions): Promise<CancelDetectMitigationActionsTaskCommandOutput>;
    cancelDetectMitigationActionsTask(args: CancelDetectMitigationActionsTaskCommandInput, cb: (err: any, data?: CancelDetectMitigationActionsTaskCommandOutput) => void): void;
    cancelDetectMitigationActionsTask(args: CancelDetectMitigationActionsTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelDetectMitigationActionsTaskCommandOutput) => void): void;
    /**
     * <p>Cancels a job.</p>
     */
    cancelJob(args: CancelJobCommandInput, options?: __HttpHandlerOptions): Promise<CancelJobCommandOutput>;
    cancelJob(args: CancelJobCommandInput, cb: (err: any, data?: CancelJobCommandOutput) => void): void;
    cancelJob(args: CancelJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelJobCommandOutput) => void): void;
    /**
     * <p>Cancels the execution of a job for a given thing.</p>
     */
    cancelJobExecution(args: CancelJobExecutionCommandInput, options?: __HttpHandlerOptions): Promise<CancelJobExecutionCommandOutput>;
    cancelJobExecution(args: CancelJobExecutionCommandInput, cb: (err: any, data?: CancelJobExecutionCommandOutput) => void): void;
    cancelJobExecution(args: CancelJobExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelJobExecutionCommandOutput) => void): void;
    /**
     * <p>Clears the default authorizer.</p>
     */
    clearDefaultAuthorizer(args: ClearDefaultAuthorizerCommandInput, options?: __HttpHandlerOptions): Promise<ClearDefaultAuthorizerCommandOutput>;
    clearDefaultAuthorizer(args: ClearDefaultAuthorizerCommandInput, cb: (err: any, data?: ClearDefaultAuthorizerCommandOutput) => void): void;
    clearDefaultAuthorizer(args: ClearDefaultAuthorizerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ClearDefaultAuthorizerCommandOutput) => void): void;
    /**
     * <p>Confirms a topic rule destination. When you create a rule requiring a destination, AWS
     *          IoT sends a confirmation message to the endpoint or base address you specify. The message
     *          includes a token which you pass back when calling <code>ConfirmTopicRuleDestination</code>
     *          to confirm that you own or have access to the endpoint.</p>
     */
    confirmTopicRuleDestination(args: ConfirmTopicRuleDestinationCommandInput, options?: __HttpHandlerOptions): Promise<ConfirmTopicRuleDestinationCommandOutput>;
    confirmTopicRuleDestination(args: ConfirmTopicRuleDestinationCommandInput, cb: (err: any, data?: ConfirmTopicRuleDestinationCommandOutput) => void): void;
    confirmTopicRuleDestination(args: ConfirmTopicRuleDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ConfirmTopicRuleDestinationCommandOutput) => void): void;
    /**
     * <p>
     *       Creates a Device Defender audit suppression.
     *     </p>
     */
    createAuditSuppression(args: CreateAuditSuppressionCommandInput, options?: __HttpHandlerOptions): Promise<CreateAuditSuppressionCommandOutput>;
    createAuditSuppression(args: CreateAuditSuppressionCommandInput, cb: (err: any, data?: CreateAuditSuppressionCommandOutput) => void): void;
    createAuditSuppression(args: CreateAuditSuppressionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAuditSuppressionCommandOutput) => void): void;
    /**
     * <p>Creates an authorizer.</p>
     */
    createAuthorizer(args: CreateAuthorizerCommandInput, options?: __HttpHandlerOptions): Promise<CreateAuthorizerCommandOutput>;
    createAuthorizer(args: CreateAuthorizerCommandInput, cb: (err: any, data?: CreateAuthorizerCommandOutput) => void): void;
    createAuthorizer(args: CreateAuthorizerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAuthorizerCommandOutput) => void): void;
    /**
     * <p>Creates a billing group.</p>
     */
    createBillingGroup(args: CreateBillingGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateBillingGroupCommandOutput>;
    createBillingGroup(args: CreateBillingGroupCommandInput, cb: (err: any, data?: CreateBillingGroupCommandOutput) => void): void;
    createBillingGroup(args: CreateBillingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateBillingGroupCommandOutput) => void): void;
    /**
     * <p>Creates an X.509 certificate using the specified certificate signing
     *          request.</p>
     *          <p>
     *             <b>Note:</b> The CSR must include a public key that is either an
     *          RSA key with a length of at least 2048 bits or an ECC key from NIST P-256 or NIST P-384
     *          curves. </p>
     *          <p>
     *             <b>Note:</b> Reusing the same certificate signing request (CSR)
     *          results in a distinct certificate.</p>
     *          <p>You can create multiple certificates in a batch by creating a directory, copying
     *          multiple .csr files into that directory, and then specifying that directory on the command
     *          line. The following commands show how to create a batch of certificates given a batch of
     *          CSRs.</p>
     *          <p>Assuming a set of CSRs are located inside of the directory
     *          my-csr-directory:</p>
     *
     *          <p>On Linux and OS X, the command is:</p>
     *
     *          <p>$ ls my-csr-directory/ | xargs -I {} aws iot create-certificate-from-csr
     *          --certificate-signing-request file://my-csr-directory/{}</p>
     *          <p>This command lists all of the CSRs in my-csr-directory and pipes each CSR file name
     *          to the aws iot create-certificate-from-csr AWS CLI command to create a certificate for the
     *          corresponding CSR.</p>
     *          <p>The aws iot create-certificate-from-csr part of the command can also be run in
     *          parallel to speed up the certificate creation process:</p>
     *          <p>$ ls my-csr-directory/ | xargs -P 10 -I {} aws iot create-certificate-from-csr
     *          --certificate-signing-request file://my-csr-directory/{}</p>
     *          <p>On Windows PowerShell, the command to create certificates for all CSRs in
     *          my-csr-directory is:</p>
     *          <p>> ls -Name my-csr-directory | %{aws iot create-certificate-from-csr
     *          --certificate-signing-request file://my-csr-directory/$_}</p>
     *          <p>On a Windows command prompt, the command to create certificates for all CSRs in
     *          my-csr-directory is:</p>
     *          <p>> forfiles /p my-csr-directory /c "cmd /c aws iot create-certificate-from-csr
     *          --certificate-signing-request file://@path"</p>
     */
    createCertificateFromCsr(args: CreateCertificateFromCsrCommandInput, options?: __HttpHandlerOptions): Promise<CreateCertificateFromCsrCommandOutput>;
    createCertificateFromCsr(args: CreateCertificateFromCsrCommandInput, cb: (err: any, data?: CreateCertificateFromCsrCommandOutput) => void): void;
    createCertificateFromCsr(args: CreateCertificateFromCsrCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCertificateFromCsrCommandOutput) => void): void;
    /**
     * <p> Use this API to define a
     *       Custom
     *       Metric
     *       published by your devices to Device Defender. </p>
     */
    createCustomMetric(args: CreateCustomMetricCommandInput, options?: __HttpHandlerOptions): Promise<CreateCustomMetricCommandOutput>;
    createCustomMetric(args: CreateCustomMetricCommandInput, cb: (err: any, data?: CreateCustomMetricCommandOutput) => void): void;
    createCustomMetric(args: CreateCustomMetricCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCustomMetricCommandOutput) => void): void;
    /**
     * <p>Create a dimension that you can use to limit the scope of a metric used in a security profile for AWS IoT Device Defender. For example, using a <code>TOPIC_FILTER</code> dimension, you can narrow down the scope of the metric only to MQTT topics whose name match the pattern specified in the dimension.</p>
     */
    createDimension(args: CreateDimensionCommandInput, options?: __HttpHandlerOptions): Promise<CreateDimensionCommandOutput>;
    createDimension(args: CreateDimensionCommandInput, cb: (err: any, data?: CreateDimensionCommandOutput) => void): void;
    createDimension(args: CreateDimensionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDimensionCommandOutput) => void): void;
    /**
     * <p>Creates a domain configuration.</p>
     */
    createDomainConfiguration(args: CreateDomainConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<CreateDomainConfigurationCommandOutput>;
    createDomainConfiguration(args: CreateDomainConfigurationCommandInput, cb: (err: any, data?: CreateDomainConfigurationCommandOutput) => void): void;
    createDomainConfiguration(args: CreateDomainConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDomainConfigurationCommandOutput) => void): void;
    /**
     * <p>Creates a dynamic thing group.</p>
     */
    createDynamicThingGroup(args: CreateDynamicThingGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateDynamicThingGroupCommandOutput>;
    createDynamicThingGroup(args: CreateDynamicThingGroupCommandInput, cb: (err: any, data?: CreateDynamicThingGroupCommandOutput) => void): void;
    createDynamicThingGroup(args: CreateDynamicThingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDynamicThingGroupCommandOutput) => void): void;
    /**
     * <p>Creates a job.</p>
     */
    createJob(args: CreateJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateJobCommandOutput>;
    createJob(args: CreateJobCommandInput, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
    createJob(args: CreateJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
    /**
     * <p>Creates a job template.</p>
     */
    createJobTemplate(args: CreateJobTemplateCommandInput, options?: __HttpHandlerOptions): Promise<CreateJobTemplateCommandOutput>;
    createJobTemplate(args: CreateJobTemplateCommandInput, cb: (err: any, data?: CreateJobTemplateCommandOutput) => void): void;
    createJobTemplate(args: CreateJobTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateJobTemplateCommandOutput) => void): void;
    /**
     * <p>Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued
     *          public key. You can also call <code>CreateKeysAndCertificate</code> over MQTT from a
     *          device, for more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-wo-cert.html#provision-mqtt-api">Provisioning MQTT API</a>.</p>
     *          <p>
     *             <b>Note</b> This is the only time AWS IoT issues the private key
     *          for this certificate, so it is important to keep it in a secure location.</p>
     */
    createKeysAndCertificate(args: CreateKeysAndCertificateCommandInput, options?: __HttpHandlerOptions): Promise<CreateKeysAndCertificateCommandOutput>;
    createKeysAndCertificate(args: CreateKeysAndCertificateCommandInput, cb: (err: any, data?: CreateKeysAndCertificateCommandOutput) => void): void;
    createKeysAndCertificate(args: CreateKeysAndCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateKeysAndCertificateCommandOutput) => void): void;
    /**
     * <p>Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. Only certain types of mitigation actions can be applied to specific check names. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-mitigation-actions.html">Mitigation actions</a>. Each mitigation action can apply only one type of change.</p>
     */
    createMitigationAction(args: CreateMitigationActionCommandInput, options?: __HttpHandlerOptions): Promise<CreateMitigationActionCommandOutput>;
    createMitigationAction(args: CreateMitigationActionCommandInput, cb: (err: any, data?: CreateMitigationActionCommandOutput) => void): void;
    createMitigationAction(args: CreateMitigationActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateMitigationActionCommandOutput) => void): void;
    /**
     * <p>Creates an AWS IoT OTAUpdate on a target group of things or groups.</p>
     */
    createOTAUpdate(args: CreateOTAUpdateCommandInput, options?: __HttpHandlerOptions): Promise<CreateOTAUpdateCommandOutput>;
    createOTAUpdate(args: CreateOTAUpdateCommandInput, cb: (err: any, data?: CreateOTAUpdateCommandOutput) => void): void;
    createOTAUpdate(args: CreateOTAUpdateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateOTAUpdateCommandOutput) => void): void;
    /**
     * <p>Creates an AWS IoT policy.</p>
     *          <p>The created policy is the default version for the policy. This operation creates a
     *          policy version with a version identifier of <b>1</b> and sets
     *             <b>1</b> as the policy's default version.</p>
     */
    createPolicy(args: CreatePolicyCommandInput, options?: __HttpHandlerOptions): Promise<CreatePolicyCommandOutput>;
    createPolicy(args: CreatePolicyCommandInput, cb: (err: any, data?: CreatePolicyCommandOutput) => void): void;
    createPolicy(args: CreatePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePolicyCommandOutput) => void): void;
    /**
     * <p>Creates a new version of the specified AWS IoT policy. To update a policy, create a
     *          new policy version. A managed policy can have up to five versions. If the policy has five
     *          versions, you must use <a>DeletePolicyVersion</a> to delete an existing version
     *          before you create a new one.</p>
     *          <p>Optionally, you can set the new version as the policy's default version. The default
     *          version is the operative version (that is, the version that is in effect for the
     *          certificates to which the policy is attached).</p>
     */
    createPolicyVersion(args: CreatePolicyVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreatePolicyVersionCommandOutput>;
    createPolicyVersion(args: CreatePolicyVersionCommandInput, cb: (err: any, data?: CreatePolicyVersionCommandOutput) => void): void;
    createPolicyVersion(args: CreatePolicyVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePolicyVersionCommandOutput) => void): void;
    /**
     * <p>Creates a provisioning claim.</p>
     */
    createProvisioningClaim(args: CreateProvisioningClaimCommandInput, options?: __HttpHandlerOptions): Promise<CreateProvisioningClaimCommandOutput>;
    createProvisioningClaim(args: CreateProvisioningClaimCommandInput, cb: (err: any, data?: CreateProvisioningClaimCommandOutput) => void): void;
    createProvisioningClaim(args: CreateProvisioningClaimCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProvisioningClaimCommandOutput) => void): void;
    /**
     * <p>Creates a fleet provisioning template.</p>
     */
    createProvisioningTemplate(args: CreateProvisioningTemplateCommandInput, options?: __HttpHandlerOptions): Promise<CreateProvisioningTemplateCommandOutput>;
    createProvisioningTemplate(args: CreateProvisioningTemplateCommandInput, cb: (err: any, data?: CreateProvisioningTemplateCommandOutput) => void): void;
    createProvisioningTemplate(args: CreateProvisioningTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProvisioningTemplateCommandOutput) => void): void;
    /**
     * <p>Creates a new version of a fleet provisioning template.</p>
     */
    createProvisioningTemplateVersion(args: CreateProvisioningTemplateVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreateProvisioningTemplateVersionCommandOutput>;
    createProvisioningTemplateVersion(args: CreateProvisioningTemplateVersionCommandInput, cb: (err: any, data?: CreateProvisioningTemplateVersionCommandOutput) => void): void;
    createProvisioningTemplateVersion(args: CreateProvisioningTemplateVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProvisioningTemplateVersionCommandOutput) => void): void;
    /**
     * <p>Creates a role alias.</p>
     */
    createRoleAlias(args: CreateRoleAliasCommandInput, options?: __HttpHandlerOptions): Promise<CreateRoleAliasCommandOutput>;
    createRoleAlias(args: CreateRoleAliasCommandInput, cb: (err: any, data?: CreateRoleAliasCommandOutput) => void): void;
    createRoleAlias(args: CreateRoleAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRoleAliasCommandOutput) => void): void;
    /**
     * <p>Creates a scheduled audit that is run at a specified
     *           time interval.</p>
     */
    createScheduledAudit(args: CreateScheduledAuditCommandInput, options?: __HttpHandlerOptions): Promise<CreateScheduledAuditCommandOutput>;
    createScheduledAudit(args: CreateScheduledAuditCommandInput, cb: (err: any, data?: CreateScheduledAuditCommandOutput) => void): void;
    createScheduledAudit(args: CreateScheduledAuditCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateScheduledAuditCommandOutput) => void): void;
    /**
     * <p>Creates a Device Defender security profile.</p>
     */
    createSecurityProfile(args: CreateSecurityProfileCommandInput, options?: __HttpHandlerOptions): Promise<CreateSecurityProfileCommandOutput>;
    createSecurityProfile(args: CreateSecurityProfileCommandInput, cb: (err: any, data?: CreateSecurityProfileCommandOutput) => void): void;
    createSecurityProfile(args: CreateSecurityProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSecurityProfileCommandOutput) => void): void;
    /**
     * <p>Creates a stream for delivering one or more large files in chunks over MQTT. A stream transports data
     *             bytes in chunks or blocks packaged as MQTT messages from a source like S3. You can have one or more files
     *             associated with a stream.</p>
     */
    createStream(args: CreateStreamCommandInput, options?: __HttpHandlerOptions): Promise<CreateStreamCommandOutput>;
    createStream(args: CreateStreamCommandInput, cb: (err: any, data?: CreateStreamCommandOutput) => void): void;
    createStream(args: CreateStreamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateStreamCommandOutput) => void): void;
    /**
     * <p>Creates a thing record in the registry. If this call is made multiple times using
     * 			the same thing name and configuration, the call will succeed. If this call is made with
     * 			the same thing name but different configuration a
     * 				<code>ResourceAlreadyExistsException</code> is thrown.</p>
     * 		       <note>
     * 			         <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for
     * 				information about authorizing control plane actions.</p>
     * 		       </note>
     */
    createThing(args: CreateThingCommandInput, options?: __HttpHandlerOptions): Promise<CreateThingCommandOutput>;
    createThing(args: CreateThingCommandInput, cb: (err: any, data?: CreateThingCommandOutput) => void): void;
    createThing(args: CreateThingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateThingCommandOutput) => void): void;
    /**
     * <p>Create a thing group.</p>
     * 		       <note>
     * 			         <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for
     * 				information about authorizing control plane actions.</p>
     * 		       </note>
     */
    createThingGroup(args: CreateThingGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateThingGroupCommandOutput>;
    createThingGroup(args: CreateThingGroupCommandInput, cb: (err: any, data?: CreateThingGroupCommandOutput) => void): void;
    createThingGroup(args: CreateThingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateThingGroupCommandOutput) => void): void;
    /**
     * <p>Creates a new thing type.</p>
     */
    createThingType(args: CreateThingTypeCommandInput, options?: __HttpHandlerOptions): Promise<CreateThingTypeCommandOutput>;
    createThingType(args: CreateThingTypeCommandInput, cb: (err: any, data?: CreateThingTypeCommandOutput) => void): void;
    createThingType(args: CreateThingTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateThingTypeCommandOutput) => void): void;
    /**
     * <p>Creates a rule. Creating rules is an administrator-level action. Any user who has
     *          permission to create rules will be able to access data processed by the rule.</p>
     */
    createTopicRule(args: CreateTopicRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreateTopicRuleCommandOutput>;
    createTopicRule(args: CreateTopicRuleCommandInput, cb: (err: any, data?: CreateTopicRuleCommandOutput) => void): void;
    createTopicRule(args: CreateTopicRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTopicRuleCommandOutput) => void): void;
    /**
     * <p>Creates a topic rule destination. The destination must be confirmed prior to use.</p>
     */
    createTopicRuleDestination(args: CreateTopicRuleDestinationCommandInput, options?: __HttpHandlerOptions): Promise<CreateTopicRuleDestinationCommandOutput>;
    createTopicRuleDestination(args: CreateTopicRuleDestinationCommandInput, cb: (err: any, data?: CreateTopicRuleDestinationCommandOutput) => void): void;
    createTopicRuleDestination(args: CreateTopicRuleDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTopicRuleDestinationCommandOutput) => void): void;
    /**
     * <p>Restores the default settings for Device Defender audits for this account. Any
     *           configuration data you entered is deleted and all audit checks are reset to
     *           disabled.  </p>
     */
    deleteAccountAuditConfiguration(args: DeleteAccountAuditConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAccountAuditConfigurationCommandOutput>;
    deleteAccountAuditConfiguration(args: DeleteAccountAuditConfigurationCommandInput, cb: (err: any, data?: DeleteAccountAuditConfigurationCommandOutput) => void): void;
    deleteAccountAuditConfiguration(args: DeleteAccountAuditConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAccountAuditConfigurationCommandOutput) => void): void;
    /**
     * <p>
     *       Deletes a Device Defender audit suppression.
     *     </p>
     */
    deleteAuditSuppression(args: DeleteAuditSuppressionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAuditSuppressionCommandOutput>;
    deleteAuditSuppression(args: DeleteAuditSuppressionCommandInput, cb: (err: any, data?: DeleteAuditSuppressionCommandOutput) => void): void;
    deleteAuditSuppression(args: DeleteAuditSuppressionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAuditSuppressionCommandOutput) => void): void;
    /**
     * <p>Deletes an authorizer.</p>
     */
    deleteAuthorizer(args: DeleteAuthorizerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAuthorizerCommandOutput>;
    deleteAuthorizer(args: DeleteAuthorizerCommandInput, cb: (err: any, data?: DeleteAuthorizerCommandOutput) => void): void;
    deleteAuthorizer(args: DeleteAuthorizerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAuthorizerCommandOutput) => void): void;
    /**
     * <p>Deletes the billing group.</p>
     */
    deleteBillingGroup(args: DeleteBillingGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBillingGroupCommandOutput>;
    deleteBillingGroup(args: DeleteBillingGroupCommandInput, cb: (err: any, data?: DeleteBillingGroupCommandOutput) => void): void;
    deleteBillingGroup(args: DeleteBillingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteBillingGroupCommandOutput) => void): void;
    /**
     * <p>Deletes a registered CA certificate.</p>
     */
    deleteCACertificate(args: DeleteCACertificateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCACertificateCommandOutput>;
    deleteCACertificate(args: DeleteCACertificateCommandInput, cb: (err: any, data?: DeleteCACertificateCommandOutput) => void): void;
    deleteCACertificate(args: DeleteCACertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCACertificateCommandOutput) => void): void;
    /**
     * <p>Deletes the specified certificate.</p>
     *          <p>A certificate cannot be deleted if it has a policy or IoT thing attached to it or if
     *          its status is set to ACTIVE. To delete a certificate, first use the <a>DetachPrincipalPolicy</a> API to detach all policies. Next, use the <a>UpdateCertificate</a> API to set the certificate to the INACTIVE
     *          status.</p>
     */
    deleteCertificate(args: DeleteCertificateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCertificateCommandOutput>;
    deleteCertificate(args: DeleteCertificateCommandInput, cb: (err: any, data?: DeleteCertificateCommandOutput) => void): void;
    deleteCertificate(args: DeleteCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCertificateCommandOutput) => void): void;
    /**
     * <note>
     *             <p>Before you can delete a custom metric, you must first remove the custom metric from all
     *         security profiles it's a part of.
     *         The
     *         security
     *         profile associated with the custom metric can be found using the <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfiles.html">ListSecurityProfiles</a>
     *         API with <code>metricName</code> set to your custom metric name.</p>
     *          </note>
     *          <p>
     *       Deletes a Device Defender detect custom metric.
     *     </p>
     */
    deleteCustomMetric(args: DeleteCustomMetricCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCustomMetricCommandOutput>;
    deleteCustomMetric(args: DeleteCustomMetricCommandInput, cb: (err: any, data?: DeleteCustomMetricCommandOutput) => void): void;
    deleteCustomMetric(args: DeleteCustomMetricCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCustomMetricCommandOutput) => void): void;
    /**
     * <p>Removes the specified dimension from your AWS account.</p>
     */
    deleteDimension(args: DeleteDimensionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDimensionCommandOutput>;
    deleteDimension(args: DeleteDimensionCommandInput, cb: (err: any, data?: DeleteDimensionCommandOutput) => void): void;
    deleteDimension(args: DeleteDimensionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDimensionCommandOutput) => void): void;
    /**
     * <p>Deletes the specified domain configuration.</p>
     */
    deleteDomainConfiguration(args: DeleteDomainConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDomainConfigurationCommandOutput>;
    deleteDomainConfiguration(args: DeleteDomainConfigurationCommandInput, cb: (err: any, data?: DeleteDomainConfigurationCommandOutput) => void): void;
    deleteDomainConfiguration(args: DeleteDomainConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDomainConfigurationCommandOutput) => void): void;
    /**
     * <p>Deletes a dynamic thing group.</p>
     */
    deleteDynamicThingGroup(args: DeleteDynamicThingGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDynamicThingGroupCommandOutput>;
    deleteDynamicThingGroup(args: DeleteDynamicThingGroupCommandInput, cb: (err: any, data?: DeleteDynamicThingGroupCommandOutput) => void): void;
    deleteDynamicThingGroup(args: DeleteDynamicThingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDynamicThingGroupCommandOutput) => void): void;
    /**
     * <p>Deletes a job and its related job executions.</p>
     *          <p>Deleting a job may take time, depending on the number of job
     *         executions created for the job and various other factors. While the job
     *         is being deleted, the status of the job will be shown as
     *         "DELETION_IN_PROGRESS". Attempting to delete or cancel a job whose status
     *         is already "DELETION_IN_PROGRESS" will result in an error.</p>
     *          <p>Only 10 jobs may have status "DELETION_IN_PROGRESS" at the same time, or
     *         a LimitExceededException will occur.</p>
     */
    deleteJob(args: DeleteJobCommandInput, options?: __HttpHandlerOptions): Promise<DeleteJobCommandOutput>;
    deleteJob(args: DeleteJobCommandInput, cb: (err: any, data?: DeleteJobCommandOutput) => void): void;
    deleteJob(args: DeleteJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteJobCommandOutput) => void): void;
    /**
     * <p>Deletes a job execution.</p>
     */
    deleteJobExecution(args: DeleteJobExecutionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteJobExecutionCommandOutput>;
    deleteJobExecution(args: DeleteJobExecutionCommandInput, cb: (err: any, data?: DeleteJobExecutionCommandOutput) => void): void;
    deleteJobExecution(args: DeleteJobExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteJobExecutionCommandOutput) => void): void;
    /**
     * <p>Deletes the specified job template.</p>
     */
    deleteJobTemplate(args: DeleteJobTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteJobTemplateCommandOutput>;
    deleteJobTemplate(args: DeleteJobTemplateCommandInput, cb: (err: any, data?: DeleteJobTemplateCommandOutput) => void): void;
    deleteJobTemplate(args: DeleteJobTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteJobTemplateCommandOutput) => void): void;
    /**
     * <p>Deletes a defined mitigation action from your AWS account.</p>
     */
    deleteMitigationAction(args: DeleteMitigationActionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMitigationActionCommandOutput>;
    deleteMitigationAction(args: DeleteMitigationActionCommandInput, cb: (err: any, data?: DeleteMitigationActionCommandOutput) => void): void;
    deleteMitigationAction(args: DeleteMitigationActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMitigationActionCommandOutput) => void): void;
    /**
     * <p>Delete an OTA update.</p>
     */
    deleteOTAUpdate(args: DeleteOTAUpdateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteOTAUpdateCommandOutput>;
    deleteOTAUpdate(args: DeleteOTAUpdateCommandInput, cb: (err: any, data?: DeleteOTAUpdateCommandOutput) => void): void;
    deleteOTAUpdate(args: DeleteOTAUpdateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteOTAUpdateCommandOutput) => void): void;
    /**
     * <p>Deletes the specified policy.</p>
     *          <p>A policy cannot be deleted if it has non-default versions or it is attached to any
     *          certificate.</p>
     *          <p>To delete a policy, use the DeletePolicyVersion API to delete all non-default
     *          versions of the policy; use the DetachPrincipalPolicy API to detach the policy from any
     *          certificate; and then use the DeletePolicy API to delete the policy.</p>
     *          <p>When a policy is deleted using DeletePolicy, its default version is deleted with
     *          it.</p>
     */
    deletePolicy(args: DeletePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeletePolicyCommandOutput>;
    deletePolicy(args: DeletePolicyCommandInput, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
    deletePolicy(args: DeletePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
    /**
     * <p>Deletes the specified version of the specified policy. You cannot delete the default
     *          version of a policy using this API. To delete the default version of a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default
     *          version, use ListPolicyVersions.</p>
     */
    deletePolicyVersion(args: DeletePolicyVersionCommandInput, options?: __HttpHandlerOptions): Promise<DeletePolicyVersionCommandOutput>;
    deletePolicyVersion(args: DeletePolicyVersionCommandInput, cb: (err: any, data?: DeletePolicyVersionCommandOutput) => void): void;
    deletePolicyVersion(args: DeletePolicyVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePolicyVersionCommandOutput) => void): void;
    /**
     * <p>Deletes a fleet provisioning template.</p>
     */
    deleteProvisioningTemplate(args: DeleteProvisioningTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProvisioningTemplateCommandOutput>;
    deleteProvisioningTemplate(args: DeleteProvisioningTemplateCommandInput, cb: (err: any, data?: DeleteProvisioningTemplateCommandOutput) => void): void;
    deleteProvisioningTemplate(args: DeleteProvisioningTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProvisioningTemplateCommandOutput) => void): void;
    /**
     * <p>Deletes a fleet provisioning template version.</p>
     */
    deleteProvisioningTemplateVersion(args: DeleteProvisioningTemplateVersionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProvisioningTemplateVersionCommandOutput>;
    deleteProvisioningTemplateVersion(args: DeleteProvisioningTemplateVersionCommandInput, cb: (err: any, data?: DeleteProvisioningTemplateVersionCommandOutput) => void): void;
    deleteProvisioningTemplateVersion(args: DeleteProvisioningTemplateVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProvisioningTemplateVersionCommandOutput) => void): void;
    /**
     * <p>Deletes a CA certificate registration code.</p>
     */
    deleteRegistrationCode(args: DeleteRegistrationCodeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRegistrationCodeCommandOutput>;
    deleteRegistrationCode(args: DeleteRegistrationCodeCommandInput, cb: (err: any, data?: DeleteRegistrationCodeCommandOutput) => void): void;
    deleteRegistrationCode(args: DeleteRegistrationCodeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRegistrationCodeCommandOutput) => void): void;
    /**
     * <p>Deletes a role alias</p>
     */
    deleteRoleAlias(args: DeleteRoleAliasCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRoleAliasCommandOutput>;
    deleteRoleAlias(args: DeleteRoleAliasCommandInput, cb: (err: any, data?: DeleteRoleAliasCommandOutput) => void): void;
    deleteRoleAlias(args: DeleteRoleAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRoleAliasCommandOutput) => void): void;
    /**
     * <p>Deletes a scheduled audit.</p>
     */
    deleteScheduledAudit(args: DeleteScheduledAuditCommandInput, options?: __HttpHandlerOptions): Promise<DeleteScheduledAuditCommandOutput>;
    deleteScheduledAudit(args: DeleteScheduledAuditCommandInput, cb: (err: any, data?: DeleteScheduledAuditCommandOutput) => void): void;
    deleteScheduledAudit(args: DeleteScheduledAuditCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteScheduledAuditCommandOutput) => void): void;
    /**
     * <p>Deletes a Device Defender security profile.</p>
     */
    deleteSecurityProfile(args: DeleteSecurityProfileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSecurityProfileCommandOutput>;
    deleteSecurityProfile(args: DeleteSecurityProfileCommandInput, cb: (err: any, data?: DeleteSecurityProfileCommandOutput) => void): void;
    deleteSecurityProfile(args: DeleteSecurityProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSecurityProfileCommandOutput) => void): void;
    /**
     * <p>Deletes a stream.</p>
     */
    deleteStream(args: DeleteStreamCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStreamCommandOutput>;
    deleteStream(args: DeleteStreamCommandInput, cb: (err: any, data?: DeleteStreamCommandOutput) => void): void;
    deleteStream(args: DeleteStreamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteStreamCommandOutput) => void): void;
    /**
     * <p>Deletes the specified thing. Returns successfully with no error if the deletion is
     * 			successful or you specify a thing that doesn't exist.</p>
     */
    deleteThing(args: DeleteThingCommandInput, options?: __HttpHandlerOptions): Promise<DeleteThingCommandOutput>;
    deleteThing(args: DeleteThingCommandInput, cb: (err: any, data?: DeleteThingCommandOutput) => void): void;
    deleteThing(args: DeleteThingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteThingCommandOutput) => void): void;
    /**
     * <p>Deletes a thing group.</p>
     */
    deleteThingGroup(args: DeleteThingGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteThingGroupCommandOutput>;
    deleteThingGroup(args: DeleteThingGroupCommandInput, cb: (err: any, data?: DeleteThingGroupCommandOutput) => void): void;
    deleteThingGroup(args: DeleteThingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteThingGroupCommandOutput) => void): void;
    /**
     * <p>Deletes the specified thing type. You cannot delete a thing type if it has things
     * 			associated with it. To delete a thing type, first mark it as deprecated by calling <a>DeprecateThingType</a>, then remove any associated things by calling <a>UpdateThing</a> to change the thing type on any associated thing, and
     * 			finally use <a>DeleteThingType</a> to delete the thing type.</p>
     */
    deleteThingType(args: DeleteThingTypeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteThingTypeCommandOutput>;
    deleteThingType(args: DeleteThingTypeCommandInput, cb: (err: any, data?: DeleteThingTypeCommandOutput) => void): void;
    deleteThingType(args: DeleteThingTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteThingTypeCommandOutput) => void): void;
    /**
     * <p>Deletes the rule.</p>
     */
    deleteTopicRule(args: DeleteTopicRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTopicRuleCommandOutput>;
    deleteTopicRule(args: DeleteTopicRuleCommandInput, cb: (err: any, data?: DeleteTopicRuleCommandOutput) => void): void;
    deleteTopicRule(args: DeleteTopicRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTopicRuleCommandOutput) => void): void;
    /**
     * <p>Deletes a topic rule destination.</p>
     */
    deleteTopicRuleDestination(args: DeleteTopicRuleDestinationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTopicRuleDestinationCommandOutput>;
    deleteTopicRuleDestination(args: DeleteTopicRuleDestinationCommandInput, cb: (err: any, data?: DeleteTopicRuleDestinationCommandOutput) => void): void;
    deleteTopicRuleDestination(args: DeleteTopicRuleDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTopicRuleDestinationCommandOutput) => void): void;
    /**
     * <p>Deletes a logging level.</p>
     */
    deleteV2LoggingLevel(args: DeleteV2LoggingLevelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteV2LoggingLevelCommandOutput>;
    deleteV2LoggingLevel(args: DeleteV2LoggingLevelCommandInput, cb: (err: any, data?: DeleteV2LoggingLevelCommandOutput) => void): void;
    deleteV2LoggingLevel(args: DeleteV2LoggingLevelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteV2LoggingLevelCommandOutput) => void): void;
    /**
     * <p>Deprecates a thing type. You can not associate new things with deprecated thing
     * 			type.</p>
     */
    deprecateThingType(args: DeprecateThingTypeCommandInput, options?: __HttpHandlerOptions): Promise<DeprecateThingTypeCommandOutput>;
    deprecateThingType(args: DeprecateThingTypeCommandInput, cb: (err: any, data?: DeprecateThingTypeCommandOutput) => void): void;
    deprecateThingType(args: DeprecateThingTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeprecateThingTypeCommandOutput) => void): void;
    /**
     * <p>Gets information about the Device Defender audit settings for this account.
     *           Settings include how audit notifications are sent and which audit checks are
     *           enabled or disabled.</p>
     */
    describeAccountAuditConfiguration(args: DescribeAccountAuditConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAccountAuditConfigurationCommandOutput>;
    describeAccountAuditConfiguration(args: DescribeAccountAuditConfigurationCommandInput, cb: (err: any, data?: DescribeAccountAuditConfigurationCommandOutput) => void): void;
    describeAccountAuditConfiguration(args: DescribeAccountAuditConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAccountAuditConfigurationCommandOutput) => void): void;
    /**
     * <p>Gets information about a single audit finding. Properties include the reason for
     *       noncompliance, the severity of the issue,
     *       and the start time
     *       when the audit that returned the
     *       finding.</p>
     */
    describeAuditFinding(args: DescribeAuditFindingCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAuditFindingCommandOutput>;
    describeAuditFinding(args: DescribeAuditFindingCommandInput, cb: (err: any, data?: DescribeAuditFindingCommandOutput) => void): void;
    describeAuditFinding(args: DescribeAuditFindingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAuditFindingCommandOutput) => void): void;
    /**
     * <p>Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings. Properties include the actions being applied, the audit checks to which they're being applied, the task status, and aggregated task statistics.</p>
     */
    describeAuditMitigationActionsTask(args: DescribeAuditMitigationActionsTaskCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAuditMitigationActionsTaskCommandOutput>;
    describeAuditMitigationActionsTask(args: DescribeAuditMitigationActionsTaskCommandInput, cb: (err: any, data?: DescribeAuditMitigationActionsTaskCommandOutput) => void): void;
    describeAuditMitigationActionsTask(args: DescribeAuditMitigationActionsTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAuditMitigationActionsTaskCommandOutput) => void): void;
    /**
     * <p>
     *       Gets information about a Device Defender audit suppression.
     *     </p>
     */
    describeAuditSuppression(args: DescribeAuditSuppressionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAuditSuppressionCommandOutput>;
    describeAuditSuppression(args: DescribeAuditSuppressionCommandInput, cb: (err: any, data?: DescribeAuditSuppressionCommandOutput) => void): void;
    describeAuditSuppression(args: DescribeAuditSuppressionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAuditSuppressionCommandOutput) => void): void;
    /**
     * <p>Gets information about a Device Defender audit.</p>
     */
    describeAuditTask(args: DescribeAuditTaskCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAuditTaskCommandOutput>;
    describeAuditTask(args: DescribeAuditTaskCommandInput, cb: (err: any, data?: DescribeAuditTaskCommandOutput) => void): void;
    describeAuditTask(args: DescribeAuditTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAuditTaskCommandOutput) => void): void;
    /**
     * <p>Describes an authorizer.</p>
     */
    describeAuthorizer(args: DescribeAuthorizerCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAuthorizerCommandOutput>;
    describeAuthorizer(args: DescribeAuthorizerCommandInput, cb: (err: any, data?: DescribeAuthorizerCommandOutput) => void): void;
    describeAuthorizer(args: DescribeAuthorizerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAuthorizerCommandOutput) => void): void;
    /**
     * <p>Returns information about a billing group.</p>
     */
    describeBillingGroup(args: DescribeBillingGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeBillingGroupCommandOutput>;
    describeBillingGroup(args: DescribeBillingGroupCommandInput, cb: (err: any, data?: DescribeBillingGroupCommandOutput) => void): void;
    describeBillingGroup(args: DescribeBillingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeBillingGroupCommandOutput) => void): void;
    /**
     * <p>Describes a registered CA certificate.</p>
     */
    describeCACertificate(args: DescribeCACertificateCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCACertificateCommandOutput>;
    describeCACertificate(args: DescribeCACertificateCommandInput, cb: (err: any, data?: DescribeCACertificateCommandOutput) => void): void;
    describeCACertificate(args: DescribeCACertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCACertificateCommandOutput) => void): void;
    /**
     * <p>Gets information about the specified certificate.</p>
     */
    describeCertificate(args: DescribeCertificateCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCertificateCommandOutput>;
    describeCertificate(args: DescribeCertificateCommandInput, cb: (err: any, data?: DescribeCertificateCommandOutput) => void): void;
    describeCertificate(args: DescribeCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCertificateCommandOutput) => void): void;
    /**
     * <p>
     *       Gets information about a Device Defender detect custom metric.
     *     </p>
     */
    describeCustomMetric(args: DescribeCustomMetricCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCustomMetricCommandOutput>;
    describeCustomMetric(args: DescribeCustomMetricCommandInput, cb: (err: any, data?: DescribeCustomMetricCommandOutput) => void): void;
    describeCustomMetric(args: DescribeCustomMetricCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCustomMetricCommandOutput) => void): void;
    /**
     * <p>Describes the default authorizer.</p>
     */
    describeDefaultAuthorizer(args: DescribeDefaultAuthorizerCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDefaultAuthorizerCommandOutput>;
    describeDefaultAuthorizer(args: DescribeDefaultAuthorizerCommandInput, cb: (err: any, data?: DescribeDefaultAuthorizerCommandOutput) => void): void;
    describeDefaultAuthorizer(args: DescribeDefaultAuthorizerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDefaultAuthorizerCommandOutput) => void): void;
    /**
     * <p>
     *       Gets information about a Device Defender ML Detect mitigation action.
     *     </p>
     */
    describeDetectMitigationActionsTask(args: DescribeDetectMitigationActionsTaskCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDetectMitigationActionsTaskCommandOutput>;
    describeDetectMitigationActionsTask(args: DescribeDetectMitigationActionsTaskCommandInput, cb: (err: any, data?: DescribeDetectMitigationActionsTaskCommandOutput) => void): void;
    describeDetectMitigationActionsTask(args: DescribeDetectMitigationActionsTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDetectMitigationActionsTaskCommandOutput) => void): void;
    /**
     * <p>Provides details about a dimension that is defined in your AWS account.</p>
     */
    describeDimension(args: DescribeDimensionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDimensionCommandOutput>;
    describeDimension(args: DescribeDimensionCommandInput, cb: (err: any, data?: DescribeDimensionCommandOutput) => void): void;
    describeDimension(args: DescribeDimensionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDimensionCommandOutput) => void): void;
    /**
     * <p>Gets summary information about a domain configuration.</p>
     */
    describeDomainConfiguration(args: DescribeDomainConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDomainConfigurationCommandOutput>;
    describeDomainConfiguration(args: DescribeDomainConfigurationCommandInput, cb: (err: any, data?: DescribeDomainConfigurationCommandOutput) => void): void;
    describeDomainConfiguration(args: DescribeDomainConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDomainConfigurationCommandOutput) => void): void;
    /**
     * <p>Returns a unique endpoint specific to the AWS account making the call.</p>
     */
    describeEndpoint(args: DescribeEndpointCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEndpointCommandOutput>;
    describeEndpoint(args: DescribeEndpointCommandInput, cb: (err: any, data?: DescribeEndpointCommandOutput) => void): void;
    describeEndpoint(args: DescribeEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEndpointCommandOutput) => void): void;
    /**
     * <p>Describes event configurations.</p>
     */
    describeEventConfigurations(args: DescribeEventConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventConfigurationsCommandOutput>;
    describeEventConfigurations(args: DescribeEventConfigurationsCommandInput, cb: (err: any, data?: DescribeEventConfigurationsCommandOutput) => void): void;
    describeEventConfigurations(args: DescribeEventConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventConfigurationsCommandOutput) => void): void;
    /**
     * <p>Describes a search index.</p>
     */
    describeIndex(args: DescribeIndexCommandInput, options?: __HttpHandlerOptions): Promise<DescribeIndexCommandOutput>;
    describeIndex(args: DescribeIndexCommandInput, cb: (err: any, data?: DescribeIndexCommandOutput) => void): void;
    describeIndex(args: DescribeIndexCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeIndexCommandOutput) => void): void;
    /**
     * <p>Describes a job.</p>
     */
    describeJob(args: DescribeJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobCommandOutput>;
    describeJob(args: DescribeJobCommandInput, cb: (err: any, data?: DescribeJobCommandOutput) => void): void;
    describeJob(args: DescribeJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeJobCommandOutput) => void): void;
    /**
     * <p>Describes a job execution.</p>
     */
    describeJobExecution(args: DescribeJobExecutionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobExecutionCommandOutput>;
    describeJobExecution(args: DescribeJobExecutionCommandInput, cb: (err: any, data?: DescribeJobExecutionCommandOutput) => void): void;
    describeJobExecution(args: DescribeJobExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeJobExecutionCommandOutput) => void): void;
    /**
     * <p>Returns information about a job template.</p>
     */
    describeJobTemplate(args: DescribeJobTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobTemplateCommandOutput>;
    describeJobTemplate(args: DescribeJobTemplateCommandInput, cb: (err: any, data?: DescribeJobTemplateCommandOutput) => void): void;
    describeJobTemplate(args: DescribeJobTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeJobTemplateCommandOutput) => void): void;
    /**
     * <p>Gets information about a mitigation action.</p>
     */
    describeMitigationAction(args: DescribeMitigationActionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMitigationActionCommandOutput>;
    describeMitigationAction(args: DescribeMitigationActionCommandInput, cb: (err: any, data?: DescribeMitigationActionCommandOutput) => void): void;
    describeMitigationAction(args: DescribeMitigationActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeMitigationActionCommandOutput) => void): void;
    /**
     * <p>Returns information about a fleet provisioning template.</p>
     */
    describeProvisioningTemplate(args: DescribeProvisioningTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProvisioningTemplateCommandOutput>;
    describeProvisioningTemplate(args: DescribeProvisioningTemplateCommandInput, cb: (err: any, data?: DescribeProvisioningTemplateCommandOutput) => void): void;
    describeProvisioningTemplate(args: DescribeProvisioningTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProvisioningTemplateCommandOutput) => void): void;
    /**
     * <p>Returns information about a fleet provisioning template version.</p>
     */
    describeProvisioningTemplateVersion(args: DescribeProvisioningTemplateVersionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProvisioningTemplateVersionCommandOutput>;
    describeProvisioningTemplateVersion(args: DescribeProvisioningTemplateVersionCommandInput, cb: (err: any, data?: DescribeProvisioningTemplateVersionCommandOutput) => void): void;
    describeProvisioningTemplateVersion(args: DescribeProvisioningTemplateVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProvisioningTemplateVersionCommandOutput) => void): void;
    /**
     * <p>Describes a role alias.</p>
     */
    describeRoleAlias(args: DescribeRoleAliasCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRoleAliasCommandOutput>;
    describeRoleAlias(args: DescribeRoleAliasCommandInput, cb: (err: any, data?: DescribeRoleAliasCommandOutput) => void): void;
    describeRoleAlias(args: DescribeRoleAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRoleAliasCommandOutput) => void): void;
    /**
     * <p>Gets information about a scheduled audit.</p>
     */
    describeScheduledAudit(args: DescribeScheduledAuditCommandInput, options?: __HttpHandlerOptions): Promise<DescribeScheduledAuditCommandOutput>;
    describeScheduledAudit(args: DescribeScheduledAuditCommandInput, cb: (err: any, data?: DescribeScheduledAuditCommandOutput) => void): void;
    describeScheduledAudit(args: DescribeScheduledAuditCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeScheduledAuditCommandOutput) => void): void;
    /**
     * <p>Gets information about a Device Defender security profile.</p>
     */
    describeSecurityProfile(args: DescribeSecurityProfileCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSecurityProfileCommandOutput>;
    describeSecurityProfile(args: DescribeSecurityProfileCommandInput, cb: (err: any, data?: DescribeSecurityProfileCommandOutput) => void): void;
    describeSecurityProfile(args: DescribeSecurityProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSecurityProfileCommandOutput) => void): void;
    /**
     * <p>Gets information about a stream.</p>
     */
    describeStream(args: DescribeStreamCommandInput, options?: __HttpHandlerOptions): Promise<DescribeStreamCommandOutput>;
    describeStream(args: DescribeStreamCommandInput, cb: (err: any, data?: DescribeStreamCommandOutput) => void): void;
    describeStream(args: DescribeStreamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeStreamCommandOutput) => void): void;
    /**
     * <p>Gets information about the specified thing.</p>
     */
    describeThing(args: DescribeThingCommandInput, options?: __HttpHandlerOptions): Promise<DescribeThingCommandOutput>;
    describeThing(args: DescribeThingCommandInput, cb: (err: any, data?: DescribeThingCommandOutput) => void): void;
    describeThing(args: DescribeThingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeThingCommandOutput) => void): void;
    /**
     * <p>Describe a thing group.</p>
     */
    describeThingGroup(args: DescribeThingGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeThingGroupCommandOutput>;
    describeThingGroup(args: DescribeThingGroupCommandInput, cb: (err: any, data?: DescribeThingGroupCommandOutput) => void): void;
    describeThingGroup(args: DescribeThingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeThingGroupCommandOutput) => void): void;
    /**
     * <p>Describes a bulk thing provisioning task.</p>
     */
    describeThingRegistrationTask(args: DescribeThingRegistrationTaskCommandInput, options?: __HttpHandlerOptions): Promise<DescribeThingRegistrationTaskCommandOutput>;
    describeThingRegistrationTask(args: DescribeThingRegistrationTaskCommandInput, cb: (err: any, data?: DescribeThingRegistrationTaskCommandOutput) => void): void;
    describeThingRegistrationTask(args: DescribeThingRegistrationTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeThingRegistrationTaskCommandOutput) => void): void;
    /**
     * <p>Gets information about the specified thing type.</p>
     */
    describeThingType(args: DescribeThingTypeCommandInput, options?: __HttpHandlerOptions): Promise<DescribeThingTypeCommandOutput>;
    describeThingType(args: DescribeThingTypeCommandInput, cb: (err: any, data?: DescribeThingTypeCommandOutput) => void): void;
    describeThingType(args: DescribeThingTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeThingTypeCommandOutput) => void): void;
    /**
     * <p>Detaches a policy from the specified target.</p>
     */
    detachPolicy(args: DetachPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DetachPolicyCommandOutput>;
    detachPolicy(args: DetachPolicyCommandInput, cb: (err: any, data?: DetachPolicyCommandOutput) => void): void;
    detachPolicy(args: DetachPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetachPolicyCommandOutput) => void): void;
    /**
     * @deprecated
     *
     * <p>Removes the specified policy from the specified certificate.</p>
     *          <p>
     *             <b>Note:</b> This API is deprecated. Please use <a>DetachPolicy</a> instead.</p>
     */
    detachPrincipalPolicy(args: DetachPrincipalPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DetachPrincipalPolicyCommandOutput>;
    detachPrincipalPolicy(args: DetachPrincipalPolicyCommandInput, cb: (err: any, data?: DetachPrincipalPolicyCommandOutput) => void): void;
    detachPrincipalPolicy(args: DetachPrincipalPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetachPrincipalPolicyCommandOutput) => void): void;
    /**
     * <p>Disassociates a Device Defender security profile from a thing group or from this account.</p>
     */
    detachSecurityProfile(args: DetachSecurityProfileCommandInput, options?: __HttpHandlerOptions): Promise<DetachSecurityProfileCommandOutput>;
    detachSecurityProfile(args: DetachSecurityProfileCommandInput, cb: (err: any, data?: DetachSecurityProfileCommandOutput) => void): void;
    detachSecurityProfile(args: DetachSecurityProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetachSecurityProfileCommandOutput) => void): void;
    /**
     * <p>Detaches the specified principal from the specified thing. A principal can be X.509
     * 			certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
     * 			identities.</p>
     * 		       <note>
     * 			         <p>This call is asynchronous. It might take several seconds for the detachment to
     * 				propagate.</p>
     * 		       </note>
     */
    detachThingPrincipal(args: DetachThingPrincipalCommandInput, options?: __HttpHandlerOptions): Promise<DetachThingPrincipalCommandOutput>;
    detachThingPrincipal(args: DetachThingPrincipalCommandInput, cb: (err: any, data?: DetachThingPrincipalCommandOutput) => void): void;
    detachThingPrincipal(args: DetachThingPrincipalCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetachThingPrincipalCommandOutput) => void): void;
    /**
     * <p>Disables the rule.</p>
     */
    disableTopicRule(args: DisableTopicRuleCommandInput, options?: __HttpHandlerOptions): Promise<DisableTopicRuleCommandOutput>;
    disableTopicRule(args: DisableTopicRuleCommandInput, cb: (err: any, data?: DisableTopicRuleCommandOutput) => void): void;
    disableTopicRule(args: DisableTopicRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableTopicRuleCommandOutput) => void): void;
    /**
     * <p>Enables the rule.</p>
     */
    enableTopicRule(args: EnableTopicRuleCommandInput, options?: __HttpHandlerOptions): Promise<EnableTopicRuleCommandOutput>;
    enableTopicRule(args: EnableTopicRuleCommandInput, cb: (err: any, data?: EnableTopicRuleCommandOutput) => void): void;
    enableTopicRule(args: EnableTopicRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableTopicRuleCommandOutput) => void): void;
    /**
     * <p>
     *       Returns a Device Defender's ML Detect Security Profile training model's status.
     *     </p>
     */
    getBehaviorModelTrainingSummaries(args: GetBehaviorModelTrainingSummariesCommandInput, options?: __HttpHandlerOptions): Promise<GetBehaviorModelTrainingSummariesCommandOutput>;
    getBehaviorModelTrainingSummaries(args: GetBehaviorModelTrainingSummariesCommandInput, cb: (err: any, data?: GetBehaviorModelTrainingSummariesCommandOutput) => void): void;
    getBehaviorModelTrainingSummaries(args: GetBehaviorModelTrainingSummariesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetBehaviorModelTrainingSummariesCommandOutput) => void): void;
    /**
     * <p>Returns the approximate count of unique values that match the query.</p>
     */
    getCardinality(args: GetCardinalityCommandInput, options?: __HttpHandlerOptions): Promise<GetCardinalityCommandOutput>;
    getCardinality(args: GetCardinalityCommandInput, cb: (err: any, data?: GetCardinalityCommandOutput) => void): void;
    getCardinality(args: GetCardinalityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCardinalityCommandOutput) => void): void;
    /**
     * <p>Gets a list of the policies that have an effect on the authorization behavior of the
     *          specified device when it connects to the AWS IoT device gateway.</p>
     */
    getEffectivePolicies(args: GetEffectivePoliciesCommandInput, options?: __HttpHandlerOptions): Promise<GetEffectivePoliciesCommandOutput>;
    getEffectivePolicies(args: GetEffectivePoliciesCommandInput, cb: (err: any, data?: GetEffectivePoliciesCommandOutput) => void): void;
    getEffectivePolicies(args: GetEffectivePoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEffectivePoliciesCommandOutput) => void): void;
    /**
     * <p>Gets the indexing configuration.</p>
     */
    getIndexingConfiguration(args: GetIndexingConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<GetIndexingConfigurationCommandOutput>;
    getIndexingConfiguration(args: GetIndexingConfigurationCommandInput, cb: (err: any, data?: GetIndexingConfigurationCommandOutput) => void): void;
    getIndexingConfiguration(args: GetIndexingConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetIndexingConfigurationCommandOutput) => void): void;
    /**
     * <p>Gets a job document.</p>
     */
    getJobDocument(args: GetJobDocumentCommandInput, options?: __HttpHandlerOptions): Promise<GetJobDocumentCommandOutput>;
    getJobDocument(args: GetJobDocumentCommandInput, cb: (err: any, data?: GetJobDocumentCommandOutput) => void): void;
    getJobDocument(args: GetJobDocumentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetJobDocumentCommandOutput) => void): void;
    /**
     * <p>Gets the logging options.</p>
     *          <p>NOTE: use of this command is not recommended. Use <code>GetV2LoggingOptions</code>
     *          instead.</p>
     */
    getLoggingOptions(args: GetLoggingOptionsCommandInput, options?: __HttpHandlerOptions): Promise<GetLoggingOptionsCommandOutput>;
    getLoggingOptions(args: GetLoggingOptionsCommandInput, cb: (err: any, data?: GetLoggingOptionsCommandOutput) => void): void;
    getLoggingOptions(args: GetLoggingOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLoggingOptionsCommandOutput) => void): void;
    /**
     * <p>Gets an OTA update.</p>
     */
    getOTAUpdate(args: GetOTAUpdateCommandInput, options?: __HttpHandlerOptions): Promise<GetOTAUpdateCommandOutput>;
    getOTAUpdate(args: GetOTAUpdateCommandInput, cb: (err: any, data?: GetOTAUpdateCommandOutput) => void): void;
    getOTAUpdate(args: GetOTAUpdateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetOTAUpdateCommandOutput) => void): void;
    /**
     * <p>Groups the aggregated values that match the query into percentile groupings. The default
     *         percentile groupings are: 1,5,25,50,75,95,99, although you can specify your own
     *         when you call <code>GetPercentiles</code>. This function returns a value for each
     *         percentile group specified (or the default percentile groupings). The percentile group
     *         "1" contains the aggregated field value that occurs in approximately one percent of the
     *         values that match the query. The percentile group "5" contains the aggregated field value
     *         that occurs in approximately five percent of the values that match the query, and so on.
     *         The result is an approximation, the more values that match the query, the more accurate
     *         the percentile values.</p>
     */
    getPercentiles(args: GetPercentilesCommandInput, options?: __HttpHandlerOptions): Promise<GetPercentilesCommandOutput>;
    getPercentiles(args: GetPercentilesCommandInput, cb: (err: any, data?: GetPercentilesCommandOutput) => void): void;
    getPercentiles(args: GetPercentilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPercentilesCommandOutput) => void): void;
    /**
     * <p>Gets information about the specified policy with the policy document of the default
     *          version.</p>
     */
    getPolicy(args: GetPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetPolicyCommandOutput>;
    getPolicy(args: GetPolicyCommandInput, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
    getPolicy(args: GetPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
    /**
     * <p>Gets information about the specified policy version.</p>
     */
    getPolicyVersion(args: GetPolicyVersionCommandInput, options?: __HttpHandlerOptions): Promise<GetPolicyVersionCommandOutput>;
    getPolicyVersion(args: GetPolicyVersionCommandInput, cb: (err: any, data?: GetPolicyVersionCommandOutput) => void): void;
    getPolicyVersion(args: GetPolicyVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPolicyVersionCommandOutput) => void): void;
    /**
     * <p>Gets a registration code used to register a CA certificate with AWS IoT.</p>
     */
    getRegistrationCode(args: GetRegistrationCodeCommandInput, options?: __HttpHandlerOptions): Promise<GetRegistrationCodeCommandOutput>;
    getRegistrationCode(args: GetRegistrationCodeCommandInput, cb: (err: any, data?: GetRegistrationCodeCommandOutput) => void): void;
    getRegistrationCode(args: GetRegistrationCodeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRegistrationCodeCommandOutput) => void): void;
    /**
     * <p>Returns the count, average, sum, minimum, maximum, sum of squares, variance,
     *       and standard deviation for the specified aggregated field. If the aggregation field is of type
     *       <code>String</code>, only the count statistic is returned.</p>
     */
    getStatistics(args: GetStatisticsCommandInput, options?: __HttpHandlerOptions): Promise<GetStatisticsCommandOutput>;
    getStatistics(args: GetStatisticsCommandInput, cb: (err: any, data?: GetStatisticsCommandOutput) => void): void;
    getStatistics(args: GetStatisticsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetStatisticsCommandOutput) => void): void;
    /**
     * <p>Gets information about the rule.</p>
     */
    getTopicRule(args: GetTopicRuleCommandInput, options?: __HttpHandlerOptions): Promise<GetTopicRuleCommandOutput>;
    getTopicRule(args: GetTopicRuleCommandInput, cb: (err: any, data?: GetTopicRuleCommandOutput) => void): void;
    getTopicRule(args: GetTopicRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTopicRuleCommandOutput) => void): void;
    /**
     * <p>Gets information about a topic rule destination.</p>
     */
    getTopicRuleDestination(args: GetTopicRuleDestinationCommandInput, options?: __HttpHandlerOptions): Promise<GetTopicRuleDestinationCommandOutput>;
    getTopicRuleDestination(args: GetTopicRuleDestinationCommandInput, cb: (err: any, data?: GetTopicRuleDestinationCommandOutput) => void): void;
    getTopicRuleDestination(args: GetTopicRuleDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTopicRuleDestinationCommandOutput) => void): void;
    /**
     * <p>Gets the fine grained logging options.</p>
     */
    getV2LoggingOptions(args: GetV2LoggingOptionsCommandInput, options?: __HttpHandlerOptions): Promise<GetV2LoggingOptionsCommandOutput>;
    getV2LoggingOptions(args: GetV2LoggingOptionsCommandInput, cb: (err: any, data?: GetV2LoggingOptionsCommandOutput) => void): void;
    getV2LoggingOptions(args: GetV2LoggingOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetV2LoggingOptionsCommandOutput) => void): void;
    /**
     * <p>Lists the active violations for a given Device Defender security profile.</p>
     */
    listActiveViolations(args: ListActiveViolationsCommandInput, options?: __HttpHandlerOptions): Promise<ListActiveViolationsCommandOutput>;
    listActiveViolations(args: ListActiveViolationsCommandInput, cb: (err: any, data?: ListActiveViolationsCommandOutput) => void): void;
    listActiveViolations(args: ListActiveViolationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListActiveViolationsCommandOutput) => void): void;
    /**
     * <p>Lists the policies attached to the specified thing group.</p>
     */
    listAttachedPolicies(args: ListAttachedPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<ListAttachedPoliciesCommandOutput>;
    listAttachedPolicies(args: ListAttachedPoliciesCommandInput, cb: (err: any, data?: ListAttachedPoliciesCommandOutput) => void): void;
    listAttachedPolicies(args: ListAttachedPoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAttachedPoliciesCommandOutput) => void): void;
    /**
     * <p>Lists the findings (results) of a Device Defender audit or of the audits
     *         performed during a specified time period. (Findings are retained for 90 days.)</p>
     */
    listAuditFindings(args: ListAuditFindingsCommandInput, options?: __HttpHandlerOptions): Promise<ListAuditFindingsCommandOutput>;
    listAuditFindings(args: ListAuditFindingsCommandInput, cb: (err: any, data?: ListAuditFindingsCommandOutput) => void): void;
    listAuditFindings(args: ListAuditFindingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAuditFindingsCommandOutput) => void): void;
    /**
     * <p>Gets the status of audit mitigation action tasks that were
     *       executed.</p>
     */
    listAuditMitigationActionsExecutions(args: ListAuditMitigationActionsExecutionsCommandInput, options?: __HttpHandlerOptions): Promise<ListAuditMitigationActionsExecutionsCommandOutput>;
    listAuditMitigationActionsExecutions(args: ListAuditMitigationActionsExecutionsCommandInput, cb: (err: any, data?: ListAuditMitigationActionsExecutionsCommandOutput) => void): void;
    listAuditMitigationActionsExecutions(args: ListAuditMitigationActionsExecutionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAuditMitigationActionsExecutionsCommandOutput) => void): void;
    /**
     * <p>Gets a list of audit mitigation action tasks that match the specified filters.</p>
     */
    listAuditMitigationActionsTasks(args: ListAuditMitigationActionsTasksCommandInput, options?: __HttpHandlerOptions): Promise<ListAuditMitigationActionsTasksCommandOutput>;
    listAuditMitigationActionsTasks(args: ListAuditMitigationActionsTasksCommandInput, cb: (err: any, data?: ListAuditMitigationActionsTasksCommandOutput) => void): void;
    listAuditMitigationActionsTasks(args: ListAuditMitigationActionsTasksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAuditMitigationActionsTasksCommandOutput) => void): void;
    /**
     * <p>
     *       Lists your Device Defender audit listings.
     *     </p>
     */
    listAuditSuppressions(args: ListAuditSuppressionsCommandInput, options?: __HttpHandlerOptions): Promise<ListAuditSuppressionsCommandOutput>;
    listAuditSuppressions(args: ListAuditSuppressionsCommandInput, cb: (err: any, data?: ListAuditSuppressionsCommandOutput) => void): void;
    listAuditSuppressions(args: ListAuditSuppressionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAuditSuppressionsCommandOutput) => void): void;
    /**
     * <p>Lists the Device Defender audits that have been performed during a given
     *           time period.</p>
     */
    listAuditTasks(args: ListAuditTasksCommandInput, options?: __HttpHandlerOptions): Promise<ListAuditTasksCommandOutput>;
    listAuditTasks(args: ListAuditTasksCommandInput, cb: (err: any, data?: ListAuditTasksCommandOutput) => void): void;
    listAuditTasks(args: ListAuditTasksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAuditTasksCommandOutput) => void): void;
    /**
     * <p>Lists the authorizers registered in your account.</p>
     */
    listAuthorizers(args: ListAuthorizersCommandInput, options?: __HttpHandlerOptions): Promise<ListAuthorizersCommandOutput>;
    listAuthorizers(args: ListAuthorizersCommandInput, cb: (err: any, data?: ListAuthorizersCommandOutput) => void): void;
    listAuthorizers(args: ListAuthorizersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAuthorizersCommandOutput) => void): void;
    /**
     * <p>Lists the billing groups you have created.</p>
     */
    listBillingGroups(args: ListBillingGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListBillingGroupsCommandOutput>;
    listBillingGroups(args: ListBillingGroupsCommandInput, cb: (err: any, data?: ListBillingGroupsCommandOutput) => void): void;
    listBillingGroups(args: ListBillingGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListBillingGroupsCommandOutput) => void): void;
    /**
     * <p>Lists the CA certificates registered for your AWS account.</p>
     *          <p>The results are paginated with a default page size of 25. You can use the returned
     *          marker to retrieve additional results.</p>
     */
    listCACertificates(args: ListCACertificatesCommandInput, options?: __HttpHandlerOptions): Promise<ListCACertificatesCommandOutput>;
    listCACertificates(args: ListCACertificatesCommandInput, cb: (err: any, data?: ListCACertificatesCommandOutput) => void): void;
    listCACertificates(args: ListCACertificatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCACertificatesCommandOutput) => void): void;
    /**
     * <p>Lists the certificates registered in your AWS account.</p>
     *          <p>The results are paginated with a default page size of 25. You can use the returned
     *          marker to retrieve additional results.</p>
     */
    listCertificates(args: ListCertificatesCommandInput, options?: __HttpHandlerOptions): Promise<ListCertificatesCommandOutput>;
    listCertificates(args: ListCertificatesCommandInput, cb: (err: any, data?: ListCertificatesCommandOutput) => void): void;
    listCertificates(args: ListCertificatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCertificatesCommandOutput) => void): void;
    /**
     * <p>List the device certificates signed by the specified CA certificate.</p>
     */
    listCertificatesByCA(args: ListCertificatesByCACommandInput, options?: __HttpHandlerOptions): Promise<ListCertificatesByCACommandOutput>;
    listCertificatesByCA(args: ListCertificatesByCACommandInput, cb: (err: any, data?: ListCertificatesByCACommandOutput) => void): void;
    listCertificatesByCA(args: ListCertificatesByCACommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCertificatesByCACommandOutput) => void): void;
    /**
     * <p>
     *       Lists your Device Defender detect custom metrics.
     *     </p>
     */
    listCustomMetrics(args: ListCustomMetricsCommandInput, options?: __HttpHandlerOptions): Promise<ListCustomMetricsCommandOutput>;
    listCustomMetrics(args: ListCustomMetricsCommandInput, cb: (err: any, data?: ListCustomMetricsCommandOutput) => void): void;
    listCustomMetrics(args: ListCustomMetricsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCustomMetricsCommandOutput) => void): void;
    /**
     * <p>
     *       Lists mitigation actions executions for a Device Defender ML Detect Security Profile.
     *     </p>
     */
    listDetectMitigationActionsExecutions(args: ListDetectMitigationActionsExecutionsCommandInput, options?: __HttpHandlerOptions): Promise<ListDetectMitigationActionsExecutionsCommandOutput>;
    listDetectMitigationActionsExecutions(args: ListDetectMitigationActionsExecutionsCommandInput, cb: (err: any, data?: ListDetectMitigationActionsExecutionsCommandOutput) => void): void;
    listDetectMitigationActionsExecutions(args: ListDetectMitigationActionsExecutionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDetectMitigationActionsExecutionsCommandOutput) => void): void;
    /**
     * <p>
     *       List of Device Defender ML Detect mitigation actions tasks.
     *     </p>
     */
    listDetectMitigationActionsTasks(args: ListDetectMitigationActionsTasksCommandInput, options?: __HttpHandlerOptions): Promise<ListDetectMitigationActionsTasksCommandOutput>;
    listDetectMitigationActionsTasks(args: ListDetectMitigationActionsTasksCommandInput, cb: (err: any, data?: ListDetectMitigationActionsTasksCommandOutput) => void): void;
    listDetectMitigationActionsTasks(args: ListDetectMitigationActionsTasksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDetectMitigationActionsTasksCommandOutput) => void): void;
    /**
     * <p>List the set of dimensions that are defined for your AWS account.</p>
     */
    listDimensions(args: ListDimensionsCommandInput, options?: __HttpHandlerOptions): Promise<ListDimensionsCommandOutput>;
    listDimensions(args: ListDimensionsCommandInput, cb: (err: any, data?: ListDimensionsCommandOutput) => void): void;
    listDimensions(args: ListDimensionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDimensionsCommandOutput) => void): void;
    /**
     * <p>Gets a list of domain configurations for the user. This list is sorted alphabetically by domain configuration name.</p>
     */
    listDomainConfigurations(args: ListDomainConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainConfigurationsCommandOutput>;
    listDomainConfigurations(args: ListDomainConfigurationsCommandInput, cb: (err: any, data?: ListDomainConfigurationsCommandOutput) => void): void;
    listDomainConfigurations(args: ListDomainConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDomainConfigurationsCommandOutput) => void): void;
    /**
     * <p>Lists the search indices.</p>
     */
    listIndices(args: ListIndicesCommandInput, options?: __HttpHandlerOptions): Promise<ListIndicesCommandOutput>;
    listIndices(args: ListIndicesCommandInput, cb: (err: any, data?: ListIndicesCommandOutput) => void): void;
    listIndices(args: ListIndicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListIndicesCommandOutput) => void): void;
    /**
     * <p>Lists the job executions for a job.</p>
     */
    listJobExecutionsForJob(args: ListJobExecutionsForJobCommandInput, options?: __HttpHandlerOptions): Promise<ListJobExecutionsForJobCommandOutput>;
    listJobExecutionsForJob(args: ListJobExecutionsForJobCommandInput, cb: (err: any, data?: ListJobExecutionsForJobCommandOutput) => void): void;
    listJobExecutionsForJob(args: ListJobExecutionsForJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListJobExecutionsForJobCommandOutput) => void): void;
    /**
     * <p>Lists the job executions for the specified thing.</p>
     */
    listJobExecutionsForThing(args: ListJobExecutionsForThingCommandInput, options?: __HttpHandlerOptions): Promise<ListJobExecutionsForThingCommandOutput>;
    listJobExecutionsForThing(args: ListJobExecutionsForThingCommandInput, cb: (err: any, data?: ListJobExecutionsForThingCommandOutput) => void): void;
    listJobExecutionsForThing(args: ListJobExecutionsForThingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListJobExecutionsForThingCommandOutput) => void): void;
    /**
     * <p>Lists jobs.</p>
     */
    listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
    listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
    listJobs(args: ListJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
    /**
     * <p>Returns a list of job templates.</p>
     */
    listJobTemplates(args: ListJobTemplatesCommandInput, options?: __HttpHandlerOptions): Promise<ListJobTemplatesCommandOutput>;
    listJobTemplates(args: ListJobTemplatesCommandInput, cb: (err: any, data?: ListJobTemplatesCommandOutput) => void): void;
    listJobTemplates(args: ListJobTemplatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListJobTemplatesCommandOutput) => void): void;
    /**
     * <p>Gets a list of all mitigation actions that match the specified filter criteria.</p>
     */
    listMitigationActions(args: ListMitigationActionsCommandInput, options?: __HttpHandlerOptions): Promise<ListMitigationActionsCommandOutput>;
    listMitigationActions(args: ListMitigationActionsCommandInput, cb: (err: any, data?: ListMitigationActionsCommandOutput) => void): void;
    listMitigationActions(args: ListMitigationActionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMitigationActionsCommandOutput) => void): void;
    /**
     * <p>Lists OTA updates.</p>
     */
    listOTAUpdates(args: ListOTAUpdatesCommandInput, options?: __HttpHandlerOptions): Promise<ListOTAUpdatesCommandOutput>;
    listOTAUpdates(args: ListOTAUpdatesCommandInput, cb: (err: any, data?: ListOTAUpdatesCommandOutput) => void): void;
    listOTAUpdates(args: ListOTAUpdatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListOTAUpdatesCommandOutput) => void): void;
    /**
     * <p>Lists certificates that are being transferred but not yet accepted.</p>
     */
    listOutgoingCertificates(args: ListOutgoingCertificatesCommandInput, options?: __HttpHandlerOptions): Promise<ListOutgoingCertificatesCommandOutput>;
    listOutgoingCertificates(args: ListOutgoingCertificatesCommandInput, cb: (err: any, data?: ListOutgoingCertificatesCommandOutput) => void): void;
    listOutgoingCertificates(args: ListOutgoingCertificatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListOutgoingCertificatesCommandOutput) => void): void;
    /**
     * <p>Lists your policies.</p>
     */
    listPolicies(args: ListPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<ListPoliciesCommandOutput>;
    listPolicies(args: ListPoliciesCommandInput, cb: (err: any, data?: ListPoliciesCommandOutput) => void): void;
    listPolicies(args: ListPoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPoliciesCommandOutput) => void): void;
    /**
     * @deprecated
     *
     * <p>Lists the principals associated with the specified policy.</p>
     *          <p>
     *             <b>Note:</b> This API is deprecated. Please use <a>ListTargetsForPolicy</a> instead.</p>
     */
    listPolicyPrincipals(args: ListPolicyPrincipalsCommandInput, options?: __HttpHandlerOptions): Promise<ListPolicyPrincipalsCommandOutput>;
    listPolicyPrincipals(args: ListPolicyPrincipalsCommandInput, cb: (err: any, data?: ListPolicyPrincipalsCommandOutput) => void): void;
    listPolicyPrincipals(args: ListPolicyPrincipalsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPolicyPrincipalsCommandOutput) => void): void;
    /**
     * <p>Lists the versions of the specified policy and identifies the default
     *          version.</p>
     */
    listPolicyVersions(args: ListPolicyVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListPolicyVersionsCommandOutput>;
    listPolicyVersions(args: ListPolicyVersionsCommandInput, cb: (err: any, data?: ListPolicyVersionsCommandOutput) => void): void;
    listPolicyVersions(args: ListPolicyVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPolicyVersionsCommandOutput) => void): void;
    /**
     * @deprecated
     *
     * <p>Lists the policies attached to the specified principal. If you use an Cognito
     *          identity, the ID must be in <a href="https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html#API_GetCredentialsForIdentity_RequestSyntax">AmazonCognito Identity format</a>.</p>
     *          <p>
     *             <b>Note:</b> This API is deprecated. Please use <a>ListAttachedPolicies</a> instead.</p>
     */
    listPrincipalPolicies(args: ListPrincipalPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<ListPrincipalPoliciesCommandOutput>;
    listPrincipalPolicies(args: ListPrincipalPoliciesCommandInput, cb: (err: any, data?: ListPrincipalPoliciesCommandOutput) => void): void;
    listPrincipalPolicies(args: ListPrincipalPoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPrincipalPoliciesCommandOutput) => void): void;
    /**
     * <p>Lists the things associated with the specified principal. A principal can be X.509
     * 			certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
     * 			identities. </p>
     */
    listPrincipalThings(args: ListPrincipalThingsCommandInput, options?: __HttpHandlerOptions): Promise<ListPrincipalThingsCommandOutput>;
    listPrincipalThings(args: ListPrincipalThingsCommandInput, cb: (err: any, data?: ListPrincipalThingsCommandOutput) => void): void;
    listPrincipalThings(args: ListPrincipalThingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPrincipalThingsCommandOutput) => void): void;
    /**
     * <p>Lists the fleet provisioning templates in your AWS account.</p>
     */
    listProvisioningTemplates(args: ListProvisioningTemplatesCommandInput, options?: __HttpHandlerOptions): Promise<ListProvisioningTemplatesCommandOutput>;
    listProvisioningTemplates(args: ListProvisioningTemplatesCommandInput, cb: (err: any, data?: ListProvisioningTemplatesCommandOutput) => void): void;
    listProvisioningTemplates(args: ListProvisioningTemplatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProvisioningTemplatesCommandOutput) => void): void;
    /**
     * <p>A list of fleet provisioning template versions.</p>
     */
    listProvisioningTemplateVersions(args: ListProvisioningTemplateVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListProvisioningTemplateVersionsCommandOutput>;
    listProvisioningTemplateVersions(args: ListProvisioningTemplateVersionsCommandInput, cb: (err: any, data?: ListProvisioningTemplateVersionsCommandOutput) => void): void;
    listProvisioningTemplateVersions(args: ListProvisioningTemplateVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProvisioningTemplateVersionsCommandOutput) => void): void;
    /**
     * <p>Lists the role aliases registered in your account.</p>
     */
    listRoleAliases(args: ListRoleAliasesCommandInput, options?: __HttpHandlerOptions): Promise<ListRoleAliasesCommandOutput>;
    listRoleAliases(args: ListRoleAliasesCommandInput, cb: (err: any, data?: ListRoleAliasesCommandOutput) => void): void;
    listRoleAliases(args: ListRoleAliasesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRoleAliasesCommandOutput) => void): void;
    /**
     * <p>Lists all of your scheduled audits.</p>
     */
    listScheduledAudits(args: ListScheduledAuditsCommandInput, options?: __HttpHandlerOptions): Promise<ListScheduledAuditsCommandOutput>;
    listScheduledAudits(args: ListScheduledAuditsCommandInput, cb: (err: any, data?: ListScheduledAuditsCommandOutput) => void): void;
    listScheduledAudits(args: ListScheduledAuditsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListScheduledAuditsCommandOutput) => void): void;
    /**
     * <p>Lists the Device Defender security profiles
     *       you've
     *       created. You can filter security profiles by dimension or custom metric.</p>
     *          <note>
     *             <p>
     *                <code>dimensionName</code> and <code>metricName</code> cannot be used in the same request.</p>
     *          </note>
     */
    listSecurityProfiles(args: ListSecurityProfilesCommandInput, options?: __HttpHandlerOptions): Promise<ListSecurityProfilesCommandOutput>;
    listSecurityProfiles(args: ListSecurityProfilesCommandInput, cb: (err: any, data?: ListSecurityProfilesCommandOutput) => void): void;
    listSecurityProfiles(args: ListSecurityProfilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSecurityProfilesCommandOutput) => void): void;
    /**
     * <p>Lists the Device Defender security profiles attached to a target (thing group).</p>
     */
    listSecurityProfilesForTarget(args: ListSecurityProfilesForTargetCommandInput, options?: __HttpHandlerOptions): Promise<ListSecurityProfilesForTargetCommandOutput>;
    listSecurityProfilesForTarget(args: ListSecurityProfilesForTargetCommandInput, cb: (err: any, data?: ListSecurityProfilesForTargetCommandOutput) => void): void;
    listSecurityProfilesForTarget(args: ListSecurityProfilesForTargetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSecurityProfilesForTargetCommandOutput) => void): void;
    /**
     * <p>Lists all of the streams in your AWS account.</p>
     */
    listStreams(args: ListStreamsCommandInput, options?: __HttpHandlerOptions): Promise<ListStreamsCommandOutput>;
    listStreams(args: ListStreamsCommandInput, cb: (err: any, data?: ListStreamsCommandOutput) => void): void;
    listStreams(args: ListStreamsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListStreamsCommandOutput) => void): void;
    /**
     * <p>Lists the tags (metadata) you have assigned to the resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>List targets for the specified policy.</p>
     */
    listTargetsForPolicy(args: ListTargetsForPolicyCommandInput, options?: __HttpHandlerOptions): Promise<ListTargetsForPolicyCommandOutput>;
    listTargetsForPolicy(args: ListTargetsForPolicyCommandInput, cb: (err: any, data?: ListTargetsForPolicyCommandOutput) => void): void;
    listTargetsForPolicy(args: ListTargetsForPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTargetsForPolicyCommandOutput) => void): void;
    /**
     * <p>Lists the targets (thing groups) associated with a given Device Defender security profile.</p>
     */
    listTargetsForSecurityProfile(args: ListTargetsForSecurityProfileCommandInput, options?: __HttpHandlerOptions): Promise<ListTargetsForSecurityProfileCommandOutput>;
    listTargetsForSecurityProfile(args: ListTargetsForSecurityProfileCommandInput, cb: (err: any, data?: ListTargetsForSecurityProfileCommandOutput) => void): void;
    listTargetsForSecurityProfile(args: ListTargetsForSecurityProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTargetsForSecurityProfileCommandOutput) => void): void;
    /**
     * <p>List the thing groups in your account.</p>
     */
    listThingGroups(args: ListThingGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListThingGroupsCommandOutput>;
    listThingGroups(args: ListThingGroupsCommandInput, cb: (err: any, data?: ListThingGroupsCommandOutput) => void): void;
    listThingGroups(args: ListThingGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListThingGroupsCommandOutput) => void): void;
    /**
     * <p>List the thing groups to which the specified thing belongs.</p>
     */
    listThingGroupsForThing(args: ListThingGroupsForThingCommandInput, options?: __HttpHandlerOptions): Promise<ListThingGroupsForThingCommandOutput>;
    listThingGroupsForThing(args: ListThingGroupsForThingCommandInput, cb: (err: any, data?: ListThingGroupsForThingCommandOutput) => void): void;
    listThingGroupsForThing(args: ListThingGroupsForThingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListThingGroupsForThingCommandOutput) => void): void;
    /**
     * <p>Lists the principals associated with the specified thing. A principal can be X.509
     * 			certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
     * 			identities.</p>
     */
    listThingPrincipals(args: ListThingPrincipalsCommandInput, options?: __HttpHandlerOptions): Promise<ListThingPrincipalsCommandOutput>;
    listThingPrincipals(args: ListThingPrincipalsCommandInput, cb: (err: any, data?: ListThingPrincipalsCommandOutput) => void): void;
    listThingPrincipals(args: ListThingPrincipalsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListThingPrincipalsCommandOutput) => void): void;
    /**
     * <p>Information about the thing registration tasks.</p>
     */
    listThingRegistrationTaskReports(args: ListThingRegistrationTaskReportsCommandInput, options?: __HttpHandlerOptions): Promise<ListThingRegistrationTaskReportsCommandOutput>;
    listThingRegistrationTaskReports(args: ListThingRegistrationTaskReportsCommandInput, cb: (err: any, data?: ListThingRegistrationTaskReportsCommandOutput) => void): void;
    listThingRegistrationTaskReports(args: ListThingRegistrationTaskReportsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListThingRegistrationTaskReportsCommandOutput) => void): void;
    /**
     * <p>List bulk thing provisioning tasks.</p>
     */
    listThingRegistrationTasks(args: ListThingRegistrationTasksCommandInput, options?: __HttpHandlerOptions): Promise<ListThingRegistrationTasksCommandOutput>;
    listThingRegistrationTasks(args: ListThingRegistrationTasksCommandInput, cb: (err: any, data?: ListThingRegistrationTasksCommandOutput) => void): void;
    listThingRegistrationTasks(args: ListThingRegistrationTasksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListThingRegistrationTasksCommandOutput) => void): void;
    /**
     * <p>Lists your things. Use the <b>attributeName</b> and
     * 				<b>attributeValue</b> parameters to filter your things.
     * 			For example, calling <code>ListThings</code> with attributeName=Color and
     * 			attributeValue=Red retrieves all things in the registry that contain an attribute
     * 				<b>Color</b> with the value <b>Red</b>. </p>
     * 		       <note>
     * 			         <p>You will not be charged for calling this API if an <code>Access denied</code> error is returned. You will also not be charged if no attributes or pagination token was provided in request and no pagination token and no results were returned.</p>
     * 		       </note>
     */
    listThings(args: ListThingsCommandInput, options?: __HttpHandlerOptions): Promise<ListThingsCommandOutput>;
    listThings(args: ListThingsCommandInput, cb: (err: any, data?: ListThingsCommandOutput) => void): void;
    listThings(args: ListThingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListThingsCommandOutput) => void): void;
    /**
     * <p>Lists the things you have added to the given billing group.</p>
     */
    listThingsInBillingGroup(args: ListThingsInBillingGroupCommandInput, options?: __HttpHandlerOptions): Promise<ListThingsInBillingGroupCommandOutput>;
    listThingsInBillingGroup(args: ListThingsInBillingGroupCommandInput, cb: (err: any, data?: ListThingsInBillingGroupCommandOutput) => void): void;
    listThingsInBillingGroup(args: ListThingsInBillingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListThingsInBillingGroupCommandOutput) => void): void;
    /**
     * <p>Lists the things in the specified group.</p>
     */
    listThingsInThingGroup(args: ListThingsInThingGroupCommandInput, options?: __HttpHandlerOptions): Promise<ListThingsInThingGroupCommandOutput>;
    listThingsInThingGroup(args: ListThingsInThingGroupCommandInput, cb: (err: any, data?: ListThingsInThingGroupCommandOutput) => void): void;
    listThingsInThingGroup(args: ListThingsInThingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListThingsInThingGroupCommandOutput) => void): void;
    /**
     * <p>Lists the existing thing types.</p>
     */
    listThingTypes(args: ListThingTypesCommandInput, options?: __HttpHandlerOptions): Promise<ListThingTypesCommandOutput>;
    listThingTypes(args: ListThingTypesCommandInput, cb: (err: any, data?: ListThingTypesCommandOutput) => void): void;
    listThingTypes(args: ListThingTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListThingTypesCommandOutput) => void): void;
    /**
     * <p>Lists all the topic rule destinations in your AWS account.</p>
     */
    listTopicRuleDestinations(args: ListTopicRuleDestinationsCommandInput, options?: __HttpHandlerOptions): Promise<ListTopicRuleDestinationsCommandOutput>;
    listTopicRuleDestinations(args: ListTopicRuleDestinationsCommandInput, cb: (err: any, data?: ListTopicRuleDestinationsCommandOutput) => void): void;
    listTopicRuleDestinations(args: ListTopicRuleDestinationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTopicRuleDestinationsCommandOutput) => void): void;
    /**
     * <p>Lists the rules for the specific topic.</p>
     */
    listTopicRules(args: ListTopicRulesCommandInput, options?: __HttpHandlerOptions): Promise<ListTopicRulesCommandOutput>;
    listTopicRules(args: ListTopicRulesCommandInput, cb: (err: any, data?: ListTopicRulesCommandOutput) => void): void;
    listTopicRules(args: ListTopicRulesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTopicRulesCommandOutput) => void): void;
    /**
     * <p>Lists logging levels.</p>
     */
    listV2LoggingLevels(args: ListV2LoggingLevelsCommandInput, options?: __HttpHandlerOptions): Promise<ListV2LoggingLevelsCommandOutput>;
    listV2LoggingLevels(args: ListV2LoggingLevelsCommandInput, cb: (err: any, data?: ListV2LoggingLevelsCommandOutput) => void): void;
    listV2LoggingLevels(args: ListV2LoggingLevelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListV2LoggingLevelsCommandOutput) => void): void;
    /**
     * <p>Lists the Device Defender security profile violations discovered during the given time period.
     *       You can use filters to limit the results to those alerts issued for a particular security profile,
     *       behavior, or thing (device).</p>
     */
    listViolationEvents(args: ListViolationEventsCommandInput, options?: __HttpHandlerOptions): Promise<ListViolationEventsCommandOutput>;
    listViolationEvents(args: ListViolationEventsCommandInput, cb: (err: any, data?: ListViolationEventsCommandOutput) => void): void;
    listViolationEvents(args: ListViolationEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListViolationEventsCommandOutput) => void): void;
    /**
     * <p>Registers a CA certificate with AWS IoT. This CA certificate can then be used to sign
     *          device certificates, which can be then registered with AWS IoT. You can register up to 10
     *          CA certificates per AWS account that have the same subject field. This enables you to have
     *          up to 10 certificate authorities sign your device certificates. If you have more than one
     *          CA certificate registered, make sure you pass the CA certificate when you register your
     *          device certificates with the RegisterCertificate API.</p>
     */
    registerCACertificate(args: RegisterCACertificateCommandInput, options?: __HttpHandlerOptions): Promise<RegisterCACertificateCommandOutput>;
    registerCACertificate(args: RegisterCACertificateCommandInput, cb: (err: any, data?: RegisterCACertificateCommandOutput) => void): void;
    registerCACertificate(args: RegisterCACertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterCACertificateCommandOutput) => void): void;
    /**
     * <p>Registers a device certificate with AWS IoT. If you have more than one CA certificate
     *          that has the same subject field, you must specify the CA certificate that was used to sign
     *          the device certificate being registered.</p>
     */
    registerCertificate(args: RegisterCertificateCommandInput, options?: __HttpHandlerOptions): Promise<RegisterCertificateCommandOutput>;
    registerCertificate(args: RegisterCertificateCommandInput, cb: (err: any, data?: RegisterCertificateCommandOutput) => void): void;
    registerCertificate(args: RegisterCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterCertificateCommandOutput) => void): void;
    /**
     * <p>Register a certificate that does not have a certificate authority (CA).</p>
     */
    registerCertificateWithoutCA(args: RegisterCertificateWithoutCACommandInput, options?: __HttpHandlerOptions): Promise<RegisterCertificateWithoutCACommandOutput>;
    registerCertificateWithoutCA(args: RegisterCertificateWithoutCACommandInput, cb: (err: any, data?: RegisterCertificateWithoutCACommandOutput) => void): void;
    registerCertificateWithoutCA(args: RegisterCertificateWithoutCACommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterCertificateWithoutCACommandOutput) => void): void;
    /**
     * <p>Provisions a thing in the device registry. RegisterThing calls other AWS IoT control
     *          plane APIs. These calls might exceed your account level <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_iot">
     *             AWS IoT Throttling Limits</a> and cause throttle errors. Please contact <a href="https://console.aws.amazon.com/support/home">AWS Customer Support</a> to raise
     *          your throttling limits if necessary.</p>
     */
    registerThing(args: RegisterThingCommandInput, options?: __HttpHandlerOptions): Promise<RegisterThingCommandOutput>;
    registerThing(args: RegisterThingCommandInput, cb: (err: any, data?: RegisterThingCommandOutput) => void): void;
    registerThing(args: RegisterThingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterThingCommandOutput) => void): void;
    /**
     * <p>Rejects a pending certificate transfer. After AWS IoT rejects a certificate transfer,
     *          the certificate status changes from <b>PENDING_TRANSFER</b> to
     *             <b>INACTIVE</b>.</p>
     *          <p>To check for pending certificate transfers, call <a>ListCertificates</a>
     *          to enumerate your certificates.</p>
     *          <p>This operation can only be called by the transfer destination. After it is called,
     *          the certificate will be returned to the source's account in the INACTIVE state.</p>
     */
    rejectCertificateTransfer(args: RejectCertificateTransferCommandInput, options?: __HttpHandlerOptions): Promise<RejectCertificateTransferCommandOutput>;
    rejectCertificateTransfer(args: RejectCertificateTransferCommandInput, cb: (err: any, data?: RejectCertificateTransferCommandOutput) => void): void;
    rejectCertificateTransfer(args: RejectCertificateTransferCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RejectCertificateTransferCommandOutput) => void): void;
    /**
     * <p>Removes the given thing from the billing group.</p>
     */
    removeThingFromBillingGroup(args: RemoveThingFromBillingGroupCommandInput, options?: __HttpHandlerOptions): Promise<RemoveThingFromBillingGroupCommandOutput>;
    removeThingFromBillingGroup(args: RemoveThingFromBillingGroupCommandInput, cb: (err: any, data?: RemoveThingFromBillingGroupCommandOutput) => void): void;
    removeThingFromBillingGroup(args: RemoveThingFromBillingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveThingFromBillingGroupCommandOutput) => void): void;
    /**
     * <p>Remove the specified thing from the specified group.</p>
     * 		       <p>You must specify either a <code>thingGroupArn</code> or a
     * 			<code>thingGroupName</code> to identify the thing group and
     * 			either a <code>thingArn</code> or a <code>thingName</code> to
     * 			identify the thing to remove from the thing group.
     * 		</p>
     */
    removeThingFromThingGroup(args: RemoveThingFromThingGroupCommandInput, options?: __HttpHandlerOptions): Promise<RemoveThingFromThingGroupCommandOutput>;
    removeThingFromThingGroup(args: RemoveThingFromThingGroupCommandInput, cb: (err: any, data?: RemoveThingFromThingGroupCommandOutput) => void): void;
    removeThingFromThingGroup(args: RemoveThingFromThingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveThingFromThingGroupCommandOutput) => void): void;
    /**
     * <p>Replaces the rule. You must specify all parameters for the new rule. Creating rules
     *          is an administrator-level action. Any user who has permission to create rules will be able
     *          to access data processed by the rule.</p>
     */
    replaceTopicRule(args: ReplaceTopicRuleCommandInput, options?: __HttpHandlerOptions): Promise<ReplaceTopicRuleCommandOutput>;
    replaceTopicRule(args: ReplaceTopicRuleCommandInput, cb: (err: any, data?: ReplaceTopicRuleCommandOutput) => void): void;
    replaceTopicRule(args: ReplaceTopicRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ReplaceTopicRuleCommandOutput) => void): void;
    /**
     * <p>The query search index.</p>
     */
    searchIndex(args: SearchIndexCommandInput, options?: __HttpHandlerOptions): Promise<SearchIndexCommandOutput>;
    searchIndex(args: SearchIndexCommandInput, cb: (err: any, data?: SearchIndexCommandOutput) => void): void;
    searchIndex(args: SearchIndexCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchIndexCommandOutput) => void): void;
    /**
     * <p>Sets the default authorizer. This will be used if a websocket connection is made
     *          without specifying an authorizer.</p>
     */
    setDefaultAuthorizer(args: SetDefaultAuthorizerCommandInput, options?: __HttpHandlerOptions): Promise<SetDefaultAuthorizerCommandOutput>;
    setDefaultAuthorizer(args: SetDefaultAuthorizerCommandInput, cb: (err: any, data?: SetDefaultAuthorizerCommandOutput) => void): void;
    setDefaultAuthorizer(args: SetDefaultAuthorizerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetDefaultAuthorizerCommandOutput) => void): void;
    /**
     * <p>Sets the specified version of the specified policy as the policy's default
     *          (operative) version. This action affects all certificates to which the policy is attached.
     *          To list the principals the policy is attached to, use the ListPrincipalPolicy
     *          API.</p>
     */
    setDefaultPolicyVersion(args: SetDefaultPolicyVersionCommandInput, options?: __HttpHandlerOptions): Promise<SetDefaultPolicyVersionCommandOutput>;
    setDefaultPolicyVersion(args: SetDefaultPolicyVersionCommandInput, cb: (err: any, data?: SetDefaultPolicyVersionCommandOutput) => void): void;
    setDefaultPolicyVersion(args: SetDefaultPolicyVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetDefaultPolicyVersionCommandOutput) => void): void;
    /**
     * <p>Sets the logging options.</p>
     *          <p>NOTE: use of this command is not recommended. Use <code>SetV2LoggingOptions</code>
     *          instead.</p>
     */
    setLoggingOptions(args: SetLoggingOptionsCommandInput, options?: __HttpHandlerOptions): Promise<SetLoggingOptionsCommandOutput>;
    setLoggingOptions(args: SetLoggingOptionsCommandInput, cb: (err: any, data?: SetLoggingOptionsCommandOutput) => void): void;
    setLoggingOptions(args: SetLoggingOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetLoggingOptionsCommandOutput) => void): void;
    /**
     * <p>Sets the logging level.</p>
     */
    setV2LoggingLevel(args: SetV2LoggingLevelCommandInput, options?: __HttpHandlerOptions): Promise<SetV2LoggingLevelCommandOutput>;
    setV2LoggingLevel(args: SetV2LoggingLevelCommandInput, cb: (err: any, data?: SetV2LoggingLevelCommandOutput) => void): void;
    setV2LoggingLevel(args: SetV2LoggingLevelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetV2LoggingLevelCommandOutput) => void): void;
    /**
     * <p>Sets the logging options for the V2 logging service.</p>
     */
    setV2LoggingOptions(args: SetV2LoggingOptionsCommandInput, options?: __HttpHandlerOptions): Promise<SetV2LoggingOptionsCommandOutput>;
    setV2LoggingOptions(args: SetV2LoggingOptionsCommandInput, cb: (err: any, data?: SetV2LoggingOptionsCommandOutput) => void): void;
    setV2LoggingOptions(args: SetV2LoggingOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetV2LoggingOptionsCommandOutput) => void): void;
    /**
     * <p>Starts a task that applies a set of mitigation actions to the specified target.</p>
     */
    startAuditMitigationActionsTask(args: StartAuditMitigationActionsTaskCommandInput, options?: __HttpHandlerOptions): Promise<StartAuditMitigationActionsTaskCommandOutput>;
    startAuditMitigationActionsTask(args: StartAuditMitigationActionsTaskCommandInput, cb: (err: any, data?: StartAuditMitigationActionsTaskCommandOutput) => void): void;
    startAuditMitigationActionsTask(args: StartAuditMitigationActionsTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartAuditMitigationActionsTaskCommandOutput) => void): void;
    /**
     * <p>
     *       Starts a Device Defender ML Detect mitigation actions task.
     *     </p>
     */
    startDetectMitigationActionsTask(args: StartDetectMitigationActionsTaskCommandInput, options?: __HttpHandlerOptions): Promise<StartDetectMitigationActionsTaskCommandOutput>;
    startDetectMitigationActionsTask(args: StartDetectMitigationActionsTaskCommandInput, cb: (err: any, data?: StartDetectMitigationActionsTaskCommandOutput) => void): void;
    startDetectMitigationActionsTask(args: StartDetectMitigationActionsTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartDetectMitigationActionsTaskCommandOutput) => void): void;
    /**
     * <p>Starts an on-demand Device Defender audit.</p>
     */
    startOnDemandAuditTask(args: StartOnDemandAuditTaskCommandInput, options?: __HttpHandlerOptions): Promise<StartOnDemandAuditTaskCommandOutput>;
    startOnDemandAuditTask(args: StartOnDemandAuditTaskCommandInput, cb: (err: any, data?: StartOnDemandAuditTaskCommandOutput) => void): void;
    startOnDemandAuditTask(args: StartOnDemandAuditTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartOnDemandAuditTaskCommandOutput) => void): void;
    /**
     * <p>Creates a bulk thing provisioning task.</p>
     */
    startThingRegistrationTask(args: StartThingRegistrationTaskCommandInput, options?: __HttpHandlerOptions): Promise<StartThingRegistrationTaskCommandOutput>;
    startThingRegistrationTask(args: StartThingRegistrationTaskCommandInput, cb: (err: any, data?: StartThingRegistrationTaskCommandOutput) => void): void;
    startThingRegistrationTask(args: StartThingRegistrationTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartThingRegistrationTaskCommandOutput) => void): void;
    /**
     * <p>Cancels a bulk thing provisioning task.</p>
     */
    stopThingRegistrationTask(args: StopThingRegistrationTaskCommandInput, options?: __HttpHandlerOptions): Promise<StopThingRegistrationTaskCommandOutput>;
    stopThingRegistrationTask(args: StopThingRegistrationTaskCommandInput, cb: (err: any, data?: StopThingRegistrationTaskCommandOutput) => void): void;
    stopThingRegistrationTask(args: StopThingRegistrationTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopThingRegistrationTaskCommandOutput) => void): void;
    /**
     * <p>Adds to or modifies the tags of the given resource. Tags are metadata which can be
     * 			used to manage a resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Tests if a specified principal is authorized to perform an AWS IoT action on a
     *          specified resource. Use this to test and debug the authorization behavior of devices that
     *          connect to the AWS IoT device gateway.</p>
     */
    testAuthorization(args: TestAuthorizationCommandInput, options?: __HttpHandlerOptions): Promise<TestAuthorizationCommandOutput>;
    testAuthorization(args: TestAuthorizationCommandInput, cb: (err: any, data?: TestAuthorizationCommandOutput) => void): void;
    testAuthorization(args: TestAuthorizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TestAuthorizationCommandOutput) => void): void;
    /**
     * <p>Tests a custom authorization behavior by invoking a specified custom authorizer. Use
     *          this to test and debug the custom authorization behavior of devices that connect to the AWS
     *          IoT device gateway.</p>
     */
    testInvokeAuthorizer(args: TestInvokeAuthorizerCommandInput, options?: __HttpHandlerOptions): Promise<TestInvokeAuthorizerCommandOutput>;
    testInvokeAuthorizer(args: TestInvokeAuthorizerCommandInput, cb: (err: any, data?: TestInvokeAuthorizerCommandOutput) => void): void;
    testInvokeAuthorizer(args: TestInvokeAuthorizerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TestInvokeAuthorizerCommandOutput) => void): void;
    /**
     * <p>Transfers the specified certificate to the specified AWS account.</p>
     *          <p>You can cancel the transfer until it is acknowledged by the recipient.</p>
     *          <p>No notification is sent to the transfer destination's account. It is up to the caller
     *          to notify the transfer target.</p>
     *          <p>The certificate being transferred must not be in the ACTIVE state. You can use the
     *          UpdateCertificate API to deactivate it.</p>
     *          <p>The certificate must not have any policies attached to it. You can use the
     *          DetachPrincipalPolicy API to detach them.</p>
     */
    transferCertificate(args: TransferCertificateCommandInput, options?: __HttpHandlerOptions): Promise<TransferCertificateCommandOutput>;
    transferCertificate(args: TransferCertificateCommandInput, cb: (err: any, data?: TransferCertificateCommandOutput) => void): void;
    transferCertificate(args: TransferCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TransferCertificateCommandOutput) => void): void;
    /**
     * <p>Removes the given tags (metadata) from the resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Configures or reconfigures the Device Defender audit settings for this account.
     *           Settings include how audit notifications are sent and which audit checks are
     *           enabled or disabled.</p>
     */
    updateAccountAuditConfiguration(args: UpdateAccountAuditConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAccountAuditConfigurationCommandOutput>;
    updateAccountAuditConfiguration(args: UpdateAccountAuditConfigurationCommandInput, cb: (err: any, data?: UpdateAccountAuditConfigurationCommandOutput) => void): void;
    updateAccountAuditConfiguration(args: UpdateAccountAuditConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAccountAuditConfigurationCommandOutput) => void): void;
    /**
     * <p>
     *       Updates a Device Defender audit suppression.
     *     </p>
     */
    updateAuditSuppression(args: UpdateAuditSuppressionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAuditSuppressionCommandOutput>;
    updateAuditSuppression(args: UpdateAuditSuppressionCommandInput, cb: (err: any, data?: UpdateAuditSuppressionCommandOutput) => void): void;
    updateAuditSuppression(args: UpdateAuditSuppressionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAuditSuppressionCommandOutput) => void): void;
    /**
     * <p>Updates an authorizer.</p>
     */
    updateAuthorizer(args: UpdateAuthorizerCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAuthorizerCommandOutput>;
    updateAuthorizer(args: UpdateAuthorizerCommandInput, cb: (err: any, data?: UpdateAuthorizerCommandOutput) => void): void;
    updateAuthorizer(args: UpdateAuthorizerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAuthorizerCommandOutput) => void): void;
    /**
     * <p>Updates information about the billing group.</p>
     */
    updateBillingGroup(args: UpdateBillingGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBillingGroupCommandOutput>;
    updateBillingGroup(args: UpdateBillingGroupCommandInput, cb: (err: any, data?: UpdateBillingGroupCommandOutput) => void): void;
    updateBillingGroup(args: UpdateBillingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateBillingGroupCommandOutput) => void): void;
    /**
     * <p>Updates a registered CA certificate.</p>
     */
    updateCACertificate(args: UpdateCACertificateCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCACertificateCommandOutput>;
    updateCACertificate(args: UpdateCACertificateCommandInput, cb: (err: any, data?: UpdateCACertificateCommandOutput) => void): void;
    updateCACertificate(args: UpdateCACertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateCACertificateCommandOutput) => void): void;
    /**
     * <p>Updates the status of the specified certificate. This operation is
     *          idempotent.</p>
     *          <p>Certificates must be in the ACTIVE state to authenticate devices that use
     *          a certificate to connect to AWS IoT.</p>
     *          <p>Within a few minutes of updating a certificate from the ACTIVE state to any other
     *          state, AWS IoT disconnects all devices that used that certificate to connect. Devices cannot
     *          use a certificate that is not in the ACTIVE state to reconnect.</p>
     */
    updateCertificate(args: UpdateCertificateCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCertificateCommandOutput>;
    updateCertificate(args: UpdateCertificateCommandInput, cb: (err: any, data?: UpdateCertificateCommandOutput) => void): void;
    updateCertificate(args: UpdateCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateCertificateCommandOutput) => void): void;
    /**
     * <p>Updates a
     *       Device Defender detect custom metric. </p>
     */
    updateCustomMetric(args: UpdateCustomMetricCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCustomMetricCommandOutput>;
    updateCustomMetric(args: UpdateCustomMetricCommandInput, cb: (err: any, data?: UpdateCustomMetricCommandOutput) => void): void;
    updateCustomMetric(args: UpdateCustomMetricCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateCustomMetricCommandOutput) => void): void;
    /**
     * <p>Updates the definition for a dimension. You
     *       cannot
     *       change the type of a dimension after
     *       it is created (you can delete it and
     *       recreate
     *       it).</p>
     */
    updateDimension(args: UpdateDimensionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDimensionCommandOutput>;
    updateDimension(args: UpdateDimensionCommandInput, cb: (err: any, data?: UpdateDimensionCommandOutput) => void): void;
    updateDimension(args: UpdateDimensionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDimensionCommandOutput) => void): void;
    /**
     * <p>Updates values stored in the domain configuration. Domain configurations for default endpoints can't be updated.</p>
     */
    updateDomainConfiguration(args: UpdateDomainConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDomainConfigurationCommandOutput>;
    updateDomainConfiguration(args: UpdateDomainConfigurationCommandInput, cb: (err: any, data?: UpdateDomainConfigurationCommandOutput) => void): void;
    updateDomainConfiguration(args: UpdateDomainConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDomainConfigurationCommandOutput) => void): void;
    /**
     * <p>Updates a dynamic thing group.</p>
     */
    updateDynamicThingGroup(args: UpdateDynamicThingGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDynamicThingGroupCommandOutput>;
    updateDynamicThingGroup(args: UpdateDynamicThingGroupCommandInput, cb: (err: any, data?: UpdateDynamicThingGroupCommandOutput) => void): void;
    updateDynamicThingGroup(args: UpdateDynamicThingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDynamicThingGroupCommandOutput) => void): void;
    /**
     * <p>Updates the event configurations.</p>
     */
    updateEventConfigurations(args: UpdateEventConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateEventConfigurationsCommandOutput>;
    updateEventConfigurations(args: UpdateEventConfigurationsCommandInput, cb: (err: any, data?: UpdateEventConfigurationsCommandOutput) => void): void;
    updateEventConfigurations(args: UpdateEventConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateEventConfigurationsCommandOutput) => void): void;
    /**
     * <p>Updates the search configuration.</p>
     */
    updateIndexingConfiguration(args: UpdateIndexingConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateIndexingConfigurationCommandOutput>;
    updateIndexingConfiguration(args: UpdateIndexingConfigurationCommandInput, cb: (err: any, data?: UpdateIndexingConfigurationCommandOutput) => void): void;
    updateIndexingConfiguration(args: UpdateIndexingConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateIndexingConfigurationCommandOutput) => void): void;
    /**
     * <p>Updates supported fields of the specified job.</p>
     */
    updateJob(args: UpdateJobCommandInput, options?: __HttpHandlerOptions): Promise<UpdateJobCommandOutput>;
    updateJob(args: UpdateJobCommandInput, cb: (err: any, data?: UpdateJobCommandOutput) => void): void;
    updateJob(args: UpdateJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateJobCommandOutput) => void): void;
    /**
     * <p>Updates the definition for the specified mitigation action.</p>
     */
    updateMitigationAction(args: UpdateMitigationActionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMitigationActionCommandOutput>;
    updateMitigationAction(args: UpdateMitigationActionCommandInput, cb: (err: any, data?: UpdateMitigationActionCommandOutput) => void): void;
    updateMitigationAction(args: UpdateMitigationActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMitigationActionCommandOutput) => void): void;
    /**
     * <p>Updates a fleet provisioning template.</p>
     */
    updateProvisioningTemplate(args: UpdateProvisioningTemplateCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProvisioningTemplateCommandOutput>;
    updateProvisioningTemplate(args: UpdateProvisioningTemplateCommandInput, cb: (err: any, data?: UpdateProvisioningTemplateCommandOutput) => void): void;
    updateProvisioningTemplate(args: UpdateProvisioningTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateProvisioningTemplateCommandOutput) => void): void;
    /**
     * <p>Updates a role alias.</p>
     */
    updateRoleAlias(args: UpdateRoleAliasCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRoleAliasCommandOutput>;
    updateRoleAlias(args: UpdateRoleAliasCommandInput, cb: (err: any, data?: UpdateRoleAliasCommandOutput) => void): void;
    updateRoleAlias(args: UpdateRoleAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRoleAliasCommandOutput) => void): void;
    /**
     * <p>Updates a scheduled audit, including which checks are performed and
     *           how often the audit takes place.</p>
     */
    updateScheduledAudit(args: UpdateScheduledAuditCommandInput, options?: __HttpHandlerOptions): Promise<UpdateScheduledAuditCommandOutput>;
    updateScheduledAudit(args: UpdateScheduledAuditCommandInput, cb: (err: any, data?: UpdateScheduledAuditCommandOutput) => void): void;
    updateScheduledAudit(args: UpdateScheduledAuditCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateScheduledAuditCommandOutput) => void): void;
    /**
     * <p>Updates a Device Defender security profile.</p>
     */
    updateSecurityProfile(args: UpdateSecurityProfileCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSecurityProfileCommandOutput>;
    updateSecurityProfile(args: UpdateSecurityProfileCommandInput, cb: (err: any, data?: UpdateSecurityProfileCommandOutput) => void): void;
    updateSecurityProfile(args: UpdateSecurityProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateSecurityProfileCommandOutput) => void): void;
    /**
     * <p>Updates an existing stream. The stream version will be incremented by one.</p>
     */
    updateStream(args: UpdateStreamCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStreamCommandOutput>;
    updateStream(args: UpdateStreamCommandInput, cb: (err: any, data?: UpdateStreamCommandOutput) => void): void;
    updateStream(args: UpdateStreamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateStreamCommandOutput) => void): void;
    /**
     * <p>Updates the data for a thing.</p>
     */
    updateThing(args: UpdateThingCommandInput, options?: __HttpHandlerOptions): Promise<UpdateThingCommandOutput>;
    updateThing(args: UpdateThingCommandInput, cb: (err: any, data?: UpdateThingCommandOutput) => void): void;
    updateThing(args: UpdateThingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateThingCommandOutput) => void): void;
    /**
     * <p>Update a thing group.</p>
     */
    updateThingGroup(args: UpdateThingGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateThingGroupCommandOutput>;
    updateThingGroup(args: UpdateThingGroupCommandInput, cb: (err: any, data?: UpdateThingGroupCommandOutput) => void): void;
    updateThingGroup(args: UpdateThingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateThingGroupCommandOutput) => void): void;
    /**
     * <p>Updates the groups to which the thing belongs.</p>
     */
    updateThingGroupsForThing(args: UpdateThingGroupsForThingCommandInput, options?: __HttpHandlerOptions): Promise<UpdateThingGroupsForThingCommandOutput>;
    updateThingGroupsForThing(args: UpdateThingGroupsForThingCommandInput, cb: (err: any, data?: UpdateThingGroupsForThingCommandOutput) => void): void;
    updateThingGroupsForThing(args: UpdateThingGroupsForThingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateThingGroupsForThingCommandOutput) => void): void;
    /**
     * <p>Updates a topic rule destination. You use this to change the status, endpoint URL, or
     *          confirmation URL of the destination.</p>
     */
    updateTopicRuleDestination(args: UpdateTopicRuleDestinationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTopicRuleDestinationCommandOutput>;
    updateTopicRuleDestination(args: UpdateTopicRuleDestinationCommandInput, cb: (err: any, data?: UpdateTopicRuleDestinationCommandOutput) => void): void;
    updateTopicRuleDestination(args: UpdateTopicRuleDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTopicRuleDestinationCommandOutput) => void): void;
    /**
     * <p>Validates a Device Defender security profile behaviors specification.</p>
     */
    validateSecurityProfileBehaviors(args: ValidateSecurityProfileBehaviorsCommandInput, options?: __HttpHandlerOptions): Promise<ValidateSecurityProfileBehaviorsCommandOutput>;
    validateSecurityProfileBehaviors(args: ValidateSecurityProfileBehaviorsCommandInput, cb: (err: any, data?: ValidateSecurityProfileBehaviorsCommandOutput) => void): void;
    validateSecurityProfileBehaviors(args: ValidateSecurityProfileBehaviorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ValidateSecurityProfileBehaviorsCommandOutput) => void): void;
}
