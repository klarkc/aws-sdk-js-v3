import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export declare enum ErrorCode {
  AccessDenied = "AccessDenied",
  BadRequest = "BadRequest",
  Conflict = "Conflict",
  Forbidden = "Forbidden",
  NotFound = "NotFound",
  PhoneNumberAssociationsExist = "PhoneNumberAssociationsExist",
  PreconditionFailed = "PreconditionFailed",
  ResourceLimitExceeded = "ResourceLimitExceeded",
  ServiceFailure = "ServiceFailure",
  ServiceUnavailable = "ServiceUnavailable",
  Throttled = "Throttled",
  Throttling = "Throttling",
  Unauthorized = "Unauthorized",
  Unprocessable = "Unprocessable",
  VoiceConnectorGroupAssociationsExist = "VoiceConnectorGroupAssociationsExist",
}
/**
 * <p>You don't have permissions to perform the requested operation.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}
export declare namespace AccessDeniedException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AccessDeniedException) => any;
}
export declare enum AccountType {
  EnterpriseDirectory = "EnterpriseDirectory",
  EnterpriseLWA = "EnterpriseLWA",
  EnterpriseOIDC = "EnterpriseOIDC",
  Team = "Team",
}
export declare enum License {
  Basic = "Basic",
  Plus = "Plus",
  Pro = "Pro",
  ProTrial = "ProTrial",
}
/**
 * <p>An Active Directory (AD) group whose members are granted permission to act as delegates.</p>
 */
export interface SigninDelegateGroup {
  /**
   * <p>The group name.</p>
   */
  GroupName?: string;
}
export declare namespace SigninDelegateGroup {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: SigninDelegateGroup) => any;
}
/**
 * <p>The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts.</p>
 */
export interface Account {
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The Amazon Chime account name.</p>
   */
  Name: string | undefined;
  /**
   * <p>The Amazon Chime account type. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your
   *                 Amazon Chime Accounts</a> in the <i>Amazon Chime Administration
   *                 Guide</i>.</p>
   */
  AccountType?: AccountType | string;
  /**
   * <p>The Amazon Chime account creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;
  /**
   * <p>The default license for the Amazon Chime account.</p>
   */
  DefaultLicense?: License | string;
  /**
   * <p>Supported licenses for the Amazon Chime account.</p>
   */
  SupportedLicenses?: (License | string)[];
  /**
   * <p>The sign-in delegate groups associated with the account.</p>
   */
  SigninDelegateGroups?: SigninDelegateGroup[];
}
export declare namespace Account {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Account) => any;
}
/**
 * <p>Settings related to the Amazon Chime account. This includes settings that start or stop
 *             remote control of shared screens, or start or stop the dial-out option in the Amazon
 *             Chime web application. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies
 *                 Page</a> in the <i>Amazon Chime Administration Guide</i>.</p>
 */
export interface AccountSettings {
  /**
   * <p>Setting that stops or starts remote control of shared screens during meetings.</p>
   */
  DisableRemoteControl?: boolean;
  /**
   * <p>Setting that allows meeting participants to choose the <b>Call me at a
   *                 phone number</b> option. For more information, see <a href="https://docs.aws.amazon.com/chime/latest/ug/chime-join-meeting.html">Join a Meeting
   *                 without the Amazon Chime App</a>.</p>
   */
  EnableDialOut?: boolean;
}
export declare namespace AccountSettings {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AccountSettings) => any;
}
/**
 * <p>The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device.</p>
 */
export interface AlexaForBusinessMetadata {
  /**
   * <p>Starts or stops Alexa for Business.</p>
   */
  IsAlexaForBusinessEnabled?: boolean;
  /**
   * <p>The ARN of the room resource.</p>
   */
  AlexaForBusinessRoomArn?: string;
}
export declare namespace AlexaForBusinessMetadata {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AlexaForBusinessMetadata) => any;
}
/**
 * <p>The details of an <code>AppInstance</code>, an instance of an Amazon Chime SDK messaging application.</p>
 */
export interface AppInstance {
  /**
   * <p>The ARN of the messaging instance.</p>
   */
  AppInstanceArn?: string;
  /**
   * <p>The name of an <code>AppInstance</code>.</p>
   */
  Name?: string;
  /**
   * <p>The metadata of an <code>AppInstance</code>.</p>
   */
  Metadata?: string;
  /**
   * <p>The time at which an <code>AppInstance</code> was created. In epoch milliseconds.</p>
   */
  CreatedTimestamp?: Date;
  /**
   * <p>The time an <code>AppInstance</code> was last updated. In epoch milliseconds.</p>
   */
  LastUpdatedTimestamp?: Date;
}
export declare namespace AppInstance {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AppInstance) => any;
}
/**
 * <p>The details of a user.</p>
 */
export interface Identity {
  /**
   * <p>The ARN in an Identity.</p>
   */
  Arn?: string;
  /**
   * <p>The name in an Identity.</p>
   */
  Name?: string;
}
export declare namespace Identity {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Identity) => any;
}
/**
 * <p>The details of an <code>AppInstanceAdmin</code>.</p>
 */
export interface AppInstanceAdmin {
  /**
   * <p>The <code>AppInstanceAdmin</code> data.</p>
   */
  Admin?: Identity;
  /**
   * <p>The ARN of the <code>AppInstance</code> for which the user is an administrator.</p>
   */
  AppInstanceArn?: string;
  /**
   * <p>The time at which an administrator was created.</p>
   */
  CreatedTimestamp?: Date;
}
export declare namespace AppInstanceAdmin {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AppInstanceAdmin) => any;
}
/**
 * <p>Summary of the details of an <code>AppInstanceAdmin</code>.</p>
 */
export interface AppInstanceAdminSummary {
  /**
   * <p>The details of the <code>AppInstanceAdmin</code>.</p>
   */
  Admin?: Identity;
}
export declare namespace AppInstanceAdminSummary {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AppInstanceAdminSummary) => any;
}
export declare enum AppInstanceDataType {
  Channel = "Channel",
  ChannelMessage = "ChannelMessage",
}
/**
 * <p>Summary of the data for an <code>AppInstance</code>.</p>
 */
export interface AppInstanceSummary {
  /**
   * <p>The <code>AppInstance</code> ARN.</p>
   */
  AppInstanceArn?: string;
  /**
   * <p>The name of the <code>AppInstance</code>.</p>
   */
  Name?: string;
  /**
   * <p>The metadata of the <code>AppInstance</code>.</p>
   */
  Metadata?: string;
}
export declare namespace AppInstanceSummary {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AppInstanceSummary) => any;
}
/**
 * <p>The details of the retention settings for a channel.</p>
 */
export interface ChannelRetentionSettings {
  /**
   * <p>The time in days to retain the messages in a channel.</p>
   */
  RetentionDays?: number;
}
export declare namespace ChannelRetentionSettings {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ChannelRetentionSettings) => any;
}
/**
 * <p>The details of the data-retention settings for an <code>AppInstance</code>.</p>
 */
export interface AppInstanceRetentionSettings {
  /**
   * <p>The length of time in days to retain the messages in a channel.</p>
   */
  ChannelRetentionSettings?: ChannelRetentionSettings;
}
export declare namespace AppInstanceRetentionSettings {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AppInstanceRetentionSettings) => any;
}
/**
 * <p>The details of the streaming configuration of an <code>AppInstance</code>.</p>
 */
export interface AppInstanceStreamingConfiguration {
  /**
   * <p>The type of data to be streamed.</p>
   */
  AppInstanceDataType: AppInstanceDataType | string | undefined;
  /**
   * <p>The resource ARN.</p>
   */
  ResourceArn: string | undefined;
}
export declare namespace AppInstanceStreamingConfiguration {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AppInstanceStreamingConfiguration) => any;
}
/**
 * <p>The details of an <code>AppInstanceUser</code>.</p>
 */
export interface AppInstanceUser {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;
  /**
   * <p>The name of the <code>AppInstanceUser</code>.</p>
   */
  Name?: string;
  /**
   * <p>The time at which the <code>AppInstanceUser</code> was created.</p>
   */
  CreatedTimestamp?: Date;
  /**
   * <p>The metadata of the <code>AppInstanceUser</code>.</p>
   */
  Metadata?: string;
  /**
   * <p>The time at which the <code>AppInstanceUser</code> was last updated.</p>
   */
  LastUpdatedTimestamp?: Date;
}
export declare namespace AppInstanceUser {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AppInstanceUser) => any;
}
/**
 * <p>Summary of the details of an <code>AppInstanceUser</code>.</p>
 */
export interface AppInstanceUserSummary {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;
  /**
   * <p>The name of an <code>AppInstanceUser</code>.</p>
   */
  Name?: string;
  /**
   * <p>The metadata of the <code>AppInstanceUser</code>.</p>
   */
  Metadata?: string;
}
export declare namespace AppInstanceUserSummary {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AppInstanceUserSummary) => any;
}
export declare enum ChannelMembershipType {
  DEFAULT = "DEFAULT",
  HIDDEN = "HIDDEN",
}
/**
 * <p>Summary of the membership details of an <code>AppInstanceUser</code>.</p>
 */
export interface AppInstanceUserMembershipSummary {
  /**
   * <p>The type of <code>ChannelMembership</code>.</p>
   */
  Type?: ChannelMembershipType | string;
  /**
   * <p>The time at which a message was last read.</p>
   */
  ReadMarkerTimestamp?: Date;
}
export declare namespace AppInstanceUserMembershipSummary {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AppInstanceUserMembershipSummary) => any;
}
export interface AssociatePhoneNumbersWithVoiceConnectorRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;
  /**
   * <p>If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.</p>
   */
  ForceAssociate?: boolean;
}
export declare namespace AssociatePhoneNumbersWithVoiceConnectorRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AssociatePhoneNumbersWithVoiceConnectorRequest) => any;
}
/**
 * <p>If the phone number action fails for one or more of the phone numbers in the request, a list of
 *             the phone numbers is returned, along with error codes and error messages.</p>
 */
export interface PhoneNumberError {
  /**
   * <p>The phone number ID for which the action failed.</p>
   */
  PhoneNumberId?: string;
  /**
   * <p>The error code.</p>
   */
  ErrorCode?: ErrorCode | string;
  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}
export declare namespace PhoneNumberError {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PhoneNumberError) => any;
}
export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and
   *     error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}
export declare namespace AssociatePhoneNumbersWithVoiceConnectorResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AssociatePhoneNumbersWithVoiceConnectorResponse) => any;
}
/**
 * <p>The input parameters don't match the service's restrictions.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}
export declare namespace BadRequestException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BadRequestException) => any;
}
/**
 * <p>The client is permanently forbidden from making the request.</p>
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}
export declare namespace ForbiddenException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ForbiddenException) => any;
}
/**
 * <p>One or more of the resources in the request does not exist in the system.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}
export declare namespace NotFoundException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: NotFoundException) => any;
}
/**
 * <p>The service encountered an unexpected error.</p>
 */
export interface ServiceFailureException extends __SmithyException, $MetadataBearer {
  name: "ServiceFailureException";
  $fault: "server";
  Code?: ErrorCode | string;
  Message?: string;
}
export declare namespace ServiceFailureException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ServiceFailureException) => any;
}
/**
 * <p>The service is currently unavailable.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  Code?: ErrorCode | string;
  Message?: string;
}
export declare namespace ServiceUnavailableException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ServiceUnavailableException) => any;
}
/**
 * <p>The client exceeded its request rate limit.</p>
 */
export interface ThrottledClientException extends __SmithyException, $MetadataBearer {
  name: "ThrottledClientException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}
export declare namespace ThrottledClientException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ThrottledClientException) => any;
}
/**
 * <p>The client is not currently authorized to make the request.</p>
 */
export interface UnauthorizedClientException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedClientException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}
export declare namespace UnauthorizedClientException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UnauthorizedClientException) => any;
}
export interface AssociatePhoneNumbersWithVoiceConnectorGroupRequest {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;
  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;
  /**
   * <p>If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector Group and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.</p>
   */
  ForceAssociate?: boolean;
}
export declare namespace AssociatePhoneNumbersWithVoiceConnectorGroupRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AssociatePhoneNumbersWithVoiceConnectorGroupRequest) => any;
}
export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}
export declare namespace AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AssociatePhoneNumbersWithVoiceConnectorGroupResponse) => any;
}
export interface AssociatePhoneNumberWithUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
  /**
   * <p>The phone number, in E.164 format.</p>
   */
  E164PhoneNumber: string | undefined;
}
export declare namespace AssociatePhoneNumberWithUserRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AssociatePhoneNumberWithUserRequest) => any;
}
export interface AssociatePhoneNumberWithUserResponse {}
export declare namespace AssociatePhoneNumberWithUserResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AssociatePhoneNumberWithUserResponse) => any;
}
export interface AssociateSigninDelegateGroupsWithAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The sign-in delegate groups.</p>
   */
  SigninDelegateGroups: SigninDelegateGroup[] | undefined;
}
export declare namespace AssociateSigninDelegateGroupsWithAccountRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AssociateSigninDelegateGroupsWithAccountRequest) => any;
}
export interface AssociateSigninDelegateGroupsWithAccountResponse {}
export declare namespace AssociateSigninDelegateGroupsWithAccountResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AssociateSigninDelegateGroupsWithAccountResponse) => any;
}
/**
 * <p>
 * An Amazon Chime SDK meeting attendee. Includes a unique
 * <code>AttendeeId</code>
 * and
 * <code>JoinToken</code>
 * . The
 * <code>JoinToken</code>
 * allows a client to authenticate and join as the specified attendee. The
 * <code>JoinToken</code>
 * expires when the meeting ends or when
 * <a>DeleteAttendee</a>
 * is called. After that, the attendee is unable to join the meeting.
 * </p>
 *
 *          <p>We recommend securely transferring each <code>JoinToken</code> from your server application
 *             to the client so that no other client has access to the token except for the one
 *             authorized to represent the attendee.</p>
 */
