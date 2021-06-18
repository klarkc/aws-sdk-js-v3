"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPhoneNumbersResponse =
  exports.ListPhoneNumbersRequest =
  exports.ListPhoneNumberOrdersResponse =
  exports.ListPhoneNumberOrdersRequest =
  exports.ListMeetingTagsResponse =
  exports.ListMeetingTagsRequest =
  exports.ListMeetingsResponse =
  exports.ListMeetingsRequest =
  exports.ListChannelsModeratedByAppInstanceUserResponse =
  exports.ListChannelsModeratedByAppInstanceUserRequest =
  exports.ListChannelsResponse =
  exports.ListChannelsRequest =
  exports.ListChannelModeratorsResponse =
  exports.ListChannelModeratorsRequest =
  exports.ListChannelMessagesResponse =
  exports.ListChannelMessagesRequest =
  exports.SortOrder =
  exports.ListChannelMembershipsForAppInstanceUserResponse =
  exports.ListChannelMembershipsForAppInstanceUserRequest =
  exports.ListChannelMembershipsResponse =
  exports.ListChannelMembershipsRequest =
  exports.ListChannelBansResponse =
  exports.ListChannelBansRequest =
  exports.ListBotsResponse =
  exports.ListBotsRequest =
  exports.ListAttendeeTagsResponse =
  exports.ListAttendeeTagsRequest =
  exports.ListAttendeesResponse =
  exports.ListAttendeesRequest =
  exports.ListAppInstanceUsersResponse =
  exports.ListAppInstanceUsersRequest =
  exports.ListAppInstancesResponse =
  exports.ListAppInstancesRequest =
  exports.ListAppInstanceAdminsResponse =
  exports.ListAppInstanceAdminsRequest =
  exports.ListAccountsResponse =
  exports.ListAccountsRequest =
  exports.InviteUsersResponse =
  exports.InviteUsersRequest =
  exports.Invite =
  exports.GetVoiceConnectorTerminationHealthResponse =
  exports.TerminationHealth =
  exports.GetVoiceConnectorTerminationHealthRequest =
  exports.GetVoiceConnectorTerminationResponse =
  exports.Termination =
  exports.GetVoiceConnectorTerminationRequest =
  exports.GetVoiceConnectorStreamingConfigurationResponse =
  exports.StreamingConfiguration =
  exports.StreamingNotificationTarget =
  exports.NotificationTarget =
    void 0;
exports.RedactChannelMessageResponse =
  exports.RedactChannelMessageRequest =
  exports.PutVoiceConnectorTerminationCredentialsRequest =
  exports.PutVoiceConnectorTerminationResponse =
  exports.PutVoiceConnectorTerminationRequest =
  exports.PutVoiceConnectorStreamingConfigurationResponse =
  exports.PutVoiceConnectorStreamingConfigurationRequest =
  exports.PutVoiceConnectorProxyResponse =
  exports.PutVoiceConnectorProxyRequest =
  exports.PutVoiceConnectorOriginationResponse =
  exports.PutVoiceConnectorOriginationRequest =
  exports.PutVoiceConnectorLoggingConfigurationResponse =
  exports.PutVoiceConnectorLoggingConfigurationRequest =
  exports.PutVoiceConnectorEmergencyCallingConfigurationResponse =
  exports.PutVoiceConnectorEmergencyCallingConfigurationRequest =
  exports.PutSipMediaApplicationLoggingConfigurationResponse =
  exports.PutSipMediaApplicationLoggingConfigurationRequest =
  exports.PutRetentionSettingsResponse =
  exports.PutRetentionSettingsRequest =
  exports.PutEventsConfigurationResponse =
  exports.PutEventsConfigurationRequest =
  exports.PutAppInstanceStreamingConfigurationsResponse =
  exports.PutAppInstanceStreamingConfigurationsRequest =
  exports.PutAppInstanceRetentionSettingsResponse =
  exports.PutAppInstanceRetentionSettingsRequest =
  exports.LogoutUserResponse =
  exports.LogoutUserRequest =
  exports.ListVoiceConnectorTerminationCredentialsResponse =
  exports.ListVoiceConnectorTerminationCredentialsRequest =
  exports.ListVoiceConnectorsResponse =
  exports.ListVoiceConnectorsRequest =
  exports.ListVoiceConnectorGroupsResponse =
  exports.ListVoiceConnectorGroupsRequest =
  exports.ListUsersResponse =
  exports.ListUsersRequest =
  exports.ListTagsForResourceResponse =
  exports.ListTagsForResourceRequest =
  exports.ListSupportedPhoneNumberCountriesResponse =
  exports.PhoneNumberCountry =
  exports.ListSupportedPhoneNumberCountriesRequest =
  exports.ListSipRulesResponse =
  exports.ListSipRulesRequest =
  exports.ListSipMediaApplicationsResponse =
  exports.ListSipMediaApplicationsRequest =
  exports.ListRoomsResponse =
  exports.ListRoomsRequest =
  exports.ListRoomMembershipsResponse =
  exports.ListRoomMembershipsRequest =
  exports.ListProxySessionsResponse =
  exports.ListProxySessionsRequest =
    void 0;
exports.UpdateSipRuleResponse =
  exports.UpdateSipRuleRequest =
  exports.UpdateSipMediaApplicationResponse =
  exports.UpdateSipMediaApplicationRequest =
  exports.UpdateRoomMembershipResponse =
  exports.UpdateRoomMembershipRequest =
  exports.UpdateRoomResponse =
  exports.UpdateRoomRequest =
  exports.UpdateProxySessionResponse =
  exports.UpdateProxySessionRequest =
  exports.UpdatePhoneNumberSettingsRequest =
  exports.UpdatePhoneNumberResponse =
  exports.UpdatePhoneNumberRequest =
  exports.UpdateGlobalSettingsRequest =
  exports.UpdateChannelReadMarkerResponse =
  exports.UpdateChannelReadMarkerRequest =
  exports.UpdateChannelMessageResponse =
  exports.UpdateChannelMessageRequest =
  exports.UpdateChannelResponse =
  exports.UpdateChannelRequest =
  exports.UpdateBotResponse =
  exports.UpdateBotRequest =
  exports.UpdateAppInstanceUserResponse =
  exports.UpdateAppInstanceUserRequest =
  exports.UpdateAppInstanceResponse =
  exports.UpdateAppInstanceRequest =
  exports.UpdateAccountSettingsResponse =
  exports.UpdateAccountSettingsRequest =
  exports.UpdateAccountResponse =
  exports.UpdateAccountRequest =
  exports.UntagResourceRequest =
  exports.UntagMeetingRequest =
  exports.UntagAttendeeRequest =
  exports.TagResourceRequest =
  exports.TagMeetingRequest =
  exports.TagAttendeeRequest =
  exports.SendChannelMessageResponse =
  exports.SendChannelMessageRequest =
  exports.SearchAvailablePhoneNumbersResponse =
  exports.SearchAvailablePhoneNumbersRequest =
  exports.RestorePhoneNumberResponse =
  exports.RestorePhoneNumberRequest =
  exports.ResetPersonalPINResponse =
  exports.ResetPersonalPINRequest =
  exports.RegenerateSecurityTokenResponse =
  exports.RegenerateSecurityTokenRequest =
  exports.RedactRoomMessageResponse =
  exports.RedactRoomMessageRequest =
  exports.RedactConversationMessageResponse =
  exports.RedactConversationMessageRequest =
    void 0;
exports.UpdateVoiceConnectorGroupResponse =
  exports.UpdateVoiceConnectorGroupRequest =
  exports.UpdateVoiceConnectorResponse =
  exports.UpdateVoiceConnectorRequest =
  exports.UpdateUserSettingsRequest =
  exports.UpdateUserResponse =
  exports.UpdateUserRequest =
    void 0;
