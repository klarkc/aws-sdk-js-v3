import { __assign } from "tslib";
import {
  AlexaForBusinessMetadata,
  AppInstanceAdminSummary,
  AppInstanceStreamingConfiguration,
  AppInstanceSummary,
  AppInstanceUserSummary,
  Attendee,
  Bot,
  ChannelBanSummary,
  ChannelMembershipForAppInstanceUserSummary,
  ChannelMembershipSummary,
  ChannelMessageSummary,
  ChannelModeratedByAppInstanceUserSummary,
  ChannelModeratorSummary,
  ChannelSummary,
  Credential,
  EmergencyCallingConfiguration,
  EventsConfiguration,
  Meeting,
  PhoneNumber,
  Proxy,
  ProxySession,
  Room,
  RoomMembership,
  SipMediaApplication,
  SipMediaApplicationEndpoint,
  Tag,
  User,
} from "./models_0";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var NotificationTarget;
(function (NotificationTarget) {
  NotificationTarget["EventBridge"] = "EventBridge";
  NotificationTarget["SNS"] = "SNS";
  NotificationTarget["SQS"] = "SQS";
})(NotificationTarget || (NotificationTarget = {}));
export var StreamingNotificationTarget;
(function (StreamingNotificationTarget) {
  /**
   * @internal
   */
  StreamingNotificationTarget.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StreamingNotificationTarget || (StreamingNotificationTarget = {}));
export var StreamingConfiguration;
(function (StreamingConfiguration) {
  /**
   * @internal
   */
  StreamingConfiguration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StreamingConfiguration || (StreamingConfiguration = {}));
export var GetVoiceConnectorStreamingConfigurationResponse;
(function (GetVoiceConnectorStreamingConfigurationResponse) {
  /**
   * @internal
   */
  GetVoiceConnectorStreamingConfigurationResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetVoiceConnectorStreamingConfigurationResponse || (GetVoiceConnectorStreamingConfigurationResponse = {}));
export var GetVoiceConnectorTerminationRequest;
(function (GetVoiceConnectorTerminationRequest) {
  /**
   * @internal
   */
  GetVoiceConnectorTerminationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetVoiceConnectorTerminationRequest || (GetVoiceConnectorTerminationRequest = {}));
export var Termination;
(function (Termination) {
  /**
   * @internal
   */
  Termination.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.DefaultPhoneNumber && { DefaultPhoneNumber: SENSITIVE_STRING });
  };
})(Termination || (Termination = {}));
export var GetVoiceConnectorTerminationResponse;
(function (GetVoiceConnectorTerminationResponse) {
  /**
   * @internal
   */
  GetVoiceConnectorTerminationResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Termination && { Termination: Termination.filterSensitiveLog(obj.Termination) }
    );
  };
})(GetVoiceConnectorTerminationResponse || (GetVoiceConnectorTerminationResponse = {}));
export var GetVoiceConnectorTerminationHealthRequest;
(function (GetVoiceConnectorTerminationHealthRequest) {
  /**
   * @internal
   */
  GetVoiceConnectorTerminationHealthRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetVoiceConnectorTerminationHealthRequest || (GetVoiceConnectorTerminationHealthRequest = {}));
export var TerminationHealth;
(function (TerminationHealth) {
  /**
   * @internal
   */
  TerminationHealth.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TerminationHealth || (TerminationHealth = {}));
export var GetVoiceConnectorTerminationHealthResponse;
(function (GetVoiceConnectorTerminationHealthResponse) {
  /**
   * @internal
   */
  GetVoiceConnectorTerminationHealthResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetVoiceConnectorTerminationHealthResponse || (GetVoiceConnectorTerminationHealthResponse = {}));
export var Invite;
(function (Invite) {
  /**
   * @internal
   */
  Invite.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.EmailAddress && { EmailAddress: SENSITIVE_STRING });
  };
})(Invite || (Invite = {}));
export var InviteUsersRequest;
(function (InviteUsersRequest) {
  /**
   * @internal
   */
  InviteUsersRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.UserEmailList && { UserEmailList: SENSITIVE_STRING });
  };
})(InviteUsersRequest || (InviteUsersRequest = {}));
export var InviteUsersResponse;
(function (InviteUsersResponse) {
  /**
   * @internal
   */
  InviteUsersResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Invites && {
        Invites: obj.Invites.map(function (item) {
          return Invite.filterSensitiveLog(item);
        }),
      }
    );
  };
})(InviteUsersResponse || (InviteUsersResponse = {}));
export var ListAccountsRequest;
(function (ListAccountsRequest) {
  /**
   * @internal
   */
  ListAccountsRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.UserEmail && { UserEmail: SENSITIVE_STRING });
  };
})(ListAccountsRequest || (ListAccountsRequest = {}));
export var ListAccountsResponse;
(function (ListAccountsResponse) {
  /**
   * @internal
   */
  ListAccountsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListAccountsResponse || (ListAccountsResponse = {}));
export var ListAppInstanceAdminsRequest;
(function (ListAppInstanceAdminsRequest) {
  /**
   * @internal
   */
  ListAppInstanceAdminsRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.NextToken && { NextToken: SENSITIVE_STRING });
  };
})(ListAppInstanceAdminsRequest || (ListAppInstanceAdminsRequest = {}));
export var ListAppInstanceAdminsResponse;
(function (ListAppInstanceAdminsResponse) {
  /**
   * @internal
   */
  ListAppInstanceAdminsResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign({}, obj),
        obj.AppInstanceAdmins && {
          AppInstanceAdmins: obj.AppInstanceAdmins.map(function (item) {
            return AppInstanceAdminSummary.filterSensitiveLog(item);
          }),
        }
      ),
      obj.NextToken && { NextToken: SENSITIVE_STRING }
    );
  };
})(ListAppInstanceAdminsResponse || (ListAppInstanceAdminsResponse = {}));
export var ListAppInstancesRequest;
(function (ListAppInstancesRequest) {
  /**
   * @internal
   */
  ListAppInstancesRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.NextToken && { NextToken: SENSITIVE_STRING });
  };
})(ListAppInstancesRequest || (ListAppInstancesRequest = {}));
export var ListAppInstancesResponse;
(function (ListAppInstancesResponse) {
  /**
   * @internal
   */
  ListAppInstancesResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign({}, obj),
        obj.AppInstances && {
          AppInstances: obj.AppInstances.map(function (item) {
            return AppInstanceSummary.filterSensitiveLog(item);
          }),
        }
      ),
      obj.NextToken && { NextToken: SENSITIVE_STRING }
    );
  };
})(ListAppInstancesResponse || (ListAppInstancesResponse = {}));
export var ListAppInstanceUsersRequest;
(function (ListAppInstanceUsersRequest) {
  /**
   * @internal
   */
  ListAppInstanceUsersRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.NextToken && { NextToken: SENSITIVE_STRING });
  };
})(ListAppInstanceUsersRequest || (ListAppInstanceUsersRequest = {}));
export var ListAppInstanceUsersResponse;
(function (ListAppInstanceUsersResponse) {
  /**
   * @internal
   */
  ListAppInstanceUsersResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign({}, obj),
        obj.AppInstanceUsers && {
          AppInstanceUsers: obj.AppInstanceUsers.map(function (item) {
            return AppInstanceUserSummary.filterSensitiveLog(item);
          }),
        }
      ),
      obj.NextToken && { NextToken: SENSITIVE_STRING }
    );
  };
})(ListAppInstanceUsersResponse || (ListAppInstanceUsersResponse = {}));
export var ListAttendeesRequest;
(function (ListAttendeesRequest) {
  /**
   * @internal
   */
  ListAttendeesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListAttendeesRequest || (ListAttendeesRequest = {}));
export var ListAttendeesResponse;
(function (ListAttendeesResponse) {
  /**
   * @internal
   */
  ListAttendeesResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Attendees && {
        Attendees: obj.Attendees.map(function (item) {
          return Attendee.filterSensitiveLog(item);
        }),
      }
    );
  };
})(ListAttendeesResponse || (ListAttendeesResponse = {}));
export var ListAttendeeTagsRequest;
(function (ListAttendeeTagsRequest) {
  /**
   * @internal
   */
  ListAttendeeTagsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListAttendeeTagsRequest || (ListAttendeeTagsRequest = {}));
export var ListAttendeeTagsResponse;
(function (ListAttendeeTagsResponse) {
  /**
   * @internal
   */
  ListAttendeeTagsResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Tags && {
        Tags: obj.Tags.map(function (item) {
          return Tag.filterSensitiveLog(item);
        }),
      }
    );
  };
})(ListAttendeeTagsResponse || (ListAttendeeTagsResponse = {}));
export var ListBotsRequest;
(function (ListBotsRequest) {
  /**
   * @internal
   */
  ListBotsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListBotsRequest || (ListBotsRequest = {}));
export var ListBotsResponse;
(function (ListBotsResponse) {
  /**
   * @internal
   */
  ListBotsResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Bots && {
        Bots: obj.Bots.map(function (item) {
          return Bot.filterSensitiveLog(item);
        }),
      }
    );
  };
})(ListBotsResponse || (ListBotsResponse = {}));
export var ListChannelBansRequest;
(function (ListChannelBansRequest) {
  /**
   * @internal
   */
  ListChannelBansRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.NextToken && { NextToken: SENSITIVE_STRING });
  };
})(ListChannelBansRequest || (ListChannelBansRequest = {}));
export var ListChannelBansResponse;
(function (ListChannelBansResponse) {
  /**
   * @internal
   */
  ListChannelBansResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.NextToken && { NextToken: SENSITIVE_STRING }),
      obj.ChannelBans && {
        ChannelBans: obj.ChannelBans.map(function (item) {
          return ChannelBanSummary.filterSensitiveLog(item);
        }),
      }
    );
  };
})(ListChannelBansResponse || (ListChannelBansResponse = {}));
export var ListChannelMembershipsRequest;
(function (ListChannelMembershipsRequest) {
  /**
   * @internal
   */
  ListChannelMembershipsRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.NextToken && { NextToken: SENSITIVE_STRING });
  };
})(ListChannelMembershipsRequest || (ListChannelMembershipsRequest = {}));
export var ListChannelMembershipsResponse;
(function (ListChannelMembershipsResponse) {
  /**
   * @internal
   */
  ListChannelMembershipsResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign({}, obj),
        obj.ChannelMemberships && {
          ChannelMemberships: obj.ChannelMemberships.map(function (item) {
            return ChannelMembershipSummary.filterSensitiveLog(item);
          }),
        }
      ),
      obj.NextToken && { NextToken: SENSITIVE_STRING }
    );
  };
})(ListChannelMembershipsResponse || (ListChannelMembershipsResponse = {}));
export var ListChannelMembershipsForAppInstanceUserRequest;
(function (ListChannelMembershipsForAppInstanceUserRequest) {
  /**
   * @internal
   */
  ListChannelMembershipsForAppInstanceUserRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.NextToken && { NextToken: SENSITIVE_STRING });
  };
})(ListChannelMembershipsForAppInstanceUserRequest || (ListChannelMembershipsForAppInstanceUserRequest = {}));
export var ListChannelMembershipsForAppInstanceUserResponse;
(function (ListChannelMembershipsForAppInstanceUserResponse) {
  /**
   * @internal
   */
  ListChannelMembershipsForAppInstanceUserResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign({}, obj),
        obj.ChannelMemberships && {
          ChannelMemberships: obj.ChannelMemberships.map(function (item) {
            return ChannelMembershipForAppInstanceUserSummary.filterSensitiveLog(item);
          }),
        }
      ),
      obj.NextToken && { NextToken: SENSITIVE_STRING }
    );
  };
})(ListChannelMembershipsForAppInstanceUserResponse || (ListChannelMembershipsForAppInstanceUserResponse = {}));
export var SortOrder;
(function (SortOrder) {
  SortOrder["ASCENDING"] = "ASCENDING";
  SortOrder["DESCENDING"] = "DESCENDING";
})(SortOrder || (SortOrder = {}));
export var ListChannelMessagesRequest;
(function (ListChannelMessagesRequest) {
  /**
   * @internal
   */
  ListChannelMessagesRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.NextToken && { NextToken: SENSITIVE_STRING });
  };
})(ListChannelMessagesRequest || (ListChannelMessagesRequest = {}));
export var ListChannelMessagesResponse;
(function (ListChannelMessagesResponse) {
  /**
   * @internal
   */
  ListChannelMessagesResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.NextToken && { NextToken: SENSITIVE_STRING }),
      obj.ChannelMessages && {
        ChannelMessages: obj.ChannelMessages.map(function (item) {
          return ChannelMessageSummary.filterSensitiveLog(item);
        }),
      }
    );
  };
})(ListChannelMessagesResponse || (ListChannelMessagesResponse = {}));
export var ListChannelModeratorsRequest;
(function (ListChannelModeratorsRequest) {
  /**
   * @internal
   */
  ListChannelModeratorsRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.NextToken && { NextToken: SENSITIVE_STRING });
  };
})(ListChannelModeratorsRequest || (ListChannelModeratorsRequest = {}));
export var ListChannelModeratorsResponse;
(function (ListChannelModeratorsResponse) {
  /**
   * @internal
   */
  ListChannelModeratorsResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.NextToken && { NextToken: SENSITIVE_STRING }),
      obj.ChannelModerators && {
        ChannelModerators: obj.ChannelModerators.map(function (item) {
          return ChannelModeratorSummary.filterSensitiveLog(item);
        }),
      }
    );
  };
})(ListChannelModeratorsResponse || (ListChannelModeratorsResponse = {}));
export var ListChannelsRequest;
(function (ListChannelsRequest) {
  /**
   * @internal
   */
  ListChannelsRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.NextToken && { NextToken: SENSITIVE_STRING });
  };
})(ListChannelsRequest || (ListChannelsRequest = {}));
export var ListChannelsResponse;
(function (ListChannelsResponse) {
  /**
   * @internal
   */
  ListChannelsResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign({}, obj),
        obj.Channels && {
          Channels: obj.Channels.map(function (item) {
            return ChannelSummary.filterSensitiveLog(item);
          }),
        }
      ),
      obj.NextToken && { NextToken: SENSITIVE_STRING }
    );
  };
})(ListChannelsResponse || (ListChannelsResponse = {}));
export var ListChannelsModeratedByAppInstanceUserRequest;
(function (ListChannelsModeratedByAppInstanceUserRequest) {
  /**
   * @internal
   */
  ListChannelsModeratedByAppInstanceUserRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.NextToken && { NextToken: SENSITIVE_STRING });
  };
})(ListChannelsModeratedByAppInstanceUserRequest || (ListChannelsModeratedByAppInstanceUserRequest = {}));
export var ListChannelsModeratedByAppInstanceUserResponse;
(function (ListChannelsModeratedByAppInstanceUserResponse) {
  /**
   * @internal
   */
  ListChannelsModeratedByAppInstanceUserResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign({}, obj),
        obj.Channels && {
          Channels: obj.Channels.map(function (item) {
            return ChannelModeratedByAppInstanceUserSummary.filterSensitiveLog(item);
          }),
        }
      ),
      obj.NextToken && { NextToken: SENSITIVE_STRING }
    );
  };
})(ListChannelsModeratedByAppInstanceUserResponse || (ListChannelsModeratedByAppInstanceUserResponse = {}));
export var ListMeetingsRequest;
(function (ListMeetingsRequest) {
  /**
   * @internal
   */
  ListMeetingsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListMeetingsRequest || (ListMeetingsRequest = {}));
export var ListMeetingsResponse;
(function (ListMeetingsResponse) {
  /**
   * @internal
   */
  ListMeetingsResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Meetings && {
        Meetings: obj.Meetings.map(function (item) {
          return Meeting.filterSensitiveLog(item);
        }),
      }
    );
  };
})(ListMeetingsResponse || (ListMeetingsResponse = {}));
export var ListMeetingTagsRequest;
(function (ListMeetingTagsRequest) {
  /**
   * @internal
   */
  ListMeetingTagsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListMeetingTagsRequest || (ListMeetingTagsRequest = {}));
export var ListMeetingTagsResponse;
(function (ListMeetingTagsResponse) {
  /**
   * @internal
   */
  ListMeetingTagsResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Tags && {
        Tags: obj.Tags.map(function (item) {
          return Tag.filterSensitiveLog(item);
        }),
      }
    );
  };
})(ListMeetingTagsResponse || (ListMeetingTagsResponse = {}));
export var ListPhoneNumberOrdersRequest;
(function (ListPhoneNumberOrdersRequest) {
  /**
   * @internal
   */
  ListPhoneNumberOrdersRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListPhoneNumberOrdersRequest || (ListPhoneNumberOrdersRequest = {}));
export var ListPhoneNumberOrdersResponse;
(function (ListPhoneNumberOrdersResponse) {
  /**
   * @internal
   */
  ListPhoneNumberOrdersResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListPhoneNumberOrdersResponse || (ListPhoneNumberOrdersResponse = {}));
export var ListPhoneNumbersRequest;
(function (ListPhoneNumbersRequest) {
  /**
   * @internal
   */
  ListPhoneNumbersRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListPhoneNumbersRequest || (ListPhoneNumbersRequest = {}));
export var ListPhoneNumbersResponse;
(function (ListPhoneNumbersResponse) {
  /**
   * @internal
   */
  ListPhoneNumbersResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.PhoneNumbers && {
        PhoneNumbers: obj.PhoneNumbers.map(function (item) {
          return PhoneNumber.filterSensitiveLog(item);
        }),
      }
    );
  };
})(ListPhoneNumbersResponse || (ListPhoneNumbersResponse = {}));
export var ListProxySessionsRequest;
(function (ListProxySessionsRequest) {
  /**
   * @internal
   */
  ListProxySessionsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListProxySessionsRequest || (ListProxySessionsRequest = {}));
export var ListProxySessionsResponse;
(function (ListProxySessionsResponse) {
  /**
   * @internal
   */
  ListProxySessionsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListProxySessionsResponse || (ListProxySessionsResponse = {}));
export var ListRoomMembershipsRequest;
(function (ListRoomMembershipsRequest) {
  /**
   * @internal
   */
  ListRoomMembershipsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListRoomMembershipsRequest || (ListRoomMembershipsRequest = {}));
export var ListRoomMembershipsResponse;
(function (ListRoomMembershipsResponse) {
  /**
   * @internal
   */
  ListRoomMembershipsResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.RoomMemberships && {
        RoomMemberships: obj.RoomMemberships.map(function (item) {
          return RoomMembership.filterSensitiveLog(item);
        }),
      }
    );
  };
})(ListRoomMembershipsResponse || (ListRoomMembershipsResponse = {}));
export var ListRoomsRequest;
(function (ListRoomsRequest) {
  /**
   * @internal
   */
  ListRoomsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListRoomsRequest || (ListRoomsRequest = {}));
export var ListRoomsResponse;
(function (ListRoomsResponse) {
  /**
   * @internal
   */
  ListRoomsResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Rooms && {
        Rooms: obj.Rooms.map(function (item) {
          return Room.filterSensitiveLog(item);
        }),
      }
    );
  };
})(ListRoomsResponse || (ListRoomsResponse = {}));
export var ListSipMediaApplicationsRequest;
(function (ListSipMediaApplicationsRequest) {
  /**
   * @internal
   */
  ListSipMediaApplicationsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListSipMediaApplicationsRequest || (ListSipMediaApplicationsRequest = {}));
export var ListSipMediaApplicationsResponse;
(function (ListSipMediaApplicationsResponse) {
  /**
   * @internal
   */
  ListSipMediaApplicationsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListSipMediaApplicationsResponse || (ListSipMediaApplicationsResponse = {}));
export var ListSipRulesRequest;
(function (ListSipRulesRequest) {
  /**
   * @internal
   */
  ListSipRulesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListSipRulesRequest || (ListSipRulesRequest = {}));
export var ListSipRulesResponse;
(function (ListSipRulesResponse) {
  /**
   * @internal
   */
  ListSipRulesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListSipRulesResponse || (ListSipRulesResponse = {}));
export var ListSupportedPhoneNumberCountriesRequest;
(function (ListSupportedPhoneNumberCountriesRequest) {
  /**
   * @internal
   */
  ListSupportedPhoneNumberCountriesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListSupportedPhoneNumberCountriesRequest || (ListSupportedPhoneNumberCountriesRequest = {}));
export var PhoneNumberCountry;
(function (PhoneNumberCountry) {
  /**
   * @internal
   */
  PhoneNumberCountry.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PhoneNumberCountry || (PhoneNumberCountry = {}));
export var ListSupportedPhoneNumberCountriesResponse;
(function (ListSupportedPhoneNumberCountriesResponse) {
  /**
   * @internal
   */
  ListSupportedPhoneNumberCountriesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListSupportedPhoneNumberCountriesResponse || (ListSupportedPhoneNumberCountriesResponse = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
  /**
   * @internal
   */
  ListTagsForResourceRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.ResourceARN && { ResourceARN: SENSITIVE_STRING });
  };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
  /**
   * @internal
   */
  ListTagsForResourceResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Tags && {
        Tags: obj.Tags.map(function (item) {
          return Tag.filterSensitiveLog(item);
        }),
      }
    );
  };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var ListUsersRequest;
(function (ListUsersRequest) {
  /**
   * @internal
   */
  ListUsersRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.UserEmail && { UserEmail: SENSITIVE_STRING });
  };
})(ListUsersRequest || (ListUsersRequest = {}));
export var ListUsersResponse;
(function (ListUsersResponse) {
  /**
   * @internal
   */
  ListUsersResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Users && {
        Users: obj.Users.map(function (item) {
          return User.filterSensitiveLog(item);
        }),
      }
    );
  };
})(ListUsersResponse || (ListUsersResponse = {}));
export var ListVoiceConnectorGroupsRequest;
(function (ListVoiceConnectorGroupsRequest) {
  /**
   * @internal
   */
  ListVoiceConnectorGroupsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListVoiceConnectorGroupsRequest || (ListVoiceConnectorGroupsRequest = {}));
export var ListVoiceConnectorGroupsResponse;
(function (ListVoiceConnectorGroupsResponse) {
  /**
   * @internal
   */
  ListVoiceConnectorGroupsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListVoiceConnectorGroupsResponse || (ListVoiceConnectorGroupsResponse = {}));
export var ListVoiceConnectorsRequest;
(function (ListVoiceConnectorsRequest) {
  /**
   * @internal
   */
  ListVoiceConnectorsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListVoiceConnectorsRequest || (ListVoiceConnectorsRequest = {}));
export var ListVoiceConnectorsResponse;
(function (ListVoiceConnectorsResponse) {
  /**
   * @internal
   */
  ListVoiceConnectorsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListVoiceConnectorsResponse || (ListVoiceConnectorsResponse = {}));
export var ListVoiceConnectorTerminationCredentialsRequest;
(function (ListVoiceConnectorTerminationCredentialsRequest) {
  /**
   * @internal
   */
  ListVoiceConnectorTerminationCredentialsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListVoiceConnectorTerminationCredentialsRequest || (ListVoiceConnectorTerminationCredentialsRequest = {}));
export var ListVoiceConnectorTerminationCredentialsResponse;
(function (ListVoiceConnectorTerminationCredentialsResponse) {
  /**
   * @internal
   */
  ListVoiceConnectorTerminationCredentialsResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Usernames && { Usernames: SENSITIVE_STRING });
  };
})(ListVoiceConnectorTerminationCredentialsResponse || (ListVoiceConnectorTerminationCredentialsResponse = {}));
export var LogoutUserRequest;
(function (LogoutUserRequest) {
  /**
   * @internal
   */
  LogoutUserRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LogoutUserRequest || (LogoutUserRequest = {}));
export var LogoutUserResponse;
(function (LogoutUserResponse) {
  /**
   * @internal
   */
  LogoutUserResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LogoutUserResponse || (LogoutUserResponse = {}));
export var PutAppInstanceRetentionSettingsRequest;
(function (PutAppInstanceRetentionSettingsRequest) {
  /**
   * @internal
   */
  PutAppInstanceRetentionSettingsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PutAppInstanceRetentionSettingsRequest || (PutAppInstanceRetentionSettingsRequest = {}));
export var PutAppInstanceRetentionSettingsResponse;
(function (PutAppInstanceRetentionSettingsResponse) {
  /**
   * @internal
   */
  PutAppInstanceRetentionSettingsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PutAppInstanceRetentionSettingsResponse || (PutAppInstanceRetentionSettingsResponse = {}));
export var PutAppInstanceStreamingConfigurationsRequest;
(function (PutAppInstanceStreamingConfigurationsRequest) {
  /**
   * @internal
   */
  PutAppInstanceStreamingConfigurationsRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.AppInstanceStreamingConfigurations && {
        AppInstanceStreamingConfigurations: obj.AppInstanceStreamingConfigurations.map(function (item) {
          return AppInstanceStreamingConfiguration.filterSensitiveLog(item);
        }),
      }
    );
  };
})(PutAppInstanceStreamingConfigurationsRequest || (PutAppInstanceStreamingConfigurationsRequest = {}));
export var PutAppInstanceStreamingConfigurationsResponse;
(function (PutAppInstanceStreamingConfigurationsResponse) {
  /**
   * @internal
   */
  PutAppInstanceStreamingConfigurationsResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.AppInstanceStreamingConfigurations && {
        AppInstanceStreamingConfigurations: obj.AppInstanceStreamingConfigurations.map(function (item) {
          return AppInstanceStreamingConfiguration.filterSensitiveLog(item);
        }),
      }
    );
  };
})(PutAppInstanceStreamingConfigurationsResponse || (PutAppInstanceStreamingConfigurationsResponse = {}));
export var PutEventsConfigurationRequest;
(function (PutEventsConfigurationRequest) {
  /**
   * @internal
   */
  PutEventsConfigurationRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.OutboundEventsHTTPSEndpoint && { OutboundEventsHTTPSEndpoint: SENSITIVE_STRING }),
      obj.LambdaFunctionArn && { LambdaFunctionArn: SENSITIVE_STRING }
    );
  };
})(PutEventsConfigurationRequest || (PutEventsConfigurationRequest = {}));
export var PutEventsConfigurationResponse;
(function (PutEventsConfigurationResponse) {
  /**
   * @internal
   */
  PutEventsConfigurationResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.EventsConfiguration && {
        EventsConfiguration: EventsConfiguration.filterSensitiveLog(obj.EventsConfiguration),
      }
    );
  };
})(PutEventsConfigurationResponse || (PutEventsConfigurationResponse = {}));
export var PutRetentionSettingsRequest;
(function (PutRetentionSettingsRequest) {
  /**
   * @internal
   */
  PutRetentionSettingsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PutRetentionSettingsRequest || (PutRetentionSettingsRequest = {}));
export var PutRetentionSettingsResponse;
(function (PutRetentionSettingsResponse) {
  /**
   * @internal
   */
  PutRetentionSettingsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PutRetentionSettingsResponse || (PutRetentionSettingsResponse = {}));
export var PutSipMediaApplicationLoggingConfigurationRequest;
(function (PutSipMediaApplicationLoggingConfigurationRequest) {
  /**
   * @internal
   */
  PutSipMediaApplicationLoggingConfigurationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PutSipMediaApplicationLoggingConfigurationRequest || (PutSipMediaApplicationLoggingConfigurationRequest = {}));
export var PutSipMediaApplicationLoggingConfigurationResponse;
(function (PutSipMediaApplicationLoggingConfigurationResponse) {
  /**
   * @internal
   */
  PutSipMediaApplicationLoggingConfigurationResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PutSipMediaApplicationLoggingConfigurationResponse || (PutSipMediaApplicationLoggingConfigurationResponse = {}));
export var PutVoiceConnectorEmergencyCallingConfigurationRequest;
(function (PutVoiceConnectorEmergencyCallingConfigurationRequest) {
  /**
   * @internal
   */
  PutVoiceConnectorEmergencyCallingConfigurationRequest.filterSensitiveLog = function (obj) {
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
  PutVoiceConnectorEmergencyCallingConfigurationRequest || (PutVoiceConnectorEmergencyCallingConfigurationRequest = {})
);
export var PutVoiceConnectorEmergencyCallingConfigurationResponse;
(function (PutVoiceConnectorEmergencyCallingConfigurationResponse) {
  /**
   * @internal
   */
  PutVoiceConnectorEmergencyCallingConfigurationResponse.filterSensitiveLog = function (obj) {
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
  PutVoiceConnectorEmergencyCallingConfigurationResponse ||
    (PutVoiceConnectorEmergencyCallingConfigurationResponse = {})
);
export var PutVoiceConnectorLoggingConfigurationRequest;
(function (PutVoiceConnectorLoggingConfigurationRequest) {
  /**
   * @internal
   */
  PutVoiceConnectorLoggingConfigurationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PutVoiceConnectorLoggingConfigurationRequest || (PutVoiceConnectorLoggingConfigurationRequest = {}));
export var PutVoiceConnectorLoggingConfigurationResponse;
(function (PutVoiceConnectorLoggingConfigurationResponse) {
  /**
   * @internal
   */
  PutVoiceConnectorLoggingConfigurationResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PutVoiceConnectorLoggingConfigurationResponse || (PutVoiceConnectorLoggingConfigurationResponse = {}));
export var PutVoiceConnectorOriginationRequest;
(function (PutVoiceConnectorOriginationRequest) {
  /**
   * @internal
   */
  PutVoiceConnectorOriginationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PutVoiceConnectorOriginationRequest || (PutVoiceConnectorOriginationRequest = {}));
export var PutVoiceConnectorOriginationResponse;
(function (PutVoiceConnectorOriginationResponse) {
  /**
   * @internal
   */
  PutVoiceConnectorOriginationResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PutVoiceConnectorOriginationResponse || (PutVoiceConnectorOriginationResponse = {}));
export var PutVoiceConnectorProxyRequest;
(function (PutVoiceConnectorProxyRequest) {
  /**
   * @internal
   */
  PutVoiceConnectorProxyRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.FallBackPhoneNumber && { FallBackPhoneNumber: SENSITIVE_STRING });
  };
})(PutVoiceConnectorProxyRequest || (PutVoiceConnectorProxyRequest = {}));
export var PutVoiceConnectorProxyResponse;
(function (PutVoiceConnectorProxyResponse) {
  /**
   * @internal
   */
  PutVoiceConnectorProxyResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Proxy && { Proxy: Proxy.filterSensitiveLog(obj.Proxy) });
  };
})(PutVoiceConnectorProxyResponse || (PutVoiceConnectorProxyResponse = {}));
export var PutVoiceConnectorStreamingConfigurationRequest;
(function (PutVoiceConnectorStreamingConfigurationRequest) {
  /**
   * @internal
   */
  PutVoiceConnectorStreamingConfigurationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PutVoiceConnectorStreamingConfigurationRequest || (PutVoiceConnectorStreamingConfigurationRequest = {}));
export var PutVoiceConnectorStreamingConfigurationResponse;
(function (PutVoiceConnectorStreamingConfigurationResponse) {
  /**
   * @internal
   */
  PutVoiceConnectorStreamingConfigurationResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PutVoiceConnectorStreamingConfigurationResponse || (PutVoiceConnectorStreamingConfigurationResponse = {}));
export var PutVoiceConnectorTerminationRequest;
(function (PutVoiceConnectorTerminationRequest) {
  /**
   * @internal
   */
  PutVoiceConnectorTerminationRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Termination && { Termination: Termination.filterSensitiveLog(obj.Termination) }
    );
  };
})(PutVoiceConnectorTerminationRequest || (PutVoiceConnectorTerminationRequest = {}));
export var PutVoiceConnectorTerminationResponse;
(function (PutVoiceConnectorTerminationResponse) {
  /**
   * @internal
   */
  PutVoiceConnectorTerminationResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Termination && { Termination: Termination.filterSensitiveLog(obj.Termination) }
    );
  };
})(PutVoiceConnectorTerminationResponse || (PutVoiceConnectorTerminationResponse = {}));
export var PutVoiceConnectorTerminationCredentialsRequest;
(function (PutVoiceConnectorTerminationCredentialsRequest) {
  /**
   * @internal
   */
  PutVoiceConnectorTerminationCredentialsRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Credentials && {
        Credentials: obj.Credentials.map(function (item) {
          return Credential.filterSensitiveLog(item);
        }),
      }
    );
  };
})(PutVoiceConnectorTerminationCredentialsRequest || (PutVoiceConnectorTerminationCredentialsRequest = {}));
export var RedactChannelMessageRequest;
(function (RedactChannelMessageRequest) {
  /**
   * @internal
   */
  RedactChannelMessageRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RedactChannelMessageRequest || (RedactChannelMessageRequest = {}));
export var RedactChannelMessageResponse;
(function (RedactChannelMessageResponse) {
  /**
   * @internal
   */
  RedactChannelMessageResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RedactChannelMessageResponse || (RedactChannelMessageResponse = {}));
export var RedactConversationMessageRequest;
(function (RedactConversationMessageRequest) {
  /**
   * @internal
   */
  RedactConversationMessageRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RedactConversationMessageRequest || (RedactConversationMessageRequest = {}));
export var RedactConversationMessageResponse;
(function (RedactConversationMessageResponse) {
  /**
   * @internal
   */
  RedactConversationMessageResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RedactConversationMessageResponse || (RedactConversationMessageResponse = {}));
export var RedactRoomMessageRequest;
(function (RedactRoomMessageRequest) {
  /**
   * @internal
   */
  RedactRoomMessageRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RedactRoomMessageRequest || (RedactRoomMessageRequest = {}));
export var RedactRoomMessageResponse;
(function (RedactRoomMessageResponse) {
  /**
   * @internal
   */
  RedactRoomMessageResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RedactRoomMessageResponse || (RedactRoomMessageResponse = {}));
export var RegenerateSecurityTokenRequest;
(function (RegenerateSecurityTokenRequest) {
  /**
   * @internal
   */
  RegenerateSecurityTokenRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RegenerateSecurityTokenRequest || (RegenerateSecurityTokenRequest = {}));
export var RegenerateSecurityTokenResponse;
(function (RegenerateSecurityTokenResponse) {
  /**
   * @internal
   */
  RegenerateSecurityTokenResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Bot && { Bot: Bot.filterSensitiveLog(obj.Bot) });
  };
})(RegenerateSecurityTokenResponse || (RegenerateSecurityTokenResponse = {}));
export var ResetPersonalPINRequest;
(function (ResetPersonalPINRequest) {
  /**
   * @internal
   */
  ResetPersonalPINRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResetPersonalPINRequest || (ResetPersonalPINRequest = {}));
export var ResetPersonalPINResponse;
(function (ResetPersonalPINResponse) {
  /**
   * @internal
   */
  ResetPersonalPINResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.User && { User: User.filterSensitiveLog(obj.User) });
  };
})(ResetPersonalPINResponse || (ResetPersonalPINResponse = {}));
export var RestorePhoneNumberRequest;
(function (RestorePhoneNumberRequest) {
  /**
   * @internal
   */
  RestorePhoneNumberRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RestorePhoneNumberRequest || (RestorePhoneNumberRequest = {}));
export var RestorePhoneNumberResponse;
(function (RestorePhoneNumberResponse) {
  /**
   * @internal
   */
  RestorePhoneNumberResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.PhoneNumber && { PhoneNumber: PhoneNumber.filterSensitiveLog(obj.PhoneNumber) }
    );
  };
})(RestorePhoneNumberResponse || (RestorePhoneNumberResponse = {}));
export var SearchAvailablePhoneNumbersRequest;
(function (SearchAvailablePhoneNumbersRequest) {
  /**
   * @internal
   */
  SearchAvailablePhoneNumbersRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SearchAvailablePhoneNumbersRequest || (SearchAvailablePhoneNumbersRequest = {}));
export var SearchAvailablePhoneNumbersResponse;
(function (SearchAvailablePhoneNumbersResponse) {
  /**
   * @internal
   */
  SearchAvailablePhoneNumbersResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING });
  };
})(SearchAvailablePhoneNumbersResponse || (SearchAvailablePhoneNumbersResponse = {}));
export var SendChannelMessageRequest;
(function (SendChannelMessageRequest) {
  /**
   * @internal
   */
  SendChannelMessageRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign(__assign({}, obj), obj.Content && { Content: SENSITIVE_STRING }),
        obj.Metadata && { Metadata: SENSITIVE_STRING }
      ),
      obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }
    );
  };
})(SendChannelMessageRequest || (SendChannelMessageRequest = {}));
export var SendChannelMessageResponse;
(function (SendChannelMessageResponse) {
  /**
   * @internal
   */
  SendChannelMessageResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SendChannelMessageResponse || (SendChannelMessageResponse = {}));
export var TagAttendeeRequest;
(function (TagAttendeeRequest) {
  /**
   * @internal
   */
  TagAttendeeRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Tags && {
        Tags: obj.Tags.map(function (item) {
          return Tag.filterSensitiveLog(item);
        }),
      }
    );
  };
})(TagAttendeeRequest || (TagAttendeeRequest = {}));
export var TagMeetingRequest;
(function (TagMeetingRequest) {
  /**
   * @internal
   */
  TagMeetingRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Tags && {
        Tags: obj.Tags.map(function (item) {
          return Tag.filterSensitiveLog(item);
        }),
      }
    );
  };
})(TagMeetingRequest || (TagMeetingRequest = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.ResourceARN && { ResourceARN: SENSITIVE_STRING }),
      obj.Tags && {
        Tags: obj.Tags.map(function (item) {
          return Tag.filterSensitiveLog(item);
        }),
      }
    );
  };
})(TagResourceRequest || (TagResourceRequest = {}));
export var UntagAttendeeRequest;
(function (UntagAttendeeRequest) {
  /**
   * @internal
   */
  UntagAttendeeRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.TagKeys && { TagKeys: SENSITIVE_STRING });
  };
})(UntagAttendeeRequest || (UntagAttendeeRequest = {}));
export var UntagMeetingRequest;
(function (UntagMeetingRequest) {
  /**
   * @internal
   */
  UntagMeetingRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.TagKeys && { TagKeys: SENSITIVE_STRING });
  };
})(UntagMeetingRequest || (UntagMeetingRequest = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.ResourceARN && { ResourceARN: SENSITIVE_STRING }),
      obj.TagKeys && { TagKeys: SENSITIVE_STRING }
    );
  };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UpdateAccountRequest;