export interface Attendee {
  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId?: string;
  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId?: string;
  /**
   * <p>The join token used by the Amazon Chime SDK attendee.</p>
   */
  JoinToken?: string;
}
export declare namespace Attendee {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Attendee) => any;
}
/**
 * <p>Describes a tag applied to a resource.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;
  /**
   * <p>The value of the tag.</p>
   */
  Value: string | undefined;
}
export declare namespace Tag {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Tag) => any;
}
/**
 * <p>The membership information, including member ARNs, the channel ARN, and membership types.</p>
 */
export interface BatchChannelMemberships {
  /**
   * <p>The details of a user.</p>
   */
  InvitedBy?: Identity;
  /**
   * <p>The membership types set for the channel users.</p>
   */
  Type?: ChannelMembershipType | string;
  /**
   * <p>The users successfully added to the request.</p>
   */
  Members?: Identity[];
  /**
   * <p>The ARN of the channel to which you're adding users.</p>
   */
  ChannelArn?: string;
}
export declare namespace BatchChannelMemberships {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchChannelMemberships) => any;
}
/**
 * <p>The Amazon Chime SDK attendee fields to create, used with the BatchCreateAttendee action.</p>
 */
export interface CreateAttendeeRequestItem {
  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId: string | undefined;
  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];
}
export declare namespace CreateAttendeeRequestItem {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateAttendeeRequestItem) => any;
}
export interface BatchCreateAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
  /**
   * <p>The request containing the attendees to create.</p>
   */
  Attendees: CreateAttendeeRequestItem[] | undefined;
}
export declare namespace BatchCreateAttendeeRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchCreateAttendeeRequest) => any;
}
/**
 * <p>The list of errors returned when errors are encountered during the BatchCreateAttendee and CreateAttendee actions. This includes external user IDs, error codes, and error messages.</p>
 */
export interface CreateAttendeeError {
  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId?: string;
  /**
   * <p>The error code.</p>
   */
  ErrorCode?: string;
  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}
export declare namespace CreateAttendeeError {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateAttendeeError) => any;
}
export interface BatchCreateAttendeeResponse {
  /**
   * <p>The attendee information, including attendees IDs and join tokens.</p>
   */
  Attendees?: Attendee[];
  /**
   * <p>If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.</p>
   */
  Errors?: CreateAttendeeError[];
}
export declare namespace BatchCreateAttendeeResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchCreateAttendeeResponse) => any;
}
/**
 * <p>The request exceeds the resource limit.</p>
 */
export interface ResourceLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ResourceLimitExceededException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}
export declare namespace ResourceLimitExceededException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ResourceLimitExceededException) => any;
}
export interface BatchCreateChannelMembershipRequest {
  /**
   * <p>The ARN of the channel to which you're adding users.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of
   *             <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals
   *             <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported by moderators.</p>
   */
  Type?: ChannelMembershipType | string;
  /**
   * <p>The ARNs of the members you want to add to the channel.</p>
   */
  MemberArns: string[] | undefined;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   *         <p></p>
   */
  ChimeBearer?: string;
}
export declare namespace BatchCreateChannelMembershipRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchCreateChannelMembershipRequest) => any;
}
/**
 * <p>A list of failed member ARNs, error codes, and error messages.</p>
 */
export interface BatchCreateChannelMembershipError {
  /**
   * <p>The ARN of the member that the service couldn't add.</p>
   */
  MemberArn?: string;
  /**
   * <p>The error code.</p>
   */
  ErrorCode?: ErrorCode | string;
  /**
   * <p>The error message. </p>
   */
  ErrorMessage?: string;
}
export declare namespace BatchCreateChannelMembershipError {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchCreateChannelMembershipError) => any;
}
export interface BatchCreateChannelMembershipResponse {
  /**
   * <p>The list of channel memberships in the response.</p>
   */
  BatchChannelMemberships?: BatchChannelMemberships;
  /**
   * <p>If the action fails for one or more of the memberships in the request, a list of the memberships is returned, along with error codes and error messages.</p>
   */
  Errors?: BatchCreateChannelMembershipError[];
}
export declare namespace BatchCreateChannelMembershipResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchCreateChannelMembershipResponse) => any;
}
export declare enum RoomMembershipRole {
  Administrator = "Administrator",
  Member = "Member",
}
/**
 * <p>Membership details, such as member ID and member role.</p>
 */
export interface MembershipItem {
  /**
   * <p>The member ID.</p>
   */
  MemberId?: string;
  /**
   * <p>The member role.</p>
   */
  Role?: RoomMembershipRole | string;
}
export declare namespace MembershipItem {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: MembershipItem) => any;
}
export interface BatchCreateRoomMembershipRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;
  /**
   * <p>The list of membership items.</p>
   */
  MembershipItemList: MembershipItem[] | undefined;
}
export declare namespace BatchCreateRoomMembershipRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchCreateRoomMembershipRequest) => any;
}
/**
 * <p>The list of errors returned when a member action results in an error.</p>
 */
export interface MemberError {
  /**
   * <p>The member ID.</p>
   */
  MemberId?: string;
  /**
   * <p>The error code.</p>
   */
  ErrorCode?: ErrorCode | string;
  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}
export declare namespace MemberError {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: MemberError) => any;
}
export interface BatchCreateRoomMembershipResponse {
  /**
   * <p>If the action fails for one or more of the member IDs in the request, a list of the member IDs is returned, along with error codes and error messages.</p>
   */
  Errors?: MemberError[];
}
export declare namespace BatchCreateRoomMembershipResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchCreateRoomMembershipResponse) => any;
}
export interface BatchDeletePhoneNumberRequest {
  /**
   * <p>List of phone number IDs.</p>
   */
  PhoneNumberIds: string[] | undefined;
}
export declare namespace BatchDeletePhoneNumberRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchDeletePhoneNumberRequest) => any;
}
export interface BatchDeletePhoneNumberResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}
export declare namespace BatchDeletePhoneNumberResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchDeletePhoneNumberResponse) => any;
}
export interface BatchSuspendUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The request containing the user IDs to suspend.</p>
   */
  UserIdList: string[] | undefined;
}
export declare namespace BatchSuspendUserRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchSuspendUserRequest) => any;
}
/**
 * <p>The list of errors returned when errors are encountered during the <a>BatchSuspendUser</a>, <a>BatchUnsuspendUser</a>, or <a>BatchUpdateUser</a> actions. This includes user IDs, error codes, and error
 *             messages.</p>
 */
export interface UserError {
  /**
   * <p>The user ID for which the action failed.</p>
   */
  UserId?: string;
  /**
   * <p>The error code.</p>
   */
  ErrorCode?: ErrorCode | string;
  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}
export declare namespace UserError {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UserError) => any;
}
export interface BatchSuspendUserResponse {
  /**
   * <p>If the <a>BatchSuspendUser</a> action fails for one or more of the user IDs in the
   *             request, a list of the user IDs is returned, along with error codes and error messages.</p>
   */
  UserErrors?: UserError[];
}
export declare namespace BatchSuspendUserResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchSuspendUserResponse) => any;
}
export interface BatchUnsuspendUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The request containing the user IDs to unsuspend.</p>
   */
  UserIdList: string[] | undefined;
}
export declare namespace BatchUnsuspendUserRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchUnsuspendUserRequest) => any;
}
export interface BatchUnsuspendUserResponse {
  /**
   * <p>If the <a>BatchUnsuspendUser</a> action fails for one or more of the user IDs in the
   *             request, a list of the user IDs is returned, along with error codes and error messages.</p>
   */
  UserErrors?: UserError[];
}
export declare namespace BatchUnsuspendUserResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchUnsuspendUserResponse) => any;
}
export declare enum PhoneNumberProductType {
  BusinessCalling = "BusinessCalling",
  SipMediaApplicationDialIn = "SipMediaApplicationDialIn",
  VoiceConnector = "VoiceConnector",
}
/**
 * <p>The phone number ID, product type, or calling name fields to update, used with the
 * <a>BatchUpdatePhoneNumber</a> and <a>UpdatePhoneNumber</a> actions.</p>
 */
export interface UpdatePhoneNumberRequestItem {
  /**
   * <p>The phone number ID to update.</p>
   */
  PhoneNumberId: string | undefined;
  /**
   * <p>The product type to update.</p>
   */
  ProductType?: PhoneNumberProductType | string;
  /**
   * <p>The outbound calling name to update.</p>
   */
  CallingName?: string;
}
export declare namespace UpdatePhoneNumberRequestItem {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdatePhoneNumberRequestItem) => any;
}
export interface BatchUpdatePhoneNumberRequest {
  /**
   * <p>The request containing the phone number IDs and product types or calling names to update.</p>
   */
  UpdatePhoneNumberRequestItems: UpdatePhoneNumberRequestItem[] | undefined;
}
export declare namespace BatchUpdatePhoneNumberRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchUpdatePhoneNumberRequest) => any;
}
export interface BatchUpdatePhoneNumberResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}
export declare namespace BatchUpdatePhoneNumberResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchUpdatePhoneNumberResponse) => any;
}
export declare enum UserType {
  PrivateUser = "PrivateUser",
  SharedDevice = "SharedDevice",
}
/**
 * <p>The user ID and user fields to update, used with the
 * <a>BatchUpdateUser</a> action.</p>
 */
export interface UpdateUserRequestItem {
  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
  /**
   * <p>The user license type.</p>
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
export declare namespace UpdateUserRequestItem {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateUserRequestItem) => any;
}
export interface BatchUpdateUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The request containing the user IDs and details to update.</p>
   */
  UpdateUserRequestItems: UpdateUserRequestItem[] | undefined;
}
export declare namespace BatchUpdateUserRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchUpdateUserRequest) => any;
}
export interface BatchUpdateUserResponse {
  /**
   * <p>If the <a>BatchUpdateUser</a> action fails for one or more of the user IDs in the
   *             request, a list of the user IDs is returned, along with error codes and error messages.</p>
   */
  UserErrors?: UserError[];
}
export declare namespace BatchUpdateUserResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchUpdateUserResponse) => any;
}
export declare enum BotType {
  ChatBot = "ChatBot",
}
/**
 * <p>A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime.</p>
 */
export interface Bot {
  /**
   * <p>The bot ID.</p>
   */
  BotId?: string;
  /**
   * <p>The unique ID for the bot user.</p>
   */
  UserId?: string;
  /**
   * <p>The bot display name.</p>
   */
  DisplayName?: string;
  /**
   * <p>The bot type.</p>
   */
  BotType?: BotType | string;
  /**
   * <p>When true, the bot is stopped from running in your account.</p>
   */
  Disabled?: boolean;
  /**
   * <p>The bot creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;
  /**
   * <p>The updated bot timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
  /**
   * <p>The bot email address.</p>
   */
  BotEmail?: string;
  /**
   * <p>The security token used to authenticate Amazon Chime with the outgoing event endpoint.</p>
   */
  SecurityToken?: string;
}
export declare namespace Bot {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Bot) => any;
}
/**
 * <p>The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any
 *             Amazon S3 buckets designated for storing call detail records.</p>
 */
export interface BusinessCallingSettings {
  /**
   * <p>The Amazon S3 bucket designated for call detail record storage.</p>
   */
  CdrBucket?: string;
}
export declare namespace BusinessCallingSettings {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BusinessCallingSettings) => any;
}
export declare enum CallingNameStatus {
  Unassigned = "Unassigned",
  UpdateFailed = "UpdateFailed",
  UpdateInProgress = "UpdateInProgress",
  UpdateSucceeded = "UpdateSucceeded",
}
export declare enum Capability {
  SMS = "SMS",
  Voice = "Voice",
}
export declare enum ChannelMode {
  RESTRICTED = "RESTRICTED",
  UNRESTRICTED = "UNRESTRICTED",
}
export declare enum ChannelPrivacy {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
}
/**
 * <p>The details of a channel.</p>
 */
export interface Channel {
  /**
   * <p>The name of the channel.</p>
   */
  Name?: string;
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
  /**
   * <p>The mode of the channel.</p>
   */
  Mode?: ChannelMode | string;
  /**
   * <p>The channel's privacy setting.</p>
   */
  Privacy?: ChannelPrivacy | string;
  /**
   * <p>The channel's metadata.</p>
   */
  Metadata?: string;
  /**
   * <p>The <code>AppInstanceUser</code> who created the channel.</p>
   */
  CreatedBy?: Identity;
  /**
   * <p>The time at which the <code>AppInstanceUser</code> created the channel.</p>
   */
  CreatedTimestamp?: Date;
  /**
   * <p>The time at which a member sent the last message in the channel.</p>
   */
  LastMessageTimestamp?: Date;
  /**
   * <p>The time at which a channel was last updated.</p>
   */
  LastUpdatedTimestamp?: Date;
}
export declare namespace Channel {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Channel) => any;
}
/**
 * <p>The details of a channel ban.</p>
 */