const models_0_1 = require("./models_0");
const smithy_client_1 = require("@aws-sdk/smithy-client");
var NotificationTarget;
(function (NotificationTarget) {
  NotificationTarget["EventBridge"] = "EventBridge";
  NotificationTarget["SNS"] = "SNS";
  NotificationTarget["SQS"] = "SQS";
})((NotificationTarget = exports.NotificationTarget || (exports.NotificationTarget = {})));
var StreamingNotificationTarget;
(function (StreamingNotificationTarget) {
  /**
   * @internal
   */
  StreamingNotificationTarget.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StreamingNotificationTarget = exports.StreamingNotificationTarget || (exports.StreamingNotificationTarget = {})));
var StreamingConfiguration;
(function (StreamingConfiguration) {
  /**
   * @internal
   */
  StreamingConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StreamingConfiguration = exports.StreamingConfiguration || (exports.StreamingConfiguration = {})));
var GetVoiceConnectorStreamingConfigurationResponse;
(function (GetVoiceConnectorStreamingConfigurationResponse) {
  /**
   * @internal
   */
  GetVoiceConnectorStreamingConfigurationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetVoiceConnectorStreamingConfigurationResponse =
    exports.GetVoiceConnectorStreamingConfigurationResponse ||
    (exports.GetVoiceConnectorStreamingConfigurationResponse = {}))
);
var GetVoiceConnectorTerminationRequest;
(function (GetVoiceConnectorTerminationRequest) {
  /**
   * @internal
   */
  GetVoiceConnectorTerminationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetVoiceConnectorTerminationRequest =
    exports.GetVoiceConnectorTerminationRequest || (exports.GetVoiceConnectorTerminationRequest = {}))
);
var Termination;
(function (Termination) {
  /**
   * @internal
   */
  Termination.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.DefaultPhoneNumber && { DefaultPhoneNumber: smithy_client_1.SENSITIVE_STRING }),
  });
})((Termination = exports.Termination || (exports.Termination = {})));
var GetVoiceConnectorTerminationResponse;
(function (GetVoiceConnectorTerminationResponse) {
  /**
   * @internal
   */
  GetVoiceConnectorTerminationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Termination && { Termination: Termination.filterSensitiveLog(obj.Termination) }),
  });
})(
  (GetVoiceConnectorTerminationResponse =
    exports.GetVoiceConnectorTerminationResponse || (exports.GetVoiceConnectorTerminationResponse = {}))
);
var GetVoiceConnectorTerminationHealthRequest;
(function (GetVoiceConnectorTerminationHealthRequest) {
  /**
   * @internal
   */
  GetVoiceConnectorTerminationHealthRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetVoiceConnectorTerminationHealthRequest =
    exports.GetVoiceConnectorTerminationHealthRequest || (exports.GetVoiceConnectorTerminationHealthRequest = {}))
);
var TerminationHealth;
(function (TerminationHealth) {
  /**
   * @internal
   */
  TerminationHealth.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TerminationHealth = exports.TerminationHealth || (exports.TerminationHealth = {})));
var GetVoiceConnectorTerminationHealthResponse;
(function (GetVoiceConnectorTerminationHealthResponse) {
  /**
   * @internal
   */
  GetVoiceConnectorTerminationHealthResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetVoiceConnectorTerminationHealthResponse =
    exports.GetVoiceConnectorTerminationHealthResponse || (exports.GetVoiceConnectorTerminationHealthResponse = {}))
);
var Invite;
(function (Invite) {
  /**
   * @internal
   */
  Invite.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.EmailAddress && { EmailAddress: smithy_client_1.SENSITIVE_STRING }),
  });
})((Invite = exports.Invite || (exports.Invite = {})));
var InviteUsersRequest;
(function (InviteUsersRequest) {
  /**
   * @internal
   */
  InviteUsersRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UserEmailList && { UserEmailList: smithy_client_1.SENSITIVE_STRING }),
  });
})((InviteUsersRequest = exports.InviteUsersRequest || (exports.InviteUsersRequest = {})));
var InviteUsersResponse;
(function (InviteUsersResponse) {
  /**
   * @internal
   */
  InviteUsersResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Invites && { Invites: obj.Invites.map((item) => Invite.filterSensitiveLog(item)) }),
  });
})((InviteUsersResponse = exports.InviteUsersResponse || (exports.InviteUsersResponse = {})));
var ListAccountsRequest;
(function (ListAccountsRequest) {
  /**
   * @internal
   */
  ListAccountsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UserEmail && { UserEmail: smithy_client_1.SENSITIVE_STRING }),
  });
})((ListAccountsRequest = exports.ListAccountsRequest || (exports.ListAccountsRequest = {})));
var ListAccountsResponse;
(function (ListAccountsResponse) {
  /**
   * @internal
   */
  ListAccountsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListAccountsResponse = exports.ListAccountsResponse || (exports.ListAccountsResponse = {})));
var ListAppInstanceAdminsRequest;
(function (ListAppInstanceAdminsRequest) {
  /**
   * @internal
   */
  ListAppInstanceAdminsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.NextToken && { NextToken: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (ListAppInstanceAdminsRequest = exports.ListAppInstanceAdminsRequest || (exports.ListAppInstanceAdminsRequest = {}))
);
var ListAppInstanceAdminsResponse;
(function (ListAppInstanceAdminsResponse) {
  /**
   * @internal
   */
  ListAppInstanceAdminsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AppInstanceAdmins && {
      AppInstanceAdmins: obj.AppInstanceAdmins.map((item) =>
        models_0_1.AppInstanceAdminSummary.filterSensitiveLog(item)
      ),
    }),
    ...(obj.NextToken && { NextToken: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (ListAppInstanceAdminsResponse =
    exports.ListAppInstanceAdminsResponse || (exports.ListAppInstanceAdminsResponse = {}))
);
var ListAppInstancesRequest;
(function (ListAppInstancesRequest) {
  /**
   * @internal
   */
  ListAppInstancesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.NextToken && { NextToken: smithy_client_1.SENSITIVE_STRING }),
  });
})((ListAppInstancesRequest = exports.ListAppInstancesRequest || (exports.ListAppInstancesRequest = {})));
var ListAppInstancesResponse;
(function (ListAppInstancesResponse) {
  /**
   * @internal
   */
  ListAppInstancesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AppInstances && {
      AppInstances: obj.AppInstances.map((item) => models_0_1.AppInstanceSummary.filterSensitiveLog(item)),
    }),
    ...(obj.NextToken && { NextToken: smithy_client_1.SENSITIVE_STRING }),
  });
})((ListAppInstancesResponse = exports.ListAppInstancesResponse || (exports.ListAppInstancesResponse = {})));
var ListAppInstanceUsersRequest;
(function (ListAppInstanceUsersRequest) {
  /**
   * @internal
   */
  ListAppInstanceUsersRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.NextToken && { NextToken: smithy_client_1.SENSITIVE_STRING }),
  });
})((ListAppInstanceUsersRequest = exports.ListAppInstanceUsersRequest || (exports.ListAppInstanceUsersRequest = {})));
var ListAppInstanceUsersResponse;
(function (ListAppInstanceUsersResponse) {
  /**
   * @internal
   */
  ListAppInstanceUsersResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AppInstanceUsers && {
      AppInstanceUsers: obj.AppInstanceUsers.map((item) => models_0_1.AppInstanceUserSummary.filterSensitiveLog(item)),
    }),
    ...(obj.NextToken && { NextToken: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (ListAppInstanceUsersResponse = exports.ListAppInstanceUsersResponse || (exports.ListAppInstanceUsersResponse = {}))
);
var ListAttendeesRequest;
(function (ListAttendeesRequest) {
  /**
   * @internal
   */
  ListAttendeesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListAttendeesRequest = exports.ListAttendeesRequest || (exports.ListAttendeesRequest = {})));
var ListAttendeesResponse;
(function (ListAttendeesResponse) {
  /**
   * @internal
   */
  ListAttendeesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => models_0_1.Attendee.filterSensitiveLog(item)) }),
  });
})((ListAttendeesResponse = exports.ListAttendeesResponse || (exports.ListAttendeesResponse = {})));
var ListAttendeeTagsRequest;
(function (ListAttendeeTagsRequest) {
  /**
   * @internal
   */
  ListAttendeeTagsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListAttendeeTagsRequest = exports.ListAttendeeTagsRequest || (exports.ListAttendeeTagsRequest = {})));
