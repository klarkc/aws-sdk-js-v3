"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNetworkProfileRequest =
  exports.NetworkSecurityType =
  exports.NetworkEapMethod =
  exports.CreateGatewayGroupResponse =
  exports.CreateGatewayGroupRequest =
  exports.CreateContactResponse =
  exports.CreateContactRequest =
  exports.SipAddress =
  exports.SipType =
  exports.PhoneNumber =
  exports.PhoneNumberType =
  exports.CreateConferenceProviderResponse =
  exports.CreateConferenceProviderRequest =
  exports.PSTNDialIn =
  exports.MeetingSetting =
  exports.RequirePin =
  exports.IPDialIn =
  exports.CommsProtocol =
  exports.ConferenceProviderType =
  exports.CreateBusinessReportScheduleResponse =
  exports.CreateBusinessReportScheduleRequest =
  exports.BusinessReportRecurrence =
  exports.BusinessReportFormat =
  exports.BusinessReportContentRange =
  exports.BusinessReportInterval =
  exports.CreateAddressBookResponse =
  exports.CreateAddressBookRequest =
  exports.Tag =
  exports.AlreadyExistsException =
  exports.AssociateSkillWithUsersResponse =
  exports.AssociateSkillWithUsersRequest =
  exports.SkillNotLinkedException =
  exports.AssociateSkillWithSkillGroupResponse =
  exports.AssociateSkillWithSkillGroupRequest =
  exports.AssociateSkillGroupWithRoomResponse =
  exports.AssociateSkillGroupWithRoomRequest =
  exports.AssociateDeviceWithRoomResponse =
  exports.AssociateDeviceWithRoomRequest =
  exports.DeviceNotRegisteredException =
  exports.AssociateDeviceWithNetworkProfileResponse =
  exports.AssociateDeviceWithNetworkProfileRequest =
  exports.AssociateContactWithAddressBookResponse =
  exports.AssociateContactWithAddressBookRequest =
  exports.NotFoundException =
  exports.LimitExceededException =
  exports.ConcurrentModificationException =
  exports.ApproveSkillResponse =
  exports.ApproveSkillRequest =
  exports.AddressBookData =
  exports.AddressBook =
    void 0;
exports.DeleteUserResponse =
  exports.DeleteUserRequest =
  exports.DeleteSkillGroupResponse =
  exports.DeleteSkillGroupRequest =
  exports.DeleteSkillAuthorizationResponse =
  exports.DeleteSkillAuthorizationRequest =
  exports.DeleteRoomSkillParameterResponse =
  exports.DeleteRoomSkillParameterRequest =
  exports.DeleteRoomResponse =
  exports.DeleteRoomRequest =
  exports.DeleteProfileResponse =
  exports.DeleteProfileRequest =
  exports.DeleteNetworkProfileResponse =
  exports.DeleteNetworkProfileRequest =
  exports.ResourceAssociatedException =
  exports.DeleteGatewayGroupResponse =
  exports.DeleteGatewayGroupRequest =
  exports.DeleteDeviceUsageDataResponse =
  exports.DeleteDeviceUsageDataRequest =
  exports.DeviceUsageType =
  exports.DeleteDeviceResponse =
  exports.DeleteDeviceRequest =
  exports.DeleteContactResponse =
  exports.DeleteContactRequest =
  exports.DeleteConferenceProviderResponse =
  exports.DeleteConferenceProviderRequest =
  exports.DeleteBusinessReportScheduleResponse =
  exports.DeleteBusinessReportScheduleRequest =
  exports.DeleteAddressBookResponse =
  exports.DeleteAddressBookRequest =
  exports.ResourceInUseException =
  exports.CreateUserResponse =
  exports.CreateUserRequest =
  exports.CreateSkillGroupResponse =
  exports.CreateSkillGroupRequest =
  exports.CreateRoomResponse =
  exports.CreateRoomRequest =
  exports.CreateProfileResponse =
  exports.CreateProfileRequest =
  exports.WakeWord =
  exports.TemperatureUnit =
  exports.CreateMeetingRoomConfiguration =
  exports.CreateRequireCheckIn =
  exports.CreateInstantBooking =
  exports.CreateEndOfMeetingReminder =
  exports.EndOfMeetingReminderType =
  exports.DistanceUnit =
  exports.InvalidServiceLinkedRoleStateException =
  exports.InvalidCertificateAuthorityException =
  exports.CreateNetworkProfileResponse =
    void 0;
exports.MeetingRoomConfiguration =
  exports.RequireCheckIn =
  exports.InstantBooking =
  exports.EndOfMeetingReminder =
  exports.GetProfileRequest =
  exports.InvalidSecretsManagerResourceException =
  exports.GetNetworkProfileResponse =
  exports.NetworkProfile =
  exports.GetNetworkProfileRequest =
  exports.GetInvitationConfigurationResponse =
  exports.GetInvitationConfigurationRequest =
  exports.GetGatewayGroupResponse =
  exports.GatewayGroup =
  exports.GetGatewayGroupRequest =
  exports.GetGatewayResponse =
  exports.Gateway =
  exports.GetGatewayRequest =
  exports.GetDeviceResponse =
  exports.Device =
  exports.DeviceNetworkProfileInfo =
  exports.DeviceStatusInfo =
  exports.DeviceStatusDetail =
  exports.Feature =
  exports.DeviceStatusDetailCode =
  exports.ConnectionStatus =
  exports.DeviceStatus =
  exports.GetDeviceRequest =
  exports.GetContactResponse =
  exports.Contact =
  exports.GetContactRequest =
  exports.GetConferenceProviderResponse =
  exports.ConferenceProvider =
  exports.GetConferenceProviderRequest =
  exports.GetConferencePreferenceResponse =
  exports.ConferencePreference =
  exports.GetConferencePreferenceRequest =
  exports.GetAddressBookResponse =
  exports.GetAddressBookRequest =
  exports.ForgetSmartHomeAppliancesResponse =
  exports.ForgetSmartHomeAppliancesRequest =
  exports.DisassociateSkillGroupFromRoomResponse =
  exports.DisassociateSkillGroupFromRoomRequest =
  exports.DisassociateSkillFromUsersResponse =
  exports.DisassociateSkillFromUsersRequest =
  exports.DisassociateSkillFromSkillGroupResponse =
  exports.DisassociateSkillFromSkillGroupRequest =
  exports.DisassociateDeviceFromRoomResponse =
  exports.DisassociateDeviceFromRoomRequest =
  exports.DisassociateContactFromAddressBookResponse =
  exports.DisassociateContactFromAddressBookRequest =
    void 0;
exports.ListTagsResponse =
  exports.ListTagsRequest =
  exports.ListSmartHomeAppliancesResponse =
  exports.SmartHomeAppliance =
  exports.ListSmartHomeAppliancesRequest =
  exports.ListSkillsStoreSkillsByCategoryResponse =
  exports.SkillsStoreSkill =
  exports.SkillDetails =
  exports.DeveloperInfo =
  exports.ListSkillsStoreSkillsByCategoryRequest =
  exports.ListSkillsStoreCategoriesResponse =
  exports.Category =
  exports.ListSkillsStoreCategoriesRequest =
  exports.ListSkillsResponse =
  exports.SkillSummary =
  exports.SkillType =
  exports.EnablementType =
  exports.ListSkillsRequest =
  exports.SkillTypeFilter =
  exports.EnablementTypeFilter =
  exports.ListGatewaysResponse =
  exports.GatewaySummary =
  exports.ListGatewaysRequest =
  exports.ListGatewayGroupsResponse =
  exports.GatewayGroupSummary =
  exports.ListGatewayGroupsRequest =
  exports.ListDeviceEventsResponse =
  exports.DeviceEvent =
  exports.ListDeviceEventsRequest =
  exports.DeviceEventType =
  exports.ListConferenceProvidersResponse =
  exports.ListConferenceProvidersRequest =
  exports.ListBusinessReportSchedulesResponse =
  exports.BusinessReportSchedule =
  exports.BusinessReport =
  exports.BusinessReportStatus =
  exports.BusinessReportS3Location =
  exports.BusinessReportFailureCode =
  exports.ListBusinessReportSchedulesRequest =
  exports.GetSkillGroupResponse =
  exports.SkillGroup =
  exports.GetSkillGroupRequest =
  exports.GetRoomSkillParameterResponse =
  exports.RoomSkillParameter =
  exports.GetRoomSkillParameterRequest =
  exports.GetRoomResponse =
  exports.Room =
  exports.GetRoomRequest =
  exports.GetProfileResponse =
  exports.Profile =
    void 0;
exports.Content =
  exports.Text =
  exports.Ssml =
  exports.Audio =
  exports.Locale =
  exports.SearchUsersResponse =
  exports.UserData =
  exports.EnrollmentStatus =
  exports.SearchUsersRequest =
  exports.SearchSkillGroupsResponse =
  exports.SkillGroupData =
  exports.SearchSkillGroupsRequest =
  exports.SearchRoomsResponse =
  exports.RoomData =
  exports.SearchRoomsRequest =
  exports.SearchProfilesResponse =
  exports.ProfileData =
  exports.SearchProfilesRequest =
  exports.SearchNetworkProfilesResponse =
  exports.NetworkProfileData =
  exports.SearchNetworkProfilesRequest =
  exports.SearchDevicesResponse =
  exports.DeviceData =
  exports.SearchDevicesRequest =
  exports.SearchContactsResponse =
  exports.ContactData =
  exports.SearchContactsRequest =
  exports.SearchAddressBooksResponse =
  exports.SearchAddressBooksRequest =
  exports.Sort =
  exports.SortValue =
  exports.Filter =
  exports.RevokeInvitationResponse =
  exports.RevokeInvitationRequest =
  exports.ResolveRoomResponse =
  exports.ResolveRoomRequest =
  exports.RejectSkillResponse =
  exports.RejectSkillRequest =
  exports.RegisterAVSDeviceResponse =
  exports.RegisterAVSDeviceRequest =
  exports.InvalidDeviceException =
  exports.UnauthorizedException =
  exports.PutSkillAuthorizationResponse =
  exports.PutSkillAuthorizationRequest =
  exports.PutRoomSkillParameterResponse =
  exports.PutRoomSkillParameterRequest =
  exports.PutInvitationConfigurationResponse =
  exports.PutInvitationConfigurationRequest =
  exports.PutConferencePreferenceResponse =
  exports.PutConferencePreferenceRequest =
    void 0;
exports.UpdateSkillGroupResponse =
  exports.UpdateSkillGroupRequest =
  exports.UpdateRoomResponse =
  exports.UpdateRoomRequest =
  exports.UpdateProfileResponse =
  exports.UpdateProfileRequest =
  exports.UpdateMeetingRoomConfiguration =
  exports.UpdateRequireCheckIn =
  exports.UpdateInstantBooking =
  exports.UpdateEndOfMeetingReminder =
  exports.UpdateNetworkProfileResponse =
  exports.UpdateNetworkProfileRequest =
  exports.UpdateGatewayGroupResponse =
  exports.UpdateGatewayGroupRequest =
  exports.UpdateGatewayResponse =
  exports.UpdateGatewayRequest =
  exports.UpdateDeviceResponse =
  exports.UpdateDeviceRequest =
  exports.UpdateContactResponse =
  exports.UpdateContactRequest =
  exports.UpdateConferenceProviderResponse =
  exports.UpdateConferenceProviderRequest =
  exports.UpdateBusinessReportScheduleResponse =
  exports.UpdateBusinessReportScheduleRequest =
  exports.UpdateAddressBookResponse =
  exports.UpdateAddressBookRequest =
  exports.NameInUseException =
  exports.UntagResourceResponse =
  exports.UntagResourceRequest =
  exports.TagResourceResponse =
  exports.TagResourceRequest =
  exports.StartSmartHomeApplianceDiscoveryResponse =
  exports.StartSmartHomeApplianceDiscoveryRequest =
  exports.StartDeviceSyncResponse =
  exports.StartDeviceSyncRequest =
  exports.SendInvitationResponse =
  exports.SendInvitationRequest =
  exports.InvalidUserStatusException =
  exports.SendAnnouncementResponse =
  exports.SendAnnouncementRequest =
    void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AddressBook;
