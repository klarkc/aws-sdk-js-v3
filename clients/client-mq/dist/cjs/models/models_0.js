"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeBrokerEngineTypesResponse = exports.DescribeBrokerEngineTypesRequest = exports.DescribeBrokerResponse = exports.LogsSummary = exports.PendingLogs = exports.LdapServerMetadataOutput = exports.DescribeBrokerRequest = exports.DeleteUserResponse = exports.DeleteUserRequest = exports.DeleteTagsRequest = exports.DeleteBrokerResponse = exports.DeleteBrokerRequest = exports.CreateUserResponse = exports.CreateUserRequest = exports.NotFoundException = exports.CreateTagsRequest = exports.CreateConfigurationResponse = exports.CreateConfigurationRequest = exports.UnauthorizedException = exports.InternalServerErrorException = exports.ForbiddenException = exports.CreateBrokerResponse = exports.CreateBrokerRequest = exports.WeeklyStartTime = exports.DayOfWeek = exports.Logs = exports.LdapServerMetadataInput = exports.EncryptionOptions = exports.ConflictException = exports.Configurations = exports.BadRequestException = exports.UserSummary = exports.ChangeType = exports.User = exports.SanitizationWarning = exports.SanitizationWarningReason = exports.ConfigurationId = exports.Configuration = exports.ConfigurationRevision = exports.AuthenticationStrategy = exports.BrokerSummary = exports.BrokerState = exports.BrokerInstanceOption = exports.DeploymentMode = exports.BrokerStorageType = exports.BrokerInstance = exports.BrokerEngineType = exports.EngineVersion = exports.EngineType = exports.AvailabilityZone = void 0;
exports.UpdateUserResponse = exports.UpdateUserRequest = exports.UpdateConfigurationResponse = exports.UpdateConfigurationRequest = exports.UpdateBrokerResponse = exports.UpdateBrokerRequest = exports.RebootBrokerResponse = exports.RebootBrokerRequest = exports.ListUsersResponse = exports.ListUsersRequest = exports.ListTagsResponse = exports.ListTagsRequest = exports.ListConfigurationsResponse = exports.ListConfigurationsRequest = exports.ListConfigurationRevisionsResponse = exports.ListConfigurationRevisionsRequest = exports.ListBrokersResponse = exports.ListBrokersRequest = exports.DescribeUserResponse = exports.UserPendingChanges = exports.DescribeUserRequest = exports.DescribeConfigurationRevisionResponse = exports.DescribeConfigurationRevisionRequest = exports.DescribeConfigurationResponse = exports.DescribeConfigurationRequest = exports.DescribeBrokerInstanceOptionsResponse = exports.DescribeBrokerInstanceOptionsRequest = void 0;
var AvailabilityZone;
(function (AvailabilityZone) {
    /**
     * @internal
     */
    AvailabilityZone.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AvailabilityZone = exports.AvailabilityZone || (exports.AvailabilityZone = {}));
var EngineType;
(function (EngineType) {
    EngineType["ACTIVEMQ"] = "ACTIVEMQ";
    EngineType["RABBITMQ"] = "RABBITMQ";
})(EngineType = exports.EngineType || (exports.EngineType = {}));
var EngineVersion;
(function (EngineVersion) {
    /**
     * @internal
     */
    EngineVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EngineVersion = exports.EngineVersion || (exports.EngineVersion = {}));
var BrokerEngineType;
(function (BrokerEngineType) {
    /**
     * @internal
     */
    BrokerEngineType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BrokerEngineType = exports.BrokerEngineType || (exports.BrokerEngineType = {}));
var BrokerInstance;
(function (BrokerInstance) {
    /**
     * @internal
     */
    BrokerInstance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BrokerInstance = exports.BrokerInstance || (exports.BrokerInstance = {}));
var BrokerStorageType;
(function (BrokerStorageType) {
    BrokerStorageType["EBS"] = "EBS";
    BrokerStorageType["EFS"] = "EFS";
})(BrokerStorageType = exports.BrokerStorageType || (exports.BrokerStorageType = {}));
var DeploymentMode;
(function (DeploymentMode) {
    DeploymentMode["ACTIVE_STANDBY_MULTI_AZ"] = "ACTIVE_STANDBY_MULTI_AZ";
    DeploymentMode["CLUSTER_MULTI_AZ"] = "CLUSTER_MULTI_AZ";
    DeploymentMode["SINGLE_INSTANCE"] = "SINGLE_INSTANCE";
})(DeploymentMode = exports.DeploymentMode || (exports.DeploymentMode = {}));
var BrokerInstanceOption;
(function (BrokerInstanceOption) {
    /**
     * @internal
     */
    BrokerInstanceOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BrokerInstanceOption = exports.BrokerInstanceOption || (exports.BrokerInstanceOption = {}));
var BrokerState;
(function (BrokerState) {
    BrokerState["CREATION_FAILED"] = "CREATION_FAILED";
    BrokerState["CREATION_IN_PROGRESS"] = "CREATION_IN_PROGRESS";
    BrokerState["DELETION_IN_PROGRESS"] = "DELETION_IN_PROGRESS";
    BrokerState["REBOOT_IN_PROGRESS"] = "REBOOT_IN_PROGRESS";
    BrokerState["RUNNING"] = "RUNNING";
})(BrokerState = exports.BrokerState || (exports.BrokerState = {}));
var BrokerSummary;
(function (BrokerSummary) {
    /**
     * @internal
     */
    BrokerSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BrokerSummary = exports.BrokerSummary || (exports.BrokerSummary = {}));
var AuthenticationStrategy;
(function (AuthenticationStrategy) {
    AuthenticationStrategy["LDAP"] = "LDAP";
    AuthenticationStrategy["SIMPLE"] = "SIMPLE";
})(AuthenticationStrategy = exports.AuthenticationStrategy || (exports.AuthenticationStrategy = {}));
var ConfigurationRevision;
(function (ConfigurationRevision) {
    /**
     * @internal
     */
    ConfigurationRevision.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigurationRevision = exports.ConfigurationRevision || (exports.ConfigurationRevision = {}));
var Configuration;
(function (Configuration) {
    /**
     * @internal
     */
    Configuration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Configuration = exports.Configuration || (exports.Configuration = {}));
var ConfigurationId;
(function (ConfigurationId) {
    /**
     * @internal
     */
    ConfigurationId.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigurationId = exports.ConfigurationId || (exports.ConfigurationId = {}));
var SanitizationWarningReason;
(function (SanitizationWarningReason) {
    SanitizationWarningReason["DISALLOWED_ATTRIBUTE_REMOVED"] = "DISALLOWED_ATTRIBUTE_REMOVED";
    SanitizationWarningReason["DISALLOWED_ELEMENT_REMOVED"] = "DISALLOWED_ELEMENT_REMOVED";
    SanitizationWarningReason["INVALID_ATTRIBUTE_VALUE_REMOVED"] = "INVALID_ATTRIBUTE_VALUE_REMOVED";
})(SanitizationWarningReason = exports.SanitizationWarningReason || (exports.SanitizationWarningReason = {}));
var SanitizationWarning;
(function (SanitizationWarning) {
    /**
     * @internal
     */
    SanitizationWarning.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SanitizationWarning = exports.SanitizationWarning || (exports.SanitizationWarning = {}));
var User;
(function (User) {
    /**
     * @internal
     */
    User.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(User = exports.User || (exports.User = {}));
var ChangeType;
(function (ChangeType) {
    ChangeType["CREATE"] = "CREATE";
    ChangeType["DELETE"] = "DELETE";
    ChangeType["UPDATE"] = "UPDATE";
})(ChangeType = exports.ChangeType || (exports.ChangeType = {}));
var UserSummary;
(function (UserSummary) {
    /**
     * @internal
     */
    UserSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserSummary = exports.UserSummary || (exports.UserSummary = {}));
var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var Configurations;
(function (Configurations) {
    /**
     * @internal
     */
    Configurations.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Configurations = exports.Configurations || (exports.Configurations = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var EncryptionOptions;
(function (EncryptionOptions) {
    /**
     * @internal
     */
    EncryptionOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionOptions = exports.EncryptionOptions || (exports.EncryptionOptions = {}));
var LdapServerMetadataInput;
(function (LdapServerMetadataInput) {
    /**
     * @internal
     */
    LdapServerMetadataInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LdapServerMetadataInput = exports.LdapServerMetadataInput || (exports.LdapServerMetadataInput = {}));
var Logs;
(function (Logs) {
    /**
     * @internal
     */
    Logs.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Logs = exports.Logs || (exports.Logs = {}));
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek["FRIDAY"] = "FRIDAY";
    DayOfWeek["MONDAY"] = "MONDAY";
    DayOfWeek["SATURDAY"] = "SATURDAY";
    DayOfWeek["SUNDAY"] = "SUNDAY";
    DayOfWeek["THURSDAY"] = "THURSDAY";
    DayOfWeek["TUESDAY"] = "TUESDAY";
    DayOfWeek["WEDNESDAY"] = "WEDNESDAY";
})(DayOfWeek = exports.DayOfWeek || (exports.DayOfWeek = {}));
var WeeklyStartTime;
(function (WeeklyStartTime) {
    /**
     * @internal
     */
    WeeklyStartTime.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WeeklyStartTime = exports.WeeklyStartTime || (exports.WeeklyStartTime = {}));
var CreateBrokerRequest;
(function (CreateBrokerRequest) {
    /**
     * @internal
     */
    CreateBrokerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBrokerRequest = exports.CreateBrokerRequest || (exports.CreateBrokerRequest = {}));
var CreateBrokerResponse;
(function (CreateBrokerResponse) {
    /**
     * @internal
     */
    CreateBrokerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBrokerResponse = exports.CreateBrokerResponse || (exports.CreateBrokerResponse = {}));
var ForbiddenException;
(function (ForbiddenException) {
    /**
     * @internal
     */
    ForbiddenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ForbiddenException = exports.ForbiddenException || (exports.ForbiddenException = {}));
var InternalServerErrorException;
(function (InternalServerErrorException) {
    /**
     * @internal
     */
    InternalServerErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerErrorException = exports.InternalServerErrorException || (exports.InternalServerErrorException = {}));
var UnauthorizedException;
(function (UnauthorizedException) {
    /**
     * @internal
     */
    UnauthorizedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnauthorizedException = exports.UnauthorizedException || (exports.UnauthorizedException = {}));
var CreateConfigurationRequest;
(function (CreateConfigurationRequest) {
    /**
     * @internal
     */
    CreateConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConfigurationRequest = exports.CreateConfigurationRequest || (exports.CreateConfigurationRequest = {}));
var CreateConfigurationResponse;
(function (CreateConfigurationResponse) {
    /**
     * @internal
     */
    CreateConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConfigurationResponse = exports.CreateConfigurationResponse || (exports.CreateConfigurationResponse = {}));
var CreateTagsRequest;
(function (CreateTagsRequest) {
    /**
     * @internal
     */
    CreateTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTagsRequest = exports.CreateTagsRequest || (exports.CreateTagsRequest = {}));
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var CreateUserRequest;
(function (CreateUserRequest) {
    /**
     * @internal
     */
    CreateUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserRequest = exports.CreateUserRequest || (exports.CreateUserRequest = {}));
var CreateUserResponse;
(function (CreateUserResponse) {
    /**
     * @internal
     */
    CreateUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserResponse = exports.CreateUserResponse || (exports.CreateUserResponse = {}));
var DeleteBrokerRequest;
(function (DeleteBrokerRequest) {
    /**
     * @internal
     */
    DeleteBrokerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBrokerRequest = exports.DeleteBrokerRequest || (exports.DeleteBrokerRequest = {}));
var DeleteBrokerResponse;
(function (DeleteBrokerResponse) {
    /**
     * @internal
     */
    DeleteBrokerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBrokerResponse = exports.DeleteBrokerResponse || (exports.DeleteBrokerResponse = {}));
var DeleteTagsRequest;
(function (DeleteTagsRequest) {
    /**
     * @internal
     */
    DeleteTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTagsRequest = exports.DeleteTagsRequest || (exports.DeleteTagsRequest = {}));
var DeleteUserRequest;
(function (DeleteUserRequest) {
    /**
     * @internal
     */
    DeleteUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserRequest = exports.DeleteUserRequest || (exports.DeleteUserRequest = {}));
var DeleteUserResponse;
(function (DeleteUserResponse) {
    /**
     * @internal
     */
    DeleteUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserResponse = exports.DeleteUserResponse || (exports.DeleteUserResponse = {}));
var DescribeBrokerRequest;
(function (DescribeBrokerRequest) {
    /**
     * @internal
     */
    DescribeBrokerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBrokerRequest = exports.DescribeBrokerRequest || (exports.DescribeBrokerRequest = {}));
var LdapServerMetadataOutput;
(function (LdapServerMetadataOutput) {
    /**
     * @internal
     */
    LdapServerMetadataOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LdapServerMetadataOutput = exports.LdapServerMetadataOutput || (exports.LdapServerMetadataOutput = {}));
var PendingLogs;
(function (PendingLogs) {
    /**
     * @internal
     */
    PendingLogs.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PendingLogs = exports.PendingLogs || (exports.PendingLogs = {}));
var LogsSummary;
(function (LogsSummary) {
    /**
     * @internal
     */
    LogsSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LogsSummary = exports.LogsSummary || (exports.LogsSummary = {}));
var DescribeBrokerResponse;
(function (DescribeBrokerResponse) {
    /**
     * @internal
     */
    DescribeBrokerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBrokerResponse = exports.DescribeBrokerResponse || (exports.DescribeBrokerResponse = {}));
var DescribeBrokerEngineTypesRequest;
(function (DescribeBrokerEngineTypesRequest) {
    /**
     * @internal
     */
    DescribeBrokerEngineTypesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBrokerEngineTypesRequest = exports.DescribeBrokerEngineTypesRequest || (exports.DescribeBrokerEngineTypesRequest = {}));
var DescribeBrokerEngineTypesResponse;
(function (DescribeBrokerEngineTypesResponse) {
    /**
     * @internal
     */
    DescribeBrokerEngineTypesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBrokerEngineTypesResponse = exports.DescribeBrokerEngineTypesResponse || (exports.DescribeBrokerEngineTypesResponse = {}));
var DescribeBrokerInstanceOptionsRequest;
(function (DescribeBrokerInstanceOptionsRequest) {
    /**
     * @internal
     */
    DescribeBrokerInstanceOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBrokerInstanceOptionsRequest = exports.DescribeBrokerInstanceOptionsRequest || (exports.DescribeBrokerInstanceOptionsRequest = {}));
var DescribeBrokerInstanceOptionsResponse;
(function (DescribeBrokerInstanceOptionsResponse) {
    /**
     * @internal
     */
    DescribeBrokerInstanceOptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBrokerInstanceOptionsResponse = exports.DescribeBrokerInstanceOptionsResponse || (exports.DescribeBrokerInstanceOptionsResponse = {}));
var DescribeConfigurationRequest;
(function (DescribeConfigurationRequest) {
    /**
     * @internal
     */
    DescribeConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConfigurationRequest = exports.DescribeConfigurationRequest || (exports.DescribeConfigurationRequest = {}));
var DescribeConfigurationResponse;
(function (DescribeConfigurationResponse) {
    /**
     * @internal
     */
    DescribeConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConfigurationResponse = exports.DescribeConfigurationResponse || (exports.DescribeConfigurationResponse = {}));
var DescribeConfigurationRevisionRequest;
(function (DescribeConfigurationRevisionRequest) {
    /**
     * @internal
     */
    DescribeConfigurationRevisionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConfigurationRevisionRequest = exports.DescribeConfigurationRevisionRequest || (exports.DescribeConfigurationRevisionRequest = {}));
var DescribeConfigurationRevisionResponse;
(function (DescribeConfigurationRevisionResponse) {
    /**
     * @internal
     */
    DescribeConfigurationRevisionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConfigurationRevisionResponse = exports.DescribeConfigurationRevisionResponse || (exports.DescribeConfigurationRevisionResponse = {}));
var DescribeUserRequest;
(function (DescribeUserRequest) {
    /**
     * @internal
     */
    DescribeUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserRequest = exports.DescribeUserRequest || (exports.DescribeUserRequest = {}));
var UserPendingChanges;
(function (UserPendingChanges) {
    /**
     * @internal
     */
    UserPendingChanges.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserPendingChanges = exports.UserPendingChanges || (exports.UserPendingChanges = {}));
var DescribeUserResponse;
(function (DescribeUserResponse) {
    /**
     * @internal
     */
    DescribeUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserResponse = exports.DescribeUserResponse || (exports.DescribeUserResponse = {}));
var ListBrokersRequest;
(function (ListBrokersRequest) {
    /**
     * @internal
     */
    ListBrokersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBrokersRequest = exports.ListBrokersRequest || (exports.ListBrokersRequest = {}));
var ListBrokersResponse;
(function (ListBrokersResponse) {
    /**
     * @internal
     */
    ListBrokersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBrokersResponse = exports.ListBrokersResponse || (exports.ListBrokersResponse = {}));
var ListConfigurationRevisionsRequest;
(function (ListConfigurationRevisionsRequest) {
    /**
     * @internal
     */
    ListConfigurationRevisionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConfigurationRevisionsRequest = exports.ListConfigurationRevisionsRequest || (exports.ListConfigurationRevisionsRequest = {}));
var ListConfigurationRevisionsResponse;
(function (ListConfigurationRevisionsResponse) {
    /**
     * @internal
     */
    ListConfigurationRevisionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConfigurationRevisionsResponse = exports.ListConfigurationRevisionsResponse || (exports.ListConfigurationRevisionsResponse = {}));
var ListConfigurationsRequest;
(function (ListConfigurationsRequest) {
    /**
     * @internal
     */
    ListConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConfigurationsRequest = exports.ListConfigurationsRequest || (exports.ListConfigurationsRequest = {}));
var ListConfigurationsResponse;
(function (ListConfigurationsResponse) {
    /**
     * @internal
     */
    ListConfigurationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConfigurationsResponse = exports.ListConfigurationsResponse || (exports.ListConfigurationsResponse = {}));
var ListTagsRequest;
(function (ListTagsRequest) {
    /**
     * @internal
     */
    ListTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsRequest = exports.ListTagsRequest || (exports.ListTagsRequest = {}));
var ListTagsResponse;
(function (ListTagsResponse) {
    /**
     * @internal
     */
    ListTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsResponse = exports.ListTagsResponse || (exports.ListTagsResponse = {}));
var ListUsersRequest;
(function (ListUsersRequest) {
    /**
     * @internal
     */
    ListUsersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUsersRequest = exports.ListUsersRequest || (exports.ListUsersRequest = {}));
var ListUsersResponse;
(function (ListUsersResponse) {
    /**
     * @internal
     */
    ListUsersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUsersResponse = exports.ListUsersResponse || (exports.ListUsersResponse = {}));
var RebootBrokerRequest;
(function (RebootBrokerRequest) {
    /**
     * @internal
     */
    RebootBrokerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebootBrokerRequest = exports.RebootBrokerRequest || (exports.RebootBrokerRequest = {}));
var RebootBrokerResponse;
(function (RebootBrokerResponse) {
    /**
     * @internal
     */
    RebootBrokerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebootBrokerResponse = exports.RebootBrokerResponse || (exports.RebootBrokerResponse = {}));
var UpdateBrokerRequest;
(function (UpdateBrokerRequest) {
    /**
     * @internal
     */
    UpdateBrokerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateBrokerRequest = exports.UpdateBrokerRequest || (exports.UpdateBrokerRequest = {}));
var UpdateBrokerResponse;
(function (UpdateBrokerResponse) {
    /**
     * @internal
     */
    UpdateBrokerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateBrokerResponse = exports.UpdateBrokerResponse || (exports.UpdateBrokerResponse = {}));
var UpdateConfigurationRequest;
(function (UpdateConfigurationRequest) {
    /**
     * @internal
     */
    UpdateConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConfigurationRequest = exports.UpdateConfigurationRequest || (exports.UpdateConfigurationRequest = {}));
var UpdateConfigurationResponse;
(function (UpdateConfigurationResponse) {
    /**
     * @internal
     */
    UpdateConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConfigurationResponse = exports.UpdateConfigurationResponse || (exports.UpdateConfigurationResponse = {}));
var UpdateUserRequest;
(function (UpdateUserRequest) {
    /**
     * @internal
     */
    UpdateUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUserRequest = exports.UpdateUserRequest || (exports.UpdateUserRequest = {}));
var UpdateUserResponse;
(function (UpdateUserResponse) {
    /**
     * @internal
     */
    UpdateUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUserResponse = exports.UpdateUserResponse || (exports.UpdateUserResponse = {}));
//# sourceMappingURL=models_0.js.map