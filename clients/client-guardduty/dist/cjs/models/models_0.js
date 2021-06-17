"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationType = exports.DestinationProperties = exports.CreateMembersResponse = exports.UnprocessedAccount = exports.CreateMembersRequest = exports.CreateIPSetResponse = exports.CreateIPSetRequest = exports.IpSetFormat = exports.CreateFilterResponse = exports.CreateFilterRequest = exports.FindingCriteria = exports.FilterAction = exports.CreateDetectorResponse = exports.CreateDetectorRequest = exports.FindingPublishingFrequency = exports.DataSourceConfigurations = exports.S3LogsConfiguration = exports.Condition = exports.CloudTrailConfigurationResult = exports.DataSourceStatus = exports.BucketLevelPermissions = exports.BucketPolicy = exports.ArchiveFindingsResponse = exports.ArchiveFindingsRequest = exports.AdminAccount = exports.AdminStatus = exports.Action = exports.PortProbeAction = exports.PortProbeDetail = exports.NetworkConnectionAction = exports.RemotePortDetails = exports.LocalPortDetails = exports.LocalIpDetails = exports.DnsRequestAction = exports.AwsApiCallAction = exports.RemoteIpDetails = exports.Organization = exports.GeoLocation = exports.Country = exports.City = exports.DomainDetails = exports.AccountLevelPermissions = exports.BlockPublicAccess = exports.AccountDetail = exports.AccessKeyDetails = exports.AccessControlList = exports.InternalServerErrorException = exports.BadRequestException = exports.AcceptInvitationResponse = exports.AcceptInvitationRequest = void 0;
exports.IamInstanceProfile = exports.Feedback = exports.Evidence = exports.ThreatIntelligenceDetail = exports.EnableOrganizationAdminAccountResponse = exports.EnableOrganizationAdminAccountRequest = exports.DisassociateMembersResponse = exports.DisassociateMembersRequest = exports.DisassociateFromMasterAccountResponse = exports.DisassociateFromMasterAccountRequest = exports.DisableOrganizationAdminAccountResponse = exports.DisableOrganizationAdminAccountRequest = exports.DetectorStatus = exports.Destination = exports.DescribePublishingDestinationResponse = exports.PublishingStatus = exports.DescribePublishingDestinationRequest = exports.DescribeOrganizationConfigurationResponse = exports.OrganizationDataSourceConfigurationsResult = exports.OrganizationS3LogsConfigurationResult = exports.DescribeOrganizationConfigurationRequest = exports.DeleteThreatIntelSetResponse = exports.DeleteThreatIntelSetRequest = exports.DeletePublishingDestinationResponse = exports.DeletePublishingDestinationRequest = exports.DeleteMembersResponse = exports.DeleteMembersRequest = exports.DeleteIPSetResponse = exports.DeleteIPSetRequest = exports.DeleteInvitationsResponse = exports.DeleteInvitationsRequest = exports.DeleteFilterResponse = exports.DeleteFilterRequest = exports.DeleteDetectorResponse = exports.DeleteDetectorRequest = exports.DefaultServerSideEncryption = exports.DeclineInvitationsResponse = exports.DeclineInvitationsRequest = exports.DataSourceConfigurationsResult = exports.S3LogsConfigurationResult = exports.FlowLogsConfigurationResult = exports.DNSLogsConfigurationResult = exports.DataSource = exports.CreateThreatIntelSetResponse = exports.CreateThreatIntelSetRequest = exports.ThreatIntelSetFormat = exports.CreateSampleFindingsResponse = exports.CreateSampleFindingsRequest = exports.CreatePublishingDestinationResponse = exports.CreatePublishingDestinationRequest = void 0;
exports.UsageStatistics = exports.UsageResourceResult = exports.UsageDataSourceResult = exports.UsageAccountResult = exports.Total = exports.GetUsageStatisticsRequest = exports.UsageStatisticType = exports.UsageCriteria = exports.GetThreatIntelSetResponse = exports.ThreatIntelSetStatus = exports.GetThreatIntelSetRequest = exports.GetMembersResponse = exports.Member = exports.GetMembersRequest = exports.GetMemberDetectorsResponse = exports.MemberDataSourceConfiguration = exports.GetMemberDetectorsRequest = exports.GetMasterAccountResponse = exports.Master = exports.GetMasterAccountRequest = exports.GetIPSetResponse = exports.IpSetStatus = exports.GetIPSetRequest = exports.GetInvitationsCountResponse = exports.GetInvitationsCountRequest = exports.GetFindingsStatisticsResponse = exports.GetFindingsStatisticsRequest = exports.GetFindingsResponse = exports.GetFindingsRequest = exports.SortCriteria = exports.OrderBy = exports.GetFilterResponse = exports.GetFilterRequest = exports.GetDetectorResponse = exports.GetDetectorRequest = exports.FindingStatisticType = exports.FindingStatistics = exports.Finding = exports.Service = exports.Resource = exports.S3BucketDetail = exports.PublicAccess = exports.PermissionConfiguration = exports.Owner = exports.InstanceDetails = exports.Tag = exports.ProductCode = exports.NetworkInterface = exports.SecurityGroup = exports.PrivateIpAddressDetails = void 0;
exports.UpdatePublishingDestinationResponse = exports.UpdatePublishingDestinationRequest = exports.UpdateOrganizationConfigurationResponse = exports.UpdateOrganizationConfigurationRequest = exports.OrganizationDataSourceConfigurations = exports.OrganizationS3LogsConfiguration = exports.UpdateMemberDetectorsResponse = exports.UpdateMemberDetectorsRequest = exports.UpdateIPSetResponse = exports.UpdateIPSetRequest = exports.UpdateFindingsFeedbackResponse = exports.UpdateFindingsFeedbackRequest = exports.UpdateFilterResponse = exports.UpdateFilterRequest = exports.UpdateDetectorResponse = exports.UpdateDetectorRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.UnarchiveFindingsResponse = exports.UnarchiveFindingsRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.StopMonitoringMembersResponse = exports.StopMonitoringMembersRequest = exports.StartMonitoringMembersResponse = exports.StartMonitoringMembersRequest = exports.ListThreatIntelSetsResponse = exports.ListThreatIntelSetsRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListPublishingDestinationsResponse = exports.ListPublishingDestinationsRequest = exports.ListOrganizationAdminAccountsResponse = exports.ListOrganizationAdminAccountsRequest = exports.ListMembersResponse = exports.ListMembersRequest = exports.ListIPSetsResponse = exports.ListIPSetsRequest = exports.ListInvitationsResponse = exports.Invitation = exports.ListInvitationsRequest = exports.ListFindingsResponse = exports.ListFindingsRequest = exports.ListFiltersResponse = exports.ListFiltersRequest = exports.ListDetectorsResponse = exports.ListDetectorsRequest = exports.InviteMembersResponse = exports.InviteMembersRequest = exports.GetUsageStatisticsResponse = void 0;
exports.UpdateThreatIntelSetResponse = exports.UpdateThreatIntelSetRequest = void 0;
var AcceptInvitationRequest;
(function (AcceptInvitationRequest) {
    /**
     * @internal
     */
    AcceptInvitationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptInvitationRequest = exports.AcceptInvitationRequest || (exports.AcceptInvitationRequest = {}));
var AcceptInvitationResponse;
(function (AcceptInvitationResponse) {
    /**
     * @internal
     */
    AcceptInvitationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptInvitationResponse = exports.AcceptInvitationResponse || (exports.AcceptInvitationResponse = {}));
var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var InternalServerErrorException;
(function (InternalServerErrorException) {
    /**
     * @internal
     */
    InternalServerErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerErrorException = exports.InternalServerErrorException || (exports.InternalServerErrorException = {}));
var AccessControlList;
(function (AccessControlList) {
    /**
     * @internal
     */
    AccessControlList.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessControlList = exports.AccessControlList || (exports.AccessControlList = {}));
var AccessKeyDetails;
(function (AccessKeyDetails) {
    /**
     * @internal
     */
    AccessKeyDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessKeyDetails = exports.AccessKeyDetails || (exports.AccessKeyDetails = {}));
var AccountDetail;
(function (AccountDetail) {
    /**
     * @internal
     */
    AccountDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountDetail = exports.AccountDetail || (exports.AccountDetail = {}));
var BlockPublicAccess;
(function (BlockPublicAccess) {
    /**
     * @internal
     */
    BlockPublicAccess.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BlockPublicAccess = exports.BlockPublicAccess || (exports.BlockPublicAccess = {}));
var AccountLevelPermissions;
(function (AccountLevelPermissions) {
    /**
     * @internal
     */
    AccountLevelPermissions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountLevelPermissions = exports.AccountLevelPermissions || (exports.AccountLevelPermissions = {}));
var DomainDetails;
(function (DomainDetails) {
    /**
     * @internal
     */
    DomainDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainDetails = exports.DomainDetails || (exports.DomainDetails = {}));
var City;
(function (City) {
    /**
     * @internal
     */
    City.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(City = exports.City || (exports.City = {}));
var Country;
(function (Country) {
    /**
     * @internal
     */
    Country.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Country = exports.Country || (exports.Country = {}));
var GeoLocation;
(function (GeoLocation) {
    /**
     * @internal
     */
    GeoLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GeoLocation = exports.GeoLocation || (exports.GeoLocation = {}));
var Organization;
(function (Organization) {
    /**
     * @internal
     */
    Organization.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Organization = exports.Organization || (exports.Organization = {}));
var RemoteIpDetails;
(function (RemoteIpDetails) {
    /**
     * @internal
     */
    RemoteIpDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoteIpDetails = exports.RemoteIpDetails || (exports.RemoteIpDetails = {}));
var AwsApiCallAction;
(function (AwsApiCallAction) {
    /**
     * @internal
     */
    AwsApiCallAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsApiCallAction = exports.AwsApiCallAction || (exports.AwsApiCallAction = {}));
var DnsRequestAction;
(function (DnsRequestAction) {
    /**
     * @internal
     */
    DnsRequestAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DnsRequestAction = exports.DnsRequestAction || (exports.DnsRequestAction = {}));
var LocalIpDetails;
(function (LocalIpDetails) {
    /**
     * @internal
     */
    LocalIpDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LocalIpDetails = exports.LocalIpDetails || (exports.LocalIpDetails = {}));
var LocalPortDetails;
(function (LocalPortDetails) {
    /**
     * @internal
     */
    LocalPortDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LocalPortDetails = exports.LocalPortDetails || (exports.LocalPortDetails = {}));
var RemotePortDetails;
(function (RemotePortDetails) {
    /**
     * @internal
     */
    RemotePortDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemotePortDetails = exports.RemotePortDetails || (exports.RemotePortDetails = {}));
var NetworkConnectionAction;
(function (NetworkConnectionAction) {
    /**
     * @internal
     */
    NetworkConnectionAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkConnectionAction = exports.NetworkConnectionAction || (exports.NetworkConnectionAction = {}));
var PortProbeDetail;
(function (PortProbeDetail) {
    /**
     * @internal
     */
    PortProbeDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PortProbeDetail = exports.PortProbeDetail || (exports.PortProbeDetail = {}));
var PortProbeAction;
(function (PortProbeAction) {
    /**
     * @internal
     */
    PortProbeAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PortProbeAction = exports.PortProbeAction || (exports.PortProbeAction = {}));
var Action;
(function (Action) {
    /**
     * @internal
     */
    Action.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Action = exports.Action || (exports.Action = {}));
var AdminStatus;
(function (AdminStatus) {
    AdminStatus["DISABLE_IN_PROGRESS"] = "DISABLE_IN_PROGRESS";
    AdminStatus["ENABLED"] = "ENABLED";
})(AdminStatus = exports.AdminStatus || (exports.AdminStatus = {}));
var AdminAccount;
(function (AdminAccount) {
    /**
     * @internal
     */
    AdminAccount.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdminAccount = exports.AdminAccount || (exports.AdminAccount = {}));
var ArchiveFindingsRequest;
(function (ArchiveFindingsRequest) {
    /**
     * @internal
     */
    ArchiveFindingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ArchiveFindingsRequest = exports.ArchiveFindingsRequest || (exports.ArchiveFindingsRequest = {}));
var ArchiveFindingsResponse;
(function (ArchiveFindingsResponse) {
    /**
     * @internal
     */
    ArchiveFindingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ArchiveFindingsResponse = exports.ArchiveFindingsResponse || (exports.ArchiveFindingsResponse = {}));
var BucketPolicy;
(function (BucketPolicy) {
    /**
     * @internal
     */
    BucketPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BucketPolicy = exports.BucketPolicy || (exports.BucketPolicy = {}));
var BucketLevelPermissions;
(function (BucketLevelPermissions) {
    /**
     * @internal
     */
    BucketLevelPermissions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BucketLevelPermissions = exports.BucketLevelPermissions || (exports.BucketLevelPermissions = {}));
var DataSourceStatus;
(function (DataSourceStatus) {
    DataSourceStatus["DISABLED"] = "DISABLED";
    DataSourceStatus["ENABLED"] = "ENABLED";
})(DataSourceStatus = exports.DataSourceStatus || (exports.DataSourceStatus = {}));
var CloudTrailConfigurationResult;
(function (CloudTrailConfigurationResult) {
    /**
     * @internal
     */
    CloudTrailConfigurationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudTrailConfigurationResult = exports.CloudTrailConfigurationResult || (exports.CloudTrailConfigurationResult = {}));
var Condition;
(function (Condition) {
    /**
     * @internal
     */
    Condition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Condition = exports.Condition || (exports.Condition = {}));
var S3LogsConfiguration;
(function (S3LogsConfiguration) {
    /**
     * @internal
     */
    S3LogsConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3LogsConfiguration = exports.S3LogsConfiguration || (exports.S3LogsConfiguration = {}));
var DataSourceConfigurations;
(function (DataSourceConfigurations) {
    /**
     * @internal
     */
    DataSourceConfigurations.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataSourceConfigurations = exports.DataSourceConfigurations || (exports.DataSourceConfigurations = {}));
var FindingPublishingFrequency;
(function (FindingPublishingFrequency) {
    FindingPublishingFrequency["FIFTEEN_MINUTES"] = "FIFTEEN_MINUTES";
    FindingPublishingFrequency["ONE_HOUR"] = "ONE_HOUR";
    FindingPublishingFrequency["SIX_HOURS"] = "SIX_HOURS";
})(FindingPublishingFrequency = exports.FindingPublishingFrequency || (exports.FindingPublishingFrequency = {}));
var CreateDetectorRequest;
(function (CreateDetectorRequest) {
    /**
     * @internal
     */
    CreateDetectorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDetectorRequest = exports.CreateDetectorRequest || (exports.CreateDetectorRequest = {}));
var CreateDetectorResponse;
(function (CreateDetectorResponse) {
    /**
     * @internal
     */
    CreateDetectorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDetectorResponse = exports.CreateDetectorResponse || (exports.CreateDetectorResponse = {}));
var FilterAction;
(function (FilterAction) {
    FilterAction["ARCHIVE"] = "ARCHIVE";
    FilterAction["NOOP"] = "NOOP";
})(FilterAction = exports.FilterAction || (exports.FilterAction = {}));
var FindingCriteria;
(function (FindingCriteria) {
    /**
     * @internal
     */
    FindingCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FindingCriteria = exports.FindingCriteria || (exports.FindingCriteria = {}));
var CreateFilterRequest;
(function (CreateFilterRequest) {
    /**
     * @internal
     */
    CreateFilterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFilterRequest = exports.CreateFilterRequest || (exports.CreateFilterRequest = {}));
var CreateFilterResponse;
(function (CreateFilterResponse) {
    /**
     * @internal
     */
    CreateFilterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFilterResponse = exports.CreateFilterResponse || (exports.CreateFilterResponse = {}));
var IpSetFormat;
(function (IpSetFormat) {
    IpSetFormat["ALIEN_VAULT"] = "ALIEN_VAULT";
    IpSetFormat["FIRE_EYE"] = "FIRE_EYE";
    IpSetFormat["OTX_CSV"] = "OTX_CSV";
    IpSetFormat["PROOF_POINT"] = "PROOF_POINT";
    IpSetFormat["STIX"] = "STIX";
    IpSetFormat["TXT"] = "TXT";
})(IpSetFormat = exports.IpSetFormat || (exports.IpSetFormat = {}));
var CreateIPSetRequest;
(function (CreateIPSetRequest) {
    /**
     * @internal
     */
    CreateIPSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateIPSetRequest = exports.CreateIPSetRequest || (exports.CreateIPSetRequest = {}));
var CreateIPSetResponse;
(function (CreateIPSetResponse) {
    /**
     * @internal
     */
    CreateIPSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateIPSetResponse = exports.CreateIPSetResponse || (exports.CreateIPSetResponse = {}));
var CreateMembersRequest;
(function (CreateMembersRequest) {
    /**
     * @internal
     */
    CreateMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMembersRequest = exports.CreateMembersRequest || (exports.CreateMembersRequest = {}));
var UnprocessedAccount;
(function (UnprocessedAccount) {
    /**
     * @internal
     */
    UnprocessedAccount.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnprocessedAccount = exports.UnprocessedAccount || (exports.UnprocessedAccount = {}));
var CreateMembersResponse;
(function (CreateMembersResponse) {
    /**
     * @internal
     */
    CreateMembersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMembersResponse = exports.CreateMembersResponse || (exports.CreateMembersResponse = {}));
var DestinationProperties;
(function (DestinationProperties) {
    /**
     * @internal
     */
    DestinationProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DestinationProperties = exports.DestinationProperties || (exports.DestinationProperties = {}));
var DestinationType;
(function (DestinationType) {
    DestinationType["S3"] = "S3";
})(DestinationType = exports.DestinationType || (exports.DestinationType = {}));
var CreatePublishingDestinationRequest;
(function (CreatePublishingDestinationRequest) {
    /**
     * @internal
     */
    CreatePublishingDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePublishingDestinationRequest = exports.CreatePublishingDestinationRequest || (exports.CreatePublishingDestinationRequest = {}));
var CreatePublishingDestinationResponse;
(function (CreatePublishingDestinationResponse) {
    /**
     * @internal
     */
    CreatePublishingDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePublishingDestinationResponse = exports.CreatePublishingDestinationResponse || (exports.CreatePublishingDestinationResponse = {}));
var CreateSampleFindingsRequest;
(function (CreateSampleFindingsRequest) {
    /**
     * @internal
     */
    CreateSampleFindingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSampleFindingsRequest = exports.CreateSampleFindingsRequest || (exports.CreateSampleFindingsRequest = {}));
var CreateSampleFindingsResponse;
(function (CreateSampleFindingsResponse) {
    /**
     * @internal
     */
    CreateSampleFindingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSampleFindingsResponse = exports.CreateSampleFindingsResponse || (exports.CreateSampleFindingsResponse = {}));
var ThreatIntelSetFormat;
(function (ThreatIntelSetFormat) {
    ThreatIntelSetFormat["ALIEN_VAULT"] = "ALIEN_VAULT";
    ThreatIntelSetFormat["FIRE_EYE"] = "FIRE_EYE";
    ThreatIntelSetFormat["OTX_CSV"] = "OTX_CSV";
    ThreatIntelSetFormat["PROOF_POINT"] = "PROOF_POINT";
    ThreatIntelSetFormat["STIX"] = "STIX";
    ThreatIntelSetFormat["TXT"] = "TXT";
})(ThreatIntelSetFormat = exports.ThreatIntelSetFormat || (exports.ThreatIntelSetFormat = {}));
var CreateThreatIntelSetRequest;
(function (CreateThreatIntelSetRequest) {
    /**
     * @internal
     */
    CreateThreatIntelSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateThreatIntelSetRequest = exports.CreateThreatIntelSetRequest || (exports.CreateThreatIntelSetRequest = {}));
var CreateThreatIntelSetResponse;
(function (CreateThreatIntelSetResponse) {
    /**
     * @internal
     */
    CreateThreatIntelSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateThreatIntelSetResponse = exports.CreateThreatIntelSetResponse || (exports.CreateThreatIntelSetResponse = {}));
var DataSource;
(function (DataSource) {
    DataSource["CLOUD_TRAIL"] = "CLOUD_TRAIL";
    DataSource["DNS_LOGS"] = "DNS_LOGS";
    DataSource["FLOW_LOGS"] = "FLOW_LOGS";
    DataSource["S3_LOGS"] = "S3_LOGS";
})(DataSource = exports.DataSource || (exports.DataSource = {}));
var DNSLogsConfigurationResult;
(function (DNSLogsConfigurationResult) {
    /**
     * @internal
     */
    DNSLogsConfigurationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DNSLogsConfigurationResult = exports.DNSLogsConfigurationResult || (exports.DNSLogsConfigurationResult = {}));
var FlowLogsConfigurationResult;
(function (FlowLogsConfigurationResult) {
    /**
     * @internal
     */
    FlowLogsConfigurationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FlowLogsConfigurationResult = exports.FlowLogsConfigurationResult || (exports.FlowLogsConfigurationResult = {}));
var S3LogsConfigurationResult;
(function (S3LogsConfigurationResult) {
    /**
     * @internal
     */
    S3LogsConfigurationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3LogsConfigurationResult = exports.S3LogsConfigurationResult || (exports.S3LogsConfigurationResult = {}));
var DataSourceConfigurationsResult;
(function (DataSourceConfigurationsResult) {
    /**
     * @internal
     */
    DataSourceConfigurationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataSourceConfigurationsResult = exports.DataSourceConfigurationsResult || (exports.DataSourceConfigurationsResult = {}));
var DeclineInvitationsRequest;
(function (DeclineInvitationsRequest) {
    /**
     * @internal
     */
    DeclineInvitationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeclineInvitationsRequest = exports.DeclineInvitationsRequest || (exports.DeclineInvitationsRequest = {}));
var DeclineInvitationsResponse;
(function (DeclineInvitationsResponse) {
    /**
     * @internal
     */
    DeclineInvitationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeclineInvitationsResponse = exports.DeclineInvitationsResponse || (exports.DeclineInvitationsResponse = {}));
var DefaultServerSideEncryption;
(function (DefaultServerSideEncryption) {
    /**
     * @internal
     */
    DefaultServerSideEncryption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefaultServerSideEncryption = exports.DefaultServerSideEncryption || (exports.DefaultServerSideEncryption = {}));
var DeleteDetectorRequest;
(function (DeleteDetectorRequest) {
    /**
     * @internal
     */
    DeleteDetectorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDetectorRequest = exports.DeleteDetectorRequest || (exports.DeleteDetectorRequest = {}));
var DeleteDetectorResponse;
(function (DeleteDetectorResponse) {
    /**
     * @internal
     */
    DeleteDetectorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDetectorResponse = exports.DeleteDetectorResponse || (exports.DeleteDetectorResponse = {}));
var DeleteFilterRequest;
(function (DeleteFilterRequest) {
    /**
     * @internal
     */
    DeleteFilterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFilterRequest = exports.DeleteFilterRequest || (exports.DeleteFilterRequest = {}));
var DeleteFilterResponse;
(function (DeleteFilterResponse) {
    /**
     * @internal
     */
    DeleteFilterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFilterResponse = exports.DeleteFilterResponse || (exports.DeleteFilterResponse = {}));
var DeleteInvitationsRequest;
(function (DeleteInvitationsRequest) {
    /**
     * @internal
     */
    DeleteInvitationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInvitationsRequest = exports.DeleteInvitationsRequest || (exports.DeleteInvitationsRequest = {}));
var DeleteInvitationsResponse;
(function (DeleteInvitationsResponse) {
    /**
     * @internal
     */
    DeleteInvitationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInvitationsResponse = exports.DeleteInvitationsResponse || (exports.DeleteInvitationsResponse = {}));
var DeleteIPSetRequest;
(function (DeleteIPSetRequest) {
    /**
     * @internal
     */
    DeleteIPSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteIPSetRequest = exports.DeleteIPSetRequest || (exports.DeleteIPSetRequest = {}));
var DeleteIPSetResponse;
(function (DeleteIPSetResponse) {
    /**
     * @internal
     */
    DeleteIPSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteIPSetResponse = exports.DeleteIPSetResponse || (exports.DeleteIPSetResponse = {}));
var DeleteMembersRequest;
(function (DeleteMembersRequest) {
    /**
     * @internal
     */
    DeleteMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMembersRequest = exports.DeleteMembersRequest || (exports.DeleteMembersRequest = {}));
var DeleteMembersResponse;
(function (DeleteMembersResponse) {
    /**
     * @internal
     */
    DeleteMembersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMembersResponse = exports.DeleteMembersResponse || (exports.DeleteMembersResponse = {}));
var DeletePublishingDestinationRequest;
(function (DeletePublishingDestinationRequest) {
    /**
     * @internal
     */
    DeletePublishingDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePublishingDestinationRequest = exports.DeletePublishingDestinationRequest || (exports.DeletePublishingDestinationRequest = {}));
var DeletePublishingDestinationResponse;
(function (DeletePublishingDestinationResponse) {
    /**
     * @internal
     */
    DeletePublishingDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePublishingDestinationResponse = exports.DeletePublishingDestinationResponse || (exports.DeletePublishingDestinationResponse = {}));
var DeleteThreatIntelSetRequest;
(function (DeleteThreatIntelSetRequest) {
    /**
     * @internal
     */
    DeleteThreatIntelSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteThreatIntelSetRequest = exports.DeleteThreatIntelSetRequest || (exports.DeleteThreatIntelSetRequest = {}));
var DeleteThreatIntelSetResponse;
(function (DeleteThreatIntelSetResponse) {
    /**
     * @internal
     */
    DeleteThreatIntelSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteThreatIntelSetResponse = exports.DeleteThreatIntelSetResponse || (exports.DeleteThreatIntelSetResponse = {}));
var DescribeOrganizationConfigurationRequest;
(function (DescribeOrganizationConfigurationRequest) {
    /**
     * @internal
     */
    DescribeOrganizationConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOrganizationConfigurationRequest = exports.DescribeOrganizationConfigurationRequest || (exports.DescribeOrganizationConfigurationRequest = {}));
var OrganizationS3LogsConfigurationResult;
(function (OrganizationS3LogsConfigurationResult) {
    /**
     * @internal
     */
    OrganizationS3LogsConfigurationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationS3LogsConfigurationResult = exports.OrganizationS3LogsConfigurationResult || (exports.OrganizationS3LogsConfigurationResult = {}));
var OrganizationDataSourceConfigurationsResult;
(function (OrganizationDataSourceConfigurationsResult) {
    /**
     * @internal
     */
    OrganizationDataSourceConfigurationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationDataSourceConfigurationsResult = exports.OrganizationDataSourceConfigurationsResult || (exports.OrganizationDataSourceConfigurationsResult = {}));
var DescribeOrganizationConfigurationResponse;
(function (DescribeOrganizationConfigurationResponse) {
    /**
     * @internal
     */
    DescribeOrganizationConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOrganizationConfigurationResponse = exports.DescribeOrganizationConfigurationResponse || (exports.DescribeOrganizationConfigurationResponse = {}));
var DescribePublishingDestinationRequest;
(function (DescribePublishingDestinationRequest) {
    /**
     * @internal
     */
    DescribePublishingDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePublishingDestinationRequest = exports.DescribePublishingDestinationRequest || (exports.DescribePublishingDestinationRequest = {}));
var PublishingStatus;
(function (PublishingStatus) {
    PublishingStatus["PENDING_VERIFICATION"] = "PENDING_VERIFICATION";
    PublishingStatus["PUBLISHING"] = "PUBLISHING";
    PublishingStatus["STOPPED"] = "STOPPED";
    PublishingStatus["UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY"] = "UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY";
})(PublishingStatus = exports.PublishingStatus || (exports.PublishingStatus = {}));
var DescribePublishingDestinationResponse;
(function (DescribePublishingDestinationResponse) {
    /**
     * @internal
     */
    DescribePublishingDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePublishingDestinationResponse = exports.DescribePublishingDestinationResponse || (exports.DescribePublishingDestinationResponse = {}));
var Destination;
(function (Destination) {
    /**
     * @internal
     */
    Destination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Destination = exports.Destination || (exports.Destination = {}));
var DetectorStatus;
(function (DetectorStatus) {
    DetectorStatus["DISABLED"] = "DISABLED";
    DetectorStatus["ENABLED"] = "ENABLED";
})(DetectorStatus = exports.DetectorStatus || (exports.DetectorStatus = {}));
var DisableOrganizationAdminAccountRequest;
(function (DisableOrganizationAdminAccountRequest) {
    /**
     * @internal
     */
    DisableOrganizationAdminAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableOrganizationAdminAccountRequest = exports.DisableOrganizationAdminAccountRequest || (exports.DisableOrganizationAdminAccountRequest = {}));
var DisableOrganizationAdminAccountResponse;
(function (DisableOrganizationAdminAccountResponse) {
    /**
     * @internal
     */
    DisableOrganizationAdminAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableOrganizationAdminAccountResponse = exports.DisableOrganizationAdminAccountResponse || (exports.DisableOrganizationAdminAccountResponse = {}));
var DisassociateFromMasterAccountRequest;
(function (DisassociateFromMasterAccountRequest) {
    /**
     * @internal
     */
    DisassociateFromMasterAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateFromMasterAccountRequest = exports.DisassociateFromMasterAccountRequest || (exports.DisassociateFromMasterAccountRequest = {}));
var DisassociateFromMasterAccountResponse;
(function (DisassociateFromMasterAccountResponse) {
    /**
     * @internal
     */
    DisassociateFromMasterAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateFromMasterAccountResponse = exports.DisassociateFromMasterAccountResponse || (exports.DisassociateFromMasterAccountResponse = {}));
var DisassociateMembersRequest;
(function (DisassociateMembersRequest) {
    /**
     * @internal
     */
    DisassociateMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateMembersRequest = exports.DisassociateMembersRequest || (exports.DisassociateMembersRequest = {}));
var DisassociateMembersResponse;
(function (DisassociateMembersResponse) {
    /**
     * @internal
     */
    DisassociateMembersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateMembersResponse = exports.DisassociateMembersResponse || (exports.DisassociateMembersResponse = {}));
var EnableOrganizationAdminAccountRequest;
(function (EnableOrganizationAdminAccountRequest) {
    /**
     * @internal
     */
    EnableOrganizationAdminAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableOrganizationAdminAccountRequest = exports.EnableOrganizationAdminAccountRequest || (exports.EnableOrganizationAdminAccountRequest = {}));
var EnableOrganizationAdminAccountResponse;
(function (EnableOrganizationAdminAccountResponse) {
    /**
     * @internal
     */
    EnableOrganizationAdminAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableOrganizationAdminAccountResponse = exports.EnableOrganizationAdminAccountResponse || (exports.EnableOrganizationAdminAccountResponse = {}));
var ThreatIntelligenceDetail;
(function (ThreatIntelligenceDetail) {
    /**
     * @internal
     */
    ThreatIntelligenceDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThreatIntelligenceDetail = exports.ThreatIntelligenceDetail || (exports.ThreatIntelligenceDetail = {}));
var Evidence;
(function (Evidence) {
    /**
     * @internal
     */
    Evidence.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Evidence = exports.Evidence || (exports.Evidence = {}));
var Feedback;
(function (Feedback) {
    Feedback["NOT_USEFUL"] = "NOT_USEFUL";
    Feedback["USEFUL"] = "USEFUL";
})(Feedback = exports.Feedback || (exports.Feedback = {}));
var IamInstanceProfile;
(function (IamInstanceProfile) {
    /**
     * @internal
     */
    IamInstanceProfile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IamInstanceProfile = exports.IamInstanceProfile || (exports.IamInstanceProfile = {}));
var PrivateIpAddressDetails;
(function (PrivateIpAddressDetails) {
    /**
     * @internal
     */
    PrivateIpAddressDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PrivateIpAddressDetails = exports.PrivateIpAddressDetails || (exports.PrivateIpAddressDetails = {}));
var SecurityGroup;
(function (SecurityGroup) {
    /**
     * @internal
     */
    SecurityGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SecurityGroup = exports.SecurityGroup || (exports.SecurityGroup = {}));
var NetworkInterface;
(function (NetworkInterface) {
    /**
     * @internal
     */
    NetworkInterface.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkInterface = exports.NetworkInterface || (exports.NetworkInterface = {}));
var ProductCode;
(function (ProductCode) {
    /**
     * @internal
     */
    ProductCode.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProductCode = exports.ProductCode || (exports.ProductCode = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var InstanceDetails;
(function (InstanceDetails) {
    /**
     * @internal
     */
    InstanceDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceDetails = exports.InstanceDetails || (exports.InstanceDetails = {}));
var Owner;
(function (Owner) {
    /**
     * @internal
     */
    Owner.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Owner = exports.Owner || (exports.Owner = {}));
var PermissionConfiguration;
(function (PermissionConfiguration) {
    /**
     * @internal
     */
    PermissionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PermissionConfiguration = exports.PermissionConfiguration || (exports.PermissionConfiguration = {}));
var PublicAccess;
(function (PublicAccess) {
    /**
     * @internal
     */
    PublicAccess.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PublicAccess = exports.PublicAccess || (exports.PublicAccess = {}));
var S3BucketDetail;
(function (S3BucketDetail) {
    /**
     * @internal
     */
    S3BucketDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3BucketDetail = exports.S3BucketDetail || (exports.S3BucketDetail = {}));
var Resource;
(function (Resource) {
    /**
     * @internal
     */
    Resource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Resource = exports.Resource || (exports.Resource = {}));
var Service;
(function (Service) {
    /**
     * @internal
     */
    Service.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Service = exports.Service || (exports.Service = {}));
var Finding;
(function (Finding) {
    /**
     * @internal
     */
    Finding.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Finding = exports.Finding || (exports.Finding = {}));
var FindingStatistics;
(function (FindingStatistics) {
    /**
     * @internal
     */
    FindingStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FindingStatistics = exports.FindingStatistics || (exports.FindingStatistics = {}));
var FindingStatisticType;
(function (FindingStatisticType) {
    FindingStatisticType["COUNT_BY_SEVERITY"] = "COUNT_BY_SEVERITY";
})(FindingStatisticType = exports.FindingStatisticType || (exports.FindingStatisticType = {}));
var GetDetectorRequest;
(function (GetDetectorRequest) {
    /**
     * @internal
     */
    GetDetectorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDetectorRequest = exports.GetDetectorRequest || (exports.GetDetectorRequest = {}));
var GetDetectorResponse;
(function (GetDetectorResponse) {
    /**
     * @internal
     */
    GetDetectorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDetectorResponse = exports.GetDetectorResponse || (exports.GetDetectorResponse = {}));
var GetFilterRequest;
(function (GetFilterRequest) {
    /**
     * @internal
     */
    GetFilterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFilterRequest = exports.GetFilterRequest || (exports.GetFilterRequest = {}));
var GetFilterResponse;
(function (GetFilterResponse) {
    /**
     * @internal
     */
    GetFilterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFilterResponse = exports.GetFilterResponse || (exports.GetFilterResponse = {}));
var OrderBy;
(function (OrderBy) {
    OrderBy["ASC"] = "ASC";
    OrderBy["DESC"] = "DESC";
})(OrderBy = exports.OrderBy || (exports.OrderBy = {}));
var SortCriteria;
(function (SortCriteria) {
    /**
     * @internal
     */
    SortCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SortCriteria = exports.SortCriteria || (exports.SortCriteria = {}));
var GetFindingsRequest;
(function (GetFindingsRequest) {
    /**
     * @internal
     */
    GetFindingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFindingsRequest = exports.GetFindingsRequest || (exports.GetFindingsRequest = {}));
var GetFindingsResponse;
(function (GetFindingsResponse) {
    /**
     * @internal
     */
    GetFindingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFindingsResponse = exports.GetFindingsResponse || (exports.GetFindingsResponse = {}));
var GetFindingsStatisticsRequest;
(function (GetFindingsStatisticsRequest) {
    /**
     * @internal
     */
    GetFindingsStatisticsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFindingsStatisticsRequest = exports.GetFindingsStatisticsRequest || (exports.GetFindingsStatisticsRequest = {}));
var GetFindingsStatisticsResponse;
(function (GetFindingsStatisticsResponse) {
    /**
     * @internal
     */
    GetFindingsStatisticsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFindingsStatisticsResponse = exports.GetFindingsStatisticsResponse || (exports.GetFindingsStatisticsResponse = {}));
var GetInvitationsCountRequest;
(function (GetInvitationsCountRequest) {
    /**
     * @internal
     */
    GetInvitationsCountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInvitationsCountRequest = exports.GetInvitationsCountRequest || (exports.GetInvitationsCountRequest = {}));
var GetInvitationsCountResponse;
(function (GetInvitationsCountResponse) {
    /**
     * @internal
     */
    GetInvitationsCountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInvitationsCountResponse = exports.GetInvitationsCountResponse || (exports.GetInvitationsCountResponse = {}));
var GetIPSetRequest;
(function (GetIPSetRequest) {
    /**
     * @internal
     */
    GetIPSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIPSetRequest = exports.GetIPSetRequest || (exports.GetIPSetRequest = {}));
var IpSetStatus;
(function (IpSetStatus) {
    IpSetStatus["ACTIVATING"] = "ACTIVATING";
    IpSetStatus["ACTIVE"] = "ACTIVE";
    IpSetStatus["DEACTIVATING"] = "DEACTIVATING";
    IpSetStatus["DELETED"] = "DELETED";
    IpSetStatus["DELETE_PENDING"] = "DELETE_PENDING";
    IpSetStatus["ERROR"] = "ERROR";
    IpSetStatus["INACTIVE"] = "INACTIVE";
})(IpSetStatus = exports.IpSetStatus || (exports.IpSetStatus = {}));
var GetIPSetResponse;
(function (GetIPSetResponse) {
    /**
     * @internal
     */
    GetIPSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIPSetResponse = exports.GetIPSetResponse || (exports.GetIPSetResponse = {}));
var GetMasterAccountRequest;
(function (GetMasterAccountRequest) {
    /**
     * @internal
     */
    GetMasterAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMasterAccountRequest = exports.GetMasterAccountRequest || (exports.GetMasterAccountRequest = {}));
var Master;
(function (Master) {
    /**
     * @internal
     */
    Master.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Master = exports.Master || (exports.Master = {}));
var GetMasterAccountResponse;
(function (GetMasterAccountResponse) {
    /**
     * @internal
     */
    GetMasterAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMasterAccountResponse = exports.GetMasterAccountResponse || (exports.GetMasterAccountResponse = {}));
var GetMemberDetectorsRequest;
(function (GetMemberDetectorsRequest) {
    /**
     * @internal
     */
    GetMemberDetectorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMemberDetectorsRequest = exports.GetMemberDetectorsRequest || (exports.GetMemberDetectorsRequest = {}));
var MemberDataSourceConfiguration;
(function (MemberDataSourceConfiguration) {
    /**
     * @internal
     */
    MemberDataSourceConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MemberDataSourceConfiguration = exports.MemberDataSourceConfiguration || (exports.MemberDataSourceConfiguration = {}));
var GetMemberDetectorsResponse;
(function (GetMemberDetectorsResponse) {
    /**
     * @internal
     */
    GetMemberDetectorsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMemberDetectorsResponse = exports.GetMemberDetectorsResponse || (exports.GetMemberDetectorsResponse = {}));
var GetMembersRequest;
(function (GetMembersRequest) {
    /**
     * @internal
     */
    GetMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMembersRequest = exports.GetMembersRequest || (exports.GetMembersRequest = {}));
var Member;
(function (Member) {
    /**
     * @internal
     */
    Member.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Member = exports.Member || (exports.Member = {}));
var GetMembersResponse;
(function (GetMembersResponse) {
    /**
     * @internal
     */
    GetMembersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMembersResponse = exports.GetMembersResponse || (exports.GetMembersResponse = {}));
var GetThreatIntelSetRequest;
(function (GetThreatIntelSetRequest) {
    /**
     * @internal
     */
    GetThreatIntelSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetThreatIntelSetRequest = exports.GetThreatIntelSetRequest || (exports.GetThreatIntelSetRequest = {}));
var ThreatIntelSetStatus;
(function (ThreatIntelSetStatus) {
    ThreatIntelSetStatus["ACTIVATING"] = "ACTIVATING";
    ThreatIntelSetStatus["ACTIVE"] = "ACTIVE";
    ThreatIntelSetStatus["DEACTIVATING"] = "DEACTIVATING";
    ThreatIntelSetStatus["DELETED"] = "DELETED";
    ThreatIntelSetStatus["DELETE_PENDING"] = "DELETE_PENDING";
    ThreatIntelSetStatus["ERROR"] = "ERROR";
    ThreatIntelSetStatus["INACTIVE"] = "INACTIVE";
})(ThreatIntelSetStatus = exports.ThreatIntelSetStatus || (exports.ThreatIntelSetStatus = {}));
var GetThreatIntelSetResponse;
(function (GetThreatIntelSetResponse) {
    /**
     * @internal
     */
    GetThreatIntelSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetThreatIntelSetResponse = exports.GetThreatIntelSetResponse || (exports.GetThreatIntelSetResponse = {}));
var UsageCriteria;
(function (UsageCriteria) {
    /**
     * @internal
     */
    UsageCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UsageCriteria = exports.UsageCriteria || (exports.UsageCriteria = {}));
var UsageStatisticType;
(function (UsageStatisticType) {
    UsageStatisticType["SUM_BY_ACCOUNT"] = "SUM_BY_ACCOUNT";
    UsageStatisticType["SUM_BY_DATA_SOURCE"] = "SUM_BY_DATA_SOURCE";
    UsageStatisticType["SUM_BY_RESOURCE"] = "SUM_BY_RESOURCE";
    UsageStatisticType["TOP_RESOURCES"] = "TOP_RESOURCES";
})(UsageStatisticType = exports.UsageStatisticType || (exports.UsageStatisticType = {}));
var GetUsageStatisticsRequest;
(function (GetUsageStatisticsRequest) {
    /**
     * @internal
     */
    GetUsageStatisticsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUsageStatisticsRequest = exports.GetUsageStatisticsRequest || (exports.GetUsageStatisticsRequest = {}));
var Total;
(function (Total) {
    /**
     * @internal
     */
    Total.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Total = exports.Total || (exports.Total = {}));
var UsageAccountResult;
(function (UsageAccountResult) {
    /**
     * @internal
     */
    UsageAccountResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UsageAccountResult = exports.UsageAccountResult || (exports.UsageAccountResult = {}));
var UsageDataSourceResult;
(function (UsageDataSourceResult) {
    /**
     * @internal
     */
    UsageDataSourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UsageDataSourceResult = exports.UsageDataSourceResult || (exports.UsageDataSourceResult = {}));
var UsageResourceResult;
(function (UsageResourceResult) {
    /**
     * @internal
     */
    UsageResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UsageResourceResult = exports.UsageResourceResult || (exports.UsageResourceResult = {}));
var UsageStatistics;
(function (UsageStatistics) {
    /**
     * @internal
     */
    UsageStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UsageStatistics = exports.UsageStatistics || (exports.UsageStatistics = {}));
var GetUsageStatisticsResponse;
(function (GetUsageStatisticsResponse) {
    /**
     * @internal
     */
    GetUsageStatisticsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUsageStatisticsResponse = exports.GetUsageStatisticsResponse || (exports.GetUsageStatisticsResponse = {}));
var InviteMembersRequest;
(function (InviteMembersRequest) {
    /**
     * @internal
     */
    InviteMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InviteMembersRequest = exports.InviteMembersRequest || (exports.InviteMembersRequest = {}));
var InviteMembersResponse;
(function (InviteMembersResponse) {
    /**
     * @internal
     */
    InviteMembersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InviteMembersResponse = exports.InviteMembersResponse || (exports.InviteMembersResponse = {}));
var ListDetectorsRequest;
(function (ListDetectorsRequest) {
    /**
     * @internal
     */
    ListDetectorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDetectorsRequest = exports.ListDetectorsRequest || (exports.ListDetectorsRequest = {}));
var ListDetectorsResponse;
(function (ListDetectorsResponse) {
    /**
     * @internal
     */
    ListDetectorsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDetectorsResponse = exports.ListDetectorsResponse || (exports.ListDetectorsResponse = {}));
var ListFiltersRequest;
(function (ListFiltersRequest) {
    /**
     * @internal
     */
    ListFiltersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFiltersRequest = exports.ListFiltersRequest || (exports.ListFiltersRequest = {}));
var ListFiltersResponse;
(function (ListFiltersResponse) {
    /**
     * @internal
     */
    ListFiltersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFiltersResponse = exports.ListFiltersResponse || (exports.ListFiltersResponse = {}));
var ListFindingsRequest;
(function (ListFindingsRequest) {
    /**
     * @internal
     */
    ListFindingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFindingsRequest = exports.ListFindingsRequest || (exports.ListFindingsRequest = {}));
var ListFindingsResponse;
(function (ListFindingsResponse) {
    /**
     * @internal
     */
    ListFindingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFindingsResponse = exports.ListFindingsResponse || (exports.ListFindingsResponse = {}));
var ListInvitationsRequest;
(function (ListInvitationsRequest) {
    /**
     * @internal
     */
    ListInvitationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInvitationsRequest = exports.ListInvitationsRequest || (exports.ListInvitationsRequest = {}));
var Invitation;
(function (Invitation) {
    /**
     * @internal
     */
    Invitation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Invitation = exports.Invitation || (exports.Invitation = {}));
var ListInvitationsResponse;
(function (ListInvitationsResponse) {
    /**
     * @internal
     */
    ListInvitationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInvitationsResponse = exports.ListInvitationsResponse || (exports.ListInvitationsResponse = {}));
var ListIPSetsRequest;
(function (ListIPSetsRequest) {
    /**
     * @internal
     */
    ListIPSetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIPSetsRequest = exports.ListIPSetsRequest || (exports.ListIPSetsRequest = {}));
var ListIPSetsResponse;
(function (ListIPSetsResponse) {
    /**
     * @internal
     */
    ListIPSetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIPSetsResponse = exports.ListIPSetsResponse || (exports.ListIPSetsResponse = {}));
var ListMembersRequest;
(function (ListMembersRequest) {
    /**
     * @internal
     */
    ListMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMembersRequest = exports.ListMembersRequest || (exports.ListMembersRequest = {}));
var ListMembersResponse;
(function (ListMembersResponse) {
    /**
     * @internal
     */
    ListMembersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMembersResponse = exports.ListMembersResponse || (exports.ListMembersResponse = {}));
var ListOrganizationAdminAccountsRequest;
(function (ListOrganizationAdminAccountsRequest) {
    /**
     * @internal
     */
    ListOrganizationAdminAccountsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOrganizationAdminAccountsRequest = exports.ListOrganizationAdminAccountsRequest || (exports.ListOrganizationAdminAccountsRequest = {}));
var ListOrganizationAdminAccountsResponse;
(function (ListOrganizationAdminAccountsResponse) {
    /**
     * @internal
     */
    ListOrganizationAdminAccountsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOrganizationAdminAccountsResponse = exports.ListOrganizationAdminAccountsResponse || (exports.ListOrganizationAdminAccountsResponse = {}));
var ListPublishingDestinationsRequest;
(function (ListPublishingDestinationsRequest) {
    /**
     * @internal
     */
    ListPublishingDestinationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPublishingDestinationsRequest = exports.ListPublishingDestinationsRequest || (exports.ListPublishingDestinationsRequest = {}));
var ListPublishingDestinationsResponse;
(function (ListPublishingDestinationsResponse) {
    /**
     * @internal
     */
    ListPublishingDestinationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPublishingDestinationsResponse = exports.ListPublishingDestinationsResponse || (exports.ListPublishingDestinationsResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var ListThreatIntelSetsRequest;
(function (ListThreatIntelSetsRequest) {
    /**
     * @internal
     */
    ListThreatIntelSetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThreatIntelSetsRequest = exports.ListThreatIntelSetsRequest || (exports.ListThreatIntelSetsRequest = {}));
var ListThreatIntelSetsResponse;
(function (ListThreatIntelSetsResponse) {
    /**
     * @internal
     */
    ListThreatIntelSetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListThreatIntelSetsResponse = exports.ListThreatIntelSetsResponse || (exports.ListThreatIntelSetsResponse = {}));
var StartMonitoringMembersRequest;
(function (StartMonitoringMembersRequest) {
    /**
     * @internal
     */
    StartMonitoringMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartMonitoringMembersRequest = exports.StartMonitoringMembersRequest || (exports.StartMonitoringMembersRequest = {}));
var StartMonitoringMembersResponse;
(function (StartMonitoringMembersResponse) {
    /**
     * @internal
     */
    StartMonitoringMembersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartMonitoringMembersResponse = exports.StartMonitoringMembersResponse || (exports.StartMonitoringMembersResponse = {}));
var StopMonitoringMembersRequest;
(function (StopMonitoringMembersRequest) {
    /**
     * @internal
     */
    StopMonitoringMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopMonitoringMembersRequest = exports.StopMonitoringMembersRequest || (exports.StopMonitoringMembersRequest = {}));
var StopMonitoringMembersResponse;
(function (StopMonitoringMembersResponse) {
    /**
     * @internal
     */
    StopMonitoringMembersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopMonitoringMembersResponse = exports.StopMonitoringMembersResponse || (exports.StopMonitoringMembersResponse = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var UnarchiveFindingsRequest;
(function (UnarchiveFindingsRequest) {
    /**
     * @internal
     */
    UnarchiveFindingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnarchiveFindingsRequest = exports.UnarchiveFindingsRequest || (exports.UnarchiveFindingsRequest = {}));
var UnarchiveFindingsResponse;
(function (UnarchiveFindingsResponse) {
    /**
     * @internal
     */
    UnarchiveFindingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnarchiveFindingsResponse = exports.UnarchiveFindingsResponse || (exports.UnarchiveFindingsResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var UpdateDetectorRequest;
(function (UpdateDetectorRequest) {
    /**
     * @internal
     */
    UpdateDetectorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDetectorRequest = exports.UpdateDetectorRequest || (exports.UpdateDetectorRequest = {}));
var UpdateDetectorResponse;
(function (UpdateDetectorResponse) {
    /**
     * @internal
     */
    UpdateDetectorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDetectorResponse = exports.UpdateDetectorResponse || (exports.UpdateDetectorResponse = {}));
var UpdateFilterRequest;
(function (UpdateFilterRequest) {
    /**
     * @internal
     */
    UpdateFilterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFilterRequest = exports.UpdateFilterRequest || (exports.UpdateFilterRequest = {}));
var UpdateFilterResponse;
(function (UpdateFilterResponse) {
    /**
     * @internal
     */
    UpdateFilterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFilterResponse = exports.UpdateFilterResponse || (exports.UpdateFilterResponse = {}));
var UpdateFindingsFeedbackRequest;
(function (UpdateFindingsFeedbackRequest) {
    /**
     * @internal
     */
    UpdateFindingsFeedbackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFindingsFeedbackRequest = exports.UpdateFindingsFeedbackRequest || (exports.UpdateFindingsFeedbackRequest = {}));
var UpdateFindingsFeedbackResponse;
(function (UpdateFindingsFeedbackResponse) {
    /**
     * @internal
     */
    UpdateFindingsFeedbackResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFindingsFeedbackResponse = exports.UpdateFindingsFeedbackResponse || (exports.UpdateFindingsFeedbackResponse = {}));
var UpdateIPSetRequest;
(function (UpdateIPSetRequest) {
    /**
     * @internal
     */
    UpdateIPSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateIPSetRequest = exports.UpdateIPSetRequest || (exports.UpdateIPSetRequest = {}));
var UpdateIPSetResponse;
(function (UpdateIPSetResponse) {
    /**
     * @internal
     */
    UpdateIPSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateIPSetResponse = exports.UpdateIPSetResponse || (exports.UpdateIPSetResponse = {}));
var UpdateMemberDetectorsRequest;
(function (UpdateMemberDetectorsRequest) {
    /**
     * @internal
     */
    UpdateMemberDetectorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMemberDetectorsRequest = exports.UpdateMemberDetectorsRequest || (exports.UpdateMemberDetectorsRequest = {}));
var UpdateMemberDetectorsResponse;
(function (UpdateMemberDetectorsResponse) {
    /**
     * @internal
     */
    UpdateMemberDetectorsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMemberDetectorsResponse = exports.UpdateMemberDetectorsResponse || (exports.UpdateMemberDetectorsResponse = {}));
var OrganizationS3LogsConfiguration;
(function (OrganizationS3LogsConfiguration) {
    /**
     * @internal
     */
    OrganizationS3LogsConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationS3LogsConfiguration = exports.OrganizationS3LogsConfiguration || (exports.OrganizationS3LogsConfiguration = {}));
var OrganizationDataSourceConfigurations;
(function (OrganizationDataSourceConfigurations) {
    /**
     * @internal
     */
    OrganizationDataSourceConfigurations.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationDataSourceConfigurations = exports.OrganizationDataSourceConfigurations || (exports.OrganizationDataSourceConfigurations = {}));
var UpdateOrganizationConfigurationRequest;
(function (UpdateOrganizationConfigurationRequest) {
    /**
     * @internal
     */
    UpdateOrganizationConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateOrganizationConfigurationRequest = exports.UpdateOrganizationConfigurationRequest || (exports.UpdateOrganizationConfigurationRequest = {}));
var UpdateOrganizationConfigurationResponse;
(function (UpdateOrganizationConfigurationResponse) {
    /**
     * @internal
     */
    UpdateOrganizationConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateOrganizationConfigurationResponse = exports.UpdateOrganizationConfigurationResponse || (exports.UpdateOrganizationConfigurationResponse = {}));
var UpdatePublishingDestinationRequest;
(function (UpdatePublishingDestinationRequest) {
    /**
     * @internal
     */
    UpdatePublishingDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePublishingDestinationRequest = exports.UpdatePublishingDestinationRequest || (exports.UpdatePublishingDestinationRequest = {}));
var UpdatePublishingDestinationResponse;
(function (UpdatePublishingDestinationResponse) {
    /**
     * @internal
     */
    UpdatePublishingDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePublishingDestinationResponse = exports.UpdatePublishingDestinationResponse || (exports.UpdatePublishingDestinationResponse = {}));
var UpdateThreatIntelSetRequest;
(function (UpdateThreatIntelSetRequest) {
    /**
     * @internal
     */
    UpdateThreatIntelSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateThreatIntelSetRequest = exports.UpdateThreatIntelSetRequest || (exports.UpdateThreatIntelSetRequest = {}));
var UpdateThreatIntelSetResponse;
(function (UpdateThreatIntelSetResponse) {
    /**
     * @internal
     */
    UpdateThreatIntelSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateThreatIntelSetResponse = exports.UpdateThreatIntelSetResponse || (exports.UpdateThreatIntelSetResponse = {}));
//# sourceMappingURL=models_0.js.map