(function (AddressBook) {
  /**
   * @internal
   */
  AddressBook.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AddressBook = exports.AddressBook || (exports.AddressBook = {})));
var AddressBookData;
(function (AddressBookData) {
  /**
   * @internal
   */
  AddressBookData.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AddressBookData = exports.AddressBookData || (exports.AddressBookData = {})));
var ApproveSkillRequest;
(function (ApproveSkillRequest) {
  /**
   * @internal
   */
  ApproveSkillRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ApproveSkillRequest = exports.ApproveSkillRequest || (exports.ApproveSkillRequest = {})));
var ApproveSkillResponse;
(function (ApproveSkillResponse) {
  /**
   * @internal
   */
  ApproveSkillResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ApproveSkillResponse = exports.ApproveSkillResponse || (exports.ApproveSkillResponse = {})));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
  /**
   * @internal
   */
  ConcurrentModificationException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ConcurrentModificationException =
    exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}))
);
var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {})));
var NotFoundException;
(function (NotFoundException) {
  /**
   * @internal
   */
  NotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NotFoundException = exports.NotFoundException || (exports.NotFoundException = {})));
var AssociateContactWithAddressBookRequest;
(function (AssociateContactWithAddressBookRequest) {
  /**
   * @internal
   */
  AssociateContactWithAddressBookRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssociateContactWithAddressBookRequest =
    exports.AssociateContactWithAddressBookRequest || (exports.AssociateContactWithAddressBookRequest = {}))
);
var AssociateContactWithAddressBookResponse;
(function (AssociateContactWithAddressBookResponse) {
  /**
   * @internal
   */
  AssociateContactWithAddressBookResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssociateContactWithAddressBookResponse =
    exports.AssociateContactWithAddressBookResponse || (exports.AssociateContactWithAddressBookResponse = {}))
);
var AssociateDeviceWithNetworkProfileRequest;
(function (AssociateDeviceWithNetworkProfileRequest) {
  /**
   * @internal
   */
  AssociateDeviceWithNetworkProfileRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssociateDeviceWithNetworkProfileRequest =
    exports.AssociateDeviceWithNetworkProfileRequest || (exports.AssociateDeviceWithNetworkProfileRequest = {}))
);
var AssociateDeviceWithNetworkProfileResponse;
(function (AssociateDeviceWithNetworkProfileResponse) {
  /**
   * @internal
   */
  AssociateDeviceWithNetworkProfileResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssociateDeviceWithNetworkProfileResponse =
    exports.AssociateDeviceWithNetworkProfileResponse || (exports.AssociateDeviceWithNetworkProfileResponse = {}))
);
var DeviceNotRegisteredException;
(function (DeviceNotRegisteredException) {
  /**
   * @internal
   */
  DeviceNotRegisteredException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeviceNotRegisteredException = exports.DeviceNotRegisteredException || (exports.DeviceNotRegisteredException = {}))
);
var AssociateDeviceWithRoomRequest;
(function (AssociateDeviceWithRoomRequest) {
  /**
   * @internal
   */
  AssociateDeviceWithRoomRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssociateDeviceWithRoomRequest =
    exports.AssociateDeviceWithRoomRequest || (exports.AssociateDeviceWithRoomRequest = {}))
);
var AssociateDeviceWithRoomResponse;
(function (AssociateDeviceWithRoomResponse) {
  /**
   * @internal
   */
  AssociateDeviceWithRoomResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssociateDeviceWithRoomResponse =
    exports.AssociateDeviceWithRoomResponse || (exports.AssociateDeviceWithRoomResponse = {}))
);
var AssociateSkillGroupWithRoomRequest;
(function (AssociateSkillGroupWithRoomRequest) {
  /**
   * @internal
   */
  AssociateSkillGroupWithRoomRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssociateSkillGroupWithRoomRequest =
    exports.AssociateSkillGroupWithRoomRequest || (exports.AssociateSkillGroupWithRoomRequest = {}))
);
var AssociateSkillGroupWithRoomResponse;
(function (AssociateSkillGroupWithRoomResponse) {
  /**
   * @internal
   */
  AssociateSkillGroupWithRoomResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssociateSkillGroupWithRoomResponse =
    exports.AssociateSkillGroupWithRoomResponse || (exports.AssociateSkillGroupWithRoomResponse = {}))
);
var AssociateSkillWithSkillGroupRequest;
(function (AssociateSkillWithSkillGroupRequest) {
  /**
   * @internal
   */
  AssociateSkillWithSkillGroupRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssociateSkillWithSkillGroupRequest =
    exports.AssociateSkillWithSkillGroupRequest || (exports.AssociateSkillWithSkillGroupRequest = {}))
);
var AssociateSkillWithSkillGroupResponse;
(function (AssociateSkillWithSkillGroupResponse) {
  /**
   * @internal
   */
  AssociateSkillWithSkillGroupResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssociateSkillWithSkillGroupResponse =
    exports.AssociateSkillWithSkillGroupResponse || (exports.AssociateSkillWithSkillGroupResponse = {}))
);
var SkillNotLinkedException;
(function (SkillNotLinkedException) {
  /**
   * @internal
   */
  SkillNotLinkedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SkillNotLinkedException = exports.SkillNotLinkedException || (exports.SkillNotLinkedException = {})));
var AssociateSkillWithUsersRequest;
(function (AssociateSkillWithUsersRequest) {
  /**
   * @internal
   */
  AssociateSkillWithUsersRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssociateSkillWithUsersRequest =
    exports.AssociateSkillWithUsersRequest || (exports.AssociateSkillWithUsersRequest = {}))
);
var AssociateSkillWithUsersResponse;
(function (AssociateSkillWithUsersResponse) {
  /**
   * @internal
   */
  AssociateSkillWithUsersResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssociateSkillWithUsersResponse =
    exports.AssociateSkillWithUsersResponse || (exports.AssociateSkillWithUsersResponse = {}))
);
var AlreadyExistsException;
(function (AlreadyExistsException) {
  /**
   * @internal
   */
  AlreadyExistsException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AlreadyExistsException = exports.AlreadyExistsException || (exports.AlreadyExistsException = {})));
var Tag;
(function (Tag) {
  /**
   * @internal
   */
  Tag.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Tag = exports.Tag || (exports.Tag = {})));
var CreateAddressBookRequest;
(function (CreateAddressBookRequest) {
  /**
   * @internal
   */
  CreateAddressBookRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateAddressBookRequest = exports.CreateAddressBookRequest || (exports.CreateAddressBookRequest = {})));
var CreateAddressBookResponse;
(function (CreateAddressBookResponse) {
  /**
   * @internal
   */
  CreateAddressBookResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateAddressBookResponse = exports.CreateAddressBookResponse || (exports.CreateAddressBookResponse = {})));
var BusinessReportInterval;
(function (BusinessReportInterval) {
  BusinessReportInterval["ONE_DAY"] = "ONE_DAY";
  BusinessReportInterval["ONE_WEEK"] = "ONE_WEEK";
  BusinessReportInterval["THIRTY_DAYS"] = "THIRTY_DAYS";
})((BusinessReportInterval = exports.BusinessReportInterval || (exports.BusinessReportInterval = {})));
var BusinessReportContentRange;
(function (BusinessReportContentRange) {
  /**
   * @internal
   */
  BusinessReportContentRange.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BusinessReportContentRange = exports.BusinessReportContentRange || (exports.BusinessReportContentRange = {})));
var BusinessReportFormat;
(function (BusinessReportFormat) {
  BusinessReportFormat["CSV"] = "CSV";
  BusinessReportFormat["CSV_ZIP"] = "CSV_ZIP";
})((BusinessReportFormat = exports.BusinessReportFormat || (exports.BusinessReportFormat = {})));
var BusinessReportRecurrence;
(function (BusinessReportRecurrence) {
  /**
   * @internal
   */
  BusinessReportRecurrence.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BusinessReportRecurrence = exports.BusinessReportRecurrence || (exports.BusinessReportRecurrence = {})));
var CreateBusinessReportScheduleRequest;
(function (CreateBusinessReportScheduleRequest) {
  /**
   * @internal
   */
  CreateBusinessReportScheduleRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateBusinessReportScheduleRequest =
    exports.CreateBusinessReportScheduleRequest || (exports.CreateBusinessReportScheduleRequest = {}))
);
var CreateBusinessReportScheduleResponse;
(function (CreateBusinessReportScheduleResponse) {
  /**
   * @internal
   */
  CreateBusinessReportScheduleResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateBusinessReportScheduleResponse =
    exports.CreateBusinessReportScheduleResponse || (exports.CreateBusinessReportScheduleResponse = {}))
);
var ConferenceProviderType;
(function (ConferenceProviderType) {
  ConferenceProviderType["BLUEJEANS"] = "BLUEJEANS";
  ConferenceProviderType["CHIME"] = "CHIME";
  ConferenceProviderType["CUSTOM"] = "CUSTOM";
  ConferenceProviderType["FUZE"] = "FUZE";
  ConferenceProviderType["GOOGLE_HANGOUTS"] = "GOOGLE_HANGOUTS";
  ConferenceProviderType["POLYCOM"] = "POLYCOM";
  ConferenceProviderType["RINGCENTRAL"] = "RINGCENTRAL";
  ConferenceProviderType["SKYPE_FOR_BUSINESS"] = "SKYPE_FOR_BUSINESS";
  ConferenceProviderType["WEBEX"] = "WEBEX";
  ConferenceProviderType["ZOOM"] = "ZOOM";
})((ConferenceProviderType = exports.ConferenceProviderType || (exports.ConferenceProviderType = {})));
var CommsProtocol;
(function (CommsProtocol) {
  CommsProtocol["H323"] = "H323";
  CommsProtocol["SIP"] = "SIP";
  CommsProtocol["SIPS"] = "SIPS";
})((CommsProtocol = exports.CommsProtocol || (exports.CommsProtocol = {})));
var IPDialIn;
(function (IPDialIn) {
  /**
   * @internal
   */
  IPDialIn.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((IPDialIn = exports.IPDialIn || (exports.IPDialIn = {})));
var RequirePin;
(function (RequirePin) {
  RequirePin["NO"] = "NO";
  RequirePin["OPTIONAL"] = "OPTIONAL";
  RequirePin["YES"] = "YES";
})((RequirePin = exports.RequirePin || (exports.RequirePin = {})));
var MeetingSetting;
(function (MeetingSetting) {
  /**
   * @internal
   */
  MeetingSetting.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MeetingSetting = exports.MeetingSetting || (exports.MeetingSetting = {})));
var PSTNDialIn;
(function (PSTNDialIn) {
  /**
   * @internal
   */
  PSTNDialIn.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PSTNDialIn = exports.PSTNDialIn || (exports.PSTNDialIn = {})));
var CreateConferenceProviderRequest;
(function (CreateConferenceProviderRequest) {
  /**
   * @internal
   */
  CreateConferenceProviderRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateConferenceProviderRequest =
    exports.CreateConferenceProviderRequest || (exports.CreateConferenceProviderRequest = {}))
);
var CreateConferenceProviderResponse;
(function (CreateConferenceProviderResponse) {
  /**
   * @internal
   */
  CreateConferenceProviderResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateConferenceProviderResponse =
    exports.CreateConferenceProviderResponse || (exports.CreateConferenceProviderResponse = {}))
);
var PhoneNumberType;
(function (PhoneNumberType) {
  PhoneNumberType["HOME"] = "HOME";
  PhoneNumberType["MOBILE"] = "MOBILE";
  PhoneNumberType["WORK"] = "WORK";
})((PhoneNumberType = exports.PhoneNumberType || (exports.PhoneNumberType = {})));
var PhoneNumber;
(function (PhoneNumber) {
  /**
   * @internal
   */
  PhoneNumber.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Number && { Number: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Type && { Type: smithy_client_1.SENSITIVE_STRING }),
  });
})((PhoneNumber = exports.PhoneNumber || (exports.PhoneNumber = {})));
var SipType;
(function (SipType) {
  SipType["WORK"] = "WORK";
})((SipType = exports.SipType || (exports.SipType = {})));
var SipAddress;
(function (SipAddress) {
  /**
   * @internal
   */
  SipAddress.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Uri && { Uri: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Type && { Type: smithy_client_1.SENSITIVE_STRING }),
  });
})((SipAddress = exports.SipAddress || (exports.SipAddress = {})));
var CreateContactRequest;
(function (CreateContactRequest) {
  /**
   * @internal
   */
  CreateContactRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.PhoneNumber && { PhoneNumber: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.PhoneNumbers && { PhoneNumbers: obj.PhoneNumbers.map((item) => PhoneNumber.filterSensitiveLog(item)) }),
    ...(obj.SipAddresses && { SipAddresses: obj.SipAddresses.map((item) => SipAddress.filterSensitiveLog(item)) }),
  });
})((CreateContactRequest = exports.CreateContactRequest || (exports.CreateContactRequest = {})));
var CreateContactResponse;
(function (CreateContactResponse) {
  /**
   * @internal
   */
  CreateContactResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateContactResponse = exports.CreateContactResponse || (exports.CreateContactResponse = {})));
