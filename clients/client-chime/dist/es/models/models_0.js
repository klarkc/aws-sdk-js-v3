import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var ErrorCode;
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
})(ErrorCode || (ErrorCode = {}));
export var AccessDeniedException;
(function (AccessDeniedException) {
  /**
   * @internal
   */
  AccessDeniedException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AccessDeniedException || (AccessDeniedException = {}));
export var AccountType;
(function (AccountType) {
  AccountType["EnterpriseDirectory"] = "EnterpriseDirectory";
  AccountType["EnterpriseLWA"] = "EnterpriseLWA";
  AccountType["EnterpriseOIDC"] = "EnterpriseOIDC";
  AccountType["Team"] = "Team";
})(AccountType || (AccountType = {}));
export var License;
(function (License) {
  License["Basic"] = "Basic";
  License["Plus"] = "Plus";
  License["Pro"] = "Pro";
  License["ProTrial"] = "ProTrial";
})(License || (License = {}));
export var SigninDelegateGroup;
(function (SigninDelegateGroup) {
  /**
   * @internal
   */
  SigninDelegateGroup.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SigninDelegateGroup || (SigninDelegateGroup = {}));
export var Account;
(function (Account) {
  /**
   * @internal
   */
  Account.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Account || (Account = {}));
export var AccountSettings;
(function (AccountSettings) {
  /**
   * @internal
   */
  AccountSettings.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AccountSettings || (AccountSettings = {}));
export var AlexaForBusinessMetadata;
(function (AlexaForBusinessMetadata) {
  /**
   * @internal
   */
  AlexaForBusinessMetadata.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.AlexaForBusinessRoomArn && { AlexaForBusinessRoomArn: SENSITIVE_STRING });
  };
})(AlexaForBusinessMetadata || (AlexaForBusinessMetadata = {}));
export var AppInstance;
(function (AppInstance) {
  /**
   * @internal
   */
  AppInstance.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.Name && { Name: SENSITIVE_STRING }),
      obj.Metadata && { Metadata: SENSITIVE_STRING }
    );
  };
})(AppInstance || (AppInstance = {}));
export var Identity;
(function (Identity) {
  /**
   * @internal
   */
  Identity.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Name && { Name: SENSITIVE_STRING });
  };
})(Identity || (Identity = {}));
export var AppInstanceAdmin;
(function (AppInstanceAdmin) {
  /**
   * @internal
   */
  AppInstanceAdmin.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Admin && { Admin: Identity.filterSensitiveLog(obj.Admin) });
  };
})(AppInstanceAdmin || (AppInstanceAdmin = {}));
export var AppInstanceAdminSummary;
(function (AppInstanceAdminSummary) {
  /**
   * @internal
   */
  AppInstanceAdminSummary.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Admin && { Admin: Identity.filterSensitiveLog(obj.Admin) });
  };
})(AppInstanceAdminSummary || (AppInstanceAdminSummary = {}));
export var AppInstanceDataType;
(function (AppInstanceDataType) {
  AppInstanceDataType["Channel"] = "Channel";
  AppInstanceDataType["ChannelMessage"] = "ChannelMessage";
})(AppInstanceDataType || (AppInstanceDataType = {}));
export var AppInstanceSummary;
(function (AppInstanceSummary) {
  /**
   * @internal
   */
  AppInstanceSummary.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.Name && { Name: SENSITIVE_STRING }),
      obj.Metadata && { Metadata: SENSITIVE_STRING }
    );
  };
})(AppInstanceSummary || (AppInstanceSummary = {}));
export var ChannelRetentionSettings;
(function (ChannelRetentionSettings) {
  /**
   * @internal
   */
  ChannelRetentionSettings.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ChannelRetentionSettings || (ChannelRetentionSettings = {}));
export var AppInstanceRetentionSettings;
(function (AppInstanceRetentionSettings) {
  /**
   * @internal
   */
  AppInstanceRetentionSettings.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AppInstanceRetentionSettings || (AppInstanceRetentionSettings = {}));
export var AppInstanceStreamingConfiguration;
(function (AppInstanceStreamingConfiguration) {
  /**
   * @internal
   */
  AppInstanceStreamingConfiguration.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.ResourceArn && { ResourceArn: SENSITIVE_STRING });
  };
})(AppInstanceStreamingConfiguration || (AppInstanceStreamingConfiguration = {}));
export var AppInstanceUser;
(function (AppInstanceUser) {
  /**
   * @internal
   */
  AppInstanceUser.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.Name && { Name: SENSITIVE_STRING }),
      obj.Metadata && { Metadata: SENSITIVE_STRING }
    );
  };
})(AppInstanceUser || (AppInstanceUser = {}));
export var AppInstanceUserSummary;
(function (AppInstanceUserSummary) {
  /**
   * @internal
   */
  AppInstanceUserSummary.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.Name && { Name: SENSITIVE_STRING }),
      obj.Metadata && { Metadata: SENSITIVE_STRING }
    );
  };
})(AppInstanceUserSummary || (AppInstanceUserSummary = {}));
export var ChannelMembershipType;
(function (ChannelMembershipType) {
  ChannelMembershipType["DEFAULT"] = "DEFAULT";
  ChannelMembershipType["HIDDEN"] = "HIDDEN";
})(ChannelMembershipType || (ChannelMembershipType = {}));
export var AppInstanceUserMembershipSummary;
(function (AppInstanceUserMembershipSummary) {
  /**
   * @internal
   */
  AppInstanceUserMembershipSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AppInstanceUserMembershipSummary || (AppInstanceUserMembershipSummary = {}));
export var AssociatePhoneNumbersWithVoiceConnectorRequest;
(function (AssociatePhoneNumbersWithVoiceConnectorRequest) {
  /**
   * @internal
   */
  AssociatePhoneNumbersWithVoiceConnectorRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING });
  };
})(AssociatePhoneNumbersWithVoiceConnectorRequest || (AssociatePhoneNumbersWithVoiceConnectorRequest = {}));
export var PhoneNumberError;
(function (PhoneNumberError) {
  /**
   * @internal
   */
  PhoneNumberError.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PhoneNumberError || (PhoneNumberError = {}));
export var AssociatePhoneNumbersWithVoiceConnectorResponse;
(function (AssociatePhoneNumbersWithVoiceConnectorResponse) {
  /**
   * @internal
   */
  AssociatePhoneNumbersWithVoiceConnectorResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AssociatePhoneNumbersWithVoiceConnectorResponse || (AssociatePhoneNumbersWithVoiceConnectorResponse = {}));
export var BadRequestException;
(function (BadRequestException) {
  /**
   * @internal
   */
  BadRequestException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BadRequestException || (BadRequestException = {}));
export var ForbiddenException;
(function (ForbiddenException) {
  /**
   * @internal
   */
  ForbiddenException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ForbiddenException || (ForbiddenException = {}));
export var NotFoundException;
(function (NotFoundException) {
  /**
   * @internal
   */
  NotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(NotFoundException || (NotFoundException = {}));
export var ServiceFailureException;
(function (ServiceFailureException) {
  /**
   * @internal
   */
  ServiceFailureException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ServiceFailureException || (ServiceFailureException = {}));
export var ServiceUnavailableException;
(function (ServiceUnavailableException) {
  /**
   * @internal
   */
  ServiceUnavailableException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ServiceUnavailableException || (ServiceUnavailableException = {}));
export var ThrottledClientException;
(function (ThrottledClientException) {
  /**
   * @internal
   */
  ThrottledClientException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ThrottledClientException || (ThrottledClientException = {}));
export var UnauthorizedClientException;
(function (UnauthorizedClientException) {
  /**
   * @internal
   */
  UnauthorizedClientException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UnauthorizedClientException || (UnauthorizedClientException = {}));
export var AssociatePhoneNumbersWithVoiceConnectorGroupRequest;
(function (AssociatePhoneNumbersWithVoiceConnectorGroupRequest) {
  /**
   * @internal
   */
  AssociatePhoneNumbersWithVoiceConnectorGroupRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING });
  };
})(AssociatePhoneNumbersWithVoiceConnectorGroupRequest || (AssociatePhoneNumbersWithVoiceConnectorGroupRequest = {}));
export var AssociatePhoneNumbersWithVoiceConnectorGroupResponse;
(function (AssociatePhoneNumbersWithVoiceConnectorGroupResponse) {
  /**
   * @internal
   */
  AssociatePhoneNumbersWithVoiceConnectorGroupResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AssociatePhoneNumbersWithVoiceConnectorGroupResponse || (AssociatePhoneNumbersWithVoiceConnectorGroupResponse = {}));
export var AssociatePhoneNumberWithUserRequest;
(function (AssociatePhoneNumberWithUserRequest) {
  /**
   * @internal
   */
  AssociatePhoneNumberWithUserRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.E164PhoneNumber && { E164PhoneNumber: SENSITIVE_STRING });
  };
})(AssociatePhoneNumberWithUserRequest || (AssociatePhoneNumberWithUserRequest = {}));
export var AssociatePhoneNumberWithUserResponse;
(function (AssociatePhoneNumberWithUserResponse) {
  /**
   * @internal
   */
  AssociatePhoneNumberWithUserResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AssociatePhoneNumberWithUserResponse || (AssociatePhoneNumberWithUserResponse = {}));
export var AssociateSigninDelegateGroupsWithAccountRequest;
(function (AssociateSigninDelegateGroupsWithAccountRequest) {
  /**
   * @internal
   */
  AssociateSigninDelegateGroupsWithAccountRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AssociateSigninDelegateGroupsWithAccountRequest || (AssociateSigninDelegateGroupsWithAccountRequest = {}));
export var AssociateSigninDelegateGroupsWithAccountResponse;
(function (AssociateSigninDelegateGroupsWithAccountResponse) {
  /**
   * @internal
   */
  AssociateSigninDelegateGroupsWithAccountResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AssociateSigninDelegateGroupsWithAccountResponse || (AssociateSigninDelegateGroupsWithAccountResponse = {}));
export var Attendee;
(function (Attendee) {
  /**
   * @internal
   */
  Attendee.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
      obj.JoinToken && { JoinToken: SENSITIVE_STRING }
    );
  };
})(Attendee || (Attendee = {}));
export var Tag;
(function (Tag) {
  /**
   * @internal
   */
  Tag.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.Key && { Key: SENSITIVE_STRING }),
      obj.Value && { Value: SENSITIVE_STRING }
    );
  };
})(Tag || (Tag = {}));
export var BatchChannelMemberships;
(function (BatchChannelMemberships) {
  /**
   * @internal
   */
  BatchChannelMemberships.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.InvitedBy && { InvitedBy: Identity.filterSensitiveLog(obj.InvitedBy) }),
      obj.Members && {
        Members: obj.Members.map(function (item) {
          return Identity.filterSensitiveLog(item);
        }),
      }
    );
  };
})(BatchChannelMemberships || (BatchChannelMemberships = {}));
export var CreateAttendeeRequestItem;
(function (CreateAttendeeRequestItem) {
  /**
   * @internal
   */
  CreateAttendeeRequestItem.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
      obj.Tags && {
        Tags: obj.Tags.map(function (item) {
          return Tag.filterSensitiveLog(item);
        }),
      }
    );
  };
})(CreateAttendeeRequestItem || (CreateAttendeeRequestItem = {}));
export var BatchCreateAttendeeRequest;
(function (BatchCreateAttendeeRequest) {
  /**
   * @internal
   */
  BatchCreateAttendeeRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Attendees && {
        Attendees: obj.Attendees.map(function (item) {
          return CreateAttendeeRequestItem.filterSensitiveLog(item);
        }),
      }
    );
  };
})(BatchCreateAttendeeRequest || (BatchCreateAttendeeRequest = {}));
export var CreateAttendeeError;
(function (CreateAttendeeError) {
  /**
   * @internal
   */
  CreateAttendeeError.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING });
  };
})(CreateAttendeeError || (CreateAttendeeError = {}));
export var BatchCreateAttendeeResponse;
(function (BatchCreateAttendeeResponse) {
  /**
   * @internal
   */
  BatchCreateAttendeeResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign({}, obj),
        obj.Attendees && {
          Attendees: obj.Attendees.map(function (item) {
            return Attendee.filterSensitiveLog(item);
          }),
        }
      ),
      obj.Errors && {
        Errors: obj.Errors.map(function (item) {
          return CreateAttendeeError.filterSensitiveLog(item);
        }),
      }
    );
  };
})(BatchCreateAttendeeResponse || (BatchCreateAttendeeResponse = {}));
export var ResourceLimitExceededException;
(function (ResourceLimitExceededException) {
  /**
   * @internal
   */
  ResourceLimitExceededException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceLimitExceededException || (ResourceLimitExceededException = {}));
export var BatchCreateChannelMembershipRequest;
(function (BatchCreateChannelMembershipRequest) {
  /**
   * @internal
   */
  BatchCreateChannelMembershipRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchCreateChannelMembershipRequest || (BatchCreateChannelMembershipRequest = {}));
export var BatchCreateChannelMembershipError;
(function (BatchCreateChannelMembershipError) {
  /**
   * @internal
   */
  BatchCreateChannelMembershipError.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchCreateChannelMembershipError || (BatchCreateChannelMembershipError = {}));
export var BatchCreateChannelMembershipResponse;
(function (BatchCreateChannelMembershipResponse) {
  /**
   * @internal
   */
  BatchCreateChannelMembershipResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.BatchChannelMemberships && {
        BatchChannelMemberships: BatchChannelMemberships.filterSensitiveLog(obj.BatchChannelMemberships),
      }
    );
  };
})(BatchCreateChannelMembershipResponse || (BatchCreateChannelMembershipResponse = {}));
export var RoomMembershipRole;
(function (RoomMembershipRole) {
  RoomMembershipRole["Administrator"] = "Administrator";
  RoomMembershipRole["Member"] = "Member";
})(RoomMembershipRole || (RoomMembershipRole = {}));
export var MembershipItem;
(function (MembershipItem) {
  /**
   * @internal
   */
  MembershipItem.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(MembershipItem || (MembershipItem = {}));
export var BatchCreateRoomMembershipRequest;
(function (BatchCreateRoomMembershipRequest) {
  /**
   * @internal
   */
  BatchCreateRoomMembershipRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchCreateRoomMembershipRequest || (BatchCreateRoomMembershipRequest = {}));
export var MemberError;
(function (MemberError) {
  /**
   * @internal
   */
  MemberError.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(MemberError || (MemberError = {}));
export var BatchCreateRoomMembershipResponse;
(function (BatchCreateRoomMembershipResponse) {
  /**
   * @internal
   */
  BatchCreateRoomMembershipResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchCreateRoomMembershipResponse || (BatchCreateRoomMembershipResponse = {}));
export var BatchDeletePhoneNumberRequest;
(function (BatchDeletePhoneNumberRequest) {
  /**
   * @internal
   */
  BatchDeletePhoneNumberRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchDeletePhoneNumberRequest || (BatchDeletePhoneNumberRequest = {}));
export var BatchDeletePhoneNumberResponse;
(function (BatchDeletePhoneNumberResponse) {
  /**
   * @internal
   */
  BatchDeletePhoneNumberResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchDeletePhoneNumberResponse || (BatchDeletePhoneNumberResponse = {}));
export var BatchSuspendUserRequest;
(function (BatchSuspendUserRequest) {
  /**
   * @internal
   */
  BatchSuspendUserRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchSuspendUserRequest || (BatchSuspendUserRequest = {}));
export var UserError;
(function (UserError) {
  /**
   * @internal
   */
  UserError.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UserError || (UserError = {}));
export var BatchSuspendUserResponse;
(function (BatchSuspendUserResponse) {
  /**
   * @internal
   */
  BatchSuspendUserResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchSuspendUserResponse || (BatchSuspendUserResponse = {}));
export var BatchUnsuspendUserRequest;
(function (BatchUnsuspendUserRequest) {
  /**
   * @internal
   */
  BatchUnsuspendUserRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchUnsuspendUserRequest || (BatchUnsuspendUserRequest = {}));
export var BatchUnsuspendUserResponse;
(function (BatchUnsuspendUserResponse) {
  /**
   * @internal
   */
  BatchUnsuspendUserResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchUnsuspendUserResponse || (BatchUnsuspendUserResponse = {}));
export var PhoneNumberProductType;
(function (PhoneNumberProductType) {
  PhoneNumberProductType["BusinessCalling"] = "BusinessCalling";
  PhoneNumberProductType["SipMediaApplicationDialIn"] = "SipMediaApplicationDialIn";
  PhoneNumberProductType["VoiceConnector"] = "VoiceConnector";
})(PhoneNumberProductType || (PhoneNumberProductType = {}));
export var UpdatePhoneNumberRequestItem;
(function (UpdatePhoneNumberRequestItem) {
  /**
   * @internal
   */
  UpdatePhoneNumberRequestItem.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.CallingName && { CallingName: SENSITIVE_STRING });
  };
})(UpdatePhoneNumberRequestItem || (UpdatePhoneNumberRequestItem = {}));
export var BatchUpdatePhoneNumberRequest;
(function (BatchUpdatePhoneNumberRequest) {
  /**
   * @internal
   */
  BatchUpdatePhoneNumberRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.UpdatePhoneNumberRequestItems && {
        UpdatePhoneNumberRequestItems: obj.UpdatePhoneNumberRequestItems.map(function (item) {
          return UpdatePhoneNumberRequestItem.filterSensitiveLog(item);
        }),
      }
    );
  };
})(BatchUpdatePhoneNumberRequest || (BatchUpdatePhoneNumberRequest = {}));
export var BatchUpdatePhoneNumberResponse;
(function (BatchUpdatePhoneNumberResponse) {
  /**
   * @internal
   */
  BatchUpdatePhoneNumberResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchUpdatePhoneNumberResponse || (BatchUpdatePhoneNumberResponse = {}));
export var UserType;
(function (UserType) {
  UserType["PrivateUser"] = "PrivateUser";
  UserType["SharedDevice"] = "SharedDevice";
})(UserType || (UserType = {}));
export var UpdateUserRequestItem;
(function (UpdateUserRequestItem) {
  /**
   * @internal
   */
  UpdateUserRequestItem.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.AlexaForBusinessMetadata && {
        AlexaForBusinessMetadata: AlexaForBusinessMetadata.filterSensitiveLog(obj.AlexaForBusinessMetadata),
      }
    );
  };
})(UpdateUserRequestItem || (UpdateUserRequestItem = {}));
export var BatchUpdateUserRequest;
(function (BatchUpdateUserRequest) {
  /**
   * @internal
   */
  BatchUpdateUserRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.UpdateUserRequestItems && {
        UpdateUserRequestItems: obj.UpdateUserRequestItems.map(function (item) {
          return UpdateUserRequestItem.filterSensitiveLog(item);
        }),
      }
    );
  };
})(BatchUpdateUserRequest || (BatchUpdateUserRequest = {}));
export var BatchUpdateUserResponse;
(function (BatchUpdateUserResponse) {
  /**
   * @internal
   */
  BatchUpdateUserResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchUpdateUserResponse || (BatchUpdateUserResponse = {}));
export var BotType;
(function (BotType) {
  BotType["ChatBot"] = "ChatBot";
})(BotType || (BotType = {}));
export var Bot;
(function (Bot) {
  /**
   * @internal
   */
  Bot.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(__assign({}, obj), obj.DisplayName && { DisplayName: SENSITIVE_STRING }),
        obj.BotEmail && { BotEmail: SENSITIVE_STRING }
      ),
      obj.SecurityToken && { SecurityToken: SENSITIVE_STRING }
    );
  };
})(Bot || (Bot = {}));
export var BusinessCallingSettings;
(function (BusinessCallingSettings) {
  /**
   * @internal
   */
  BusinessCallingSettings.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BusinessCallingSettings || (BusinessCallingSettings = {}));
export var CallingNameStatus;
(function (CallingNameStatus) {
  CallingNameStatus["Unassigned"] = "Unassigned";
  CallingNameStatus["UpdateFailed"] = "UpdateFailed";
  CallingNameStatus["UpdateInProgress"] = "UpdateInProgress";
  CallingNameStatus["UpdateSucceeded"] = "UpdateSucceeded";
})(CallingNameStatus || (CallingNameStatus = {}));
export var Capability;
(function (Capability) {
  Capability["SMS"] = "SMS";
  Capability["Voice"] = "Voice";
})(Capability || (Capability = {}));
export var ChannelMode;
(function (ChannelMode) {
  ChannelMode["RESTRICTED"] = "RESTRICTED";
  ChannelMode["UNRESTRICTED"] = "UNRESTRICTED";
})(ChannelMode || (ChannelMode = {}));
export var ChannelPrivacy;
(function (ChannelPrivacy) {
  ChannelPrivacy["PRIVATE"] = "PRIVATE";
  ChannelPrivacy["PUBLIC"] = "PUBLIC";
})(ChannelPrivacy || (ChannelPrivacy = {}));
export var Channel;
(function (Channel) {
  /**
   * @internal
   */
  Channel.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(__assign({}, obj), obj.Name && { Name: SENSITIVE_STRING }),
        obj.Metadata && { Metadata: SENSITIVE_STRING }
      ),
      obj.CreatedBy && { CreatedBy: Identity.filterSensitiveLog(obj.CreatedBy) }
    );
  };
})(Channel || (Channel = {}));
export var ChannelBan;
(function (ChannelBan) {
  /**
   * @internal
   */
  ChannelBan.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.Member && { Member: Identity.filterSensitiveLog(obj.Member) }),
      obj.CreatedBy && { CreatedBy: Identity.filterSensitiveLog(obj.CreatedBy) }
    );
  };
})(ChannelBan || (ChannelBan = {}));
export var ChannelBanSummary;
(function (ChannelBanSummary) {
  /**
   * @internal
   */
  ChannelBanSummary.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Member && { Member: Identity.filterSensitiveLog(obj.Member) });
  };
})(ChannelBanSummary || (ChannelBanSummary = {}));
export var ChannelMembership;
(function (ChannelMembership) {
  /**
   * @internal
   */
  ChannelMembership.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.InvitedBy && { InvitedBy: Identity.filterSensitiveLog(obj.InvitedBy) }),
      obj.Member && { Member: Identity.filterSensitiveLog(obj.Member) }
    );
  };
})(ChannelMembership || (ChannelMembership = {}));
export var ChannelSummary;
(function (ChannelSummary) {
  /**
   * @internal
   */
  ChannelSummary.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.Name && { Name: SENSITIVE_STRING }),
      obj.Metadata && { Metadata: SENSITIVE_STRING }
    );
  };
})(ChannelSummary || (ChannelSummary = {}));
export var ChannelMembershipForAppInstanceUserSummary;
(function (ChannelMembershipForAppInstanceUserSummary) {
  /**
   * @internal
   */
  ChannelMembershipForAppInstanceUserSummary.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.ChannelSummary && { ChannelSummary: ChannelSummary.filterSensitiveLog(obj.ChannelSummary) }
    );
  };
})(ChannelMembershipForAppInstanceUserSummary || (ChannelMembershipForAppInstanceUserSummary = {}));
export var ChannelMembershipSummary;
(function (ChannelMembershipSummary) {
  /**
   * @internal
   */
  ChannelMembershipSummary.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Member && { Member: Identity.filterSensitiveLog(obj.Member) });
  };
})(ChannelMembershipSummary || (ChannelMembershipSummary = {}));
export var ChannelMessagePersistenceType;
(function (ChannelMessagePersistenceType) {
  ChannelMessagePersistenceType["NON_PERSISTENT"] = "NON_PERSISTENT";
  ChannelMessagePersistenceType["PERSISTENT"] = "PERSISTENT";
})(ChannelMessagePersistenceType || (ChannelMessagePersistenceType = {}));
export var ChannelMessageType;
(function (ChannelMessageType) {
  ChannelMessageType["CONTROL"] = "CONTROL";
  ChannelMessageType["STANDARD"] = "STANDARD";
})(ChannelMessageType || (ChannelMessageType = {}));
export var ChannelMessage;
(function (ChannelMessage) {
  /**
   * @internal
   */
  ChannelMessage.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(__assign({}, obj), obj.Content && { Content: SENSITIVE_STRING }),
        obj.Metadata && { Metadata: SENSITIVE_STRING }
      ),
      obj.Sender && { Sender: Identity.filterSensitiveLog(obj.Sender) }
    );
  };
})(ChannelMessage || (ChannelMessage = {}));
export var ChannelMessageSummary;
(function (ChannelMessageSummary) {
  /**
   * @internal
   */
  ChannelMessageSummary.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(__assign({}, obj), obj.Content && { Content: SENSITIVE_STRING }),
        obj.Metadata && { Metadata: SENSITIVE_STRING }
      ),
      obj.Sender && { Sender: Identity.filterSensitiveLog(obj.Sender) }
    );
  };
})(ChannelMessageSummary || (ChannelMessageSummary = {}));
export var ChannelModeratedByAppInstanceUserSummary;
(function (ChannelModeratedByAppInstanceUserSummary) {
  /**
   * @internal
   */
  ChannelModeratedByAppInstanceUserSummary.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.ChannelSummary && { ChannelSummary: ChannelSummary.filterSensitiveLog(obj.ChannelSummary) }
    );
  };
})(ChannelModeratedByAppInstanceUserSummary || (ChannelModeratedByAppInstanceUserSummary = {}));
export var ChannelModerator;
(function (ChannelModerator) {
  /**
   * @internal
   */
  ChannelModerator.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.Moderator && { Moderator: Identity.filterSensitiveLog(obj.Moderator) }),
      obj.CreatedBy && { CreatedBy: Identity.filterSensitiveLog(obj.CreatedBy) }
    );
  };
})(ChannelModerator || (ChannelModerator = {}));
export var ChannelModeratorSummary;
(function (ChannelModeratorSummary) {
  /**
   * @internal
   */
  ChannelModeratorSummary.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Moderator && { Moderator: Identity.filterSensitiveLog(obj.Moderator) });
  };
})(ChannelModeratorSummary || (ChannelModeratorSummary = {}));
export var ConflictException;
(function (ConflictException) {
  /**
   * @internal
   */
  ConflictException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConflictException || (ConflictException = {}));
export var ConversationRetentionSettings;
(function (ConversationRetentionSettings) {
  /**
   * @internal
   */
  ConversationRetentionSettings.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConversationRetentionSettings || (ConversationRetentionSettings = {}));
export var CreateAccountRequest;
(function (CreateAccountRequest) {
  /**
   * @internal
   */
  CreateAccountRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateAccountRequest || (CreateAccountRequest = {}));
export var CreateAccountResponse;
(function (CreateAccountResponse) {
  /**
   * @internal
   */
  CreateAccountResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateAccountResponse || (CreateAccountResponse = {}));
export var CreateAppInstanceRequest;
(function (CreateAppInstanceRequest) {
  /**
   * @internal
   */
  CreateAppInstanceRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(
          __assign(__assign({}, obj), obj.Name && { Name: SENSITIVE_STRING }),
          obj.Metadata && { Metadata: SENSITIVE_STRING }
        ),
        obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }
      ),
      obj.Tags && {
        Tags: obj.Tags.map(function (item) {
          return Tag.filterSensitiveLog(item);
        }),
      }
    );
  };
})(CreateAppInstanceRequest || (CreateAppInstanceRequest = {}));
export var CreateAppInstanceResponse;
(function (CreateAppInstanceResponse) {
  /**
   * @internal
   */
  CreateAppInstanceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateAppInstanceResponse || (CreateAppInstanceResponse = {}));
export var CreateAppInstanceAdminRequest;
(function (CreateAppInstanceAdminRequest) {
  /**
   * @internal
   */
  CreateAppInstanceAdminRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateAppInstanceAdminRequest || (CreateAppInstanceAdminRequest = {}));
export var CreateAppInstanceAdminResponse;
(function (CreateAppInstanceAdminResponse) {
  /**
   * @internal
   */
  CreateAppInstanceAdminResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.AppInstanceAdmin && { AppInstanceAdmin: Identity.filterSensitiveLog(obj.AppInstanceAdmin) }
    );
  };
})(CreateAppInstanceAdminResponse || (CreateAppInstanceAdminResponse = {}));
export var CreateAppInstanceUserRequest;
(function (CreateAppInstanceUserRequest) {
  /**
   * @internal
   */
  CreateAppInstanceUserRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(
          __assign(
            __assign(__assign({}, obj), obj.AppInstanceUserId && { AppInstanceUserId: SENSITIVE_STRING }),
            obj.Name && { Name: SENSITIVE_STRING }
          ),
          obj.Metadata && { Metadata: SENSITIVE_STRING }
        ),
        obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }
      ),
      obj.Tags && {
        Tags: obj.Tags.map(function (item) {
          return Tag.filterSensitiveLog(item);
        }),
      }
    );
  };
})(CreateAppInstanceUserRequest || (CreateAppInstanceUserRequest = {}));
export var CreateAppInstanceUserResponse;
(function (CreateAppInstanceUserResponse) {
  /**
   * @internal
   */
  CreateAppInstanceUserResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateAppInstanceUserResponse || (CreateAppInstanceUserResponse = {}));
export var CreateAttendeeRequest;
(function (CreateAttendeeRequest) {
  /**
   * @internal
   */
  CreateAttendeeRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
      obj.Tags && {
        Tags: obj.Tags.map(function (item) {
          return Tag.filterSensitiveLog(item);
        }),
      }
    );
  };
})(CreateAttendeeRequest || (CreateAttendeeRequest = {}));
export var CreateAttendeeResponse;
(function (CreateAttendeeResponse) {
  /**
   * @internal
   */
  CreateAttendeeResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Attendee && { Attendee: Attendee.filterSensitiveLog(obj.Attendee) });
  };
})(CreateAttendeeResponse || (CreateAttendeeResponse = {}));
export var CreateBotRequest;
(function (CreateBotRequest) {
  /**
   * @internal
   */
  CreateBotRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.DisplayName && { DisplayName: SENSITIVE_STRING });
  };
})(CreateBotRequest || (CreateBotRequest = {}));
export var CreateBotResponse;
(function (CreateBotResponse) {
  /**
   * @internal
   */
  CreateBotResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Bot && { Bot: Bot.filterSensitiveLog(obj.Bot) });
  };
})(CreateBotResponse || (CreateBotResponse = {}));
export var CreateChannelRequest;
(function (CreateChannelRequest) {
  /**
   * @internal
   */
  CreateChannelRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(
          __assign(__assign({}, obj), obj.Name && { Name: SENSITIVE_STRING }),
          obj.Metadata && { Metadata: SENSITIVE_STRING }
        ),
        obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }
      ),
      obj.Tags && {
        Tags: obj.Tags.map(function (item) {
          return Tag.filterSensitiveLog(item);
        }),
      }
    );
  };
})(CreateChannelRequest || (CreateChannelRequest = {}));
export var CreateChannelResponse;
(function (CreateChannelResponse) {
  /**
   * @internal
   */
  CreateChannelResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateChannelResponse || (CreateChannelResponse = {}));
export var CreateChannelBanRequest;
(function (CreateChannelBanRequest) {
  /**
   * @internal
   */
  CreateChannelBanRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateChannelBanRequest || (CreateChannelBanRequest = {}));
export var CreateChannelBanResponse;
(function (CreateChannelBanResponse) {
  /**
   * @internal
   */
  CreateChannelBanResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Member && { Member: Identity.filterSensitiveLog(obj.Member) });
  };
})(CreateChannelBanResponse || (CreateChannelBanResponse = {}));
export var CreateChannelMembershipRequest;
(function (CreateChannelMembershipRequest) {
  /**
   * @internal
   */
  CreateChannelMembershipRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateChannelMembershipRequest || (CreateChannelMembershipRequest = {}));
export var CreateChannelMembershipResponse;
(function (CreateChannelMembershipResponse) {
  /**
   * @internal
   */
  CreateChannelMembershipResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Member && { Member: Identity.filterSensitiveLog(obj.Member) });
  };
})(CreateChannelMembershipResponse || (CreateChannelMembershipResponse = {}));
export var CreateChannelModeratorRequest;
(function (CreateChannelModeratorRequest) {
  /**
   * @internal
   */
  CreateChannelModeratorRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateChannelModeratorRequest || (CreateChannelModeratorRequest = {}));
export var CreateChannelModeratorResponse;
(function (CreateChannelModeratorResponse) {
  /**
   * @internal
   */
  CreateChannelModeratorResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.ChannelModerator && { ChannelModerator: Identity.filterSensitiveLog(obj.ChannelModerator) }
    );
  };
})(CreateChannelModeratorResponse || (CreateChannelModeratorResponse = {}));
export var MeetingNotificationConfiguration;
(function (MeetingNotificationConfiguration) {
  /**
   * @internal
   */
  MeetingNotificationConfiguration.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.SnsTopicArn && { SnsTopicArn: SENSITIVE_STRING }),
      obj.SqsQueueArn && { SqsQueueArn: SENSITIVE_STRING }
    );
  };
})(MeetingNotificationConfiguration || (MeetingNotificationConfiguration = {}));
export var CreateMeetingRequest;
(function (CreateMeetingRequest) {
  /**
   * @internal
   */
  CreateMeetingRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(
          __assign(
            __assign(__assign({}, obj), obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
            obj.ExternalMeetingId && { ExternalMeetingId: SENSITIVE_STRING }
          ),
          obj.MeetingHostId && { MeetingHostId: SENSITIVE_STRING }
        ),
        obj.Tags && {
          Tags: obj.Tags.map(function (item) {
            return Tag.filterSensitiveLog(item);
          }),
        }
      ),
      obj.NotificationsConfiguration && {
        NotificationsConfiguration: MeetingNotificationConfiguration.filterSensitiveLog(obj.NotificationsConfiguration),
      }
    );
  };
})(CreateMeetingRequest || (CreateMeetingRequest = {}));
export var MediaPlacement;
(function (MediaPlacement) {
  /**
   * @internal
   */
  MediaPlacement.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(MediaPlacement || (MediaPlacement = {}));
export var Meeting;
(function (Meeting) {
  /**
   * @internal
   */
  Meeting.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.ExternalMeetingId && { ExternalMeetingId: SENSITIVE_STRING });
  };
})(Meeting || (Meeting = {}));
export var CreateMeetingResponse;
(function (CreateMeetingResponse) {
  /**
   * @internal
   */
  CreateMeetingResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Meeting && { Meeting: Meeting.filterSensitiveLog(obj.Meeting) });
  };
})(CreateMeetingResponse || (CreateMeetingResponse = {}));
export var CreateMeetingDialOutRequest;
(function (CreateMeetingDialOutRequest) {
  /**
   * @internal
   */
  CreateMeetingDialOutRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(__assign({}, obj), obj.FromPhoneNumber && { FromPhoneNumber: SENSITIVE_STRING }),
        obj.ToPhoneNumber && { ToPhoneNumber: SENSITIVE_STRING }
      ),
      obj.JoinToken && { JoinToken: SENSITIVE_STRING }
    );
  };
})(CreateMeetingDialOutRequest || (CreateMeetingDialOutRequest = {}));
export var CreateMeetingDialOutResponse;
(function (CreateMeetingDialOutResponse) {
  /**
   * @internal
   */
  CreateMeetingDialOutResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateMeetingDialOutResponse || (CreateMeetingDialOutResponse = {}));
export var CreateMeetingWithAttendeesRequest;
(function (CreateMeetingWithAttendeesRequest) {
  /**
   * @internal
   */
  CreateMeetingWithAttendeesRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(__assign({}, obj), obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
              obj.ExternalMeetingId && { ExternalMeetingId: SENSITIVE_STRING }
            ),
            obj.MeetingHostId && { MeetingHostId: SENSITIVE_STRING }
          ),
          obj.Tags && {
            Tags: obj.Tags.map(function (item) {
              return Tag.filterSensitiveLog(item);
            }),
          }
        ),
        obj.NotificationsConfiguration && {
          NotificationsConfiguration: MeetingNotificationConfiguration.filterSensitiveLog(
            obj.NotificationsConfiguration
          ),
        }
      ),
      obj.Attendees && {
        Attendees: obj.Attendees.map(function (item) {
          return CreateAttendeeRequestItem.filterSensitiveLog(item);
        }),
      }
    );
  };
})(CreateMeetingWithAttendeesRequest || (CreateMeetingWithAttendeesRequest = {}));
export var CreateMeetingWithAttendeesResponse;
(function (CreateMeetingWithAttendeesResponse) {
  /**
   * @internal
   */
  CreateMeetingWithAttendeesResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(__assign({}, obj), obj.Meeting && { Meeting: Meeting.filterSensitiveLog(obj.Meeting) }),
        obj.Attendees && {
          Attendees: obj.Attendees.map(function (item) {
            return Attendee.filterSensitiveLog(item);
          }),
        }
      ),
      obj.Errors && {
        Errors: obj.Errors.map(function (item) {
          return CreateAttendeeError.filterSensitiveLog(item);
        }),
      }
    );
  };
})(CreateMeetingWithAttendeesResponse || (CreateMeetingWithAttendeesResponse = {}));
export var CreatePhoneNumberOrderRequest;
(function (CreatePhoneNumberOrderRequest) {
  /**
   * @internal
   */
  CreatePhoneNumberOrderRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING });
  };
})(CreatePhoneNumberOrderRequest || (CreatePhoneNumberOrderRequest = {}));
export var OrderedPhoneNumberStatus;
(function (OrderedPhoneNumberStatus) {
  OrderedPhoneNumberStatus["Acquired"] = "Acquired";
  OrderedPhoneNumberStatus["Failed"] = "Failed";
  OrderedPhoneNumberStatus["Processing"] = "Processing";
})(OrderedPhoneNumberStatus || (OrderedPhoneNumberStatus = {}));
export var OrderedPhoneNumber;
(function (OrderedPhoneNumber) {
  /**
   * @internal
   */
  OrderedPhoneNumber.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.E164PhoneNumber && { E164PhoneNumber: SENSITIVE_STRING });
  };
})(OrderedPhoneNumber || (OrderedPhoneNumber = {}));
export var PhoneNumberOrderStatus;
(function (PhoneNumberOrderStatus) {
  PhoneNumberOrderStatus["Failed"] = "Failed";
  PhoneNumberOrderStatus["Partial"] = "Partial";
  PhoneNumberOrderStatus["Processing"] = "Processing";
  PhoneNumberOrderStatus["Successful"] = "Successful";
})(PhoneNumberOrderStatus || (PhoneNumberOrderStatus = {}));
export var PhoneNumberOrder;
(function (PhoneNumberOrder) {
  /**
   * @internal
   */
  PhoneNumberOrder.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.OrderedPhoneNumbers && {
        OrderedPhoneNumbers: obj.OrderedPhoneNumbers.map(function (item) {
          return OrderedPhoneNumber.filterSensitiveLog(item);
        }),
      }
    );
  };
})(PhoneNumberOrder || (PhoneNumberOrder = {}));
export var CreatePhoneNumberOrderResponse;
(function (CreatePhoneNumberOrderResponse) {
  /**
   * @internal
   */
  CreatePhoneNumberOrderResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.PhoneNumberOrder && { PhoneNumberOrder: PhoneNumberOrder.filterSensitiveLog(obj.PhoneNumberOrder) }
    );
  };
})(CreatePhoneNumberOrderResponse || (CreatePhoneNumberOrderResponse = {}));
export var GeoMatchLevel;
(function (GeoMatchLevel) {
  GeoMatchLevel["AreaCode"] = "AreaCode";
  GeoMatchLevel["Country"] = "Country";
})(GeoMatchLevel || (GeoMatchLevel = {}));
export var GeoMatchParams;
(function (GeoMatchParams) {
  /**
   * @internal
   */
  GeoMatchParams.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GeoMatchParams || (GeoMatchParams = {}));
export var NumberSelectionBehavior;
(function (NumberSelectionBehavior) {
  NumberSelectionBehavior["AvoidSticky"] = "AvoidSticky";
  NumberSelectionBehavior["PreferSticky"] = "PreferSticky";
})(NumberSelectionBehavior || (NumberSelectionBehavior = {}));
export var CreateProxySessionRequest;
(function (CreateProxySessionRequest) {
  /**
   * @internal
   */
  CreateProxySessionRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.ParticipantPhoneNumbers && { ParticipantPhoneNumbers: SENSITIVE_STRING }),
      obj.Name && { Name: SENSITIVE_STRING }
    );
  };
})(CreateProxySessionRequest || (CreateProxySessionRequest = {}));
export var Participant;
(function (Participant) {
  /**
   * @internal
   */
  Participant.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
      obj.ProxyPhoneNumber && { ProxyPhoneNumber: SENSITIVE_STRING }
    );
  };
})(Participant || (Participant = {}));
export var ProxySessionStatus;
(function (ProxySessionStatus) {
  ProxySessionStatus["Closed"] = "Closed";
  ProxySessionStatus["InProgress"] = "InProgress";
  ProxySessionStatus["Open"] = "Open";
})(ProxySessionStatus || (ProxySessionStatus = {}));
export var ProxySession;
(function (ProxySession) {
  /**
   * @internal
   */
  ProxySession.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Participants && {
        Participants: obj.Participants.map(function (item) {
          return Participant.filterSensitiveLog(item);
        }),
      }
    );
  };
})(ProxySession || (ProxySession = {}));
export var CreateProxySessionResponse;
(function (CreateProxySessionResponse) {
  /**
   * @internal
   */
  CreateProxySessionResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.ProxySession && { ProxySession: ProxySession.filterSensitiveLog(obj.ProxySession) }
    );
  };
})(CreateProxySessionResponse || (CreateProxySessionResponse = {}));
export var CreateRoomRequest;
(function (CreateRoomRequest) {
  /**
   * @internal
   */
  CreateRoomRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.Name && { Name: SENSITIVE_STRING }),
      obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }
    );
  };
})(CreateRoomRequest || (CreateRoomRequest = {}));
export var Room;
(function (Room) {
  /**
   * @internal
   */
  Room.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Name && { Name: SENSITIVE_STRING });
  };
})(Room || (Room = {}));
export var CreateRoomResponse;
(function (CreateRoomResponse) {
  /**
   * @internal
   */
  CreateRoomResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Room && { Room: Room.filterSensitiveLog(obj.Room) });
  };
})(CreateRoomResponse || (CreateRoomResponse = {}));
export var CreateRoomMembershipRequest;
(function (CreateRoomMembershipRequest) {
  /**
   * @internal
   */
  CreateRoomMembershipRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateRoomMembershipRequest || (CreateRoomMembershipRequest = {}));
export var MemberType;
(function (MemberType) {
  MemberType["Bot"] = "Bot";
  MemberType["User"] = "User";
  MemberType["Webhook"] = "Webhook";
})(MemberType || (MemberType = {}));
export var Member;
(function (Member) {
  /**
   * @internal
   */
  Member.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.Email && { Email: SENSITIVE_STRING }),
      obj.FullName && { FullName: SENSITIVE_STRING }
    );
  };
})(Member || (Member = {}));
export var RoomMembership;
(function (RoomMembership) {
  /**
   * @internal
   */
  RoomMembership.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Member && { Member: Member.filterSensitiveLog(obj.Member) });
  };
})(RoomMembership || (RoomMembership = {}));
export var CreateRoomMembershipResponse;
(function (CreateRoomMembershipResponse) {
  /**
   * @internal
   */
  CreateRoomMembershipResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.RoomMembership && { RoomMembership: RoomMembership.filterSensitiveLog(obj.RoomMembership) }
    );
  };
})(CreateRoomMembershipResponse || (CreateRoomMembershipResponse = {}));
export var SipMediaApplicationEndpoint;
(function (SipMediaApplicationEndpoint) {
  /**
   * @internal
   */
  SipMediaApplicationEndpoint.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.LambdaArn && { LambdaArn: SENSITIVE_STRING });
  };
})(SipMediaApplicationEndpoint || (SipMediaApplicationEndpoint = {}));
export var CreateSipMediaApplicationRequest;
(function (CreateSipMediaApplicationRequest) {
  /**
   * @internal
   */
  CreateSipMediaApplicationRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Endpoints && {
        Endpoints: obj.Endpoints.map(function (item) {
          return SipMediaApplicationEndpoint.filterSensitiveLog(item);
        }),
      }
    );
  };
})(CreateSipMediaApplicationRequest || (CreateSipMediaApplicationRequest = {}));
export var SipMediaApplication;
(function (SipMediaApplication) {
  /**
   * @internal
   */
  SipMediaApplication.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Endpoints && {
        Endpoints: obj.Endpoints.map(function (item) {
          return SipMediaApplicationEndpoint.filterSensitiveLog(item);
        }),
      }
    );
  };
})(SipMediaApplication || (SipMediaApplication = {}));
export var CreateSipMediaApplicationResponse;
(function (CreateSipMediaApplicationResponse) {
  /**
   * @internal
   */
  CreateSipMediaApplicationResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.SipMediaApplication && {
        SipMediaApplication: SipMediaApplication.filterSensitiveLog(obj.SipMediaApplication),
      }
    );
  };
})(CreateSipMediaApplicationResponse || (CreateSipMediaApplicationResponse = {}));
export var CreateSipMediaApplicationCallRequest;
(function (CreateSipMediaApplicationCallRequest) {
  /**
   * @internal
   */
  CreateSipMediaApplicationCallRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.FromPhoneNumber && { FromPhoneNumber: SENSITIVE_STRING }),
      obj.ToPhoneNumber && { ToPhoneNumber: SENSITIVE_STRING }
    );
  };
})(CreateSipMediaApplicationCallRequest || (CreateSipMediaApplicationCallRequest = {}));
export var SipMediaApplicationCall;
(function (SipMediaApplicationCall) {
  /**
   * @internal
   */
  SipMediaApplicationCall.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SipMediaApplicationCall || (SipMediaApplicationCall = {}));
export var CreateSipMediaApplicationCallResponse;
(function (CreateSipMediaApplicationCallResponse) {
  /**
   * @internal
   */
  CreateSipMediaApplicationCallResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateSipMediaApplicationCallResponse || (CreateSipMediaApplicationCallResponse = {}));
export var SipRuleTargetApplication;
(function (SipRuleTargetApplication) {
  /**
   * @internal
   */
  SipRuleTargetApplication.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SipRuleTargetApplication || (SipRuleTargetApplication = {}));
export var SipRuleTriggerType;
(function (SipRuleTriggerType) {
  SipRuleTriggerType["RequestUriHostname"] = "RequestUriHostname";
  SipRuleTriggerType["ToPhoneNumber"] = "ToPhoneNumber";
})(SipRuleTriggerType || (SipRuleTriggerType = {}));
export var CreateSipRuleRequest;
(function (CreateSipRuleRequest) {
  /**
   * @internal
   */
  CreateSipRuleRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateSipRuleRequest || (CreateSipRuleRequest = {}));
export var SipRule;
(function (SipRule) {
  /**
   * @internal
   */
  SipRule.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SipRule || (SipRule = {}));
export var CreateSipRuleResponse;
(function (CreateSipRuleResponse) {
  /**
   * @internal
   */
  CreateSipRuleResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateSipRuleResponse || (CreateSipRuleResponse = {}));
export var CreateUserRequest;
(function (CreateUserRequest) {
  /**
   * @internal
   */
  CreateUserRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Email && { Email: SENSITIVE_STRING });
  };
})(CreateUserRequest || (CreateUserRequest = {}));
export var InviteStatus;
(function (InviteStatus) {
  InviteStatus["Accepted"] = "Accepted";
  InviteStatus["Failed"] = "Failed";
  InviteStatus["Pending"] = "Pending";
})(InviteStatus || (InviteStatus = {}));
export var RegistrationStatus;
(function (RegistrationStatus) {
  RegistrationStatus["Registered"] = "Registered";
  RegistrationStatus["Suspended"] = "Suspended";
  RegistrationStatus["Unregistered"] = "Unregistered";
})(RegistrationStatus || (RegistrationStatus = {}));
export var User;
(function (User) {
  /**
   * @internal
   */
  User.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(
          __assign(__assign({}, obj), obj.PrimaryEmail && { PrimaryEmail: SENSITIVE_STRING }),
          obj.PrimaryProvisionedNumber && { PrimaryProvisionedNumber: SENSITIVE_STRING }
        ),
        obj.DisplayName && { DisplayName: SENSITIVE_STRING }
      ),
      obj.AlexaForBusinessMetadata && {
        AlexaForBusinessMetadata: AlexaForBusinessMetadata.filterSensitiveLog(obj.AlexaForBusinessMetadata),
      }
    );
  };
})(User || (User = {}));
export var CreateUserResponse;
(function (CreateUserResponse) {
  /**
   * @internal
   */
  CreateUserResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.User && { User: User.filterSensitiveLog(obj.User) });
  };
})(CreateUserResponse || (CreateUserResponse = {}));
export var VoiceConnectorAwsRegion;
(function (VoiceConnectorAwsRegion) {
  VoiceConnectorAwsRegion["US_EAST_1"] = "us-east-1";
  VoiceConnectorAwsRegion["US_WEST_2"] = "us-west-2";
})(VoiceConnectorAwsRegion || (VoiceConnectorAwsRegion = {}));
export var CreateVoiceConnectorRequest;
(function (CreateVoiceConnectorRequest) {
  /**
   * @internal
   */
  CreateVoiceConnectorRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateVoiceConnectorRequest || (CreateVoiceConnectorRequest = {}));
export var VoiceConnector;
(function (VoiceConnector) {
  /**
   * @internal
   */
  VoiceConnector.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VoiceConnector || (VoiceConnector = {}));
export var CreateVoiceConnectorResponse;
(function (CreateVoiceConnectorResponse) {
  /**
   * @internal
   */
  CreateVoiceConnectorResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateVoiceConnectorResponse || (CreateVoiceConnectorResponse = {}));
export var VoiceConnectorItem;
(function (VoiceConnectorItem) {
  /**
   * @internal
   */
  VoiceConnectorItem.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VoiceConnectorItem || (VoiceConnectorItem = {}));
export var CreateVoiceConnectorGroupRequest;
(function (CreateVoiceConnectorGroupRequest) {
  /**
   * @internal
   */
  CreateVoiceConnectorGroupRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateVoiceConnectorGroupRequest || (CreateVoiceConnectorGroupRequest = {}));
export var VoiceConnectorGroup;
(function (VoiceConnectorGroup) {
  /**
   * @internal
   */
  VoiceConnectorGroup.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VoiceConnectorGroup || (VoiceConnectorGroup = {}));
export var CreateVoiceConnectorGroupResponse;
(function (CreateVoiceConnectorGroupResponse) {
  /**
   * @internal
   */
  CreateVoiceConnectorGroupResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateVoiceConnectorGroupResponse || (CreateVoiceConnectorGroupResponse = {}));
export var Credential;
(function (Credential) {
  /**
   * @internal
   */
  Credential.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.Username && { Username: SENSITIVE_STRING }),
      obj.Password && { Password: SENSITIVE_STRING }
    );
  };
})(Credential || (Credential = {}));
export var DeleteAccountRequest;
(function (DeleteAccountRequest) {
  /**
   * @internal
   */
  DeleteAccountRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteAccountRequest || (DeleteAccountRequest = {}));
export var DeleteAccountResponse;
(function (DeleteAccountResponse) {
  /**
   * @internal
   */
  DeleteAccountResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteAccountResponse || (DeleteAccountResponse = {}));
export var UnprocessableEntityException;
(function (UnprocessableEntityException) {
  /**
   * @internal
   */
  UnprocessableEntityException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UnprocessableEntityException || (UnprocessableEntityException = {}));
export var DeleteAppInstanceRequest;
(function (DeleteAppInstanceRequest) {
  /**
   * @internal
   */
  DeleteAppInstanceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteAppInstanceRequest || (DeleteAppInstanceRequest = {}));
export var DeleteAppInstanceAdminRequest;
(function (DeleteAppInstanceAdminRequest) {
  /**
   * @internal
   */
  DeleteAppInstanceAdminRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteAppInstanceAdminRequest || (DeleteAppInstanceAdminRequest = {}));
export var DeleteAppInstanceStreamingConfigurationsRequest;
(function (DeleteAppInstanceStreamingConfigurationsRequest) {
  /**
   * @internal
   */
  DeleteAppInstanceStreamingConfigurationsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteAppInstanceStreamingConfigurationsRequest || (DeleteAppInstanceStreamingConfigurationsRequest = {}));
export var DeleteAppInstanceUserRequest;
(function (DeleteAppInstanceUserRequest) {
  /**
   * @internal
   */
  DeleteAppInstanceUserRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteAppInstanceUserRequest || (DeleteAppInstanceUserRequest = {}));
export var DeleteAttendeeRequest;
(function (DeleteAttendeeRequest) {
  /**
   * @internal
   */
  DeleteAttendeeRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteAttendeeRequest || (DeleteAttendeeRequest = {}));
export var DeleteChannelRequest;
(function (DeleteChannelRequest) {
  /**
   * @internal
   */
  DeleteChannelRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteChannelRequest || (DeleteChannelRequest = {}));
export var DeleteChannelBanRequest;
(function (DeleteChannelBanRequest) {
  /**
   * @internal
   */
  DeleteChannelBanRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteChannelBanRequest || (DeleteChannelBanRequest = {}));
export var DeleteChannelMembershipRequest;
(function (DeleteChannelMembershipRequest) {
  /**
   * @internal
   */
  DeleteChannelMembershipRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteChannelMembershipRequest || (DeleteChannelMembershipRequest = {}));
export var DeleteChannelMessageRequest;
(function (DeleteChannelMessageRequest) {
  /**
   * @internal
   */
  DeleteChannelMessageRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteChannelMessageRequest || (DeleteChannelMessageRequest = {}));
export var DeleteChannelModeratorRequest;
(function (DeleteChannelModeratorRequest) {
  /**
   * @internal
   */
  DeleteChannelModeratorRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteChannelModeratorRequest || (DeleteChannelModeratorRequest = {}));
export var DeleteEventsConfigurationRequest;
(function (DeleteEventsConfigurationRequest) {
  /**
   * @internal
   */
  DeleteEventsConfigurationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteEventsConfigurationRequest || (DeleteEventsConfigurationRequest = {}));
export var DeleteMeetingRequest;
(function (DeleteMeetingRequest) {
  /**
   * @internal
   */
  DeleteMeetingRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteMeetingRequest || (DeleteMeetingRequest = {}));
export var DeletePhoneNumberRequest;
(function (DeletePhoneNumberRequest) {
  /**
   * @internal
   */
  DeletePhoneNumberRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeletePhoneNumberRequest || (DeletePhoneNumberRequest = {}));
export var DeleteProxySessionRequest;
(function (DeleteProxySessionRequest) {
  /**
   * @internal
   */
  DeleteProxySessionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteProxySessionRequest || (DeleteProxySessionRequest = {}));
export var DeleteRoomRequest;
(function (DeleteRoomRequest) {
  /**
   * @internal
   */
  DeleteRoomRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteRoomRequest || (DeleteRoomRequest = {}));
export var DeleteRoomMembershipRequest;
(function (DeleteRoomMembershipRequest) {
  /**
   * @internal
   */
  DeleteRoomMembershipRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteRoomMembershipRequest || (DeleteRoomMembershipRequest = {}));
export var DeleteSipMediaApplicationRequest;
(function (DeleteSipMediaApplicationRequest) {
  /**
   * @internal
   */
  DeleteSipMediaApplicationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteSipMediaApplicationRequest || (DeleteSipMediaApplicationRequest = {}));
export var DeleteSipRuleRequest;
(function (DeleteSipRuleRequest) {
  /**
   * @internal
   */
  DeleteSipRuleRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteSipRuleRequest || (DeleteSipRuleRequest = {}));
export var DeleteVoiceConnectorRequest;
(function (DeleteVoiceConnectorRequest) {
  /**
   * @internal
   */
  DeleteVoiceConnectorRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteVoiceConnectorRequest || (DeleteVoiceConnectorRequest = {}));
export var DeleteVoiceConnectorEmergencyCallingConfigurationRequest;
(function (DeleteVoiceConnectorEmergencyCallingConfigurationRequest) {
  /**
   * @internal
   */
  DeleteVoiceConnectorEmergencyCallingConfigurationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(
  DeleteVoiceConnectorEmergencyCallingConfigurationRequest ||
    (DeleteVoiceConnectorEmergencyCallingConfigurationRequest = {})
);
export var DeleteVoiceConnectorGroupRequest;
(function (DeleteVoiceConnectorGroupRequest) {
  /**
   * @internal
   */
  DeleteVoiceConnectorGroupRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteVoiceConnectorGroupRequest || (DeleteVoiceConnectorGroupRequest = {}));
export var DeleteVoiceConnectorOriginationRequest;
(function (DeleteVoiceConnectorOriginationRequest) {
  /**
   * @internal
   */
  DeleteVoiceConnectorOriginationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteVoiceConnectorOriginationRequest || (DeleteVoiceConnectorOriginationRequest = {}));
export var DeleteVoiceConnectorProxyRequest;
(function (DeleteVoiceConnectorProxyRequest) {
  /**
   * @internal
   */
  DeleteVoiceConnectorProxyRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteVoiceConnectorProxyRequest || (DeleteVoiceConnectorProxyRequest = {}));
export var DeleteVoiceConnectorStreamingConfigurationRequest;
(function (DeleteVoiceConnectorStreamingConfigurationRequest) {
  /**
   * @internal
   */
  DeleteVoiceConnectorStreamingConfigurationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteVoiceConnectorStreamingConfigurationRequest || (DeleteVoiceConnectorStreamingConfigurationRequest = {}));
export var DeleteVoiceConnectorTerminationRequest;
(function (DeleteVoiceConnectorTerminationRequest) {
  /**
   * @internal
   */
  DeleteVoiceConnectorTerminationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteVoiceConnectorTerminationRequest || (DeleteVoiceConnectorTerminationRequest = {}));
export var DeleteVoiceConnectorTerminationCredentialsRequest;
(function (DeleteVoiceConnectorTerminationCredentialsRequest) {
  /**
   * @internal
   */
  DeleteVoiceConnectorTerminationCredentialsRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Usernames && { Usernames: SENSITIVE_STRING });
  };
})(DeleteVoiceConnectorTerminationCredentialsRequest || (DeleteVoiceConnectorTerminationCredentialsRequest = {}));
export var DescribeAppInstanceRequest;
(function (DescribeAppInstanceRequest) {
  /**
   * @internal
   */
  DescribeAppInstanceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeAppInstanceRequest || (DescribeAppInstanceRequest = {}));
export var DescribeAppInstanceResponse;
(function (DescribeAppInstanceResponse) {
  /**
   * @internal
   */
  DescribeAppInstanceResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.AppInstance && { AppInstance: AppInstance.filterSensitiveLog(obj.AppInstance) }
    );
  };
})(DescribeAppInstanceResponse || (DescribeAppInstanceResponse = {}));
export var DescribeAppInstanceAdminRequest;
(function (DescribeAppInstanceAdminRequest) {
  /**
   * @internal
   */
  DescribeAppInstanceAdminRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeAppInstanceAdminRequest || (DescribeAppInstanceAdminRequest = {}));
export var DescribeAppInstanceAdminResponse;
(function (DescribeAppInstanceAdminResponse) {
  /**
   * @internal
   */
  DescribeAppInstanceAdminResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.AppInstanceAdmin && { AppInstanceAdmin: AppInstanceAdmin.filterSensitiveLog(obj.AppInstanceAdmin) }
    );
  };
})(DescribeAppInstanceAdminResponse || (DescribeAppInstanceAdminResponse = {}));
export var DescribeAppInstanceUserRequest;
(function (DescribeAppInstanceUserRequest) {
  /**
   * @internal
   */
  DescribeAppInstanceUserRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeAppInstanceUserRequest || (DescribeAppInstanceUserRequest = {}));
export var DescribeAppInstanceUserResponse;
(function (DescribeAppInstanceUserResponse) {
  /**
   * @internal
   */
  DescribeAppInstanceUserResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.AppInstanceUser && { AppInstanceUser: AppInstanceUser.filterSensitiveLog(obj.AppInstanceUser) }
    );
  };
})(DescribeAppInstanceUserResponse || (DescribeAppInstanceUserResponse = {}));
export var DescribeChannelRequest;
(function (DescribeChannelRequest) {
  /**
   * @internal
   */
  DescribeChannelRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeChannelRequest || (DescribeChannelRequest = {}));
export var DescribeChannelResponse;
(function (DescribeChannelResponse) {
  /**
   * @internal
   */
  DescribeChannelResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Channel && { Channel: Channel.filterSensitiveLog(obj.Channel) });
  };
})(DescribeChannelResponse || (DescribeChannelResponse = {}));
export var DescribeChannelBanRequest;
(function (DescribeChannelBanRequest) {
  /**
   * @internal
   */
  DescribeChannelBanRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeChannelBanRequest || (DescribeChannelBanRequest = {}));
export var DescribeChannelBanResponse;
(function (DescribeChannelBanResponse) {
  /**
   * @internal
   */
  DescribeChannelBanResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.ChannelBan && { ChannelBan: ChannelBan.filterSensitiveLog(obj.ChannelBan) });
  };
})(DescribeChannelBanResponse || (DescribeChannelBanResponse = {}));
export var DescribeChannelMembershipRequest;
(function (DescribeChannelMembershipRequest) {
  /**
   * @internal
   */
  DescribeChannelMembershipRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeChannelMembershipRequest || (DescribeChannelMembershipRequest = {}));
export var DescribeChannelMembershipResponse;
(function (DescribeChannelMembershipResponse) {
  /**
   * @internal
   */
  DescribeChannelMembershipResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.ChannelMembership && { ChannelMembership: ChannelMembership.filterSensitiveLog(obj.ChannelMembership) }
    );
  };
})(DescribeChannelMembershipResponse || (DescribeChannelMembershipResponse = {}));
export var DescribeChannelMembershipForAppInstanceUserRequest;
(function (DescribeChannelMembershipForAppInstanceUserRequest) {
  /**
   * @internal
   */
  DescribeChannelMembershipForAppInstanceUserRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeChannelMembershipForAppInstanceUserRequest || (DescribeChannelMembershipForAppInstanceUserRequest = {}));
export var DescribeChannelMembershipForAppInstanceUserResponse;
(function (DescribeChannelMembershipForAppInstanceUserResponse) {
  /**
   * @internal
   */
  DescribeChannelMembershipForAppInstanceUserResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.ChannelMembership && {
        ChannelMembership: ChannelMembershipForAppInstanceUserSummary.filterSensitiveLog(obj.ChannelMembership),
      }
    );
  };
})(DescribeChannelMembershipForAppInstanceUserResponse || (DescribeChannelMembershipForAppInstanceUserResponse = {}));
export var DescribeChannelModeratedByAppInstanceUserRequest;
(function (DescribeChannelModeratedByAppInstanceUserRequest) {
  /**
   * @internal
   */
  DescribeChannelModeratedByAppInstanceUserRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeChannelModeratedByAppInstanceUserRequest || (DescribeChannelModeratedByAppInstanceUserRequest = {}));
export var DescribeChannelModeratedByAppInstanceUserResponse;
(function (DescribeChannelModeratedByAppInstanceUserResponse) {
  /**
   * @internal
   */
  DescribeChannelModeratedByAppInstanceUserResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Channel && { Channel: ChannelModeratedByAppInstanceUserSummary.filterSensitiveLog(obj.Channel) }
    );
  };
})(DescribeChannelModeratedByAppInstanceUserResponse || (DescribeChannelModeratedByAppInstanceUserResponse = {}));
export var DescribeChannelModeratorRequest;
(function (DescribeChannelModeratorRequest) {
  /**
   * @internal
   */
  DescribeChannelModeratorRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeChannelModeratorRequest || (DescribeChannelModeratorRequest = {}));
export var DescribeChannelModeratorResponse;
(function (DescribeChannelModeratorResponse) {
  /**
   * @internal
   */
  DescribeChannelModeratorResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.ChannelModerator && { ChannelModerator: ChannelModerator.filterSensitiveLog(obj.ChannelModerator) }
    );
  };
})(DescribeChannelModeratorResponse || (DescribeChannelModeratorResponse = {}));
export var DisassociatePhoneNumberFromUserRequest;
(function (DisassociatePhoneNumberFromUserRequest) {
  /**
   * @internal
   */
  DisassociatePhoneNumberFromUserRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DisassociatePhoneNumberFromUserRequest || (DisassociatePhoneNumberFromUserRequest = {}));
export var DisassociatePhoneNumberFromUserResponse;
(function (DisassociatePhoneNumberFromUserResponse) {
  /**
   * @internal
   */
  DisassociatePhoneNumberFromUserResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DisassociatePhoneNumberFromUserResponse || (DisassociatePhoneNumberFromUserResponse = {}));
export var DisassociatePhoneNumbersFromVoiceConnectorRequest;
(function (DisassociatePhoneNumbersFromVoiceConnectorRequest) {
  /**
   * @internal
   */
  DisassociatePhoneNumbersFromVoiceConnectorRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING });
  };
})(DisassociatePhoneNumbersFromVoiceConnectorRequest || (DisassociatePhoneNumbersFromVoiceConnectorRequest = {}));
export var DisassociatePhoneNumbersFromVoiceConnectorResponse;
(function (DisassociatePhoneNumbersFromVoiceConnectorResponse) {
  /**
   * @internal
   */
  DisassociatePhoneNumbersFromVoiceConnectorResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DisassociatePhoneNumbersFromVoiceConnectorResponse || (DisassociatePhoneNumbersFromVoiceConnectorResponse = {}));
export var DisassociatePhoneNumbersFromVoiceConnectorGroupRequest;
(function (DisassociatePhoneNumbersFromVoiceConnectorGroupRequest) {
  /**
   * @internal
   */
  DisassociatePhoneNumbersFromVoiceConnectorGroupRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING });
  };
})(
  DisassociatePhoneNumbersFromVoiceConnectorGroupRequest ||
    (DisassociatePhoneNumbersFromVoiceConnectorGroupRequest = {})
);
export var DisassociatePhoneNumbersFromVoiceConnectorGroupResponse;
(function (DisassociatePhoneNumbersFromVoiceConnectorGroupResponse) {
  /**
   * @internal
   */
  DisassociatePhoneNumbersFromVoiceConnectorGroupResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(
  DisassociatePhoneNumbersFromVoiceConnectorGroupResponse ||
    (DisassociatePhoneNumbersFromVoiceConnectorGroupResponse = {})
);
export var DisassociateSigninDelegateGroupsFromAccountRequest;
(function (DisassociateSigninDelegateGroupsFromAccountRequest) {
  /**
   * @internal
   */
  DisassociateSigninDelegateGroupsFromAccountRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DisassociateSigninDelegateGroupsFromAccountRequest || (DisassociateSigninDelegateGroupsFromAccountRequest = {}));
export var DisassociateSigninDelegateGroupsFromAccountResponse;
(function (DisassociateSigninDelegateGroupsFromAccountResponse) {
  /**
   * @internal
   */
  DisassociateSigninDelegateGroupsFromAccountResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DisassociateSigninDelegateGroupsFromAccountResponse || (DisassociateSigninDelegateGroupsFromAccountResponse = {}));
export var DNISEmergencyCallingConfiguration;
(function (DNISEmergencyCallingConfiguration) {
  /**
   * @internal
   */
  DNISEmergencyCallingConfiguration.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.EmergencyPhoneNumber && { EmergencyPhoneNumber: SENSITIVE_STRING }),
      obj.TestPhoneNumber && { TestPhoneNumber: SENSITIVE_STRING }
    );
  };
})(DNISEmergencyCallingConfiguration || (DNISEmergencyCallingConfiguration = {}));
export var EmailStatus;
(function (EmailStatus) {
  EmailStatus["Failed"] = "Failed";
  EmailStatus["NotSent"] = "NotSent";
  EmailStatus["Sent"] = "Sent";
})(EmailStatus || (EmailStatus = {}));
export var EmergencyCallingConfiguration;
(function (EmergencyCallingConfiguration) {
  /**
   * @internal
   */
  EmergencyCallingConfiguration.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.DNIS && {
        DNIS: obj.DNIS.map(function (item) {
          return DNISEmergencyCallingConfiguration.filterSensitiveLog(item);
        }),
      }
    );
  };
})(EmergencyCallingConfiguration || (EmergencyCallingConfiguration = {}));
export var EventsConfiguration;
(function (EventsConfiguration) {
  /**
   * @internal
   */
  EventsConfiguration.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.OutboundEventsHTTPSEndpoint && { OutboundEventsHTTPSEndpoint: SENSITIVE_STRING }),
      obj.LambdaFunctionArn && { LambdaFunctionArn: SENSITIVE_STRING }
    );
  };
})(EventsConfiguration || (EventsConfiguration = {}));
export var GetAccountRequest;
(function (GetAccountRequest) {
  /**
   * @internal
   */
  GetAccountRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAccountRequest || (GetAccountRequest = {}));
export var GetAccountResponse;
(function (GetAccountResponse) {
  /**
   * @internal
   */
  GetAccountResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAccountResponse || (GetAccountResponse = {}));
export var GetAccountSettingsRequest;
(function (GetAccountSettingsRequest) {
  /**
   * @internal
   */
  GetAccountSettingsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAccountSettingsRequest || (GetAccountSettingsRequest = {}));
export var GetAccountSettingsResponse;
(function (GetAccountSettingsResponse) {
  /**
   * @internal
   */
  GetAccountSettingsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAccountSettingsResponse || (GetAccountSettingsResponse = {}));
export var GetAppInstanceRetentionSettingsRequest;
(function (GetAppInstanceRetentionSettingsRequest) {
  /**
   * @internal
   */
  GetAppInstanceRetentionSettingsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAppInstanceRetentionSettingsRequest || (GetAppInstanceRetentionSettingsRequest = {}));
export var GetAppInstanceRetentionSettingsResponse;
(function (GetAppInstanceRetentionSettingsResponse) {
  /**
   * @internal
   */
  GetAppInstanceRetentionSettingsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAppInstanceRetentionSettingsResponse || (GetAppInstanceRetentionSettingsResponse = {}));
export var GetAppInstanceStreamingConfigurationsRequest;
(function (GetAppInstanceStreamingConfigurationsRequest) {
  /**
   * @internal
   */
  GetAppInstanceStreamingConfigurationsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAppInstanceStreamingConfigurationsRequest || (GetAppInstanceStreamingConfigurationsRequest = {}));
export var GetAppInstanceStreamingConfigurationsResponse;
(function (GetAppInstanceStreamingConfigurationsResponse) {
  /**
   * @internal
   */
  GetAppInstanceStreamingConfigurationsResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.AppInstanceStreamingConfigurations && {
        AppInstanceStreamingConfigurations: obj.AppInstanceStreamingConfigurations.map(function (item) {
          return AppInstanceStreamingConfiguration.filterSensitiveLog(item);
        }),
      }
    );
  };
})(GetAppInstanceStreamingConfigurationsResponse || (GetAppInstanceStreamingConfigurationsResponse = {}));
export var GetAttendeeRequest;
(function (GetAttendeeRequest) {
  /**
   * @internal
   */
  GetAttendeeRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAttendeeRequest || (GetAttendeeRequest = {}));
export var GetAttendeeResponse;
(function (GetAttendeeResponse) {
  /**
   * @internal
   */
  GetAttendeeResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Attendee && { Attendee: Attendee.filterSensitiveLog(obj.Attendee) });
  };
})(GetAttendeeResponse || (GetAttendeeResponse = {}));
export var GetBotRequest;
(function (GetBotRequest) {
  /**
   * @internal
   */
  GetBotRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetBotRequest || (GetBotRequest = {}));
export var GetBotResponse;
(function (GetBotResponse) {
  /**
   * @internal
   */
  GetBotResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Bot && { Bot: Bot.filterSensitiveLog(obj.Bot) });
  };
})(GetBotResponse || (GetBotResponse = {}));
export var GetChannelMessageRequest;
(function (GetChannelMessageRequest) {
  /**
   * @internal
   */
  GetChannelMessageRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetChannelMessageRequest || (GetChannelMessageRequest = {}));
export var GetChannelMessageResponse;
(function (GetChannelMessageResponse) {
  /**
   * @internal
   */
  GetChannelMessageResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.ChannelMessage && { ChannelMessage: ChannelMessage.filterSensitiveLog(obj.ChannelMessage) }
    );
  };
})(GetChannelMessageResponse || (GetChannelMessageResponse = {}));
export var GetEventsConfigurationRequest;
(function (GetEventsConfigurationRequest) {
  /**
   * @internal
   */
  GetEventsConfigurationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetEventsConfigurationRequest || (GetEventsConfigurationRequest = {}));
export var GetEventsConfigurationResponse;
(function (GetEventsConfigurationResponse) {
  /**
   * @internal
   */
  GetEventsConfigurationResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.EventsConfiguration && {
        EventsConfiguration: EventsConfiguration.filterSensitiveLog(obj.EventsConfiguration),
      }
    );
  };
})(GetEventsConfigurationResponse || (GetEventsConfigurationResponse = {}));
export var VoiceConnectorSettings;
(function (VoiceConnectorSettings) {
  /**
   * @internal
   */
  VoiceConnectorSettings.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VoiceConnectorSettings || (VoiceConnectorSettings = {}));
export var GetGlobalSettingsResponse;
(function (GetGlobalSettingsResponse) {
  /**
   * @internal
   */
  GetGlobalSettingsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetGlobalSettingsResponse || (GetGlobalSettingsResponse = {}));
export var GetMeetingRequest;
(function (GetMeetingRequest) {
  /**
   * @internal
   */
  GetMeetingRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetMeetingRequest || (GetMeetingRequest = {}));
export var GetMeetingResponse;
(function (GetMeetingResponse) {
  /**
   * @internal
   */
  GetMeetingResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Meeting && { Meeting: Meeting.filterSensitiveLog(obj.Meeting) });
  };
})(GetMeetingResponse || (GetMeetingResponse = {}));
export var GetMessagingSessionEndpointRequest;
(function (GetMessagingSessionEndpointRequest) {
  /**
   * @internal
   */
  GetMessagingSessionEndpointRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetMessagingSessionEndpointRequest || (GetMessagingSessionEndpointRequest = {}));
export var MessagingSessionEndpoint;
(function (MessagingSessionEndpoint) {
  /**
   * @internal
   */
  MessagingSessionEndpoint.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(MessagingSessionEndpoint || (MessagingSessionEndpoint = {}));
export var GetMessagingSessionEndpointResponse;
(function (GetMessagingSessionEndpointResponse) {
  /**
   * @internal
   */
  GetMessagingSessionEndpointResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetMessagingSessionEndpointResponse || (GetMessagingSessionEndpointResponse = {}));
export var GetPhoneNumberRequest;
(function (GetPhoneNumberRequest) {
  /**
   * @internal
   */
  GetPhoneNumberRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetPhoneNumberRequest || (GetPhoneNumberRequest = {}));
export var PhoneNumberAssociationName;
(function (PhoneNumberAssociationName) {
  PhoneNumberAssociationName["AccountId"] = "AccountId";
  PhoneNumberAssociationName["SipRuleId"] = "SipRuleId";
  PhoneNumberAssociationName["UserId"] = "UserId";
  PhoneNumberAssociationName["VoiceConnectorGroupId"] = "VoiceConnectorGroupId";
  PhoneNumberAssociationName["VoiceConnectorId"] = "VoiceConnectorId";
})(PhoneNumberAssociationName || (PhoneNumberAssociationName = {}));
export var PhoneNumberAssociation;
(function (PhoneNumberAssociation) {
  /**
   * @internal
   */
  PhoneNumberAssociation.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PhoneNumberAssociation || (PhoneNumberAssociation = {}));
export var PhoneNumberCapabilities;
(function (PhoneNumberCapabilities) {
  /**
   * @internal
   */
  PhoneNumberCapabilities.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PhoneNumberCapabilities || (PhoneNumberCapabilities = {}));
export var PhoneNumberStatus;
(function (PhoneNumberStatus) {
  PhoneNumberStatus["AcquireFailed"] = "AcquireFailed";
  PhoneNumberStatus["AcquireInProgress"] = "AcquireInProgress";
  PhoneNumberStatus["Assigned"] = "Assigned";
  PhoneNumberStatus["DeleteFailed"] = "DeleteFailed";
  PhoneNumberStatus["DeleteInProgress"] = "DeleteInProgress";
  PhoneNumberStatus["ReleaseFailed"] = "ReleaseFailed";
  PhoneNumberStatus["ReleaseInProgress"] = "ReleaseInProgress";
  PhoneNumberStatus["Unassigned"] = "Unassigned";
})(PhoneNumberStatus || (PhoneNumberStatus = {}));
export var PhoneNumberType;
(function (PhoneNumberType) {
  PhoneNumberType["Local"] = "Local";
  PhoneNumberType["TollFree"] = "TollFree";
})(PhoneNumberType || (PhoneNumberType = {}));
export var PhoneNumber;
(function (PhoneNumber) {
  /**
   * @internal
   */
  PhoneNumber.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.E164PhoneNumber && { E164PhoneNumber: SENSITIVE_STRING }),
      obj.CallingName && { CallingName: SENSITIVE_STRING }
    );
  };
})(PhoneNumber || (PhoneNumber = {}));
export var GetPhoneNumberResponse;
(function (GetPhoneNumberResponse) {
  /**
   * @internal
   */
  GetPhoneNumberResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.PhoneNumber && { PhoneNumber: PhoneNumber.filterSensitiveLog(obj.PhoneNumber) }
    );
  };
})(GetPhoneNumberResponse || (GetPhoneNumberResponse = {}));
export var GetPhoneNumberOrderRequest;
(function (GetPhoneNumberOrderRequest) {
  /**
   * @internal
   */
  GetPhoneNumberOrderRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetPhoneNumberOrderRequest || (GetPhoneNumberOrderRequest = {}));
export var GetPhoneNumberOrderResponse;
(function (GetPhoneNumberOrderResponse) {
  /**
   * @internal
   */
  GetPhoneNumberOrderResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.PhoneNumberOrder && { PhoneNumberOrder: PhoneNumberOrder.filterSensitiveLog(obj.PhoneNumberOrder) }
    );
  };
})(GetPhoneNumberOrderResponse || (GetPhoneNumberOrderResponse = {}));
export var GetPhoneNumberSettingsResponse;
(function (GetPhoneNumberSettingsResponse) {
  /**
   * @internal
   */
  GetPhoneNumberSettingsResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.CallingName && { CallingName: SENSITIVE_STRING });
  };
})(GetPhoneNumberSettingsResponse || (GetPhoneNumberSettingsResponse = {}));
export var GetProxySessionRequest;
(function (GetProxySessionRequest) {
  /**
   * @internal
   */
  GetProxySessionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetProxySessionRequest || (GetProxySessionRequest = {}));
export var GetProxySessionResponse;
(function (GetProxySessionResponse) {
  /**
   * @internal
   */
  GetProxySessionResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.ProxySession && { ProxySession: ProxySession.filterSensitiveLog(obj.ProxySession) }
    );
  };
})(GetProxySessionResponse || (GetProxySessionResponse = {}));
export var GetRetentionSettingsRequest;
(function (GetRetentionSettingsRequest) {
  /**
   * @internal
   */
  GetRetentionSettingsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetRetentionSettingsRequest || (GetRetentionSettingsRequest = {}));
export var RoomRetentionSettings;
(function (RoomRetentionSettings) {
  /**
   * @internal
   */
  RoomRetentionSettings.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RoomRetentionSettings || (RoomRetentionSettings = {}));
export var RetentionSettings;
(function (RetentionSettings) {
  /**
   * @internal
   */
  RetentionSettings.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RetentionSettings || (RetentionSettings = {}));
export var GetRetentionSettingsResponse;
(function (GetRetentionSettingsResponse) {
  /**
   * @internal
   */
  GetRetentionSettingsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetRetentionSettingsResponse || (GetRetentionSettingsResponse = {}));
export var GetRoomRequest;
(function (GetRoomRequest) {
  /**
   * @internal
   */
  GetRoomRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetRoomRequest || (GetRoomRequest = {}));
export var GetRoomResponse;
(function (GetRoomResponse) {
  /**
   * @internal
   */
  GetRoomResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Room && { Room: Room.filterSensitiveLog(obj.Room) });
  };
})(GetRoomResponse || (GetRoomResponse = {}));
export var GetSipMediaApplicationRequest;
(function (GetSipMediaApplicationRequest) {
  /**
   * @internal
   */
  GetSipMediaApplicationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetSipMediaApplicationRequest || (GetSipMediaApplicationRequest = {}));
export var GetSipMediaApplicationResponse;
(function (GetSipMediaApplicationResponse) {
  /**
   * @internal
   */
  GetSipMediaApplicationResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.SipMediaApplication && {
        SipMediaApplication: SipMediaApplication.filterSensitiveLog(obj.SipMediaApplication),
      }
    );
  };
})(GetSipMediaApplicationResponse || (GetSipMediaApplicationResponse = {}));
export var GetSipMediaApplicationLoggingConfigurationRequest;
(function (GetSipMediaApplicationLoggingConfigurationRequest) {
  /**
   * @internal
   */
  GetSipMediaApplicationLoggingConfigurationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetSipMediaApplicationLoggingConfigurationRequest || (GetSipMediaApplicationLoggingConfigurationRequest = {}));
export var SipMediaApplicationLoggingConfiguration;
(function (SipMediaApplicationLoggingConfiguration) {
  /**
   * @internal
   */
  SipMediaApplicationLoggingConfiguration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SipMediaApplicationLoggingConfiguration || (SipMediaApplicationLoggingConfiguration = {}));
export var GetSipMediaApplicationLoggingConfigurationResponse;
(function (GetSipMediaApplicationLoggingConfigurationResponse) {
  /**
   * @internal
   */
  GetSipMediaApplicationLoggingConfigurationResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetSipMediaApplicationLoggingConfigurationResponse || (GetSipMediaApplicationLoggingConfigurationResponse = {}));
export var GetSipRuleRequest;
(function (GetSipRuleRequest) {
  /**
   * @internal
   */
  GetSipRuleRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetSipRuleRequest || (GetSipRuleRequest = {}));
export var GetSipRuleResponse;
(function (GetSipRuleResponse) {
  /**
   * @internal
   */
  GetSipRuleResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetSipRuleResponse || (GetSipRuleResponse = {}));
export var GetUserRequest;
(function (GetUserRequest) {
  /**
   * @internal
   */
  GetUserRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetUserRequest || (GetUserRequest = {}));
export var GetUserResponse;
(function (GetUserResponse) {
  /**
   * @internal
   */
  GetUserResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.User && { User: User.filterSensitiveLog(obj.User) });
  };
})(GetUserResponse || (GetUserResponse = {}));
export var GetUserSettingsRequest;
(function (GetUserSettingsRequest) {
  /**
   * @internal
   */
  GetUserSettingsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetUserSettingsRequest || (GetUserSettingsRequest = {}));
export var TelephonySettings;
(function (TelephonySettings) {
  /**
   * @internal
   */
  TelephonySettings.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TelephonySettings || (TelephonySettings = {}));
export var UserSettings;
(function (UserSettings) {
  /**
   * @internal
   */
  UserSettings.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UserSettings || (UserSettings = {}));
export var GetUserSettingsResponse;
(function (GetUserSettingsResponse) {
  /**
   * @internal
   */
  GetUserSettingsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetUserSettingsResponse || (GetUserSettingsResponse = {}));
export var GetVoiceConnectorRequest;
(function (GetVoiceConnectorRequest) {
  /**
   * @internal
   */
  GetVoiceConnectorRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetVoiceConnectorRequest || (GetVoiceConnectorRequest = {}));
export var GetVoiceConnectorResponse;
(function (GetVoiceConnectorResponse) {
  /**
   * @internal
   */
  GetVoiceConnectorResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetVoiceConnectorResponse || (GetVoiceConnectorResponse = {}));
export var GetVoiceConnectorEmergencyCallingConfigurationRequest;
(function (GetVoiceConnectorEmergencyCallingConfigurationRequest) {
  /**
   * @internal
   */
  GetVoiceConnectorEmergencyCallingConfigurationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(
  GetVoiceConnectorEmergencyCallingConfigurationRequest || (GetVoiceConnectorEmergencyCallingConfigurationRequest = {})
);
export var GetVoiceConnectorEmergencyCallingConfigurationResponse;
(function (GetVoiceConnectorEmergencyCallingConfigurationResponse) {
  /**
   * @internal
   */
  GetVoiceConnectorEmergencyCallingConfigurationResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.EmergencyCallingConfiguration && {
        EmergencyCallingConfiguration: EmergencyCallingConfiguration.filterSensitiveLog(
          obj.EmergencyCallingConfiguration
        ),
      }
    );
  };
})(
  GetVoiceConnectorEmergencyCallingConfigurationResponse ||
    (GetVoiceConnectorEmergencyCallingConfigurationResponse = {})
);
export var GetVoiceConnectorGroupRequest;
(function (GetVoiceConnectorGroupRequest) {
  /**
   * @internal
   */
  GetVoiceConnectorGroupRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetVoiceConnectorGroupRequest || (GetVoiceConnectorGroupRequest = {}));
export var GetVoiceConnectorGroupResponse;
(function (GetVoiceConnectorGroupResponse) {
  /**
   * @internal
   */
  GetVoiceConnectorGroupResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetVoiceConnectorGroupResponse || (GetVoiceConnectorGroupResponse = {}));
export var GetVoiceConnectorLoggingConfigurationRequest;
(function (GetVoiceConnectorLoggingConfigurationRequest) {
  /**
   * @internal
   */
  GetVoiceConnectorLoggingConfigurationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetVoiceConnectorLoggingConfigurationRequest || (GetVoiceConnectorLoggingConfigurationRequest = {}));
export var LoggingConfiguration;
(function (LoggingConfiguration) {
  /**
   * @internal
   */
  LoggingConfiguration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LoggingConfiguration || (LoggingConfiguration = {}));
export var GetVoiceConnectorLoggingConfigurationResponse;
(function (GetVoiceConnectorLoggingConfigurationResponse) {
  /**
   * @internal
   */
  GetVoiceConnectorLoggingConfigurationResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetVoiceConnectorLoggingConfigurationResponse || (GetVoiceConnectorLoggingConfigurationResponse = {}));
export var GetVoiceConnectorOriginationRequest;
(function (GetVoiceConnectorOriginationRequest) {
  /**
   * @internal
   */
  GetVoiceConnectorOriginationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetVoiceConnectorOriginationRequest || (GetVoiceConnectorOriginationRequest = {}));
export var OriginationRouteProtocol;
(function (OriginationRouteProtocol) {
  OriginationRouteProtocol["TCP"] = "TCP";
  OriginationRouteProtocol["UDP"] = "UDP";
})(OriginationRouteProtocol || (OriginationRouteProtocol = {}));
export var OriginationRoute;
(function (OriginationRoute) {
  /**
   * @internal
   */
  OriginationRoute.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(OriginationRoute || (OriginationRoute = {}));
export var Origination;
(function (Origination) {
  /**
   * @internal
   */
  Origination.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Origination || (Origination = {}));
export var GetVoiceConnectorOriginationResponse;
(function (GetVoiceConnectorOriginationResponse) {
  /**
   * @internal
   */
  GetVoiceConnectorOriginationResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetVoiceConnectorOriginationResponse || (GetVoiceConnectorOriginationResponse = {}));
export var GetVoiceConnectorProxyRequest;
(function (GetVoiceConnectorProxyRequest) {
  /**
   * @internal
   */
  GetVoiceConnectorProxyRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetVoiceConnectorProxyRequest || (GetVoiceConnectorProxyRequest = {}));
export var Proxy;
(function (Proxy) {
  /**
   * @internal
   */
  Proxy.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.FallBackPhoneNumber && { FallBackPhoneNumber: SENSITIVE_STRING });
  };
})(Proxy || (Proxy = {}));
export var GetVoiceConnectorProxyResponse;
(function (GetVoiceConnectorProxyResponse) {
  /**
   * @internal
   */
  GetVoiceConnectorProxyResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Proxy && { Proxy: Proxy.filterSensitiveLog(obj.Proxy) });
  };
})(GetVoiceConnectorProxyResponse || (GetVoiceConnectorProxyResponse = {}));
export var GetVoiceConnectorStreamingConfigurationRequest;
(function (GetVoiceConnectorStreamingConfigurationRequest) {
  /**
   * @internal
   */
  GetVoiceConnectorStreamingConfigurationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetVoiceConnectorStreamingConfigurationRequest || (GetVoiceConnectorStreamingConfigurationRequest = {}));
//# sourceMappingURL=models_0.js.map
