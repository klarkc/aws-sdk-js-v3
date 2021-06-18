import {
  Account,
  AccountSettings,
  AlexaForBusinessMetadata,
  AppInstanceAdminSummary,
  AppInstanceRetentionSettings,
  AppInstanceStreamingConfiguration,
  AppInstanceSummary,
  AppInstanceUserSummary,
  Attendee,
  Bot,
  BusinessCallingSettings,
  Capability,
  ChannelBanSummary,
  ChannelMembershipForAppInstanceUserSummary,
  ChannelMembershipSummary,
  ChannelMembershipType,
  ChannelMessagePersistenceType,
  ChannelMessageSummary,
  ChannelMessageType,
  ChannelMode,
  ChannelModeratedByAppInstanceUserSummary,
  ChannelModeratorSummary,
  ChannelPrivacy,
  ChannelSummary,
  Credential,
  EmailStatus,
  EmergencyCallingConfiguration,
  EventsConfiguration,
  InviteStatus,
  License,
  LoggingConfiguration,
  Meeting,
  Origination,
  PhoneNumber,
  PhoneNumberAssociationName,
  PhoneNumberOrder,
  PhoneNumberProductType,
  PhoneNumberStatus,
  PhoneNumberType,
  Proxy,
  ProxySession,
  ProxySessionStatus,
  RetentionSettings,
  Room,
  RoomMembership,
  RoomMembershipRole,
  SipMediaApplication,
  SipMediaApplicationEndpoint,
  SipMediaApplicationLoggingConfiguration,
  SipRule,
  SipRuleTargetApplication,
  Tag,
  User,
  UserSettings,
  UserType,
  VoiceConnector,
  VoiceConnectorGroup,
  VoiceConnectorItem,
  VoiceConnectorSettings,
} from "./models_0";
export declare enum NotificationTarget {
  EventBridge = "EventBridge",
  SNS = "SNS",
  SQS = "SQS",
}
/**
 * <p>The targeted recipient for a streaming configuration notification.</p>
 */
export interface StreamingNotificationTarget {
  /**
   * <p>The streaming notification target.</p>
   */
  NotificationTarget: NotificationTarget | string | undefined;
}
export declare namespace StreamingNotificationTarget {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: StreamingNotificationTarget) => any;
}
/**
 * <p>The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether
 *             media streaming is enabled for sending to Amazon Kinesis, and shows the retention period
 *             for the Amazon Kinesis data, in hours.</p>
 */
export interface StreamingConfiguration {
  /**
   * <p>The retention period, in hours, for the Amazon Kinesis data.</p>
   */
  DataRetentionInHours: number | undefined;
  /**
   * <p>When true, media streaming to Amazon Kinesis is turned off.</p>
   */
  Disabled?: boolean;
  /**
   * <p>The streaming notification targets.</p>
   */
  StreamingNotificationTargets?: StreamingNotificationTarget[];
}
export declare namespace StreamingConfiguration {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: StreamingConfiguration) => any;
}
export interface GetVoiceConnectorStreamingConfigurationResponse {
  /**
   * <p>The streaming configuration details.</p>
   */
  StreamingConfiguration?: StreamingConfiguration;
}
export declare namespace GetVoiceConnectorStreamingConfigurationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetVoiceConnectorStreamingConfigurationResponse) => any;
}
export interface GetVoiceConnectorTerminationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}
export declare namespace GetVoiceConnectorTerminationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetVoiceConnectorTerminationRequest) => any;
}
/**
 * <p>Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime
 *             Voice Connector.</p>
 */
export interface Termination {
  /**
   * <p>The limit on calls per second. Max value based on account service quota. Default value of
   *             1.</p>
   */
  CpsLimit?: number;
  /**
   * <p>The default caller ID phone number.</p>
   */
  DefaultPhoneNumber?: string;
  /**
   * <p>The countries to which calls are allowed, in ISO 3166-1 alpha-2 format. Required.</p>
   */
  CallingRegions?: string[];
  /**
   * <p>The IP addresses allowed to make calls, in CIDR format. Required.</p>
   */
  CidrAllowedList?: string[];
  /**
   * <p>When termination settings are disabled, outbound calls can not be made.</p>
   */
  Disabled?: boolean;
}
export declare namespace Termination {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Termination) => any;
}
export interface GetVoiceConnectorTerminationResponse {
  /**
   * <p>The termination setting details.</p>
   */
  Termination?: Termination;
}
export declare namespace GetVoiceConnectorTerminationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetVoiceConnectorTerminationResponse) => any;
}
export interface GetVoiceConnectorTerminationHealthRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}
export declare namespace GetVoiceConnectorTerminationHealthRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetVoiceConnectorTerminationHealthRequest) => any;
}
/**
 * <p>The termination health details, including the source IP address and timestamp of the last
 *             successful SIP <code>OPTIONS</code> message from your SIP infrastructure.</p>
 */
export interface TerminationHealth {
  /**
   * <p>The timestamp, in ISO 8601 format.</p>
   */
  Timestamp?: Date;
  /**
   * <p>The source IP address.</p>
   */
  Source?: string;
}
export declare namespace TerminationHealth {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TerminationHealth) => any;
}
export interface GetVoiceConnectorTerminationHealthResponse {
  /**
   * <p>The termination health details.</p>
   */
  TerminationHealth?: TerminationHealth;
}
export declare namespace GetVoiceConnectorTerminationHealthResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetVoiceConnectorTerminationHealthResponse) => any;
}
/**
 * <p>Invitation object returned after emailing users to invite them to join the Amazon Chime
 *                 <code>Team</code> account.</p>
 */