var ListAttendeeTagsResponse;
(function (ListAttendeeTagsResponse) {
  /**
   * @internal
   */
  ListAttendeeTagsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => models_0_1.Tag.filterSensitiveLog(item)) }),
  });
})((ListAttendeeTagsResponse = exports.ListAttendeeTagsResponse || (exports.ListAttendeeTagsResponse = {})));
var ListBotsRequest;
(function (ListBotsRequest) {
  /**
   * @internal
   */
  ListBotsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListBotsRequest = exports.ListBotsRequest || (exports.ListBotsRequest = {})));
var ListBotsResponse;
(function (ListBotsResponse) {
  /**
   * @internal
   */
  ListBotsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Bots && { Bots: obj.Bots.map((item) => models_0_1.Bot.filterSensitiveLog(item)) }),
  });
})((ListBotsResponse = exports.ListBotsResponse || (exports.ListBotsResponse = {})));
var ListChannelBansRequest;
(function (ListChannelBansRequest) {
  /**
   * @internal
   */
  ListChannelBansRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.NextToken && { NextToken: smithy_client_1.SENSITIVE_STRING }),
  });
})((ListChannelBansRequest = exports.ListChannelBansRequest || (exports.ListChannelBansRequest = {})));
var ListChannelBansResponse;
(function (ListChannelBansResponse) {
  /**
   * @internal
   */
  ListChannelBansResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.NextToken && { NextToken: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.ChannelBans && {
      ChannelBans: obj.ChannelBans.map((item) => models_0_1.ChannelBanSummary.filterSensitiveLog(item)),
    }),
  });
})((ListChannelBansResponse = exports.ListChannelBansResponse || (exports.ListChannelBansResponse = {})));
var ListChannelMembershipsRequest;
(function (ListChannelMembershipsRequest) {
  /**
   * @internal
   */
  ListChannelMembershipsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.NextToken && { NextToken: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (ListChannelMembershipsRequest =
    exports.ListChannelMembershipsRequest || (exports.ListChannelMembershipsRequest = {}))
);
var ListChannelMembershipsResponse;
(function (ListChannelMembershipsResponse) {
  /**
   * @internal
   */
  ListChannelMembershipsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ChannelMemberships && {
      ChannelMemberships: obj.ChannelMemberships.map((item) =>
        models_0_1.ChannelMembershipSummary.filterSensitiveLog(item)
      ),
    }),
    ...(obj.NextToken && { NextToken: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (ListChannelMembershipsResponse =
    exports.ListChannelMembershipsResponse || (exports.ListChannelMembershipsResponse = {}))
);
var ListChannelMembershipsForAppInstanceUserRequest;
(function (ListChannelMembershipsForAppInstanceUserRequest) {
  /**
   * @internal
   */
  ListChannelMembershipsForAppInstanceUserRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.NextToken && { NextToken: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (ListChannelMembershipsForAppInstanceUserRequest =
    exports.ListChannelMembershipsForAppInstanceUserRequest ||
    (exports.ListChannelMembershipsForAppInstanceUserRequest = {}))
);
var ListChannelMembershipsForAppInstanceUserResponse;
(function (ListChannelMembershipsForAppInstanceUserResponse) {
  /**
   * @internal
   */
  ListChannelMembershipsForAppInstanceUserResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ChannelMemberships && {
      ChannelMemberships: obj.ChannelMemberships.map((item) =>
        models_0_1.ChannelMembershipForAppInstanceUserSummary.filterSensitiveLog(item)
      ),
    }),
    ...(obj.NextToken && { NextToken: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (ListChannelMembershipsForAppInstanceUserResponse =
    exports.ListChannelMembershipsForAppInstanceUserResponse ||
    (exports.ListChannelMembershipsForAppInstanceUserResponse = {}))
);
var SortOrder;
(function (SortOrder) {
  SortOrder["ASCENDING"] = "ASCENDING";
  SortOrder["DESCENDING"] = "DESCENDING";
})((SortOrder = exports.SortOrder || (exports.SortOrder = {})));
var ListChannelMessagesRequest;
(function (ListChannelMessagesRequest) {
  /**
   * @internal
   */
  ListChannelMessagesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.NextToken && { NextToken: smithy_client_1.SENSITIVE_STRING }),
  });
})((ListChannelMessagesRequest = exports.ListChannelMessagesRequest || (exports.ListChannelMessagesRequest = {})));
var ListChannelMessagesResponse;
(function (ListChannelMessagesResponse) {
  /**
   * @internal
   */
  ListChannelMessagesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.NextToken && { NextToken: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.ChannelMessages && {
      ChannelMessages: obj.ChannelMessages.map((item) => models_0_1.ChannelMessageSummary.filterSensitiveLog(item)),
    }),
  });
})((ListChannelMessagesResponse = exports.ListChannelMessagesResponse || (exports.ListChannelMessagesResponse = {})));
var ListChannelModeratorsRequest;
(function (ListChannelModeratorsRequest) {
  /**
   * @internal
   */
  ListChannelModeratorsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.NextToken && { NextToken: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (ListChannelModeratorsRequest = exports.ListChannelModeratorsRequest || (exports.ListChannelModeratorsRequest = {}))
);
var ListChannelModeratorsResponse;
(function (ListChannelModeratorsResponse) {
  /**
   * @internal
   */
  ListChannelModeratorsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.NextToken && { NextToken: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.ChannelModerators && {
      ChannelModerators: obj.ChannelModerators.map((item) =>
        models_0_1.ChannelModeratorSummary.filterSensitiveLog(item)
      ),
    }),
  });
})(
  (ListChannelModeratorsResponse =
    exports.ListChannelModeratorsResponse || (exports.ListChannelModeratorsResponse = {}))
);
var ListChannelsRequest;
(function (ListChannelsRequest) {
  /**
   * @internal
   */
  ListChannelsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.NextToken && { NextToken: smithy_client_1.SENSITIVE_STRING }),
  });
})((ListChannelsRequest = exports.ListChannelsRequest || (exports.ListChannelsRequest = {})));
var ListChannelsResponse;
(function (ListChannelsResponse) {
  /**
   * @internal
   */
  ListChannelsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Channels && { Channels: obj.Channels.map((item) => models_0_1.ChannelSummary.filterSensitiveLog(item)) }),
    ...(obj.NextToken && { NextToken: smithy_client_1.SENSITIVE_STRING }),
  });
})((ListChannelsResponse = exports.ListChannelsResponse || (exports.ListChannelsResponse = {})));
var ListChannelsModeratedByAppInstanceUserRequest;
(function (ListChannelsModeratedByAppInstanceUserRequest) {
  /**
   * @internal
   */
  ListChannelsModeratedByAppInstanceUserRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.NextToken && { NextToken: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (ListChannelsModeratedByAppInstanceUserRequest =
    exports.ListChannelsModeratedByAppInstanceUserRequest ||
    (exports.ListChannelsModeratedByAppInstanceUserRequest = {}))
);
var ListChannelsModeratedByAppInstanceUserResponse;
(function (ListChannelsModeratedByAppInstanceUserResponse) {
  /**
   * @internal
   */
  ListChannelsModeratedByAppInstanceUserResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Channels && {
      Channels: obj.Channels.map((item) =>
        models_0_1.ChannelModeratedByAppInstanceUserSummary.filterSensitiveLog(item)
      ),
    }),
    ...(obj.NextToken && { NextToken: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (ListChannelsModeratedByAppInstanceUserResponse =
    exports.ListChannelsModeratedByAppInstanceUserResponse ||
    (exports.ListChannelsModeratedByAppInstanceUserResponse = {}))
);
var ListMeetingsRequest;
(function (ListMeetingsRequest) {
  /**
   * @internal
   */
  ListMeetingsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListMeetingsRequest = exports.ListMeetingsRequest || (exports.ListMeetingsRequest = {})));
var ListMeetingsResponse;
(function (ListMeetingsResponse) {
  /**
   * @internal
   */
  ListMeetingsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Meetings && { Meetings: obj.Meetings.map((item) => models_0_1.Meeting.filterSensitiveLog(item)) }),
  });
})((ListMeetingsResponse = exports.ListMeetingsResponse || (exports.ListMeetingsResponse = {})));
var ListMeetingTagsRequest;
(function (ListMeetingTagsRequest) {
  /**
   * @internal
   */
  ListMeetingTagsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListMeetingTagsRequest = exports.ListMeetingTagsRequest || (exports.ListMeetingTagsRequest = {})));
var ListMeetingTagsResponse;
(function (ListMeetingTagsResponse) {
  /**
   * @internal
   */
  ListMeetingTagsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => models_0_1.Tag.filterSensitiveLog(item)) }),
  });
})((ListMeetingTagsResponse = exports.ListMeetingTagsResponse || (exports.ListMeetingTagsResponse = {})));
var ListPhoneNumberOrdersRequest;
(function (ListPhoneNumberOrdersRequest) {
  /**
   * @internal
   */
  ListPhoneNumberOrdersRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListPhoneNumberOrdersRequest = exports.ListPhoneNumberOrdersRequest || (exports.ListPhoneNumberOrdersRequest = {}))
);
var ListPhoneNumberOrdersResponse;
(function (ListPhoneNumberOrdersResponse) {
  /**
   * @internal
   */
  ListPhoneNumberOrdersResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListPhoneNumberOrdersResponse =
    exports.ListPhoneNumberOrdersResponse || (exports.ListPhoneNumberOrdersResponse = {}))
);
var ListPhoneNumbersRequest;
(function (ListPhoneNumbersRequest) {
  /**
   * @internal
   */
  ListPhoneNumbersRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListPhoneNumbersRequest = exports.ListPhoneNumbersRequest || (exports.ListPhoneNumbersRequest = {})));