var CreateGatewayGroupRequest;
(function (CreateGatewayGroupRequest) {
  /**
   * @internal
   */
  CreateGatewayGroupRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateGatewayGroupRequest = exports.CreateGatewayGroupRequest || (exports.CreateGatewayGroupRequest = {})));
var CreateGatewayGroupResponse;
(function (CreateGatewayGroupResponse) {
  /**
   * @internal
   */
  CreateGatewayGroupResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateGatewayGroupResponse = exports.CreateGatewayGroupResponse || (exports.CreateGatewayGroupResponse = {})));
var NetworkEapMethod;
(function (NetworkEapMethod) {
  NetworkEapMethod["EAP_TLS"] = "EAP_TLS";
})((NetworkEapMethod = exports.NetworkEapMethod || (exports.NetworkEapMethod = {})));
var NetworkSecurityType;
(function (NetworkSecurityType) {
  NetworkSecurityType["OPEN"] = "OPEN";
  NetworkSecurityType["WEP"] = "WEP";
  NetworkSecurityType["WPA2_ENTERPRISE"] = "WPA2_ENTERPRISE";
  NetworkSecurityType["WPA2_PSK"] = "WPA2_PSK";
  NetworkSecurityType["WPA_PSK"] = "WPA_PSK";
})((NetworkSecurityType = exports.NetworkSecurityType || (exports.NetworkSecurityType = {})));
var CreateNetworkProfileRequest;
(function (CreateNetworkProfileRequest) {
  /**
   * @internal
   */
  CreateNetworkProfileRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.CurrentPassword && { CurrentPassword: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.NextPassword && { NextPassword: smithy_client_1.SENSITIVE_STRING }),
  });
})((CreateNetworkProfileRequest = exports.CreateNetworkProfileRequest || (exports.CreateNetworkProfileRequest = {})));
var CreateNetworkProfileResponse;
(function (CreateNetworkProfileResponse) {
  /**
   * @internal
   */
  CreateNetworkProfileResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateNetworkProfileResponse = exports.CreateNetworkProfileResponse || (exports.CreateNetworkProfileResponse = {}))
);
var InvalidCertificateAuthorityException;
(function (InvalidCertificateAuthorityException) {
  /**
   * @internal
   */
  InvalidCertificateAuthorityException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InvalidCertificateAuthorityException =
    exports.InvalidCertificateAuthorityException || (exports.InvalidCertificateAuthorityException = {}))
);
var InvalidServiceLinkedRoleStateException;
(function (InvalidServiceLinkedRoleStateException) {
  /**
   * @internal
   */
  InvalidServiceLinkedRoleStateException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InvalidServiceLinkedRoleStateException =
    exports.InvalidServiceLinkedRoleStateException || (exports.InvalidServiceLinkedRoleStateException = {}))
);
var DistanceUnit;
(function (DistanceUnit) {
  DistanceUnit["IMPERIAL"] = "IMPERIAL";
  DistanceUnit["METRIC"] = "METRIC";
})((DistanceUnit = exports.DistanceUnit || (exports.DistanceUnit = {})));
var EndOfMeetingReminderType;
(function (EndOfMeetingReminderType) {
  EndOfMeetingReminderType["ANNOUNCEMENT_TIME_CHECK"] = "ANNOUNCEMENT_TIME_CHECK";
  EndOfMeetingReminderType["ANNOUNCEMENT_VARIABLE_TIME_LEFT"] = "ANNOUNCEMENT_VARIABLE_TIME_LEFT";
  EndOfMeetingReminderType["CHIME"] = "CHIME";
  EndOfMeetingReminderType["KNOCK"] = "KNOCK";
})((EndOfMeetingReminderType = exports.EndOfMeetingReminderType || (exports.EndOfMeetingReminderType = {})));
var CreateEndOfMeetingReminder;
(function (CreateEndOfMeetingReminder) {
  /**
   * @internal
   */
  CreateEndOfMeetingReminder.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateEndOfMeetingReminder = exports.CreateEndOfMeetingReminder || (exports.CreateEndOfMeetingReminder = {})));
var CreateInstantBooking;
(function (CreateInstantBooking) {
  /**
   * @internal
   */
  CreateInstantBooking.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateInstantBooking = exports.CreateInstantBooking || (exports.CreateInstantBooking = {})));
var CreateRequireCheckIn;
(function (CreateRequireCheckIn) {
  /**
   * @internal
   */
  CreateRequireCheckIn.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateRequireCheckIn = exports.CreateRequireCheckIn || (exports.CreateRequireCheckIn = {})));
var CreateMeetingRoomConfiguration;
(function (CreateMeetingRoomConfiguration) {
  /**
   * @internal
   */
  CreateMeetingRoomConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateMeetingRoomConfiguration =
    exports.CreateMeetingRoomConfiguration || (exports.CreateMeetingRoomConfiguration = {}))
);
var TemperatureUnit;
(function (TemperatureUnit) {
  TemperatureUnit["CELSIUS"] = "CELSIUS";
  TemperatureUnit["FAHRENHEIT"] = "FAHRENHEIT";
})((TemperatureUnit = exports.TemperatureUnit || (exports.TemperatureUnit = {})));
var WakeWord;
(function (WakeWord) {
  WakeWord["ALEXA"] = "ALEXA";
  WakeWord["AMAZON"] = "AMAZON";
  WakeWord["COMPUTER"] = "COMPUTER";
  WakeWord["ECHO"] = "ECHO";
})((WakeWord = exports.WakeWord || (exports.WakeWord = {})));
var CreateProfileRequest;
(function (CreateProfileRequest) {
  /**
   * @internal
   */
  CreateProfileRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateProfileRequest = exports.CreateProfileRequest || (exports.CreateProfileRequest = {})));
var CreateProfileResponse;
(function (CreateProfileResponse) {
  /**
   * @internal
   */
  CreateProfileResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateProfileResponse = exports.CreateProfileResponse || (exports.CreateProfileResponse = {})));
var CreateRoomRequest;
(function (CreateRoomRequest) {
  /**
   * @internal
   */
  CreateRoomRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateRoomRequest = exports.CreateRoomRequest || (exports.CreateRoomRequest = {})));
var CreateRoomResponse;
(function (CreateRoomResponse) {
  /**
   * @internal
   */
  CreateRoomResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateRoomResponse = exports.CreateRoomResponse || (exports.CreateRoomResponse = {})));
var CreateSkillGroupRequest;
(function (CreateSkillGroupRequest) {
  /**
   * @internal
   */
  CreateSkillGroupRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateSkillGroupRequest = exports.CreateSkillGroupRequest || (exports.CreateSkillGroupRequest = {})));
var CreateSkillGroupResponse;
(function (CreateSkillGroupResponse) {
  /**
   * @internal
   */
  CreateSkillGroupResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateSkillGroupResponse = exports.CreateSkillGroupResponse || (exports.CreateSkillGroupResponse = {})));
var CreateUserRequest;
(function (CreateUserRequest) {
  /**
   * @internal
   */
  CreateUserRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateUserRequest = exports.CreateUserRequest || (exports.CreateUserRequest = {})));
var CreateUserResponse;
(function (CreateUserResponse) {
  /**
   * @internal
   */
  CreateUserResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateUserResponse = exports.CreateUserResponse || (exports.CreateUserResponse = {})));
var ResourceInUseException;
(function (ResourceInUseException) {
  /**
   * @internal
   */
  ResourceInUseException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {})));
var DeleteAddressBookRequest;
(function (DeleteAddressBookRequest) {
  /**
   * @internal
   */
  DeleteAddressBookRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteAddressBookRequest = exports.DeleteAddressBookRequest || (exports.DeleteAddressBookRequest = {})));
var DeleteAddressBookResponse;
(function (DeleteAddressBookResponse) {
  /**
   * @internal
   */
  DeleteAddressBookResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteAddressBookResponse = exports.DeleteAddressBookResponse || (exports.DeleteAddressBookResponse = {})));
var DeleteBusinessReportScheduleRequest;
(function (DeleteBusinessReportScheduleRequest) {
  /**
   * @internal
   */
  DeleteBusinessReportScheduleRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteBusinessReportScheduleRequest =
    exports.DeleteBusinessReportScheduleRequest || (exports.DeleteBusinessReportScheduleRequest = {}))
);
var DeleteBusinessReportScheduleResponse;
(function (DeleteBusinessReportScheduleResponse) {
  /**
   * @internal
   */
  DeleteBusinessReportScheduleResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteBusinessReportScheduleResponse =
    exports.DeleteBusinessReportScheduleResponse || (exports.DeleteBusinessReportScheduleResponse = {}))
);
var DeleteConferenceProviderRequest;
(function (DeleteConferenceProviderRequest) {
  /**
   * @internal
   */
  DeleteConferenceProviderRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteConferenceProviderRequest =
    exports.DeleteConferenceProviderRequest || (exports.DeleteConferenceProviderRequest = {}))
);
var DeleteConferenceProviderResponse;
(function (DeleteConferenceProviderResponse) {
  /**
   * @internal
   */
  DeleteConferenceProviderResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteConferenceProviderResponse =
    exports.DeleteConferenceProviderResponse || (exports.DeleteConferenceProviderResponse = {}))
);
var DeleteContactRequest;
(function (DeleteContactRequest) {
  /**
   * @internal
   */
  DeleteContactRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteContactRequest = exports.DeleteContactRequest || (exports.DeleteContactRequest = {})));
var DeleteContactResponse;
(function (DeleteContactResponse) {
  /**
   * @internal
   */
  DeleteContactResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteContactResponse = exports.DeleteContactResponse || (exports.DeleteContactResponse = {})));