export interface ChannelBan {
  /**
   * <p>The member being banned from the channel.</p>
   */
  Member?: Identity;
  /**
   * <p>The ARN of the channel from which a member is being banned.</p>
   */
  ChannelArn?: string;
  /**
   * <p>The time at which the ban was created.</p>
   */
  CreatedTimestamp?: Date;
  /**
   * <p>The <code>AppInstanceUser</code> who created the ban.</p>
   */
  CreatedBy?: Identity;
}
export declare namespace ChannelBan {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ChannelBan) => any;
}
/**
 * <p>Summary of the details of a <code>ChannelBan</code>.</p>
 */
export interface ChannelBanSummary {
  /**
   * <p>The member being banned from a channel.</p>
   */
  Member?: Identity;
}
export declare namespace ChannelBanSummary {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ChannelBanSummary) => any;
}
/**
 * <p>The details of a channel member.</p>
 */
export interface ChannelMembership {
  /**
   * <p>The identifier of the member who invited another member.</p>
   */
  InvitedBy?: Identity;
  /**
   * <p>The membership type set for the channel member.</p>
   */
  Type?: ChannelMembershipType | string;
  /**
   * <p>The data of the channel member.</p>
   */
  Member?: Identity;
  /**
   * <p>The ARN of the member's channel.</p>
   */
  ChannelArn?: string;
  /**
   * <p>The time at which the channel membership was created.</p>
   */
  CreatedTimestamp?: Date;
  /**
   * <p>The time at which a channel membership was last updated.</p>
   */
  LastUpdatedTimestamp?: Date;
}
export declare namespace ChannelMembership {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ChannelMembership) => any;
}
/**
 * <p>Summary of the details of a <code>Channel</code>.</p>
 */
export interface ChannelSummary {
  /**
   * <p>The name of the channel.</p>
   */
  Name?: string;
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
  /**
   * <p>The mode of the channel.</p>
   */
  Mode?: ChannelMode | string;
  /**
   * <p>The privacy setting of the channel.</p>
   */
  Privacy?: ChannelPrivacy | string;
  /**
   * <p>The metadata of the channel.</p>
   */
  Metadata?: string;
  /**
   * <p>The time at which the last message in a channel was sent.</p>
   */
  LastMessageTimestamp?: Date;
}
export declare namespace ChannelSummary {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ChannelSummary) => any;
}
/**
 * <p>Summary of the channel membership details of an <code>AppInstanceUser</code>.</p>
 */
export interface ChannelMembershipForAppInstanceUserSummary {
  /**
   * <p>Summary of the details of a <code>Channel</code>.</p>
   */
  ChannelSummary?: ChannelSummary;
  /**
   * <p>Returns the channel membership data for an <code>AppInstance</code>.</p>
   */
  AppInstanceUserMembershipSummary?: AppInstanceUserMembershipSummary;
}
export declare namespace ChannelMembershipForAppInstanceUserSummary {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ChannelMembershipForAppInstanceUserSummary) => any;
}
/**
 * <p>Summary of the details of a <code>ChannelMembership</code>.</p>
 */
export interface ChannelMembershipSummary {
  /**
   * <p>A member's summary data.</p>
   */
  Member?: Identity;
}
export declare namespace ChannelMembershipSummary {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ChannelMembershipSummary) => any;
}
export declare enum ChannelMessagePersistenceType {
  NON_PERSISTENT = "NON_PERSISTENT",
  PERSISTENT = "PERSISTENT",
}
export declare enum ChannelMessageType {
  CONTROL = "CONTROL",
  STANDARD = "STANDARD",
}
/**
 * <p>The details of a message in a channel.</p>
 */
export interface ChannelMessage {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
  /**
   * <p>The ID of a message.</p>
   */
  MessageId?: string;
  /**
   * <p>The message content.</p>
   */
  Content?: string;
  /**
   * <p>The message metadata.</p>
   */
  Metadata?: string;
  /**
   * <p>The message type.</p>
   */
  Type?: ChannelMessageType | string;
  /**
   * <p>The time at which the message was created.</p>
   */
  CreatedTimestamp?: Date;
  /**
   * <p>The time at which a message was edited.</p>
   */
  LastEditedTimestamp?: Date;
  /**
   * <p>The time at which a message was updated.</p>
   */
  LastUpdatedTimestamp?: Date;
  /**
   * <p>The message sender.</p>
   */
  Sender?: Identity;
  /**
   * <p>Hides the content of a message.</p>
   */
  Redacted?: boolean;
  /**
   * <p>The persistence setting for a channel message.</p>
   */
  Persistence?: ChannelMessagePersistenceType | string;
}
export declare namespace ChannelMessage {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ChannelMessage) => any;
}
/**
 * <p>Summary of the messages in a <code>Channel</code>.</p>
 */
export interface ChannelMessageSummary {
  /**
   * <p>The ID of the message.</p>
   */
  MessageId?: string;
  /**
   * <p>The content of the message.</p>
   */
  Content?: string;
  /**
   * <p>The metadata of the message.</p>
   */
  Metadata?: string;
  /**
   * <p>The type of message.</p>
   */
  Type?: ChannelMessageType | string;
  /**
   * <p>The time at which the message summary was created.</p>
   */
  CreatedTimestamp?: Date;
  /**
   * <p>The time at which a message was last updated.</p>
   */
  LastUpdatedTimestamp?: Date;
  /**
   * <p>The time at which a message was last edited.</p>
   */
  LastEditedTimestamp?: Date;
  /**
   * <p>The message sender.</p>
   */
  Sender?: Identity;
  /**
   * <p>Indicates whether a message was redacted.</p>
   */
  Redacted?: boolean;
}
export declare namespace ChannelMessageSummary {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ChannelMessageSummary) => any;
}
/**
 * <p>Summary of the details of a moderated channel.</p>
 */
export interface ChannelModeratedByAppInstanceUserSummary {
  /**
   * <p>Summary of the details of a <code>Channel</code>.</p>
   */
  ChannelSummary?: ChannelSummary;
}
export declare namespace ChannelModeratedByAppInstanceUserSummary {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ChannelModeratedByAppInstanceUserSummary) => any;
}
/**
 * <p>The details of a channel moderator.</p>
 */
export interface ChannelModerator {
  /**
   * <p>The moderator's data.</p>
   */
  Moderator?: Identity;
  /**
   * <p>The ARN of the moderator's channel.</p>
   */
  ChannelArn?: string;
  /**
   * <p>The time at which the moderator was created.</p>
   */
  CreatedTimestamp?: Date;
  /**
   * <p>The <code>AppInstanceUser</code> who created the moderator.</p>
   */
  CreatedBy?: Identity;
}
export declare namespace ChannelModerator {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ChannelModerator) => any;
}
/**
 * <p>Summary of the details of a <code>ChannelModerator</code>.</p>
 */
export interface ChannelModeratorSummary {
  /**
   * <p>The data for a moderator.</p>
   */
  Moderator?: Identity;
}
export declare namespace ChannelModeratorSummary {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ChannelModeratorSummary) => any;
}
/**
 * <p>The request could not be processed because of conflict in the current state of the
 *             resource.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}
export declare namespace ConflictException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ConflictException) => any;
}
/**
 * <p>The retention settings that determine how long to retain conversation messages for an Amazon Chime Enterprise account.</p>
 */
export interface ConversationRetentionSettings {
  /**
   * <p>The number of days for which to retain conversation messages.</p>
   */
  RetentionDays?: number;
}
export declare namespace ConversationRetentionSettings {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ConversationRetentionSettings) => any;
}
export interface CreateAccountRequest {
  /**
   * <p>The name of the Amazon Chime account.</p>
   */
  Name: string | undefined;
}
export declare namespace CreateAccountRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateAccountRequest) => any;
}
export interface CreateAccountResponse {
  /**
   * <p>The Amazon Chime account details.</p>
   */
  Account?: Account;
}
export declare namespace CreateAccountResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateAccountResponse) => any;
}
export interface CreateAppInstanceRequest {
  /**
   * <p>The name of the <code>AppInstance</code>.</p>
   */
  Name: string | undefined;
  /**
   * <p>The metadata of the <code>AppInstance</code>. Limited to a 1KB string in UTF-8.</p>
   */
  Metadata?: string;
  /**
   * <p>The <code>ClientRequestToken</code> of the <code>AppInstance</code>.</p>
   */
  ClientRequestToken?: string;
  /**
   * <p>Tags assigned to the <code>AppInstanceUser</code>.</p>
   */
  Tags?: Tag[];
}
export declare namespace CreateAppInstanceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateAppInstanceRequest) => any;
}
export interface CreateAppInstanceResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;
}
export declare namespace CreateAppInstanceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateAppInstanceResponse) => any;
}
export interface CreateAppInstanceAdminRequest {
  /**
   * <p>The ARN of the administrator of the current <code>AppInstance</code>.</p>
   */
  AppInstanceAdminArn: string | undefined;
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}
export declare namespace CreateAppInstanceAdminRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateAppInstanceAdminRequest) => any;
}
export interface CreateAppInstanceAdminResponse {
  /**
   * <p>The name and ARN of the admin for the <code>AppInstance</code>.</p>
   */
  AppInstanceAdmin?: Identity;
  /**
   * <p>The ARN of the of the admin for the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;
}
export declare namespace CreateAppInstanceAdminResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateAppInstanceAdminResponse) => any;
}
export interface CreateAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code> request.</p>
   */
  AppInstanceArn: string | undefined;
  /**
   * <p>The user ID of the <code>AppInstance</code>.</p>
   */
  AppInstanceUserId: string | undefined;
  /**
   * <p>The user's name.</p>
   */
  Name: string | undefined;
  /**
   * <p>The request's metadata. Limited to a 1KB string in UTF-8.</p>
   */
  Metadata?: string;
  /**
   * <p>The token assigned to the user requesting an <code>AppInstance</code>.</p>
   */
  ClientRequestToken?: string;
  /**
   * <p>Tags assigned to the <code>AppInstanceUser</code>.</p>
   */
  Tags?: Tag[];
}
export declare namespace CreateAppInstanceUserRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateAppInstanceUserRequest) => any;
}
export interface CreateAppInstanceUserResponse {
  /**
   * <p>The user's ARN.</p>
   */
  AppInstanceUserArn?: string;
}
export declare namespace CreateAppInstanceUserResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateAppInstanceUserResponse) => any;
}
export interface CreateAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId: string | undefined;
  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];
}
export declare namespace CreateAttendeeRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateAttendeeRequest) => any;
}
export interface CreateAttendeeResponse {
  /**
   * <p>The attendee information, including attendee ID and join token.</p>
   */
  Attendee?: Attendee;
}
export declare namespace CreateAttendeeResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateAttendeeResponse) => any;
}
export interface CreateBotRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The bot display name.</p>
   */
  DisplayName: string | undefined;
  /**
   * <p>The domain of the Amazon Chime Enterprise account.</p>
   */
  Domain?: string;
}
export declare namespace CreateBotRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateBotRequest) => any;
}
export interface CreateBotResponse {
  /**
   * <p>The bot details.</p>
   */
  Bot?: Bot;
}
export declare namespace CreateBotResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateBotResponse) => any;
}
export interface CreateChannelRequest {
  /**
   * <p>The ARN of the channel request.</p>
   */
  AppInstanceArn: string | undefined;
  /**
   * <p>The name of the channel.</p>
   */
  Name: string | undefined;
  /**
   * <p>The channel mode: <code>UNRESTRICTED</code> or <code>RESTRICTED</code>. Administrators, moderators, and channel members can add themselves
   *     and other members to unrestricted channels. Only administrators and moderators can add members to restricted channels.</p>
   */
  Mode?: ChannelMode | string;
  /**
   * <p>The channel's privacy level: <code>PUBLIC</code> or <code>PRIVATE</code>. Private channels aren't discoverable by users outside the channel.
   *     Public channels are discoverable by anyone in the <code>AppInstance</code>.</p>
   */
  Privacy?: ChannelPrivacy | string;
  /**
   * <p>The metadata of the creation request. Limited to 1KB and UTF-8.</p>
   */
  Metadata?: string;
  /**
   * <p>The client token for the request. An <code>Idempotency</code> token.</p>
   */
  ClientRequestToken?: string;
  /**
   * <p>The tags for the creation request.</p>
   */
  Tags?: Tag[];
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace CreateChannelRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateChannelRequest) => any;
}
export interface CreateChannelResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
}
export declare namespace CreateChannelResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateChannelResponse) => any;
}
export interface CreateChannelBanRequest {
  /**
   * <p>The ARN of the ban request.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The ARN of the member being banned.</p>
   */
  MemberArn: string | undefined;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace CreateChannelBanRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateChannelBanRequest) => any;
}
export interface CreateChannelBanResponse {
  /**
   * <p>The ARN of the response to the ban request.</p>
   */
  ChannelArn?: string;
  /**
   * <p>The <code>ChannelArn</code> and <code>BannedIdentity</code> of the member in the ban response.</p>
   */
  Member?: Identity;
}
export declare namespace CreateChannelBanResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateChannelBanResponse) => any;
}
export interface CreateChannelMembershipRequest {
  /**
   * <p>The ARN of the channel to which you're adding users.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The ARN of the member you want to add to the channel.</p>
   */
  MemberArn: string | undefined;
  /**
   * <p>The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of
   * <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals
   * <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported by moderators.</p>
   */
  Type: ChannelMembershipType | string | undefined;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace CreateChannelMembershipRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateChannelMembershipRequest) => any;
}
export interface CreateChannelMembershipResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
  /**
   * <p>The ARN and metadata of the member being added.</p>
   */
  Member?: Identity;
}
export declare namespace CreateChannelMembershipResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateChannelMembershipResponse) => any;
}
export interface CreateChannelModeratorRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The ARN of the moderator.</p>
   */
  ChannelModeratorArn: string | undefined;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace CreateChannelModeratorRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateChannelModeratorRequest) => any;
}
export interface CreateChannelModeratorResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
  /**
   * <p>The ARNs of the channel and the moderator.</p>
   */
  ChannelModerator?: Identity;
}
export declare namespace CreateChannelModeratorResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateChannelModeratorResponse) => any;
}
/**
 * <p> The resource target configurations for receiving Amazon Chime SDK meeting and attendee event
 *             notifications. The Amazon Chime SDK supports resource targets located in the US East (N.
 *             Virginia) AWS Region (<code>us-east-1</code>). </p>
 */
