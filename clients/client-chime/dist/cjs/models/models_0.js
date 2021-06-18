"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembershipItem =
  exports.RoomMembershipRole =
  exports.BatchCreateChannelMembershipResponse =
  exports.BatchCreateChannelMembershipError =
  exports.BatchCreateChannelMembershipRequest =
  exports.ResourceLimitExceededException =
  exports.BatchCreateAttendeeResponse =
  exports.CreateAttendeeError =
  exports.BatchCreateAttendeeRequest =
  exports.CreateAttendeeRequestItem =
  exports.BatchChannelMemberships =
  exports.Tag =
  exports.Attendee =
  exports.AssociateSigninDelegateGroupsWithAccountResponse =
  exports.AssociateSigninDelegateGroupsWithAccountRequest =
  exports.AssociatePhoneNumberWithUserResponse =
  exports.AssociatePhoneNumberWithUserRequest =
  exports.AssociatePhoneNumbersWithVoiceConnectorGroupResponse =
  exports.AssociatePhoneNumbersWithVoiceConnectorGroupRequest =
  exports.UnauthorizedClientException =
  exports.ThrottledClientException =
  exports.ServiceUnavailableException =
  exports.ServiceFailureException =
  exports.NotFoundException =
  exports.ForbiddenException =
  exports.BadRequestException =
  exports.AssociatePhoneNumbersWithVoiceConnectorResponse =
  exports.PhoneNumberError =
  exports.AssociatePhoneNumbersWithVoiceConnectorRequest =
  exports.AppInstanceUserMembershipSummary =
  exports.ChannelMembershipType =
  exports.AppInstanceUserSummary =
  exports.AppInstanceUser =
  exports.AppInstanceStreamingConfiguration =
  exports.AppInstanceRetentionSettings =
  exports.ChannelRetentionSettings =
  exports.AppInstanceSummary =
  exports.AppInstanceDataType =
  exports.AppInstanceAdminSummary =
  exports.AppInstanceAdmin =
  exports.Identity =
  exports.AppInstance =
  exports.AlexaForBusinessMetadata =
  exports.AccountSettings =
  exports.Account =
  exports.SigninDelegateGroup =
  exports.License =
  exports.AccountType =
  exports.AccessDeniedException =
  exports.ErrorCode =
    void 0;
exports.CreateAttendeeRequest =
  exports.CreateAppInstanceUserResponse =
  exports.CreateAppInstanceUserRequest =
  exports.CreateAppInstanceAdminResponse =
  exports.CreateAppInstanceAdminRequest =
  exports.CreateAppInstanceResponse =
  exports.CreateAppInstanceRequest =
  exports.CreateAccountResponse =
  exports.CreateAccountRequest =
  exports.ConversationRetentionSettings =
  exports.ConflictException =
  exports.ChannelModeratorSummary =
  exports.ChannelModerator =
  exports.ChannelModeratedByAppInstanceUserSummary =
  exports.ChannelMessageSummary =
  exports.ChannelMessage =
  exports.ChannelMessageType =
  exports.ChannelMessagePersistenceType =
  exports.ChannelMembershipSummary =
  exports.ChannelMembershipForAppInstanceUserSummary =
  exports.ChannelSummary =
  exports.ChannelMembership =
  exports.ChannelBanSummary =
  exports.ChannelBan =
  exports.Channel =
  exports.ChannelPrivacy =
  exports.ChannelMode =
  exports.Capability =
  exports.CallingNameStatus =
  exports.BusinessCallingSettings =
  exports.Bot =
  exports.BotType =
  exports.BatchUpdateUserResponse =
  exports.BatchUpdateUserRequest =
  exports.UpdateUserRequestItem =
  exports.UserType =
  exports.BatchUpdatePhoneNumberResponse =
  exports.BatchUpdatePhoneNumberRequest =
  exports.UpdatePhoneNumberRequestItem =
  exports.PhoneNumberProductType =
  exports.BatchUnsuspendUserResponse =
  exports.BatchUnsuspendUserRequest =
  exports.BatchSuspendUserResponse =
  exports.UserError =
  exports.BatchSuspendUserRequest =
  exports.BatchDeletePhoneNumberResponse =
  exports.BatchDeletePhoneNumberRequest =
  exports.BatchCreateRoomMembershipResponse =
  exports.MemberError =
  exports.BatchCreateRoomMembershipRequest =
    void 0;
exports.SipRuleTargetApplication =
  exports.CreateSipMediaApplicationCallResponse =
  exports.SipMediaApplicationCall =
  exports.CreateSipMediaApplicationCallRequest =
  exports.CreateSipMediaApplicationResponse =
  exports.SipMediaApplication =
  exports.CreateSipMediaApplicationRequest =
  exports.SipMediaApplicationEndpoint =
  exports.CreateRoomMembershipResponse =
  exports.RoomMembership =
  exports.Member =
  exports.MemberType =
  exports.CreateRoomMembershipRequest =
  exports.CreateRoomResponse =
  exports.Room =
  exports.CreateRoomRequest =
  exports.CreateProxySessionResponse =
  exports.ProxySession =
  exports.ProxySessionStatus =
  exports.Participant =
  exports.CreateProxySessionRequest =
  exports.NumberSelectionBehavior =
  exports.GeoMatchParams =
  exports.GeoMatchLevel =
  exports.CreatePhoneNumberOrderResponse =
  exports.PhoneNumberOrder =
  exports.PhoneNumberOrderStatus =
  exports.OrderedPhoneNumber =
  exports.OrderedPhoneNumberStatus =
  exports.CreatePhoneNumberOrderRequest =
  exports.CreateMeetingWithAttendeesResponse =
  exports.CreateMeetingWithAttendeesRequest =
  exports.CreateMeetingDialOutResponse =
  exports.CreateMeetingDialOutRequest =
  exports.CreateMeetingResponse =
  exports.Meeting =
  exports.MediaPlacement =
  exports.CreateMeetingRequest =
  exports.MeetingNotificationConfiguration =
  exports.CreateChannelModeratorResponse =
  exports.CreateChannelModeratorRequest =
  exports.CreateChannelMembershipResponse =
  exports.CreateChannelMembershipRequest =
  exports.CreateChannelBanResponse =
  exports.CreateChannelBanRequest =
  exports.CreateChannelResponse =
  exports.CreateChannelRequest =
  exports.CreateBotResponse =
  exports.CreateBotRequest =
  exports.CreateAttendeeResponse =
    void 0;
exports.DescribeAppInstanceAdminRequest =
  exports.DescribeAppInstanceResponse =
  exports.DescribeAppInstanceRequest =
  exports.DeleteVoiceConnectorTerminationCredentialsRequest =
  exports.DeleteVoiceConnectorTerminationRequest =
  exports.DeleteVoiceConnectorStreamingConfigurationRequest =
  exports.DeleteVoiceConnectorProxyRequest =
  exports.DeleteVoiceConnectorOriginationRequest =
  exports.DeleteVoiceConnectorGroupRequest =
  exports.DeleteVoiceConnectorEmergencyCallingConfigurationRequest =
  exports.DeleteVoiceConnectorRequest =
  exports.DeleteSipRuleRequest =
  exports.DeleteSipMediaApplicationRequest =
  exports.DeleteRoomMembershipRequest =
  exports.DeleteRoomRequest =
  exports.DeleteProxySessionRequest =
  exports.DeletePhoneNumberRequest =
  exports.DeleteMeetingRequest =
  exports.DeleteEventsConfigurationRequest =
  exports.DeleteChannelModeratorRequest =
  exports.DeleteChannelMessageRequest =
  exports.DeleteChannelMembershipRequest =
  exports.DeleteChannelBanRequest =
  exports.DeleteChannelRequest =
  exports.DeleteAttendeeRequest =
  exports.DeleteAppInstanceUserRequest =
  exports.DeleteAppInstanceStreamingConfigurationsRequest =
  exports.DeleteAppInstanceAdminRequest =
  exports.DeleteAppInstanceRequest =
  exports.UnprocessableEntityException =
  exports.DeleteAccountResponse =
  exports.DeleteAccountRequest =
  exports.Credential =
  exports.CreateVoiceConnectorGroupResponse =
  exports.VoiceConnectorGroup =
  exports.CreateVoiceConnectorGroupRequest =
  exports.VoiceConnectorItem =
  exports.CreateVoiceConnectorResponse =
  exports.VoiceConnector =
  exports.CreateVoiceConnectorRequest =
  exports.VoiceConnectorAwsRegion =
  exports.CreateUserResponse =
  exports.User =
  exports.RegistrationStatus =
  exports.InviteStatus =
  exports.CreateUserRequest =
  exports.CreateSipRuleResponse =
  exports.SipRule =
  exports.CreateSipRuleRequest =
  exports.SipRuleTriggerType =
    void 0;
exports.GetMessagingSessionEndpointResponse =
  exports.MessagingSessionEndpoint =
  exports.GetMessagingSessionEndpointRequest =
  exports.GetMeetingResponse =
  exports.GetMeetingRequest =
  exports.GetGlobalSettingsResponse =
  exports.VoiceConnectorSettings =
  exports.GetEventsConfigurationResponse =
  exports.GetEventsConfigurationRequest =
  exports.GetChannelMessageResponse =
  exports.GetChannelMessageRequest =
  exports.GetBotResponse =
  exports.GetBotRequest =
  exports.GetAttendeeResponse =
  exports.GetAttendeeRequest =
  exports.GetAppInstanceStreamingConfigurationsResponse =
  exports.GetAppInstanceStreamingConfigurationsRequest =
  exports.GetAppInstanceRetentionSettingsResponse =
  exports.GetAppInstanceRetentionSettingsRequest =
  exports.GetAccountSettingsResponse =
  exports.GetAccountSettingsRequest =
  exports.GetAccountResponse =
  exports.GetAccountRequest =
  exports.EventsConfiguration =
  exports.EmergencyCallingConfiguration =
  exports.EmailStatus =
  exports.DNISEmergencyCallingConfiguration =
  exports.DisassociateSigninDelegateGroupsFromAccountResponse =
  exports.DisassociateSigninDelegateGroupsFromAccountRequest =
  exports.DisassociatePhoneNumbersFromVoiceConnectorGroupResponse =
  exports.DisassociatePhoneNumbersFromVoiceConnectorGroupRequest =
  exports.DisassociatePhoneNumbersFromVoiceConnectorResponse =
  exports.DisassociatePhoneNumbersFromVoiceConnectorRequest =
  exports.DisassociatePhoneNumberFromUserResponse =
  exports.DisassociatePhoneNumberFromUserRequest =
  exports.DescribeChannelModeratorResponse =
  exports.DescribeChannelModeratorRequest =
  exports.DescribeChannelModeratedByAppInstanceUserResponse =
  exports.DescribeChannelModeratedByAppInstanceUserRequest =
  exports.DescribeChannelMembershipForAppInstanceUserResponse =
  exports.DescribeChannelMembershipForAppInstanceUserRequest =
  exports.DescribeChannelMembershipResponse =
  exports.DescribeChannelMembershipRequest =
  exports.DescribeChannelBanResponse =
  exports.DescribeChannelBanRequest =
  exports.DescribeChannelResponse =
  exports.DescribeChannelRequest =
  exports.DescribeAppInstanceUserResponse =
  exports.DescribeAppInstanceUserRequest =
  exports.DescribeAppInstanceAdminResponse =
    void 0;
exports.GetVoiceConnectorStreamingConfigurationRequest =
  exports.GetVoiceConnectorProxyResponse =
  exports.Proxy =
  exports.GetVoiceConnectorProxyRequest =
  exports.GetVoiceConnectorOriginationResponse =
  exports.Origination =
  exports.OriginationRoute =
  exports.OriginationRouteProtocol =
  exports.GetVoiceConnectorOriginationRequest =
  exports.GetVoiceConnectorLoggingConfigurationResponse =
  exports.LoggingConfiguration =
  exports.GetVoiceConnectorLoggingConfigurationRequest =
  exports.GetVoiceConnectorGroupResponse =
  exports.GetVoiceConnectorGroupRequest =
  exports.GetVoiceConnectorEmergencyCallingConfigurationResponse =
  exports.GetVoiceConnectorEmergencyCallingConfigurationRequest =
  exports.GetVoiceConnectorResponse =
  exports.GetVoiceConnectorRequest =
  exports.GetUserSettingsResponse =
  exports.UserSettings =
  exports.TelephonySettings =
  exports.GetUserSettingsRequest =
  exports.GetUserResponse =
  exports.GetUserRequest =
  exports.GetSipRuleResponse =
  exports.GetSipRuleRequest =
  exports.GetSipMediaApplicationLoggingConfigurationResponse =
  exports.SipMediaApplicationLoggingConfiguration =
  exports.GetSipMediaApplicationLoggingConfigurationRequest =
  exports.GetSipMediaApplicationResponse =
  exports.GetSipMediaApplicationRequest =
  exports.GetRoomResponse =
  exports.GetRoomRequest =
  exports.GetRetentionSettingsResponse =
  exports.RetentionSettings =
  exports.RoomRetentionSettings =
  exports.GetRetentionSettingsRequest =
  exports.GetProxySessionResponse =
  exports.GetProxySessionRequest =
  exports.GetPhoneNumberSettingsResponse =
  exports.GetPhoneNumberOrderResponse =
  exports.GetPhoneNumberOrderRequest =
  exports.GetPhoneNumberResponse =
  exports.PhoneNumber =
  exports.PhoneNumberType =
  exports.PhoneNumberStatus =
  exports.PhoneNumberCapabilities =
  exports.PhoneNumberAssociation =
  exports.PhoneNumberAssociationName =
  exports.GetPhoneNumberRequest =
    void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var ErrorCode;
(function (ErrorCode) {
  ErrorCode["AccessDenied"] = "AccessDenied";
  ErrorCode["BadRequest"] = "BadRequest";
  ErrorCode["Conflict"] = "Conflict";
  ErrorCode["Forbidden"] = "Forbidden";
  ErrorCode["NotFound"] = "NotFound";
  ErrorCode["PhoneNumberAssociationsExist"] = "PhoneNumberAssociationsExist";
  ErrorCode["PreconditionFailed"] = "PreconditionFailed";
  ErrorCode["ResourceLimitExceeded"] = "ResourceLimitExceeded";
  ErrorCode["ServiceFailure"] = "ServiceFailure";
  ErrorCode["ServiceUnavailable"] = "ServiceUnavailable";
  ErrorCode["Throttled"] = "Throttled";
  ErrorCode["Throttling"] = "Throttling";
  ErrorCode["Unauthorized"] = "Unauthorized";
  ErrorCode["Unprocessable"] = "Unprocessable";
  ErrorCode["VoiceConnectorGroupAssociationsExist"] = "VoiceConnectorGroupAssociationsExist";
})((ErrorCode = exports.ErrorCode || (exports.ErrorCode = {})));
var AccessDeniedException;
(function (AccessDeniedException) {
  /**
   * @internal
   */
  AccessDeniedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {})));