var DeleteDeviceRequest;
(function (DeleteDeviceRequest) {
  /**
   * @internal
   */
  DeleteDeviceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteDeviceRequest = exports.DeleteDeviceRequest || (exports.DeleteDeviceRequest = {})));
var DeleteDeviceResponse;
(function (DeleteDeviceResponse) {
  /**
   * @internal
   */
  DeleteDeviceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteDeviceResponse = exports.DeleteDeviceResponse || (exports.DeleteDeviceResponse = {})));
var DeviceUsageType;
(function (DeviceUsageType) {
  DeviceUsageType["VOICE"] = "VOICE";
})((DeviceUsageType = exports.DeviceUsageType || (exports.DeviceUsageType = {})));
var DeleteDeviceUsageDataRequest;
(function (DeleteDeviceUsageDataRequest) {
  /**
   * @internal
   */
  DeleteDeviceUsageDataRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteDeviceUsageDataRequest = exports.DeleteDeviceUsageDataRequest || (exports.DeleteDeviceUsageDataRequest = {}))
);
var DeleteDeviceUsageDataResponse;
(function (DeleteDeviceUsageDataResponse) {
  /**
   * @internal
   */
  DeleteDeviceUsageDataResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteDeviceUsageDataResponse =
    exports.DeleteDeviceUsageDataResponse || (exports.DeleteDeviceUsageDataResponse = {}))
);
var DeleteGatewayGroupRequest;
(function (DeleteGatewayGroupRequest) {
  /**
   * @internal
   */
  DeleteGatewayGroupRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteGatewayGroupRequest = exports.DeleteGatewayGroupRequest || (exports.DeleteGatewayGroupRequest = {})));
var DeleteGatewayGroupResponse;
(function (DeleteGatewayGroupResponse) {
  /**
   * @internal
   */
  DeleteGatewayGroupResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteGatewayGroupResponse = exports.DeleteGatewayGroupResponse || (exports.DeleteGatewayGroupResponse = {})));
var ResourceAssociatedException;
(function (ResourceAssociatedException) {
  /**
   * @internal
   */
  ResourceAssociatedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceAssociatedException = exports.ResourceAssociatedException || (exports.ResourceAssociatedException = {})));
var DeleteNetworkProfileRequest;
(function (DeleteNetworkProfileRequest) {
  /**
   * @internal
   */
  DeleteNetworkProfileRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteNetworkProfileRequest = exports.DeleteNetworkProfileRequest || (exports.DeleteNetworkProfileRequest = {})));
var DeleteNetworkProfileResponse;
(function (DeleteNetworkProfileResponse) {
  /**
   * @internal
   */
  DeleteNetworkProfileResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteNetworkProfileResponse = exports.DeleteNetworkProfileResponse || (exports.DeleteNetworkProfileResponse = {}))
);
var DeleteProfileRequest;
(function (DeleteProfileRequest) {
  /**
   * @internal
   */
  DeleteProfileRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteProfileRequest = exports.DeleteProfileRequest || (exports.DeleteProfileRequest = {})));
var DeleteProfileResponse;
(function (DeleteProfileResponse) {
  /**
   * @internal
   */
  DeleteProfileResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteProfileResponse = exports.DeleteProfileResponse || (exports.DeleteProfileResponse = {})));
var DeleteRoomRequest;
(function (DeleteRoomRequest) {
  /**
   * @internal
   */
  DeleteRoomRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteRoomRequest = exports.DeleteRoomRequest || (exports.DeleteRoomRequest = {})));
var DeleteRoomResponse;
(function (DeleteRoomResponse) {
  /**
   * @internal
   */
  DeleteRoomResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteRoomResponse = exports.DeleteRoomResponse || (exports.DeleteRoomResponse = {})));
var DeleteRoomSkillParameterRequest;
(function (DeleteRoomSkillParameterRequest) {
  /**
   * @internal
   */
  DeleteRoomSkillParameterRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteRoomSkillParameterRequest =
    exports.DeleteRoomSkillParameterRequest || (exports.DeleteRoomSkillParameterRequest = {}))
);
var DeleteRoomSkillParameterResponse;
(function (DeleteRoomSkillParameterResponse) {
  /**
   * @internal
   */
  DeleteRoomSkillParameterResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteRoomSkillParameterResponse =
    exports.DeleteRoomSkillParameterResponse || (exports.DeleteRoomSkillParameterResponse = {}))
);
var DeleteSkillAuthorizationRequest;
(function (DeleteSkillAuthorizationRequest) {
  /**
   * @internal
   */
  DeleteSkillAuthorizationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteSkillAuthorizationRequest =
    exports.DeleteSkillAuthorizationRequest || (exports.DeleteSkillAuthorizationRequest = {}))
);
var DeleteSkillAuthorizationResponse;
(function (DeleteSkillAuthorizationResponse) {
  /**
   * @internal
   */
  DeleteSkillAuthorizationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteSkillAuthorizationResponse =
    exports.DeleteSkillAuthorizationResponse || (exports.DeleteSkillAuthorizationResponse = {}))
);
var DeleteSkillGroupRequest;
(function (DeleteSkillGroupRequest) {
  /**
   * @internal
   */
  DeleteSkillGroupRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteSkillGroupRequest = exports.DeleteSkillGroupRequest || (exports.DeleteSkillGroupRequest = {})));
var DeleteSkillGroupResponse;
(function (DeleteSkillGroupResponse) {
  /**
   * @internal
   */
  DeleteSkillGroupResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteSkillGroupResponse = exports.DeleteSkillGroupResponse || (exports.DeleteSkillGroupResponse = {})));
var DeleteUserRequest;
(function (DeleteUserRequest) {
  /**
   * @internal
   */
  DeleteUserRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteUserRequest = exports.DeleteUserRequest || (exports.DeleteUserRequest = {})));
var DeleteUserResponse;
(function (DeleteUserResponse) {
  /**
   * @internal
   */
  DeleteUserResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteUserResponse = exports.DeleteUserResponse || (exports.DeleteUserResponse = {})));
var DisassociateContactFromAddressBookRequest;
(function (DisassociateContactFromAddressBookRequest) {
  /**
   * @internal
   */
  DisassociateContactFromAddressBookRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisassociateContactFromAddressBookRequest =
    exports.DisassociateContactFromAddressBookRequest || (exports.DisassociateContactFromAddressBookRequest = {}))
);
var DisassociateContactFromAddressBookResponse;
(function (DisassociateContactFromAddressBookResponse) {
  /**
   * @internal
   */
  DisassociateContactFromAddressBookResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisassociateContactFromAddressBookResponse =
    exports.DisassociateContactFromAddressBookResponse || (exports.DisassociateContactFromAddressBookResponse = {}))
);
var DisassociateDeviceFromRoomRequest;
(function (DisassociateDeviceFromRoomRequest) {
  /**
   * @internal
   */
  DisassociateDeviceFromRoomRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisassociateDeviceFromRoomRequest =
    exports.DisassociateDeviceFromRoomRequest || (exports.DisassociateDeviceFromRoomRequest = {}))
);
var DisassociateDeviceFromRoomResponse;
(function (DisassociateDeviceFromRoomResponse) {
  /**
   * @internal
   */
  DisassociateDeviceFromRoomResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisassociateDeviceFromRoomResponse =
    exports.DisassociateDeviceFromRoomResponse || (exports.DisassociateDeviceFromRoomResponse = {}))
);
var DisassociateSkillFromSkillGroupRequest;
(function (DisassociateSkillFromSkillGroupRequest) {
  /**
   * @internal
   */
  DisassociateSkillFromSkillGroupRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisassociateSkillFromSkillGroupRequest =
    exports.DisassociateSkillFromSkillGroupRequest || (exports.DisassociateSkillFromSkillGroupRequest = {}))
);
var DisassociateSkillFromSkillGroupResponse;
(function (DisassociateSkillFromSkillGroupResponse) {
  /**
   * @internal
   */
  DisassociateSkillFromSkillGroupResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisassociateSkillFromSkillGroupResponse =
    exports.DisassociateSkillFromSkillGroupResponse || (exports.DisassociateSkillFromSkillGroupResponse = {}))
);
var DisassociateSkillFromUsersRequest;
(function (DisassociateSkillFromUsersRequest) {
  /**
   * @internal
   */
  DisassociateSkillFromUsersRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisassociateSkillFromUsersRequest =
    exports.DisassociateSkillFromUsersRequest || (exports.DisassociateSkillFromUsersRequest = {}))
);
var DisassociateSkillFromUsersResponse;
(function (DisassociateSkillFromUsersResponse) {
  /**
   * @internal
   */
  DisassociateSkillFromUsersResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisassociateSkillFromUsersResponse =
    exports.DisassociateSkillFromUsersResponse || (exports.DisassociateSkillFromUsersResponse = {}))
);
var DisassociateSkillGroupFromRoomRequest;
(function (DisassociateSkillGroupFromRoomRequest) {
  /**
   * @internal
   */
  DisassociateSkillGroupFromRoomRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisassociateSkillGroupFromRoomRequest =
    exports.DisassociateSkillGroupFromRoomRequest || (exports.DisassociateSkillGroupFromRoomRequest = {}))
);
var DisassociateSkillGroupFromRoomResponse;
(function (DisassociateSkillGroupFromRoomResponse) {
  /**
   * @internal
   */
  DisassociateSkillGroupFromRoomResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisassociateSkillGroupFromRoomResponse =
    exports.DisassociateSkillGroupFromRoomResponse || (exports.DisassociateSkillGroupFromRoomResponse = {}))
);
var ForgetSmartHomeAppliancesRequest;
(function (ForgetSmartHomeAppliancesRequest) {
  /**
   * @internal
   */
  ForgetSmartHomeAppliancesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ForgetSmartHomeAppliancesRequest =
    exports.ForgetSmartHomeAppliancesRequest || (exports.ForgetSmartHomeAppliancesRequest = {}))
);
var ForgetSmartHomeAppliancesResponse;
(function (ForgetSmartHomeAppliancesResponse) {
  /**
   * @internal
   */
  ForgetSmartHomeAppliancesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ForgetSmartHomeAppliancesResponse =
    exports.ForgetSmartHomeAppliancesResponse || (exports.ForgetSmartHomeAppliancesResponse = {}))
);
var GetAddressBookRequest;
(function (GetAddressBookRequest) {
  /**
   * @internal
   */
  GetAddressBookRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAddressBookRequest = exports.GetAddressBookRequest || (exports.GetAddressBookRequest = {})));
var GetAddressBookResponse;
(function (GetAddressBookResponse) {
  /**
   * @internal
   */
  GetAddressBookResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAddressBookResponse = exports.GetAddressBookResponse || (exports.GetAddressBookResponse = {})));
var GetConferencePreferenceRequest;
(function (GetConferencePreferenceRequest) {
  /**
   * @internal
   */
  GetConferencePreferenceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetConferencePreferenceRequest =
    exports.GetConferencePreferenceRequest || (exports.GetConferencePreferenceRequest = {}))
);
var ConferencePreference;
(function (ConferencePreference) {
  /**
   * @internal
   */
  ConferencePreference.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConferencePreference = exports.ConferencePreference || (exports.ConferencePreference = {})));
var GetConferencePreferenceResponse;
(function (GetConferencePreferenceResponse) {
  /**
   * @internal
   */
  GetConferencePreferenceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetConferencePreferenceResponse =
    exports.GetConferencePreferenceResponse || (exports.GetConferencePreferenceResponse = {}))
);
var GetConferenceProviderRequest;
(function (GetConferenceProviderRequest) {
  /**
   * @internal
   */
  GetConferenceProviderRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetConferenceProviderRequest = exports.GetConferenceProviderRequest || (exports.GetConferenceProviderRequest = {}))
);
var ConferenceProvider;
(function (ConferenceProvider) {
  /**
   * @internal
   */
  ConferenceProvider.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConferenceProvider = exports.ConferenceProvider || (exports.ConferenceProvider = {})));