var ListPhoneNumbersResponse;
(function (ListPhoneNumbersResponse) {
  /**
   * @internal
   */
  ListPhoneNumbersResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.PhoneNumbers && {
      PhoneNumbers: obj.PhoneNumbers.map((item) => models_0_1.PhoneNumber.filterSensitiveLog(item)),
    }),
  });
})((ListPhoneNumbersResponse = exports.ListPhoneNumbersResponse || (exports.ListPhoneNumbersResponse = {})));
var ListProxySessionsRequest;
(function (ListProxySessionsRequest) {
  /**
   * @internal
   */
  ListProxySessionsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListProxySessionsRequest = exports.ListProxySessionsRequest || (exports.ListProxySessionsRequest = {})));
var ListProxySessionsResponse;
(function (ListProxySessionsResponse) {
  /**
   * @internal
   */
  ListProxySessionsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListProxySessionsResponse = exports.ListProxySessionsResponse || (exports.ListProxySessionsResponse = {})));
var ListRoomMembershipsRequest;
(function (ListRoomMembershipsRequest) {
  /**
   * @internal
   */
  ListRoomMembershipsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListRoomMembershipsRequest = exports.ListRoomMembershipsRequest || (exports.ListRoomMembershipsRequest = {})));
var ListRoomMembershipsResponse;
(function (ListRoomMembershipsResponse) {
  /**
   * @internal
   */
  ListRoomMembershipsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.RoomMemberships && {
      RoomMemberships: obj.RoomMemberships.map((item) => models_0_1.RoomMembership.filterSensitiveLog(item)),
    }),
  });
})((ListRoomMembershipsResponse = exports.ListRoomMembershipsResponse || (exports.ListRoomMembershipsResponse = {})));
var ListRoomsRequest;
(function (ListRoomsRequest) {
  /**
   * @internal
   */
  ListRoomsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListRoomsRequest = exports.ListRoomsRequest || (exports.ListRoomsRequest = {})));
var ListRoomsResponse;
(function (ListRoomsResponse) {
  /**
   * @internal
   */
  ListRoomsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Rooms && { Rooms: obj.Rooms.map((item) => models_0_1.Room.filterSensitiveLog(item)) }),
  });
})((ListRoomsResponse = exports.ListRoomsResponse || (exports.ListRoomsResponse = {})));
var ListSipMediaApplicationsRequest;
(function (ListSipMediaApplicationsRequest) {
  /**
   * @internal
   */
  ListSipMediaApplicationsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListSipMediaApplicationsRequest =
    exports.ListSipMediaApplicationsRequest || (exports.ListSipMediaApplicationsRequest = {}))
);
var ListSipMediaApplicationsResponse;
(function (ListSipMediaApplicationsResponse) {
  /**
   * @internal
   */
  ListSipMediaApplicationsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListSipMediaApplicationsResponse =
    exports.ListSipMediaApplicationsResponse || (exports.ListSipMediaApplicationsResponse = {}))
);
var ListSipRulesRequest;
(function (ListSipRulesRequest) {
  /**
   * @internal
   */
  ListSipRulesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListSipRulesRequest = exports.ListSipRulesRequest || (exports.ListSipRulesRequest = {})));
var ListSipRulesResponse;
(function (ListSipRulesResponse) {
  /**
   * @internal
   */
  ListSipRulesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListSipRulesResponse = exports.ListSipRulesResponse || (exports.ListSipRulesResponse = {})));
var ListSupportedPhoneNumberCountriesRequest;
(function (ListSupportedPhoneNumberCountriesRequest) {
  /**
   * @internal
   */
  ListSupportedPhoneNumberCountriesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListSupportedPhoneNumberCountriesRequest =
    exports.ListSupportedPhoneNumberCountriesRequest || (exports.ListSupportedPhoneNumberCountriesRequest = {}))
);
var PhoneNumberCountry;
(function (PhoneNumberCountry) {
  /**
   * @internal
   */
  PhoneNumberCountry.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PhoneNumberCountry = exports.PhoneNumberCountry || (exports.PhoneNumberCountry = {})));
var ListSupportedPhoneNumberCountriesResponse;
(function (ListSupportedPhoneNumberCountriesResponse) {
  /**
   * @internal
   */
  ListSupportedPhoneNumberCountriesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListSupportedPhoneNumberCountriesResponse =
    exports.ListSupportedPhoneNumberCountriesResponse || (exports.ListSupportedPhoneNumberCountriesResponse = {}))
);
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
  /**
   * @internal
   */
  ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ResourceARN && { ResourceARN: smithy_client_1.SENSITIVE_STRING }),
  });
})((ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {})));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
  /**
   * @internal
   */
  ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => models_0_1.Tag.filterSensitiveLog(item)) }),
  });
})((ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {})));
var ListUsersRequest;
(function (ListUsersRequest) {
  /**
   * @internal
   */
  ListUsersRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UserEmail && { UserEmail: smithy_client_1.SENSITIVE_STRING }),
  });
})((ListUsersRequest = exports.ListUsersRequest || (exports.ListUsersRequest = {})));
var ListUsersResponse;
(function (ListUsersResponse) {
  /**
   * @internal
   */
  ListUsersResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Users && { Users: obj.Users.map((item) => models_0_1.User.filterSensitiveLog(item)) }),
  });
})((ListUsersResponse = exports.ListUsersResponse || (exports.ListUsersResponse = {})));
var ListVoiceConnectorGroupsRequest;
(function (ListVoiceConnectorGroupsRequest) {
  /**
   * @internal
   */
  ListVoiceConnectorGroupsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListVoiceConnectorGroupsRequest =
    exports.ListVoiceConnectorGroupsRequest || (exports.ListVoiceConnectorGroupsRequest = {}))
);
var ListVoiceConnectorGroupsResponse;
(function (ListVoiceConnectorGroupsResponse) {
  /**
   * @internal
   */
  ListVoiceConnectorGroupsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListVoiceConnectorGroupsResponse =
    exports.ListVoiceConnectorGroupsResponse || (exports.ListVoiceConnectorGroupsResponse = {}))
);
var ListVoiceConnectorsRequest;
(function (ListVoiceConnectorsRequest) {
  /**
   * @internal
   */
  ListVoiceConnectorsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListVoiceConnectorsRequest = exports.ListVoiceConnectorsRequest || (exports.ListVoiceConnectorsRequest = {})));