var AccountType;
(function (AccountType) {
  AccountType["EnterpriseDirectory"] = "EnterpriseDirectory";
  AccountType["EnterpriseLWA"] = "EnterpriseLWA";
  AccountType["EnterpriseOIDC"] = "EnterpriseOIDC";
  AccountType["Team"] = "Team";
})((AccountType = exports.AccountType || (exports.AccountType = {})));
var License;
(function (License) {
  License["Basic"] = "Basic";
  License["Plus"] = "Plus";
  License["Pro"] = "Pro";
  License["ProTrial"] = "ProTrial";
})((License = exports.License || (exports.License = {})));
var SigninDelegateGroup;
(function (SigninDelegateGroup) {
  /**
   * @internal
   */
  SigninDelegateGroup.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SigninDelegateGroup = exports.SigninDelegateGroup || (exports.SigninDelegateGroup = {})));
var Account;
(function (Account) {
  /**
   * @internal
   */
  Account.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Account = exports.Account || (exports.Account = {})));
var AccountSettings;
(function (AccountSettings) {
  /**
   * @internal
   */
  AccountSettings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AccountSettings = exports.AccountSettings || (exports.AccountSettings = {})));
var AlexaForBusinessMetadata;
(function (AlexaForBusinessMetadata) {
  /**
   * @internal
   */
  AlexaForBusinessMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AlexaForBusinessRoomArn && { AlexaForBusinessRoomArn: smithy_client_1.SENSITIVE_STRING }),
  });
})((AlexaForBusinessMetadata = exports.AlexaForBusinessMetadata || (exports.AlexaForBusinessMetadata = {})));
var AppInstance;
(function (AppInstance) {
  /**
   * @internal
   */
  AppInstance.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Name && { Name: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: smithy_client_1.SENSITIVE_STRING }),
  });
})((AppInstance = exports.AppInstance || (exports.AppInstance = {})));
var Identity;
(function (Identity) {
  /**
   * @internal
   */
  Identity.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Name && { Name: smithy_client_1.SENSITIVE_STRING }),
  });
})((Identity = exports.Identity || (exports.Identity = {})));
var AppInstanceAdmin;
(function (AppInstanceAdmin) {
  /**
   * @internal
   */
  AppInstanceAdmin.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Admin && { Admin: Identity.filterSensitiveLog(obj.Admin) }),
  });
})((AppInstanceAdmin = exports.AppInstanceAdmin || (exports.AppInstanceAdmin = {})));
var AppInstanceAdminSummary;
(function (AppInstanceAdminSummary) {
  /**
   * @internal
   */
  AppInstanceAdminSummary.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Admin && { Admin: Identity.filterSensitiveLog(obj.Admin) }),
  });
})((AppInstanceAdminSummary = exports.AppInstanceAdminSummary || (exports.AppInstanceAdminSummary = {})));
var AppInstanceDataType;
(function (AppInstanceDataType) {
  AppInstanceDataType["Channel"] = "Channel";
  AppInstanceDataType["ChannelMessage"] = "ChannelMessage";
})((AppInstanceDataType = exports.AppInstanceDataType || (exports.AppInstanceDataType = {})));
var AppInstanceSummary;
(function (AppInstanceSummary) {
  /**
   * @internal
   */
  AppInstanceSummary.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Name && { Name: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: smithy_client_1.SENSITIVE_STRING }),
  });
})((AppInstanceSummary = exports.AppInstanceSummary || (exports.AppInstanceSummary = {})));
var ChannelRetentionSettings;
(function (ChannelRetentionSettings) {
  /**
   * @internal
   */
  ChannelRetentionSettings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ChannelRetentionSettings = exports.ChannelRetentionSettings || (exports.ChannelRetentionSettings = {})));
var AppInstanceRetentionSettings;
(function (AppInstanceRetentionSettings) {
  /**
   * @internal
   */
  AppInstanceRetentionSettings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AppInstanceRetentionSettings = exports.AppInstanceRetentionSettings || (exports.AppInstanceRetentionSettings = {}))
);
var AppInstanceStreamingConfiguration;
(function (AppInstanceStreamingConfiguration) {
  /**
   * @internal
   */
  AppInstanceStreamingConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ResourceArn && { ResourceArn: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (AppInstanceStreamingConfiguration =
    exports.AppInstanceStreamingConfiguration || (exports.AppInstanceStreamingConfiguration = {}))
);
var AppInstanceUser;
(function (AppInstanceUser) {
  /**
   * @internal
   */
  AppInstanceUser.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Name && { Name: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: smithy_client_1.SENSITIVE_STRING }),
  });
})((AppInstanceUser = exports.AppInstanceUser || (exports.AppInstanceUser = {})));
var AppInstanceUserSummary;
(function (AppInstanceUserSummary) {
  /**
   * @internal
   */
  AppInstanceUserSummary.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Name && { Name: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: smithy_client_1.SENSITIVE_STRING }),
  });
})((AppInstanceUserSummary = exports.AppInstanceUserSummary || (exports.AppInstanceUserSummary = {})));
var ChannelMembershipType;
(function (ChannelMembershipType) {
  ChannelMembershipType["DEFAULT"] = "DEFAULT";
  ChannelMembershipType["HIDDEN"] = "HIDDEN";
})((ChannelMembershipType = exports.ChannelMembershipType || (exports.ChannelMembershipType = {})));
var AppInstanceUserMembershipSummary;
(function (AppInstanceUserMembershipSummary) {
  /**
   * @internal
   */
  AppInstanceUserMembershipSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AppInstanceUserMembershipSummary =
    exports.AppInstanceUserMembershipSummary || (exports.AppInstanceUserMembershipSummary = {}))
);
var AssociatePhoneNumbersWithVoiceConnectorRequest;
(function (AssociatePhoneNumbersWithVoiceConnectorRequest) {
  /**
   * @internal
   */
  AssociatePhoneNumbersWithVoiceConnectorRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (AssociatePhoneNumbersWithVoiceConnectorRequest =
    exports.AssociatePhoneNumbersWithVoiceConnectorRequest ||
    (exports.AssociatePhoneNumbersWithVoiceConnectorRequest = {}))
);
var PhoneNumberError;
(function (PhoneNumberError) {
  /**
   * @internal
   */
  PhoneNumberError.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PhoneNumberError = exports.PhoneNumberError || (exports.PhoneNumberError = {})));
var AssociatePhoneNumbersWithVoiceConnectorResponse;
(function (AssociatePhoneNumbersWithVoiceConnectorResponse) {
  /**
   * @internal
   */
  AssociatePhoneNumbersWithVoiceConnectorResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssociatePhoneNumbersWithVoiceConnectorResponse =
    exports.AssociatePhoneNumbersWithVoiceConnectorResponse ||
    (exports.AssociatePhoneNumbersWithVoiceConnectorResponse = {}))
);
var BadRequestException;
(function (BadRequestException) {
  /**
   * @internal
   */
  BadRequestException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BadRequestException = exports.BadRequestException || (exports.BadRequestException = {})));
var ForbiddenException;
(function (ForbiddenException) {
  /**
   * @internal
   */
  ForbiddenException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ForbiddenException = exports.ForbiddenException || (exports.ForbiddenException = {})));
var NotFoundException;
(function (NotFoundException) {
  /**
   * @internal
   */
  NotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NotFoundException = exports.NotFoundException || (exports.NotFoundException = {})));
var ServiceFailureException;
(function (ServiceFailureException) {
  /**
   * @internal
   */
  ServiceFailureException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ServiceFailureException = exports.ServiceFailureException || (exports.ServiceFailureException = {})));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
  /**
   * @internal
   */
  ServiceUnavailableException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {})));
var ThrottledClientException;
(function (ThrottledClientException) {
  /**
   * @internal
   */
  ThrottledClientException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ThrottledClientException = exports.ThrottledClientException || (exports.ThrottledClientException = {})));
var UnauthorizedClientException;
(function (UnauthorizedClientException) {
  /**
   * @internal
   */
  UnauthorizedClientException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UnauthorizedClientException = exports.UnauthorizedClientException || (exports.UnauthorizedClientException = {})));
var AssociatePhoneNumbersWithVoiceConnectorGroupRequest;
(function (AssociatePhoneNumbersWithVoiceConnectorGroupRequest) {
  /**
   * @internal
   */
  AssociatePhoneNumbersWithVoiceConnectorGroupRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (AssociatePhoneNumbersWithVoiceConnectorGroupRequest =
    exports.AssociatePhoneNumbersWithVoiceConnectorGroupRequest ||
    (exports.AssociatePhoneNumbersWithVoiceConnectorGroupRequest = {}))
);
var AssociatePhoneNumbersWithVoiceConnectorGroupResponse;
(function (AssociatePhoneNumbersWithVoiceConnectorGroupResponse) {
  /**
   * @internal
   */
  AssociatePhoneNumbersWithVoiceConnectorGroupResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssociatePhoneNumbersWithVoiceConnectorGroupResponse =
    exports.AssociatePhoneNumbersWithVoiceConnectorGroupResponse ||
    (exports.AssociatePhoneNumbersWithVoiceConnectorGroupResponse = {}))
);
var AssociatePhoneNumberWithUserRequest;
(function (AssociatePhoneNumberWithUserRequest) {
  /**
   * @internal
   */
  AssociatePhoneNumberWithUserRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.E164PhoneNumber && { E164PhoneNumber: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (AssociatePhoneNumberWithUserRequest =
    exports.AssociatePhoneNumberWithUserRequest || (exports.AssociatePhoneNumberWithUserRequest = {}))
);
var AssociatePhoneNumberWithUserResponse;
(function (AssociatePhoneNumberWithUserResponse) {
  /**
   * @internal
   */
  AssociatePhoneNumberWithUserResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssociatePhoneNumberWithUserResponse =
    exports.AssociatePhoneNumberWithUserResponse || (exports.AssociatePhoneNumberWithUserResponse = {}))
);
var AssociateSigninDelegateGroupsWithAccountRequest;
(function (AssociateSigninDelegateGroupsWithAccountRequest) {
  /**
   * @internal
   */
  AssociateSigninDelegateGroupsWithAccountRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssociateSigninDelegateGroupsWithAccountRequest =
    exports.AssociateSigninDelegateGroupsWithAccountRequest ||
    (exports.AssociateSigninDelegateGroupsWithAccountRequest = {}))
);
var AssociateSigninDelegateGroupsWithAccountResponse;
(function (AssociateSigninDelegateGroupsWithAccountResponse) {
  /**
   * @internal
   */
  AssociateSigninDelegateGroupsWithAccountResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssociateSigninDelegateGroupsWithAccountResponse =
    exports.AssociateSigninDelegateGroupsWithAccountResponse ||
    (exports.AssociateSigninDelegateGroupsWithAccountResponse = {}))
);
var Attendee;
(function (Attendee) {
  /**
   * @internal
   */
  Attendee.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ExternalUserId && { ExternalUserId: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.JoinToken && { JoinToken: smithy_client_1.SENSITIVE_STRING }),
  });
})((Attendee = exports.Attendee || (exports.Attendee = {})));
var Tag;
(function (Tag) {
  /**
   * @internal
   */
  Tag.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Key && { Key: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Value && { Value: smithy_client_1.SENSITIVE_STRING }),
  });
})((Tag = exports.Tag || (exports.Tag = {})));
var BatchChannelMemberships;
(function (BatchChannelMemberships) {
  /**
   * @internal
   */
  BatchChannelMemberships.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.InvitedBy && { InvitedBy: Identity.filterSensitiveLog(obj.InvitedBy) }),
    ...(obj.Members && { Members: obj.Members.map((item) => Identity.filterSensitiveLog(item)) }),
  });
})((BatchChannelMemberships = exports.BatchChannelMemberships || (exports.BatchChannelMemberships = {})));
var CreateAttendeeRequestItem;
(function (CreateAttendeeRequestItem) {
  /**
   * @internal
   */
  CreateAttendeeRequestItem.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ExternalUserId && { ExternalUserId: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
})((CreateAttendeeRequestItem = exports.CreateAttendeeRequestItem || (exports.CreateAttendeeRequestItem = {})));
var BatchCreateAttendeeRequest;
(function (BatchCreateAttendeeRequest) {
  /**
   * @internal
   */
  BatchCreateAttendeeRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Attendees && {
      Attendees: obj.Attendees.map((item) => CreateAttendeeRequestItem.filterSensitiveLog(item)),
    }),
  });
})((BatchCreateAttendeeRequest = exports.BatchCreateAttendeeRequest || (exports.BatchCreateAttendeeRequest = {})));
var CreateAttendeeError;
(function (CreateAttendeeError) {
  /**
   * @internal
   */
  CreateAttendeeError.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ExternalUserId && { ExternalUserId: smithy_client_1.SENSITIVE_STRING }),
  });
})((CreateAttendeeError = exports.CreateAttendeeError || (exports.CreateAttendeeError = {})));
var BatchCreateAttendeeResponse;
(function (BatchCreateAttendeeResponse) {
  /**
   * @internal
   */
  BatchCreateAttendeeResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => Attendee.filterSensitiveLog(item)) }),
    ...(obj.Errors && { Errors: obj.Errors.map((item) => CreateAttendeeError.filterSensitiveLog(item)) }),
  });
})((BatchCreateAttendeeResponse = exports.BatchCreateAttendeeResponse || (exports.BatchCreateAttendeeResponse = {})));
var ResourceLimitExceededException;
(function (ResourceLimitExceededException) {
  /**
   * @internal
   */
  ResourceLimitExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ResourceLimitExceededException =
    exports.ResourceLimitExceededException || (exports.ResourceLimitExceededException = {}))
);
var BatchCreateChannelMembershipRequest;
(function (BatchCreateChannelMembershipRequest) {
  /**
   * @internal
   */
  BatchCreateChannelMembershipRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchCreateChannelMembershipRequest =
    exports.BatchCreateChannelMembershipRequest || (exports.BatchCreateChannelMembershipRequest = {}))
);
var BatchCreateChannelMembershipError;
(function (BatchCreateChannelMembershipError) {
  /**
   * @internal
   */
  BatchCreateChannelMembershipError.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchCreateChannelMembershipError =
    exports.BatchCreateChannelMembershipError || (exports.BatchCreateChannelMembershipError = {}))
);
var BatchCreateChannelMembershipResponse;
(function (BatchCreateChannelMembershipResponse) {
  /**
   * @internal
   */
  BatchCreateChannelMembershipResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.BatchChannelMemberships && {
      BatchChannelMemberships: BatchChannelMemberships.filterSensitiveLog(obj.BatchChannelMemberships),
    }),
  });
})(
  (BatchCreateChannelMembershipResponse =
    exports.BatchCreateChannelMembershipResponse || (exports.BatchCreateChannelMembershipResponse = {}))
);
var RoomMembershipRole;
(function (RoomMembershipRole) {
  RoomMembershipRole["Administrator"] = "Administrator";
  RoomMembershipRole["Member"] = "Member";
})((RoomMembershipRole = exports.RoomMembershipRole || (exports.RoomMembershipRole = {})));
var MembershipItem;
(function (MembershipItem) {
  /**
   * @internal
   */
  MembershipItem.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MembershipItem = exports.MembershipItem || (exports.MembershipItem = {})));
