"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunScheduledInstancesRequest = exports.ScheduledInstancesLaunchSpecification = exports.ScheduledInstancesPlacement = exports.ScheduledInstancesNetworkInterface = exports.ScheduledInstancesPrivateIpAddressConfig = exports.ScheduledInstancesIpv6Address = exports.ScheduledInstancesMonitoring = exports.ScheduledInstancesIamInstanceProfile = exports.ScheduledInstancesBlockDeviceMapping = exports.ScheduledInstancesEbs = exports.RunInstancesRequest = exports.InstanceMetadataOptionsRequest = exports.LicenseConfigurationRequest = exports.LaunchTemplateSpecification = exports.InstanceMarketOptionsRequest = exports.SpotMarketOptions = exports.HibernationOptionsRequest = exports.EnclaveOptionsRequest = exports.ElasticInferenceAccelerator = exports.CpuOptionsRequest = exports.RevokeSecurityGroupIngressResult = exports.RevokeSecurityGroupIngressRequest = exports.RevokeSecurityGroupEgressResult = exports.RevokeSecurityGroupEgressRequest = exports.RevokeClientVpnIngressResult = exports.RevokeClientVpnIngressRequest = exports.RestoreManagedPrefixListVersionResult = exports.RestoreManagedPrefixListVersionRequest = exports.RestoreAddressToClassicResult = exports.RestoreAddressToClassicRequest = exports.ResetSnapshotAttributeRequest = exports.ResetNetworkInterfaceAttributeRequest = exports.ResetInstanceAttributeRequest = exports.ResetImageAttributeRequest = exports.ResetFpgaImageAttributeResult = exports.ResetFpgaImageAttributeRequest = exports.ResetEbsDefaultKmsKeyIdResult = exports.ResetEbsDefaultKmsKeyIdRequest = exports.ResetAddressAttributeResult = exports.ResetAddressAttributeRequest = exports.RequestSpotInstancesResult = exports.RequestSpotInstancesRequest = exports.RequestSpotLaunchSpecification = exports.RequestSpotFleetResponse = exports.RequestSpotFleetRequest = exports.ReportInstanceStatusRequest = exports.ReplaceTransitGatewayRouteResult = exports.ReplaceTransitGatewayRouteRequest = exports.ReplaceRouteTableAssociationResult = exports.ReplaceRouteTableAssociationRequest = void 0;
exports.WithdrawByoipCidrResult = exports.WithdrawByoipCidrRequest = exports.UpdateSecurityGroupRuleDescriptionsIngressResult = exports.UpdateSecurityGroupRuleDescriptionsIngressRequest = exports.UpdateSecurityGroupRuleDescriptionsEgressResult = exports.UpdateSecurityGroupRuleDescriptionsEgressRequest = exports.UnmonitorInstancesResult = exports.UnmonitorInstancesRequest = exports.UnassignPrivateIpAddressesRequest = exports.UnassignIpv6AddressesResult = exports.UnassignIpv6AddressesRequest = exports.TerminateInstancesResult = exports.TerminateInstancesRequest = exports.TerminateClientVpnConnectionsResult = exports.TerminateConnectionStatus = exports.TerminateClientVpnConnectionsRequest = exports.StopInstancesResult = exports.StopInstancesRequest = exports.StartVpcEndpointServicePrivateDnsVerificationResult = exports.StartVpcEndpointServicePrivateDnsVerificationRequest = exports.StartNetworkInsightsAnalysisResult = exports.StartNetworkInsightsAnalysisRequest = exports.StartInstancesResult = exports.InstanceStateChange = exports.StartInstancesRequest = exports.SendDiagnosticInterruptRequest = exports.SearchTransitGatewayRoutesResult = exports.SearchTransitGatewayRoutesRequest = exports.SearchTransitGatewayMulticastGroupsResult = exports.TransitGatewayMulticastGroup = exports.SearchTransitGatewayMulticastGroupsRequest = exports.SearchLocalGatewayRoutesResult = exports.SearchLocalGatewayRoutesRequest = exports.RunScheduledInstancesResult = void 0;
var ReplaceRouteTableAssociationRequest;
(function (ReplaceRouteTableAssociationRequest) {
    /**
     * @internal
     */
    ReplaceRouteTableAssociationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplaceRouteTableAssociationRequest = exports.ReplaceRouteTableAssociationRequest || (exports.ReplaceRouteTableAssociationRequest = {}));
var ReplaceRouteTableAssociationResult;
(function (ReplaceRouteTableAssociationResult) {
    /**
     * @internal
     */
    ReplaceRouteTableAssociationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplaceRouteTableAssociationResult = exports.ReplaceRouteTableAssociationResult || (exports.ReplaceRouteTableAssociationResult = {}));
var ReplaceTransitGatewayRouteRequest;
(function (ReplaceTransitGatewayRouteRequest) {
    /**
     * @internal
     */
    ReplaceTransitGatewayRouteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplaceTransitGatewayRouteRequest = exports.ReplaceTransitGatewayRouteRequest || (exports.ReplaceTransitGatewayRouteRequest = {}));
var ReplaceTransitGatewayRouteResult;
(function (ReplaceTransitGatewayRouteResult) {
    /**
     * @internal
     */
    ReplaceTransitGatewayRouteResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplaceTransitGatewayRouteResult = exports.ReplaceTransitGatewayRouteResult || (exports.ReplaceTransitGatewayRouteResult = {}));
var ReportInstanceStatusRequest;
(function (ReportInstanceStatusRequest) {
    /**
     * @internal
     */
    ReportInstanceStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReportInstanceStatusRequest = exports.ReportInstanceStatusRequest || (exports.ReportInstanceStatusRequest = {}));
var RequestSpotFleetRequest;
(function (RequestSpotFleetRequest) {
    /**
     * @internal
     */
    RequestSpotFleetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestSpotFleetRequest = exports.RequestSpotFleetRequest || (exports.RequestSpotFleetRequest = {}));
var RequestSpotFleetResponse;
(function (RequestSpotFleetResponse) {
    /**
     * @internal
     */
    RequestSpotFleetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestSpotFleetResponse = exports.RequestSpotFleetResponse || (exports.RequestSpotFleetResponse = {}));
var RequestSpotLaunchSpecification;
(function (RequestSpotLaunchSpecification) {
    /**
     * @internal
     */
    RequestSpotLaunchSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestSpotLaunchSpecification = exports.RequestSpotLaunchSpecification || (exports.RequestSpotLaunchSpecification = {}));
var RequestSpotInstancesRequest;
(function (RequestSpotInstancesRequest) {
    /**
     * @internal
     */
    RequestSpotInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestSpotInstancesRequest = exports.RequestSpotInstancesRequest || (exports.RequestSpotInstancesRequest = {}));
var RequestSpotInstancesResult;
(function (RequestSpotInstancesResult) {
    /**
     * @internal
     */
    RequestSpotInstancesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestSpotInstancesResult = exports.RequestSpotInstancesResult || (exports.RequestSpotInstancesResult = {}));
var ResetAddressAttributeRequest;
(function (ResetAddressAttributeRequest) {
    /**
     * @internal
     */
    ResetAddressAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetAddressAttributeRequest = exports.ResetAddressAttributeRequest || (exports.ResetAddressAttributeRequest = {}));
var ResetAddressAttributeResult;
(function (ResetAddressAttributeResult) {
    /**
     * @internal
     */
    ResetAddressAttributeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetAddressAttributeResult = exports.ResetAddressAttributeResult || (exports.ResetAddressAttributeResult = {}));
var ResetEbsDefaultKmsKeyIdRequest;
(function (ResetEbsDefaultKmsKeyIdRequest) {
    /**
     * @internal
     */
    ResetEbsDefaultKmsKeyIdRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetEbsDefaultKmsKeyIdRequest = exports.ResetEbsDefaultKmsKeyIdRequest || (exports.ResetEbsDefaultKmsKeyIdRequest = {}));
var ResetEbsDefaultKmsKeyIdResult;
(function (ResetEbsDefaultKmsKeyIdResult) {
    /**
     * @internal
     */
    ResetEbsDefaultKmsKeyIdResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetEbsDefaultKmsKeyIdResult = exports.ResetEbsDefaultKmsKeyIdResult || (exports.ResetEbsDefaultKmsKeyIdResult = {}));
var ResetFpgaImageAttributeRequest;
(function (ResetFpgaImageAttributeRequest) {
    /**
     * @internal
     */
    ResetFpgaImageAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetFpgaImageAttributeRequest = exports.ResetFpgaImageAttributeRequest || (exports.ResetFpgaImageAttributeRequest = {}));
var ResetFpgaImageAttributeResult;
(function (ResetFpgaImageAttributeResult) {
    /**
     * @internal
     */
    ResetFpgaImageAttributeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetFpgaImageAttributeResult = exports.ResetFpgaImageAttributeResult || (exports.ResetFpgaImageAttributeResult = {}));
var ResetImageAttributeRequest;
(function (ResetImageAttributeRequest) {
    /**
     * @internal
     */
    ResetImageAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetImageAttributeRequest = exports.ResetImageAttributeRequest || (exports.ResetImageAttributeRequest = {}));
var ResetInstanceAttributeRequest;
(function (ResetInstanceAttributeRequest) {
    /**
     * @internal
     */
    ResetInstanceAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetInstanceAttributeRequest = exports.ResetInstanceAttributeRequest || (exports.ResetInstanceAttributeRequest = {}));
var ResetNetworkInterfaceAttributeRequest;
(function (ResetNetworkInterfaceAttributeRequest) {
    /**
     * @internal
     */
    ResetNetworkInterfaceAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetNetworkInterfaceAttributeRequest = exports.ResetNetworkInterfaceAttributeRequest || (exports.ResetNetworkInterfaceAttributeRequest = {}));
var ResetSnapshotAttributeRequest;
(function (ResetSnapshotAttributeRequest) {
    /**
     * @internal
     */
    ResetSnapshotAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetSnapshotAttributeRequest = exports.ResetSnapshotAttributeRequest || (exports.ResetSnapshotAttributeRequest = {}));
var RestoreAddressToClassicRequest;
(function (RestoreAddressToClassicRequest) {
    /**
     * @internal
     */
    RestoreAddressToClassicRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreAddressToClassicRequest = exports.RestoreAddressToClassicRequest || (exports.RestoreAddressToClassicRequest = {}));
var RestoreAddressToClassicResult;
(function (RestoreAddressToClassicResult) {
    /**
     * @internal
     */
    RestoreAddressToClassicResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreAddressToClassicResult = exports.RestoreAddressToClassicResult || (exports.RestoreAddressToClassicResult = {}));
var RestoreManagedPrefixListVersionRequest;
(function (RestoreManagedPrefixListVersionRequest) {
    /**
     * @internal
     */
    RestoreManagedPrefixListVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreManagedPrefixListVersionRequest = exports.RestoreManagedPrefixListVersionRequest || (exports.RestoreManagedPrefixListVersionRequest = {}));
var RestoreManagedPrefixListVersionResult;
(function (RestoreManagedPrefixListVersionResult) {
    /**
     * @internal
     */
    RestoreManagedPrefixListVersionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreManagedPrefixListVersionResult = exports.RestoreManagedPrefixListVersionResult || (exports.RestoreManagedPrefixListVersionResult = {}));
var RevokeClientVpnIngressRequest;
(function (RevokeClientVpnIngressRequest) {
    /**
     * @internal
     */
    RevokeClientVpnIngressRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeClientVpnIngressRequest = exports.RevokeClientVpnIngressRequest || (exports.RevokeClientVpnIngressRequest = {}));
var RevokeClientVpnIngressResult;
(function (RevokeClientVpnIngressResult) {
    /**
     * @internal
     */
    RevokeClientVpnIngressResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeClientVpnIngressResult = exports.RevokeClientVpnIngressResult || (exports.RevokeClientVpnIngressResult = {}));
var RevokeSecurityGroupEgressRequest;
(function (RevokeSecurityGroupEgressRequest) {
    /**
     * @internal
     */
    RevokeSecurityGroupEgressRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeSecurityGroupEgressRequest = exports.RevokeSecurityGroupEgressRequest || (exports.RevokeSecurityGroupEgressRequest = {}));
var RevokeSecurityGroupEgressResult;
(function (RevokeSecurityGroupEgressResult) {
    /**
     * @internal
     */
    RevokeSecurityGroupEgressResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeSecurityGroupEgressResult = exports.RevokeSecurityGroupEgressResult || (exports.RevokeSecurityGroupEgressResult = {}));
var RevokeSecurityGroupIngressRequest;
(function (RevokeSecurityGroupIngressRequest) {
    /**
     * @internal
     */
    RevokeSecurityGroupIngressRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeSecurityGroupIngressRequest = exports.RevokeSecurityGroupIngressRequest || (exports.RevokeSecurityGroupIngressRequest = {}));
var RevokeSecurityGroupIngressResult;
(function (RevokeSecurityGroupIngressResult) {
    /**
     * @internal
     */
    RevokeSecurityGroupIngressResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeSecurityGroupIngressResult = exports.RevokeSecurityGroupIngressResult || (exports.RevokeSecurityGroupIngressResult = {}));
var CpuOptionsRequest;
(function (CpuOptionsRequest) {
    /**
     * @internal
     */
    CpuOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CpuOptionsRequest = exports.CpuOptionsRequest || (exports.CpuOptionsRequest = {}));
var ElasticInferenceAccelerator;
(function (ElasticInferenceAccelerator) {
    /**
     * @internal
     */
    ElasticInferenceAccelerator.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ElasticInferenceAccelerator = exports.ElasticInferenceAccelerator || (exports.ElasticInferenceAccelerator = {}));
var EnclaveOptionsRequest;
(function (EnclaveOptionsRequest) {
    /**
     * @internal
     */
    EnclaveOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnclaveOptionsRequest = exports.EnclaveOptionsRequest || (exports.EnclaveOptionsRequest = {}));
var HibernationOptionsRequest;
(function (HibernationOptionsRequest) {
    /**
     * @internal
     */
    HibernationOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HibernationOptionsRequest = exports.HibernationOptionsRequest || (exports.HibernationOptionsRequest = {}));
var SpotMarketOptions;
(function (SpotMarketOptions) {
    /**
     * @internal
     */
    SpotMarketOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SpotMarketOptions = exports.SpotMarketOptions || (exports.SpotMarketOptions = {}));
var InstanceMarketOptionsRequest;
(function (InstanceMarketOptionsRequest) {
    /**
     * @internal
     */
    InstanceMarketOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceMarketOptionsRequest = exports.InstanceMarketOptionsRequest || (exports.InstanceMarketOptionsRequest = {}));
var LaunchTemplateSpecification;
(function (LaunchTemplateSpecification) {
    /**
     * @internal
     */
    LaunchTemplateSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateSpecification = exports.LaunchTemplateSpecification || (exports.LaunchTemplateSpecification = {}));
var LicenseConfigurationRequest;
(function (LicenseConfigurationRequest) {
    /**
     * @internal
     */
    LicenseConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LicenseConfigurationRequest = exports.LicenseConfigurationRequest || (exports.LicenseConfigurationRequest = {}));
var InstanceMetadataOptionsRequest;
(function (InstanceMetadataOptionsRequest) {
    /**
     * @internal
     */
    InstanceMetadataOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceMetadataOptionsRequest = exports.InstanceMetadataOptionsRequest || (exports.InstanceMetadataOptionsRequest = {}));
var RunInstancesRequest;
(function (RunInstancesRequest) {
    /**
     * @internal
     */
    RunInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RunInstancesRequest = exports.RunInstancesRequest || (exports.RunInstancesRequest = {}));
var ScheduledInstancesEbs;
(function (ScheduledInstancesEbs) {
    /**
     * @internal
     */
    ScheduledInstancesEbs.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledInstancesEbs = exports.ScheduledInstancesEbs || (exports.ScheduledInstancesEbs = {}));
var ScheduledInstancesBlockDeviceMapping;
(function (ScheduledInstancesBlockDeviceMapping) {
    /**
     * @internal
     */
    ScheduledInstancesBlockDeviceMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledInstancesBlockDeviceMapping = exports.ScheduledInstancesBlockDeviceMapping || (exports.ScheduledInstancesBlockDeviceMapping = {}));
var ScheduledInstancesIamInstanceProfile;
(function (ScheduledInstancesIamInstanceProfile) {
    /**
     * @internal
     */
    ScheduledInstancesIamInstanceProfile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledInstancesIamInstanceProfile = exports.ScheduledInstancesIamInstanceProfile || (exports.ScheduledInstancesIamInstanceProfile = {}));
var ScheduledInstancesMonitoring;
(function (ScheduledInstancesMonitoring) {
    /**
     * @internal
     */
    ScheduledInstancesMonitoring.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledInstancesMonitoring = exports.ScheduledInstancesMonitoring || (exports.ScheduledInstancesMonitoring = {}));
var ScheduledInstancesIpv6Address;
(function (ScheduledInstancesIpv6Address) {
    /**
     * @internal
     */
    ScheduledInstancesIpv6Address.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledInstancesIpv6Address = exports.ScheduledInstancesIpv6Address || (exports.ScheduledInstancesIpv6Address = {}));
var ScheduledInstancesPrivateIpAddressConfig;
(function (ScheduledInstancesPrivateIpAddressConfig) {
    /**
     * @internal
     */
    ScheduledInstancesPrivateIpAddressConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledInstancesPrivateIpAddressConfig = exports.ScheduledInstancesPrivateIpAddressConfig || (exports.ScheduledInstancesPrivateIpAddressConfig = {}));
var ScheduledInstancesNetworkInterface;
(function (ScheduledInstancesNetworkInterface) {
    /**
     * @internal
     */
    ScheduledInstancesNetworkInterface.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledInstancesNetworkInterface = exports.ScheduledInstancesNetworkInterface || (exports.ScheduledInstancesNetworkInterface = {}));
var ScheduledInstancesPlacement;
(function (ScheduledInstancesPlacement) {
    /**
     * @internal
     */
    ScheduledInstancesPlacement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledInstancesPlacement = exports.ScheduledInstancesPlacement || (exports.ScheduledInstancesPlacement = {}));
var ScheduledInstancesLaunchSpecification;
(function (ScheduledInstancesLaunchSpecification) {
    /**
     * @internal
     */
    ScheduledInstancesLaunchSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledInstancesLaunchSpecification = exports.ScheduledInstancesLaunchSpecification || (exports.ScheduledInstancesLaunchSpecification = {}));
var RunScheduledInstancesRequest;
(function (RunScheduledInstancesRequest) {
    /**
     * @internal
     */
    RunScheduledInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RunScheduledInstancesRequest = exports.RunScheduledInstancesRequest || (exports.RunScheduledInstancesRequest = {}));
var RunScheduledInstancesResult;
(function (RunScheduledInstancesResult) {
    /**
     * @internal
     */
    RunScheduledInstancesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RunScheduledInstancesResult = exports.RunScheduledInstancesResult || (exports.RunScheduledInstancesResult = {}));
var SearchLocalGatewayRoutesRequest;
(function (SearchLocalGatewayRoutesRequest) {
    /**
     * @internal
     */
    SearchLocalGatewayRoutesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchLocalGatewayRoutesRequest = exports.SearchLocalGatewayRoutesRequest || (exports.SearchLocalGatewayRoutesRequest = {}));
var SearchLocalGatewayRoutesResult;
(function (SearchLocalGatewayRoutesResult) {
    /**
     * @internal
     */
    SearchLocalGatewayRoutesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchLocalGatewayRoutesResult = exports.SearchLocalGatewayRoutesResult || (exports.SearchLocalGatewayRoutesResult = {}));
var SearchTransitGatewayMulticastGroupsRequest;
(function (SearchTransitGatewayMulticastGroupsRequest) {
    /**
     * @internal
     */
    SearchTransitGatewayMulticastGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchTransitGatewayMulticastGroupsRequest = exports.SearchTransitGatewayMulticastGroupsRequest || (exports.SearchTransitGatewayMulticastGroupsRequest = {}));
var TransitGatewayMulticastGroup;
(function (TransitGatewayMulticastGroup) {
    /**
     * @internal
     */
    TransitGatewayMulticastGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayMulticastGroup = exports.TransitGatewayMulticastGroup || (exports.TransitGatewayMulticastGroup = {}));
var SearchTransitGatewayMulticastGroupsResult;
(function (SearchTransitGatewayMulticastGroupsResult) {
    /**
     * @internal
     */
    SearchTransitGatewayMulticastGroupsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchTransitGatewayMulticastGroupsResult = exports.SearchTransitGatewayMulticastGroupsResult || (exports.SearchTransitGatewayMulticastGroupsResult = {}));
var SearchTransitGatewayRoutesRequest;
(function (SearchTransitGatewayRoutesRequest) {
    /**
     * @internal
     */
    SearchTransitGatewayRoutesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchTransitGatewayRoutesRequest = exports.SearchTransitGatewayRoutesRequest || (exports.SearchTransitGatewayRoutesRequest = {}));
var SearchTransitGatewayRoutesResult;
(function (SearchTransitGatewayRoutesResult) {
    /**
     * @internal
     */
    SearchTransitGatewayRoutesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchTransitGatewayRoutesResult = exports.SearchTransitGatewayRoutesResult || (exports.SearchTransitGatewayRoutesResult = {}));
var SendDiagnosticInterruptRequest;
(function (SendDiagnosticInterruptRequest) {
    /**
     * @internal
     */
    SendDiagnosticInterruptRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendDiagnosticInterruptRequest = exports.SendDiagnosticInterruptRequest || (exports.SendDiagnosticInterruptRequest = {}));
var StartInstancesRequest;
(function (StartInstancesRequest) {
    /**
     * @internal
     */
    StartInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartInstancesRequest = exports.StartInstancesRequest || (exports.StartInstancesRequest = {}));
var InstanceStateChange;
(function (InstanceStateChange) {
    /**
     * @internal
     */
    InstanceStateChange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceStateChange = exports.InstanceStateChange || (exports.InstanceStateChange = {}));
var StartInstancesResult;
(function (StartInstancesResult) {
    /**
     * @internal
     */
    StartInstancesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartInstancesResult = exports.StartInstancesResult || (exports.StartInstancesResult = {}));
var StartNetworkInsightsAnalysisRequest;
(function (StartNetworkInsightsAnalysisRequest) {
    /**
     * @internal
     */
    StartNetworkInsightsAnalysisRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartNetworkInsightsAnalysisRequest = exports.StartNetworkInsightsAnalysisRequest || (exports.StartNetworkInsightsAnalysisRequest = {}));
var StartNetworkInsightsAnalysisResult;
(function (StartNetworkInsightsAnalysisResult) {
    /**
     * @internal
     */
    StartNetworkInsightsAnalysisResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartNetworkInsightsAnalysisResult = exports.StartNetworkInsightsAnalysisResult || (exports.StartNetworkInsightsAnalysisResult = {}));
var StartVpcEndpointServicePrivateDnsVerificationRequest;
(function (StartVpcEndpointServicePrivateDnsVerificationRequest) {
    /**
     * @internal
     */
    StartVpcEndpointServicePrivateDnsVerificationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartVpcEndpointServicePrivateDnsVerificationRequest = exports.StartVpcEndpointServicePrivateDnsVerificationRequest || (exports.StartVpcEndpointServicePrivateDnsVerificationRequest = {}));
var StartVpcEndpointServicePrivateDnsVerificationResult;
(function (StartVpcEndpointServicePrivateDnsVerificationResult) {
    /**
     * @internal
     */
    StartVpcEndpointServicePrivateDnsVerificationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartVpcEndpointServicePrivateDnsVerificationResult = exports.StartVpcEndpointServicePrivateDnsVerificationResult || (exports.StartVpcEndpointServicePrivateDnsVerificationResult = {}));
var StopInstancesRequest;
(function (StopInstancesRequest) {
    /**
     * @internal
     */
    StopInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopInstancesRequest = exports.StopInstancesRequest || (exports.StopInstancesRequest = {}));
var StopInstancesResult;
(function (StopInstancesResult) {
    /**
     * @internal
     */
    StopInstancesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopInstancesResult = exports.StopInstancesResult || (exports.StopInstancesResult = {}));
var TerminateClientVpnConnectionsRequest;
(function (TerminateClientVpnConnectionsRequest) {
    /**
     * @internal
     */
    TerminateClientVpnConnectionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TerminateClientVpnConnectionsRequest = exports.TerminateClientVpnConnectionsRequest || (exports.TerminateClientVpnConnectionsRequest = {}));
var TerminateConnectionStatus;
(function (TerminateConnectionStatus) {
    /**
     * @internal
     */
    TerminateConnectionStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TerminateConnectionStatus = exports.TerminateConnectionStatus || (exports.TerminateConnectionStatus = {}));
var TerminateClientVpnConnectionsResult;
(function (TerminateClientVpnConnectionsResult) {
    /**
     * @internal
     */
    TerminateClientVpnConnectionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TerminateClientVpnConnectionsResult = exports.TerminateClientVpnConnectionsResult || (exports.TerminateClientVpnConnectionsResult = {}));
var TerminateInstancesRequest;
(function (TerminateInstancesRequest) {
    /**
     * @internal
     */
    TerminateInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TerminateInstancesRequest = exports.TerminateInstancesRequest || (exports.TerminateInstancesRequest = {}));
var TerminateInstancesResult;
(function (TerminateInstancesResult) {
    /**
     * @internal
     */
    TerminateInstancesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TerminateInstancesResult = exports.TerminateInstancesResult || (exports.TerminateInstancesResult = {}));
var UnassignIpv6AddressesRequest;
(function (UnassignIpv6AddressesRequest) {
    /**
     * @internal
     */
    UnassignIpv6AddressesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnassignIpv6AddressesRequest = exports.UnassignIpv6AddressesRequest || (exports.UnassignIpv6AddressesRequest = {}));
var UnassignIpv6AddressesResult;
(function (UnassignIpv6AddressesResult) {
    /**
     * @internal
     */
    UnassignIpv6AddressesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnassignIpv6AddressesResult = exports.UnassignIpv6AddressesResult || (exports.UnassignIpv6AddressesResult = {}));
var UnassignPrivateIpAddressesRequest;
(function (UnassignPrivateIpAddressesRequest) {
    /**
     * @internal
     */
    UnassignPrivateIpAddressesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnassignPrivateIpAddressesRequest = exports.UnassignPrivateIpAddressesRequest || (exports.UnassignPrivateIpAddressesRequest = {}));
var UnmonitorInstancesRequest;
(function (UnmonitorInstancesRequest) {
    /**
     * @internal
     */
    UnmonitorInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnmonitorInstancesRequest = exports.UnmonitorInstancesRequest || (exports.UnmonitorInstancesRequest = {}));
var UnmonitorInstancesResult;
(function (UnmonitorInstancesResult) {
    /**
     * @internal
     */
    UnmonitorInstancesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnmonitorInstancesResult = exports.UnmonitorInstancesResult || (exports.UnmonitorInstancesResult = {}));
var UpdateSecurityGroupRuleDescriptionsEgressRequest;
(function (UpdateSecurityGroupRuleDescriptionsEgressRequest) {
    /**
     * @internal
     */
    UpdateSecurityGroupRuleDescriptionsEgressRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSecurityGroupRuleDescriptionsEgressRequest = exports.UpdateSecurityGroupRuleDescriptionsEgressRequest || (exports.UpdateSecurityGroupRuleDescriptionsEgressRequest = {}));
var UpdateSecurityGroupRuleDescriptionsEgressResult;
(function (UpdateSecurityGroupRuleDescriptionsEgressResult) {
    /**
     * @internal
     */
    UpdateSecurityGroupRuleDescriptionsEgressResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSecurityGroupRuleDescriptionsEgressResult = exports.UpdateSecurityGroupRuleDescriptionsEgressResult || (exports.UpdateSecurityGroupRuleDescriptionsEgressResult = {}));
var UpdateSecurityGroupRuleDescriptionsIngressRequest;
(function (UpdateSecurityGroupRuleDescriptionsIngressRequest) {
    /**
     * @internal
     */
    UpdateSecurityGroupRuleDescriptionsIngressRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSecurityGroupRuleDescriptionsIngressRequest = exports.UpdateSecurityGroupRuleDescriptionsIngressRequest || (exports.UpdateSecurityGroupRuleDescriptionsIngressRequest = {}));
var UpdateSecurityGroupRuleDescriptionsIngressResult;
(function (UpdateSecurityGroupRuleDescriptionsIngressResult) {
    /**
     * @internal
     */
    UpdateSecurityGroupRuleDescriptionsIngressResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSecurityGroupRuleDescriptionsIngressResult = exports.UpdateSecurityGroupRuleDescriptionsIngressResult || (exports.UpdateSecurityGroupRuleDescriptionsIngressResult = {}));
var WithdrawByoipCidrRequest;
(function (WithdrawByoipCidrRequest) {
    /**
     * @internal
     */
    WithdrawByoipCidrRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WithdrawByoipCidrRequest = exports.WithdrawByoipCidrRequest || (exports.WithdrawByoipCidrRequest = {}));
var WithdrawByoipCidrResult;
(function (WithdrawByoipCidrResult) {
    /**
     * @internal
     */
    WithdrawByoipCidrResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WithdrawByoipCidrResult = exports.WithdrawByoipCidrResult || (exports.WithdrawByoipCidrResult = {}));
//# sourceMappingURL=models_5.js.map