export interface MeetingNotificationConfiguration {
  /**
   * <p>The SNS topic ARN.</p>
   */
  SnsTopicArn?: string;
  /**
   * <p>The SQS queue ARN.</p>
   */
  SqsQueueArn?: string;
}
export declare namespace MeetingNotificationConfiguration {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: MeetingNotificationConfiguration) => any;
}
export interface CreateMeetingRequest {
  /**
   * <p>The unique identifier for the client request. Use a different token for different meetings.</p>
   */
  ClientRequestToken?: string;
  /**
   * <p>The external meeting ID.</p>
   */
  ExternalMeetingId?: string;
  /**
   * <p>Reserved.</p>
   */
  MeetingHostId?: string;
  /**
   * <p>
   * The Region in which to create the meeting. Default: <code>us-east-1</code>.
   * </p>
   *
   *          <p>
   * Available values:
   * <code>af-south-1</code>
   * ,
   * <code>ap-northeast-1</code>
   * ,
   * <code>ap-northeast-2</code>
   * ,
   * <code>ap-south-1</code>
   * ,
   * <code>ap-southeast-1</code>
   * ,
   * <code>ap-southeast-2</code>
   * ,
   * <code>ca-central-1</code>
   * ,
   * <code>eu-central-1</code>
   * ,
   * <code>eu-north-1</code>
   * ,
   * <code>eu-south-1</code>
   * ,
   * <code>eu-west-1</code>
   * ,
   * <code>eu-west-2</code>
   * ,
   * <code>eu-west-3</code>
   * ,
   * <code>sa-east-1</code>
   * ,
   * <code>us-east-1</code>
   * ,
   * <code>us-east-2</code>
   * ,
   * <code>us-west-1</code>
   * ,
   * <code>us-west-2</code>
   * .
   * </p>
   */
  MediaRegion?: string;
  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];
  /**
   * <p>The configuration for resource targets to receive notifications when meeting and attendee events occur.</p>
   */
  NotificationsConfiguration?: MeetingNotificationConfiguration;
}
export declare namespace CreateMeetingRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateMeetingRequest) => any;
}
/**
 * <p>A set of endpoints used by clients to connect to the media service group for a Amazon Chime SDK meeting.</p>
 */
export interface MediaPlacement {
  /**
   * <p>The audio host URL.</p>
   */
  AudioHostUrl?: string;
  /**
   * <p>The audio fallback URL.</p>
   */
  AudioFallbackUrl?: string;
  /**
   * <p>The screen data URL.</p>
   */
  ScreenDataUrl?: string;
  /**
   * <p>The screen sharing URL.</p>
   */
  ScreenSharingUrl?: string;
  /**
   * <p>The screen viewing URL.</p>
   */
  ScreenViewingUrl?: string;
  /**
   * <p>The signaling URL.</p>
   */
  SignalingUrl?: string;
  /**
   * <p>The turn control URL.</p>
   */
  TurnControlUrl?: string;
}
export declare namespace MediaPlacement {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: MediaPlacement) => any;
}
/**
 * <p>A meeting created using the Amazon Chime SDK.</p>
 */
export interface Meeting {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId?: string;
  /**
   * <p>The external meeting ID.</p>
   */
  ExternalMeetingId?: string;
  /**
   * <p>The media placement for the meeting.</p>
   */
  MediaPlacement?: MediaPlacement;
  /**
   * <p>The Region in which you create the meeting. Available values: <code>af-south-1</code>, <code>ap-northeast-1</code>,
   *     <code>ap-northeast-2</code>, <code>ap-south-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>,
   *     <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-south-1</code>,
   *                 <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>,
   *                 <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>,
   *                 <code>us-west-1</code>, <code>us-west-2</code>.</p>
   */
  MediaRegion?: string;
}
export declare namespace Meeting {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Meeting) => any;
}
export interface CreateMeetingResponse {
  /**
   * <p>
   * The meeting information, including the meeting ID and
   * <code>MediaPlacement</code>
   * .
   * </p>
   */
  Meeting?: Meeting;
}
export declare namespace CreateMeetingResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateMeetingResponse) => any;
}
export interface CreateMeetingDialOutRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
  /**
   * <p>Phone number used as the caller ID when the remote party receives a call.</p>
   */
  FromPhoneNumber: string | undefined;
  /**
   * <p>Phone number called when inviting someone to a meeting.</p>
   */
  ToPhoneNumber: string | undefined;
  /**
   * <p>Token used by the Amazon Chime SDK attendee. Call the
   *     <a href="https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAttendee.html">CreateAttendee</a> action to
   *     get a join token.</p>
   */
  JoinToken: string | undefined;
}
export declare namespace CreateMeetingDialOutRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateMeetingDialOutRequest) => any;
}
export interface CreateMeetingDialOutResponse {
  /**
   * <p>Unique ID that tracks API calls.</p>
   */
  TransactionId?: string;
}
export declare namespace CreateMeetingDialOutResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateMeetingDialOutResponse) => any;
}
export interface CreateMeetingWithAttendeesRequest {
  /**
   * <p>The unique identifier for the client request. Use a different token for different meetings.</p>
   */
  ClientRequestToken?: string;
  /**
   * <p>The external meeting ID.</p>
   */
  ExternalMeetingId?: string;
  /**
   * <p>Reserved.</p>
   */
  MeetingHostId?: string;
  /**
   * <p>
   * The Region in which to create the meeting. Default: <code>us-east-1</code>
   * .
   * </p>
   *
   *          <p>
   * Available values:
   * <code>af-south-1</code>
   * ,
   * <code>ap-northeast-1</code>
   * ,
   * <code>ap-northeast-2</code>
   * ,
   * <code>ap-south-1</code>
   * ,
   * <code>ap-southeast-1</code>
   * ,
   * <code>ap-southeast-2</code>
   * ,
   * <code>ca-central-1</code>
   * ,
   * <code>eu-central-1</code>
   * ,
   * <code>eu-north-1</code>
   * ,
   * <code>eu-south-1</code>
   * ,
   * <code>eu-west-1</code>
   * ,
   * <code>eu-west-2</code>
   * ,
   * <code>eu-west-3</code>
   * ,
   * <code>sa-east-1</code>
   * ,
   * <code>us-east-1</code>
   * ,
   * <code>us-east-2</code>
   * ,
   * <code>us-west-1</code>
   * ,
   * <code>us-west-2</code>
   * .
   * </p>
   */
  MediaRegion?: string;
  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];
  /**
   * <p> The resource target configurations for receiving Amazon Chime SDK meeting and attendee event
   *             notifications. The Amazon Chime SDK supports resource targets located in the US East (N.
   *             Virginia) AWS Region (<code>us-east-1</code>). </p>
   */
  NotificationsConfiguration?: MeetingNotificationConfiguration;
  /**
   * <p>The request containing the attendees to create.</p>
   */
  Attendees?: CreateAttendeeRequestItem[];
}
export declare namespace CreateMeetingWithAttendeesRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateMeetingWithAttendeesRequest) => any;
}
export interface CreateMeetingWithAttendeesResponse {
  /**
   * <p>A meeting created using the Amazon Chime SDK.</p>
   */
  Meeting?: Meeting;
  /**
   * <p>The attendee information, including attendees IDs and join tokens.</p>
   */
  Attendees?: Attendee[];
  /**
   * <p>If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.</p>
   */
  Errors?: CreateAttendeeError[];
}
export declare namespace CreateMeetingWithAttendeesResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateMeetingWithAttendeesResponse) => any;
}
export interface CreatePhoneNumberOrderRequest {
  /**
   * <p>The phone number product type.</p>
   */
  ProductType: PhoneNumberProductType | string | undefined;
  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;
}
export declare namespace CreatePhoneNumberOrderRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreatePhoneNumberOrderRequest) => any;
}
export declare enum OrderedPhoneNumberStatus {
  Acquired = "Acquired",
  Failed = "Failed",
  Processing = "Processing",
}
/**
 * <p>A phone number for which an order has been placed.</p>
 */
export interface OrderedPhoneNumber {
  /**
   * <p>The phone number, in E.164 format.</p>
   */
  E164PhoneNumber?: string;
  /**
   * <p>The phone number status.</p>
   */
  Status?: OrderedPhoneNumberStatus | string;
}
export declare namespace OrderedPhoneNumber {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: OrderedPhoneNumber) => any;
}
export declare enum PhoneNumberOrderStatus {
  Failed = "Failed",
  Partial = "Partial",
  Processing = "Processing",
  Successful = "Successful",
}
/**
 * <p>The details of a phone number order created for Amazon Chime.</p>
 */
export interface PhoneNumberOrder {
  /**
   * <p>The phone number order ID.</p>
   */
  PhoneNumberOrderId?: string;
  /**
   * <p>The phone number order product type.</p>
   */
  ProductType?: PhoneNumberProductType | string;
  /**
   * <p>The status of the phone number order.</p>
   */
  Status?: PhoneNumberOrderStatus | string;
  /**
   * <p>The ordered phone number details, such as the phone number in E.164 format and the phone
   *             number status.</p>
   */
  OrderedPhoneNumbers?: OrderedPhoneNumber[];
  /**
   * <p>The phone number order creation time stamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;
  /**
   * <p>The updated phone number order time stamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}
export declare namespace PhoneNumberOrder {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PhoneNumberOrder) => any;
}
export interface CreatePhoneNumberOrderResponse {
  /**
   * <p>The phone number order details.</p>
   */
  PhoneNumberOrder?: PhoneNumberOrder;
}
export declare namespace CreatePhoneNumberOrderResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreatePhoneNumberOrderResponse) => any;
}
export declare enum GeoMatchLevel {
  AreaCode = "AreaCode",
  Country = "Country",
}
/**
 * <p>The country and area code for a proxy phone number in a proxy phone session.</p>
 */
export interface GeoMatchParams {
  /**
   * <p>The country.</p>
   */
  Country: string | undefined;
  /**
   * <p>The area code.</p>
   */
  AreaCode: string | undefined;
}
export declare namespace GeoMatchParams {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GeoMatchParams) => any;
}
export declare enum NumberSelectionBehavior {
  AvoidSticky = "AvoidSticky",
  PreferSticky = "PreferSticky",
}
export interface CreateProxySessionRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
  /**
   * <p>The participant phone numbers.</p>
   */
  ParticipantPhoneNumbers: string[] | undefined;
  /**
   * <p>The name of the proxy session.</p>
   */
  Name?: string;
  /**
   * <p>The number of minutes allowed for the proxy session.</p>
   */
  ExpiryMinutes?: number;
  /**
   * <p>The proxy session capabilities.</p>
   */
  Capabilities: (Capability | string)[] | undefined;
  /**
   * <p>The preference for proxy phone number reuse, or stickiness, between the same participants across sessions.</p>
   */
  NumberSelectionBehavior?: NumberSelectionBehavior | string;
  /**
   * <p>The preference for matching the country or area code of the proxy phone number with that of the first participant.</p>
   */
  GeoMatchLevel?: GeoMatchLevel | string;
  /**
   * <p>The country and area code for the proxy phone number.</p>
   */
  GeoMatchParams?: GeoMatchParams;
}
export declare namespace CreateProxySessionRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateProxySessionRequest) => any;
}
/**
 * <p>The phone number and proxy phone number for a participant in an Amazon Chime Voice Connector proxy session.</p>
 */
export interface Participant {
  /**
   * <p>The participant's phone number.</p>
   */
  PhoneNumber?: string;
  /**
   * <p>The participant's proxy phone number.</p>
   */
  ProxyPhoneNumber?: string;
}
export declare namespace Participant {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Participant) => any;
}
export declare enum ProxySessionStatus {
  Closed = "Closed",
  InProgress = "InProgress",
  Open = "Open",
}
/**
 * <p>The proxy session for an Amazon Chime Voice Connector.</p>
 */