var BatchCreateRoomMembershipRequest;
(function (BatchCreateRoomMembershipRequest) {
  /**
   * @internal
   */
  BatchCreateRoomMembershipRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchCreateRoomMembershipRequest =
    exports.BatchCreateRoomMembershipRequest || (exports.BatchCreateRoomMembershipRequest = {}))
);
var MemberError;
(function (MemberError) {
  /**
   * @internal
   */
  MemberError.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MemberError = exports.MemberError || (exports.MemberError = {})));
var BatchCreateRoomMembershipResponse;
(function (BatchCreateRoomMembershipResponse) {
  /**
   * @internal
   */
  BatchCreateRoomMembershipResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchCreateRoomMembershipResponse =
    exports.BatchCreateRoomMembershipResponse || (exports.BatchCreateRoomMembershipResponse = {}))
);
var BatchDeletePhoneNumberRequest;
(function (BatchDeletePhoneNumberRequest) {
  /**
   * @internal
   */
  BatchDeletePhoneNumberRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchDeletePhoneNumberRequest =
    exports.BatchDeletePhoneNumberRequest || (exports.BatchDeletePhoneNumberRequest = {}))
);
var BatchDeletePhoneNumberResponse;
(function (BatchDeletePhoneNumberResponse) {
  /**
   * @internal
   */
  BatchDeletePhoneNumberResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchDeletePhoneNumberResponse =
    exports.BatchDeletePhoneNumberResponse || (exports.BatchDeletePhoneNumberResponse = {}))
);
var BatchSuspendUserRequest;
(function (BatchSuspendUserRequest) {
  /**
   * @internal
   */
  BatchSuspendUserRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchSuspendUserRequest = exports.BatchSuspendUserRequest || (exports.BatchSuspendUserRequest = {})));
var UserError;
(function (UserError) {
  /**
   * @internal
   */
  UserError.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UserError = exports.UserError || (exports.UserError = {})));
var BatchSuspendUserResponse;
(function (BatchSuspendUserResponse) {
  /**
   * @internal
   */
  BatchSuspendUserResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchSuspendUserResponse = exports.BatchSuspendUserResponse || (exports.BatchSuspendUserResponse = {})));
var BatchUnsuspendUserRequest;
(function (BatchUnsuspendUserRequest) {
  /**
   * @internal
   */
  BatchUnsuspendUserRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchUnsuspendUserRequest = exports.BatchUnsuspendUserRequest || (exports.BatchUnsuspendUserRequest = {})));
var BatchUnsuspendUserResponse;
(function (BatchUnsuspendUserResponse) {
  /**
   * @internal
   */
  BatchUnsuspendUserResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchUnsuspendUserResponse = exports.BatchUnsuspendUserResponse || (exports.BatchUnsuspendUserResponse = {})));
var PhoneNumberProductType;
(function (PhoneNumberProductType) {
  PhoneNumberProductType["BusinessCalling"] = "BusinessCalling";
  PhoneNumberProductType["SipMediaApplicationDialIn"] = "SipMediaApplicationDialIn";
  PhoneNumberProductType["VoiceConnector"] = "VoiceConnector";
})((PhoneNumberProductType = exports.PhoneNumberProductType || (exports.PhoneNumberProductType = {})));
var UpdatePhoneNumberRequestItem;
(function (UpdatePhoneNumberRequestItem) {
  /**
   * @internal
   */
  UpdatePhoneNumberRequestItem.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.CallingName && { CallingName: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (UpdatePhoneNumberRequestItem = exports.UpdatePhoneNumberRequestItem || (exports.UpdatePhoneNumberRequestItem = {}))
);
var BatchUpdatePhoneNumberRequest;
(function (BatchUpdatePhoneNumberRequest) {
  /**
   * @internal
   */
  BatchUpdatePhoneNumberRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UpdatePhoneNumberRequestItems && {
      UpdatePhoneNumberRequestItems: obj.UpdatePhoneNumberRequestItems.map((item) =>
        UpdatePhoneNumberRequestItem.filterSensitiveLog(item)
      ),
    }),
  });
})(
  (BatchUpdatePhoneNumberRequest =
    exports.BatchUpdatePhoneNumberRequest || (exports.BatchUpdatePhoneNumberRequest = {}))
);
var BatchUpdatePhoneNumberResponse;
(function (BatchUpdatePhoneNumberResponse) {
  /**
   * @internal
   */
  BatchUpdatePhoneNumberResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchUpdatePhoneNumberResponse =
    exports.BatchUpdatePhoneNumberResponse || (exports.BatchUpdatePhoneNumberResponse = {}))
);
var UserType;
(function (UserType) {
  UserType["PrivateUser"] = "PrivateUser";
  UserType["SharedDevice"] = "SharedDevice";
})((UserType = exports.UserType || (exports.UserType = {})));
var UpdateUserRequestItem;
(function (UpdateUserRequestItem) {
  /**
   * @internal
   */
  UpdateUserRequestItem.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AlexaForBusinessMetadata && {
      AlexaForBusinessMetadata: AlexaForBusinessMetadata.filterSensitiveLog(obj.AlexaForBusinessMetadata),
    }),
  });
})((UpdateUserRequestItem = exports.UpdateUserRequestItem || (exports.UpdateUserRequestItem = {})));
var BatchUpdateUserRequest;
(function (BatchUpdateUserRequest) {
  /**
   * @internal
   */
  BatchUpdateUserRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UpdateUserRequestItems && {
      UpdateUserRequestItems: obj.UpdateUserRequestItems.map((item) => UpdateUserRequestItem.filterSensitiveLog(item)),
    }),
  });
})((BatchUpdateUserRequest = exports.BatchUpdateUserRequest || (exports.BatchUpdateUserRequest = {})));
var BatchUpdateUserResponse;
(function (BatchUpdateUserResponse) {
  /**
   * @internal
   */
  BatchUpdateUserResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchUpdateUserResponse = exports.BatchUpdateUserResponse || (exports.BatchUpdateUserResponse = {})));
var BotType;
(function (BotType) {
  BotType["ChatBot"] = "ChatBot";
})((BotType = exports.BotType || (exports.BotType = {})));
var Bot;
(function (Bot) {
  /**
   * @internal
   */
  Bot.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.DisplayName && { DisplayName: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.BotEmail && { BotEmail: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.SecurityToken && { SecurityToken: smithy_client_1.SENSITIVE_STRING }),
  });
})((Bot = exports.Bot || (exports.Bot = {})));
var BusinessCallingSettings;
(function (BusinessCallingSettings) {
  /**
   * @internal
   */
  BusinessCallingSettings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BusinessCallingSettings = exports.BusinessCallingSettings || (exports.BusinessCallingSettings = {})));
var CallingNameStatus;
(function (CallingNameStatus) {
  CallingNameStatus["Unassigned"] = "Unassigned";
  CallingNameStatus["UpdateFailed"] = "UpdateFailed";
  CallingNameStatus["UpdateInProgress"] = "UpdateInProgress";
  CallingNameStatus["UpdateSucceeded"] = "UpdateSucceeded";
})((CallingNameStatus = exports.CallingNameStatus || (exports.CallingNameStatus = {})));
var Capability;
(function (Capability) {
  Capability["SMS"] = "SMS";
  Capability["Voice"] = "Voice";
})((Capability = exports.Capability || (exports.Capability = {})));
var ChannelMode;
(function (ChannelMode) {
  ChannelMode["RESTRICTED"] = "RESTRICTED";
  ChannelMode["UNRESTRICTED"] = "UNRESTRICTED";
})((ChannelMode = exports.ChannelMode || (exports.ChannelMode = {})));
var ChannelPrivacy;
(function (ChannelPrivacy) {
  ChannelPrivacy["PRIVATE"] = "PRIVATE";
  ChannelPrivacy["PUBLIC"] = "PUBLIC";
})((ChannelPrivacy = exports.ChannelPrivacy || (exports.ChannelPrivacy = {})));
var Channel;
(function (Channel) {
  /**
   * @internal
   */
  Channel.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Name && { Name: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.CreatedBy && { CreatedBy: Identity.filterSensitiveLog(obj.CreatedBy) }),
  });
})((Channel = exports.Channel || (exports.Channel = {})));
var ChannelBan;
(function (ChannelBan) {
  /**
   * @internal
   */
  ChannelBan.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Member && { Member: Identity.filterSensitiveLog(obj.Member) }),
    ...(obj.CreatedBy && { CreatedBy: Identity.filterSensitiveLog(obj.CreatedBy) }),
  });
})((ChannelBan = exports.ChannelBan || (exports.ChannelBan = {})));
var ChannelBanSummary;
(function (ChannelBanSummary) {
  /**
   * @internal
   */
  ChannelBanSummary.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Member && { Member: Identity.filterSensitiveLog(obj.Member) }),
  });
})((ChannelBanSummary = exports.ChannelBanSummary || (exports.ChannelBanSummary = {})));
var ChannelMembership;
(function (ChannelMembership) {
  /**
   * @internal
   */
  ChannelMembership.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.InvitedBy && { InvitedBy: Identity.filterSensitiveLog(obj.InvitedBy) }),
    ...(obj.Member && { Member: Identity.filterSensitiveLog(obj.Member) }),
  });
})((ChannelMembership = exports.ChannelMembership || (exports.ChannelMembership = {})));
var ChannelSummary;
(function (ChannelSummary) {
  /**
   * @internal
   */
  ChannelSummary.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Name && { Name: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: smithy_client_1.SENSITIVE_STRING }),
  });
})((ChannelSummary = exports.ChannelSummary || (exports.ChannelSummary = {})));
var ChannelMembershipForAppInstanceUserSummary;
(function (ChannelMembershipForAppInstanceUserSummary) {
  /**
   * @internal
   */
  ChannelMembershipForAppInstanceUserSummary.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ChannelSummary && { ChannelSummary: ChannelSummary.filterSensitiveLog(obj.ChannelSummary) }),
  });
})(
  (ChannelMembershipForAppInstanceUserSummary =
    exports.ChannelMembershipForAppInstanceUserSummary || (exports.ChannelMembershipForAppInstanceUserSummary = {}))
);
var ChannelMembershipSummary;
(function (ChannelMembershipSummary) {
  /**
   * @internal
   */
  ChannelMembershipSummary.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Member && { Member: Identity.filterSensitiveLog(obj.Member) }),
  });
})((ChannelMembershipSummary = exports.ChannelMembershipSummary || (exports.ChannelMembershipSummary = {})));
var ChannelMessagePersistenceType;
(function (ChannelMessagePersistenceType) {
  ChannelMessagePersistenceType["NON_PERSISTENT"] = "NON_PERSISTENT";
  ChannelMessagePersistenceType["PERSISTENT"] = "PERSISTENT";
})(
  (ChannelMessagePersistenceType =
    exports.ChannelMessagePersistenceType || (exports.ChannelMessagePersistenceType = {}))
);
var ChannelMessageType;
(function (ChannelMessageType) {
  ChannelMessageType["CONTROL"] = "CONTROL";
  ChannelMessageType["STANDARD"] = "STANDARD";
})((ChannelMessageType = exports.ChannelMessageType || (exports.ChannelMessageType = {})));
var ChannelMessage;
(function (ChannelMessage) {
  /**
   * @internal
   */
  ChannelMessage.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Content && { Content: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Sender && { Sender: Identity.filterSensitiveLog(obj.Sender) }),
  });
})((ChannelMessage = exports.ChannelMessage || (exports.ChannelMessage = {})));
var ChannelMessageSummary;
(function (ChannelMessageSummary) {
  /**
   * @internal
   */
  ChannelMessageSummary.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Content && { Content: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Sender && { Sender: Identity.filterSensitiveLog(obj.Sender) }),
  });
})((ChannelMessageSummary = exports.ChannelMessageSummary || (exports.ChannelMessageSummary = {})));
var ChannelModeratedByAppInstanceUserSummary;
(function (ChannelModeratedByAppInstanceUserSummary) {
  /**
   * @internal
   */
  ChannelModeratedByAppInstanceUserSummary.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ChannelSummary && { ChannelSummary: ChannelSummary.filterSensitiveLog(obj.ChannelSummary) }),
  });
})(
  (ChannelModeratedByAppInstanceUserSummary =
    exports.ChannelModeratedByAppInstanceUserSummary || (exports.ChannelModeratedByAppInstanceUserSummary = {}))
);
var ChannelModerator;
(function (ChannelModerator) {
  /**
   * @internal
   */
  ChannelModerator.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Moderator && { Moderator: Identity.filterSensitiveLog(obj.Moderator) }),
    ...(obj.CreatedBy && { CreatedBy: Identity.filterSensitiveLog(obj.CreatedBy) }),
  });
})((ChannelModerator = exports.ChannelModerator || (exports.ChannelModerator = {})));
var ChannelModeratorSummary;
(function (ChannelModeratorSummary) {
  /**
   * @internal
   */
  ChannelModeratorSummary.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Moderator && { Moderator: Identity.filterSensitiveLog(obj.Moderator) }),
  });
})((ChannelModeratorSummary = exports.ChannelModeratorSummary || (exports.ChannelModeratorSummary = {})));
var ConflictException;
(function (ConflictException) {
  /**
   * @internal
   */
  ConflictException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConflictException = exports.ConflictException || (exports.ConflictException = {})));
