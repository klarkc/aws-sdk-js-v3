import { __extends } from "tslib";
import { ConfigServiceClient } from "./ConfigServiceClient";
import { BatchGetAggregateResourceConfigCommand, } from "./commands/BatchGetAggregateResourceConfigCommand";
import { BatchGetResourceConfigCommand, } from "./commands/BatchGetResourceConfigCommand";
import { DeleteAggregationAuthorizationCommand, } from "./commands/DeleteAggregationAuthorizationCommand";
import { DeleteConfigRuleCommand, } from "./commands/DeleteConfigRuleCommand";
import { DeleteConfigurationAggregatorCommand, } from "./commands/DeleteConfigurationAggregatorCommand";
import { DeleteConfigurationRecorderCommand, } from "./commands/DeleteConfigurationRecorderCommand";
import { DeleteConformancePackCommand, } from "./commands/DeleteConformancePackCommand";
import { DeleteDeliveryChannelCommand, } from "./commands/DeleteDeliveryChannelCommand";
import { DeleteEvaluationResultsCommand, } from "./commands/DeleteEvaluationResultsCommand";
import { DeleteOrganizationConfigRuleCommand, } from "./commands/DeleteOrganizationConfigRuleCommand";
import { DeleteOrganizationConformancePackCommand, } from "./commands/DeleteOrganizationConformancePackCommand";
import { DeletePendingAggregationRequestCommand, } from "./commands/DeletePendingAggregationRequestCommand";
import { DeleteRemediationConfigurationCommand, } from "./commands/DeleteRemediationConfigurationCommand";
import { DeleteRemediationExceptionsCommand, } from "./commands/DeleteRemediationExceptionsCommand";
import { DeleteResourceConfigCommand, } from "./commands/DeleteResourceConfigCommand";
import { DeleteRetentionConfigurationCommand, } from "./commands/DeleteRetentionConfigurationCommand";
import { DeleteStoredQueryCommand, } from "./commands/DeleteStoredQueryCommand";
import { DeliverConfigSnapshotCommand, } from "./commands/DeliverConfigSnapshotCommand";
import { DescribeAggregateComplianceByConfigRulesCommand, } from "./commands/DescribeAggregateComplianceByConfigRulesCommand";
import { DescribeAggregateComplianceByConformancePacksCommand, } from "./commands/DescribeAggregateComplianceByConformancePacksCommand";
import { DescribeAggregationAuthorizationsCommand, } from "./commands/DescribeAggregationAuthorizationsCommand";
import { DescribeComplianceByConfigRuleCommand, } from "./commands/DescribeComplianceByConfigRuleCommand";
import { DescribeComplianceByResourceCommand, } from "./commands/DescribeComplianceByResourceCommand";
import { DescribeConfigRuleEvaluationStatusCommand, } from "./commands/DescribeConfigRuleEvaluationStatusCommand";
import { DescribeConfigRulesCommand, } from "./commands/DescribeConfigRulesCommand";
import { DescribeConfigurationAggregatorSourcesStatusCommand, } from "./commands/DescribeConfigurationAggregatorSourcesStatusCommand";
import { DescribeConfigurationAggregatorsCommand, } from "./commands/DescribeConfigurationAggregatorsCommand";
import { DescribeConfigurationRecorderStatusCommand, } from "./commands/DescribeConfigurationRecorderStatusCommand";
import { DescribeConfigurationRecordersCommand, } from "./commands/DescribeConfigurationRecordersCommand";
import { DescribeConformancePackComplianceCommand, } from "./commands/DescribeConformancePackComplianceCommand";
import { DescribeConformancePackStatusCommand, } from "./commands/DescribeConformancePackStatusCommand";
import { DescribeConformancePacksCommand, } from "./commands/DescribeConformancePacksCommand";
import { DescribeDeliveryChannelStatusCommand, } from "./commands/DescribeDeliveryChannelStatusCommand";
import { DescribeDeliveryChannelsCommand, } from "./commands/DescribeDeliveryChannelsCommand";
import { DescribeOrganizationConfigRuleStatusesCommand, } from "./commands/DescribeOrganizationConfigRuleStatusesCommand";
import { DescribeOrganizationConfigRulesCommand, } from "./commands/DescribeOrganizationConfigRulesCommand";
import { DescribeOrganizationConformancePackStatusesCommand, } from "./commands/DescribeOrganizationConformancePackStatusesCommand";
import { DescribeOrganizationConformancePacksCommand, } from "./commands/DescribeOrganizationConformancePacksCommand";
import { DescribePendingAggregationRequestsCommand, } from "./commands/DescribePendingAggregationRequestsCommand";
import { DescribeRemediationConfigurationsCommand, } from "./commands/DescribeRemediationConfigurationsCommand";
import { DescribeRemediationExceptionsCommand, } from "./commands/DescribeRemediationExceptionsCommand";
import { DescribeRemediationExecutionStatusCommand, } from "./commands/DescribeRemediationExecutionStatusCommand";
import { DescribeRetentionConfigurationsCommand, } from "./commands/DescribeRetentionConfigurationsCommand";
import { GetAggregateComplianceDetailsByConfigRuleCommand, } from "./commands/GetAggregateComplianceDetailsByConfigRuleCommand";
import { GetAggregateConfigRuleComplianceSummaryCommand, } from "./commands/GetAggregateConfigRuleComplianceSummaryCommand";
import { GetAggregateConformancePackComplianceSummaryCommand, } from "./commands/GetAggregateConformancePackComplianceSummaryCommand";
import { GetAggregateDiscoveredResourceCountsCommand, } from "./commands/GetAggregateDiscoveredResourceCountsCommand";
import { GetAggregateResourceConfigCommand, } from "./commands/GetAggregateResourceConfigCommand";
import { GetComplianceDetailsByConfigRuleCommand, } from "./commands/GetComplianceDetailsByConfigRuleCommand";
import { GetComplianceDetailsByResourceCommand, } from "./commands/GetComplianceDetailsByResourceCommand";
import { GetComplianceSummaryByConfigRuleCommand, } from "./commands/GetComplianceSummaryByConfigRuleCommand";
import { GetComplianceSummaryByResourceTypeCommand, } from "./commands/GetComplianceSummaryByResourceTypeCommand";
import { GetConformancePackComplianceDetailsCommand, } from "./commands/GetConformancePackComplianceDetailsCommand";
import { GetConformancePackComplianceSummaryCommand, } from "./commands/GetConformancePackComplianceSummaryCommand";
import { GetDiscoveredResourceCountsCommand, } from "./commands/GetDiscoveredResourceCountsCommand";
import { GetOrganizationConfigRuleDetailedStatusCommand, } from "./commands/GetOrganizationConfigRuleDetailedStatusCommand";
import { GetOrganizationConformancePackDetailedStatusCommand, } from "./commands/GetOrganizationConformancePackDetailedStatusCommand";
import { GetResourceConfigHistoryCommand, } from "./commands/GetResourceConfigHistoryCommand";
import { GetStoredQueryCommand, } from "./commands/GetStoredQueryCommand";
import { ListAggregateDiscoveredResourcesCommand, } from "./commands/ListAggregateDiscoveredResourcesCommand";
import { ListDiscoveredResourcesCommand, } from "./commands/ListDiscoveredResourcesCommand";
import { ListStoredQueriesCommand, } from "./commands/ListStoredQueriesCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { PutAggregationAuthorizationCommand, } from "./commands/PutAggregationAuthorizationCommand";
import { PutConfigRuleCommand, } from "./commands/PutConfigRuleCommand";
import { PutConfigurationAggregatorCommand, } from "./commands/PutConfigurationAggregatorCommand";
import { PutConfigurationRecorderCommand, } from "./commands/PutConfigurationRecorderCommand";
import { PutConformancePackCommand, } from "./commands/PutConformancePackCommand";
import { PutDeliveryChannelCommand, } from "./commands/PutDeliveryChannelCommand";
import { PutEvaluationsCommand, } from "./commands/PutEvaluationsCommand";
import { PutExternalEvaluationCommand, } from "./commands/PutExternalEvaluationCommand";
import { PutOrganizationConfigRuleCommand, } from "./commands/PutOrganizationConfigRuleCommand";
import { PutOrganizationConformancePackCommand, } from "./commands/PutOrganizationConformancePackCommand";
import { PutRemediationConfigurationsCommand, } from "./commands/PutRemediationConfigurationsCommand";
import { PutRemediationExceptionsCommand, } from "./commands/PutRemediationExceptionsCommand";
import { PutResourceConfigCommand, } from "./commands/PutResourceConfigCommand";
import { PutRetentionConfigurationCommand, } from "./commands/PutRetentionConfigurationCommand";
import { PutStoredQueryCommand, } from "./commands/PutStoredQueryCommand";
import { SelectAggregateResourceConfigCommand, } from "./commands/SelectAggregateResourceConfigCommand";
import { SelectResourceConfigCommand, } from "./commands/SelectResourceConfigCommand";
import { StartConfigRulesEvaluationCommand, } from "./commands/StartConfigRulesEvaluationCommand";
import { StartConfigurationRecorderCommand, } from "./commands/StartConfigurationRecorderCommand";
import { StartRemediationExecutionCommand, } from "./commands/StartRemediationExecutionCommand";
import { StopConfigurationRecorderCommand, } from "./commands/StopConfigurationRecorderCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
/**
 * <fullname>AWS Config</fullname>
 *
 * 		       <p>AWS Config provides a way to keep track of the configurations
 * 			of all the AWS resources associated with your AWS account. You can
 * 			use AWS Config to get the current and historical configurations of
 * 			each AWS resource and also to get information about the relationship
 * 			between the resources. An AWS resource can be an Amazon Compute
 * 			Cloud (Amazon EC2) instance, an Elastic Block Store (EBS) volume, an
 * 			elastic network Interface (ENI), or a security group. For a complete
 * 			list of resources currently supported by AWS Config, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported AWS Resources</a>.</p>
 *
 * 		       <p>You can access and manage AWS Config through the AWS Management
 * 			Console, the AWS Command Line Interface (AWS CLI), the AWS Config
 * 			API, or the AWS SDKs for AWS Config. This reference guide contains
 * 			documentation for the AWS Config API and the AWS CLI commands that
 * 			you can use to manage AWS Config. The AWS Config API uses the
 * 			Signature Version 4 protocol for signing requests. For more
 * 			information about how to sign a request with this protocol, see
 * 				<a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature
 * 				Version 4 Signing Process</a>. For detailed information
 * 			about AWS Config features and their associated actions or commands,
 * 			as well as how to work with AWS Management Console, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html">What Is AWS
 * 				Config</a> in the <i>AWS Config Developer
 * 				Guide</i>.</p>
 */