export interface ProxySession {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId?: string;
  /**
   * <p>The proxy session ID.</p>
   */
  ProxySessionId?: string;
  /**
   * <p>The name of the proxy session.</p>
   */
  Name?: string;
  /**
   * <p>The status of the proxy session.</p>
   */
  Status?: ProxySessionStatus | string;
  /**
   * <p>The number of minutes allowed for the proxy session.</p>
   */
  ExpiryMinutes?: number;
  /**
   * <p>The proxy session capabilities.</p>
   */
  Capabilities?: (Capability | string)[];
  /**
   * <p>The created time stamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;
  /**
   * <p>The updated time stamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
  /**
   * <p>The ended time stamp, in ISO 8601 format.</p>
   */
  EndedTimestamp?: Date;
  /**
   * <p>The proxy session participants.</p>
   */
  Participants?: Participant[];
  /**
   * <p>The preference for proxy phone number reuse, or stickiness, between the same participants across sessions.</p>
   */
  NumberSelectionBehavior?: NumberSelectionBehavior | string;
  /**
   * <p>The preference for matching the country or area code of the proxy phone number with that of the first participant.</p>
   */
  GeoMatchLevel?: GeoMatchLevel | string;
  /**
   * <p>The country and area code for the proxy phone number.</p>
   */
  GeoMatchParams?: GeoMatchParams;
}
export declare namespace ProxySession {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ProxySession) => any;
}
export interface CreateProxySessionResponse {
  /**
   * <p>The proxy session details.</p>
   */
  ProxySession?: ProxySession;
}
export declare namespace CreateProxySessionResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateProxySessionResponse) => any;
}
export interface CreateRoomRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The room name.</p>
   */
  Name: string | undefined;
  /**
   * <p>The idempotency token for the request.</p>
   */
  ClientRequestToken?: string;
}
export declare namespace CreateRoomRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateRoomRequest) => any;
}
/**
 * <p>The Amazon Chime chat room details.</p>
 */
export interface Room {
  /**
   * <p>The room ID.</p>
   */
  RoomId?: string;
  /**
   * <p>The room name.</p>
   */
  Name?: string;
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId?: string;
  /**
   * <p>The identifier of the room creator.</p>
   */
  CreatedBy?: string;
  /**
   * <p>The room creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;
  /**
   * <p>The room update timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}
export declare namespace Room {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Room) => any;
}
export interface CreateRoomResponse {
  /**
   * <p>The room details.</p>
   */
  Room?: Room;
}
export declare namespace CreateRoomResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateRoomResponse) => any;
}
export interface CreateRoomMembershipRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;
  /**
   * <p>The Amazon Chime member ID (user ID or bot ID).</p>
   */
  MemberId: string | undefined;
  /**
   * <p>The role of the member.</p>
   */
  Role?: RoomMembershipRole | string;
}
export declare namespace CreateRoomMembershipRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateRoomMembershipRequest) => any;
}
export declare enum MemberType {
  Bot = "Bot",
  User = "User",
  Webhook = "Webhook",
}
/**
 * <p>The member details, such as email address, name, member ID, and member type.</p>
 */
export interface Member {
  /**
   * <p>The member ID (user ID or bot ID).</p>
   */
  MemberId?: string;
  /**
   * <p>The member type.</p>
   */
  MemberType?: MemberType | string;
  /**
   * <p>The member email address.</p>
   */
  Email?: string;
  /**
   * <p>The member name.</p>
   */
  FullName?: string;
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId?: string;
}
export declare namespace Member {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Member) => any;
}
/**
 * <p>The room membership details.</p>
 */
export interface RoomMembership {
  /**
   * <p>The room ID.</p>
   */
  RoomId?: string;
  /**
   * <p>The member details, such as email address, name, member ID, and member type.</p>
   */
  Member?: Member;
  /**
   * <p>The membership role.</p>
   */
  Role?: RoomMembershipRole | string;
  /**
   * <p>The identifier of the user that invited the room member.</p>
   */
  InvitedBy?: string;
  /**
   * <p>The room membership update timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}
export declare namespace RoomMembership {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RoomMembership) => any;
}
export interface CreateRoomMembershipResponse {
  /**
   * <p>The room membership details.</p>
   */
  RoomMembership?: RoomMembership;
}
export declare namespace CreateRoomMembershipResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateRoomMembershipResponse) => any;
}
/**
 * <p>The endpoint assigned to the SIP media application.</p>
 */
export interface SipMediaApplicationEndpoint {
  /**
   * <p>Valid Amazon Resource Name (ARN) of the Lambda function. The function must be created in the same AWS Region as the SIP media application.</p>
   */
  LambdaArn?: string;
}
export declare namespace SipMediaApplicationEndpoint {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: SipMediaApplicationEndpoint) => any;
}
export interface CreateSipMediaApplicationRequest {
  /**
   * <p>The AWS Region assigned to the SIP media application.</p>
   */
  AwsRegion: string | undefined;
  /**
   * <p>The SIP media application name.</p>
   */
  Name: string | undefined;
  /**
   * <p>List of endpoints (Lambda Amazon Resource Names) specified for the SIP media application. Currently, only one endpoint is supported.</p>
   */
  Endpoints: SipMediaApplicationEndpoint[] | undefined;
}
export declare namespace CreateSipMediaApplicationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateSipMediaApplicationRequest) => any;
}
/**
 * <p>The details of the SIP media application, including name and endpoints. An AWS account can have multiple SIP media applications.</p>
 */
export interface SipMediaApplication {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId?: string;
  /**
   * <p>The AWS Region in which the SIP media application is created.</p>
   */
  AwsRegion?: string;
  /**
   * <p>The name of the SIP media application.</p>
   */
  Name?: string;
  /**
   * <p>List of endpoints for SIP media application. Currently, only one endpoint per SIP media application is permitted.</p>
   */
  Endpoints?: SipMediaApplicationEndpoint[];
  /**
   * <p>The SIP media application creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;
  /**
   * <p>The SIP media application updated timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}
export declare namespace SipMediaApplication {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: SipMediaApplication) => any;
}
export interface CreateSipMediaApplicationResponse {
  /**
   * <p>The SIP media application details.</p>
   */
  SipMediaApplication?: SipMediaApplication;
}
export declare namespace CreateSipMediaApplicationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateSipMediaApplicationResponse) => any;
}
export interface CreateSipMediaApplicationCallRequest {
  /**
   * <p>The phone number that a user calls from. This is a phone number in your Amazon Chime phone number inventory.</p>
   */
  FromPhoneNumber: string | undefined;
  /**
   * <p>The phone number that the service should call.</p>
   */
  ToPhoneNumber: string | undefined;
  /**
   * <p>The ID of the SIP media application.</p>
   */
  SipMediaApplicationId: string | undefined;
}
export declare namespace CreateSipMediaApplicationCallRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateSipMediaApplicationCallRequest) => any;
}
/**
 * <p>A <code>Call</code> instance for a SIP media application.</p>
 */
export interface SipMediaApplicationCall {
  /**
   * <p>The transaction ID of a call.</p>
   */
  TransactionId?: string;
}
export declare namespace SipMediaApplicationCall {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: SipMediaApplicationCall) => any;
}
export interface CreateSipMediaApplicationCallResponse {
  /**
   * <p>The actual call.</p>
   */
  SipMediaApplicationCall?: SipMediaApplicationCall;
}
export declare namespace CreateSipMediaApplicationCallResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateSipMediaApplicationCallResponse) => any;
}
/**
 * <p>Target SIP media application and other details, such as priority and AWS Region, to be
 *             specified in the SIP rule. Only one SIP rule per AWS Region can be provided.</p>
 */
export interface SipRuleTargetApplication {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId?: string;
  /**
   * <p>Priority of the SIP media application in the target list.</p>
   */
  Priority?: number;
  /**
   * <p>The AWS Region of the target application.</p>
   */
  AwsRegion?: string;
}
export declare namespace SipRuleTargetApplication {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: SipRuleTargetApplication) => any;
}
export declare enum SipRuleTriggerType {
  RequestUriHostname = "RequestUriHostname",
  ToPhoneNumber = "ToPhoneNumber",
}
export interface CreateSipRuleRequest {
  /**
   * <p>The name of the SIP rule.</p>
   */
  Name: string | undefined;
  /**
   * <p>The type of trigger assigned to the SIP rule in <code>TriggerValue</code>, currently <code>RequestUriHostname</code> or <code>ToPhoneNumber</code>.</p>
   */
  TriggerType: SipRuleTriggerType | string | undefined;
  /**
   * <p>If <code>TriggerType</code> is <code>RequestUriHostname</code>, the value can be the outbound
   *             host name of an Amazon Chime Voice Connector. If <code>TriggerType</code> is
   *                 <code>ToPhoneNumber</code>, the value can be a customer-owned phone number in the
   *     E164 format. The <code>SipMediaApplication</code> specified in the <code>SipRule</code> is triggered if the request URI in an incoming SIP
   *     request matches the <code>RequestUriHostname</code>, or if the <code>To</code> header in the incoming SIP request matches the
   *     <code>ToPhoneNumber</code> value.</p>
   */
  TriggerValue: string | undefined;
  /**
   * <p>Enables or disables a rule. You must disable rules before you can delete them.</p>
   */
  Disabled?: boolean;
  /**
   * <p>List of SIP media applications with priority and AWS Region. Only one SIP application per AWS Region can be used.</p>
   */
  TargetApplications: SipRuleTargetApplication[] | undefined;
}
export declare namespace CreateSipRuleRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateSipRuleRequest) => any;
}
/**
 * <p>The SIP rule details, including name, triggers, and target applications. An AWS account can have multiple SIP rules.</p>
 */
export interface SipRule {
  /**
   * <p>The SIP rule ID.</p>
   */
  SipRuleId?: string;
  /**
   * <p>The name of the SIP rule.</p>
   */
  Name?: string;
  /**
   * <p>Indicates whether the SIP rule is enabled or disabled. You must disable a rule before you can delete it.</p>
   */
  Disabled?: boolean;
  /**
   * <p>The type of trigger assigned to the SIP rule in <code>TriggerValue</code>, currently <code>RequestUriHostname</code> or
   *         <code>ToPhoneNumber</code>.</p>
   */
  TriggerType?: SipRuleTriggerType | string;
  /**
   * <p>If <code>TriggerType</code> is <code>RequestUriHostname</code>, then the value can be the
   *             outbound host name of the Amazon Chime Voice Connector. If <code>TriggerType</code> is
   *                 <code>ToPhoneNumber</code>, then the value can be a customer-owned phone number in
   *             E164 format. <code>SipRule</code> is triggered when a SIP rule requests host name or
   *                 <code>ToPhoneNumber</code> matches in the incoming SIP request.</p>
   */
  TriggerValue?: string;
  /**
   * <p>Target SIP media application and other details, such as priority and AWS Region, to be
   *             specified in the SIP rule. Only one SIP rule per AWS Region can be provided.</p>
   */
  TargetApplications?: SipRuleTargetApplication[];
  /**
   * <p>The time at which the SIP rule was created, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;
  /**
   * <p>The time at which the SIP rule was last updated, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}
export declare namespace SipRule {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: SipRule) => any;
}
export interface CreateSipRuleResponse {
  /**
   * <p>Returns the SIP rule information, including the rule ID, triggers, and target applications.</p>
   */
  SipRule?: SipRule;
}
export declare namespace CreateSipRuleResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateSipRuleResponse) => any;
}
export interface CreateUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The user name.</p>
   */
  Username?: string;
  /**
   * <p>The user's email address.</p>
   */
  Email?: string;
  /**
   * <p>The user type.</p>
   */
  UserType?: UserType | string;
}
export declare namespace CreateUserRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateUserRequest) => any;
}
export declare enum InviteStatus {
  Accepted = "Accepted",
  Failed = "Failed",
  Pending = "Pending",
}
export declare enum RegistrationStatus {
  Registered = "Registered",
  Suspended = "Suspended",
  Unregistered = "Unregistered",
}
/**
 * <p>The user on the Amazon Chime account.</p>
 */