var ConversationRetentionSettings;
(function (ConversationRetentionSettings) {
  /**
   * @internal
   */
  ConversationRetentionSettings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ConversationRetentionSettings =
    exports.ConversationRetentionSettings || (exports.ConversationRetentionSettings = {}))
);
var CreateAccountRequest;
(function (CreateAccountRequest) {
  /**
   * @internal
   */
  CreateAccountRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateAccountRequest = exports.CreateAccountRequest || (exports.CreateAccountRequest = {})));
var CreateAccountResponse;
(function (CreateAccountResponse) {
  /**
   * @internal
   */
  CreateAccountResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateAccountResponse = exports.CreateAccountResponse || (exports.CreateAccountResponse = {})));
var CreateAppInstanceRequest;
(function (CreateAppInstanceRequest) {
  /**
   * @internal
   */
  CreateAppInstanceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Name && { Name: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.ClientRequestToken && { ClientRequestToken: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
})((CreateAppInstanceRequest = exports.CreateAppInstanceRequest || (exports.CreateAppInstanceRequest = {})));
var CreateAppInstanceResponse;
(function (CreateAppInstanceResponse) {
  /**
   * @internal
   */
  CreateAppInstanceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateAppInstanceResponse = exports.CreateAppInstanceResponse || (exports.CreateAppInstanceResponse = {})));
var CreateAppInstanceAdminRequest;
(function (CreateAppInstanceAdminRequest) {
  /**
   * @internal
   */
  CreateAppInstanceAdminRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateAppInstanceAdminRequest =
    exports.CreateAppInstanceAdminRequest || (exports.CreateAppInstanceAdminRequest = {}))
);
var CreateAppInstanceAdminResponse;
(function (CreateAppInstanceAdminResponse) {
  /**
   * @internal
   */
  CreateAppInstanceAdminResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AppInstanceAdmin && { AppInstanceAdmin: Identity.filterSensitiveLog(obj.AppInstanceAdmin) }),
  });
})(
  (CreateAppInstanceAdminResponse =
    exports.CreateAppInstanceAdminResponse || (exports.CreateAppInstanceAdminResponse = {}))
);
var CreateAppInstanceUserRequest;
(function (CreateAppInstanceUserRequest) {
  /**
   * @internal
   */
  CreateAppInstanceUserRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AppInstanceUserId && { AppInstanceUserId: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Name && { Name: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.ClientRequestToken && { ClientRequestToken: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
})(
  (CreateAppInstanceUserRequest = exports.CreateAppInstanceUserRequest || (exports.CreateAppInstanceUserRequest = {}))
);
var CreateAppInstanceUserResponse;
(function (CreateAppInstanceUserResponse) {
  /**
   * @internal
   */
  CreateAppInstanceUserResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateAppInstanceUserResponse =
    exports.CreateAppInstanceUserResponse || (exports.CreateAppInstanceUserResponse = {}))
);
var CreateAttendeeRequest;
(function (CreateAttendeeRequest) {
  /**
   * @internal
   */
  CreateAttendeeRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ExternalUserId && { ExternalUserId: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
})((CreateAttendeeRequest = exports.CreateAttendeeRequest || (exports.CreateAttendeeRequest = {})));
var CreateAttendeeResponse;
(function (CreateAttendeeResponse) {
  /**
   * @internal
   */
  CreateAttendeeResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Attendee && { Attendee: Attendee.filterSensitiveLog(obj.Attendee) }),
  });
})((CreateAttendeeResponse = exports.CreateAttendeeResponse || (exports.CreateAttendeeResponse = {})));
var CreateBotRequest;
(function (CreateBotRequest) {
  /**
   * @internal
   */
  CreateBotRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.DisplayName && { DisplayName: smithy_client_1.SENSITIVE_STRING }),
  });
})((CreateBotRequest = exports.CreateBotRequest || (exports.CreateBotRequest = {})));
var CreateBotResponse;
(function (CreateBotResponse) {
  /**
   * @internal
   */
  CreateBotResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Bot && { Bot: Bot.filterSensitiveLog(obj.Bot) }),
  });
})((CreateBotResponse = exports.CreateBotResponse || (exports.CreateBotResponse = {})));
var CreateChannelRequest;
(function (CreateChannelRequest) {
  /**
   * @internal
   */
  CreateChannelRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Name && { Name: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.ClientRequestToken && { ClientRequestToken: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
})((CreateChannelRequest = exports.CreateChannelRequest || (exports.CreateChannelRequest = {})));
var CreateChannelResponse;
(function (CreateChannelResponse) {
  /**
   * @internal
   */
  CreateChannelResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateChannelResponse = exports.CreateChannelResponse || (exports.CreateChannelResponse = {})));
var CreateChannelBanRequest;
(function (CreateChannelBanRequest) {
  /**
   * @internal
   */
  CreateChannelBanRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateChannelBanRequest = exports.CreateChannelBanRequest || (exports.CreateChannelBanRequest = {})));
var CreateChannelBanResponse;
(function (CreateChannelBanResponse) {
  /**
   * @internal
   */
  CreateChannelBanResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Member && { Member: Identity.filterSensitiveLog(obj.Member) }),
  });
})((CreateChannelBanResponse = exports.CreateChannelBanResponse || (exports.CreateChannelBanResponse = {})));
var CreateChannelMembershipRequest;
(function (CreateChannelMembershipRequest) {
  /**
   * @internal
   */
  CreateChannelMembershipRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateChannelMembershipRequest =
    exports.CreateChannelMembershipRequest || (exports.CreateChannelMembershipRequest = {}))
);
var CreateChannelMembershipResponse;
(function (CreateChannelMembershipResponse) {
  /**
   * @internal
   */
  CreateChannelMembershipResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Member && { Member: Identity.filterSensitiveLog(obj.Member) }),
  });
})(
  (CreateChannelMembershipResponse =
    exports.CreateChannelMembershipResponse || (exports.CreateChannelMembershipResponse = {}))
);
var CreateChannelModeratorRequest;
(function (CreateChannelModeratorRequest) {
  /**
   * @internal
   */
  CreateChannelModeratorRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateChannelModeratorRequest =
    exports.CreateChannelModeratorRequest || (exports.CreateChannelModeratorRequest = {}))
);
var CreateChannelModeratorResponse;
(function (CreateChannelModeratorResponse) {
  /**
   * @internal
   */
  CreateChannelModeratorResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ChannelModerator && { ChannelModerator: Identity.filterSensitiveLog(obj.ChannelModerator) }),
  });
})(
  (CreateChannelModeratorResponse =
    exports.CreateChannelModeratorResponse || (exports.CreateChannelModeratorResponse = {}))
);
var MeetingNotificationConfiguration;
(function (MeetingNotificationConfiguration) {
  /**
   * @internal
   */
  MeetingNotificationConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SnsTopicArn && { SnsTopicArn: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.SqsQueueArn && { SqsQueueArn: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (MeetingNotificationConfiguration =
    exports.MeetingNotificationConfiguration || (exports.MeetingNotificationConfiguration = {}))
);
var CreateMeetingRequest;
(function (CreateMeetingRequest) {
  /**
   * @internal
   */
  CreateMeetingRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientRequestToken && { ClientRequestToken: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.ExternalMeetingId && { ExternalMeetingId: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.MeetingHostId && { MeetingHostId: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
    ...(obj.NotificationsConfiguration && {
      NotificationsConfiguration: MeetingNotificationConfiguration.filterSensitiveLog(obj.NotificationsConfiguration),
    }),
  });
})((CreateMeetingRequest = exports.CreateMeetingRequest || (exports.CreateMeetingRequest = {})));
var MediaPlacement;
(function (MediaPlacement) {
  /**
   * @internal
   */
  MediaPlacement.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MediaPlacement = exports.MediaPlacement || (exports.MediaPlacement = {})));
var Meeting;
(function (Meeting) {
  /**
   * @internal
   */
  Meeting.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ExternalMeetingId && { ExternalMeetingId: smithy_client_1.SENSITIVE_STRING }),
  });
})((Meeting = exports.Meeting || (exports.Meeting = {})));
var CreateMeetingResponse;
(function (CreateMeetingResponse) {
  /**
   * @internal
   */
  CreateMeetingResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Meeting && { Meeting: Meeting.filterSensitiveLog(obj.Meeting) }),
  });
})((CreateMeetingResponse = exports.CreateMeetingResponse || (exports.CreateMeetingResponse = {})));
var CreateMeetingDialOutRequest;
(function (CreateMeetingDialOutRequest) {
  /**
   * @internal
   */
  CreateMeetingDialOutRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.FromPhoneNumber && { FromPhoneNumber: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.ToPhoneNumber && { ToPhoneNumber: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.JoinToken && { JoinToken: smithy_client_1.SENSITIVE_STRING }),
  });
})((CreateMeetingDialOutRequest = exports.CreateMeetingDialOutRequest || (exports.CreateMeetingDialOutRequest = {})));
var CreateMeetingDialOutResponse;
(function (CreateMeetingDialOutResponse) {
  /**
   * @internal
   */
  CreateMeetingDialOutResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateMeetingDialOutResponse = exports.CreateMeetingDialOutResponse || (exports.CreateMeetingDialOutResponse = {}))
);
var CreateMeetingWithAttendeesRequest;
(function (CreateMeetingWithAttendeesRequest) {
  /**
   * @internal
   */
  CreateMeetingWithAttendeesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientRequestToken && { ClientRequestToken: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.ExternalMeetingId && { ExternalMeetingId: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.MeetingHostId && { MeetingHostId: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
    ...(obj.NotificationsConfiguration && {
      NotificationsConfiguration: MeetingNotificationConfiguration.filterSensitiveLog(obj.NotificationsConfiguration),
    }),
    ...(obj.Attendees && {
      Attendees: obj.Attendees.map((item) => CreateAttendeeRequestItem.filterSensitiveLog(item)),
    }),
  });
})(
  (CreateMeetingWithAttendeesRequest =
    exports.CreateMeetingWithAttendeesRequest || (exports.CreateMeetingWithAttendeesRequest = {}))
);
var CreateMeetingWithAttendeesResponse;
(function (CreateMeetingWithAttendeesResponse) {
  /**
   * @internal
   */
  CreateMeetingWithAttendeesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Meeting && { Meeting: Meeting.filterSensitiveLog(obj.Meeting) }),
    ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => Attendee.filterSensitiveLog(item)) }),
    ...(obj.Errors && { Errors: obj.Errors.map((item) => CreateAttendeeError.filterSensitiveLog(item)) }),
  });
})(
  (CreateMeetingWithAttendeesResponse =
    exports.CreateMeetingWithAttendeesResponse || (exports.CreateMeetingWithAttendeesResponse = {}))
);
var CreatePhoneNumberOrderRequest;
(function (CreatePhoneNumberOrderRequest) {
  /**
   * @internal
   */
  CreatePhoneNumberOrderRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (CreatePhoneNumberOrderRequest =
    exports.CreatePhoneNumberOrderRequest || (exports.CreatePhoneNumberOrderRequest = {}))
);
var OrderedPhoneNumberStatus;
(function (OrderedPhoneNumberStatus) {
  OrderedPhoneNumberStatus["Acquired"] = "Acquired";
  OrderedPhoneNumberStatus["Failed"] = "Failed";
  OrderedPhoneNumberStatus["Processing"] = "Processing";
})((OrderedPhoneNumberStatus = exports.OrderedPhoneNumberStatus || (exports.OrderedPhoneNumberStatus = {})));
var OrderedPhoneNumber;
(function (OrderedPhoneNumber) {
  /**
   * @internal
   */
  OrderedPhoneNumber.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.E164PhoneNumber && { E164PhoneNumber: smithy_client_1.SENSITIVE_STRING }),
  });
})((OrderedPhoneNumber = exports.OrderedPhoneNumber || (exports.OrderedPhoneNumber = {})));
var PhoneNumberOrderStatus;
(function (PhoneNumberOrderStatus) {
  PhoneNumberOrderStatus["Failed"] = "Failed";
  PhoneNumberOrderStatus["Partial"] = "Partial";
  PhoneNumberOrderStatus["Processing"] = "Processing";
  PhoneNumberOrderStatus["Successful"] = "Successful";
})((PhoneNumberOrderStatus = exports.PhoneNumberOrderStatus || (exports.PhoneNumberOrderStatus = {})));
var PhoneNumberOrder;
(function (PhoneNumberOrder) {
  /**
   * @internal
   */
  PhoneNumberOrder.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.OrderedPhoneNumbers && {
      OrderedPhoneNumbers: obj.OrderedPhoneNumbers.map((item) => OrderedPhoneNumber.filterSensitiveLog(item)),
    }),
  });
})((PhoneNumberOrder = exports.PhoneNumberOrder || (exports.PhoneNumberOrder = {})));
var CreatePhoneNumberOrderResponse;
(function (CreatePhoneNumberOrderResponse) {
  /**
   * @internal
   */
  CreatePhoneNumberOrderResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.PhoneNumberOrder && { PhoneNumberOrder: PhoneNumberOrder.filterSensitiveLog(obj.PhoneNumberOrder) }),
  });
})(
  (CreatePhoneNumberOrderResponse =
    exports.CreatePhoneNumberOrderResponse || (exports.CreatePhoneNumberOrderResponse = {}))
);
var GeoMatchLevel;
(function (GeoMatchLevel) {
  GeoMatchLevel["AreaCode"] = "AreaCode";
  GeoMatchLevel["Country"] = "Country";
})((GeoMatchLevel = exports.GeoMatchLevel || (exports.GeoMatchLevel = {})));
var GeoMatchParams;
(function (GeoMatchParams) {
  /**
   * @internal
   */
  GeoMatchParams.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GeoMatchParams = exports.GeoMatchParams || (exports.GeoMatchParams = {})));