var ConfigService = /** @class */ (function (_super) {
    __extends(ConfigService, _super);
    function ConfigService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConfigService.prototype.batchGetAggregateResourceConfig = function (args, optionsOrCb, cb) {
        var command = new BatchGetAggregateResourceConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.batchGetResourceConfig = function (args, optionsOrCb, cb) {
        var command = new BatchGetResourceConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.deleteAggregationAuthorization = function (args, optionsOrCb, cb) {
        var command = new DeleteAggregationAuthorizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.deleteConfigRule = function (args, optionsOrCb, cb) {
        var command = new DeleteConfigRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.deleteConfigurationAggregator = function (args, optionsOrCb, cb) {
        var command = new DeleteConfigurationAggregatorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.deleteConfigurationRecorder = function (args, optionsOrCb, cb) {
        var command = new DeleteConfigurationRecorderCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.deleteConformancePack = function (args, optionsOrCb, cb) {
        var command = new DeleteConformancePackCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.deleteDeliveryChannel = function (args, optionsOrCb, cb) {
        var command = new DeleteDeliveryChannelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.deleteEvaluationResults = function (args, optionsOrCb, cb) {
        var command = new DeleteEvaluationResultsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.deleteOrganizationConfigRule = function (args, optionsOrCb, cb) {
        var command = new DeleteOrganizationConfigRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.deleteOrganizationConformancePack = function (args, optionsOrCb, cb) {
        var command = new DeleteOrganizationConformancePackCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.deletePendingAggregationRequest = function (args, optionsOrCb, cb) {
        var command = new DeletePendingAggregationRequestCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.deleteRemediationConfiguration = function (args, optionsOrCb, cb) {
        var command = new DeleteRemediationConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.deleteRemediationExceptions = function (args, optionsOrCb, cb) {
        var command = new DeleteRemediationExceptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.deleteResourceConfig = function (args, optionsOrCb, cb) {
        var command = new DeleteResourceConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.deleteRetentionConfiguration = function (args, optionsOrCb, cb) {
        var command = new DeleteRetentionConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.deleteStoredQuery = function (args, optionsOrCb, cb) {
        var command = new DeleteStoredQueryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.deliverConfigSnapshot = function (args, optionsOrCb, cb) {
        var command = new DeliverConfigSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeAggregateComplianceByConfigRules = function (args, optionsOrCb, cb) {
        var command = new DescribeAggregateComplianceByConfigRulesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeAggregateComplianceByConformancePacks = function (args, optionsOrCb, cb) {
        var command = new DescribeAggregateComplianceByConformancePacksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeAggregationAuthorizations = function (args, optionsOrCb, cb) {
        var command = new DescribeAggregationAuthorizationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeComplianceByConfigRule = function (args, optionsOrCb, cb) {
        var command = new DescribeComplianceByConfigRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeComplianceByResource = function (args, optionsOrCb, cb) {
        var command = new DescribeComplianceByResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeConfigRuleEvaluationStatus = function (args, optionsOrCb, cb) {
        var command = new DescribeConfigRuleEvaluationStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeConfigRules = function (args, optionsOrCb, cb) {
        var command = new DescribeConfigRulesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeConfigurationAggregators = function (args, optionsOrCb, cb) {
        var command = new DescribeConfigurationAggregatorsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeConfigurationAggregatorSourcesStatus = function (args, optionsOrCb, cb) {
        var command = new DescribeConfigurationAggregatorSourcesStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeConfigurationRecorders = function (args, optionsOrCb, cb) {
        var command = new DescribeConfigurationRecordersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeConfigurationRecorderStatus = function (args, optionsOrCb, cb) {
        var command = new DescribeConfigurationRecorderStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeConformancePackCompliance = function (args, optionsOrCb, cb) {
        var command = new DescribeConformancePackComplianceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeConformancePacks = function (args, optionsOrCb, cb) {
        var command = new DescribeConformancePacksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeConformancePackStatus = function (args, optionsOrCb, cb) {
        var command = new DescribeConformancePackStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeDeliveryChannels = function (args, optionsOrCb, cb) {
        var command = new DescribeDeliveryChannelsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeDeliveryChannelStatus = function (args, optionsOrCb, cb) {
        var command = new DescribeDeliveryChannelStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeOrganizationConfigRules = function (args, optionsOrCb, cb) {
        var command = new DescribeOrganizationConfigRulesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeOrganizationConfigRuleStatuses = function (args, optionsOrCb, cb) {
        var command = new DescribeOrganizationConfigRuleStatusesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeOrganizationConformancePacks = function (args, optionsOrCb, cb) {
        var command = new DescribeOrganizationConformancePacksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeOrganizationConformancePackStatuses = function (args, optionsOrCb, cb) {
        var command = new DescribeOrganizationConformancePackStatusesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describePendingAggregationRequests = function (args, optionsOrCb, cb) {
        var command = new DescribePendingAggregationRequestsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeRemediationConfigurations = function (args, optionsOrCb, cb) {
        var command = new DescribeRemediationConfigurationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeRemediationExceptions = function (args, optionsOrCb, cb) {
        var command = new DescribeRemediationExceptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeRemediationExecutionStatus = function (args, optionsOrCb, cb) {
        var command = new DescribeRemediationExecutionStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.describeRetentionConfigurations = function (args, optionsOrCb, cb) {
        var command = new DescribeRetentionConfigurationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.getAggregateComplianceDetailsByConfigRule = function (args, optionsOrCb, cb) {
        var command = new GetAggregateComplianceDetailsByConfigRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.getAggregateConfigRuleComplianceSummary = function (args, optionsOrCb, cb) {
        var command = new GetAggregateConfigRuleComplianceSummaryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.getAggregateConformancePackComplianceSummary = function (args, optionsOrCb, cb) {
        var command = new GetAggregateConformancePackComplianceSummaryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.getAggregateDiscoveredResourceCounts = function (args, optionsOrCb, cb) {
        var command = new GetAggregateDiscoveredResourceCountsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.getAggregateResourceConfig = function (args, optionsOrCb, cb) {
        var command = new GetAggregateResourceConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.getComplianceDetailsByConfigRule = function (args, optionsOrCb, cb) {
        var command = new GetComplianceDetailsByConfigRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.getComplianceDetailsByResource = function (args, optionsOrCb, cb) {
        var command = new GetComplianceDetailsByResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.getComplianceSummaryByConfigRule = function (args, optionsOrCb, cb) {
        var command = new GetComplianceSummaryByConfigRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.getComplianceSummaryByResourceType = function (args, optionsOrCb, cb) {
        var command = new GetComplianceSummaryByResourceTypeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.getConformancePackComplianceDetails = function (args, optionsOrCb, cb) {
        var command = new GetConformancePackComplianceDetailsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.getConformancePackComplianceSummary = function (args, optionsOrCb, cb) {
        var command = new GetConformancePackComplianceSummaryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.getDiscoveredResourceCounts = function (args, optionsOrCb, cb) {
        var command = new GetDiscoveredResourceCountsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.getOrganizationConfigRuleDetailedStatus = function (args, optionsOrCb, cb) {
        var command = new GetOrganizationConfigRuleDetailedStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.getOrganizationConformancePackDetailedStatus = function (args, optionsOrCb, cb) {
        var command = new GetOrganizationConformancePackDetailedStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.getResourceConfigHistory = function (args, optionsOrCb, cb) {
        var command = new GetResourceConfigHistoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.getStoredQuery = function (args, optionsOrCb, cb) {
        var command = new GetStoredQueryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.listAggregateDiscoveredResources = function (args, optionsOrCb, cb) {
        var command = new ListAggregateDiscoveredResourcesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.listDiscoveredResources = function (args, optionsOrCb, cb) {
        var command = new ListDiscoveredResourcesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.listStoredQueries = function (args, optionsOrCb, cb) {
        var command = new ListStoredQueriesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    ConfigService.prototype.putAggregationAuthorization = function (args, optionsOrCb, cb) {
        var command = new PutAggregationAuthorizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.putConfigRule = function (args, optionsOrCb, cb) {
        var command = new PutConfigRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.putConfigurationAggregator = function (args, optionsOrCb, cb) {
        var command = new PutConfigurationAggregatorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.putConfigurationRecorder = function (args, optionsOrCb, cb) {
        var command = new PutConfigurationRecorderCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.putConformancePack = function (args, optionsOrCb, cb) {
        var command = new PutConformancePackCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.putDeliveryChannel = function (args, optionsOrCb, cb) {
        var command = new PutDeliveryChannelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.putEvaluations = function (args, optionsOrCb, cb) {
        var command = new PutEvaluationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.putExternalEvaluation = function (args, optionsOrCb, cb) {
        var command = new PutExternalEvaluationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.putOrganizationConfigRule = function (args, optionsOrCb, cb) {
        var command = new PutOrganizationConfigRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.putOrganizationConformancePack = function (args, optionsOrCb, cb) {
        var command = new PutOrganizationConformancePackCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.putRemediationConfigurations = function (args, optionsOrCb, cb) {
        var command = new PutRemediationConfigurationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.putRemediationExceptions = function (args, optionsOrCb, cb) {
        var command = new PutRemediationExceptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.putResourceConfig = function (args, optionsOrCb, cb) {
        var command = new PutResourceConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.putRetentionConfiguration = function (args, optionsOrCb, cb) {
        var command = new PutRetentionConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.putStoredQuery = function (args, optionsOrCb, cb) {
        var command = new PutStoredQueryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.selectAggregateResourceConfig = function (args, optionsOrCb, cb) {
        var command = new SelectAggregateResourceConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.selectResourceConfig = function (args, optionsOrCb, cb) {
        var command = new SelectResourceConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.startConfigRulesEvaluation = function (args, optionsOrCb, cb) {
        var command = new StartConfigRulesEvaluationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.startConfigurationRecorder = function (args, optionsOrCb, cb) {
        var command = new StartConfigurationRecorderCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.startRemediationExecution = function (args, optionsOrCb, cb) {
        var command = new StartRemediationExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.stopConfigurationRecorder = function (args, optionsOrCb, cb) {
        var command = new StopConfigurationRecorderCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ConfigService.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    ConfigService.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    return ConfigService;
}(ConfigServiceClient));
export { ConfigService };
//# sourceMappingURL=ConfigService.js.map