var ListVoiceConnectorsResponse;
(function (ListVoiceConnectorsResponse) {
  /**
   * @internal
   */
  ListVoiceConnectorsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListVoiceConnectorsResponse = exports.ListVoiceConnectorsResponse || (exports.ListVoiceConnectorsResponse = {})));
var ListVoiceConnectorTerminationCredentialsRequest;
(function (ListVoiceConnectorTerminationCredentialsRequest) {
  /**
   * @internal
   */
  ListVoiceConnectorTerminationCredentialsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListVoiceConnectorTerminationCredentialsRequest =
    exports.ListVoiceConnectorTerminationCredentialsRequest ||
    (exports.ListVoiceConnectorTerminationCredentialsRequest = {}))
);
var ListVoiceConnectorTerminationCredentialsResponse;
(function (ListVoiceConnectorTerminationCredentialsResponse) {
  /**
   * @internal
   */
  ListVoiceConnectorTerminationCredentialsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Usernames && { Usernames: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (ListVoiceConnectorTerminationCredentialsResponse =
    exports.ListVoiceConnectorTerminationCredentialsResponse ||
    (exports.ListVoiceConnectorTerminationCredentialsResponse = {}))
);
var LogoutUserRequest;
(function (LogoutUserRequest) {
  /**
   * @internal
   */
  LogoutUserRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LogoutUserRequest = exports.LogoutUserRequest || (exports.LogoutUserRequest = {})));
var LogoutUserResponse;
(function (LogoutUserResponse) {
  /**
   * @internal
   */
  LogoutUserResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LogoutUserResponse = exports.LogoutUserResponse || (exports.LogoutUserResponse = {})));
var PutAppInstanceRetentionSettingsRequest;
(function (PutAppInstanceRetentionSettingsRequest) {
  /**
   * @internal
   */
  PutAppInstanceRetentionSettingsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutAppInstanceRetentionSettingsRequest =
    exports.PutAppInstanceRetentionSettingsRequest || (exports.PutAppInstanceRetentionSettingsRequest = {}))
);
var PutAppInstanceRetentionSettingsResponse;
(function (PutAppInstanceRetentionSettingsResponse) {
  /**
   * @internal
   */
  PutAppInstanceRetentionSettingsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutAppInstanceRetentionSettingsResponse =
    exports.PutAppInstanceRetentionSettingsResponse || (exports.PutAppInstanceRetentionSettingsResponse = {}))
);
var PutAppInstanceStreamingConfigurationsRequest;
(function (PutAppInstanceStreamingConfigurationsRequest) {
  /**
   * @internal
   */
  PutAppInstanceStreamingConfigurationsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AppInstanceStreamingConfigurations && {
      AppInstanceStreamingConfigurations: obj.AppInstanceStreamingConfigurations.map((item) =>
        models_0_1.AppInstanceStreamingConfiguration.filterSensitiveLog(item)
      ),
    }),
  });
})(
  (PutAppInstanceStreamingConfigurationsRequest =
    exports.PutAppInstanceStreamingConfigurationsRequest || (exports.PutAppInstanceStreamingConfigurationsRequest = {}))
);
var PutAppInstanceStreamingConfigurationsResponse;
(function (PutAppInstanceStreamingConfigurationsResponse) {
  /**
   * @internal
   */
  PutAppInstanceStreamingConfigurationsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AppInstanceStreamingConfigurations && {
      AppInstanceStreamingConfigurations: obj.AppInstanceStreamingConfigurations.map((item) =>
        models_0_1.AppInstanceStreamingConfiguration.filterSensitiveLog(item)
      ),
    }),
  });
})(
  (PutAppInstanceStreamingConfigurationsResponse =
    exports.PutAppInstanceStreamingConfigurationsResponse ||
    (exports.PutAppInstanceStreamingConfigurationsResponse = {}))
);
var PutEventsConfigurationRequest;
(function (PutEventsConfigurationRequest) {
  /**
   * @internal
   */
  PutEventsConfigurationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.OutboundEventsHTTPSEndpoint && { OutboundEventsHTTPSEndpoint: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.LambdaFunctionArn && { LambdaFunctionArn: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (PutEventsConfigurationRequest =
    exports.PutEventsConfigurationRequest || (exports.PutEventsConfigurationRequest = {}))
);
var PutEventsConfigurationResponse;
(function (PutEventsConfigurationResponse) {
  /**
   * @internal
   */
  PutEventsConfigurationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.EventsConfiguration && {
      EventsConfiguration: models_0_1.EventsConfiguration.filterSensitiveLog(obj.EventsConfiguration),
    }),
  });
})(
  (PutEventsConfigurationResponse =
    exports.PutEventsConfigurationResponse || (exports.PutEventsConfigurationResponse = {}))
);
var PutRetentionSettingsRequest;
(function (PutRetentionSettingsRequest) {
  /**
   * @internal
   */
  PutRetentionSettingsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PutRetentionSettingsRequest = exports.PutRetentionSettingsRequest || (exports.PutRetentionSettingsRequest = {})));