var GetConferenceProviderResponse;
(function (GetConferenceProviderResponse) {
  /**
   * @internal
   */
  GetConferenceProviderResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetConferenceProviderResponse =
    exports.GetConferenceProviderResponse || (exports.GetConferenceProviderResponse = {}))
);
var GetContactRequest;
(function (GetContactRequest) {
  /**
   * @internal
   */
  GetContactRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetContactRequest = exports.GetContactRequest || (exports.GetContactRequest = {})));
var Contact;
(function (Contact) {
  /**
   * @internal
   */
  Contact.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.PhoneNumber && { PhoneNumber: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.PhoneNumbers && { PhoneNumbers: obj.PhoneNumbers.map((item) => PhoneNumber.filterSensitiveLog(item)) }),
    ...(obj.SipAddresses && { SipAddresses: obj.SipAddresses.map((item) => SipAddress.filterSensitiveLog(item)) }),
  });
})((Contact = exports.Contact || (exports.Contact = {})));
var GetContactResponse;
(function (GetContactResponse) {
  /**
   * @internal
   */
  GetContactResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Contact && { Contact: Contact.filterSensitiveLog(obj.Contact) }),
  });
})((GetContactResponse = exports.GetContactResponse || (exports.GetContactResponse = {})));
var GetDeviceRequest;
(function (GetDeviceRequest) {
  /**
   * @internal
   */
  GetDeviceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDeviceRequest = exports.GetDeviceRequest || (exports.GetDeviceRequest = {})));
var DeviceStatus;
(function (DeviceStatus) {
  DeviceStatus["DEREGISTERED"] = "DEREGISTERED";
  DeviceStatus["FAILED"] = "FAILED";
  DeviceStatus["PENDING"] = "PENDING";
  DeviceStatus["READY"] = "READY";
  DeviceStatus["WAS_OFFLINE"] = "WAS_OFFLINE";
})((DeviceStatus = exports.DeviceStatus || (exports.DeviceStatus = {})));
var ConnectionStatus;
(function (ConnectionStatus) {
  ConnectionStatus["OFFLINE"] = "OFFLINE";
  ConnectionStatus["ONLINE"] = "ONLINE";
})((ConnectionStatus = exports.ConnectionStatus || (exports.ConnectionStatus = {})));
var DeviceStatusDetailCode;
(function (DeviceStatusDetailCode) {
  DeviceStatusDetailCode["ASSOCIATION_REJECTION"] = "ASSOCIATION_REJECTION";
  DeviceStatusDetailCode["AUTHENTICATION_FAILURE"] = "AUTHENTICATION_FAILURE";
  DeviceStatusDetailCode["CERTIFICATE_AUTHORITY_ACCESS_DENIED"] = "CERTIFICATE_AUTHORITY_ACCESS_DENIED";
  DeviceStatusDetailCode["CERTIFICATE_ISSUING_LIMIT_EXCEEDED"] = "CERTIFICATE_ISSUING_LIMIT_EXCEEDED";
  DeviceStatusDetailCode["CREDENTIALS_ACCESS_FAILURE"] = "CREDENTIALS_ACCESS_FAILURE";
  DeviceStatusDetailCode["DEVICE_SOFTWARE_UPDATE_NEEDED"] = "DEVICE_SOFTWARE_UPDATE_NEEDED";
  DeviceStatusDetailCode["DEVICE_WAS_OFFLINE"] = "DEVICE_WAS_OFFLINE";
  DeviceStatusDetailCode["DHCP_FAILURE"] = "DHCP_FAILURE";
  DeviceStatusDetailCode["DNS_FAILURE"] = "DNS_FAILURE";
  DeviceStatusDetailCode["INTERNET_UNAVAILABLE"] = "INTERNET_UNAVAILABLE";
  DeviceStatusDetailCode["INVALID_CERTIFICATE_AUTHORITY"] = "INVALID_CERTIFICATE_AUTHORITY";
  DeviceStatusDetailCode["INVALID_PASSWORD_STATE"] = "INVALID_PASSWORD_STATE";
  DeviceStatusDetailCode["NETWORK_PROFILE_NOT_FOUND"] = "NETWORK_PROFILE_NOT_FOUND";
  DeviceStatusDetailCode["PASSWORD_MANAGER_ACCESS_DENIED"] = "PASSWORD_MANAGER_ACCESS_DENIED";
  DeviceStatusDetailCode["PASSWORD_NOT_FOUND"] = "PASSWORD_NOT_FOUND";
  DeviceStatusDetailCode["TLS_VERSION_MISMATCH"] = "TLS_VERSION_MISMATCH";
  DeviceStatusDetailCode["UNKNOWN_FAILURE"] = "UNKNOWN_FAILURE";
})((DeviceStatusDetailCode = exports.DeviceStatusDetailCode || (exports.DeviceStatusDetailCode = {})));
var Feature;
(function (Feature) {
  Feature["ALL"] = "ALL";
  Feature["BLUETOOTH"] = "BLUETOOTH";
  Feature["LISTS"] = "LISTS";
  Feature["NETWORK_PROFILE"] = "NETWORK_PROFILE";
  Feature["NOTIFICATIONS"] = "NOTIFICATIONS";
  Feature["SETTINGS"] = "SETTINGS";
  Feature["SKILLS"] = "SKILLS";
  Feature["VOLUME"] = "VOLUME";
})((Feature = exports.Feature || (exports.Feature = {})));
var DeviceStatusDetail;
(function (DeviceStatusDetail) {
  /**
   * @internal
   */
  DeviceStatusDetail.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeviceStatusDetail = exports.DeviceStatusDetail || (exports.DeviceStatusDetail = {})));
var DeviceStatusInfo;
(function (DeviceStatusInfo) {
  /**
   * @internal
   */
  DeviceStatusInfo.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeviceStatusInfo = exports.DeviceStatusInfo || (exports.DeviceStatusInfo = {})));
var DeviceNetworkProfileInfo;
(function (DeviceNetworkProfileInfo) {
  /**
   * @internal
   */
  DeviceNetworkProfileInfo.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeviceNetworkProfileInfo = exports.DeviceNetworkProfileInfo || (exports.DeviceNetworkProfileInfo = {})));
var Device;
(function (Device) {
  /**
   * @internal
   */
  Device.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Device = exports.Device || (exports.Device = {})));
var GetDeviceResponse;
(function (GetDeviceResponse) {
  /**
   * @internal
   */
  GetDeviceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDeviceResponse = exports.GetDeviceResponse || (exports.GetDeviceResponse = {})));
var GetGatewayRequest;
(function (GetGatewayRequest) {
  /**
   * @internal
   */
  GetGatewayRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetGatewayRequest = exports.GetGatewayRequest || (exports.GetGatewayRequest = {})));
var Gateway;
(function (Gateway) {
  /**
   * @internal
   */
  Gateway.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Gateway = exports.Gateway || (exports.Gateway = {})));
var GetGatewayResponse;
(function (GetGatewayResponse) {
  /**
   * @internal
   */
  GetGatewayResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetGatewayResponse = exports.GetGatewayResponse || (exports.GetGatewayResponse = {})));
var GetGatewayGroupRequest;
(function (GetGatewayGroupRequest) {
  /**
   * @internal
   */
  GetGatewayGroupRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetGatewayGroupRequest = exports.GetGatewayGroupRequest || (exports.GetGatewayGroupRequest = {})));
var GatewayGroup;
(function (GatewayGroup) {
  /**
   * @internal
   */
  GatewayGroup.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GatewayGroup = exports.GatewayGroup || (exports.GatewayGroup = {})));
var GetGatewayGroupResponse;
(function (GetGatewayGroupResponse) {
  /**
   * @internal
   */
  GetGatewayGroupResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetGatewayGroupResponse = exports.GetGatewayGroupResponse || (exports.GetGatewayGroupResponse = {})));
var GetInvitationConfigurationRequest;
(function (GetInvitationConfigurationRequest) {
  /**
   * @internal
   */
  GetInvitationConfigurationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetInvitationConfigurationRequest =
    exports.GetInvitationConfigurationRequest || (exports.GetInvitationConfigurationRequest = {}))
);
var GetInvitationConfigurationResponse;
(function (GetInvitationConfigurationResponse) {
  /**
   * @internal
   */
  GetInvitationConfigurationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetInvitationConfigurationResponse =
    exports.GetInvitationConfigurationResponse || (exports.GetInvitationConfigurationResponse = {}))
);
var GetNetworkProfileRequest;
(function (GetNetworkProfileRequest) {
  /**
   * @internal
   */
  GetNetworkProfileRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetNetworkProfileRequest = exports.GetNetworkProfileRequest || (exports.GetNetworkProfileRequest = {})));
var NetworkProfile;
(function (NetworkProfile) {
  /**
   * @internal
   */
  NetworkProfile.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.CurrentPassword && { CurrentPassword: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.NextPassword && { NextPassword: smithy_client_1.SENSITIVE_STRING }),
  });
})((NetworkProfile = exports.NetworkProfile || (exports.NetworkProfile = {})));
var GetNetworkProfileResponse;
(function (GetNetworkProfileResponse) {
  /**
   * @internal
   */
  GetNetworkProfileResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.NetworkProfile && { NetworkProfile: NetworkProfile.filterSensitiveLog(obj.NetworkProfile) }),
  });
})((GetNetworkProfileResponse = exports.GetNetworkProfileResponse || (exports.GetNetworkProfileResponse = {})));
var InvalidSecretsManagerResourceException;
(function (InvalidSecretsManagerResourceException) {
  /**
   * @internal
   */
  InvalidSecretsManagerResourceException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InvalidSecretsManagerResourceException =
    exports.InvalidSecretsManagerResourceException || (exports.InvalidSecretsManagerResourceException = {}))
);
var GetProfileRequest;
(function (GetProfileRequest) {
  /**
   * @internal
   */
  GetProfileRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetProfileRequest = exports.GetProfileRequest || (exports.GetProfileRequest = {})));
var EndOfMeetingReminder;
(function (EndOfMeetingReminder) {
  /**
   * @internal
   */
  EndOfMeetingReminder.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EndOfMeetingReminder = exports.EndOfMeetingReminder || (exports.EndOfMeetingReminder = {})));
var InstantBooking;
(function (InstantBooking) {
  /**
   * @internal
   */
  InstantBooking.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InstantBooking = exports.InstantBooking || (exports.InstantBooking = {})));
var RequireCheckIn;
(function (RequireCheckIn) {
  /**
   * @internal
   */
  RequireCheckIn.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RequireCheckIn = exports.RequireCheckIn || (exports.RequireCheckIn = {})));
var MeetingRoomConfiguration;
(function (MeetingRoomConfiguration) {
  /**
   * @internal
   */
  MeetingRoomConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MeetingRoomConfiguration = exports.MeetingRoomConfiguration || (exports.MeetingRoomConfiguration = {})));
var Profile;
(function (Profile) {
  /**
   * @internal
   */
  Profile.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Profile = exports.Profile || (exports.Profile = {})));
var GetProfileResponse;
(function (GetProfileResponse) {
  /**
   * @internal
   */
  GetProfileResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetProfileResponse = exports.GetProfileResponse || (exports.GetProfileResponse = {})));
var GetRoomRequest;
(function (GetRoomRequest) {
  /**
   * @internal
   */
  GetRoomRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetRoomRequest = exports.GetRoomRequest || (exports.GetRoomRequest = {})));
var Room;
(function (Room) {
  /**
   * @internal
   */
  Room.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Room = exports.Room || (exports.Room = {})));