export interface Invite {
  /**
   * <p>The invite ID.</p>
   */
  InviteId?: string;
  /**
   * <p>The status of the invite.</p>
   */
  Status?: InviteStatus | string;
  /**
   * <p>The email address to which the invite is sent.</p>
   */
  EmailAddress?: string;
  /**
   * <p>The status of the invite email.</p>
   */
  EmailStatus?: EmailStatus | string;
}
export declare namespace Invite {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Invite) => any;
}
export interface InviteUsersRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The user email addresses to which to send the email invitation.</p>
   */
  UserEmailList: string[] | undefined;
  /**
   * <p>The user type.</p>
   */
  UserType?: UserType | string;
}
export declare namespace InviteUsersRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: InviteUsersRequest) => any;
}
export interface InviteUsersResponse {
  /**
   * <p>The email invitation details.</p>
   */
  Invites?: Invite[];
}
export declare namespace InviteUsersResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: InviteUsersResponse) => any;
}
export interface ListAccountsRequest {
  /**
   * <p>Amazon Chime account name prefix with which to filter results.</p>
   */
  Name?: string;
  /**
   * <p>User email address with which to filter results.</p>
   */
  UserEmail?: string;
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   */
  MaxResults?: number;
}
export declare namespace ListAccountsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAccountsRequest) => any;
}
export interface ListAccountsResponse {
  /**
   * <p>List of Amazon Chime accounts and account details.</p>
   */
  Accounts?: Account[];
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListAccountsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAccountsResponse) => any;
}
export interface ListAppInstanceAdminsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
  /**
   * <p>The maximum number of administrators that you want to return.</p>
   */
  MaxResults?: number;
  /**
   * <p>The token returned from previous API requests until the number of administrators is reached.</p>
   */
  NextToken?: string;
}
export declare namespace ListAppInstanceAdminsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAppInstanceAdminsRequest) => any;
}
export interface ListAppInstanceAdminsResponse {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;
  /**
   * <p>The information for each administrator.</p>
   */
  AppInstanceAdmins?: AppInstanceAdminSummary[];
  /**
   * <p>The token returned from previous API requests until the number of administrators is reached.</p>
   */
  NextToken?: string;
}
export declare namespace ListAppInstanceAdminsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAppInstanceAdminsResponse) => any;
}
export interface ListAppInstancesRequest {
  /**
   * <p>The maximum number of <code>AppInstance</code>s that you want to return.</p>
   */
  MaxResults?: number;
  /**
   * <p>The token passed by previous API requests until you reach the maximum number of <code>AppInstance</code>s.</p>
   */
  NextToken?: string;
}
export declare namespace ListAppInstancesRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAppInstancesRequest) => any;
}
export interface ListAppInstancesResponse {
  /**
   * <p>The information for each <code>AppInstance</code>.</p>
   */
  AppInstances?: AppInstanceSummary[];
  /**
   * <p>The token passed by previous API requests until the maximum number of <code>AppInstance</code>s is reached.</p>
   */
  NextToken?: string;
}
export declare namespace ListAppInstancesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAppInstancesResponse) => any;
}
export interface ListAppInstanceUsersRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
  /**
   * <p>The maximum number of requests that you want returned.</p>
   */
  MaxResults?: number;
  /**
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   */
  NextToken?: string;
}
export declare namespace ListAppInstanceUsersRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAppInstanceUsersRequest) => any;
}
export interface ListAppInstanceUsersResponse {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;
  /**
   * <p>The information for each requested <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUsers?: AppInstanceUserSummary[];
  /**
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   */
  NextToken?: string;
}
export declare namespace ListAppInstanceUsersResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAppInstanceUsersResponse) => any;
}
export interface ListAttendeesRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}
export declare namespace ListAttendeesRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAttendeesRequest) => any;
}
export interface ListAttendeesResponse {
  /**
   * <p>The Amazon Chime SDK attendee information.</p>
   */
  Attendees?: Attendee[];
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListAttendeesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAttendeesResponse) => any;
}
export interface ListAttendeeTagsRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;
}
export declare namespace ListAttendeeTagsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAttendeeTagsRequest) => any;
}
export interface ListAttendeeTagsResponse {
  /**
   * <p>A list of tag key-value pairs.</p>
   */
  Tags?: Tag[];
}
export declare namespace ListAttendeeTagsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAttendeeTagsResponse) => any;
}
export interface ListBotsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The maximum number of results to return in a single call. The default is 10.</p>
   */
  MaxResults?: number;
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListBotsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListBotsRequest) => any;
}
export interface ListBotsResponse {
  /**
   * <p>List of bots and bot details.</p>
   */
  Bots?: Bot[];
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListBotsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListBotsResponse) => any;
}
export interface ListChannelBansRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The maximum number of bans that you want returned.</p>
   */
  MaxResults?: number;
  /**
   * <p>The token passed by previous API calls until all requested bans are returned.</p>
   */
  NextToken?: string;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace ListChannelBansRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListChannelBansRequest) => any;
}
export interface ListChannelBansResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
  /**
   * <p>The token passed by previous API calls until all requested bans are returned.</p>
   */
  NextToken?: string;
  /**
   * <p>The information for each requested ban.</p>
   */
  ChannelBans?: ChannelBanSummary[];
}
export declare namespace ListChannelBansResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListChannelBansResponse) => any;
}
export interface ListChannelMembershipsRequest {
  /**
   * <p>The maximum number of channel memberships that you want returned.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of
   *     <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals
   *     <code>HIDDEN</code>. Otherwise hidden members are not returned.</p>
   */
  Type?: ChannelMembershipType | string;
  /**
   * <p>The maximum number of channel memberships that you want returned.</p>
   */
  MaxResults?: number;
  /**
   * <p>The token passed by previous API calls until all requested channel memberships are returned.</p>
   */
  NextToken?: string;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace ListChannelMembershipsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListChannelMembershipsRequest) => any;
}
export interface ListChannelMembershipsResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
  /**
   * <p>The information for the requested channel memberships.</p>
   */
  ChannelMemberships?: ChannelMembershipSummary[];
  /**
   * <p>The token passed by previous API calls until all requested channel memberships are returned.</p>
   */
  NextToken?: string;
}
export declare namespace ListChannelMembershipsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListChannelMembershipsResponse) => any;
}
export interface ListChannelMembershipsForAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>s</p>
   */
  AppInstanceUserArn?: string;
  /**
   * <p>The maximum number of users that you want returned.</p>
   */
  MaxResults?: number;
  /**
   * <p>The token returned from previous API requests until the number of channel memberships is reached.</p>
   */
  NextToken?: string;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace ListChannelMembershipsForAppInstanceUserRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListChannelMembershipsForAppInstanceUserRequest) => any;
}
export interface ListChannelMembershipsForAppInstanceUserResponse {
  /**
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   */
  ChannelMemberships?: ChannelMembershipForAppInstanceUserSummary[];
  /**
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   */
  NextToken?: string;
}
export declare namespace ListChannelMembershipsForAppInstanceUserResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListChannelMembershipsForAppInstanceUserResponse) => any;
}
export declare enum SortOrder {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}
export interface ListChannelMessagesRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The order in which you want messages sorted. Default is Descending, based on time created.</p>
   */
  SortOrder?: SortOrder | string;
  /**
   * <p>The initial or starting time stamp for your requested messages.</p>
   */
  NotBefore?: Date;
  /**
   * <p>The final or ending time stamp for your requested messages.</p>
   */
  NotAfter?: Date;
  /**
   * <p>The maximum number of messages that you want returned.</p>
   */
  MaxResults?: number;
  /**
   * <p>The token passed by previous API calls until all requested messages are returned.</p>
   */
  NextToken?: string;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace ListChannelMessagesRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListChannelMessagesRequest) => any;
}
export interface ListChannelMessagesResponse {
  /**
   * <p>The ARN of the channel containing the requested messages.</p>
   */
  ChannelArn?: string;
  /**
   * <p>The token passed by previous API calls until all requested messages are returned.</p>
   */
  NextToken?: string;
  /**
   * <p>The information about, and content of, each requested message.</p>
   */
  ChannelMessages?: ChannelMessageSummary[];
}
export declare namespace ListChannelMessagesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListChannelMessagesResponse) => any;
}
export interface ListChannelModeratorsRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The maximum number of moderators that you want returned.</p>
   */
  MaxResults?: number;
  /**
   * <p>The token passed by previous API calls until all requested moderators are returned.</p>
   */
  NextToken?: string;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace ListChannelModeratorsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListChannelModeratorsRequest) => any;
}
export interface ListChannelModeratorsResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
  /**
   * <p>The token passed by previous API calls until all requested moderators are returned.</p>
   */
  NextToken?: string;
  /**
   * <p>The information about and names of each moderator.</p>
   */
  ChannelModerators?: ChannelModeratorSummary[];
}
export declare namespace ListChannelModeratorsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListChannelModeratorsResponse) => any;
}
export interface ListChannelsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
  /**
   * <p>The privacy setting. <code>PUBLIC</code> retrieves all the public channels. <code>PRIVATE</code> retrieves private channels. Only an
   *     <code>AppInstanceAdmin</code> can retrieve private channels.
   * </p>
   */
  Privacy?: ChannelPrivacy | string;
  /**
   * <p>The maximum number of channels that you want to return.</p>
   */
  MaxResults?: number;
  /**
   * <p>The token passed by previous API calls until all requested channels are returned.</p>
   */
  NextToken?: string;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace ListChannelsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListChannelsRequest) => any;
}
export interface ListChannelsResponse {
  /**
   * <p>The information about each channel.</p>
   */
  Channels?: ChannelSummary[];
  /**
   * <p>The token returned from previous API requests until the number of channels is reached.</p>
   */
  NextToken?: string;
}
export declare namespace ListChannelsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListChannelsResponse) => any;
}
export interface ListChannelsModeratedByAppInstanceUserRequest {
  /**
   * <p>The ARN of the user in the moderated channel.</p>
   */
  AppInstanceUserArn?: string;
  /**
   * <p>The maximum number of channels in the request.</p>
   */
  MaxResults?: number;
  /**
   * <p>The token returned from previous API requests until the number of channels moderated by the user is reached.</p>
   */
  NextToken?: string;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace ListChannelsModeratedByAppInstanceUserRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListChannelsModeratedByAppInstanceUserRequest) => any;
}
export interface ListChannelsModeratedByAppInstanceUserResponse {
  /**
   * <p>The moderated channels in the request.</p>
   */
  Channels?: ChannelModeratedByAppInstanceUserSummary[];
  /**
   * <p>The token returned from previous API requests until the number of channels moderated by the user is reached.</p>
   */
  NextToken?: string;
}
export declare namespace ListChannelsModeratedByAppInstanceUserResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListChannelsModeratedByAppInstanceUserResponse) => any;
}
export interface ListMeetingsRequest {
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}
export declare namespace ListMeetingsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListMeetingsRequest) => any;
}
export interface ListMeetingsResponse {
  /**
   * <p>The Amazon Chime SDK meeting information.</p>
   */
  Meetings?: Meeting[];
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListMeetingsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListMeetingsResponse) => any;
}
export interface ListMeetingTagsRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}
export declare namespace ListMeetingTagsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListMeetingTagsRequest) => any;
}
export interface ListMeetingTagsResponse {
  /**
   * <p>A list of tag key-value pairs.</p>
   */
  Tags?: Tag[];
}
export declare namespace ListMeetingTagsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListMeetingTagsResponse) => any;
}
export interface ListPhoneNumberOrdersRequest {
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}
export declare namespace ListPhoneNumberOrdersRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListPhoneNumberOrdersRequest) => any;
}
export interface ListPhoneNumberOrdersResponse {
  /**
   * <p>The phone number order details.</p>
   */
  PhoneNumberOrders?: PhoneNumberOrder[];
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListPhoneNumberOrdersResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListPhoneNumberOrdersResponse) => any;
}
export interface ListPhoneNumbersRequest {
  /**
   * <p>The phone number status.</p>
   */
  Status?: PhoneNumberStatus | string;
  /**
   * <p>The phone number product type.</p>
   */
  ProductType?: PhoneNumberProductType | string;
  /**
   * <p>The filter to use to limit the number of results.</p>
   */
  FilterName?: PhoneNumberAssociationName | string;
  /**
   * <p>The value to use for the filter.</p>
   */
  FilterValue?: string;
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListPhoneNumbersRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListPhoneNumbersRequest) => any;
}
export interface ListPhoneNumbersResponse {
  /**
   * <p>The phone number details.</p>
   */
  PhoneNumbers?: PhoneNumber[];
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListPhoneNumbersResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListPhoneNumbersResponse) => any;
}
export interface ListProxySessionsRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
  /**
   * <p>The proxy session status.</p>
   */
  Status?: ProxySessionStatus | string;
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}
export declare namespace ListProxySessionsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListProxySessionsRequest) => any;
}
export interface ListProxySessionsResponse {
  /**
   * <p>The proxy session details.</p>
   */
  ProxySessions?: ProxySession[];
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListProxySessionsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListProxySessionsResponse) => any;
}
export interface ListRoomMembershipsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListRoomMembershipsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListRoomMembershipsRequest) => any;
}
export interface ListRoomMembershipsResponse {
  /**
   * <p>The room membership details.</p>
   */
  RoomMemberships?: RoomMembership[];
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListRoomMembershipsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListRoomMembershipsResponse) => any;
}
export interface ListRoomsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The member ID (user ID or bot ID).</p>
   */
  MemberId?: string;
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListRoomsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListRoomsRequest) => any;
}
export interface ListRoomsResponse {
  /**
   * <p>The room details.</p>
   */
  Rooms?: Room[];
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListRoomsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListRoomsResponse) => any;
}
export interface ListSipMediaApplicationsRequest {
  /**
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   */
  MaxResults?: number;
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListSipMediaApplicationsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListSipMediaApplicationsRequest) => any;
}
export interface ListSipMediaApplicationsResponse {
  /**
   * <p>List of SIP media applications and application details.</p>
   */
  SipMediaApplications?: SipMediaApplication[];
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListSipMediaApplicationsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListSipMediaApplicationsResponse) => any;
}
export interface ListSipRulesRequest {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId?: string;
  /**
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   */
  MaxResults?: number;
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListSipRulesRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListSipRulesRequest) => any;
}
export interface ListSipRulesResponse {
  /**
   * <p>List of SIP rules and rule details.</p>
   */
  SipRules?: SipRule[];
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListSipRulesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListSipRulesResponse) => any;
}
export interface ListSupportedPhoneNumberCountriesRequest {
  /**
   * <p>The phone number product type.</p>
   */
  ProductType: PhoneNumberProductType | string | undefined;
}
export declare namespace ListSupportedPhoneNumberCountriesRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListSupportedPhoneNumberCountriesRequest) => any;
}
/**
 * <p>The phone number country.</p>
 */