export interface User {
  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId?: string;
  /**
   * <p>The primary email address of the user.</p>
   */
  PrimaryEmail?: string;
  /**
   * <p>The primary phone number associated with the user.</p>
   */
  PrimaryProvisionedNumber?: string;
  /**
   * <p>The display name of the user.</p>
   */
  DisplayName?: string;
  /**
   * <p>The license type for the user.</p>
   */
  LicenseType?: License | string;
  /**
   * <p>The user type.</p>
   */
  UserType?: UserType | string;
  /**
   * <p>The user registration status.</p>
   */
  UserRegistrationStatus?: RegistrationStatus | string;
  /**
   * <p>The user invite status.</p>
   */
  UserInvitationStatus?: InviteStatus | string;
  /**
   * <p>Date and time when the user is registered, in ISO 8601 format.</p>
   */
  RegisteredOn?: Date;
  /**
   * <p>Date and time when the user is invited to the Amazon Chime account, in ISO 8601 format.</p>
   */
  InvitedOn?: Date;
  /**
   * <p>The Alexa for Business metadata.</p>
   */
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata;
  /**
   * <p>The user's personal meeting PIN.</p>
   */
  PersonalPIN?: string;
}
export declare namespace User {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: User) => any;
}
export interface CreateUserResponse {
  /**
   * <p>The user on the Amazon Chime account.</p>
   */
  User?: User;
}
export declare namespace CreateUserResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateUserResponse) => any;
}
export declare enum VoiceConnectorAwsRegion {
  US_EAST_1 = "us-east-1",
  US_WEST_2 = "us-west-2",
}
export interface CreateVoiceConnectorRequest {
  /**
   * <p>The name of the Amazon Chime Voice Connector.</p>
   */
  Name: string | undefined;
  /**
   * <p>
   * The AWS Region in which the Amazon Chime Voice Connector is created. Default value:
   * <code>us-east-1</code>
   * .
   * </p>
   */
  AwsRegion?: VoiceConnectorAwsRegion | string;
  /**
   * <p>When enabled, requires encryption for the Amazon Chime Voice Connector.</p>
   */
  RequireEncryption: boolean | undefined;
}
export declare namespace CreateVoiceConnectorRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateVoiceConnectorRequest) => any;
}
/**
 * <p>The Amazon Chime Voice Connector configuration, including outbound host name and encryption
 *             settings.</p>
 */
export interface VoiceConnector {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId?: string;
  /**
   * <p>
   * The AWS Region in which the Amazon Chime Voice Connector is created. Default:
   * <code>us-east-1</code>.
   * </p>
   */
  AwsRegion?: VoiceConnectorAwsRegion | string;
  /**
   * <p>The name of the Amazon Chime Voice Connector.</p>
   */
  Name?: string;
  /**
   * <p>The outbound host name for the Amazon Chime Voice Connector.</p>
   */
  OutboundHostName?: string;
  /**
   * <p>Designates whether encryption is required for the Amazon Chime Voice Connector.</p>
   */
  RequireEncryption?: boolean;
  /**
   * <p>The Amazon Chime Voice Connector creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;
  /**
   * <p>The updated Amazon Chime Voice Connector timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}
export declare namespace VoiceConnector {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VoiceConnector) => any;
}
export interface CreateVoiceConnectorResponse {
  /**
   * <p>The Amazon Chime Voice Connector details.</p>
   */
  VoiceConnector?: VoiceConnector;
}
export declare namespace CreateVoiceConnectorResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateVoiceConnectorResponse) => any;
}
/**
 * <p>For Amazon Chime Voice Connector groups, the Amazon Chime Voice Connectors to which to route inbound calls. Includes priority configuration settings. Limit: 3
 * <code>VoiceConnectorItems</code>
 * per Amazon Chime Voice Connector group.</p>
 */
export interface VoiceConnectorItem {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
  /**
   * <p>The priority associated with the Amazon Chime Voice Connector, with 1 being the highest priority. Higher priority Amazon Chime Voice Connectors are attempted first.</p>
   */
  Priority: number | undefined;
}
export declare namespace VoiceConnectorItem {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VoiceConnectorItem) => any;
}
export interface CreateVoiceConnectorGroupRequest {
  /**
   * <p>The name of the Amazon Chime Voice Connector group.</p>
   */
  Name: string | undefined;
  /**
   * <p>The Amazon Chime Voice Connectors to route inbound calls to.</p>
   */
  VoiceConnectorItems?: VoiceConnectorItem[];
}
export declare namespace CreateVoiceConnectorGroupRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateVoiceConnectorGroupRequest) => any;
}
/**
 * <p>The Amazon Chime Voice Connector group configuration, including associated Amazon Chime Voice
 *             Connectors. You can include Amazon Chime Voice Connectors from different AWS Regions in
 *             your group. This creates a fault tolerant mechanism for fallback in case of availability
 *             events.</p>
 */
export interface VoiceConnectorGroup {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId?: string;
  /**
   * <p>The name of the Amazon Chime Voice Connector group.</p>
   */
  Name?: string;
  /**
   * <p>The Amazon Chime Voice Connectors to which to route inbound calls.</p>
   */
  VoiceConnectorItems?: VoiceConnectorItem[];
  /**
   * <p>The Amazon Chime Voice Connector group creation time stamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;
  /**
   * <p>The updated Amazon Chime Voice Connector group time stamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}
export declare namespace VoiceConnectorGroup {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VoiceConnectorGroup) => any;
}
export interface CreateVoiceConnectorGroupResponse {
  /**
   * <p>The Amazon Chime Voice Connector group details.</p>
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}
export declare namespace CreateVoiceConnectorGroupResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateVoiceConnectorGroupResponse) => any;
}
/**
 * <p>The SIP credentials used to authenticate requests to your Amazon Chime Voice Connector.</p>
 */
export interface Credential {
  /**
   * <p>The RFC2617 compliant user name associated with the SIP credentials, in US-ASCII
   *             format.</p>
   */
  Username?: string;
  /**
   * <p>The RFC2617 compliant password associated with the SIP credentials, in US-ASCII format.</p>
   */
  Password?: string;
}
export declare namespace Credential {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Credential) => any;
}
export interface DeleteAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}
export declare namespace DeleteAccountRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteAccountRequest) => any;
}
export interface DeleteAccountResponse {}
export declare namespace DeleteAccountResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteAccountResponse) => any;
}
/**
 * <p>The request was well-formed but was unable to be followed due to semantic errors.</p>
 */
export interface UnprocessableEntityException extends __SmithyException, $MetadataBearer {
  name: "UnprocessableEntityException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}
export declare namespace UnprocessableEntityException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UnprocessableEntityException) => any;
}
export interface DeleteAppInstanceRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}
export declare namespace DeleteAppInstanceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteAppInstanceRequest) => any;
}
export interface DeleteAppInstanceAdminRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>'s administrator.</p>
   */
  AppInstanceAdminArn: string | undefined;
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}
export declare namespace DeleteAppInstanceAdminRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteAppInstanceAdminRequest) => any;
}
export interface DeleteAppInstanceStreamingConfigurationsRequest {
  /**
   * <p>The ARN of the streaming configurations being deleted.</p>
   */
  AppInstanceArn: string | undefined;
}
export declare namespace DeleteAppInstanceStreamingConfigurationsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteAppInstanceStreamingConfigurationsRequest) => any;
}
export interface DeleteAppInstanceUserRequest {
  /**
   * <p>The ARN of the user request being deleted.</p>
   */
  AppInstanceUserArn: string | undefined;
}
export declare namespace DeleteAppInstanceUserRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteAppInstanceUserRequest) => any;
}
export interface DeleteAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;
}
export declare namespace DeleteAttendeeRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteAttendeeRequest) => any;
}
export interface DeleteChannelRequest {
  /**
   * <p>The ARN of the channel being deleted.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace DeleteChannelRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteChannelRequest) => any;
}
export interface DeleteChannelBanRequest {
  /**
   * <p>The ARN of the channel from which the <code>AppInstanceUser</code> was banned.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The ARN of the <code>AppInstanceUser</code> that you want to reinstate.</p>
   */
  MemberArn: string | undefined;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace DeleteChannelBanRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteChannelBanRequest) => any;
}
export interface DeleteChannelMembershipRequest {
  /**
   * <p>The ARN of the channel from which you want to remove the user.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The ARN of the member that you're removing from the channel.</p>
   */
  MemberArn: string | undefined;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace DeleteChannelMembershipRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteChannelMembershipRequest) => any;
}
export interface DeleteChannelMessageRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The ID of the message being deleted.</p>
   */
  MessageId: string | undefined;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace DeleteChannelMessageRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteChannelMessageRequest) => any;
}
export interface DeleteChannelModeratorRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The ARN of the moderator being deleted.</p>
   */
  ChannelModeratorArn: string | undefined;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace DeleteChannelModeratorRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteChannelModeratorRequest) => any;
}
export interface DeleteEventsConfigurationRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;
}
export declare namespace DeleteEventsConfigurationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteEventsConfigurationRequest) => any;
}
export interface DeleteMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}
export declare namespace DeleteMeetingRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteMeetingRequest) => any;
}
export interface DeletePhoneNumberRequest {
  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId: string | undefined;
}
export declare namespace DeletePhoneNumberRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeletePhoneNumberRequest) => any;
}
export interface DeleteProxySessionRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
  /**
   * <p>The proxy session ID.</p>
   */
  ProxySessionId: string | undefined;
}
export declare namespace DeleteProxySessionRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteProxySessionRequest) => any;
}
export interface DeleteRoomRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The chat room ID.</p>
   */
  RoomId: string | undefined;
}
export declare namespace DeleteRoomRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteRoomRequest) => any;
}
export interface DeleteRoomMembershipRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;
  /**
   * <p>The member ID (user ID or bot ID).</p>
   */
  MemberId: string | undefined;
}
export declare namespace DeleteRoomMembershipRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteRoomMembershipRequest) => any;
}
export interface DeleteSipMediaApplicationRequest {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;
}
export declare namespace DeleteSipMediaApplicationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteSipMediaApplicationRequest) => any;
}
export interface DeleteSipRuleRequest {
  /**
   * <p>The SIP rule ID.</p>
   */
  SipRuleId: string | undefined;
}
export declare namespace DeleteSipRuleRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteSipRuleRequest) => any;
}
export interface DeleteVoiceConnectorRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}
export declare namespace DeleteVoiceConnectorRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteVoiceConnectorRequest) => any;
}
export interface DeleteVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}
export declare namespace DeleteVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteVoiceConnectorEmergencyCallingConfigurationRequest) => any;
}
export interface DeleteVoiceConnectorGroupRequest {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;
}
export declare namespace DeleteVoiceConnectorGroupRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteVoiceConnectorGroupRequest) => any;
}
export interface DeleteVoiceConnectorOriginationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}
export declare namespace DeleteVoiceConnectorOriginationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteVoiceConnectorOriginationRequest) => any;
}
export interface DeleteVoiceConnectorProxyRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}
export declare namespace DeleteVoiceConnectorProxyRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteVoiceConnectorProxyRequest) => any;
}
export interface DeleteVoiceConnectorStreamingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}
export declare namespace DeleteVoiceConnectorStreamingConfigurationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteVoiceConnectorStreamingConfigurationRequest) => any;
}
export interface DeleteVoiceConnectorTerminationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}
export declare namespace DeleteVoiceConnectorTerminationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteVoiceConnectorTerminationRequest) => any;
}
export interface DeleteVoiceConnectorTerminationCredentialsRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
  /**
   * <p>The RFC2617 compliant username associated with the SIP credentials, in US-ASCII format.</p>
   */
  Usernames: string[] | undefined;
}
export declare namespace DeleteVoiceConnectorTerminationCredentialsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteVoiceConnectorTerminationCredentialsRequest) => any;
}
export interface DescribeAppInstanceRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}
export declare namespace DescribeAppInstanceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeAppInstanceRequest) => any;
}
export interface DescribeAppInstanceResponse {
  /**
   * <p>The ARN, metadata, created and last-updated timestamps, and the name of the <code>AppInstance</code>. All
   *             timestamps use epoch milliseconds.</p>
   */
  AppInstance?: AppInstance;
}
export declare namespace DescribeAppInstanceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeAppInstanceResponse) => any;
}
export interface DescribeAppInstanceAdminRequest {
  /**
   * <p>The ARN of the <code>AppInstanceAdmin</code>.</p>
   */
  AppInstanceAdminArn: string | undefined;
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}
export declare namespace DescribeAppInstanceAdminRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeAppInstanceAdminRequest) => any;
}
export interface DescribeAppInstanceAdminResponse {
  /**
   * <p>The ARN and name of the <code>AppInstanceUser</code>, the ARN of the <code>AppInstance</code>, and the created and
   *             last-updated timestamps. All timestamps use epoch milliseconds.</p>
   */
  AppInstanceAdmin?: AppInstanceAdmin;
}
export declare namespace DescribeAppInstanceAdminResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeAppInstanceAdminResponse) => any;
}
export interface DescribeAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;
}
export declare namespace DescribeAppInstanceUserRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeAppInstanceUserRequest) => any;
}
export interface DescribeAppInstanceUserResponse {
  /**
   * <p>The name of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUser?: AppInstanceUser;
}
export declare namespace DescribeAppInstanceUserResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeAppInstanceUserResponse) => any;
}
export interface DescribeChannelRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace DescribeChannelRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeChannelRequest) => any;
}
export interface DescribeChannelResponse {
  /**
   * <p>The channel details.</p>
   */
  Channel?: Channel;
}
export declare namespace DescribeChannelResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeChannelResponse) => any;
}
export interface DescribeChannelBanRequest {
  /**
   * <p>The ARN of the channel from which the user is banned.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The ARN of the member being banned.</p>
   */
  MemberArn: string | undefined;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace DescribeChannelBanRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeChannelBanRequest) => any;
}
export interface DescribeChannelBanResponse {
  /**
   * <p>The details of
   *             the ban.</p>
   */
  ChannelBan?: ChannelBan;
}
export declare namespace DescribeChannelBanResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeChannelBanResponse) => any;
}
export interface DescribeChannelMembershipRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The ARN of the member.</p>
   */
  MemberArn: string | undefined;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace DescribeChannelMembershipRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeChannelMembershipRequest) => any;
}
export interface DescribeChannelMembershipResponse {
  /**
   * <p>The details of the membership.</p>
   */
  ChannelMembership?: ChannelMembership;
}
export declare namespace DescribeChannelMembershipResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeChannelMembershipResponse) => any;
}
export interface DescribeChannelMembershipForAppInstanceUserRequest {
  /**
   * <p>The ARN of the channel to which the user belongs.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The ARN of the user in a channel.</p>
   */
  AppInstanceUserArn: string | undefined;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace DescribeChannelMembershipForAppInstanceUserRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeChannelMembershipForAppInstanceUserRequest) => any;
}
export interface DescribeChannelMembershipForAppInstanceUserResponse {
  /**
   * <p>The channel to which a user belongs.</p>
   */
  ChannelMembership?: ChannelMembershipForAppInstanceUserSummary;
}
export declare namespace DescribeChannelMembershipForAppInstanceUserResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeChannelMembershipForAppInstanceUserResponse) => any;
}
export interface DescribeChannelModeratedByAppInstanceUserRequest {
  /**
   * <p>The ARN of the moderated channel.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The ARN of the <code>AppInstanceUser</code> in the moderated channel.</p>
   */
  AppInstanceUserArn: string | undefined;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace DescribeChannelModeratedByAppInstanceUserRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeChannelModeratedByAppInstanceUserRequest) => any;
}
export interface DescribeChannelModeratedByAppInstanceUserResponse {
  /**
   * <p>The moderated channel.</p>
   */
  Channel?: ChannelModeratedByAppInstanceUserSummary;
}
export declare namespace DescribeChannelModeratedByAppInstanceUserResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeChannelModeratedByAppInstanceUserResponse) => any;
}
export interface DescribeChannelModeratorRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The ARN of the channel moderator.</p>
   */
  ChannelModeratorArn: string | undefined;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace DescribeChannelModeratorRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeChannelModeratorRequest) => any;
}
export interface DescribeChannelModeratorResponse {
  /**
   * <p>The details of the channel moderator.</p>
   */
  ChannelModerator?: ChannelModerator;
}
export declare namespace DescribeChannelModeratorResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DescribeChannelModeratorResponse) => any;
}
export interface DisassociatePhoneNumberFromUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
}
export declare namespace DisassociatePhoneNumberFromUserRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DisassociatePhoneNumberFromUserRequest) => any;
}
export interface DisassociatePhoneNumberFromUserResponse {}
export declare namespace DisassociatePhoneNumberFromUserResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DisassociatePhoneNumberFromUserResponse) => any;
}
export interface DisassociatePhoneNumbersFromVoiceConnectorRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;
}
export declare namespace DisassociatePhoneNumbersFromVoiceConnectorRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DisassociatePhoneNumbersFromVoiceConnectorRequest) => any;
}
export interface DisassociatePhoneNumbersFromVoiceConnectorResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}
export declare namespace DisassociatePhoneNumbersFromVoiceConnectorResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DisassociatePhoneNumbersFromVoiceConnectorResponse) => any;
}
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;
  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;
}
export declare namespace DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DisassociatePhoneNumbersFromVoiceConnectorGroupRequest) => any;
}
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}
export declare namespace DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DisassociatePhoneNumbersFromVoiceConnectorGroupResponse) => any;
}
export interface DisassociateSigninDelegateGroupsFromAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The sign-in delegate group names.</p>
   */
  GroupNames: string[] | undefined;
}
export declare namespace DisassociateSigninDelegateGroupsFromAccountRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DisassociateSigninDelegateGroupsFromAccountRequest) => any;
}
export interface DisassociateSigninDelegateGroupsFromAccountResponse {}
export declare namespace DisassociateSigninDelegateGroupsFromAccountResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DisassociateSigninDelegateGroupsFromAccountResponse) => any;
}
/**
 * <p>The Dialed Number Identification Service (DNIS) emergency calling configuration details associated with an Amazon Chime Voice Connector's emergency calling configuration.</p>
 */