var GetRoomResponse;
(function (GetRoomResponse) {
  /**
   * @internal
   */
  GetRoomResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetRoomResponse = exports.GetRoomResponse || (exports.GetRoomResponse = {})));
var GetRoomSkillParameterRequest;
(function (GetRoomSkillParameterRequest) {
  /**
   * @internal
   */
  GetRoomSkillParameterRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetRoomSkillParameterRequest = exports.GetRoomSkillParameterRequest || (exports.GetRoomSkillParameterRequest = {}))
);
var RoomSkillParameter;
(function (RoomSkillParameter) {
  /**
   * @internal
   */
  RoomSkillParameter.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RoomSkillParameter = exports.RoomSkillParameter || (exports.RoomSkillParameter = {})));
var GetRoomSkillParameterResponse;
(function (GetRoomSkillParameterResponse) {
  /**
   * @internal
   */
  GetRoomSkillParameterResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetRoomSkillParameterResponse =
    exports.GetRoomSkillParameterResponse || (exports.GetRoomSkillParameterResponse = {}))
);
var GetSkillGroupRequest;
(function (GetSkillGroupRequest) {
  /**
   * @internal
   */
  GetSkillGroupRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetSkillGroupRequest = exports.GetSkillGroupRequest || (exports.GetSkillGroupRequest = {})));
var SkillGroup;
(function (SkillGroup) {
  /**
   * @internal
   */
  SkillGroup.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SkillGroup = exports.SkillGroup || (exports.SkillGroup = {})));
var GetSkillGroupResponse;
(function (GetSkillGroupResponse) {
  /**
   * @internal
   */
  GetSkillGroupResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetSkillGroupResponse = exports.GetSkillGroupResponse || (exports.GetSkillGroupResponse = {})));
var ListBusinessReportSchedulesRequest;
(function (ListBusinessReportSchedulesRequest) {
  /**
   * @internal
   */
  ListBusinessReportSchedulesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListBusinessReportSchedulesRequest =
    exports.ListBusinessReportSchedulesRequest || (exports.ListBusinessReportSchedulesRequest = {}))
);
var BusinessReportFailureCode;
(function (BusinessReportFailureCode) {
  BusinessReportFailureCode["ACCESS_DENIED"] = "ACCESS_DENIED";
  BusinessReportFailureCode["INTERNAL_FAILURE"] = "INTERNAL_FAILURE";
  BusinessReportFailureCode["NO_SUCH_BUCKET"] = "NO_SUCH_BUCKET";
})((BusinessReportFailureCode = exports.BusinessReportFailureCode || (exports.BusinessReportFailureCode = {})));
var BusinessReportS3Location;
(function (BusinessReportS3Location) {
  /**
   * @internal
   */
  BusinessReportS3Location.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BusinessReportS3Location = exports.BusinessReportS3Location || (exports.BusinessReportS3Location = {})));
var BusinessReportStatus;
(function (BusinessReportStatus) {
  BusinessReportStatus["FAILED"] = "FAILED";
  BusinessReportStatus["RUNNING"] = "RUNNING";
  BusinessReportStatus["SUCCEEDED"] = "SUCCEEDED";
})((BusinessReportStatus = exports.BusinessReportStatus || (exports.BusinessReportStatus = {})));
var BusinessReport;
(function (BusinessReport) {
  /**
   * @internal
   */
  BusinessReport.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BusinessReport = exports.BusinessReport || (exports.BusinessReport = {})));
var BusinessReportSchedule;
(function (BusinessReportSchedule) {
  /**
   * @internal
   */
  BusinessReportSchedule.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BusinessReportSchedule = exports.BusinessReportSchedule || (exports.BusinessReportSchedule = {})));
var ListBusinessReportSchedulesResponse;
(function (ListBusinessReportSchedulesResponse) {
  /**
   * @internal
   */
  ListBusinessReportSchedulesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListBusinessReportSchedulesResponse =
    exports.ListBusinessReportSchedulesResponse || (exports.ListBusinessReportSchedulesResponse = {}))
);
var ListConferenceProvidersRequest;
(function (ListConferenceProvidersRequest) {
  /**
   * @internal
   */
  ListConferenceProvidersRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListConferenceProvidersRequest =
    exports.ListConferenceProvidersRequest || (exports.ListConferenceProvidersRequest = {}))
);
var ListConferenceProvidersResponse;
(function (ListConferenceProvidersResponse) {
  /**
   * @internal
   */
  ListConferenceProvidersResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListConferenceProvidersResponse =
    exports.ListConferenceProvidersResponse || (exports.ListConferenceProvidersResponse = {}))
);
var DeviceEventType;
(function (DeviceEventType) {
  DeviceEventType["CONNECTION_STATUS"] = "CONNECTION_STATUS";
  DeviceEventType["DEVICE_STATUS"] = "DEVICE_STATUS";
})((DeviceEventType = exports.DeviceEventType || (exports.DeviceEventType = {})));
var ListDeviceEventsRequest;
(function (ListDeviceEventsRequest) {
  /**
   * @internal
   */
  ListDeviceEventsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListDeviceEventsRequest = exports.ListDeviceEventsRequest || (exports.ListDeviceEventsRequest = {})));
var DeviceEvent;
(function (DeviceEvent) {
  /**
   * @internal
   */
  DeviceEvent.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeviceEvent = exports.DeviceEvent || (exports.DeviceEvent = {})));
var ListDeviceEventsResponse;
(function (ListDeviceEventsResponse) {
  /**
   * @internal
   */
  ListDeviceEventsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListDeviceEventsResponse = exports.ListDeviceEventsResponse || (exports.ListDeviceEventsResponse = {})));
var ListGatewayGroupsRequest;
(function (ListGatewayGroupsRequest) {
  /**
   * @internal
   */
  ListGatewayGroupsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListGatewayGroupsRequest = exports.ListGatewayGroupsRequest || (exports.ListGatewayGroupsRequest = {})));
var GatewayGroupSummary;
(function (GatewayGroupSummary) {
  /**
   * @internal
   */
  GatewayGroupSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GatewayGroupSummary = exports.GatewayGroupSummary || (exports.GatewayGroupSummary = {})));
var ListGatewayGroupsResponse;
(function (ListGatewayGroupsResponse) {
  /**
   * @internal
   */
  ListGatewayGroupsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListGatewayGroupsResponse = exports.ListGatewayGroupsResponse || (exports.ListGatewayGroupsResponse = {})));
var ListGatewaysRequest;
(function (ListGatewaysRequest) {
  /**
   * @internal
   */
  ListGatewaysRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListGatewaysRequest = exports.ListGatewaysRequest || (exports.ListGatewaysRequest = {})));
var GatewaySummary;
(function (GatewaySummary) {
  /**
   * @internal
   */
  GatewaySummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GatewaySummary = exports.GatewaySummary || (exports.GatewaySummary = {})));
var ListGatewaysResponse;
(function (ListGatewaysResponse) {
  /**
   * @internal
   */
  ListGatewaysResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListGatewaysResponse = exports.ListGatewaysResponse || (exports.ListGatewaysResponse = {})));
var EnablementTypeFilter;
(function (EnablementTypeFilter) {
  EnablementTypeFilter["ENABLED"] = "ENABLED";
  EnablementTypeFilter["PENDING"] = "PENDING";
})((EnablementTypeFilter = exports.EnablementTypeFilter || (exports.EnablementTypeFilter = {})));
var SkillTypeFilter;
(function (SkillTypeFilter) {
  SkillTypeFilter["ALL"] = "ALL";
  SkillTypeFilter["PRIVATE"] = "PRIVATE";
  SkillTypeFilter["PUBLIC"] = "PUBLIC";
})((SkillTypeFilter = exports.SkillTypeFilter || (exports.SkillTypeFilter = {})));
var ListSkillsRequest;
(function (ListSkillsRequest) {
  /**
   * @internal
   */
  ListSkillsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListSkillsRequest = exports.ListSkillsRequest || (exports.ListSkillsRequest = {})));
var EnablementType;
(function (EnablementType) {
  EnablementType["ENABLED"] = "ENABLED";
  EnablementType["PENDING"] = "PENDING";
})((EnablementType = exports.EnablementType || (exports.EnablementType = {})));
var SkillType;
(function (SkillType) {
  SkillType["PRIVATE"] = "PRIVATE";
  SkillType["PUBLIC"] = "PUBLIC";
})((SkillType = exports.SkillType || (exports.SkillType = {})));
var SkillSummary;
(function (SkillSummary) {
  /**
   * @internal
   */
  SkillSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SkillSummary = exports.SkillSummary || (exports.SkillSummary = {})));
var ListSkillsResponse;
(function (ListSkillsResponse) {
  /**
   * @internal
   */
  ListSkillsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListSkillsResponse = exports.ListSkillsResponse || (exports.ListSkillsResponse = {})));
var ListSkillsStoreCategoriesRequest;
(function (ListSkillsStoreCategoriesRequest) {
  /**
   * @internal
   */
  ListSkillsStoreCategoriesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListSkillsStoreCategoriesRequest =
    exports.ListSkillsStoreCategoriesRequest || (exports.ListSkillsStoreCategoriesRequest = {}))
);
var Category;
(function (Category) {
  /**
   * @internal
   */
  Category.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Category = exports.Category || (exports.Category = {})));
var ListSkillsStoreCategoriesResponse;
(function (ListSkillsStoreCategoriesResponse) {
  /**
   * @internal
   */
  ListSkillsStoreCategoriesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListSkillsStoreCategoriesResponse =
    exports.ListSkillsStoreCategoriesResponse || (exports.ListSkillsStoreCategoriesResponse = {}))
);
var ListSkillsStoreSkillsByCategoryRequest;
(function (ListSkillsStoreSkillsByCategoryRequest) {
  /**
   * @internal
   */
  ListSkillsStoreSkillsByCategoryRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListSkillsStoreSkillsByCategoryRequest =
    exports.ListSkillsStoreSkillsByCategoryRequest || (exports.ListSkillsStoreSkillsByCategoryRequest = {}))
);
var DeveloperInfo;
(function (DeveloperInfo) {
  /**
   * @internal
   */
  DeveloperInfo.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeveloperInfo = exports.DeveloperInfo || (exports.DeveloperInfo = {})));
var SkillDetails;
(function (SkillDetails) {
  /**
   * @internal
   */
  SkillDetails.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SkillDetails = exports.SkillDetails || (exports.SkillDetails = {})));
var SkillsStoreSkill;
(function (SkillsStoreSkill) {
  /**
   * @internal
   */
  SkillsStoreSkill.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SkillsStoreSkill = exports.SkillsStoreSkill || (exports.SkillsStoreSkill = {})));
var ListSkillsStoreSkillsByCategoryResponse;
(function (ListSkillsStoreSkillsByCategoryResponse) {
  /**
   * @internal
   */
  ListSkillsStoreSkillsByCategoryResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListSkillsStoreSkillsByCategoryResponse =
    exports.ListSkillsStoreSkillsByCategoryResponse || (exports.ListSkillsStoreSkillsByCategoryResponse = {}))
);
var ListSmartHomeAppliancesRequest;
(function (ListSmartHomeAppliancesRequest) {
  /**
   * @internal
   */
  ListSmartHomeAppliancesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListSmartHomeAppliancesRequest =
    exports.ListSmartHomeAppliancesRequest || (exports.ListSmartHomeAppliancesRequest = {}))
);
var SmartHomeAppliance;
(function (SmartHomeAppliance) {
  /**
   * @internal
   */
  SmartHomeAppliance.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SmartHomeAppliance = exports.SmartHomeAppliance || (exports.SmartHomeAppliance = {})));