export interface PhoneNumberCountry {
  /**
   * <p>The phone number country code. Format: ISO 3166-1 alpha-2.</p>
   */
  CountryCode?: string;
  /**
   * <p>The supported phone number types. </p>
   */
  SupportedPhoneNumberTypes?: (PhoneNumberType | string)[];
}
export declare namespace PhoneNumberCountry {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PhoneNumberCountry) => any;
}
export interface ListSupportedPhoneNumberCountriesResponse {
  /**
   * <p>The supported phone number countries.</p>
   */
  PhoneNumberCountries?: PhoneNumberCountry[];
}
export declare namespace ListSupportedPhoneNumberCountriesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListSupportedPhoneNumberCountriesResponse) => any;
}
export interface ListTagsForResourceRequest {
  /**
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tag-key value pairs.</p>
   */
  Tags?: Tag[];
}
export declare namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
export interface ListUsersRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>Optional. The user email address used to filter results. Maximum 1.</p>
   */
  UserEmail?: string;
  /**
   * <p>The user type.</p>
   */
  UserType?: UserType | string;
  /**
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   */
  MaxResults?: number;
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListUsersRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListUsersRequest) => any;
}
export interface ListUsersResponse {
  /**
   * <p>List of users and user details.</p>
   */
  Users?: User[];
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListUsersResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListUsersResponse) => any;
}
export interface ListVoiceConnectorGroupsRequest {
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}
export declare namespace ListVoiceConnectorGroupsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListVoiceConnectorGroupsRequest) => any;
}
export interface ListVoiceConnectorGroupsResponse {
  /**
   * <p>The details of the Amazon Chime Voice Connector groups.</p>
   */
  VoiceConnectorGroups?: VoiceConnectorGroup[];
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListVoiceConnectorGroupsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListVoiceConnectorGroupsResponse) => any;
}
export interface ListVoiceConnectorsRequest {
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}
export declare namespace ListVoiceConnectorsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListVoiceConnectorsRequest) => any;
}
export interface ListVoiceConnectorsResponse {
  /**
   * <p>The details of the Amazon Chime Voice Connectors.</p>
   */
  VoiceConnectors?: VoiceConnector[];
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListVoiceConnectorsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListVoiceConnectorsResponse) => any;
}
export interface ListVoiceConnectorTerminationCredentialsRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}
export declare namespace ListVoiceConnectorTerminationCredentialsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListVoiceConnectorTerminationCredentialsRequest) => any;
}
export interface ListVoiceConnectorTerminationCredentialsResponse {
  /**
   * <p>A list of user names.</p>
   */
  Usernames?: string[];
}
export declare namespace ListVoiceConnectorTerminationCredentialsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListVoiceConnectorTerminationCredentialsResponse) => any;
}
export interface LogoutUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
}
export declare namespace LogoutUserRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: LogoutUserRequest) => any;
}
export interface LogoutUserResponse {}
export declare namespace LogoutUserResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: LogoutUserResponse) => any;
}
export interface PutAppInstanceRetentionSettingsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
  /**
   * <p>The time in days to retain data. Data type: number.</p>
   */
  AppInstanceRetentionSettings: AppInstanceRetentionSettings | undefined;
}
export declare namespace PutAppInstanceRetentionSettingsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutAppInstanceRetentionSettingsRequest) => any;
}
export interface PutAppInstanceRetentionSettingsResponse {
  /**
   * <p>The time in days to retain data. Data type: number.</p>
   */
  AppInstanceRetentionSettings?: AppInstanceRetentionSettings;
  /**
   * <p>The time at which the API deletes data.</p>
   */
  InitiateDeletionTimestamp?: Date;
}
export declare namespace PutAppInstanceRetentionSettingsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutAppInstanceRetentionSettingsResponse) => any;
}
export interface PutAppInstanceStreamingConfigurationsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
  /**
   * <p>The streaming configurations set for an <code>AppInstance</code>.</p>
   */
  AppInstanceStreamingConfigurations: AppInstanceStreamingConfiguration[] | undefined;
}
export declare namespace PutAppInstanceStreamingConfigurationsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutAppInstanceStreamingConfigurationsRequest) => any;
}
export interface PutAppInstanceStreamingConfigurationsResponse {
  /**
   * <p>The streaming configurations of an <code>AppInstance</code>.</p>
   */
  AppInstanceStreamingConfigurations?: AppInstanceStreamingConfiguration[];
}
export declare namespace PutAppInstanceStreamingConfigurationsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutAppInstanceStreamingConfigurationsResponse) => any;
}
export interface PutEventsConfigurationRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;
  /**
   * <p>HTTPS endpoint that allows the bot to receive outgoing events.</p>
   */
  OutboundEventsHTTPSEndpoint?: string;
  /**
   * <p>Lambda function ARN that allows the bot to receive outgoing events.</p>
   */
  LambdaFunctionArn?: string;
}
export declare namespace PutEventsConfigurationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutEventsConfigurationRequest) => any;
}
export interface PutEventsConfigurationResponse {
  /**
   * <p>The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN.</p>
   */
  EventsConfiguration?: EventsConfiguration;
}
export declare namespace PutEventsConfigurationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutEventsConfigurationResponse) => any;
}
export interface PutRetentionSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The retention settings.</p>
   */
  RetentionSettings: RetentionSettings | undefined;
}
export declare namespace PutRetentionSettingsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutRetentionSettingsRequest) => any;
}
export interface PutRetentionSettingsResponse {
  /**
   * <p>The retention settings.</p>
   */
  RetentionSettings?: RetentionSettings;
  /**
   * <p>The timestamp representing the time at which the specified items are permanently deleted, in ISO 8601 format.</p>
   */
  InitiateDeletionTimestamp?: Date;
}
export declare namespace PutRetentionSettingsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutRetentionSettingsResponse) => any;
}
export interface PutSipMediaApplicationLoggingConfigurationRequest {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;
  /**
   * <p>The actual logging configuration.</p>
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}
export declare namespace PutSipMediaApplicationLoggingConfigurationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutSipMediaApplicationLoggingConfigurationRequest) => any;
}
export interface PutSipMediaApplicationLoggingConfigurationResponse {
  /**
   * <p>Logging configuration of the SIP media application.</p>
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}
export declare namespace PutSipMediaApplicationLoggingConfigurationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutSipMediaApplicationLoggingConfigurationResponse) => any;
}
export interface PutVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
  /**
   * <p>The emergency calling configuration details.</p>
   */
  EmergencyCallingConfiguration: EmergencyCallingConfiguration | undefined;
}
export declare namespace PutVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutVoiceConnectorEmergencyCallingConfigurationRequest) => any;
}
export interface PutVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * <p>The emergency calling configuration details.</p>
   */
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
}
export declare namespace PutVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutVoiceConnectorEmergencyCallingConfigurationResponse) => any;
}
export interface PutVoiceConnectorLoggingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
  /**
   * <p>The logging configuration details to add.</p>
   */
  LoggingConfiguration: LoggingConfiguration | undefined;
}
export declare namespace PutVoiceConnectorLoggingConfigurationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutVoiceConnectorLoggingConfigurationRequest) => any;
}
export interface PutVoiceConnectorLoggingConfigurationResponse {
  /**
   * <p>The updated logging configuration details.</p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}
export declare namespace PutVoiceConnectorLoggingConfigurationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutVoiceConnectorLoggingConfigurationResponse) => any;
}
export interface PutVoiceConnectorOriginationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
  /**
   * <p>The origination setting details to add.</p>
   */
  Origination: Origination | undefined;
}
export declare namespace PutVoiceConnectorOriginationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutVoiceConnectorOriginationRequest) => any;
}
export interface PutVoiceConnectorOriginationResponse {
  /**
   * <p>The updated origination setting details.</p>
   */
  Origination?: Origination;
}
export declare namespace PutVoiceConnectorOriginationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutVoiceConnectorOriginationResponse) => any;
}
export interface PutVoiceConnectorProxyRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
  /**
   * <p>The default number of minutes allowed for proxy sessions.</p>
   */
  DefaultSessionExpiryMinutes: number | undefined;
  /**
   * <p>The countries for proxy phone numbers to be selected from.</p>
   */
  PhoneNumberPoolCountries: string[] | undefined;
  /**
   * <p>The phone number to route calls to after a proxy session expires.</p>
   */
  FallBackPhoneNumber?: string;
  /**
   * <p>When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector.</p>
   */
  Disabled?: boolean;
}
export declare namespace PutVoiceConnectorProxyRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutVoiceConnectorProxyRequest) => any;
}
export interface PutVoiceConnectorProxyResponse {
  /**
   * <p>The proxy configuration details.</p>
   */
  Proxy?: Proxy;
}
export declare namespace PutVoiceConnectorProxyResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutVoiceConnectorProxyResponse) => any;
}
export interface PutVoiceConnectorStreamingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
  /**
   * <p>The streaming configuration details to add.</p>
   */
  StreamingConfiguration: StreamingConfiguration | undefined;
}
export declare namespace PutVoiceConnectorStreamingConfigurationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutVoiceConnectorStreamingConfigurationRequest) => any;
}
export interface PutVoiceConnectorStreamingConfigurationResponse {
  /**
   * <p>The updated streaming configuration details.</p>
   */
  StreamingConfiguration?: StreamingConfiguration;
}
export declare namespace PutVoiceConnectorStreamingConfigurationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutVoiceConnectorStreamingConfigurationResponse) => any;
}
export interface PutVoiceConnectorTerminationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
  /**
   * <p>The termination setting details to add.</p>
   */
  Termination: Termination | undefined;
}
export declare namespace PutVoiceConnectorTerminationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutVoiceConnectorTerminationRequest) => any;
}
export interface PutVoiceConnectorTerminationResponse {
  /**
   * <p>The updated termination setting details.</p>
   */
  Termination?: Termination;
}
export declare namespace PutVoiceConnectorTerminationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutVoiceConnectorTerminationResponse) => any;
}
export interface PutVoiceConnectorTerminationCredentialsRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
  /**
   * <p>The termination SIP credentials.</p>
   */
  Credentials?: Credential[];
}
export declare namespace PutVoiceConnectorTerminationCredentialsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PutVoiceConnectorTerminationCredentialsRequest) => any;
}
export interface RedactChannelMessageRequest {
  /**
   * <p>The ARN of the channel containing the messages that you want to redact.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The ID of the message being redacted.</p>
   */
  MessageId: string | undefined;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace RedactChannelMessageRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RedactChannelMessageRequest) => any;
}
export interface RedactChannelMessageResponse {
  /**
   * <p>The ARN of the channel containing the messages that you want to redact.</p>
   */
  ChannelArn?: string;
  /**
   * <p>The ID of the message being redacted.</p>
   */
  MessageId?: string;
}
export declare namespace RedactChannelMessageResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RedactChannelMessageResponse) => any;
}
export interface RedactConversationMessageRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The conversation ID.</p>
   */
  ConversationId: string | undefined;
  /**
   * <p>The message ID.</p>
   */
  MessageId: string | undefined;
}
export declare namespace RedactConversationMessageRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RedactConversationMessageRequest) => any;
}
export interface RedactConversationMessageResponse {}
export declare namespace RedactConversationMessageResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RedactConversationMessageResponse) => any;
}
export interface RedactRoomMessageRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;
  /**
   * <p>The message ID.</p>
   */
  MessageId: string | undefined;
}
export declare namespace RedactRoomMessageRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RedactRoomMessageRequest) => any;
}
export interface RedactRoomMessageResponse {}
export declare namespace RedactRoomMessageResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RedactRoomMessageResponse) => any;
}
export interface RegenerateSecurityTokenRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;
}
export declare namespace RegenerateSecurityTokenRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RegenerateSecurityTokenRequest) => any;
}
export interface RegenerateSecurityTokenResponse {
  /**
   * <p>A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime.</p>
   */
  Bot?: Bot;
}
export declare namespace RegenerateSecurityTokenResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RegenerateSecurityTokenResponse) => any;
}
export interface ResetPersonalPINRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
}
export declare namespace ResetPersonalPINRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ResetPersonalPINRequest) => any;
}
export interface ResetPersonalPINResponse {
  /**
   * <p>The user details and new personal meeting PIN.</p>
   */
  User?: User;
}
export declare namespace ResetPersonalPINResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ResetPersonalPINResponse) => any;
}
export interface RestorePhoneNumberRequest {
  /**
   * <p>The phone number.</p>
   */
  PhoneNumberId: string | undefined;
}
export declare namespace RestorePhoneNumberRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RestorePhoneNumberRequest) => any;
}
export interface RestorePhoneNumberResponse {
  /**
   * <p>The phone number details.</p>
   */
  PhoneNumber?: PhoneNumber;
}
export declare namespace RestorePhoneNumberResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RestorePhoneNumberResponse) => any;
}
export interface SearchAvailablePhoneNumbersRequest {
  /**
   * <p>The area code used to filter results. Only applies to the
   *             US.</p>
   */
  AreaCode?: string;
  /**
   * <p>The city used to filter results. Only applies to the
   *             US.</p>
   */
  City?: string;
  /**
   * <p>The country used to filter results. Defaults to the
   *             US
   *             Format: ISO 3166-1 alpha-2.</p>
   */
  Country?: string;
  /**
   * <p>The state used to filter results. Required only if you provide <code>City</code>. Only
   *             applies to the
   *             US.</p>
   */
  State?: string;
  /**
   * <p>The toll-free prefix that you use to filter results. Only applies to the
   *             US.</p>
   */
  TollFreePrefix?: string;
  /**
   * <p>The phone number type used to filter results. Required for
   *             non-US
   *             numbers.</p>
   */
  PhoneNumberType?: PhoneNumberType | string;
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
  /**
   * <p>The token used to retrieve the next page of results.</p>
   */
  NextToken?: string;
}
export declare namespace SearchAvailablePhoneNumbersRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: SearchAvailablePhoneNumbersRequest) => any;
}
export interface SearchAvailablePhoneNumbersResponse {
  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers?: string[];
  /**
   * <p>The token used to retrieve the next page of search results.</p>
   */
  NextToken?: string;
}
export declare namespace SearchAvailablePhoneNumbersResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: SearchAvailablePhoneNumbersResponse) => any;
}
export interface SendChannelMessageRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The content of the message.</p>
   */
  Content: string | undefined;
  /**
   * <p>The type of message, <code>STANDARD</code> or <code>CONTROL</code>.</p>
   */
  Type: ChannelMessageType | string | undefined;
  /**
   * <p>Boolean that controls whether the message is persisted on the back end. Required.</p>
   */
  Persistence: ChannelMessagePersistenceType | string | undefined;
  /**
   * <p>The optional metadata for each message.</p>
   */
  Metadata?: string;
  /**
   * <p>The <code>Idempotency</code> token for each client request.</p>
   */
  ClientRequestToken?: string;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace SendChannelMessageRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: SendChannelMessageRequest) => any;
}
export interface SendChannelMessageResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
  /**
   * <p>The ID string assigned to each message.</p>
   */
  MessageId?: string;
}
export declare namespace SendChannelMessageResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: SendChannelMessageResponse) => any;
}
export interface TagAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;
  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags: Tag[] | undefined;
}
export declare namespace TagAttendeeRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TagAttendeeRequest) => any;
}
export interface TagMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags: Tag[] | undefined;
}
export declare namespace TagMeetingRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TagMeetingRequest) => any;
}
export interface TagResourceRequest {
  /**
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;
  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags: Tag[] | undefined;
}
export declare namespace TagResourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface UntagAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;
  /**
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
}
export declare namespace UntagAttendeeRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UntagAttendeeRequest) => any;
}
export interface UntagMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
  /**
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
}
export declare namespace UntagMeetingRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UntagMeetingRequest) => any;
}
export interface UntagResourceRequest {
  /**
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;
  /**
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UpdateAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The new name for the specified Amazon Chime account.</p>
   */
  Name?: string;
}
export declare namespace UpdateAccountRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateAccountRequest) => any;
}
export interface UpdateAccountResponse {
  /**
   * <p>The updated Amazon Chime account details.</p>
   */
  Account?: Account;
}
export declare namespace UpdateAccountResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateAccountResponse) => any;
}
export interface UpdateAccountSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The Amazon Chime account settings to update.</p>
   */
  AccountSettings: AccountSettings | undefined;
}
export declare namespace UpdateAccountSettingsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateAccountSettingsRequest) => any;
}
export interface UpdateAccountSettingsResponse {}
export declare namespace UpdateAccountSettingsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateAccountSettingsResponse) => any;
}
export interface UpdateAppInstanceRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
  /**
   * <p>The name that you want to change.</p>
   */
  Name: string | undefined;
  /**
   * <p>The metadata that you want to change.</p>
   */
  Metadata?: string;
}
export declare namespace UpdateAppInstanceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateAppInstanceRequest) => any;
}
export interface UpdateAppInstanceResponse {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;
}
export declare namespace UpdateAppInstanceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateAppInstanceResponse) => any;
}
export interface UpdateAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;
  /**
   * <p>The name of the <code>AppInstanceUser</code>.</p>
   */
  Name: string | undefined;
  /**
   * <p>The metadata of the <code>AppInstanceUser</code>.</p>
   */
  Metadata?: string;
}
export declare namespace UpdateAppInstanceUserRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateAppInstanceUserRequest) => any;
}
export interface UpdateAppInstanceUserResponse {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;
}
export declare namespace UpdateAppInstanceUserResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateAppInstanceUserResponse) => any;
}
export interface UpdateBotRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;
  /**
   * <p>When true, stops the specified bot from running in your account.</p>
   */
  Disabled?: boolean;
}
export declare namespace UpdateBotRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateBotRequest) => any;
}
export interface UpdateBotResponse {
  /**
   * <p>The updated bot details.</p>
   */
  Bot?: Bot;
}
export declare namespace UpdateBotResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateBotResponse) => any;
}
export interface UpdateChannelRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The name of the channel.</p>
   */
  Name: string | undefined;
  /**
   * <p>The mode of the update request.</p>
   */
  Mode: ChannelMode | string | undefined;
  /**
   * <p>The metadata for the update request.</p>
   */
  Metadata?: string;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace UpdateChannelRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateChannelRequest) => any;
}
export interface UpdateChannelResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
}
export declare namespace UpdateChannelResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateChannelResponse) => any;
}
export interface UpdateChannelMessageRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The ID string of the message being updated.</p>
   */
  MessageId: string | undefined;
  /**
   * <p>The content of the message being updated.</p>
   */
  Content?: string;
  /**
   * <p>The metadata of the message being updated.</p>
   */
  Metadata?: string;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace UpdateChannelMessageRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateChannelMessageRequest) => any;
}
export interface UpdateChannelMessageResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
  /**
   * <p>The ID string of the message being updated.</p>
   */
  MessageId?: string;
}
export declare namespace UpdateChannelMessageResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateChannelMessageResponse) => any;
}
export interface UpdateChannelReadMarkerRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace UpdateChannelReadMarkerRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateChannelReadMarkerRequest) => any;
}
export interface UpdateChannelReadMarkerResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
}
export declare namespace UpdateChannelReadMarkerResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateChannelReadMarkerResponse) => any;
}
export interface UpdateGlobalSettingsRequest {
  /**
   * <p>The Amazon Chime Business Calling settings.</p>
   */
  BusinessCalling: BusinessCallingSettings | undefined;
  /**
   * <p>The Amazon Chime Voice Connector settings.</p>
   */
  VoiceConnector: VoiceConnectorSettings | undefined;
}
export declare namespace UpdateGlobalSettingsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateGlobalSettingsRequest) => any;
}
export interface UpdatePhoneNumberRequest {
  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId: string | undefined;
  /**
   * <p>The product type.</p>
   */
  ProductType?: PhoneNumberProductType | string;
  /**
   * <p>The outbound calling name associated with the phone number.</p>
   */
  CallingName?: string;
}
export declare namespace UpdatePhoneNumberRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdatePhoneNumberRequest) => any;
}
export interface UpdatePhoneNumberResponse {
  /**
   * <p>The updated phone number details.</p>
   */
  PhoneNumber?: PhoneNumber;
}
export declare namespace UpdatePhoneNumberResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdatePhoneNumberResponse) => any;
}
export interface UpdatePhoneNumberSettingsRequest {
  /**
   * <p>The default outbound calling name for the account.</p>
   */
  CallingName: string | undefined;
}
export declare namespace UpdatePhoneNumberSettingsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdatePhoneNumberSettingsRequest) => any;
}
export interface UpdateProxySessionRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
  /**
   * <p>The proxy session ID.</p>
   */
  ProxySessionId: string | undefined;
  /**
   * <p>The proxy session capabilities.</p>
   */
  Capabilities: (Capability | string)[] | undefined;
  /**
   * <p>The number of minutes allowed for the proxy session.</p>
   */
  ExpiryMinutes?: number;
}
export declare namespace UpdateProxySessionRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateProxySessionRequest) => any;
}
export interface UpdateProxySessionResponse {
  /**
   * <p>The proxy session details.</p>
   */
  ProxySession?: ProxySession;
}
export declare namespace UpdateProxySessionResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateProxySessionResponse) => any;
}
export interface UpdateRoomRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;
  /**
   * <p>The room name.</p>
   */
  Name?: string;
}
export declare namespace UpdateRoomRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateRoomRequest) => any;
}
export interface UpdateRoomResponse {
  /**
   * <p>The room details.</p>
   */
  Room?: Room;
}
export declare namespace UpdateRoomResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateRoomResponse) => any;
}
export interface UpdateRoomMembershipRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;
  /**
   * <p>The member ID.</p>
   */
  MemberId: string | undefined;
  /**
   * <p>The role of the member.</p>
   */
  Role?: RoomMembershipRole | string;
}
export declare namespace UpdateRoomMembershipRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateRoomMembershipRequest) => any;
}
export interface UpdateRoomMembershipResponse {
  /**
   * <p>The room membership details.</p>
   */
  RoomMembership?: RoomMembership;
}
export declare namespace UpdateRoomMembershipResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateRoomMembershipResponse) => any;
}
export interface UpdateSipMediaApplicationRequest {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;
  /**
   * <p>The new name for the specified SIP media application.</p>
   */
  Name?: string;
  /**
   * <p>The new set of endpoints for the specified SIP media application.</p>
   */
  Endpoints?: SipMediaApplicationEndpoint[];
}
export declare namespace UpdateSipMediaApplicationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateSipMediaApplicationRequest) => any;
}
export interface UpdateSipMediaApplicationResponse {
  /**
   * <p>The updated SIP media application details.</p>
   */
  SipMediaApplication?: SipMediaApplication;
}
export declare namespace UpdateSipMediaApplicationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateSipMediaApplicationResponse) => any;
}
export interface UpdateSipRuleRequest {
  /**
   * <p>The SIP rule ID.</p>
   */
  SipRuleId: string | undefined;
  /**
   * <p>The new name for the specified SIP rule.</p>
   */
  Name: string | undefined;
  /**
   * <p>The new value specified to indicate whether the rule is disabled.</p>
   */
  Disabled?: boolean;
  /**
   * <p>The new value of the list of target applications.</p>
   */
  TargetApplications?: SipRuleTargetApplication[];
}
export declare namespace UpdateSipRuleRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateSipRuleRequest) => any;
}
export interface UpdateSipRuleResponse {
  /**
   * <p>Updated SIP rule details.</p>
   */
  SipRule?: SipRule;
}
export declare namespace UpdateSipRuleResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateSipRuleResponse) => any;
}
export interface UpdateUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
  /**
   * <p>The user license type to update. This must be a supported license type for the Amazon Chime
   *             account that the user belongs to.</p>
   */
  LicenseType?: License | string;
  /**
   * <p>The user type.</p>
   */
  UserType?: UserType | string;
  /**
   * <p>The Alexa for Business metadata.</p>
   */
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata;
}
export declare namespace UpdateUserRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateUserRequest) => any;
}
export interface UpdateUserResponse {
  /**
   * <p>The updated user details.</p>
   */
  User?: User;
}
export declare namespace UpdateUserResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateUserResponse) => any;
}
export interface UpdateUserSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
  /**
   * <p>The user settings to update.</p>
   */
  UserSettings: UserSettings | undefined;
}
export declare namespace UpdateUserSettingsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateUserSettingsRequest) => any;
}
export interface UpdateVoiceConnectorRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
  /**
   * <p>The name of the Amazon Chime Voice Connector.</p>
   */
  Name: string | undefined;
  /**
   * <p>When enabled, requires encryption for the Amazon Chime Voice Connector.</p>
   */
  RequireEncryption: boolean | undefined;
}
export declare namespace UpdateVoiceConnectorRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateVoiceConnectorRequest) => any;
}
export interface UpdateVoiceConnectorResponse {
  /**
   * <p>The updated Amazon Chime Voice Connector details.</p>
   */
  VoiceConnector?: VoiceConnector;
}
export declare namespace UpdateVoiceConnectorResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateVoiceConnectorResponse) => any;
}
export interface UpdateVoiceConnectorGroupRequest {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;
  /**
   * <p>The name of the Amazon Chime Voice Connector group.</p>
   */
  Name: string | undefined;
  /**
   * <p>The <code>VoiceConnectorItems</code> to associate with the group.</p>
   */
  VoiceConnectorItems: VoiceConnectorItem[] | undefined;
}
export declare namespace UpdateVoiceConnectorGroupRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateVoiceConnectorGroupRequest) => any;
}
export interface UpdateVoiceConnectorGroupResponse {
  /**
   * <p>The updated Amazon Chime Voice Connector group details.</p>
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}
export declare namespace UpdateVoiceConnectorGroupResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateVoiceConnectorGroupResponse) => any;
}