var PutRetentionSettingsResponse;
(function (PutRetentionSettingsResponse) {
  /**
   * @internal
   */
  PutRetentionSettingsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutRetentionSettingsResponse = exports.PutRetentionSettingsResponse || (exports.PutRetentionSettingsResponse = {}))
);
var PutSipMediaApplicationLoggingConfigurationRequest;
(function (PutSipMediaApplicationLoggingConfigurationRequest) {
  /**
   * @internal
   */
  PutSipMediaApplicationLoggingConfigurationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutSipMediaApplicationLoggingConfigurationRequest =
    exports.PutSipMediaApplicationLoggingConfigurationRequest ||
    (exports.PutSipMediaApplicationLoggingConfigurationRequest = {}))
);
var PutSipMediaApplicationLoggingConfigurationResponse;
(function (PutSipMediaApplicationLoggingConfigurationResponse) {
  /**
   * @internal
   */
  PutSipMediaApplicationLoggingConfigurationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutSipMediaApplicationLoggingConfigurationResponse =
    exports.PutSipMediaApplicationLoggingConfigurationResponse ||
    (exports.PutSipMediaApplicationLoggingConfigurationResponse = {}))
);
var PutVoiceConnectorEmergencyCallingConfigurationRequest;
(function (PutVoiceConnectorEmergencyCallingConfigurationRequest) {
  /**
   * @internal
   */
  PutVoiceConnectorEmergencyCallingConfigurationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.EmergencyCallingConfiguration && {
      EmergencyCallingConfiguration: models_0_1.EmergencyCallingConfiguration.filterSensitiveLog(
        obj.EmergencyCallingConfiguration
      ),
    }),
  });
})(
  (PutVoiceConnectorEmergencyCallingConfigurationRequest =
    exports.PutVoiceConnectorEmergencyCallingConfigurationRequest ||
    (exports.PutVoiceConnectorEmergencyCallingConfigurationRequest = {}))
);
var PutVoiceConnectorEmergencyCallingConfigurationResponse;
(function (PutVoiceConnectorEmergencyCallingConfigurationResponse) {
  /**
   * @internal
   */
  PutVoiceConnectorEmergencyCallingConfigurationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.EmergencyCallingConfiguration && {
      EmergencyCallingConfiguration: models_0_1.EmergencyCallingConfiguration.filterSensitiveLog(
        obj.EmergencyCallingConfiguration
      ),
    }),
  });
})(
  (PutVoiceConnectorEmergencyCallingConfigurationResponse =
    exports.PutVoiceConnectorEmergencyCallingConfigurationResponse ||
    (exports.PutVoiceConnectorEmergencyCallingConfigurationResponse = {}))
);
var PutVoiceConnectorLoggingConfigurationRequest;
(function (PutVoiceConnectorLoggingConfigurationRequest) {
  /**
   * @internal
   */
  PutVoiceConnectorLoggingConfigurationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutVoiceConnectorLoggingConfigurationRequest =
    exports.PutVoiceConnectorLoggingConfigurationRequest || (exports.PutVoiceConnectorLoggingConfigurationRequest = {}))
);
var PutVoiceConnectorLoggingConfigurationResponse;
(function (PutVoiceConnectorLoggingConfigurationResponse) {
  /**
   * @internal
   */
  PutVoiceConnectorLoggingConfigurationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutVoiceConnectorLoggingConfigurationResponse =
    exports.PutVoiceConnectorLoggingConfigurationResponse ||
    (exports.PutVoiceConnectorLoggingConfigurationResponse = {}))
);
var PutVoiceConnectorOriginationRequest;
(function (PutVoiceConnectorOriginationRequest) {
  /**
   * @internal
   */
  PutVoiceConnectorOriginationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutVoiceConnectorOriginationRequest =
    exports.PutVoiceConnectorOriginationRequest || (exports.PutVoiceConnectorOriginationRequest = {}))
);
var PutVoiceConnectorOriginationResponse;
(function (PutVoiceConnectorOriginationResponse) {
  /**
   * @internal
   */
  PutVoiceConnectorOriginationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutVoiceConnectorOriginationResponse =
    exports.PutVoiceConnectorOriginationResponse || (exports.PutVoiceConnectorOriginationResponse = {}))
);
var PutVoiceConnectorProxyRequest;
(function (PutVoiceConnectorProxyRequest) {
  /**
   * @internal
   */
  PutVoiceConnectorProxyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.FallBackPhoneNumber && { FallBackPhoneNumber: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (PutVoiceConnectorProxyRequest =
    exports.PutVoiceConnectorProxyRequest || (exports.PutVoiceConnectorProxyRequest = {}))
);
var PutVoiceConnectorProxyResponse;
(function (PutVoiceConnectorProxyResponse) {
  /**
   * @internal
   */
  PutVoiceConnectorProxyResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Proxy && { Proxy: models_0_1.Proxy.filterSensitiveLog(obj.Proxy) }),
  });
})(
  (PutVoiceConnectorProxyResponse =
    exports.PutVoiceConnectorProxyResponse || (exports.PutVoiceConnectorProxyResponse = {}))
);
var PutVoiceConnectorStreamingConfigurationRequest;
(function (PutVoiceConnectorStreamingConfigurationRequest) {
  /**
   * @internal
   */
  PutVoiceConnectorStreamingConfigurationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutVoiceConnectorStreamingConfigurationRequest =
    exports.PutVoiceConnectorStreamingConfigurationRequest ||
    (exports.PutVoiceConnectorStreamingConfigurationRequest = {}))
);
var PutVoiceConnectorStreamingConfigurationResponse;
(function (PutVoiceConnectorStreamingConfigurationResponse) {
  /**
   * @internal
   */
  PutVoiceConnectorStreamingConfigurationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutVoiceConnectorStreamingConfigurationResponse =
    exports.PutVoiceConnectorStreamingConfigurationResponse ||
    (exports.PutVoiceConnectorStreamingConfigurationResponse = {}))
);
var PutVoiceConnectorTerminationRequest;
(function (PutVoiceConnectorTerminationRequest) {
  /**
   * @internal
   */
  PutVoiceConnectorTerminationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Termination && { Termination: Termination.filterSensitiveLog(obj.Termination) }),
  });
})(
  (PutVoiceConnectorTerminationRequest =
    exports.PutVoiceConnectorTerminationRequest || (exports.PutVoiceConnectorTerminationRequest = {}))
);
var PutVoiceConnectorTerminationResponse;
(function (PutVoiceConnectorTerminationResponse) {
  /**
   * @internal
   */
  PutVoiceConnectorTerminationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Termination && { Termination: Termination.filterSensitiveLog(obj.Termination) }),
  });
})(
  (PutVoiceConnectorTerminationResponse =
    exports.PutVoiceConnectorTerminationResponse || (exports.PutVoiceConnectorTerminationResponse = {}))
);
var PutVoiceConnectorTerminationCredentialsRequest;
(function (PutVoiceConnectorTerminationCredentialsRequest) {
  /**
   * @internal
   */
  PutVoiceConnectorTerminationCredentialsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Credentials && {
      Credentials: obj.Credentials.map((item) => models_0_1.Credential.filterSensitiveLog(item)),
    }),
  });
})(
  (PutVoiceConnectorTerminationCredentialsRequest =
    exports.PutVoiceConnectorTerminationCredentialsRequest ||
    (exports.PutVoiceConnectorTerminationCredentialsRequest = {}))
);
var RedactChannelMessageRequest;
(function (RedactChannelMessageRequest) {
  /**
   * @internal
   */
  RedactChannelMessageRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RedactChannelMessageRequest = exports.RedactChannelMessageRequest || (exports.RedactChannelMessageRequest = {})));
var RedactChannelMessageResponse;
(function (RedactChannelMessageResponse) {
  /**
   * @internal
   */
  RedactChannelMessageResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RedactChannelMessageResponse = exports.RedactChannelMessageResponse || (exports.RedactChannelMessageResponse = {}))
);
var RedactConversationMessageRequest;
(function (RedactConversationMessageRequest) {
  /**
   * @internal
   */
  RedactConversationMessageRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RedactConversationMessageRequest =
    exports.RedactConversationMessageRequest || (exports.RedactConversationMessageRequest = {}))
);
var RedactConversationMessageResponse;
(function (RedactConversationMessageResponse) {
  /**
   * @internal
   */
  RedactConversationMessageResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RedactConversationMessageResponse =
    exports.RedactConversationMessageResponse || (exports.RedactConversationMessageResponse = {}))
);
var RedactRoomMessageRequest;
(function (RedactRoomMessageRequest) {
  /**
   * @internal
   */
  RedactRoomMessageRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RedactRoomMessageRequest = exports.RedactRoomMessageRequest || (exports.RedactRoomMessageRequest = {})));
var RedactRoomMessageResponse;
(function (RedactRoomMessageResponse) {
  /**
   * @internal
   */
  RedactRoomMessageResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RedactRoomMessageResponse = exports.RedactRoomMessageResponse || (exports.RedactRoomMessageResponse = {})));
var RegenerateSecurityTokenRequest;
(function (RegenerateSecurityTokenRequest) {
  /**
   * @internal
   */
  RegenerateSecurityTokenRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RegenerateSecurityTokenRequest =
    exports.RegenerateSecurityTokenRequest || (exports.RegenerateSecurityTokenRequest = {}))
);
var RegenerateSecurityTokenResponse;
(function (RegenerateSecurityTokenResponse) {
  /**
   * @internal
   */
  RegenerateSecurityTokenResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Bot && { Bot: models_0_1.Bot.filterSensitiveLog(obj.Bot) }),
  });
})(
  (RegenerateSecurityTokenResponse =
    exports.RegenerateSecurityTokenResponse || (exports.RegenerateSecurityTokenResponse = {}))
);
var ResetPersonalPINRequest;
(function (ResetPersonalPINRequest) {
  /**
   * @internal
   */
  ResetPersonalPINRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResetPersonalPINRequest = exports.ResetPersonalPINRequest || (exports.ResetPersonalPINRequest = {})));
var ResetPersonalPINResponse;
(function (ResetPersonalPINResponse) {
  /**
   * @internal
   */
  ResetPersonalPINResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.User && { User: models_0_1.User.filterSensitiveLog(obj.User) }),
  });
})((ResetPersonalPINResponse = exports.ResetPersonalPINResponse || (exports.ResetPersonalPINResponse = {})));
var RestorePhoneNumberRequest;
(function (RestorePhoneNumberRequest) {
  /**
   * @internal
   */
  RestorePhoneNumberRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RestorePhoneNumberRequest = exports.RestorePhoneNumberRequest || (exports.RestorePhoneNumberRequest = {})));