var NumberSelectionBehavior;
(function (NumberSelectionBehavior) {
  NumberSelectionBehavior["AvoidSticky"] = "AvoidSticky";
  NumberSelectionBehavior["PreferSticky"] = "PreferSticky";
})((NumberSelectionBehavior = exports.NumberSelectionBehavior || (exports.NumberSelectionBehavior = {})));
var CreateProxySessionRequest;
(function (CreateProxySessionRequest) {
  /**
   * @internal
   */
  CreateProxySessionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ParticipantPhoneNumbers && { ParticipantPhoneNumbers: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Name && { Name: smithy_client_1.SENSITIVE_STRING }),
  });
})((CreateProxySessionRequest = exports.CreateProxySessionRequest || (exports.CreateProxySessionRequest = {})));
var Participant;
(function (Participant) {
  /**
   * @internal
   */
  Participant.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.PhoneNumber && { PhoneNumber: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.ProxyPhoneNumber && { ProxyPhoneNumber: smithy_client_1.SENSITIVE_STRING }),
  });
})((Participant = exports.Participant || (exports.Participant = {})));
var ProxySessionStatus;
(function (ProxySessionStatus) {
  ProxySessionStatus["Closed"] = "Closed";
  ProxySessionStatus["InProgress"] = "InProgress";
  ProxySessionStatus["Open"] = "Open";
})((ProxySessionStatus = exports.ProxySessionStatus || (exports.ProxySessionStatus = {})));
var ProxySession;
(function (ProxySession) {
  /**
   * @internal
   */
  ProxySession.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Participants && { Participants: obj.Participants.map((item) => Participant.filterSensitiveLog(item)) }),
  });
})((ProxySession = exports.ProxySession || (exports.ProxySession = {})));
var CreateProxySessionResponse;
(function (CreateProxySessionResponse) {
  /**
   * @internal
   */
  CreateProxySessionResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ProxySession && { ProxySession: ProxySession.filterSensitiveLog(obj.ProxySession) }),
  });
})((CreateProxySessionResponse = exports.CreateProxySessionResponse || (exports.CreateProxySessionResponse = {})));
var CreateRoomRequest;
(function (CreateRoomRequest) {
  /**
   * @internal
   */
  CreateRoomRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Name && { Name: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.ClientRequestToken && { ClientRequestToken: smithy_client_1.SENSITIVE_STRING }),
  });
})((CreateRoomRequest = exports.CreateRoomRequest || (exports.CreateRoomRequest = {})));
var Room;
(function (Room) {
  /**
   * @internal
   */
  Room.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Name && { Name: smithy_client_1.SENSITIVE_STRING }),
  });
})((Room = exports.Room || (exports.Room = {})));
var CreateRoomResponse;
(function (CreateRoomResponse) {
  /**
   * @internal
   */
  CreateRoomResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Room && { Room: Room.filterSensitiveLog(obj.Room) }),
  });
})((CreateRoomResponse = exports.CreateRoomResponse || (exports.CreateRoomResponse = {})));
var CreateRoomMembershipRequest;
(function (CreateRoomMembershipRequest) {
  /**
   * @internal
   */
  CreateRoomMembershipRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateRoomMembershipRequest = exports.CreateRoomMembershipRequest || (exports.CreateRoomMembershipRequest = {})));
var MemberType;
(function (MemberType) {
  MemberType["Bot"] = "Bot";
  MemberType["User"] = "User";
  MemberType["Webhook"] = "Webhook";
})((MemberType = exports.MemberType || (exports.MemberType = {})));
var Member;
(function (Member) {
  /**
   * @internal
   */
  Member.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Email && { Email: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.FullName && { FullName: smithy_client_1.SENSITIVE_STRING }),
  });
})((Member = exports.Member || (exports.Member = {})));
var RoomMembership;
(function (RoomMembership) {
  /**
   * @internal
   */
  RoomMembership.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Member && { Member: Member.filterSensitiveLog(obj.Member) }),
  });
})((RoomMembership = exports.RoomMembership || (exports.RoomMembership = {})));
var CreateRoomMembershipResponse;
(function (CreateRoomMembershipResponse) {
  /**
   * @internal
   */
  CreateRoomMembershipResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.RoomMembership && { RoomMembership: RoomMembership.filterSensitiveLog(obj.RoomMembership) }),
  });
})(
  (CreateRoomMembershipResponse = exports.CreateRoomMembershipResponse || (exports.CreateRoomMembershipResponse = {}))
);
var SipMediaApplicationEndpoint;
(function (SipMediaApplicationEndpoint) {
  /**
   * @internal
   */
  SipMediaApplicationEndpoint.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.LambdaArn && { LambdaArn: smithy_client_1.SENSITIVE_STRING }),
  });
})((SipMediaApplicationEndpoint = exports.SipMediaApplicationEndpoint || (exports.SipMediaApplicationEndpoint = {})));
var CreateSipMediaApplicationRequest;
(function (CreateSipMediaApplicationRequest) {
  /**
   * @internal
   */
  CreateSipMediaApplicationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Endpoints && {
      Endpoints: obj.Endpoints.map((item) => SipMediaApplicationEndpoint.filterSensitiveLog(item)),
    }),
  });
})(
  (CreateSipMediaApplicationRequest =
    exports.CreateSipMediaApplicationRequest || (exports.CreateSipMediaApplicationRequest = {}))
);
var SipMediaApplication;
(function (SipMediaApplication) {
  /**
   * @internal
   */
  SipMediaApplication.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Endpoints && {
      Endpoints: obj.Endpoints.map((item) => SipMediaApplicationEndpoint.filterSensitiveLog(item)),
    }),
  });
})((SipMediaApplication = exports.SipMediaApplication || (exports.SipMediaApplication = {})));
var CreateSipMediaApplicationResponse;
(function (CreateSipMediaApplicationResponse) {
  /**
   * @internal
   */
  CreateSipMediaApplicationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SipMediaApplication && {
      SipMediaApplication: SipMediaApplication.filterSensitiveLog(obj.SipMediaApplication),
    }),
  });
})(
  (CreateSipMediaApplicationResponse =
    exports.CreateSipMediaApplicationResponse || (exports.CreateSipMediaApplicationResponse = {}))
);
var CreateSipMediaApplicationCallRequest;
(function (CreateSipMediaApplicationCallRequest) {
  /**
   * @internal
   */
  CreateSipMediaApplicationCallRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.FromPhoneNumber && { FromPhoneNumber: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.ToPhoneNumber && { ToPhoneNumber: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (CreateSipMediaApplicationCallRequest =
    exports.CreateSipMediaApplicationCallRequest || (exports.CreateSipMediaApplicationCallRequest = {}))
);
var SipMediaApplicationCall;
(function (SipMediaApplicationCall) {
  /**
   * @internal
   */
  SipMediaApplicationCall.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SipMediaApplicationCall = exports.SipMediaApplicationCall || (exports.SipMediaApplicationCall = {})));
var CreateSipMediaApplicationCallResponse;
(function (CreateSipMediaApplicationCallResponse) {
  /**
   * @internal
   */
  CreateSipMediaApplicationCallResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateSipMediaApplicationCallResponse =
    exports.CreateSipMediaApplicationCallResponse || (exports.CreateSipMediaApplicationCallResponse = {}))
);
var SipRuleTargetApplication;
(function (SipRuleTargetApplication) {
  /**
   * @internal
   */
  SipRuleTargetApplication.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SipRuleTargetApplication = exports.SipRuleTargetApplication || (exports.SipRuleTargetApplication = {})));
var SipRuleTriggerType;
(function (SipRuleTriggerType) {
  SipRuleTriggerType["RequestUriHostname"] = "RequestUriHostname";
  SipRuleTriggerType["ToPhoneNumber"] = "ToPhoneNumber";
})((SipRuleTriggerType = exports.SipRuleTriggerType || (exports.SipRuleTriggerType = {})));
var CreateSipRuleRequest;
(function (CreateSipRuleRequest) {
  /**
   * @internal
   */
  CreateSipRuleRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateSipRuleRequest = exports.CreateSipRuleRequest || (exports.CreateSipRuleRequest = {})));
var SipRule;
(function (SipRule) {
  /**
   * @internal
   */
  SipRule.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SipRule = exports.SipRule || (exports.SipRule = {})));
var CreateSipRuleResponse;
(function (CreateSipRuleResponse) {
  /**
   * @internal
   */
  CreateSipRuleResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateSipRuleResponse = exports.CreateSipRuleResponse || (exports.CreateSipRuleResponse = {})));
var CreateUserRequest;
(function (CreateUserRequest) {
  /**
   * @internal
   */
  CreateUserRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Email && { Email: smithy_client_1.SENSITIVE_STRING }),
  });
})((CreateUserRequest = exports.CreateUserRequest || (exports.CreateUserRequest = {})));
var InviteStatus;
(function (InviteStatus) {
  InviteStatus["Accepted"] = "Accepted";
  InviteStatus["Failed"] = "Failed";
  InviteStatus["Pending"] = "Pending";
})((InviteStatus = exports.InviteStatus || (exports.InviteStatus = {})));
var RegistrationStatus;
(function (RegistrationStatus) {
  RegistrationStatus["Registered"] = "Registered";
  RegistrationStatus["Suspended"] = "Suspended";
  RegistrationStatus["Unregistered"] = "Unregistered";
})((RegistrationStatus = exports.RegistrationStatus || (exports.RegistrationStatus = {})));
var User;
(function (User) {
  /**
   * @internal
   */
  User.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.PrimaryEmail && { PrimaryEmail: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.PrimaryProvisionedNumber && { PrimaryProvisionedNumber: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.DisplayName && { DisplayName: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.AlexaForBusinessMetadata && {
      AlexaForBusinessMetadata: AlexaForBusinessMetadata.filterSensitiveLog(obj.AlexaForBusinessMetadata),
    }),
  });
})((User = exports.User || (exports.User = {})));
var CreateUserResponse;
(function (CreateUserResponse) {
  /**
   * @internal
   */
  CreateUserResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.User && { User: User.filterSensitiveLog(obj.User) }),
  });
})((CreateUserResponse = exports.CreateUserResponse || (exports.CreateUserResponse = {})));
var VoiceConnectorAwsRegion;
(function (VoiceConnectorAwsRegion) {
  VoiceConnectorAwsRegion["US_EAST_1"] = "us-east-1";
  VoiceConnectorAwsRegion["US_WEST_2"] = "us-west-2";
})((VoiceConnectorAwsRegion = exports.VoiceConnectorAwsRegion || (exports.VoiceConnectorAwsRegion = {})));
var CreateVoiceConnectorRequest;
(function (CreateVoiceConnectorRequest) {
  /**
   * @internal
   */
  CreateVoiceConnectorRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateVoiceConnectorRequest = exports.CreateVoiceConnectorRequest || (exports.CreateVoiceConnectorRequest = {})));
var VoiceConnector;
(function (VoiceConnector) {
  /**
   * @internal
   */
  VoiceConnector.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VoiceConnector = exports.VoiceConnector || (exports.VoiceConnector = {})));
var CreateVoiceConnectorResponse;
(function (CreateVoiceConnectorResponse) {
  /**
   * @internal
   */
  CreateVoiceConnectorResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateVoiceConnectorResponse = exports.CreateVoiceConnectorResponse || (exports.CreateVoiceConnectorResponse = {}))
);
var VoiceConnectorItem;
(function (VoiceConnectorItem) {
  /**
   * @internal
   */
  VoiceConnectorItem.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VoiceConnectorItem = exports.VoiceConnectorItem || (exports.VoiceConnectorItem = {})));
var CreateVoiceConnectorGroupRequest;
(function (CreateVoiceConnectorGroupRequest) {
  /**
   * @internal
   */
  CreateVoiceConnectorGroupRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateVoiceConnectorGroupRequest =
    exports.CreateVoiceConnectorGroupRequest || (exports.CreateVoiceConnectorGroupRequest = {}))
);
var VoiceConnectorGroup;
(function (VoiceConnectorGroup) {
  /**
   * @internal
   */
  VoiceConnectorGroup.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VoiceConnectorGroup = exports.VoiceConnectorGroup || (exports.VoiceConnectorGroup = {})));
var CreateVoiceConnectorGroupResponse;
(function (CreateVoiceConnectorGroupResponse) {
  /**
   * @internal
   */
  CreateVoiceConnectorGroupResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateVoiceConnectorGroupResponse =
    exports.CreateVoiceConnectorGroupResponse || (exports.CreateVoiceConnectorGroupResponse = {}))
);
var Credential;
(function (Credential) {
  /**
   * @internal
   */
  Credential.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
  });
})((Credential = exports.Credential || (exports.Credential = {})));
var DeleteAccountRequest;
(function (DeleteAccountRequest) {
  /**
   * @internal
   */
  DeleteAccountRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteAccountRequest = exports.DeleteAccountRequest || (exports.DeleteAccountRequest = {})));
var DeleteAccountResponse;
(function (DeleteAccountResponse) {
  /**
   * @internal
   */
  DeleteAccountResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteAccountResponse = exports.DeleteAccountResponse || (exports.DeleteAccountResponse = {})));
var UnprocessableEntityException;
(function (UnprocessableEntityException) {
  /**
   * @internal
   */
  UnprocessableEntityException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UnprocessableEntityException = exports.UnprocessableEntityException || (exports.UnprocessableEntityException = {}))
);
var DeleteAppInstanceRequest;
(function (DeleteAppInstanceRequest) {
  /**
   * @internal
   */
  DeleteAppInstanceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteAppInstanceRequest = exports.DeleteAppInstanceRequest || (exports.DeleteAppInstanceRequest = {})));
var DeleteAppInstanceAdminRequest;
(function (DeleteAppInstanceAdminRequest) {
  /**
   * @internal
   */
  DeleteAppInstanceAdminRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteAppInstanceAdminRequest =
    exports.DeleteAppInstanceAdminRequest || (exports.DeleteAppInstanceAdminRequest = {}))
);
var DeleteAppInstanceStreamingConfigurationsRequest;
(function (DeleteAppInstanceStreamingConfigurationsRequest) {
  /**
   * @internal
   */
  DeleteAppInstanceStreamingConfigurationsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteAppInstanceStreamingConfigurationsRequest =
    exports.DeleteAppInstanceStreamingConfigurationsRequest ||
    (exports.DeleteAppInstanceStreamingConfigurationsRequest = {}))
);
var DeleteAppInstanceUserRequest;
(function (DeleteAppInstanceUserRequest) {
  /**
   * @internal
   */
  DeleteAppInstanceUserRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteAppInstanceUserRequest = exports.DeleteAppInstanceUserRequest || (exports.DeleteAppInstanceUserRequest = {}))
);
var DeleteAttendeeRequest;
(function (DeleteAttendeeRequest) {
  /**
   * @internal
   */
  DeleteAttendeeRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteAttendeeRequest = exports.DeleteAttendeeRequest || (exports.DeleteAttendeeRequest = {})));