var ListSmartHomeAppliancesResponse;
(function (ListSmartHomeAppliancesResponse) {
  /**
   * @internal
   */
  ListSmartHomeAppliancesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListSmartHomeAppliancesResponse =
    exports.ListSmartHomeAppliancesResponse || (exports.ListSmartHomeAppliancesResponse = {}))
);
var ListTagsRequest;
(function (ListTagsRequest) {
  /**
   * @internal
   */
  ListTagsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsRequest = exports.ListTagsRequest || (exports.ListTagsRequest = {})));
var ListTagsResponse;
(function (ListTagsResponse) {
  /**
   * @internal
   */
  ListTagsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsResponse = exports.ListTagsResponse || (exports.ListTagsResponse = {})));
var PutConferencePreferenceRequest;
(function (PutConferencePreferenceRequest) {
  /**
   * @internal
   */
  PutConferencePreferenceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutConferencePreferenceRequest =
    exports.PutConferencePreferenceRequest || (exports.PutConferencePreferenceRequest = {}))
);
var PutConferencePreferenceResponse;
(function (PutConferencePreferenceResponse) {
  /**
   * @internal
   */
  PutConferencePreferenceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutConferencePreferenceResponse =
    exports.PutConferencePreferenceResponse || (exports.PutConferencePreferenceResponse = {}))
);
var PutInvitationConfigurationRequest;
(function (PutInvitationConfigurationRequest) {
  /**
   * @internal
   */
  PutInvitationConfigurationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutInvitationConfigurationRequest =
    exports.PutInvitationConfigurationRequest || (exports.PutInvitationConfigurationRequest = {}))
);
var PutInvitationConfigurationResponse;
(function (PutInvitationConfigurationResponse) {
  /**
   * @internal
   */
  PutInvitationConfigurationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutInvitationConfigurationResponse =
    exports.PutInvitationConfigurationResponse || (exports.PutInvitationConfigurationResponse = {}))
);
var PutRoomSkillParameterRequest;
(function (PutRoomSkillParameterRequest) {
  /**
   * @internal
   */
  PutRoomSkillParameterRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutRoomSkillParameterRequest = exports.PutRoomSkillParameterRequest || (exports.PutRoomSkillParameterRequest = {}))
);
var PutRoomSkillParameterResponse;
(function (PutRoomSkillParameterResponse) {
  /**
   * @internal
   */
  PutRoomSkillParameterResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutRoomSkillParameterResponse =
    exports.PutRoomSkillParameterResponse || (exports.PutRoomSkillParameterResponse = {}))
);
var PutSkillAuthorizationRequest;
(function (PutSkillAuthorizationRequest) {
  /**
   * @internal
   */
  PutSkillAuthorizationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AuthorizationResult && { AuthorizationResult: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (PutSkillAuthorizationRequest = exports.PutSkillAuthorizationRequest || (exports.PutSkillAuthorizationRequest = {}))
);
var PutSkillAuthorizationResponse;
(function (PutSkillAuthorizationResponse) {
  /**
   * @internal
   */
  PutSkillAuthorizationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutSkillAuthorizationResponse =
    exports.PutSkillAuthorizationResponse || (exports.PutSkillAuthorizationResponse = {}))
);
var UnauthorizedException;
(function (UnauthorizedException) {
  /**
   * @internal
   */
  UnauthorizedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UnauthorizedException = exports.UnauthorizedException || (exports.UnauthorizedException = {})));
var InvalidDeviceException;
(function (InvalidDeviceException) {
  /**
   * @internal
   */
  InvalidDeviceException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidDeviceException = exports.InvalidDeviceException || (exports.InvalidDeviceException = {})));
var RegisterAVSDeviceRequest;
(function (RegisterAVSDeviceRequest) {
  /**
   * @internal
   */
  RegisterAVSDeviceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RegisterAVSDeviceRequest = exports.RegisterAVSDeviceRequest || (exports.RegisterAVSDeviceRequest = {})));
var RegisterAVSDeviceResponse;
(function (RegisterAVSDeviceResponse) {
  /**
   * @internal
   */
  RegisterAVSDeviceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RegisterAVSDeviceResponse = exports.RegisterAVSDeviceResponse || (exports.RegisterAVSDeviceResponse = {})));
var RejectSkillRequest;
(function (RejectSkillRequest) {
  /**
   * @internal
   */
  RejectSkillRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RejectSkillRequest = exports.RejectSkillRequest || (exports.RejectSkillRequest = {})));
var RejectSkillResponse;
(function (RejectSkillResponse) {
  /**
   * @internal
   */
  RejectSkillResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RejectSkillResponse = exports.RejectSkillResponse || (exports.RejectSkillResponse = {})));
var ResolveRoomRequest;
(function (ResolveRoomRequest) {
  /**
   * @internal
   */
  ResolveRoomRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResolveRoomRequest = exports.ResolveRoomRequest || (exports.ResolveRoomRequest = {})));
var ResolveRoomResponse;
(function (ResolveRoomResponse) {
  /**
   * @internal
   */
  ResolveRoomResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResolveRoomResponse = exports.ResolveRoomResponse || (exports.ResolveRoomResponse = {})));
var RevokeInvitationRequest;
(function (RevokeInvitationRequest) {
  /**
   * @internal
   */
  RevokeInvitationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RevokeInvitationRequest = exports.RevokeInvitationRequest || (exports.RevokeInvitationRequest = {})));
var RevokeInvitationResponse;
(function (RevokeInvitationResponse) {
  /**
   * @internal
   */
  RevokeInvitationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RevokeInvitationResponse = exports.RevokeInvitationResponse || (exports.RevokeInvitationResponse = {})));
var Filter;
(function (Filter) {
  /**
   * @internal
   */
  Filter.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Filter = exports.Filter || (exports.Filter = {})));
var SortValue;
(function (SortValue) {
  SortValue["ASC"] = "ASC";
  SortValue["DESC"] = "DESC";
})((SortValue = exports.SortValue || (exports.SortValue = {})));
var Sort;
(function (Sort) {
  /**
   * @internal
   */
  Sort.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Sort = exports.Sort || (exports.Sort = {})));
var SearchAddressBooksRequest;
(function (SearchAddressBooksRequest) {
  /**
   * @internal
   */
  SearchAddressBooksRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SearchAddressBooksRequest = exports.SearchAddressBooksRequest || (exports.SearchAddressBooksRequest = {})));
var SearchAddressBooksResponse;
(function (SearchAddressBooksResponse) {
  /**
   * @internal
   */
  SearchAddressBooksResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SearchAddressBooksResponse = exports.SearchAddressBooksResponse || (exports.SearchAddressBooksResponse = {})));
var SearchContactsRequest;
(function (SearchContactsRequest) {
  /**
   * @internal
   */
  SearchContactsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SearchContactsRequest = exports.SearchContactsRequest || (exports.SearchContactsRequest = {})));
var ContactData;
(function (ContactData) {
  /**
   * @internal
   */
  ContactData.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.PhoneNumber && { PhoneNumber: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.PhoneNumbers && { PhoneNumbers: obj.PhoneNumbers.map((item) => PhoneNumber.filterSensitiveLog(item)) }),
    ...(obj.SipAddresses && { SipAddresses: obj.SipAddresses.map((item) => SipAddress.filterSensitiveLog(item)) }),
  });
})((ContactData = exports.ContactData || (exports.ContactData = {})));
var SearchContactsResponse;
(function (SearchContactsResponse) {
  /**
   * @internal
   */
  SearchContactsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Contacts && { Contacts: obj.Contacts.map((item) => ContactData.filterSensitiveLog(item)) }),
  });
})((SearchContactsResponse = exports.SearchContactsResponse || (exports.SearchContactsResponse = {})));
var SearchDevicesRequest;
(function (SearchDevicesRequest) {
  /**
   * @internal
   */
  SearchDevicesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SearchDevicesRequest = exports.SearchDevicesRequest || (exports.SearchDevicesRequest = {})));
var DeviceData;
(function (DeviceData) {
  /**
   * @internal
   */
  DeviceData.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeviceData = exports.DeviceData || (exports.DeviceData = {})));
var SearchDevicesResponse;
(function (SearchDevicesResponse) {
  /**
   * @internal
   */
  SearchDevicesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SearchDevicesResponse = exports.SearchDevicesResponse || (exports.SearchDevicesResponse = {})));