(function (UpdateAccountRequest) {
  /**
   * @internal
   */
  UpdateAccountRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateAccountRequest || (UpdateAccountRequest = {}));
export var UpdateAccountResponse;
(function (UpdateAccountResponse) {
  /**
   * @internal
   */
  UpdateAccountResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateAccountResponse || (UpdateAccountResponse = {}));
export var UpdateAccountSettingsRequest;
(function (UpdateAccountSettingsRequest) {
  /**
   * @internal
   */
  UpdateAccountSettingsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateAccountSettingsRequest || (UpdateAccountSettingsRequest = {}));
export var UpdateAccountSettingsResponse;
(function (UpdateAccountSettingsResponse) {
  /**
   * @internal
   */
  UpdateAccountSettingsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateAccountSettingsResponse || (UpdateAccountSettingsResponse = {}));
export var UpdateAppInstanceRequest;
(function (UpdateAppInstanceRequest) {
  /**
   * @internal
   */
  UpdateAppInstanceRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.Name && { Name: SENSITIVE_STRING }),
      obj.Metadata && { Metadata: SENSITIVE_STRING }
    );
  };
})(UpdateAppInstanceRequest || (UpdateAppInstanceRequest = {}));
export var UpdateAppInstanceResponse;
(function (UpdateAppInstanceResponse) {
  /**
   * @internal
   */
  UpdateAppInstanceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateAppInstanceResponse || (UpdateAppInstanceResponse = {}));
export var UpdateAppInstanceUserRequest;
(function (UpdateAppInstanceUserRequest) {
  /**
   * @internal
   */
  UpdateAppInstanceUserRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.Name && { Name: SENSITIVE_STRING }),
      obj.Metadata && { Metadata: SENSITIVE_STRING }
    );
  };
})(UpdateAppInstanceUserRequest || (UpdateAppInstanceUserRequest = {}));
export var UpdateAppInstanceUserResponse;
(function (UpdateAppInstanceUserResponse) {
  /**
   * @internal
   */
  UpdateAppInstanceUserResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateAppInstanceUserResponse || (UpdateAppInstanceUserResponse = {}));
export var UpdateBotRequest;
(function (UpdateBotRequest) {
  /**
   * @internal
   */
  UpdateBotRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateBotRequest || (UpdateBotRequest = {}));
export var UpdateBotResponse;
(function (UpdateBotResponse) {
  /**
   * @internal
   */
  UpdateBotResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Bot && { Bot: Bot.filterSensitiveLog(obj.Bot) });
  };
})(UpdateBotResponse || (UpdateBotResponse = {}));
export var UpdateChannelRequest;
(function (UpdateChannelRequest) {
  /**
   * @internal
   */
  UpdateChannelRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.Name && { Name: SENSITIVE_STRING }),
      obj.Metadata && { Metadata: SENSITIVE_STRING }
    );
  };
})(UpdateChannelRequest || (UpdateChannelRequest = {}));
export var UpdateChannelResponse;
(function (UpdateChannelResponse) {
  /**
   * @internal
   */
  UpdateChannelResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateChannelResponse || (UpdateChannelResponse = {}));
export var UpdateChannelMessageRequest;
(function (UpdateChannelMessageRequest) {
  /**
   * @internal
   */
  UpdateChannelMessageRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.Content && { Content: SENSITIVE_STRING }),
      obj.Metadata && { Metadata: SENSITIVE_STRING }
    );
  };
})(UpdateChannelMessageRequest || (UpdateChannelMessageRequest = {}));
export var UpdateChannelMessageResponse;
(function (UpdateChannelMessageResponse) {
  /**
   * @internal
   */
  UpdateChannelMessageResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateChannelMessageResponse || (UpdateChannelMessageResponse = {}));
export var UpdateChannelReadMarkerRequest;
(function (UpdateChannelReadMarkerRequest) {
  /**
   * @internal
   */
  UpdateChannelReadMarkerRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateChannelReadMarkerRequest || (UpdateChannelReadMarkerRequest = {}));
export var UpdateChannelReadMarkerResponse;
(function (UpdateChannelReadMarkerResponse) {
  /**
   * @internal
   */
  UpdateChannelReadMarkerResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateChannelReadMarkerResponse || (UpdateChannelReadMarkerResponse = {}));
export var UpdateGlobalSettingsRequest;
(function (UpdateGlobalSettingsRequest) {
  /**
   * @internal
   */
  UpdateGlobalSettingsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateGlobalSettingsRequest || (UpdateGlobalSettingsRequest = {}));
export var UpdatePhoneNumberRequest;
(function (UpdatePhoneNumberRequest) {
  /**
   * @internal
   */
  UpdatePhoneNumberRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.CallingName && { CallingName: SENSITIVE_STRING });
  };
})(UpdatePhoneNumberRequest || (UpdatePhoneNumberRequest = {}));
export var UpdatePhoneNumberResponse;
(function (UpdatePhoneNumberResponse) {
  /**
   * @internal
   */
  UpdatePhoneNumberResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.PhoneNumber && { PhoneNumber: PhoneNumber.filterSensitiveLog(obj.PhoneNumber) }
    );
  };
})(UpdatePhoneNumberResponse || (UpdatePhoneNumberResponse = {}));
export var UpdatePhoneNumberSettingsRequest;
(function (UpdatePhoneNumberSettingsRequest) {
  /**
   * @internal
   */
  UpdatePhoneNumberSettingsRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.CallingName && { CallingName: SENSITIVE_STRING });
  };
})(UpdatePhoneNumberSettingsRequest || (UpdatePhoneNumberSettingsRequest = {}));
export var UpdateProxySessionRequest;
(function (UpdateProxySessionRequest) {
  /**
   * @internal
   */
  UpdateProxySessionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateProxySessionRequest || (UpdateProxySessionRequest = {}));
export var UpdateProxySessionResponse;
(function (UpdateProxySessionResponse) {
  /**
   * @internal
   */
  UpdateProxySessionResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.ProxySession && { ProxySession: ProxySession.filterSensitiveLog(obj.ProxySession) }
    );
  };
})(UpdateProxySessionResponse || (UpdateProxySessionResponse = {}));
export var UpdateRoomRequest;
(function (UpdateRoomRequest) {
  /**
   * @internal
   */
  UpdateRoomRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Name && { Name: SENSITIVE_STRING });
  };
})(UpdateRoomRequest || (UpdateRoomRequest = {}));
export var UpdateRoomResponse;
(function (UpdateRoomResponse) {
  /**
   * @internal
   */
  UpdateRoomResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Room && { Room: Room.filterSensitiveLog(obj.Room) });
  };
})(UpdateRoomResponse || (UpdateRoomResponse = {}));
export var UpdateRoomMembershipRequest;
(function (UpdateRoomMembershipRequest) {
  /**
   * @internal
   */
  UpdateRoomMembershipRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateRoomMembershipRequest || (UpdateRoomMembershipRequest = {}));
export var UpdateRoomMembershipResponse;
(function (UpdateRoomMembershipResponse) {
  /**
   * @internal
   */
  UpdateRoomMembershipResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.RoomMembership && { RoomMembership: RoomMembership.filterSensitiveLog(obj.RoomMembership) }
    );
  };
})(UpdateRoomMembershipResponse || (UpdateRoomMembershipResponse = {}));
export var UpdateSipMediaApplicationRequest;
(function (UpdateSipMediaApplicationRequest) {
  /**
   * @internal
   */
  UpdateSipMediaApplicationRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Endpoints && {
        Endpoints: obj.Endpoints.map(function (item) {
          return SipMediaApplicationEndpoint.filterSensitiveLog(item);
        }),
      }
    );
  };
})(UpdateSipMediaApplicationRequest || (UpdateSipMediaApplicationRequest = {}));
export var UpdateSipMediaApplicationResponse;
(function (UpdateSipMediaApplicationResponse) {
  /**
   * @internal
   */
  UpdateSipMediaApplicationResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.SipMediaApplication && {
        SipMediaApplication: SipMediaApplication.filterSensitiveLog(obj.SipMediaApplication),
      }
    );
  };
})(UpdateSipMediaApplicationResponse || (UpdateSipMediaApplicationResponse = {}));
export var UpdateSipRuleRequest;
(function (UpdateSipRuleRequest) {
  /**
   * @internal
   */
  UpdateSipRuleRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateSipRuleRequest || (UpdateSipRuleRequest = {}));
export var UpdateSipRuleResponse;
(function (UpdateSipRuleResponse) {
  /**
   * @internal
   */
  UpdateSipRuleResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateSipRuleResponse || (UpdateSipRuleResponse = {}));
export var UpdateUserRequest;
(function (UpdateUserRequest) {
  /**
   * @internal
   */
  UpdateUserRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.AlexaForBusinessMetadata && {
        AlexaForBusinessMetadata: AlexaForBusinessMetadata.filterSensitiveLog(obj.AlexaForBusinessMetadata),
      }
    );
  };
})(UpdateUserRequest || (UpdateUserRequest = {}));
export var UpdateUserResponse;
(function (UpdateUserResponse) {
  /**
   * @internal
   */
  UpdateUserResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.User && { User: User.filterSensitiveLog(obj.User) });
  };
})(UpdateUserResponse || (UpdateUserResponse = {}));
export var UpdateUserSettingsRequest;
(function (UpdateUserSettingsRequest) {
  /**
   * @internal
   */
  UpdateUserSettingsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateUserSettingsRequest || (UpdateUserSettingsRequest = {}));
export var UpdateVoiceConnectorRequest;
(function (UpdateVoiceConnectorRequest) {
  /**
   * @internal
   */
  UpdateVoiceConnectorRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateVoiceConnectorRequest || (UpdateVoiceConnectorRequest = {}));
export var UpdateVoiceConnectorResponse;
(function (UpdateVoiceConnectorResponse) {
  /**
   * @internal
   */
  UpdateVoiceConnectorResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateVoiceConnectorResponse || (UpdateVoiceConnectorResponse = {}));
export var UpdateVoiceConnectorGroupRequest;
(function (UpdateVoiceConnectorGroupRequest) {
  /**
   * @internal
   */
  UpdateVoiceConnectorGroupRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateVoiceConnectorGroupRequest || (UpdateVoiceConnectorGroupRequest = {}));
export var UpdateVoiceConnectorGroupResponse;
(function (UpdateVoiceConnectorGroupResponse) {
  /**
   * @internal
   */
  UpdateVoiceConnectorGroupResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateVoiceConnectorGroupResponse || (UpdateVoiceConnectorGroupResponse = {}));
//# sourceMappingURL=models_1.js.map