var DeleteChannelRequest;
(function (DeleteChannelRequest) {
  /**
   * @internal
   */
  DeleteChannelRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteChannelRequest = exports.DeleteChannelRequest || (exports.DeleteChannelRequest = {})));
var DeleteChannelBanRequest;
(function (DeleteChannelBanRequest) {
  /**
   * @internal
   */
  DeleteChannelBanRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteChannelBanRequest = exports.DeleteChannelBanRequest || (exports.DeleteChannelBanRequest = {})));
var DeleteChannelMembershipRequest;
(function (DeleteChannelMembershipRequest) {
  /**
   * @internal
   */
  DeleteChannelMembershipRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteChannelMembershipRequest =
    exports.DeleteChannelMembershipRequest || (exports.DeleteChannelMembershipRequest = {}))
);
var DeleteChannelMessageRequest;
(function (DeleteChannelMessageRequest) {
  /**
   * @internal
   */
  DeleteChannelMessageRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteChannelMessageRequest = exports.DeleteChannelMessageRequest || (exports.DeleteChannelMessageRequest = {})));
var DeleteChannelModeratorRequest;
(function (DeleteChannelModeratorRequest) {
  /**
   * @internal
   */
  DeleteChannelModeratorRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteChannelModeratorRequest =
    exports.DeleteChannelModeratorRequest || (exports.DeleteChannelModeratorRequest = {}))
);
var DeleteEventsConfigurationRequest;
(function (DeleteEventsConfigurationRequest) {
  /**
   * @internal
   */
  DeleteEventsConfigurationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteEventsConfigurationRequest =
    exports.DeleteEventsConfigurationRequest || (exports.DeleteEventsConfigurationRequest = {}))
);
var DeleteMeetingRequest;
(function (DeleteMeetingRequest) {
  /**
   * @internal
   */
  DeleteMeetingRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteMeetingRequest = exports.DeleteMeetingRequest || (exports.DeleteMeetingRequest = {})));
var DeletePhoneNumberRequest;
(function (DeletePhoneNumberRequest) {
  /**
   * @internal
   */
  DeletePhoneNumberRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeletePhoneNumberRequest = exports.DeletePhoneNumberRequest || (exports.DeletePhoneNumberRequest = {})));
var DeleteProxySessionRequest;
(function (DeleteProxySessionRequest) {
  /**
   * @internal
   */
  DeleteProxySessionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteProxySessionRequest = exports.DeleteProxySessionRequest || (exports.DeleteProxySessionRequest = {})));
var DeleteRoomRequest;
(function (DeleteRoomRequest) {
  /**
   * @internal
   */
  DeleteRoomRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteRoomRequest = exports.DeleteRoomRequest || (exports.DeleteRoomRequest = {})));
var DeleteRoomMembershipRequest;
(function (DeleteRoomMembershipRequest) {
  /**
   * @internal
   */
  DeleteRoomMembershipRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteRoomMembershipRequest = exports.DeleteRoomMembershipRequest || (exports.DeleteRoomMembershipRequest = {})));
var DeleteSipMediaApplicationRequest;
(function (DeleteSipMediaApplicationRequest) {
  /**
   * @internal
   */
  DeleteSipMediaApplicationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteSipMediaApplicationRequest =
    exports.DeleteSipMediaApplicationRequest || (exports.DeleteSipMediaApplicationRequest = {}))
);
var DeleteSipRuleRequest;
(function (DeleteSipRuleRequest) {
  /**
   * @internal
   */
  DeleteSipRuleRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteSipRuleRequest = exports.DeleteSipRuleRequest || (exports.DeleteSipRuleRequest = {})));
var DeleteVoiceConnectorRequest;
(function (DeleteVoiceConnectorRequest) {
  /**
   * @internal
   */
  DeleteVoiceConnectorRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteVoiceConnectorRequest = exports.DeleteVoiceConnectorRequest || (exports.DeleteVoiceConnectorRequest = {})));
var DeleteVoiceConnectorEmergencyCallingConfigurationRequest;
(function (DeleteVoiceConnectorEmergencyCallingConfigurationRequest) {
  /**
   * @internal
   */
  DeleteVoiceConnectorEmergencyCallingConfigurationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteVoiceConnectorEmergencyCallingConfigurationRequest =
    exports.DeleteVoiceConnectorEmergencyCallingConfigurationRequest ||
    (exports.DeleteVoiceConnectorEmergencyCallingConfigurationRequest = {}))
);
var DeleteVoiceConnectorGroupRequest;
(function (DeleteVoiceConnectorGroupRequest) {
  /**
   * @internal
   */
  DeleteVoiceConnectorGroupRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteVoiceConnectorGroupRequest =
    exports.DeleteVoiceConnectorGroupRequest || (exports.DeleteVoiceConnectorGroupRequest = {}))
);
var DeleteVoiceConnectorOriginationRequest;
(function (DeleteVoiceConnectorOriginationRequest) {
  /**
   * @internal
   */
  DeleteVoiceConnectorOriginationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteVoiceConnectorOriginationRequest =
    exports.DeleteVoiceConnectorOriginationRequest || (exports.DeleteVoiceConnectorOriginationRequest = {}))
);
var DeleteVoiceConnectorProxyRequest;
(function (DeleteVoiceConnectorProxyRequest) {
  /**
   * @internal
   */
  DeleteVoiceConnectorProxyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteVoiceConnectorProxyRequest =
    exports.DeleteVoiceConnectorProxyRequest || (exports.DeleteVoiceConnectorProxyRequest = {}))
);
var DeleteVoiceConnectorStreamingConfigurationRequest;
(function (DeleteVoiceConnectorStreamingConfigurationRequest) {
  /**
   * @internal
   */
  DeleteVoiceConnectorStreamingConfigurationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteVoiceConnectorStreamingConfigurationRequest =
    exports.DeleteVoiceConnectorStreamingConfigurationRequest ||
    (exports.DeleteVoiceConnectorStreamingConfigurationRequest = {}))
);
var DeleteVoiceConnectorTerminationRequest;
(function (DeleteVoiceConnectorTerminationRequest) {
  /**
   * @internal
   */
  DeleteVoiceConnectorTerminationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteVoiceConnectorTerminationRequest =
    exports.DeleteVoiceConnectorTerminationRequest || (exports.DeleteVoiceConnectorTerminationRequest = {}))
);
var DeleteVoiceConnectorTerminationCredentialsRequest;
(function (DeleteVoiceConnectorTerminationCredentialsRequest) {
  /**
   * @internal
   */
  DeleteVoiceConnectorTerminationCredentialsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Usernames && { Usernames: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (DeleteVoiceConnectorTerminationCredentialsRequest =
    exports.DeleteVoiceConnectorTerminationCredentialsRequest ||
    (exports.DeleteVoiceConnectorTerminationCredentialsRequest = {}))
);
var DescribeAppInstanceRequest;
(function (DescribeAppInstanceRequest) {
  /**
   * @internal
   */
  DescribeAppInstanceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeAppInstanceRequest = exports.DescribeAppInstanceRequest || (exports.DescribeAppInstanceRequest = {})));
var DescribeAppInstanceResponse;
(function (DescribeAppInstanceResponse) {
  /**
   * @internal
   */
  DescribeAppInstanceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AppInstance && { AppInstance: AppInstance.filterSensitiveLog(obj.AppInstance) }),
  });
})((DescribeAppInstanceResponse = exports.DescribeAppInstanceResponse || (exports.DescribeAppInstanceResponse = {})));
var DescribeAppInstanceAdminRequest;
(function (DescribeAppInstanceAdminRequest) {
  /**
   * @internal
   */
  DescribeAppInstanceAdminRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeAppInstanceAdminRequest =
    exports.DescribeAppInstanceAdminRequest || (exports.DescribeAppInstanceAdminRequest = {}))
);
var DescribeAppInstanceAdminResponse;
(function (DescribeAppInstanceAdminResponse) {
  /**
   * @internal
   */
  DescribeAppInstanceAdminResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AppInstanceAdmin && { AppInstanceAdmin: AppInstanceAdmin.filterSensitiveLog(obj.AppInstanceAdmin) }),
  });
})(
  (DescribeAppInstanceAdminResponse =
    exports.DescribeAppInstanceAdminResponse || (exports.DescribeAppInstanceAdminResponse = {}))
);
var DescribeAppInstanceUserRequest;
(function (DescribeAppInstanceUserRequest) {
  /**
   * @internal
   */
  DescribeAppInstanceUserRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeAppInstanceUserRequest =
    exports.DescribeAppInstanceUserRequest || (exports.DescribeAppInstanceUserRequest = {}))
);
var DescribeAppInstanceUserResponse;
(function (DescribeAppInstanceUserResponse) {
  /**
   * @internal
   */
  DescribeAppInstanceUserResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AppInstanceUser && { AppInstanceUser: AppInstanceUser.filterSensitiveLog(obj.AppInstanceUser) }),
  });
})(
  (DescribeAppInstanceUserResponse =
    exports.DescribeAppInstanceUserResponse || (exports.DescribeAppInstanceUserResponse = {}))
);
var DescribeChannelRequest;
(function (DescribeChannelRequest) {
  /**
   * @internal
   */
  DescribeChannelRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeChannelRequest = exports.DescribeChannelRequest || (exports.DescribeChannelRequest = {})));
var DescribeChannelResponse;
(function (DescribeChannelResponse) {
  /**
   * @internal
   */
  DescribeChannelResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Channel && { Channel: Channel.filterSensitiveLog(obj.Channel) }),
  });
})((DescribeChannelResponse = exports.DescribeChannelResponse || (exports.DescribeChannelResponse = {})));
var DescribeChannelBanRequest;
(function (DescribeChannelBanRequest) {
  /**
   * @internal
   */
  DescribeChannelBanRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeChannelBanRequest = exports.DescribeChannelBanRequest || (exports.DescribeChannelBanRequest = {})));