export interface DNISEmergencyCallingConfiguration {
  /**
   * <p>The DNIS phone number to route emergency calls to, in E.164 format.</p>
   */
  EmergencyPhoneNumber: string | undefined;
  /**
   * <p>The DNIS phone number to route test emergency calls to, in E.164 format.</p>
   */
  TestPhoneNumber?: string;
  /**
   * <p>The country from which emergency calls are allowed, in ISO 3166-1 alpha-2 format.</p>
   */
  CallingCountry: string | undefined;
}
export declare namespace DNISEmergencyCallingConfiguration {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DNISEmergencyCallingConfiguration) => any;
}
export declare enum EmailStatus {
  Failed = "Failed",
  NotSent = "NotSent",
  Sent = "Sent",
}
/**
 * <p>The emergency calling configuration details associated with an Amazon Chime Voice Connector.</p>
 */
export interface EmergencyCallingConfiguration {
  /**
   * <p>The Dialed Number Identification Service (DNIS) emergency calling configuration details.</p>
   */
  DNIS?: DNISEmergencyCallingConfiguration[];
}
export declare namespace EmergencyCallingConfiguration {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: EmergencyCallingConfiguration) => any;
}
/**
 * <p>The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN.</p>
 */
export interface EventsConfiguration {
  /**
   * <p>The bot ID.</p>
   */
  BotId?: string;
  /**
   * <p>HTTPS endpoint that allows a bot to receive outgoing events.</p>
   */
  OutboundEventsHTTPSEndpoint?: string;
  /**
   * <p>Lambda function ARN that allows a bot to receive outgoing events.</p>
   */
  LambdaFunctionArn?: string;
}
export declare namespace EventsConfiguration {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: EventsConfiguration) => any;
}
export interface GetAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}
export declare namespace GetAccountRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetAccountRequest) => any;
}
export interface GetAccountResponse {
  /**
   * <p>The Amazon Chime account details.</p>
   */
  Account?: Account;
}
export declare namespace GetAccountResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetAccountResponse) => any;
}
export interface GetAccountSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}
export declare namespace GetAccountSettingsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetAccountSettingsRequest) => any;
}
export interface GetAccountSettingsResponse {
  /**
   * <p>The Amazon Chime account settings.</p>
   */
  AccountSettings?: AccountSettings;
}
export declare namespace GetAccountSettingsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetAccountSettingsResponse) => any;
}
export interface GetAppInstanceRetentionSettingsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}
export declare namespace GetAppInstanceRetentionSettingsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetAppInstanceRetentionSettingsRequest) => any;
}
export interface GetAppInstanceRetentionSettingsResponse {
  /**
   * <p>The retention settings for the <code>AppInstance</code>.</p>
   */
  AppInstanceRetentionSettings?: AppInstanceRetentionSettings;
  /**
   * <p>The timestamp representing the time at which the specified items are retained, in Epoch Seconds.</p>
   */
  InitiateDeletionTimestamp?: Date;
}
export declare namespace GetAppInstanceRetentionSettingsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetAppInstanceRetentionSettingsResponse) => any;
}
export interface GetAppInstanceStreamingConfigurationsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}
export declare namespace GetAppInstanceStreamingConfigurationsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetAppInstanceStreamingConfigurationsRequest) => any;
}
export interface GetAppInstanceStreamingConfigurationsResponse {
  /**
   * <p>The streaming settings.</p>
   */
  AppInstanceStreamingConfigurations?: AppInstanceStreamingConfiguration[];
}
export declare namespace GetAppInstanceStreamingConfigurationsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetAppInstanceStreamingConfigurationsResponse) => any;
}
export interface GetAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;
}
export declare namespace GetAttendeeRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetAttendeeRequest) => any;
}
export interface GetAttendeeResponse {
  /**
   * <p>The Amazon Chime SDK attendee information.</p>
   */
  Attendee?: Attendee;
}
export declare namespace GetAttendeeResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetAttendeeResponse) => any;
}
export interface GetBotRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;
}
export declare namespace GetBotRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetBotRequest) => any;
}
export interface GetBotResponse {
  /**
   * <p>The chat bot details.</p>
   */
  Bot?: Bot;
}
export declare namespace GetBotResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetBotResponse) => any;
}
export interface GetChannelMessageRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;
  /**
   * <p>The ID of the message.</p>
   */
  MessageId: string | undefined;
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}
export declare namespace GetChannelMessageRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetChannelMessageRequest) => any;
}
export interface GetChannelMessageResponse {
  /**
   * <p>The details of and content in the message.</p>
   */
  ChannelMessage?: ChannelMessage;
}
export declare namespace GetChannelMessageResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetChannelMessageResponse) => any;
}
export interface GetEventsConfigurationRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;
}
export declare namespace GetEventsConfigurationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetEventsConfigurationRequest) => any;
}
export interface GetEventsConfigurationResponse {
  /**
   * <p>The events configuration details.</p>
   */
  EventsConfiguration?: EventsConfiguration;
}
export declare namespace GetEventsConfigurationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetEventsConfigurationResponse) => any;
}
/**
 * <p>The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for
 *             storing call detail records.</p>
 */
export interface VoiceConnectorSettings {
  /**
   * <p>The Amazon S3 bucket designated for call detail record storage.</p>
   */
  CdrBucket?: string;
}
export declare namespace VoiceConnectorSettings {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: VoiceConnectorSettings) => any;
}
export interface GetGlobalSettingsResponse {
  /**
   * <p>The Amazon Chime Business Calling settings.</p>
   */
  BusinessCalling?: BusinessCallingSettings;
  /**
   * <p>The Amazon Chime Voice Connector settings.</p>
   */
  VoiceConnector?: VoiceConnectorSettings;
}
export declare namespace GetGlobalSettingsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetGlobalSettingsResponse) => any;
}
export interface GetMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}
export declare namespace GetMeetingRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetMeetingRequest) => any;
}
export interface GetMeetingResponse {
  /**
   * <p>The Amazon Chime SDK meeting information.</p>
   */
  Meeting?: Meeting;
}
export declare namespace GetMeetingResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetMeetingResponse) => any;
}
export interface GetMessagingSessionEndpointRequest {}
export declare namespace GetMessagingSessionEndpointRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetMessagingSessionEndpointRequest) => any;
}
/**
 * <p>The websocket endpoint used to connect to Amazon Chime SDK messaging.</p>
 */
export interface MessagingSessionEndpoint {
  /**
   * <p>The endpoint to which you establish a websocket connection.</p>
   */
  Url?: string;
}
export declare namespace MessagingSessionEndpoint {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: MessagingSessionEndpoint) => any;
}
export interface GetMessagingSessionEndpointResponse {
  /**
   * <p>The endpoint returned in the response.</p>
   */
  Endpoint?: MessagingSessionEndpoint;
}
export declare namespace GetMessagingSessionEndpointResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetMessagingSessionEndpointResponse) => any;
}
export interface GetPhoneNumberRequest {
  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId: string | undefined;
}
export declare namespace GetPhoneNumberRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetPhoneNumberRequest) => any;
}
export declare enum PhoneNumberAssociationName {
  AccountId = "AccountId",
  SipRuleId = "SipRuleId",
  UserId = "UserId",
  VoiceConnectorGroupId = "VoiceConnectorGroupId",
  VoiceConnectorId = "VoiceConnectorId",
}
/**
 * <p>The phone number associations, such as Amazon Chime account ID, Amazon Chime user ID, Amazon
 *             Chime Voice Connector ID, or Amazon Chime Voice Connector group ID.</p>
 */
export interface PhoneNumberAssociation {
  /**
   * <p>Contains the ID for the entity specified in Name.</p>
   */
  Value?: string;
  /**
   * <p>Defines the association with an Amazon Chime account ID, user ID, Amazon Chime Voice Connector
   *             ID, or Amazon Chime Voice Connector group ID.</p>
   */
  Name?: PhoneNumberAssociationName | string;
  /**
   * <p>The timestamp of the phone number association, in ISO 8601 format.</p>
   */
  AssociatedTimestamp?: Date;
}
export declare namespace PhoneNumberAssociation {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PhoneNumberAssociation) => any;
}
/**
 * <p>The phone number capabilities for Amazon Chime Business Calling phone numbers, such as enabled
 *             inbound and outbound calling and text messaging.</p>
 */
export interface PhoneNumberCapabilities {
  /**
   * <p>Allows or denies inbound calling for the specified phone number.</p>
   */
  InboundCall?: boolean;
  /**
   * <p>Allows or denies outbound calling for the specified phone number.</p>
   */
  OutboundCall?: boolean;
  /**
   * <p>Allows or denies inbound SMS messaging for the specified phone number.</p>
   */
  InboundSMS?: boolean;
  /**
   * <p>Allows or denies outbound SMS messaging for the specified phone number.</p>
   */
  OutboundSMS?: boolean;
  /**
   * <p>Allows or denies inbound MMS messaging for the specified phone number.</p>
   */
  InboundMMS?: boolean;
  /**
   * <p>Allows or denies outbound MMS messaging for the specified phone number.</p>
   */
  OutboundMMS?: boolean;
}
export declare namespace PhoneNumberCapabilities {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PhoneNumberCapabilities) => any;
}
export declare enum PhoneNumberStatus {
  AcquireFailed = "AcquireFailed",
  AcquireInProgress = "AcquireInProgress",
  Assigned = "Assigned",
  DeleteFailed = "DeleteFailed",
  DeleteInProgress = "DeleteInProgress",
  ReleaseFailed = "ReleaseFailed",
  ReleaseInProgress = "ReleaseInProgress",
  Unassigned = "Unassigned",
}
export declare enum PhoneNumberType {
  Local = "Local",
  TollFree = "TollFree",
}
/**
 * <p>A phone number used for Amazon Chime Business Calling or an Amazon Chime Voice
 *             Connector.</p>
 */