var SearchNetworkProfilesRequest;
(function (SearchNetworkProfilesRequest) {
  /**
   * @internal
   */
  SearchNetworkProfilesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (SearchNetworkProfilesRequest = exports.SearchNetworkProfilesRequest || (exports.SearchNetworkProfilesRequest = {}))
);
var NetworkProfileData;
(function (NetworkProfileData) {
  /**
   * @internal
   */
  NetworkProfileData.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NetworkProfileData = exports.NetworkProfileData || (exports.NetworkProfileData = {})));
var SearchNetworkProfilesResponse;
(function (SearchNetworkProfilesResponse) {
  /**
   * @internal
   */
  SearchNetworkProfilesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (SearchNetworkProfilesResponse =
    exports.SearchNetworkProfilesResponse || (exports.SearchNetworkProfilesResponse = {}))
);
var SearchProfilesRequest;
(function (SearchProfilesRequest) {
  /**
   * @internal
   */
  SearchProfilesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SearchProfilesRequest = exports.SearchProfilesRequest || (exports.SearchProfilesRequest = {})));
var ProfileData;
(function (ProfileData) {
  /**
   * @internal
   */
  ProfileData.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ProfileData = exports.ProfileData || (exports.ProfileData = {})));
var SearchProfilesResponse;
(function (SearchProfilesResponse) {
  /**
   * @internal
   */
  SearchProfilesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SearchProfilesResponse = exports.SearchProfilesResponse || (exports.SearchProfilesResponse = {})));
var SearchRoomsRequest;
(function (SearchRoomsRequest) {
  /**
   * @internal
   */
  SearchRoomsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SearchRoomsRequest = exports.SearchRoomsRequest || (exports.SearchRoomsRequest = {})));
var RoomData;
(function (RoomData) {
  /**
   * @internal
   */
  RoomData.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RoomData = exports.RoomData || (exports.RoomData = {})));
var SearchRoomsResponse;
(function (SearchRoomsResponse) {
  /**
   * @internal
   */
  SearchRoomsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SearchRoomsResponse = exports.SearchRoomsResponse || (exports.SearchRoomsResponse = {})));
var SearchSkillGroupsRequest;
(function (SearchSkillGroupsRequest) {
  /**
   * @internal
   */
  SearchSkillGroupsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SearchSkillGroupsRequest = exports.SearchSkillGroupsRequest || (exports.SearchSkillGroupsRequest = {})));
var SkillGroupData;
(function (SkillGroupData) {
  /**
   * @internal
   */
  SkillGroupData.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SkillGroupData = exports.SkillGroupData || (exports.SkillGroupData = {})));
var SearchSkillGroupsResponse;
(function (SearchSkillGroupsResponse) {
  /**
   * @internal
   */
  SearchSkillGroupsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SearchSkillGroupsResponse = exports.SearchSkillGroupsResponse || (exports.SearchSkillGroupsResponse = {})));
var SearchUsersRequest;
(function (SearchUsersRequest) {
  /**
   * @internal
   */
  SearchUsersRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SearchUsersRequest = exports.SearchUsersRequest || (exports.SearchUsersRequest = {})));
var EnrollmentStatus;
(function (EnrollmentStatus) {
  EnrollmentStatus["DEREGISTERING"] = "DEREGISTERING";
  EnrollmentStatus["DISASSOCIATING"] = "DISASSOCIATING";
  EnrollmentStatus["INITIALIZED"] = "INITIALIZED";
  EnrollmentStatus["PENDING"] = "PENDING";
  EnrollmentStatus["REGISTERED"] = "REGISTERED";
})((EnrollmentStatus = exports.EnrollmentStatus || (exports.EnrollmentStatus = {})));
var UserData;
(function (UserData) {
  /**
   * @internal
   */
  UserData.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UserData = exports.UserData || (exports.UserData = {})));
var SearchUsersResponse;
(function (SearchUsersResponse) {
  /**
   * @internal
   */
  SearchUsersResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SearchUsersResponse = exports.SearchUsersResponse || (exports.SearchUsersResponse = {})));
var Locale;
(function (Locale) {
  Locale["en_US"] = "en-US";
})((Locale = exports.Locale || (exports.Locale = {})));
var Audio;
(function (Audio) {
  /**
   * @internal
   */
  Audio.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Audio = exports.Audio || (exports.Audio = {})));
var Ssml;
(function (Ssml) {
  /**
   * @internal
   */
  Ssml.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Ssml = exports.Ssml || (exports.Ssml = {})));
var Text;
(function (Text) {
  /**
   * @internal
   */
  Text.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Text = exports.Text || (exports.Text = {})));
var Content;
(function (Content) {
  /**
   * @internal
   */
  Content.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Content = exports.Content || (exports.Content = {})));
var SendAnnouncementRequest;
(function (SendAnnouncementRequest) {
  /**
   * @internal
   */
  SendAnnouncementRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SendAnnouncementRequest = exports.SendAnnouncementRequest || (exports.SendAnnouncementRequest = {})));
var SendAnnouncementResponse;
(function (SendAnnouncementResponse) {
  /**
   * @internal
   */
  SendAnnouncementResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SendAnnouncementResponse = exports.SendAnnouncementResponse || (exports.SendAnnouncementResponse = {})));
var InvalidUserStatusException;
(function (InvalidUserStatusException) {
  /**
   * @internal
   */
  InvalidUserStatusException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidUserStatusException = exports.InvalidUserStatusException || (exports.InvalidUserStatusException = {})));
var SendInvitationRequest;
(function (SendInvitationRequest) {
  /**
   * @internal
   */
  SendInvitationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SendInvitationRequest = exports.SendInvitationRequest || (exports.SendInvitationRequest = {})));
var SendInvitationResponse;
(function (SendInvitationResponse) {
  /**
   * @internal
   */
  SendInvitationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SendInvitationResponse = exports.SendInvitationResponse || (exports.SendInvitationResponse = {})));
var StartDeviceSyncRequest;
(function (StartDeviceSyncRequest) {
  /**
   * @internal
   */
  StartDeviceSyncRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartDeviceSyncRequest = exports.StartDeviceSyncRequest || (exports.StartDeviceSyncRequest = {})));
var StartDeviceSyncResponse;
(function (StartDeviceSyncResponse) {
  /**
   * @internal
   */
  StartDeviceSyncResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartDeviceSyncResponse = exports.StartDeviceSyncResponse || (exports.StartDeviceSyncResponse = {})));
var StartSmartHomeApplianceDiscoveryRequest;
(function (StartSmartHomeApplianceDiscoveryRequest) {
  /**
   * @internal
   */
  StartSmartHomeApplianceDiscoveryRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StartSmartHomeApplianceDiscoveryRequest =
    exports.StartSmartHomeApplianceDiscoveryRequest || (exports.StartSmartHomeApplianceDiscoveryRequest = {}))
);
var StartSmartHomeApplianceDiscoveryResponse;
(function (StartSmartHomeApplianceDiscoveryResponse) {
  /**
   * @internal
   */
  StartSmartHomeApplianceDiscoveryResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StartSmartHomeApplianceDiscoveryResponse =
    exports.StartSmartHomeApplianceDiscoveryResponse || (exports.StartSmartHomeApplianceDiscoveryResponse = {}))
);
var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {})));
var TagResourceResponse;
(function (TagResourceResponse) {
  /**
   * @internal
   */
  TagResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {})));
var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {})));
var UntagResourceResponse;
(function (UntagResourceResponse) {
  /**
   * @internal
   */
  UntagResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {})));
var NameInUseException;
(function (NameInUseException) {
  /**
   * @internal
   */
  NameInUseException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NameInUseException = exports.NameInUseException || (exports.NameInUseException = {})));
var UpdateAddressBookRequest;
(function (UpdateAddressBookRequest) {
  /**
   * @internal
   */
  UpdateAddressBookRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateAddressBookRequest = exports.UpdateAddressBookRequest || (exports.UpdateAddressBookRequest = {})));
var UpdateAddressBookResponse;
(function (UpdateAddressBookResponse) {
  /**
   * @internal
   */
  UpdateAddressBookResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateAddressBookResponse = exports.UpdateAddressBookResponse || (exports.UpdateAddressBookResponse = {})));
var UpdateBusinessReportScheduleRequest;
(function (UpdateBusinessReportScheduleRequest) {
  /**
   * @internal
   */
  UpdateBusinessReportScheduleRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateBusinessReportScheduleRequest =
    exports.UpdateBusinessReportScheduleRequest || (exports.UpdateBusinessReportScheduleRequest = {}))
);
var UpdateBusinessReportScheduleResponse;
(function (UpdateBusinessReportScheduleResponse) {
  /**
   * @internal
   */
  UpdateBusinessReportScheduleResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateBusinessReportScheduleResponse =
    exports.UpdateBusinessReportScheduleResponse || (exports.UpdateBusinessReportScheduleResponse = {}))
);
var UpdateConferenceProviderRequest;
(function (UpdateConferenceProviderRequest) {
  /**
   * @internal
   */
  UpdateConferenceProviderRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateConferenceProviderRequest =
    exports.UpdateConferenceProviderRequest || (exports.UpdateConferenceProviderRequest = {}))
);
var UpdateConferenceProviderResponse;
(function (UpdateConferenceProviderResponse) {
  /**
   * @internal
   */
  UpdateConferenceProviderResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateConferenceProviderResponse =
    exports.UpdateConferenceProviderResponse || (exports.UpdateConferenceProviderResponse = {}))
);
var UpdateContactRequest;
(function (UpdateContactRequest) {
  /**
   * @internal
   */
  UpdateContactRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.PhoneNumber && { PhoneNumber: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.PhoneNumbers && { PhoneNumbers: obj.PhoneNumbers.map((item) => PhoneNumber.filterSensitiveLog(item)) }),
    ...(obj.SipAddresses && { SipAddresses: obj.SipAddresses.map((item) => SipAddress.filterSensitiveLog(item)) }),
  });
})((UpdateContactRequest = exports.UpdateContactRequest || (exports.UpdateContactRequest = {})));
var UpdateContactResponse;
(function (UpdateContactResponse) {
  /**
   * @internal
   */
  UpdateContactResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateContactResponse = exports.UpdateContactResponse || (exports.UpdateContactResponse = {})));
var UpdateDeviceRequest;
(function (UpdateDeviceRequest) {
  /**
   * @internal
   */
  UpdateDeviceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateDeviceRequest = exports.UpdateDeviceRequest || (exports.UpdateDeviceRequest = {})));
var UpdateDeviceResponse;
(function (UpdateDeviceResponse) {
  /**
   * @internal
   */
  UpdateDeviceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateDeviceResponse = exports.UpdateDeviceResponse || (exports.UpdateDeviceResponse = {})));
var UpdateGatewayRequest;
(function (UpdateGatewayRequest) {
  /**
   * @internal
   */
  UpdateGatewayRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateGatewayRequest = exports.UpdateGatewayRequest || (exports.UpdateGatewayRequest = {})));
var UpdateGatewayResponse;
(function (UpdateGatewayResponse) {
  /**
   * @internal
   */
  UpdateGatewayResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateGatewayResponse = exports.UpdateGatewayResponse || (exports.UpdateGatewayResponse = {})));
var UpdateGatewayGroupRequest;
(function (UpdateGatewayGroupRequest) {
  /**
   * @internal
   */
  UpdateGatewayGroupRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateGatewayGroupRequest = exports.UpdateGatewayGroupRequest || (exports.UpdateGatewayGroupRequest = {})));
var UpdateGatewayGroupResponse;
(function (UpdateGatewayGroupResponse) {
  /**
   * @internal
   */
  UpdateGatewayGroupResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateGatewayGroupResponse = exports.UpdateGatewayGroupResponse || (exports.UpdateGatewayGroupResponse = {})));
var UpdateNetworkProfileRequest;
(function (UpdateNetworkProfileRequest) {
  /**
   * @internal
   */
  UpdateNetworkProfileRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.CurrentPassword && { CurrentPassword: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.NextPassword && { NextPassword: smithy_client_1.SENSITIVE_STRING }),
  });
})((UpdateNetworkProfileRequest = exports.UpdateNetworkProfileRequest || (exports.UpdateNetworkProfileRequest = {})));
var UpdateNetworkProfileResponse;
(function (UpdateNetworkProfileResponse) {
  /**
   * @internal
   */
  UpdateNetworkProfileResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateNetworkProfileResponse = exports.UpdateNetworkProfileResponse || (exports.UpdateNetworkProfileResponse = {}))
);
var UpdateEndOfMeetingReminder;
(function (UpdateEndOfMeetingReminder) {
  /**
   * @internal
   */
  UpdateEndOfMeetingReminder.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateEndOfMeetingReminder = exports.UpdateEndOfMeetingReminder || (exports.UpdateEndOfMeetingReminder = {})));
var UpdateInstantBooking;
(function (UpdateInstantBooking) {
  /**
   * @internal
   */
  UpdateInstantBooking.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateInstantBooking = exports.UpdateInstantBooking || (exports.UpdateInstantBooking = {})));
var UpdateRequireCheckIn;
(function (UpdateRequireCheckIn) {
  /**
   * @internal
   */
  UpdateRequireCheckIn.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateRequireCheckIn = exports.UpdateRequireCheckIn || (exports.UpdateRequireCheckIn = {})));
var UpdateMeetingRoomConfiguration;
(function (UpdateMeetingRoomConfiguration) {
  /**
   * @internal
   */
  UpdateMeetingRoomConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateMeetingRoomConfiguration =
    exports.UpdateMeetingRoomConfiguration || (exports.UpdateMeetingRoomConfiguration = {}))
);
var UpdateProfileRequest;
(function (UpdateProfileRequest) {
  /**
   * @internal
   */
  UpdateProfileRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateProfileRequest = exports.UpdateProfileRequest || (exports.UpdateProfileRequest = {})));
var UpdateProfileResponse;
(function (UpdateProfileResponse) {
  /**
   * @internal
   */
  UpdateProfileResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateProfileResponse = exports.UpdateProfileResponse || (exports.UpdateProfileResponse = {})));
var UpdateRoomRequest;
(function (UpdateRoomRequest) {
  /**
   * @internal
   */
  UpdateRoomRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateRoomRequest = exports.UpdateRoomRequest || (exports.UpdateRoomRequest = {})));
var UpdateRoomResponse;
(function (UpdateRoomResponse) {
  /**
   * @internal
   */
  UpdateRoomResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateRoomResponse = exports.UpdateRoomResponse || (exports.UpdateRoomResponse = {})));
var UpdateSkillGroupRequest;
(function (UpdateSkillGroupRequest) {
  /**
   * @internal
   */
  UpdateSkillGroupRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateSkillGroupRequest = exports.UpdateSkillGroupRequest || (exports.UpdateSkillGroupRequest = {})));
var UpdateSkillGroupResponse;
(function (UpdateSkillGroupResponse) {
  /**
   * @internal
   */
  UpdateSkillGroupResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateSkillGroupResponse = exports.UpdateSkillGroupResponse || (exports.UpdateSkillGroupResponse = {})));
//# sourceMappingURL=models_0.js.map