var DescribeChannelBanResponse;
(function (DescribeChannelBanResponse) {
  /**
   * @internal
   */
  DescribeChannelBanResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ChannelBan && { ChannelBan: ChannelBan.filterSensitiveLog(obj.ChannelBan) }),
  });
})((DescribeChannelBanResponse = exports.DescribeChannelBanResponse || (exports.DescribeChannelBanResponse = {})));
var DescribeChannelMembershipRequest;
(function (DescribeChannelMembershipRequest) {
  /**
   * @internal
   */
  DescribeChannelMembershipRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeChannelMembershipRequest =
    exports.DescribeChannelMembershipRequest || (exports.DescribeChannelMembershipRequest = {}))
);
var DescribeChannelMembershipResponse;
(function (DescribeChannelMembershipResponse) {
  /**
   * @internal
   */
  DescribeChannelMembershipResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ChannelMembership && { ChannelMembership: ChannelMembership.filterSensitiveLog(obj.ChannelMembership) }),
  });
})(
  (DescribeChannelMembershipResponse =
    exports.DescribeChannelMembershipResponse || (exports.DescribeChannelMembershipResponse = {}))
);
var DescribeChannelMembershipForAppInstanceUserRequest;
(function (DescribeChannelMembershipForAppInstanceUserRequest) {
  /**
   * @internal
   */
  DescribeChannelMembershipForAppInstanceUserRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeChannelMembershipForAppInstanceUserRequest =
    exports.DescribeChannelMembershipForAppInstanceUserRequest ||
    (exports.DescribeChannelMembershipForAppInstanceUserRequest = {}))
);
var DescribeChannelMembershipForAppInstanceUserResponse;
(function (DescribeChannelMembershipForAppInstanceUserResponse) {
  /**
   * @internal
   */
  DescribeChannelMembershipForAppInstanceUserResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ChannelMembership && {
      ChannelMembership: ChannelMembershipForAppInstanceUserSummary.filterSensitiveLog(obj.ChannelMembership),
    }),
  });
})(
  (DescribeChannelMembershipForAppInstanceUserResponse =
    exports.DescribeChannelMembershipForAppInstanceUserResponse ||
    (exports.DescribeChannelMembershipForAppInstanceUserResponse = {}))
);
var DescribeChannelModeratedByAppInstanceUserRequest;
(function (DescribeChannelModeratedByAppInstanceUserRequest) {
  /**
   * @internal
   */
  DescribeChannelModeratedByAppInstanceUserRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeChannelModeratedByAppInstanceUserRequest =
    exports.DescribeChannelModeratedByAppInstanceUserRequest ||
    (exports.DescribeChannelModeratedByAppInstanceUserRequest = {}))
);
var DescribeChannelModeratedByAppInstanceUserResponse;
(function (DescribeChannelModeratedByAppInstanceUserResponse) {
  /**
   * @internal
   */
  DescribeChannelModeratedByAppInstanceUserResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Channel && { Channel: ChannelModeratedByAppInstanceUserSummary.filterSensitiveLog(obj.Channel) }),
  });
})(
  (DescribeChannelModeratedByAppInstanceUserResponse =
    exports.DescribeChannelModeratedByAppInstanceUserResponse ||
    (exports.DescribeChannelModeratedByAppInstanceUserResponse = {}))
);
var DescribeChannelModeratorRequest;
(function (DescribeChannelModeratorRequest) {
  /**
   * @internal
   */
  DescribeChannelModeratorRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeChannelModeratorRequest =
    exports.DescribeChannelModeratorRequest || (exports.DescribeChannelModeratorRequest = {}))
);
var DescribeChannelModeratorResponse;
(function (DescribeChannelModeratorResponse) {
  /**
   * @internal
   */
  DescribeChannelModeratorResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ChannelModerator && { ChannelModerator: ChannelModerator.filterSensitiveLog(obj.ChannelModerator) }),
  });
})(
  (DescribeChannelModeratorResponse =
    exports.DescribeChannelModeratorResponse || (exports.DescribeChannelModeratorResponse = {}))
);
var DisassociatePhoneNumberFromUserRequest;
(function (DisassociatePhoneNumberFromUserRequest) {
  /**
   * @internal
   */
  DisassociatePhoneNumberFromUserRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisassociatePhoneNumberFromUserRequest =
    exports.DisassociatePhoneNumberFromUserRequest || (exports.DisassociatePhoneNumberFromUserRequest = {}))
);
var DisassociatePhoneNumberFromUserResponse;
(function (DisassociatePhoneNumberFromUserResponse) {
  /**
   * @internal
   */
  DisassociatePhoneNumberFromUserResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisassociatePhoneNumberFromUserResponse =
    exports.DisassociatePhoneNumberFromUserResponse || (exports.DisassociatePhoneNumberFromUserResponse = {}))
);
var DisassociatePhoneNumbersFromVoiceConnectorRequest;
(function (DisassociatePhoneNumbersFromVoiceConnectorRequest) {
  /**
   * @internal
   */
  DisassociatePhoneNumbersFromVoiceConnectorRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (DisassociatePhoneNumbersFromVoiceConnectorRequest =
    exports.DisassociatePhoneNumbersFromVoiceConnectorRequest ||
    (exports.DisassociatePhoneNumbersFromVoiceConnectorRequest = {}))
);
var DisassociatePhoneNumbersFromVoiceConnectorResponse;
(function (DisassociatePhoneNumbersFromVoiceConnectorResponse) {
  /**
   * @internal
   */
  DisassociatePhoneNumbersFromVoiceConnectorResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisassociatePhoneNumbersFromVoiceConnectorResponse =
    exports.DisassociatePhoneNumbersFromVoiceConnectorResponse ||
    (exports.DisassociatePhoneNumbersFromVoiceConnectorResponse = {}))
);
var DisassociatePhoneNumbersFromVoiceConnectorGroupRequest;
(function (DisassociatePhoneNumbersFromVoiceConnectorGroupRequest) {
  /**
   * @internal
   */
  DisassociatePhoneNumbersFromVoiceConnectorGroupRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (DisassociatePhoneNumbersFromVoiceConnectorGroupRequest =
    exports.DisassociatePhoneNumbersFromVoiceConnectorGroupRequest ||
    (exports.DisassociatePhoneNumbersFromVoiceConnectorGroupRequest = {}))
);
var DisassociatePhoneNumbersFromVoiceConnectorGroupResponse;
(function (DisassociatePhoneNumbersFromVoiceConnectorGroupResponse) {
  /**
   * @internal
   */
  DisassociatePhoneNumbersFromVoiceConnectorGroupResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisassociatePhoneNumbersFromVoiceConnectorGroupResponse =
    exports.DisassociatePhoneNumbersFromVoiceConnectorGroupResponse ||
    (exports.DisassociatePhoneNumbersFromVoiceConnectorGroupResponse = {}))
);
var DisassociateSigninDelegateGroupsFromAccountRequest;
(function (DisassociateSigninDelegateGroupsFromAccountRequest) {
  /**
   * @internal
   */
  DisassociateSigninDelegateGroupsFromAccountRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisassociateSigninDelegateGroupsFromAccountRequest =
    exports.DisassociateSigninDelegateGroupsFromAccountRequest ||
    (exports.DisassociateSigninDelegateGroupsFromAccountRequest = {}))
);
var DisassociateSigninDelegateGroupsFromAccountResponse;
(function (DisassociateSigninDelegateGroupsFromAccountResponse) {
  /**
   * @internal
   */
  DisassociateSigninDelegateGroupsFromAccountResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisassociateSigninDelegateGroupsFromAccountResponse =
    exports.DisassociateSigninDelegateGroupsFromAccountResponse ||
    (exports.DisassociateSigninDelegateGroupsFromAccountResponse = {}))
);
var DNISEmergencyCallingConfiguration;
(function (DNISEmergencyCallingConfiguration) {
  /**
   * @internal
   */
  DNISEmergencyCallingConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.EmergencyPhoneNumber && { EmergencyPhoneNumber: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.TestPhoneNumber && { TestPhoneNumber: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (DNISEmergencyCallingConfiguration =
    exports.DNISEmergencyCallingConfiguration || (exports.DNISEmergencyCallingConfiguration = {}))
);
var EmailStatus;
(function (EmailStatus) {
  EmailStatus["Failed"] = "Failed";
  EmailStatus["NotSent"] = "NotSent";
  EmailStatus["Sent"] = "Sent";
})((EmailStatus = exports.EmailStatus || (exports.EmailStatus = {})));
var EmergencyCallingConfiguration;
(function (EmergencyCallingConfiguration) {
  /**
   * @internal
   */
  EmergencyCallingConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.DNIS && { DNIS: obj.DNIS.map((item) => DNISEmergencyCallingConfiguration.filterSensitiveLog(item)) }),
  });
})(
  (EmergencyCallingConfiguration =
    exports.EmergencyCallingConfiguration || (exports.EmergencyCallingConfiguration = {}))
);
var EventsConfiguration;
(function (EventsConfiguration) {
  /**
   * @internal
   */
  EventsConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.OutboundEventsHTTPSEndpoint && { OutboundEventsHTTPSEndpoint: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.LambdaFunctionArn && { LambdaFunctionArn: smithy_client_1.SENSITIVE_STRING }),
  });
})((EventsConfiguration = exports.EventsConfiguration || (exports.EventsConfiguration = {})));
var GetAccountRequest;
(function (GetAccountRequest) {
  /**
   * @internal
   */
  GetAccountRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAccountRequest = exports.GetAccountRequest || (exports.GetAccountRequest = {})));
var GetAccountResponse;
(function (GetAccountResponse) {
  /**
   * @internal
   */
  GetAccountResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAccountResponse = exports.GetAccountResponse || (exports.GetAccountResponse = {})));
var GetAccountSettingsRequest;
(function (GetAccountSettingsRequest) {
  /**
   * @internal
   */
  GetAccountSettingsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAccountSettingsRequest = exports.GetAccountSettingsRequest || (exports.GetAccountSettingsRequest = {})));
var GetAccountSettingsResponse;
(function (GetAccountSettingsResponse) {
  /**
   * @internal
   */
  GetAccountSettingsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAccountSettingsResponse = exports.GetAccountSettingsResponse || (exports.GetAccountSettingsResponse = {})));
var GetAppInstanceRetentionSettingsRequest;
(function (GetAppInstanceRetentionSettingsRequest) {
  /**
   * @internal
   */
  GetAppInstanceRetentionSettingsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetAppInstanceRetentionSettingsRequest =
    exports.GetAppInstanceRetentionSettingsRequest || (exports.GetAppInstanceRetentionSettingsRequest = {}))
);
var GetAppInstanceRetentionSettingsResponse;
(function (GetAppInstanceRetentionSettingsResponse) {
  /**
   * @internal
   */
  GetAppInstanceRetentionSettingsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetAppInstanceRetentionSettingsResponse =
    exports.GetAppInstanceRetentionSettingsResponse || (exports.GetAppInstanceRetentionSettingsResponse = {}))
);
var GetAppInstanceStreamingConfigurationsRequest;
(function (GetAppInstanceStreamingConfigurationsRequest) {
  /**
   * @internal
   */
  GetAppInstanceStreamingConfigurationsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetAppInstanceStreamingConfigurationsRequest =
    exports.GetAppInstanceStreamingConfigurationsRequest || (exports.GetAppInstanceStreamingConfigurationsRequest = {}))
);
var GetAppInstanceStreamingConfigurationsResponse;
(function (GetAppInstanceStreamingConfigurationsResponse) {
  /**
   * @internal
   */
  GetAppInstanceStreamingConfigurationsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AppInstanceStreamingConfigurations && {
      AppInstanceStreamingConfigurations: obj.AppInstanceStreamingConfigurations.map((item) =>
        AppInstanceStreamingConfiguration.filterSensitiveLog(item)
      ),
    }),
  });
})(
  (GetAppInstanceStreamingConfigurationsResponse =
    exports.GetAppInstanceStreamingConfigurationsResponse ||
    (exports.GetAppInstanceStreamingConfigurationsResponse = {}))
);
var GetAttendeeRequest;
(function (GetAttendeeRequest) {
  /**
   * @internal
   */
  GetAttendeeRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAttendeeRequest = exports.GetAttendeeRequest || (exports.GetAttendeeRequest = {})));
var GetAttendeeResponse;
(function (GetAttendeeResponse) {
  /**
   * @internal
   */
  GetAttendeeResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Attendee && { Attendee: Attendee.filterSensitiveLog(obj.Attendee) }),
  });
})((GetAttendeeResponse = exports.GetAttendeeResponse || (exports.GetAttendeeResponse = {})));
var GetBotRequest;
(function (GetBotRequest) {
  /**
   * @internal
   */
  GetBotRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetBotRequest = exports.GetBotRequest || (exports.GetBotRequest = {})));
var GetBotResponse;
(function (GetBotResponse) {
  /**
   * @internal
   */
  GetBotResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Bot && { Bot: Bot.filterSensitiveLog(obj.Bot) }),
  });
})((GetBotResponse = exports.GetBotResponse || (exports.GetBotResponse = {})));
var GetChannelMessageRequest;
(function (GetChannelMessageRequest) {
  /**
   * @internal
   */
  GetChannelMessageRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetChannelMessageRequest = exports.GetChannelMessageRequest || (exports.GetChannelMessageRequest = {})));
var GetChannelMessageResponse;
(function (GetChannelMessageResponse) {
  /**
   * @internal
   */
  GetChannelMessageResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ChannelMessage && { ChannelMessage: ChannelMessage.filterSensitiveLog(obj.ChannelMessage) }),
  });
})((GetChannelMessageResponse = exports.GetChannelMessageResponse || (exports.GetChannelMessageResponse = {})));
var GetEventsConfigurationRequest;
(function (GetEventsConfigurationRequest) {
  /**
   * @internal
   */
  GetEventsConfigurationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetEventsConfigurationRequest =
    exports.GetEventsConfigurationRequest || (exports.GetEventsConfigurationRequest = {}))
);
var GetEventsConfigurationResponse;
(function (GetEventsConfigurationResponse) {
  /**
   * @internal
   */
  GetEventsConfigurationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.EventsConfiguration && {
      EventsConfiguration: EventsConfiguration.filterSensitiveLog(obj.EventsConfiguration),
    }),
  });
})(
  (GetEventsConfigurationResponse =
    exports.GetEventsConfigurationResponse || (exports.GetEventsConfigurationResponse = {}))
);
var VoiceConnectorSettings;
(function (VoiceConnectorSettings) {
  /**
   * @internal
   */
  VoiceConnectorSettings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VoiceConnectorSettings = exports.VoiceConnectorSettings || (exports.VoiceConnectorSettings = {})));
var GetGlobalSettingsResponse;
(function (GetGlobalSettingsResponse) {
  /**
   * @internal
   */
  GetGlobalSettingsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetGlobalSettingsResponse = exports.GetGlobalSettingsResponse || (exports.GetGlobalSettingsResponse = {})));
var GetMeetingRequest;
(function (GetMeetingRequest) {
  /**
   * @internal
   */
  GetMeetingRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetMeetingRequest = exports.GetMeetingRequest || (exports.GetMeetingRequest = {})));
var GetMeetingResponse;
(function (GetMeetingResponse) {
  /**
   * @internal
   */
  GetMeetingResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Meeting && { Meeting: Meeting.filterSensitiveLog(obj.Meeting) }),
  });
})((GetMeetingResponse = exports.GetMeetingResponse || (exports.GetMeetingResponse = {})));
var GetMessagingSessionEndpointRequest;
(function (GetMessagingSessionEndpointRequest) {
  /**
   * @internal
   */
  GetMessagingSessionEndpointRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetMessagingSessionEndpointRequest =
    exports.GetMessagingSessionEndpointRequest || (exports.GetMessagingSessionEndpointRequest = {}))
);
var MessagingSessionEndpoint;
(function (MessagingSessionEndpoint) {
  /**
   * @internal
   */
  MessagingSessionEndpoint.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MessagingSessionEndpoint = exports.MessagingSessionEndpoint || (exports.MessagingSessionEndpoint = {})));
var GetMessagingSessionEndpointResponse;
(function (GetMessagingSessionEndpointResponse) {
  /**
   * @internal
   */
  GetMessagingSessionEndpointResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetMessagingSessionEndpointResponse =
    exports.GetMessagingSessionEndpointResponse || (exports.GetMessagingSessionEndpointResponse = {}))
);
var GetPhoneNumberRequest;
(function (GetPhoneNumberRequest) {
  /**
   * @internal
   */
  GetPhoneNumberRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetPhoneNumberRequest = exports.GetPhoneNumberRequest || (exports.GetPhoneNumberRequest = {})));
var PhoneNumberAssociationName;
(function (PhoneNumberAssociationName) {
  PhoneNumberAssociationName["AccountId"] = "AccountId";
  PhoneNumberAssociationName["SipRuleId"] = "SipRuleId";
  PhoneNumberAssociationName["UserId"] = "UserId";
  PhoneNumberAssociationName["VoiceConnectorGroupId"] = "VoiceConnectorGroupId";
  PhoneNumberAssociationName["VoiceConnectorId"] = "VoiceConnectorId";
})((PhoneNumberAssociationName = exports.PhoneNumberAssociationName || (exports.PhoneNumberAssociationName = {})));
var PhoneNumberAssociation;
(function (PhoneNumberAssociation) {
  /**
   * @internal
   */
  PhoneNumberAssociation.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PhoneNumberAssociation = exports.PhoneNumberAssociation || (exports.PhoneNumberAssociation = {})));
var PhoneNumberCapabilities;
(function (PhoneNumberCapabilities) {
  /**
   * @internal
   */
  PhoneNumberCapabilities.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PhoneNumberCapabilities = exports.PhoneNumberCapabilities || (exports.PhoneNumberCapabilities = {})));