var RestorePhoneNumberResponse;
(function (RestorePhoneNumberResponse) {
  /**
   * @internal
   */
  RestorePhoneNumberResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.PhoneNumber && { PhoneNumber: models_0_1.PhoneNumber.filterSensitiveLog(obj.PhoneNumber) }),
  });
})((RestorePhoneNumberResponse = exports.RestorePhoneNumberResponse || (exports.RestorePhoneNumberResponse = {})));
var SearchAvailablePhoneNumbersRequest;
(function (SearchAvailablePhoneNumbersRequest) {
  /**
   * @internal
   */
  SearchAvailablePhoneNumbersRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (SearchAvailablePhoneNumbersRequest =
    exports.SearchAvailablePhoneNumbersRequest || (exports.SearchAvailablePhoneNumbersRequest = {}))
);
var SearchAvailablePhoneNumbersResponse;
(function (SearchAvailablePhoneNumbersResponse) {
  /**
   * @internal
   */
  SearchAvailablePhoneNumbersResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (SearchAvailablePhoneNumbersResponse =
    exports.SearchAvailablePhoneNumbersResponse || (exports.SearchAvailablePhoneNumbersResponse = {}))
);
var SendChannelMessageRequest;
(function (SendChannelMessageRequest) {
  /**
   * @internal
   */
  SendChannelMessageRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Content && { Content: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.ClientRequestToken && { ClientRequestToken: smithy_client_1.SENSITIVE_STRING }),
  });
})((SendChannelMessageRequest = exports.SendChannelMessageRequest || (exports.SendChannelMessageRequest = {})));
var SendChannelMessageResponse;
(function (SendChannelMessageResponse) {
  /**
   * @internal
   */
  SendChannelMessageResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SendChannelMessageResponse = exports.SendChannelMessageResponse || (exports.SendChannelMessageResponse = {})));
var TagAttendeeRequest;
(function (TagAttendeeRequest) {
  /**
   * @internal
   */
  TagAttendeeRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => models_0_1.Tag.filterSensitiveLog(item)) }),
  });
})((TagAttendeeRequest = exports.TagAttendeeRequest || (exports.TagAttendeeRequest = {})));
var TagMeetingRequest;
(function (TagMeetingRequest) {
  /**
   * @internal
   */
  TagMeetingRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => models_0_1.Tag.filterSensitiveLog(item)) }),
  });
})((TagMeetingRequest = exports.TagMeetingRequest || (exports.TagMeetingRequest = {})));
var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ResourceARN && { ResourceARN: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => models_0_1.Tag.filterSensitiveLog(item)) }),
  });
})((TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {})));
var UntagAttendeeRequest;
(function (UntagAttendeeRequest) {
  /**
   * @internal
   */
  UntagAttendeeRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.TagKeys && { TagKeys: smithy_client_1.SENSITIVE_STRING }),
  });
})((UntagAttendeeRequest = exports.UntagAttendeeRequest || (exports.UntagAttendeeRequest = {})));
var UntagMeetingRequest;
(function (UntagMeetingRequest) {
  /**
   * @internal
   */
  UntagMeetingRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.TagKeys && { TagKeys: smithy_client_1.SENSITIVE_STRING }),
  });
})((UntagMeetingRequest = exports.UntagMeetingRequest || (exports.UntagMeetingRequest = {})));
var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ResourceARN && { ResourceARN: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.TagKeys && { TagKeys: smithy_client_1.SENSITIVE_STRING }),
  });
})((UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {})));
var UpdateAccountRequest;
(function (UpdateAccountRequest) {
  /**
   * @internal
   */
  UpdateAccountRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateAccountRequest = exports.UpdateAccountRequest || (exports.UpdateAccountRequest = {})));
var UpdateAccountResponse;
(function (UpdateAccountResponse) {
  /**
   * @internal
   */
  UpdateAccountResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateAccountResponse = exports.UpdateAccountResponse || (exports.UpdateAccountResponse = {})));
var UpdateAccountSettingsRequest;
(function (UpdateAccountSettingsRequest) {
  /**
   * @internal
   */
  UpdateAccountSettingsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateAccountSettingsRequest = exports.UpdateAccountSettingsRequest || (exports.UpdateAccountSettingsRequest = {}))
);
var UpdateAccountSettingsResponse;
(function (UpdateAccountSettingsResponse) {
  /**
   * @internal
   */
  UpdateAccountSettingsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateAccountSettingsResponse =
    exports.UpdateAccountSettingsResponse || (exports.UpdateAccountSettingsResponse = {}))
);
var UpdateAppInstanceRequest;
(function (UpdateAppInstanceRequest) {
  /**
   * @internal
   */
  UpdateAppInstanceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Name && { Name: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: smithy_client_1.SENSITIVE_STRING }),
  });
})((UpdateAppInstanceRequest = exports.UpdateAppInstanceRequest || (exports.UpdateAppInstanceRequest = {})));
var UpdateAppInstanceResponse;
(function (UpdateAppInstanceResponse) {
  /**
   * @internal
   */
  UpdateAppInstanceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateAppInstanceResponse = exports.UpdateAppInstanceResponse || (exports.UpdateAppInstanceResponse = {})));
var UpdateAppInstanceUserRequest;
(function (UpdateAppInstanceUserRequest) {
  /**
   * @internal
   */
  UpdateAppInstanceUserRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Name && { Name: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (UpdateAppInstanceUserRequest = exports.UpdateAppInstanceUserRequest || (exports.UpdateAppInstanceUserRequest = {}))
);
var UpdateAppInstanceUserResponse;
(function (UpdateAppInstanceUserResponse) {
  /**
   * @internal
   */
  UpdateAppInstanceUserResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateAppInstanceUserResponse =
    exports.UpdateAppInstanceUserResponse || (exports.UpdateAppInstanceUserResponse = {}))
);
var UpdateBotRequest;
(function (UpdateBotRequest) {
  /**
   * @internal
   */
  UpdateBotRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateBotRequest = exports.UpdateBotRequest || (exports.UpdateBotRequest = {})));
var UpdateBotResponse;
(function (UpdateBotResponse) {
  /**
   * @internal
   */
  UpdateBotResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Bot && { Bot: models_0_1.Bot.filterSensitiveLog(obj.Bot) }),
  });
})((UpdateBotResponse = exports.UpdateBotResponse || (exports.UpdateBotResponse = {})));
var UpdateChannelRequest;
(function (UpdateChannelRequest) {
  /**
   * @internal
   */
  UpdateChannelRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Name && { Name: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: smithy_client_1.SENSITIVE_STRING }),
  });
})((UpdateChannelRequest = exports.UpdateChannelRequest || (exports.UpdateChannelRequest = {})));
var UpdateChannelResponse;
(function (UpdateChannelResponse) {
  /**
   * @internal
   */
  UpdateChannelResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateChannelResponse = exports.UpdateChannelResponse || (exports.UpdateChannelResponse = {})));
var UpdateChannelMessageRequest;
(function (UpdateChannelMessageRequest) {
  /**
   * @internal
   */
  UpdateChannelMessageRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Content && { Content: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: smithy_client_1.SENSITIVE_STRING }),
  });
})((UpdateChannelMessageRequest = exports.UpdateChannelMessageRequest || (exports.UpdateChannelMessageRequest = {})));
var UpdateChannelMessageResponse;
(function (UpdateChannelMessageResponse) {
  /**
   * @internal
   */
  UpdateChannelMessageResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateChannelMessageResponse = exports.UpdateChannelMessageResponse || (exports.UpdateChannelMessageResponse = {}))
);
var UpdateChannelReadMarkerRequest;
(function (UpdateChannelReadMarkerRequest) {
  /**
   * @internal
   */
  UpdateChannelReadMarkerRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateChannelReadMarkerRequest =
    exports.UpdateChannelReadMarkerRequest || (exports.UpdateChannelReadMarkerRequest = {}))
);
var UpdateChannelReadMarkerResponse;
(function (UpdateChannelReadMarkerResponse) {
  /**
   * @internal
   */
  UpdateChannelReadMarkerResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateChannelReadMarkerResponse =
    exports.UpdateChannelReadMarkerResponse || (exports.UpdateChannelReadMarkerResponse = {}))
);
var UpdateGlobalSettingsRequest;
(function (UpdateGlobalSettingsRequest) {
  /**
   * @internal
   */
  UpdateGlobalSettingsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateGlobalSettingsRequest = exports.UpdateGlobalSettingsRequest || (exports.UpdateGlobalSettingsRequest = {})));