export interface PhoneNumber {
  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId?: string;
  /**
   * <p>The phone number, in E.164 format.</p>
   */
  E164PhoneNumber?: string;
  /**
   * <p>The phone number country. Format: ISO 3166-1 alpha-2.</p>
   */
  Country?: string;
  /**
   * <p>The phone number type.</p>
   */
  Type?: PhoneNumberType | string;
  /**
   * <p>The phone number product type.</p>
   */
  ProductType?: PhoneNumberProductType | string;
  /**
   * <p>The phone number status.</p>
   */
  Status?: PhoneNumberStatus | string;
  /**
   * <p>The phone number capabilities.</p>
   */
  Capabilities?: PhoneNumberCapabilities;
  /**
   * <p>The phone number associations.</p>
   */
  Associations?: PhoneNumberAssociation[];
  /**
   * <p>The outbound calling name associated with the phone number.</p>
   */
  CallingName?: string;
  /**
   * <p>The outbound calling name status.</p>
   */
  CallingNameStatus?: CallingNameStatus | string;
  /**
   * <p>The phone number creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;
  /**
   * <p>The updated phone number timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
  /**
   * <p>The deleted phone number timestamp, in ISO 8601 format.</p>
   */
  DeletionTimestamp?: Date;
}
export declare namespace PhoneNumber {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PhoneNumber) => any;
}
export interface GetPhoneNumberResponse {
  /**
   * <p>The phone number details.</p>
   */
  PhoneNumber?: PhoneNumber;
}
export declare namespace GetPhoneNumberResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetPhoneNumberResponse) => any;
}
export interface GetPhoneNumberOrderRequest {
  /**
   * <p>The ID for the phone number order.</p>
   */
  PhoneNumberOrderId: string | undefined;
}
export declare namespace GetPhoneNumberOrderRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetPhoneNumberOrderRequest) => any;
}
export interface GetPhoneNumberOrderResponse {
  /**
   * <p>The phone number order details.</p>
   */
  PhoneNumberOrder?: PhoneNumberOrder;
}
export declare namespace GetPhoneNumberOrderResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetPhoneNumberOrderResponse) => any;
}
export interface GetPhoneNumberSettingsResponse {
  /**
   * <p>The default outbound calling name for the account.</p>
   */
  CallingName?: string;
  /**
   * <p>The updated outbound calling name timestamp, in ISO 8601 format.</p>
   */
  CallingNameUpdatedTimestamp?: Date;
}
export declare namespace GetPhoneNumberSettingsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetPhoneNumberSettingsResponse) => any;
}
export interface GetProxySessionRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
  /**
   * <p>The proxy session ID.</p>
   */
  ProxySessionId: string | undefined;
}
export declare namespace GetProxySessionRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetProxySessionRequest) => any;
}
export interface GetProxySessionResponse {
  /**
   * <p>The proxy session details.</p>
   */
  ProxySession?: ProxySession;
}
export declare namespace GetProxySessionResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetProxySessionResponse) => any;
}
export interface GetRetentionSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}
export declare namespace GetRetentionSettingsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetRetentionSettingsRequest) => any;
}
/**
 * <p>The retention settings that determine how long to retain chat-room messages for an Amazon Chime Enterprise account.</p>
 */
export interface RoomRetentionSettings {
  /**
   * <p>The number of days for which to retain chat-room messages.</p>
   */
  RetentionDays?: number;
}
export declare namespace RoomRetentionSettings {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RoomRetentionSettings) => any;
}
/**
 * <p>The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat-room messages and chat-conversation messages.</p>
 */
export interface RetentionSettings {
  /**
   * <p>The chat room retention settings.</p>
   */
  RoomRetentionSettings?: RoomRetentionSettings;
  /**
   * <p>The chat conversation retention settings.</p>
   */
  ConversationRetentionSettings?: ConversationRetentionSettings;
}
export declare namespace RetentionSettings {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RetentionSettings) => any;
}
export interface GetRetentionSettingsResponse {
  /**
   * <p>The retention settings.</p>
   */
  RetentionSettings?: RetentionSettings;
  /**
   * <p>The timestamp representing the time at which the specified items are permanently deleted, in ISO 8601 format.</p>
   */
  InitiateDeletionTimestamp?: Date;
}
export declare namespace GetRetentionSettingsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetRetentionSettingsResponse) => any;
}
export interface GetRoomRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;
}
export declare namespace GetRoomRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetRoomRequest) => any;
}
export interface GetRoomResponse {
  /**
   * <p>The room details.</p>
   */
  Room?: Room;
}
export declare namespace GetRoomResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetRoomResponse) => any;
}
export interface GetSipMediaApplicationRequest {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;
}
export declare namespace GetSipMediaApplicationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetSipMediaApplicationRequest) => any;
}
export interface GetSipMediaApplicationResponse {
  /**
   * <p>The SIP media application details.</p>
   */
  SipMediaApplication?: SipMediaApplication;
}
export declare namespace GetSipMediaApplicationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetSipMediaApplicationResponse) => any;
}
export interface GetSipMediaApplicationLoggingConfigurationRequest {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;
}
export declare namespace GetSipMediaApplicationLoggingConfigurationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetSipMediaApplicationLoggingConfigurationRequest) => any;
}
/**
 * <p>Logging configuration of the SIP media application.</p>
 */
export interface SipMediaApplicationLoggingConfiguration {
  /**
   * <p>Enables application message logs for the SIP media application.</p>
   */
  EnableSipMediaApplicationMessageLogs?: boolean;
}
export declare namespace SipMediaApplicationLoggingConfiguration {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: SipMediaApplicationLoggingConfiguration) => any;
}
export interface GetSipMediaApplicationLoggingConfigurationResponse {
  /**
   * <p>The actual logging configuration.</p>
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}
export declare namespace GetSipMediaApplicationLoggingConfigurationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetSipMediaApplicationLoggingConfigurationResponse) => any;
}
export interface GetSipRuleRequest {
  /**
   * <p>The SIP rule ID.</p>
   */
  SipRuleId: string | undefined;
}
export declare namespace GetSipRuleRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetSipRuleRequest) => any;
}
export interface GetSipRuleResponse {
  /**
   * <p>The SIP rule details.</p>
   */
  SipRule?: SipRule;
}
export declare namespace GetSipRuleResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetSipRuleResponse) => any;
}
export interface GetUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
}
export declare namespace GetUserRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetUserRequest) => any;
}
export interface GetUserResponse {
  /**
   * <p>The user details.</p>
   */
  User?: User;
}
export declare namespace GetUserResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetUserResponse) => any;
}
export interface GetUserSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
}
export declare namespace GetUserSettingsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetUserSettingsRequest) => any;
}
/**
 * <p>Settings that allow management of telephony permissions for an Amazon Chime user, such as
 *             inbound and outbound calling and text messaging.</p>
 */
export interface TelephonySettings {
  /**
   * <p>Allows or denies inbound calling.</p>
   */
  InboundCalling: boolean | undefined;
  /**
   * <p>Allows or denies outbound calling.</p>
   */
  OutboundCalling: boolean | undefined;
  /**
   * <p>Allows or denies SMS messaging.</p>
   */
  SMS: boolean | undefined;
}
export declare namespace TelephonySettings {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TelephonySettings) => any;
}
/**
 * <p>Settings associated with an Amazon Chime user, including inbound and outbound calling and text
 *             messaging.</p>
 */
export interface UserSettings {
  /**
   * <p>The telephony settings associated with the user.</p>
   */
  Telephony: TelephonySettings | undefined;
}
export declare namespace UserSettings {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UserSettings) => any;
}
export interface GetUserSettingsResponse {
  /**
   * <p>The user settings.</p>
   */
  UserSettings?: UserSettings;
}
export declare namespace GetUserSettingsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetUserSettingsResponse) => any;
}
export interface GetVoiceConnectorRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}
export declare namespace GetVoiceConnectorRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetVoiceConnectorRequest) => any;
}
export interface GetVoiceConnectorResponse {
  /**
   * <p>The Amazon Chime Voice Connector details.</p>
   */
  VoiceConnector?: VoiceConnector;
}
export declare namespace GetVoiceConnectorResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetVoiceConnectorResponse) => any;
}
export interface GetVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}
export declare namespace GetVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetVoiceConnectorEmergencyCallingConfigurationRequest) => any;
}
export interface GetVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * <p>The emergency calling configuration details.</p>
   */
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
}
export declare namespace GetVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetVoiceConnectorEmergencyCallingConfigurationResponse) => any;
}
export interface GetVoiceConnectorGroupRequest {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;
}
export declare namespace GetVoiceConnectorGroupRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetVoiceConnectorGroupRequest) => any;
}
export interface GetVoiceConnectorGroupResponse {
  /**
   * <p>The Amazon Chime Voice Connector group details.</p>
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}
export declare namespace GetVoiceConnectorGroupResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetVoiceConnectorGroupResponse) => any;
}
export interface GetVoiceConnectorLoggingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}
export declare namespace GetVoiceConnectorLoggingConfigurationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetVoiceConnectorLoggingConfigurationRequest) => any;
}
/**
 * <p>The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.</p>
 */
export interface LoggingConfiguration {
  /**
   * <p>When true, enables SIP message logs for sending to Amazon CloudWatch Logs.</p>
   */
  EnableSIPLogs?: boolean;
}
export declare namespace LoggingConfiguration {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: LoggingConfiguration) => any;
}
export interface GetVoiceConnectorLoggingConfigurationResponse {
  /**
   * <p>The logging configuration details.</p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}
export declare namespace GetVoiceConnectorLoggingConfigurationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetVoiceConnectorLoggingConfigurationResponse) => any;
}
export interface GetVoiceConnectorOriginationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}
export declare namespace GetVoiceConnectorOriginationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetVoiceConnectorOriginationRequest) => any;
}
export declare enum OriginationRouteProtocol {
  TCP = "TCP",
  UDP = "UDP",
}
/**
 * <p>Origination routes define call distribution properties for your SIP hosts to receive inbound
 *             calls using your Amazon Chime Voice Connector. Limit: Ten origination routes for each
 *             Amazon Chime Voice Connector.</p>
 */
export interface OriginationRoute {
  /**
   * <p>The FQDN or IP address to contact for origination traffic.</p>
   */
  Host?: string;
  /**
   * <p>The designated origination route port. Defaults to 5060.</p>
   */
  Port?: number;
  /**
   * <p>The protocol to use for the origination route. Encryption-enabled Amazon Chime Voice Connectors use TCP protocol by default.</p>
   */
  Protocol?: OriginationRouteProtocol | string;
  /**
   * <p>The priority associated with the host, with 1 being the highest priority. Higher priority
   *             hosts are attempted first.</p>
   */
  Priority?: number;
  /**
   * <p>The weight associated with the host. If hosts are equal in priority, calls are redistributed among
   *             them based on their relative weight.</p>
   */
  Weight?: number;
}
export declare namespace OriginationRoute {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: OriginationRoute) => any;
}
/**
 * <p>Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime
 *             Voice Connector.</p>
 */
export interface Origination {
  /**
   * <p>The call distribution properties defined for your SIP hosts. Valid range: Minimum value of 1.
   *             Maximum value of 20.</p>
   */
  Routes?: OriginationRoute[];
  /**
   * <p>When origination settings are disabled, inbound calls are not enabled for your Amazon Chime
   *             Voice Connector.</p>
   */
  Disabled?: boolean;
}
export declare namespace Origination {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Origination) => any;
}
export interface GetVoiceConnectorOriginationResponse {
  /**
   * <p>The origination setting details.</p>
   */
  Origination?: Origination;
}
export declare namespace GetVoiceConnectorOriginationResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetVoiceConnectorOriginationResponse) => any;
}
export interface GetVoiceConnectorProxyRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}
export declare namespace GetVoiceConnectorProxyRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetVoiceConnectorProxyRequest) => any;
}
/**
 * <p>The proxy configuration for an Amazon Chime Voice Connector.</p>
 */
export interface Proxy {
  /**
   * <p>The default number of minutes allowed for proxy sessions.</p>
   */
  DefaultSessionExpiryMinutes?: number;
  /**
   * <p>When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector.</p>
   */
  Disabled?: boolean;
  /**
   * <p>The phone number to route calls to after a proxy session expires.</p>
   */
  FallBackPhoneNumber?: string;
  /**
   * <p>The countries for proxy phone numbers to be selected from.</p>
   */
  PhoneNumberCountries?: string[];
}
export declare namespace Proxy {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Proxy) => any;
}
export interface GetVoiceConnectorProxyResponse {
  /**
   * <p>The proxy configuration details.</p>
   */
  Proxy?: Proxy;
}
export declare namespace GetVoiceConnectorProxyResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetVoiceConnectorProxyResponse) => any;
}
export interface GetVoiceConnectorStreamingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}
export declare namespace GetVoiceConnectorStreamingConfigurationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetVoiceConnectorStreamingConfigurationRequest) => any;
}