var PhoneNumberStatus;
(function (PhoneNumberStatus) {
  PhoneNumberStatus["AcquireFailed"] = "AcquireFailed";
  PhoneNumberStatus["AcquireInProgress"] = "AcquireInProgress";
  PhoneNumberStatus["Assigned"] = "Assigned";
  PhoneNumberStatus["DeleteFailed"] = "DeleteFailed";
  PhoneNumberStatus["DeleteInProgress"] = "DeleteInProgress";
  PhoneNumberStatus["ReleaseFailed"] = "ReleaseFailed";
  PhoneNumberStatus["ReleaseInProgress"] = "ReleaseInProgress";
  PhoneNumberStatus["Unassigned"] = "Unassigned";
})((PhoneNumberStatus = exports.PhoneNumberStatus || (exports.PhoneNumberStatus = {})));
var PhoneNumberType;
(function (PhoneNumberType) {
  PhoneNumberType["Local"] = "Local";
  PhoneNumberType["TollFree"] = "TollFree";
})((PhoneNumberType = exports.PhoneNumberType || (exports.PhoneNumberType = {})));
var PhoneNumber;
(function (PhoneNumber) {
  /**
   * @internal
   */
  PhoneNumber.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.E164PhoneNumber && { E164PhoneNumber: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.CallingName && { CallingName: smithy_client_1.SENSITIVE_STRING }),
  });
})((PhoneNumber = exports.PhoneNumber || (exports.PhoneNumber = {})));
var GetPhoneNumberResponse;
(function (GetPhoneNumberResponse) {
  /**
   * @internal
   */
  GetPhoneNumberResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.PhoneNumber && { PhoneNumber: PhoneNumber.filterSensitiveLog(obj.PhoneNumber) }),
  });
})((GetPhoneNumberResponse = exports.GetPhoneNumberResponse || (exports.GetPhoneNumberResponse = {})));
var GetPhoneNumberOrderRequest;
(function (GetPhoneNumberOrderRequest) {
  /**
   * @internal
   */
  GetPhoneNumberOrderRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetPhoneNumberOrderRequest = exports.GetPhoneNumberOrderRequest || (exports.GetPhoneNumberOrderRequest = {})));
var GetPhoneNumberOrderResponse;
(function (GetPhoneNumberOrderResponse) {
  /**
   * @internal
   */
  GetPhoneNumberOrderResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.PhoneNumberOrder && { PhoneNumberOrder: PhoneNumberOrder.filterSensitiveLog(obj.PhoneNumberOrder) }),
  });
})((GetPhoneNumberOrderResponse = exports.GetPhoneNumberOrderResponse || (exports.GetPhoneNumberOrderResponse = {})));
var GetPhoneNumberSettingsResponse;
(function (GetPhoneNumberSettingsResponse) {
  /**
   * @internal
   */
  GetPhoneNumberSettingsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.CallingName && { CallingName: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (GetPhoneNumberSettingsResponse =
    exports.GetPhoneNumberSettingsResponse || (exports.GetPhoneNumberSettingsResponse = {}))
);
var GetProxySessionRequest;
(function (GetProxySessionRequest) {
  /**
   * @internal
   */
  GetProxySessionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetProxySessionRequest = exports.GetProxySessionRequest || (exports.GetProxySessionRequest = {})));
var GetProxySessionResponse;
(function (GetProxySessionResponse) {
  /**
   * @internal
   */
  GetProxySessionResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ProxySession && { ProxySession: ProxySession.filterSensitiveLog(obj.ProxySession) }),
  });
})((GetProxySessionResponse = exports.GetProxySessionResponse || (exports.GetProxySessionResponse = {})));
var GetRetentionSettingsRequest;
(function (GetRetentionSettingsRequest) {
  /**
   * @internal
   */
  GetRetentionSettingsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetRetentionSettingsRequest = exports.GetRetentionSettingsRequest || (exports.GetRetentionSettingsRequest = {})));
var RoomRetentionSettings;
(function (RoomRetentionSettings) {
  /**
   * @internal
   */
  RoomRetentionSettings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RoomRetentionSettings = exports.RoomRetentionSettings || (exports.RoomRetentionSettings = {})));
var RetentionSettings;
(function (RetentionSettings) {
  /**
   * @internal
   */
  RetentionSettings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RetentionSettings = exports.RetentionSettings || (exports.RetentionSettings = {})));
var GetRetentionSettingsResponse;
(function (GetRetentionSettingsResponse) {
  /**
   * @internal
   */
  GetRetentionSettingsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetRetentionSettingsResponse = exports.GetRetentionSettingsResponse || (exports.GetRetentionSettingsResponse = {}))
);
var GetRoomRequest;
(function (GetRoomRequest) {
  /**
   * @internal
   */
  GetRoomRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetRoomRequest = exports.GetRoomRequest || (exports.GetRoomRequest = {})));
var GetRoomResponse;
(function (GetRoomResponse) {
  /**
   * @internal
   */
  GetRoomResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Room && { Room: Room.filterSensitiveLog(obj.Room) }),
  });
})((GetRoomResponse = exports.GetRoomResponse || (exports.GetRoomResponse = {})));
var GetSipMediaApplicationRequest;
(function (GetSipMediaApplicationRequest) {
  /**
   * @internal
   */
  GetSipMediaApplicationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetSipMediaApplicationRequest =
    exports.GetSipMediaApplicationRequest || (exports.GetSipMediaApplicationRequest = {}))
);
var GetSipMediaApplicationResponse;
(function (GetSipMediaApplicationResponse) {
  /**
   * @internal
   */
  GetSipMediaApplicationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SipMediaApplication && {
      SipMediaApplication: SipMediaApplication.filterSensitiveLog(obj.SipMediaApplication),
    }),
  });
})(
  (GetSipMediaApplicationResponse =
    exports.GetSipMediaApplicationResponse || (exports.GetSipMediaApplicationResponse = {}))
);
var GetSipMediaApplicationLoggingConfigurationRequest;
(function (GetSipMediaApplicationLoggingConfigurationRequest) {
  /**
   * @internal
   */
  GetSipMediaApplicationLoggingConfigurationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetSipMediaApplicationLoggingConfigurationRequest =
    exports.GetSipMediaApplicationLoggingConfigurationRequest ||
    (exports.GetSipMediaApplicationLoggingConfigurationRequest = {}))
);
var SipMediaApplicationLoggingConfiguration;
(function (SipMediaApplicationLoggingConfiguration) {
  /**
   * @internal
   */
  SipMediaApplicationLoggingConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (SipMediaApplicationLoggingConfiguration =
    exports.SipMediaApplicationLoggingConfiguration || (exports.SipMediaApplicationLoggingConfiguration = {}))
);
var GetSipMediaApplicationLoggingConfigurationResponse;
(function (GetSipMediaApplicationLoggingConfigurationResponse) {
  /**
   * @internal
   */
  GetSipMediaApplicationLoggingConfigurationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetSipMediaApplicationLoggingConfigurationResponse =
    exports.GetSipMediaApplicationLoggingConfigurationResponse ||
    (exports.GetSipMediaApplicationLoggingConfigurationResponse = {}))
);
var GetSipRuleRequest;
(function (GetSipRuleRequest) {
  /**
   * @internal
   */
  GetSipRuleRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetSipRuleRequest = exports.GetSipRuleRequest || (exports.GetSipRuleRequest = {})));
var GetSipRuleResponse;
(function (GetSipRuleResponse) {
  /**
   * @internal
   */
  GetSipRuleResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetSipRuleResponse = exports.GetSipRuleResponse || (exports.GetSipRuleResponse = {})));
var GetUserRequest;
(function (GetUserRequest) {
  /**
   * @internal
   */
  GetUserRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetUserRequest = exports.GetUserRequest || (exports.GetUserRequest = {})));
var GetUserResponse;
(function (GetUserResponse) {
  /**
   * @internal
   */
  GetUserResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.User && { User: User.filterSensitiveLog(obj.User) }),
  });
})((GetUserResponse = exports.GetUserResponse || (exports.GetUserResponse = {})));
var GetUserSettingsRequest;
(function (GetUserSettingsRequest) {
  /**
   * @internal
   */
  GetUserSettingsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetUserSettingsRequest = exports.GetUserSettingsRequest || (exports.GetUserSettingsRequest = {})));
var TelephonySettings;
(function (TelephonySettings) {
  /**
   * @internal
   */
  TelephonySettings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TelephonySettings = exports.TelephonySettings || (exports.TelephonySettings = {})));
var UserSettings;
(function (UserSettings) {
  /**
   * @internal
   */
  UserSettings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UserSettings = exports.UserSettings || (exports.UserSettings = {})));
var GetUserSettingsResponse;
(function (GetUserSettingsResponse) {
  /**
   * @internal
   */
  GetUserSettingsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetUserSettingsResponse = exports.GetUserSettingsResponse || (exports.GetUserSettingsResponse = {})));
var GetVoiceConnectorRequest;
(function (GetVoiceConnectorRequest) {
  /**
   * @internal
   */
  GetVoiceConnectorRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetVoiceConnectorRequest = exports.GetVoiceConnectorRequest || (exports.GetVoiceConnectorRequest = {})));
var GetVoiceConnectorResponse;
(function (GetVoiceConnectorResponse) {
  /**
   * @internal
   */
  GetVoiceConnectorResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetVoiceConnectorResponse = exports.GetVoiceConnectorResponse || (exports.GetVoiceConnectorResponse = {})));
var GetVoiceConnectorEmergencyCallingConfigurationRequest;
(function (GetVoiceConnectorEmergencyCallingConfigurationRequest) {
  /**
   * @internal
   */
  GetVoiceConnectorEmergencyCallingConfigurationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetVoiceConnectorEmergencyCallingConfigurationRequest =
    exports.GetVoiceConnectorEmergencyCallingConfigurationRequest ||
    (exports.GetVoiceConnectorEmergencyCallingConfigurationRequest = {}))
);
var GetVoiceConnectorEmergencyCallingConfigurationResponse;
(function (GetVoiceConnectorEmergencyCallingConfigurationResponse) {
  /**
   * @internal
   */
  GetVoiceConnectorEmergencyCallingConfigurationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.EmergencyCallingConfiguration && {
      EmergencyCallingConfiguration: EmergencyCallingConfiguration.filterSensitiveLog(
        obj.EmergencyCallingConfiguration
      ),
    }),
  });
})(
  (GetVoiceConnectorEmergencyCallingConfigurationResponse =
    exports.GetVoiceConnectorEmergencyCallingConfigurationResponse ||
    (exports.GetVoiceConnectorEmergencyCallingConfigurationResponse = {}))
);
var GetVoiceConnectorGroupRequest;
(function (GetVoiceConnectorGroupRequest) {
  /**
   * @internal
   */
  GetVoiceConnectorGroupRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetVoiceConnectorGroupRequest =
    exports.GetVoiceConnectorGroupRequest || (exports.GetVoiceConnectorGroupRequest = {}))
);
var GetVoiceConnectorGroupResponse;
(function (GetVoiceConnectorGroupResponse) {
  /**
   * @internal
   */
  GetVoiceConnectorGroupResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetVoiceConnectorGroupResponse =
    exports.GetVoiceConnectorGroupResponse || (exports.GetVoiceConnectorGroupResponse = {}))
);
var GetVoiceConnectorLoggingConfigurationRequest;
(function (GetVoiceConnectorLoggingConfigurationRequest) {
  /**
   * @internal
   */
  GetVoiceConnectorLoggingConfigurationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetVoiceConnectorLoggingConfigurationRequest =
    exports.GetVoiceConnectorLoggingConfigurationRequest || (exports.GetVoiceConnectorLoggingConfigurationRequest = {}))
);
var LoggingConfiguration;
(function (LoggingConfiguration) {
  /**
   * @internal
   */
  LoggingConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LoggingConfiguration = exports.LoggingConfiguration || (exports.LoggingConfiguration = {})));
var GetVoiceConnectorLoggingConfigurationResponse;
(function (GetVoiceConnectorLoggingConfigurationResponse) {
  /**
   * @internal
   */
  GetVoiceConnectorLoggingConfigurationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetVoiceConnectorLoggingConfigurationResponse =
    exports.GetVoiceConnectorLoggingConfigurationResponse ||
    (exports.GetVoiceConnectorLoggingConfigurationResponse = {}))
);
var GetVoiceConnectorOriginationRequest;
(function (GetVoiceConnectorOriginationRequest) {
  /**
   * @internal
   */
  GetVoiceConnectorOriginationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetVoiceConnectorOriginationRequest =
    exports.GetVoiceConnectorOriginationRequest || (exports.GetVoiceConnectorOriginationRequest = {}))
);
var OriginationRouteProtocol;
(function (OriginationRouteProtocol) {
  OriginationRouteProtocol["TCP"] = "TCP";
  OriginationRouteProtocol["UDP"] = "UDP";
})((OriginationRouteProtocol = exports.OriginationRouteProtocol || (exports.OriginationRouteProtocol = {})));
var OriginationRoute;
(function (OriginationRoute) {
  /**
   * @internal
   */
  OriginationRoute.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((OriginationRoute = exports.OriginationRoute || (exports.OriginationRoute = {})));
var Origination;
(function (Origination) {
  /**
   * @internal
   */
  Origination.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Origination = exports.Origination || (exports.Origination = {})));
var GetVoiceConnectorOriginationResponse;
(function (GetVoiceConnectorOriginationResponse) {
  /**
   * @internal
   */
  GetVoiceConnectorOriginationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetVoiceConnectorOriginationResponse =
    exports.GetVoiceConnectorOriginationResponse || (exports.GetVoiceConnectorOriginationResponse = {}))
);
var GetVoiceConnectorProxyRequest;
(function (GetVoiceConnectorProxyRequest) {
  /**
   * @internal
   */
  GetVoiceConnectorProxyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetVoiceConnectorProxyRequest =
    exports.GetVoiceConnectorProxyRequest || (exports.GetVoiceConnectorProxyRequest = {}))
);
var Proxy;
(function (Proxy) {
  /**
   * @internal
   */
  Proxy.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.FallBackPhoneNumber && { FallBackPhoneNumber: smithy_client_1.SENSITIVE_STRING }),
  });
})((Proxy = exports.Proxy || (exports.Proxy = {})));
var GetVoiceConnectorProxyResponse;
(function (GetVoiceConnectorProxyResponse) {
  /**
   * @internal
   */
  GetVoiceConnectorProxyResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Proxy && { Proxy: Proxy.filterSensitiveLog(obj.Proxy) }),
  });
})(
  (GetVoiceConnectorProxyResponse =
    exports.GetVoiceConnectorProxyResponse || (exports.GetVoiceConnectorProxyResponse = {}))
);
var GetVoiceConnectorStreamingConfigurationRequest;
(function (GetVoiceConnectorStreamingConfigurationRequest) {
  /**
   * @internal
   */
  GetVoiceConnectorStreamingConfigurationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetVoiceConnectorStreamingConfigurationRequest =
    exports.GetVoiceConnectorStreamingConfigurationRequest ||
    (exports.GetVoiceConnectorStreamingConfigurationRequest = {}))
);
//# sourceMappingURL=models_0.js.map