var UpdatePhoneNumberRequest;
(function (UpdatePhoneNumberRequest) {
  /**
   * @internal
   */
  UpdatePhoneNumberRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.CallingName && { CallingName: smithy_client_1.SENSITIVE_STRING }),
  });
})((UpdatePhoneNumberRequest = exports.UpdatePhoneNumberRequest || (exports.UpdatePhoneNumberRequest = {})));
var UpdatePhoneNumberResponse;
(function (UpdatePhoneNumberResponse) {
  /**
   * @internal
   */
  UpdatePhoneNumberResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.PhoneNumber && { PhoneNumber: models_0_1.PhoneNumber.filterSensitiveLog(obj.PhoneNumber) }),
  });
})((UpdatePhoneNumberResponse = exports.UpdatePhoneNumberResponse || (exports.UpdatePhoneNumberResponse = {})));
var UpdatePhoneNumberSettingsRequest;
(function (UpdatePhoneNumberSettingsRequest) {
  /**
   * @internal
   */
  UpdatePhoneNumberSettingsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.CallingName && { CallingName: smithy_client_1.SENSITIVE_STRING }),
  });
})(
  (UpdatePhoneNumberSettingsRequest =
    exports.UpdatePhoneNumberSettingsRequest || (exports.UpdatePhoneNumberSettingsRequest = {}))
);
var UpdateProxySessionRequest;
(function (UpdateProxySessionRequest) {
  /**
   * @internal
   */
  UpdateProxySessionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateProxySessionRequest = exports.UpdateProxySessionRequest || (exports.UpdateProxySessionRequest = {})));
var UpdateProxySessionResponse;
(function (UpdateProxySessionResponse) {
  /**
   * @internal
   */
  UpdateProxySessionResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ProxySession && { ProxySession: models_0_1.ProxySession.filterSensitiveLog(obj.ProxySession) }),
  });
})((UpdateProxySessionResponse = exports.UpdateProxySessionResponse || (exports.UpdateProxySessionResponse = {})));
var UpdateRoomRequest;
(function (UpdateRoomRequest) {
  /**
   * @internal
   */
  UpdateRoomRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Name && { Name: smithy_client_1.SENSITIVE_STRING }),
  });
})((UpdateRoomRequest = exports.UpdateRoomRequest || (exports.UpdateRoomRequest = {})));
var UpdateRoomResponse;
(function (UpdateRoomResponse) {
  /**
   * @internal
   */
  UpdateRoomResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Room && { Room: models_0_1.Room.filterSensitiveLog(obj.Room) }),
  });
})((UpdateRoomResponse = exports.UpdateRoomResponse || (exports.UpdateRoomResponse = {})));
var UpdateRoomMembershipRequest;
(function (UpdateRoomMembershipRequest) {
  /**
   * @internal
   */
  UpdateRoomMembershipRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateRoomMembershipRequest = exports.UpdateRoomMembershipRequest || (exports.UpdateRoomMembershipRequest = {})));
var UpdateRoomMembershipResponse;
(function (UpdateRoomMembershipResponse) {
  /**
   * @internal
   */
  UpdateRoomMembershipResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.RoomMembership && { RoomMembership: models_0_1.RoomMembership.filterSensitiveLog(obj.RoomMembership) }),
  });
})(
  (UpdateRoomMembershipResponse = exports.UpdateRoomMembershipResponse || (exports.UpdateRoomMembershipResponse = {}))
);
var UpdateSipMediaApplicationRequest;
(function (UpdateSipMediaApplicationRequest) {
  /**
   * @internal
   */
  UpdateSipMediaApplicationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Endpoints && {
      Endpoints: obj.Endpoints.map((item) => models_0_1.SipMediaApplicationEndpoint.filterSensitiveLog(item)),
    }),
  });
})(
  (UpdateSipMediaApplicationRequest =
    exports.UpdateSipMediaApplicationRequest || (exports.UpdateSipMediaApplicationRequest = {}))
);
var UpdateSipMediaApplicationResponse;
(function (UpdateSipMediaApplicationResponse) {
  /**
   * @internal
   */
  UpdateSipMediaApplicationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SipMediaApplication && {
      SipMediaApplication: models_0_1.SipMediaApplication.filterSensitiveLog(obj.SipMediaApplication),
    }),
  });
})(
  (UpdateSipMediaApplicationResponse =
    exports.UpdateSipMediaApplicationResponse || (exports.UpdateSipMediaApplicationResponse = {}))
);
var UpdateSipRuleRequest;
(function (UpdateSipRuleRequest) {
  /**
   * @internal
   */
  UpdateSipRuleRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateSipRuleRequest = exports.UpdateSipRuleRequest || (exports.UpdateSipRuleRequest = {})));
var UpdateSipRuleResponse;
(function (UpdateSipRuleResponse) {
  /**
   * @internal
   */
  UpdateSipRuleResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateSipRuleResponse = exports.UpdateSipRuleResponse || (exports.UpdateSipRuleResponse = {})));
var UpdateUserRequest;
(function (UpdateUserRequest) {
  /**
   * @internal
   */
  UpdateUserRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AlexaForBusinessMetadata && {
      AlexaForBusinessMetadata: models_0_1.AlexaForBusinessMetadata.filterSensitiveLog(obj.AlexaForBusinessMetadata),
    }),
  });
})((UpdateUserRequest = exports.UpdateUserRequest || (exports.UpdateUserRequest = {})));
var UpdateUserResponse;
(function (UpdateUserResponse) {
  /**
   * @internal
   */
  UpdateUserResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.User && { User: models_0_1.User.filterSensitiveLog(obj.User) }),
  });
})((UpdateUserResponse = exports.UpdateUserResponse || (exports.UpdateUserResponse = {})));
var UpdateUserSettingsRequest;
(function (UpdateUserSettingsRequest) {
  /**
   * @internal
   */
  UpdateUserSettingsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateUserSettingsRequest = exports.UpdateUserSettingsRequest || (exports.UpdateUserSettingsRequest = {})));
var UpdateVoiceConnectorRequest;
(function (UpdateVoiceConnectorRequest) {
  /**
   * @internal
   */
  UpdateVoiceConnectorRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateVoiceConnectorRequest = exports.UpdateVoiceConnectorRequest || (exports.UpdateVoiceConnectorRequest = {})));
var UpdateVoiceConnectorResponse;
(function (UpdateVoiceConnectorResponse) {
  /**
   * @internal
   */
  UpdateVoiceConnectorResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateVoiceConnectorResponse = exports.UpdateVoiceConnectorResponse || (exports.UpdateVoiceConnectorResponse = {}))
);
var UpdateVoiceConnectorGroupRequest;
(function (UpdateVoiceConnectorGroupRequest) {
  /**
   * @internal
   */
  UpdateVoiceConnectorGroupRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateVoiceConnectorGroupRequest =
    exports.UpdateVoiceConnectorGroupRequest || (exports.UpdateVoiceConnectorGroupRequest = {}))
);
var UpdateVoiceConnectorGroupResponse;
(function (UpdateVoiceConnectorGroupResponse) {
  /**
   * @internal
   */
  UpdateVoiceConnectorGroupResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateVoiceConnectorGroupResponse =
    exports.UpdateVoiceConnectorGroupResponse || (exports.UpdateVoiceConnectorGroupResponse = {}))
);
//# sourceMappingURL=models_1.js.map
