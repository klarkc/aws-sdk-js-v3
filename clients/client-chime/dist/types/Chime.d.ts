import { ChimeClient } from "./ChimeClient";
import {
  AssociatePhoneNumberWithUserCommandInput,
  AssociatePhoneNumberWithUserCommandOutput,
} from "./commands/AssociatePhoneNumberWithUserCommand";
import {
  AssociatePhoneNumbersWithVoiceConnectorCommandInput,
  AssociatePhoneNumbersWithVoiceConnectorCommandOutput,
} from "./commands/AssociatePhoneNumbersWithVoiceConnectorCommand";
import {
  AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
  AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput,
} from "./commands/AssociatePhoneNumbersWithVoiceConnectorGroupCommand";
import {
  AssociateSigninDelegateGroupsWithAccountCommandInput,
  AssociateSigninDelegateGroupsWithAccountCommandOutput,
} from "./commands/AssociateSigninDelegateGroupsWithAccountCommand";
import {
  BatchCreateAttendeeCommandInput,
  BatchCreateAttendeeCommandOutput,
} from "./commands/BatchCreateAttendeeCommand";
import {
  BatchCreateChannelMembershipCommandInput,
  BatchCreateChannelMembershipCommandOutput,
} from "./commands/BatchCreateChannelMembershipCommand";
import {
  BatchCreateRoomMembershipCommandInput,
  BatchCreateRoomMembershipCommandOutput,
} from "./commands/BatchCreateRoomMembershipCommand";
import {
  BatchDeletePhoneNumberCommandInput,
  BatchDeletePhoneNumberCommandOutput,
} from "./commands/BatchDeletePhoneNumberCommand";
import { BatchSuspendUserCommandInput, BatchSuspendUserCommandOutput } from "./commands/BatchSuspendUserCommand";
import { BatchUnsuspendUserCommandInput, BatchUnsuspendUserCommandOutput } from "./commands/BatchUnsuspendUserCommand";
import {
  BatchUpdatePhoneNumberCommandInput,
  BatchUpdatePhoneNumberCommandOutput,
} from "./commands/BatchUpdatePhoneNumberCommand";
import { BatchUpdateUserCommandInput, BatchUpdateUserCommandOutput } from "./commands/BatchUpdateUserCommand";
import { CreateAccountCommandInput, CreateAccountCommandOutput } from "./commands/CreateAccountCommand";
import {
  CreateAppInstanceAdminCommandInput,
  CreateAppInstanceAdminCommandOutput,
} from "./commands/CreateAppInstanceAdminCommand";
import { CreateAppInstanceCommandInput, CreateAppInstanceCommandOutput } from "./commands/CreateAppInstanceCommand";
import {
  CreateAppInstanceUserCommandInput,
  CreateAppInstanceUserCommandOutput,
} from "./commands/CreateAppInstanceUserCommand";
import { CreateAttendeeCommandInput, CreateAttendeeCommandOutput } from "./commands/CreateAttendeeCommand";
import { CreateBotCommandInput, CreateBotCommandOutput } from "./commands/CreateBotCommand";
import { CreateChannelBanCommandInput, CreateChannelBanCommandOutput } from "./commands/CreateChannelBanCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand";
import {
  CreateChannelMembershipCommandInput,
  CreateChannelMembershipCommandOutput,
} from "./commands/CreateChannelMembershipCommand";
import {
  CreateChannelModeratorCommandInput,
  CreateChannelModeratorCommandOutput,
} from "./commands/CreateChannelModeratorCommand";
import { CreateMeetingCommandInput, CreateMeetingCommandOutput } from "./commands/CreateMeetingCommand";
import {
  CreateMeetingDialOutCommandInput,
  CreateMeetingDialOutCommandOutput,
} from "./commands/CreateMeetingDialOutCommand";
import {
  CreateMeetingWithAttendeesCommandInput,
  CreateMeetingWithAttendeesCommandOutput,
} from "./commands/CreateMeetingWithAttendeesCommand";
import {
  CreatePhoneNumberOrderCommandInput,
  CreatePhoneNumberOrderCommandOutput,
} from "./commands/CreatePhoneNumberOrderCommand";
import { CreateProxySessionCommandInput, CreateProxySessionCommandOutput } from "./commands/CreateProxySessionCommand";
import { CreateRoomCommandInput, CreateRoomCommandOutput } from "./commands/CreateRoomCommand";
import {
  CreateRoomMembershipCommandInput,
  CreateRoomMembershipCommandOutput,
} from "./commands/CreateRoomMembershipCommand";
import {
  CreateSipMediaApplicationCallCommandInput,
  CreateSipMediaApplicationCallCommandOutput,
} from "./commands/CreateSipMediaApplicationCallCommand";
import {
  CreateSipMediaApplicationCommandInput,
  CreateSipMediaApplicationCommandOutput,
} from "./commands/CreateSipMediaApplicationCommand";
import { CreateSipRuleCommandInput, CreateSipRuleCommandOutput } from "./commands/CreateSipRuleCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  CreateVoiceConnectorCommandInput,
  CreateVoiceConnectorCommandOutput,
} from "./commands/CreateVoiceConnectorCommand";
import {
  CreateVoiceConnectorGroupCommandInput,
  CreateVoiceConnectorGroupCommandOutput,
} from "./commands/CreateVoiceConnectorGroupCommand";
import { DeleteAccountCommandInput, DeleteAccountCommandOutput } from "./commands/DeleteAccountCommand";
import {
  DeleteAppInstanceAdminCommandInput,
  DeleteAppInstanceAdminCommandOutput,
} from "./commands/DeleteAppInstanceAdminCommand";
import { DeleteAppInstanceCommandInput, DeleteAppInstanceCommandOutput } from "./commands/DeleteAppInstanceCommand";
import {
  DeleteAppInstanceStreamingConfigurationsCommandInput,
  DeleteAppInstanceStreamingConfigurationsCommandOutput,
} from "./commands/DeleteAppInstanceStreamingConfigurationsCommand";
import {
  DeleteAppInstanceUserCommandInput,
  DeleteAppInstanceUserCommandOutput,
} from "./commands/DeleteAppInstanceUserCommand";
import { DeleteAttendeeCommandInput, DeleteAttendeeCommandOutput } from "./commands/DeleteAttendeeCommand";
import { DeleteChannelBanCommandInput, DeleteChannelBanCommandOutput } from "./commands/DeleteChannelBanCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "./commands/DeleteChannelCommand";
import {
  DeleteChannelMembershipCommandInput,
  DeleteChannelMembershipCommandOutput,
} from "./commands/DeleteChannelMembershipCommand";
import {
  DeleteChannelMessageCommandInput,
  DeleteChannelMessageCommandOutput,
} from "./commands/DeleteChannelMessageCommand";
import {
  DeleteChannelModeratorCommandInput,
  DeleteChannelModeratorCommandOutput,
} from "./commands/DeleteChannelModeratorCommand";
import {
  DeleteEventsConfigurationCommandInput,
  DeleteEventsConfigurationCommandOutput,
} from "./commands/DeleteEventsConfigurationCommand";
import { DeleteMeetingCommandInput, DeleteMeetingCommandOutput } from "./commands/DeleteMeetingCommand";
import { DeletePhoneNumberCommandInput, DeletePhoneNumberCommandOutput } from "./commands/DeletePhoneNumberCommand";
import { DeleteProxySessionCommandInput, DeleteProxySessionCommandOutput } from "./commands/DeleteProxySessionCommand";
import { DeleteRoomCommandInput, DeleteRoomCommandOutput } from "./commands/DeleteRoomCommand";
import {
  DeleteRoomMembershipCommandInput,
  DeleteRoomMembershipCommandOutput,
} from "./commands/DeleteRoomMembershipCommand";
import {
  DeleteSipMediaApplicationCommandInput,
  DeleteSipMediaApplicationCommandOutput,
} from "./commands/DeleteSipMediaApplicationCommand";
import { DeleteSipRuleCommandInput, DeleteSipRuleCommandOutput } from "./commands/DeleteSipRuleCommand";
import {
  DeleteVoiceConnectorCommandInput,
  DeleteVoiceConnectorCommandOutput,
} from "./commands/DeleteVoiceConnectorCommand";
import {
  DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
  DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput,
} from "./commands/DeleteVoiceConnectorEmergencyCallingConfigurationCommand";
import {
  DeleteVoiceConnectorGroupCommandInput,
  DeleteVoiceConnectorGroupCommandOutput,
} from "./commands/DeleteVoiceConnectorGroupCommand";
import {
  DeleteVoiceConnectorOriginationCommandInput,
  DeleteVoiceConnectorOriginationCommandOutput,
} from "./commands/DeleteVoiceConnectorOriginationCommand";
import {
  DeleteVoiceConnectorProxyCommandInput,
  DeleteVoiceConnectorProxyCommandOutput,
} from "./commands/DeleteVoiceConnectorProxyCommand";
import {
  DeleteVoiceConnectorStreamingConfigurationCommandInput,
  DeleteVoiceConnectorStreamingConfigurationCommandOutput,
} from "./commands/DeleteVoiceConnectorStreamingConfigurationCommand";
import {
  DeleteVoiceConnectorTerminationCommandInput,
  DeleteVoiceConnectorTerminationCommandOutput,
} from "./commands/DeleteVoiceConnectorTerminationCommand";
import {
  DeleteVoiceConnectorTerminationCredentialsCommandInput,
  DeleteVoiceConnectorTerminationCredentialsCommandOutput,
} from "./commands/DeleteVoiceConnectorTerminationCredentialsCommand";
import {
  DescribeAppInstanceAdminCommandInput,
  DescribeAppInstanceAdminCommandOutput,
} from "./commands/DescribeAppInstanceAdminCommand";
import {
  DescribeAppInstanceCommandInput,
  DescribeAppInstanceCommandOutput,
} from "./commands/DescribeAppInstanceCommand";
import {
  DescribeAppInstanceUserCommandInput,
  DescribeAppInstanceUserCommandOutput,
} from "./commands/DescribeAppInstanceUserCommand";
import { DescribeChannelBanCommandInput, DescribeChannelBanCommandOutput } from "./commands/DescribeChannelBanCommand";
import { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "./commands/DescribeChannelCommand";
import {
  DescribeChannelMembershipCommandInput,
  DescribeChannelMembershipCommandOutput,
} from "./commands/DescribeChannelMembershipCommand";
import {
  DescribeChannelMembershipForAppInstanceUserCommandInput,
  DescribeChannelMembershipForAppInstanceUserCommandOutput,
} from "./commands/DescribeChannelMembershipForAppInstanceUserCommand";
import {
  DescribeChannelModeratedByAppInstanceUserCommandInput,
  DescribeChannelModeratedByAppInstanceUserCommandOutput,
} from "./commands/DescribeChannelModeratedByAppInstanceUserCommand";
import {
  DescribeChannelModeratorCommandInput,
  DescribeChannelModeratorCommandOutput,
} from "./commands/DescribeChannelModeratorCommand";
import {
  DisassociatePhoneNumberFromUserCommandInput,
  DisassociatePhoneNumberFromUserCommandOutput,
} from "./commands/DisassociatePhoneNumberFromUserCommand";
import {
  DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
  DisassociatePhoneNumbersFromVoiceConnectorCommandOutput,
} from "./commands/DisassociatePhoneNumbersFromVoiceConnectorCommand";
import {
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput,
} from "./commands/DisassociatePhoneNumbersFromVoiceConnectorGroupCommand";
import {
  DisassociateSigninDelegateGroupsFromAccountCommandInput,
  DisassociateSigninDelegateGroupsFromAccountCommandOutput,
} from "./commands/DisassociateSigninDelegateGroupsFromAccountCommand";
import { GetAccountCommandInput, GetAccountCommandOutput } from "./commands/GetAccountCommand";
import { GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput } from "./commands/GetAccountSettingsCommand";
import {
  GetAppInstanceRetentionSettingsCommandInput,
  GetAppInstanceRetentionSettingsCommandOutput,
} from "./commands/GetAppInstanceRetentionSettingsCommand";
import {
  GetAppInstanceStreamingConfigurationsCommandInput,
  GetAppInstanceStreamingConfigurationsCommandOutput,
} from "./commands/GetAppInstanceStreamingConfigurationsCommand";
import { GetAttendeeCommandInput, GetAttendeeCommandOutput } from "./commands/GetAttendeeCommand";
import { GetBotCommandInput, GetBotCommandOutput } from "./commands/GetBotCommand";
import { GetChannelMessageCommandInput, GetChannelMessageCommandOutput } from "./commands/GetChannelMessageCommand";
import {
  GetEventsConfigurationCommandInput,
  GetEventsConfigurationCommandOutput,
} from "./commands/GetEventsConfigurationCommand";
import { GetGlobalSettingsCommandInput, GetGlobalSettingsCommandOutput } from "./commands/GetGlobalSettingsCommand";
import { GetMeetingCommandInput, GetMeetingCommandOutput } from "./commands/GetMeetingCommand";
import {
  GetMessagingSessionEndpointCommandInput,
  GetMessagingSessionEndpointCommandOutput,
} from "./commands/GetMessagingSessionEndpointCommand";
import { GetPhoneNumberCommandInput, GetPhoneNumberCommandOutput } from "./commands/GetPhoneNumberCommand";
import {
  GetPhoneNumberOrderCommandInput,
  GetPhoneNumberOrderCommandOutput,
} from "./commands/GetPhoneNumberOrderCommand";
import {
  GetPhoneNumberSettingsCommandInput,
  GetPhoneNumberSettingsCommandOutput,
} from "./commands/GetPhoneNumberSettingsCommand";
import { GetProxySessionCommandInput, GetProxySessionCommandOutput } from "./commands/GetProxySessionCommand";
import {
  GetRetentionSettingsCommandInput,
  GetRetentionSettingsCommandOutput,
} from "./commands/GetRetentionSettingsCommand";
import { GetRoomCommandInput, GetRoomCommandOutput } from "./commands/GetRoomCommand";
import {
  GetSipMediaApplicationCommandInput,
  GetSipMediaApplicationCommandOutput,
} from "./commands/GetSipMediaApplicationCommand";
import {
  GetSipMediaApplicationLoggingConfigurationCommandInput,
  GetSipMediaApplicationLoggingConfigurationCommandOutput,
} from "./commands/GetSipMediaApplicationLoggingConfigurationCommand";
import { GetSipRuleCommandInput, GetSipRuleCommandOutput } from "./commands/GetSipRuleCommand";
import { GetUserCommandInput, GetUserCommandOutput } from "./commands/GetUserCommand";
import { GetUserSettingsCommandInput, GetUserSettingsCommandOutput } from "./commands/GetUserSettingsCommand";
import { GetVoiceConnectorCommandInput, GetVoiceConnectorCommandOutput } from "./commands/GetVoiceConnectorCommand";
import {
  GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
  GetVoiceConnectorEmergencyCallingConfigurationCommandOutput,
} from "./commands/GetVoiceConnectorEmergencyCallingConfigurationCommand";
import {
  GetVoiceConnectorGroupCommandInput,
  GetVoiceConnectorGroupCommandOutput,
} from "./commands/GetVoiceConnectorGroupCommand";
import {
  GetVoiceConnectorLoggingConfigurationCommandInput,
  GetVoiceConnectorLoggingConfigurationCommandOutput,
} from "./commands/GetVoiceConnectorLoggingConfigurationCommand";
import {
  GetVoiceConnectorOriginationCommandInput,
  GetVoiceConnectorOriginationCommandOutput,
} from "./commands/GetVoiceConnectorOriginationCommand";
import {
  GetVoiceConnectorProxyCommandInput,
  GetVoiceConnectorProxyCommandOutput,
} from "./commands/GetVoiceConnectorProxyCommand";
import {
  GetVoiceConnectorStreamingConfigurationCommandInput,
  GetVoiceConnectorStreamingConfigurationCommandOutput,
} from "./commands/GetVoiceConnectorStreamingConfigurationCommand";
import {
  GetVoiceConnectorTerminationCommandInput,
  GetVoiceConnectorTerminationCommandOutput,
} from "./commands/GetVoiceConnectorTerminationCommand";
import {
  GetVoiceConnectorTerminationHealthCommandInput,
  GetVoiceConnectorTerminationHealthCommandOutput,
} from "./commands/GetVoiceConnectorTerminationHealthCommand";
import { InviteUsersCommandInput, InviteUsersCommandOutput } from "./commands/InviteUsersCommand";
import { ListAccountsCommandInput, ListAccountsCommandOutput } from "./commands/ListAccountsCommand";
import {
  ListAppInstanceAdminsCommandInput,
  ListAppInstanceAdminsCommandOutput,
} from "./commands/ListAppInstanceAdminsCommand";
import {
  ListAppInstanceUsersCommandInput,
  ListAppInstanceUsersCommandOutput,
} from "./commands/ListAppInstanceUsersCommand";
import { ListAppInstancesCommandInput, ListAppInstancesCommandOutput } from "./commands/ListAppInstancesCommand";
import { ListAttendeeTagsCommandInput, ListAttendeeTagsCommandOutput } from "./commands/ListAttendeeTagsCommand";
import { ListAttendeesCommandInput, ListAttendeesCommandOutput } from "./commands/ListAttendeesCommand";
import { ListBotsCommandInput, ListBotsCommandOutput } from "./commands/ListBotsCommand";
import { ListChannelBansCommandInput, ListChannelBansCommandOutput } from "./commands/ListChannelBansCommand";
import {
  ListChannelMembershipsCommandInput,
  ListChannelMembershipsCommandOutput,
} from "./commands/ListChannelMembershipsCommand";
import {
  ListChannelMembershipsForAppInstanceUserCommandInput,
  ListChannelMembershipsForAppInstanceUserCommandOutput,
} from "./commands/ListChannelMembershipsForAppInstanceUserCommand";
import {
  ListChannelMessagesCommandInput,
  ListChannelMessagesCommandOutput,
} from "./commands/ListChannelMessagesCommand";
import {
  ListChannelModeratorsCommandInput,
  ListChannelModeratorsCommandOutput,
} from "./commands/ListChannelModeratorsCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand";
import {
  ListChannelsModeratedByAppInstanceUserCommandInput,
  ListChannelsModeratedByAppInstanceUserCommandOutput,
} from "./commands/ListChannelsModeratedByAppInstanceUserCommand";
import { ListMeetingTagsCommandInput, ListMeetingTagsCommandOutput } from "./commands/ListMeetingTagsCommand";
import { ListMeetingsCommandInput, ListMeetingsCommandOutput } from "./commands/ListMeetingsCommand";
import {
  ListPhoneNumberOrdersCommandInput,
  ListPhoneNumberOrdersCommandOutput,
} from "./commands/ListPhoneNumberOrdersCommand";
import { ListPhoneNumbersCommandInput, ListPhoneNumbersCommandOutput } from "./commands/ListPhoneNumbersCommand";
import { ListProxySessionsCommandInput, ListProxySessionsCommandOutput } from "./commands/ListProxySessionsCommand";
import {
  ListRoomMembershipsCommandInput,
  ListRoomMembershipsCommandOutput,
} from "./commands/ListRoomMembershipsCommand";
import { ListRoomsCommandInput, ListRoomsCommandOutput } from "./commands/ListRoomsCommand";
import {
  ListSipMediaApplicationsCommandInput,
  ListSipMediaApplicationsCommandOutput,
} from "./commands/ListSipMediaApplicationsCommand";
import { ListSipRulesCommandInput, ListSipRulesCommandOutput } from "./commands/ListSipRulesCommand";
import {
  ListSupportedPhoneNumberCountriesCommandInput,
  ListSupportedPhoneNumberCountriesCommandOutput,
} from "./commands/ListSupportedPhoneNumberCountriesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import {
  ListVoiceConnectorGroupsCommandInput,
  ListVoiceConnectorGroupsCommandOutput,
} from "./commands/ListVoiceConnectorGroupsCommand";
import {
  ListVoiceConnectorTerminationCredentialsCommandInput,
  ListVoiceConnectorTerminationCredentialsCommandOutput,
} from "./commands/ListVoiceConnectorTerminationCredentialsCommand";
import {
  ListVoiceConnectorsCommandInput,
  ListVoiceConnectorsCommandOutput,
} from "./commands/ListVoiceConnectorsCommand";
import { LogoutUserCommandInput, LogoutUserCommandOutput } from "./commands/LogoutUserCommand";
import {
  PutAppInstanceRetentionSettingsCommandInput,
  PutAppInstanceRetentionSettingsCommandOutput,
} from "./commands/PutAppInstanceRetentionSettingsCommand";
import {
  PutAppInstanceStreamingConfigurationsCommandInput,
  PutAppInstanceStreamingConfigurationsCommandOutput,
} from "./commands/PutAppInstanceStreamingConfigurationsCommand";
import {
  PutEventsConfigurationCommandInput,
  PutEventsConfigurationCommandOutput,
} from "./commands/PutEventsConfigurationCommand";
import {
  PutRetentionSettingsCommandInput,
  PutRetentionSettingsCommandOutput,
} from "./commands/PutRetentionSettingsCommand";
import {
  PutSipMediaApplicationLoggingConfigurationCommandInput,
  PutSipMediaApplicationLoggingConfigurationCommandOutput,
} from "./commands/PutSipMediaApplicationLoggingConfigurationCommand";
import {
  PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
  PutVoiceConnectorEmergencyCallingConfigurationCommandOutput,
} from "./commands/PutVoiceConnectorEmergencyCallingConfigurationCommand";
import {
  PutVoiceConnectorLoggingConfigurationCommandInput,
  PutVoiceConnectorLoggingConfigurationCommandOutput,
} from "./commands/PutVoiceConnectorLoggingConfigurationCommand";
import {
  PutVoiceConnectorOriginationCommandInput,
  PutVoiceConnectorOriginationCommandOutput,
} from "./commands/PutVoiceConnectorOriginationCommand";
import {
  PutVoiceConnectorProxyCommandInput,
  PutVoiceConnectorProxyCommandOutput,
} from "./commands/PutVoiceConnectorProxyCommand";
import {
  PutVoiceConnectorStreamingConfigurationCommandInput,
  PutVoiceConnectorStreamingConfigurationCommandOutput,
} from "./commands/PutVoiceConnectorStreamingConfigurationCommand";
import {
  PutVoiceConnectorTerminationCommandInput,
  PutVoiceConnectorTerminationCommandOutput,
} from "./commands/PutVoiceConnectorTerminationCommand";
import {
  PutVoiceConnectorTerminationCredentialsCommandInput,
  PutVoiceConnectorTerminationCredentialsCommandOutput,
} from "./commands/PutVoiceConnectorTerminationCredentialsCommand";
import {
  RedactChannelMessageCommandInput,
  RedactChannelMessageCommandOutput,
} from "./commands/RedactChannelMessageCommand";
import {
  RedactConversationMessageCommandInput,
  RedactConversationMessageCommandOutput,
} from "./commands/RedactConversationMessageCommand";
import { RedactRoomMessageCommandInput, RedactRoomMessageCommandOutput } from "./commands/RedactRoomMessageCommand";
import {
  RegenerateSecurityTokenCommandInput,
  RegenerateSecurityTokenCommandOutput,
} from "./commands/RegenerateSecurityTokenCommand";
import { ResetPersonalPINCommandInput, ResetPersonalPINCommandOutput } from "./commands/ResetPersonalPINCommand";
import { RestorePhoneNumberCommandInput, RestorePhoneNumberCommandOutput } from "./commands/RestorePhoneNumberCommand";
import {
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput,
} from "./commands/SearchAvailablePhoneNumbersCommand";
import { SendChannelMessageCommandInput, SendChannelMessageCommandOutput } from "./commands/SendChannelMessageCommand";
import { TagAttendeeCommandInput, TagAttendeeCommandOutput } from "./commands/TagAttendeeCommand";
import { TagMeetingCommandInput, TagMeetingCommandOutput } from "./commands/TagMeetingCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagAttendeeCommandInput, UntagAttendeeCommandOutput } from "./commands/UntagAttendeeCommand";
import { UntagMeetingCommandInput, UntagMeetingCommandOutput } from "./commands/UntagMeetingCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAccountCommandInput, UpdateAccountCommandOutput } from "./commands/UpdateAccountCommand";
import {
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "./commands/UpdateAccountSettingsCommand";
import { UpdateAppInstanceCommandInput, UpdateAppInstanceCommandOutput } from "./commands/UpdateAppInstanceCommand";
import {
  UpdateAppInstanceUserCommandInput,
  UpdateAppInstanceUserCommandOutput,
} from "./commands/UpdateAppInstanceUserCommand";
import { UpdateBotCommandInput, UpdateBotCommandOutput } from "./commands/UpdateBotCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand";
import {
  UpdateChannelMessageCommandInput,
  UpdateChannelMessageCommandOutput,
} from "./commands/UpdateChannelMessageCommand";
import {
  UpdateChannelReadMarkerCommandInput,
  UpdateChannelReadMarkerCommandOutput,
} from "./commands/UpdateChannelReadMarkerCommand";
import {
  UpdateGlobalSettingsCommandInput,
  UpdateGlobalSettingsCommandOutput,
} from "./commands/UpdateGlobalSettingsCommand";
import { UpdatePhoneNumberCommandInput, UpdatePhoneNumberCommandOutput } from "./commands/UpdatePhoneNumberCommand";
import {
  UpdatePhoneNumberSettingsCommandInput,
  UpdatePhoneNumberSettingsCommandOutput,
} from "./commands/UpdatePhoneNumberSettingsCommand";
import { UpdateProxySessionCommandInput, UpdateProxySessionCommandOutput } from "./commands/UpdateProxySessionCommand";
import { UpdateRoomCommandInput, UpdateRoomCommandOutput } from "./commands/UpdateRoomCommand";
import {
  UpdateRoomMembershipCommandInput,
  UpdateRoomMembershipCommandOutput,
} from "./commands/UpdateRoomMembershipCommand";
import {
  UpdateSipMediaApplicationCommandInput,
  UpdateSipMediaApplicationCommandOutput,
} from "./commands/UpdateSipMediaApplicationCommand";
import { UpdateSipRuleCommandInput, UpdateSipRuleCommandOutput } from "./commands/UpdateSipRuleCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import { UpdateUserSettingsCommandInput, UpdateUserSettingsCommandOutput } from "./commands/UpdateUserSettingsCommand";
import {
  UpdateVoiceConnectorCommandInput,
  UpdateVoiceConnectorCommandOutput,
} from "./commands/UpdateVoiceConnectorCommand";
import {
  UpdateVoiceConnectorGroupCommandInput,
  UpdateVoiceConnectorGroupCommandOutput,
} from "./commands/UpdateVoiceConnectorGroupCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>The Amazon Chime API (application programming interface) is designed for developers to
 *             perform key tasks, such as creating and managing Amazon Chime accounts, users, and Voice
 *             Connectors. This guide provides detailed information about the Amazon Chime API,
 *             including operations, types, inputs and outputs, and error codes. It also includes some
 *             server-side API actions to use with the Amazon Chime SDK. For more information about the
 *             Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">
 *                 Using the Amazon Chime SDK
 *             </a> in the <i>Amazon Chime Developer Guide</i>.</p>
 *          <p>You can use an AWS SDK, the AWS Command Line Interface (AWS CLI), or the REST API to make API calls. We recommend using an AWS SDK or the
 *     AWS CLI. Each API operation includes links to information about using it with a language-specific AWS SDK or the AWS CLI.</p>
 *          <dl>
 *             <dt>Using an AWS SDK</dt>
 *             <dd>
 *                <p>
 * You don't need to write code to calculate a signature for request authentication. The SDK clients authenticate your requests by using access keys that you provide. For more information about AWS SDKs, see the
 * <a href="http://aws.amazon.com/developer/">AWS Developer Center</a>.
 * </p>
 *             </dd>
 *             <dt>Using the AWS CLI</dt>
 *             <dd>
 *                <p>Use your access keys with the AWS CLI to make API calls. For information about setting up the AWS CLI, see
 * <a href="https://docs.aws.amazon.com/cli/latest/userguide/installing.html">Installing the AWS Command Line Interface</a>
 * in the <i>AWS Command Line Interface User Guide</i>. For a list of available Amazon Chime commands, see the
 * <a href="https://docs.aws.amazon.com/cli/latest/reference/chime/index.html">Amazon Chime commands</a> in the
 *     <i>AWS CLI Command Reference</i>.
 * </p>
 *             </dd>
 *             <dt>Using REST APIs</dt>
 *             <dd>
 *                <p>If you use REST to make API calls, you must authenticate your request by providing a signature. Amazon Chime supports signature version 4. For more information, see
 * <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>
 * in the <i>Amazon Web Services General Reference</i>.</p>
 *
 *                <p>When making REST API calls, use the service name <code>chime</code> and REST endpoint <code>https://service.chime.aws.amazon.com</code>.</p>
 *             </dd>
 *          </dl>
 *
 *          <p>Administrative permissions are controlled using AWS Identity and Access Management (IAM). For more information, see
 * <a href="https://docs.aws.amazon.com/chime/latest/ag/security-iam.html">Identity and Access Management for Amazon Chime</a>
 * in the <i>Amazon Chime Administration Guide</i>.</p>
 */
export declare class Chime extends ChimeClient {
  /**
   * <p>Associates phone numbers with the specified Amazon Chime Voice Connector.</p>
   */
  associatePhoneNumbersWithVoiceConnector(
    args: AssociatePhoneNumbersWithVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePhoneNumbersWithVoiceConnectorCommandOutput>;
  associatePhoneNumbersWithVoiceConnector(
    args: AssociatePhoneNumbersWithVoiceConnectorCommandInput,
    cb: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorCommandOutput) => void
  ): void;
  associatePhoneNumbersWithVoiceConnector(
    args: AssociatePhoneNumbersWithVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorCommandOutput) => void
  ): void;
  /**
   * <p>Associates phone numbers with the specified Amazon Chime Voice Connector group.</p>
   */
  associatePhoneNumbersWithVoiceConnectorGroup(
    args: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput>;
  associatePhoneNumbersWithVoiceConnectorGroup(
    args: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput) => void
  ): void;
  associatePhoneNumbersWithVoiceConnectorGroup(
    args: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput) => void
  ): void;
  /**
   * <p>Associates a phone number with the specified Amazon Chime user.</p>
   */
  associatePhoneNumberWithUser(
    args: AssociatePhoneNumberWithUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePhoneNumberWithUserCommandOutput>;
  associatePhoneNumberWithUser(
    args: AssociatePhoneNumberWithUserCommandInput,
    cb: (err: any, data?: AssociatePhoneNumberWithUserCommandOutput) => void
  ): void;
  associatePhoneNumberWithUser(
    args: AssociatePhoneNumberWithUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociatePhoneNumberWithUserCommandOutput) => void
  ): void;
  /**
   * <p>Associates the specified sign-in delegate groups with the specified Amazon Chime account.</p>
   */
  associateSigninDelegateGroupsWithAccount(
    args: AssociateSigninDelegateGroupsWithAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSigninDelegateGroupsWithAccountCommandOutput>;
  associateSigninDelegateGroupsWithAccount(
    args: AssociateSigninDelegateGroupsWithAccountCommandInput,
    cb: (err: any, data?: AssociateSigninDelegateGroupsWithAccountCommandOutput) => void
  ): void;
  associateSigninDelegateGroupsWithAccount(
    args: AssociateSigninDelegateGroupsWithAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSigninDelegateGroupsWithAccountCommandOutput) => void
  ): void;
  /**
   * <p>
   * Creates up to 100 new attendees for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see
   * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   * in the
   * <i>Amazon Chime Developer Guide</i>.
   * </p>
   */
  batchCreateAttendee(
    args: BatchCreateAttendeeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateAttendeeCommandOutput>;
  batchCreateAttendee(
    args: BatchCreateAttendeeCommandInput,
    cb: (err: any, data?: BatchCreateAttendeeCommandOutput) => void
  ): void;
  batchCreateAttendee(
    args: BatchCreateAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateAttendeeCommandOutput) => void
  ): void;
  /**
   * <p>Adds a specified number of users to a channel. </p>
   */
  batchCreateChannelMembership(
    args: BatchCreateChannelMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateChannelMembershipCommandOutput>;
  batchCreateChannelMembership(
    args: BatchCreateChannelMembershipCommandInput,
    cb: (err: any, data?: BatchCreateChannelMembershipCommandOutput) => void
  ): void;
  batchCreateChannelMembership(
    args: BatchCreateChannelMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateChannelMembershipCommandOutput) => void
  ): void;
  /**
   * <p>Adds up to 50 members to a chat room in an Amazon Chime Enterprise account. Members can be users or bots. The member role designates whether the member is a chat room administrator or a general chat room member.</p>
   */
  batchCreateRoomMembership(
    args: BatchCreateRoomMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateRoomMembershipCommandOutput>;
  batchCreateRoomMembership(
    args: BatchCreateRoomMembershipCommandInput,
    cb: (err: any, data?: BatchCreateRoomMembershipCommandOutput) => void
  ): void;
  batchCreateRoomMembership(
    args: BatchCreateRoomMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateRoomMembershipCommandOutput) => void
  ): void;
  /**
   * <p>
   * Moves phone numbers into the
   * <b>Deletion queue</b>. Phone numbers must be disassociated from any users or Amazon Chime Voice Connectors before they can be deleted.
   * </p>
   *
   *          <p>
   * Phone numbers remain in the
   * <b>Deletion queue</b> for 7 days before they are deleted permanently.
   * </p>
   */
  batchDeletePhoneNumber(
    args: BatchDeletePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeletePhoneNumberCommandOutput>;
  batchDeletePhoneNumber(
    args: BatchDeletePhoneNumberCommandInput,
    cb: (err: any, data?: BatchDeletePhoneNumberCommandOutput) => void
  ): void;
  batchDeletePhoneNumber(
    args: BatchDeletePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeletePhoneNumberCommandOutput) => void
  ): void;
  /**
   * <p>Suspends up to 50 users from a <code>Team</code> or <code>EnterpriseLWA</code> Amazon Chime
   *             account. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your
   *                 Amazon Chime Accounts</a> in the <i>Amazon Chime Administration
   *                 Guide</i>.</p>
   *
   *          <p>Users suspended from a <code>Team</code> account are disassociated from the account,but they
   *             can continue to use Amazon Chime as free users. To remove the suspension from suspended
   *                 <code>Team</code> account users, invite them to the <code>Team</code> account again.
   *             You can use the <a>InviteUsers</a> action to do so.</p>
   *
   *          <p>Users suspended from an <code>EnterpriseLWA</code> account are immediately signed out of
   *             Amazon Chime and can no longer sign in. To remove the suspension from suspended
   *                 <code>EnterpriseLWA</code> account users, use the <a>BatchUnsuspendUser</a> action.</p>
   *
   *          <p>
   * To sign out users without suspending them, use the
   * <a>LogoutUser</a>
   * action.
   * </p>
   */
  batchSuspendUser(
    args: BatchSuspendUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchSuspendUserCommandOutput>;
  batchSuspendUser(
    args: BatchSuspendUserCommandInput,
    cb: (err: any, data?: BatchSuspendUserCommandOutput) => void
  ): void;
  batchSuspendUser(
    args: BatchSuspendUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchSuspendUserCommandOutput) => void
  ): void;
  /**
   * <p>Removes the suspension from up to 50 previously suspended users for the specified Amazon
   *             Chime <code>EnterpriseLWA</code> account. Only users on <code>EnterpriseLWA</code>
   *             accounts can be unsuspended using this action. For more information about different
   *             account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the
   *                 <i>Amazon Chime Administration Guide</i>.</p>
   *
   *          <p>
   * Previously suspended users who are unsuspended using this action are returned to
   * <code>Registered</code>
   * status. Users who are not previously suspended are ignored.
   * </p>
   */
  batchUnsuspendUser(
    args: BatchUnsuspendUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUnsuspendUserCommandOutput>;
  batchUnsuspendUser(
    args: BatchUnsuspendUserCommandInput,
    cb: (err: any, data?: BatchUnsuspendUserCommandOutput) => void
  ): void;
  batchUnsuspendUser(
    args: BatchUnsuspendUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUnsuspendUserCommandOutput) => void
  ): void;
  /**
   * <p>Updates phone number product types or calling names. You can update one attribute at a time for each
   *         <code>UpdatePhoneNumberRequestItem</code>. For example, you can update the product type or the calling name.</p>
   *
   *          <p>For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For
   *             numbers outside the
   *             US,
   *             you must use the Amazon Chime SIP Media Application Dial-In product type.</p>
   *
   *          <p>Updates to outbound calling names can take 72 hours to complete. Pending updates to outbound calling names must be complete before you
   *             can request another update.</p>
   */
  batchUpdatePhoneNumber(
    args: BatchUpdatePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdatePhoneNumberCommandOutput>;
  batchUpdatePhoneNumber(
    args: BatchUpdatePhoneNumberCommandInput,
    cb: (err: any, data?: BatchUpdatePhoneNumberCommandOutput) => void
  ): void;
  batchUpdatePhoneNumber(
    args: BatchUpdatePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdatePhoneNumberCommandOutput) => void
  ): void;
  /**
   * <p>
   * Updates user details within the
   * <a>UpdateUserRequestItem</a>
   * object for up to 20 users for the specified Amazon Chime account.
   * Currently, only <code>LicenseType</code>
   * updates are supported for this action.
   * </p>
   */
  batchUpdateUser(
    args: BatchUpdateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateUserCommandOutput>;
  batchUpdateUser(args: BatchUpdateUserCommandInput, cb: (err: any, data?: BatchUpdateUserCommandOutput) => void): void;
  batchUpdateUser(
    args: BatchUpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateUserCommandOutput) => void
  ): void;
  /**
   * <p>Creates an Amazon Chime account under the administrator's AWS account. Only <code>Team</code>
   *             account types are currently supported for this action. For more information about
   *             different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the
   *                 <i>Amazon Chime Administration Guide</i>.</p>
   */
  createAccount(args: CreateAccountCommandInput, options?: __HttpHandlerOptions): Promise<CreateAccountCommandOutput>;
  createAccount(args: CreateAccountCommandInput, cb: (err: any, data?: CreateAccountCommandOutput) => void): void;
  createAccount(
    args: CreateAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccountCommandOutput) => void
  ): void;
  /**
   * <p>Creates an Amazon Chime SDK messaging <code>AppInstance</code> under an AWS account. Only SDK messaging customers use this API.
   * <code>CreateAppInstance</code> supports idempotency behavior as described in the AWS API Standard.</p>
   */
  createAppInstance(
    args: CreateAppInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppInstanceCommandOutput>;
  createAppInstance(
    args: CreateAppInstanceCommandInput,
    cb: (err: any, data?: CreateAppInstanceCommandOutput) => void
  ): void;
  createAppInstance(
    args: CreateAppInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppInstanceCommandOutput) => void
  ): void;
  /**
   * <p>Promotes an <code>AppInstanceUser</code> to an <code>AppInstanceAdmin</code>. The promoted user can perform the following actions.
   * </p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ChannelModerator</code> actions across all channels in the <code>AppInstance</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DeleteChannelMessage</code> actions.</p>
   *             </li>
   *          </ul>
   *
   *          <p>Only an <code>AppInstanceUser</code> can be promoted to an <code>AppInstanceAdmin</code> role.</p>
   */
  createAppInstanceAdmin(
    args: CreateAppInstanceAdminCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppInstanceAdminCommandOutput>;
  createAppInstanceAdmin(
    args: CreateAppInstanceAdminCommandInput,
    cb: (err: any, data?: CreateAppInstanceAdminCommandOutput) => void
  ): void;
  createAppInstanceAdmin(
    args: CreateAppInstanceAdminCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppInstanceAdminCommandOutput) => void
  ): void;
  /**
   * <p>Creates a user under an Amazon Chime <code>AppInstance</code>. The request consists of a unique <code>appInstanceUserId</code> and
   * <code>Name</code> for that user.</p>
   */
  createAppInstanceUser(
    args: CreateAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppInstanceUserCommandOutput>;
  createAppInstanceUser(
    args: CreateAppInstanceUserCommandInput,
    cb: (err: any, data?: CreateAppInstanceUserCommandOutput) => void
  ): void;
  createAppInstanceUser(
    args: CreateAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppInstanceUserCommandOutput) => void
  ): void;
  /**
   * <p>
   * Creates a new attendee for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see
   * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   * in the
   * <i>Amazon Chime Developer Guide</i>.
   * </p>
   */
  createAttendee(
    args: CreateAttendeeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAttendeeCommandOutput>;
  createAttendee(args: CreateAttendeeCommandInput, cb: (err: any, data?: CreateAttendeeCommandOutput) => void): void;
  createAttendee(
    args: CreateAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAttendeeCommandOutput) => void
  ): void;
  /**
   * <p>Creates a bot for an Amazon Chime Enterprise account.</p>
   */
  createBot(args: CreateBotCommandInput, options?: __HttpHandlerOptions): Promise<CreateBotCommandOutput>;
  createBot(args: CreateBotCommandInput, cb: (err: any, data?: CreateBotCommandOutput) => void): void;
  createBot(
    args: CreateBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBotCommandOutput) => void
  ): void;
  /**
   * <p>Creates a channel to which you can add users and send messages.</p>
   *
   *          <p>
   *             <b>Restriction</b>: You can't change a channel's privacy.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  createChannel(args: CreateChannelCommandInput, options?: __HttpHandlerOptions): Promise<CreateChannelCommandOutput>;
  createChannel(args: CreateChannelCommandInput, cb: (err: any, data?: CreateChannelCommandOutput) => void): void;
  createChannel(
    args: CreateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;
  /**
   * <p>Permanently bans a member from a channel. Moderators can't add banned members to a channel.
   *             To undo a ban, you first have to <code>DeleteChannelBan</code>, and then
   *                 <code>CreateChannelMembership</code>. Bans are cleaned up when you delete users or
   *             channels.</p>
   *          <p>If you ban a user who is already part of a channel, that user is automatically kicked from the channel.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  createChannelBan(
    args: CreateChannelBanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelBanCommandOutput>;
  createChannelBan(
    args: CreateChannelBanCommandInput,
    cb: (err: any, data?: CreateChannelBanCommandOutput) => void
  ): void;
  createChannelBan(
    args: CreateChannelBanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelBanCommandOutput) => void
  ): void;
  /**
   * <p>Adds a user to a channel. The <code>InvitedBy</code> response field is derived from the
   *             request header. A channel member can:</p>
   *
   *          <ul>
   *             <li>
   *                <p>List messages</p>
   *             </li>
   *             <li>
   *                <p>Send messages</p>
   *             </li>
   *             <li>
   *                <p>Receive messages</p>
   *             </li>
   *             <li>
   *                <p>Edit their own messages</p>
   *             </li>
   *             <li>
   *                <p>Leave the channel</p>
   *             </li>
   *          </ul>
   *
   *          <p>Privacy settings impact this action as follows:</p>
   *
   *          <ul>
   *             <li>
   *                <p>Public Channels: You do not need to be a member to list messages, but you must be a member to send messages.</p>
   *             </li>
   *             <li>
   *                <p>Private Channels: You must be a member to list or send messages.</p>
   *             </li>
   *          </ul>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  createChannelMembership(
    args: CreateChannelMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelMembershipCommandOutput>;
  createChannelMembership(
    args: CreateChannelMembershipCommandInput,
    cb: (err: any, data?: CreateChannelMembershipCommandOutput) => void
  ): void;
  createChannelMembership(
    args: CreateChannelMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelMembershipCommandOutput) => void
  ): void;
  /**
   * <p>Creates a new <code>ChannelModerator</code>. A channel moderator can:</p>
   *
   *          <ul>
   *             <li>
   *                <p>Add and remove other members of the channel.</p>
   *             </li>
   *             <li>
   *                <p>Add and remove other moderators of the channel.</p>
   *             </li>
   *             <li>
   *                <p>Add and remove user bans for the channel.</p>
   *             </li>
   *             <li>
   *                <p>Redact messages in the channel.</p>
   *             </li>
   *             <li>
   *                <p>List messages in the channel.</p>
   *             </li>
   *          </ul>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  createChannelModerator(
    args: CreateChannelModeratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelModeratorCommandOutput>;
  createChannelModerator(
    args: CreateChannelModeratorCommandInput,
    cb: (err: any, data?: CreateChannelModeratorCommandOutput) => void
  ): void;
  createChannelModerator(
    args: CreateChannelModeratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelModeratorCommandOutput) => void
  ): void;
  /**
   * <p>
   * Creates a new Amazon Chime SDK meeting in the specified media Region with no initial attendees. For more information about specifying media Regions, see
   * <a href="https://docs.aws.amazon.com/chime/latest/dg/chime-sdk-meetings-regions.html">Amazon Chime SDK Media Regions</a>
   * in the
   * <i>Amazon Chime Developer Guide</i>
   * . For more information about the Amazon Chime SDK, see
   * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   * in the
   * <i>Amazon Chime Developer Guide</i>
   * .
   * </p>
   */
  createMeeting(args: CreateMeetingCommandInput, options?: __HttpHandlerOptions): Promise<CreateMeetingCommandOutput>;
  createMeeting(args: CreateMeetingCommandInput, cb: (err: any, data?: CreateMeetingCommandOutput) => void): void;
  createMeeting(
    args: CreateMeetingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMeetingCommandOutput) => void
  ): void;
  /**
   * <p>Uses the join token and call metadata in a meeting request (From number, To number, and so forth) to initiate an outbound call to a public
   *     switched telephone network (PSTN) and join them into a Chime meeting. Also ensures that the From number belongs to the customer.</p>
   *
   *          <p>To play welcome audio or implement an interactive voice response (IVR), use the
   * <code>CreateSipMediaApplicationCall</code> action with the corresponding SIP media application ID.</p>
   */
  createMeetingDialOut(
    args: CreateMeetingDialOutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMeetingDialOutCommandOutput>;
  createMeetingDialOut(
    args: CreateMeetingDialOutCommandInput,
    cb: (err: any, data?: CreateMeetingDialOutCommandOutput) => void
  ): void;
  createMeetingDialOut(
    args: CreateMeetingDialOutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMeetingDialOutCommandOutput) => void
  ): void;
  /**
   * <p>
   * Creates a new Amazon Chime SDK meeting in the specified media Region, with attendees. For more information about specifying media Regions, see
   * <a href="https://docs.aws.amazon.com/chime/latest/dg/chime-sdk-meetings-regions.html">Amazon Chime SDK Media Regions</a>
   * in the
   * <i>Amazon Chime Developer Guide</i>
   * . For more information about the Amazon Chime SDK, see
   * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   * in the
   * <i>Amazon Chime Developer Guide</i>
   * .
   * </p>
   */
  createMeetingWithAttendees(
    args: CreateMeetingWithAttendeesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMeetingWithAttendeesCommandOutput>;
  createMeetingWithAttendees(
    args: CreateMeetingWithAttendeesCommandInput,
    cb: (err: any, data?: CreateMeetingWithAttendeesCommandOutput) => void
  ): void;
  createMeetingWithAttendees(
    args: CreateMeetingWithAttendeesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMeetingWithAttendeesCommandOutput) => void
  ): void;
  /**
   * <p>Creates an order for phone numbers to be provisioned. For toll-free numbers, you cannot
   *             use the Amazon Chime Business Calling product type. For numbers outside the
   *             US,
   *             you must use the Amazon Chime SIP Media Application Dial-In product type.</p>
   */
  createPhoneNumberOrder(
    args: CreatePhoneNumberOrderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePhoneNumberOrderCommandOutput>;
  createPhoneNumberOrder(
    args: CreatePhoneNumberOrderCommandInput,
    cb: (err: any, data?: CreatePhoneNumberOrderCommandOutput) => void
  ): void;
  createPhoneNumberOrder(
    args: CreatePhoneNumberOrderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePhoneNumberOrderCommandOutput) => void
  ): void;
  /**
   * <p>Creates a proxy session on the specified Amazon Chime Voice Connector for the specified participant phone numbers.</p>
   */
  createProxySession(
    args: CreateProxySessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProxySessionCommandOutput>;
  createProxySession(
    args: CreateProxySessionCommandInput,
    cb: (err: any, data?: CreateProxySessionCommandOutput) => void
  ): void;
  createProxySession(
    args: CreateProxySessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProxySessionCommandOutput) => void
  ): void;
  /**
   * <p>Creates a chat room for the specified Amazon Chime Enterprise account.</p>
   */
  createRoom(args: CreateRoomCommandInput, options?: __HttpHandlerOptions): Promise<CreateRoomCommandOutput>;
  createRoom(args: CreateRoomCommandInput, cb: (err: any, data?: CreateRoomCommandOutput) => void): void;
  createRoom(
    args: CreateRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRoomCommandOutput) => void
  ): void;
  /**
   * <p>Adds a member to a chat room in an Amazon Chime Enterprise account. A member can be either a user or a bot. The member role designates whether the member is a chat room administrator or a general chat room member.</p>
   */
  createRoomMembership(
    args: CreateRoomMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRoomMembershipCommandOutput>;
  createRoomMembership(
    args: CreateRoomMembershipCommandInput,
    cb: (err: any, data?: CreateRoomMembershipCommandOutput) => void
  ): void;
  createRoomMembership(
    args: CreateRoomMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRoomMembershipCommandOutput) => void
  ): void;
  /**
   * <p>Creates a SIP media application.</p>
   */
  createSipMediaApplication(
    args: CreateSipMediaApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSipMediaApplicationCommandOutput>;
  createSipMediaApplication(
    args: CreateSipMediaApplicationCommandInput,
    cb: (err: any, data?: CreateSipMediaApplicationCommandOutput) => void
  ): void;
  createSipMediaApplication(
    args: CreateSipMediaApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSipMediaApplicationCommandOutput) => void
  ): void;
  /**
   * <p>Creates an outbound call to a phone number from the phone number specified in the request, and it invokes the endpoint of the specified
   * <code>sipMediaApplicationId</code>.</p>
   */
  createSipMediaApplicationCall(
    args: CreateSipMediaApplicationCallCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSipMediaApplicationCallCommandOutput>;
  createSipMediaApplicationCall(
    args: CreateSipMediaApplicationCallCommandInput,
    cb: (err: any, data?: CreateSipMediaApplicationCallCommandOutput) => void
  ): void;
  createSipMediaApplicationCall(
    args: CreateSipMediaApplicationCallCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSipMediaApplicationCallCommandOutput) => void
  ): void;
  /**
   * <p>Creates a SIP rule which can be used to run a SIP media application as a target for a specific trigger type.</p>
   */
  createSipRule(args: CreateSipRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreateSipRuleCommandOutput>;
  createSipRule(args: CreateSipRuleCommandInput, cb: (err: any, data?: CreateSipRuleCommandOutput) => void): void;
  createSipRule(
    args: CreateSipRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSipRuleCommandOutput) => void
  ): void;
  /**
   * <p>Creates a user under the specified Amazon Chime account.</p>
   */
  createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
  createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
  createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  /**
   * <p>Creates an Amazon Chime Voice Connector under the administrator's AWS account. You can choose to create an Amazon Chime Voice Connector in a specific AWS Region.</p>
   *
   *          <p>
   * Enabling
   * <a>CreateVoiceConnectorRequest$RequireEncryption</a>
   * configures your Amazon Chime Voice Connector to use TLS transport for SIP signaling and Secure RTP (SRTP) for media. Inbound calls use TLS transport, and unencrypted outbound calls are blocked.
   * </p>
   */
  createVoiceConnector(
    args: CreateVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVoiceConnectorCommandOutput>;
  createVoiceConnector(
    args: CreateVoiceConnectorCommandInput,
    cb: (err: any, data?: CreateVoiceConnectorCommandOutput) => void
  ): void;
  createVoiceConnector(
    args: CreateVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVoiceConnectorCommandOutput) => void
  ): void;
  /**
   * <p>Creates an Amazon Chime Voice Connector group under the administrator's AWS account. You can
   *             associate Amazon Chime Voice Connectors with the Amazon Chime Voice Connector group by
   *             including <code>VoiceConnectorItems</code> in the request.</p>
   *          <p>You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This
   *             creates a fault tolerant mechanism for fallback in case of availability events.</p>
   */
  createVoiceConnectorGroup(
    args: CreateVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVoiceConnectorGroupCommandOutput>;
  createVoiceConnectorGroup(
    args: CreateVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: CreateVoiceConnectorGroupCommandOutput) => void
  ): void;
  createVoiceConnectorGroup(
    args: CreateVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVoiceConnectorGroupCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the specified Amazon Chime account. You must suspend all users before deleting
   *                 <code>Team</code> account. You can use the <a>BatchSuspendUser</a> action
   *             to dodo.</p>
   *
   *          <p>For <code>EnterpriseLWA</code> and <code>EnterpriseAD</code> accounts, you must release the
   *             claimed domains for your Amazon Chime account before deletion. As soon as you release
   *             the domain, all users under that account are suspended.</p>
   *
   *          <p>Deleted accounts appear in your <code>Disabled</code> accounts list for 90 days. To restore
   *             deleted account from your <code>Disabled</code> accounts list, you must contact AWS
   *             Support.</p>
   *
   *          <p>After 90 days, deleted accounts are permanently removed from your
   * <code>Disabled</code> accounts list.</p>
   */
  deleteAccount(args: DeleteAccountCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAccountCommandOutput>;
  deleteAccount(args: DeleteAccountCommandInput, cb: (err: any, data?: DeleteAccountCommandOutput) => void): void;
  deleteAccount(
    args: DeleteAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountCommandOutput) => void
  ): void;
  /**
   * <p>Deletes an <code>AppInstance</code> and all associated data asynchronously.</p>
   */
  deleteAppInstance(
    args: DeleteAppInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppInstanceCommandOutput>;
  deleteAppInstance(
    args: DeleteAppInstanceCommandInput,
    cb: (err: any, data?: DeleteAppInstanceCommandOutput) => void
  ): void;
  deleteAppInstance(
    args: DeleteAppInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppInstanceCommandOutput) => void
  ): void;
  /**
   * <p>Demotes an <code>AppInstanceAdmin</code> to an <code>AppInstanceUser</code>. This action does not delete the user.</p>
   */
  deleteAppInstanceAdmin(
    args: DeleteAppInstanceAdminCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppInstanceAdminCommandOutput>;
  deleteAppInstanceAdmin(
    args: DeleteAppInstanceAdminCommandInput,
    cb: (err: any, data?: DeleteAppInstanceAdminCommandOutput) => void
  ): void;
  deleteAppInstanceAdmin(
    args: DeleteAppInstanceAdminCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppInstanceAdminCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the streaming configurations of an <code>AppInstance</code>.</p>
   */
  deleteAppInstanceStreamingConfigurations(
    args: DeleteAppInstanceStreamingConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppInstanceStreamingConfigurationsCommandOutput>;
  deleteAppInstanceStreamingConfigurations(
    args: DeleteAppInstanceStreamingConfigurationsCommandInput,
    cb: (err: any, data?: DeleteAppInstanceStreamingConfigurationsCommandOutput) => void
  ): void;
  deleteAppInstanceStreamingConfigurations(
    args: DeleteAppInstanceStreamingConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppInstanceStreamingConfigurationsCommandOutput) => void
  ): void;
  /**
   * <p>Deletes an <code>AppInstanceUser</code>.</p>
   */
  deleteAppInstanceUser(
    args: DeleteAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppInstanceUserCommandOutput>;
  deleteAppInstanceUser(
    args: DeleteAppInstanceUserCommandInput,
    cb: (err: any, data?: DeleteAppInstanceUserCommandOutput) => void
  ): void;
  deleteAppInstanceUser(
    args: DeleteAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppInstanceUserCommandOutput) => void
  ): void;
  /**
   * <p>Deletes an attendee from the specified Amazon Chime SDK meeting and deletes their
   * <code>JoinToken</code>. Attendees are automatically deleted when a Amazon Chime SDK meeting is deleted. For more information about the Amazon Chime SDK, see
   * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   * in the <i>Amazon Chime Developer Guide</i>.</p>
   */
  deleteAttendee(
    args: DeleteAttendeeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAttendeeCommandOutput>;
  deleteAttendee(args: DeleteAttendeeCommandInput, cb: (err: any, data?: DeleteAttendeeCommandOutput) => void): void;
  deleteAttendee(
    args: DeleteAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAttendeeCommandOutput) => void
  ): void;
  /**
   * <p>Immediately makes a channel and its memberships inaccessible and marks them for deletion. This is an irreversible process.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  deleteChannel(args: DeleteChannelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteChannelCommandOutput>;
  deleteChannel(args: DeleteChannelCommandInput, cb: (err: any, data?: DeleteChannelCommandOutput) => void): void;
  deleteChannel(
    args: DeleteChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;
  /**
   * <p>Removes a user from a channel's ban list.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  deleteChannelBan(
    args: DeleteChannelBanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelBanCommandOutput>;
  deleteChannelBan(
    args: DeleteChannelBanCommandInput,
    cb: (err: any, data?: DeleteChannelBanCommandOutput) => void
  ): void;
  deleteChannelBan(
    args: DeleteChannelBanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelBanCommandOutput) => void
  ): void;
  /**
   * <p>Removes a member from a channel.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  deleteChannelMembership(
    args: DeleteChannelMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelMembershipCommandOutput>;
  deleteChannelMembership(
    args: DeleteChannelMembershipCommandInput,
    cb: (err: any, data?: DeleteChannelMembershipCommandOutput) => void
  ): void;
  deleteChannelMembership(
    args: DeleteChannelMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelMembershipCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a channel message. Only admins can perform this action. Deletion makes messages
   *             inaccessible immediately. A background process deletes any revisions created by
   *                 <code>UpdateChannelMessage</code>.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  deleteChannelMessage(
    args: DeleteChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelMessageCommandOutput>;
  deleteChannelMessage(
    args: DeleteChannelMessageCommandInput,
    cb: (err: any, data?: DeleteChannelMessageCommandOutput) => void
  ): void;
  deleteChannelMessage(
    args: DeleteChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelMessageCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a channel moderator.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  deleteChannelModerator(
    args: DeleteChannelModeratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelModeratorCommandOutput>;
  deleteChannelModerator(
    args: DeleteChannelModeratorCommandInput,
    cb: (err: any, data?: DeleteChannelModeratorCommandOutput) => void
  ): void;
  deleteChannelModerator(
    args: DeleteChannelModeratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelModeratorCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the events configuration that allows a bot to receive outgoing events.</p>
   */
  deleteEventsConfiguration(
    args: DeleteEventsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventsConfigurationCommandOutput>;
  deleteEventsConfiguration(
    args: DeleteEventsConfigurationCommandInput,
    cb: (err: any, data?: DeleteEventsConfigurationCommandOutput) => void
  ): void;
  deleteEventsConfiguration(
    args: DeleteEventsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventsConfigurationCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the specified Amazon Chime SDK meeting. The operation deletes all attendees, disconnects all clients, and prevents new clients from
   *     joining the meeting. For more information about the Amazon Chime SDK, see
   *     <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the
   *     <i>Amazon Chime Developer Guide</i>.</p>
   */
  deleteMeeting(args: DeleteMeetingCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMeetingCommandOutput>;
  deleteMeeting(args: DeleteMeetingCommandInput, cb: (err: any, data?: DeleteMeetingCommandOutput) => void): void;
  deleteMeeting(
    args: DeleteMeetingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMeetingCommandOutput) => void
  ): void;
  /**
   * <p>Moves the specified phone number into the <b>Deletion
   *                 queue</b>. A phone number must be disassociated from any
   *             users or Amazon Chime Voice Connectors before it can be deleted.</p>
   *
   *          <p>Deleted phone numbers remain in the
   * <b>Deletion queue</b>
   * for 7 days before they are deleted permanently.</p>
   */
  deletePhoneNumber(
    args: DeletePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePhoneNumberCommandOutput>;
  deletePhoneNumber(
    args: DeletePhoneNumberCommandInput,
    cb: (err: any, data?: DeletePhoneNumberCommandOutput) => void
  ): void;
  deletePhoneNumber(
    args: DeletePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePhoneNumberCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the specified proxy session from the specified Amazon Chime Voice Connector.</p>
   */
  deleteProxySession(
    args: DeleteProxySessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProxySessionCommandOutput>;
  deleteProxySession(
    args: DeleteProxySessionCommandInput,
    cb: (err: any, data?: DeleteProxySessionCommandOutput) => void
  ): void;
  deleteProxySession(
    args: DeleteProxySessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProxySessionCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a chat room in an Amazon Chime Enterprise account.</p>
   */
  deleteRoom(args: DeleteRoomCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRoomCommandOutput>;
  deleteRoom(args: DeleteRoomCommandInput, cb: (err: any, data?: DeleteRoomCommandOutput) => void): void;
  deleteRoom(
    args: DeleteRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoomCommandOutput) => void
  ): void;
  /**
   * <p>Removes a member from a chat room in an Amazon Chime Enterprise account.</p>
   */
  deleteRoomMembership(
    args: DeleteRoomMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRoomMembershipCommandOutput>;
  deleteRoomMembership(
    args: DeleteRoomMembershipCommandInput,
    cb: (err: any, data?: DeleteRoomMembershipCommandOutput) => void
  ): void;
  deleteRoomMembership(
    args: DeleteRoomMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoomMembershipCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a SIP media application.</p>
   */
  deleteSipMediaApplication(
    args: DeleteSipMediaApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSipMediaApplicationCommandOutput>;
  deleteSipMediaApplication(
    args: DeleteSipMediaApplicationCommandInput,
    cb: (err: any, data?: DeleteSipMediaApplicationCommandOutput) => void
  ): void;
  deleteSipMediaApplication(
    args: DeleteSipMediaApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSipMediaApplicationCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a SIP rule. You must disable a SIP rule before you can delete it.</p>
   */
  deleteSipRule(args: DeleteSipRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSipRuleCommandOutput>;
  deleteSipRule(args: DeleteSipRuleCommandInput, cb: (err: any, data?: DeleteSipRuleCommandOutput) => void): void;
  deleteSipRule(
    args: DeleteSipRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSipRuleCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the specified Amazon Chime Voice Connector. Any phone numbers associated with the
   *             Amazon Chime Voice Connector must be disassociated from it before it can be
   *             deleted.</p>
   */
  deleteVoiceConnector(
    args: DeleteVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorCommandOutput>;
  deleteVoiceConnector(
    args: DeleteVoiceConnectorCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorCommandOutput) => void
  ): void;
  deleteVoiceConnector(
    args: DeleteVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the emergency calling configuration details from the specified Amazon Chime Voice Connector.</p>
   */
  deleteVoiceConnectorEmergencyCallingConfiguration(
    args: DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput>;
  deleteVoiceConnectorEmergencyCallingConfiguration(
    args: DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  deleteVoiceConnectorEmergencyCallingConfiguration(
    args: DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the specified Amazon Chime Voice Connector group. Any
   * <code>VoiceConnectorItems</code>
   * and phone numbers associated with the group must be removed before it can be deleted.</p>
   */
  deleteVoiceConnectorGroup(
    args: DeleteVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorGroupCommandOutput>;
  deleteVoiceConnectorGroup(
    args: DeleteVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorGroupCommandOutput) => void
  ): void;
  deleteVoiceConnectorGroup(
    args: DeleteVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorGroupCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the origination settings for the specified Amazon Chime Voice Connector.</p>
   *
   *          <note>
   *             <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to deleting the origination settings.</p>
   *          </note>
   */
  deleteVoiceConnectorOrigination(
    args: DeleteVoiceConnectorOriginationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorOriginationCommandOutput>;
  deleteVoiceConnectorOrigination(
    args: DeleteVoiceConnectorOriginationCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorOriginationCommandOutput) => void
  ): void;
  deleteVoiceConnectorOrigination(
    args: DeleteVoiceConnectorOriginationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorOriginationCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the proxy configuration from the specified Amazon Chime Voice Connector.</p>
   */
  deleteVoiceConnectorProxy(
    args: DeleteVoiceConnectorProxyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorProxyCommandOutput>;
  deleteVoiceConnectorProxy(
    args: DeleteVoiceConnectorProxyCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorProxyCommandOutput) => void
  ): void;
  deleteVoiceConnectorProxy(
    args: DeleteVoiceConnectorProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorProxyCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the streaming configuration for the specified Amazon Chime Voice Connector.</p>
   */
  deleteVoiceConnectorStreamingConfiguration(
    args: DeleteVoiceConnectorStreamingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorStreamingConfigurationCommandOutput>;
  deleteVoiceConnectorStreamingConfiguration(
    args: DeleteVoiceConnectorStreamingConfigurationCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  deleteVoiceConnectorStreamingConfiguration(
    args: DeleteVoiceConnectorStreamingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the termination settings for the specified Amazon Chime Voice Connector.</p>
   *
   *          <note>
   *             <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to deleting the termination settings.</p>
   *          </note>
   */
  deleteVoiceConnectorTermination(
    args: DeleteVoiceConnectorTerminationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorTerminationCommandOutput>;
  deleteVoiceConnectorTermination(
    args: DeleteVoiceConnectorTerminationCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorTerminationCommandOutput) => void
  ): void;
  deleteVoiceConnectorTermination(
    args: DeleteVoiceConnectorTerminationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorTerminationCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the specified SIP credentials used by your equipment to authenticate during call termination.</p>
   */
  deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorTerminationCredentialsCommandOutput>;
  deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  /**
   * <p>Returns the full details of an <code>AppInstance</code>.</p>
   */
  describeAppInstance(
    args: DescribeAppInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppInstanceCommandOutput>;
  describeAppInstance(
    args: DescribeAppInstanceCommandInput,
    cb: (err: any, data?: DescribeAppInstanceCommandOutput) => void
  ): void;
  describeAppInstance(
    args: DescribeAppInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppInstanceCommandOutput) => void
  ): void;
  /**
   * <p>Returns the full details of an <code>AppInstanceAdmin</code>.</p>
   */
  describeAppInstanceAdmin(
    args: DescribeAppInstanceAdminCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppInstanceAdminCommandOutput>;
  describeAppInstanceAdmin(
    args: DescribeAppInstanceAdminCommandInput,
    cb: (err: any, data?: DescribeAppInstanceAdminCommandOutput) => void
  ): void;
  describeAppInstanceAdmin(
    args: DescribeAppInstanceAdminCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppInstanceAdminCommandOutput) => void
  ): void;
  /**
   * <p>
   * Returns the full details of an
   * <code>AppInstanceUser</code>
   * .
   * </p>
   */
  describeAppInstanceUser(
    args: DescribeAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppInstanceUserCommandOutput>;
  describeAppInstanceUser(
    args: DescribeAppInstanceUserCommandInput,
    cb: (err: any, data?: DescribeAppInstanceUserCommandOutput) => void
  ): void;
  describeAppInstanceUser(
    args: DescribeAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppInstanceUserCommandOutput) => void
  ): void;
  /**
   * <p>Returns the full details of a channel in an Amazon Chime <code>AppInstance</code>.</p>
   *
   *          <note>
   *
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  describeChannel(
    args: DescribeChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelCommandOutput>;
  describeChannel(args: DescribeChannelCommandInput, cb: (err: any, data?: DescribeChannelCommandOutput) => void): void;
  describeChannel(
    args: DescribeChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;
  /**
   * <p>Returns the full details of a channel ban.</p>
   *
   *          <note>
   *
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  describeChannelBan(
    args: DescribeChannelBanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelBanCommandOutput>;
  describeChannelBan(
    args: DescribeChannelBanCommandInput,
    cb: (err: any, data?: DescribeChannelBanCommandOutput) => void
  ): void;
  describeChannelBan(
    args: DescribeChannelBanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelBanCommandOutput) => void
  ): void;
  /**
   * <p>Returns the full details of a user's channel membership.</p>
   *
   *          <note>
   *
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  describeChannelMembership(
    args: DescribeChannelMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelMembershipCommandOutput>;
  describeChannelMembership(
    args: DescribeChannelMembershipCommandInput,
    cb: (err: any, data?: DescribeChannelMembershipCommandOutput) => void
  ): void;
  describeChannelMembership(
    args: DescribeChannelMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelMembershipCommandOutput) => void
  ): void;
  /**
   * <p>
   * Returns the details of a channel based on the membership of the specified <code>AppInstanceUser</code>.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  describeChannelMembershipForAppInstanceUser(
    args: DescribeChannelMembershipForAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelMembershipForAppInstanceUserCommandOutput>;
  describeChannelMembershipForAppInstanceUser(
    args: DescribeChannelMembershipForAppInstanceUserCommandInput,
    cb: (err: any, data?: DescribeChannelMembershipForAppInstanceUserCommandOutput) => void
  ): void;
  describeChannelMembershipForAppInstanceUser(
    args: DescribeChannelMembershipForAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelMembershipForAppInstanceUserCommandOutput) => void
  ): void;
  /**
   * <p>Returns the full details of a channel moderated by the specified <code>AppInstanceUser</code>.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  describeChannelModeratedByAppInstanceUser(
    args: DescribeChannelModeratedByAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelModeratedByAppInstanceUserCommandOutput>;
  describeChannelModeratedByAppInstanceUser(
    args: DescribeChannelModeratedByAppInstanceUserCommandInput,
    cb: (err: any, data?: DescribeChannelModeratedByAppInstanceUserCommandOutput) => void
  ): void;
  describeChannelModeratedByAppInstanceUser(
    args: DescribeChannelModeratedByAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelModeratedByAppInstanceUserCommandOutput) => void
  ): void;
  /**
   * <p>Returns the full details of a single ChannelModerator.</p>
   *
   *          <note>
   *
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  describeChannelModerator(
    args: DescribeChannelModeratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelModeratorCommandOutput>;
  describeChannelModerator(
    args: DescribeChannelModeratorCommandInput,
    cb: (err: any, data?: DescribeChannelModeratorCommandOutput) => void
  ): void;
  describeChannelModerator(
    args: DescribeChannelModeratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelModeratorCommandOutput) => void
  ): void;
  /**
   * <p>Disassociates the primary provisioned phone number from the specified Amazon Chime
   *             user.</p>
   */
  disassociatePhoneNumberFromUser(
    args: DisassociatePhoneNumberFromUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociatePhoneNumberFromUserCommandOutput>;
  disassociatePhoneNumberFromUser(
    args: DisassociatePhoneNumberFromUserCommandInput,
    cb: (err: any, data?: DisassociatePhoneNumberFromUserCommandOutput) => void
  ): void;
  disassociatePhoneNumberFromUser(
    args: DisassociatePhoneNumberFromUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociatePhoneNumberFromUserCommandOutput) => void
  ): void;
  /**
   * <p>Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector.</p>
   */
  disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociatePhoneNumbersFromVoiceConnectorCommandOutput>;
  disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    cb: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorCommandOutput) => void
  ): void;
  disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorCommandOutput) => void
  ): void;
  /**
   * <p>Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector group.</p>
   */
  disassociatePhoneNumbersFromVoiceConnectorGroup(
    args: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput>;
  disassociatePhoneNumbersFromVoiceConnectorGroup(
    args: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput) => void
  ): void;
  disassociatePhoneNumbersFromVoiceConnectorGroup(
    args: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput) => void
  ): void;
  /**
   * <p>Disassociates the specified sign-in delegate groups from the specified Amazon Chime account.</p>
   */
  disassociateSigninDelegateGroupsFromAccount(
    args: DisassociateSigninDelegateGroupsFromAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSigninDelegateGroupsFromAccountCommandOutput>;
  disassociateSigninDelegateGroupsFromAccount(
    args: DisassociateSigninDelegateGroupsFromAccountCommandInput,
    cb: (err: any, data?: DisassociateSigninDelegateGroupsFromAccountCommandOutput) => void
  ): void;
  disassociateSigninDelegateGroupsFromAccount(
    args: DisassociateSigninDelegateGroupsFromAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateSigninDelegateGroupsFromAccountCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves details for the specified Amazon Chime account, such as account type and supported
   *             licenses.</p>
   */
  getAccount(args: GetAccountCommandInput, options?: __HttpHandlerOptions): Promise<GetAccountCommandOutput>;
  getAccount(args: GetAccountCommandInput, cb: (err: any, data?: GetAccountCommandOutput) => void): void;
  getAccount(
    args: GetAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves account settings for the specified Amazon Chime account ID, such as remote control
   *             and dialout settings. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies
   *                 Page</a> in the <i>Amazon Chime Administration Guide</i>.</p>
   */
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountSettingsCommandOutput>;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;
  /**
   * <p>Gets the retention settings for an <code>AppInstance</code>.</p>
   */
  getAppInstanceRetentionSettings(
    args: GetAppInstanceRetentionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAppInstanceRetentionSettingsCommandOutput>;
  getAppInstanceRetentionSettings(
    args: GetAppInstanceRetentionSettingsCommandInput,
    cb: (err: any, data?: GetAppInstanceRetentionSettingsCommandOutput) => void
  ): void;
  getAppInstanceRetentionSettings(
    args: GetAppInstanceRetentionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppInstanceRetentionSettingsCommandOutput) => void
  ): void;
  /**
   * <p>Gets the streaming settings for an <code>AppInstance</code>.</p>
   */
  getAppInstanceStreamingConfigurations(
    args: GetAppInstanceStreamingConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAppInstanceStreamingConfigurationsCommandOutput>;
  getAppInstanceStreamingConfigurations(
    args: GetAppInstanceStreamingConfigurationsCommandInput,
    cb: (err: any, data?: GetAppInstanceStreamingConfigurationsCommandOutput) => void
  ): void;
  getAppInstanceStreamingConfigurations(
    args: GetAppInstanceStreamingConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppInstanceStreamingConfigurationsCommandOutput) => void
  ): void;
  /**
   * <p>
   * Gets the Amazon Chime SDK attendee details for a specified meeting ID and attendee ID. For more information about the Amazon Chime SDK, see
   * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   * in the
   * <i>Amazon Chime Developer Guide</i>
   * .
   * </p>
   */
  getAttendee(args: GetAttendeeCommandInput, options?: __HttpHandlerOptions): Promise<GetAttendeeCommandOutput>;
  getAttendee(args: GetAttendeeCommandInput, cb: (err: any, data?: GetAttendeeCommandOutput) => void): void;
  getAttendee(
    args: GetAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAttendeeCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves details for the specified bot, such as bot email address, bot type, status, and display name.</p>
   */
  getBot(args: GetBotCommandInput, options?: __HttpHandlerOptions): Promise<GetBotCommandOutput>;
  getBot(args: GetBotCommandInput, cb: (err: any, data?: GetBotCommandOutput) => void): void;
  getBot(
    args: GetBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBotCommandOutput) => void
  ): void;
  /**
   * <p>Gets the full details of a channel message.</p>
   *
   *          <note>
   *             <p>The x-amz-chime-bearer request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the
   *         value in the header.</p>
   *          </note>
   */
  getChannelMessage(
    args: GetChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChannelMessageCommandOutput>;
  getChannelMessage(
    args: GetChannelMessageCommandInput,
    cb: (err: any, data?: GetChannelMessageCommandOutput) => void
  ): void;
  getChannelMessage(
    args: GetChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChannelMessageCommandOutput) => void
  ): void;
  /**
   * <p>Gets details for an events configuration that allows a bot to receive outgoing events, such as an HTTPS endpoint or Lambda function ARN.</p>
   */
  getEventsConfiguration(
    args: GetEventsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventsConfigurationCommandOutput>;
  getEventsConfiguration(
    args: GetEventsConfigurationCommandInput,
    cb: (err: any, data?: GetEventsConfigurationCommandOutput) => void
  ): void;
  getEventsConfiguration(
    args: GetEventsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventsConfigurationCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves global settings for the administrator's AWS account, such as Amazon Chime Business
   *             Calling and Amazon Chime Voice Connector settings.</p>
   */
  getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGlobalSettingsCommandOutput>;
  getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    cb: (err: any, data?: GetGlobalSettingsCommandOutput) => void
  ): void;
  getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGlobalSettingsCommandOutput) => void
  ): void;
  /**
   * <p>
   * Gets the Amazon Chime SDK meeting details for the specified meeting ID. For more information about the Amazon Chime SDK, see
   * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   * in the
   * <i>Amazon Chime Developer Guide</i>
   * .
   * </p>
   */
  getMeeting(args: GetMeetingCommandInput, options?: __HttpHandlerOptions): Promise<GetMeetingCommandOutput>;
  getMeeting(args: GetMeetingCommandInput, cb: (err: any, data?: GetMeetingCommandOutput) => void): void;
  getMeeting(
    args: GetMeetingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMeetingCommandOutput) => void
  ): void;
  /**
   * <p>The details of the endpoint for the messaging session.</p>
   */
  getMessagingSessionEndpoint(
    args: GetMessagingSessionEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMessagingSessionEndpointCommandOutput>;
  getMessagingSessionEndpoint(
    args: GetMessagingSessionEndpointCommandInput,
    cb: (err: any, data?: GetMessagingSessionEndpointCommandOutput) => void
  ): void;
  getMessagingSessionEndpoint(
    args: GetMessagingSessionEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMessagingSessionEndpointCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves details for the specified phone number ID, such as associations, capabilities, and product type.</p>
   */
  getPhoneNumber(
    args: GetPhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPhoneNumberCommandOutput>;
  getPhoneNumber(args: GetPhoneNumberCommandInput, cb: (err: any, data?: GetPhoneNumberCommandOutput) => void): void;
  getPhoneNumber(
    args: GetPhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPhoneNumberCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves details for the specified phone number order, such as the order creation timestamp, phone
   *             numbers in E.164 format, product type, and order status.</p>
   */
  getPhoneNumberOrder(
    args: GetPhoneNumberOrderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPhoneNumberOrderCommandOutput>;
  getPhoneNumberOrder(
    args: GetPhoneNumberOrderCommandInput,
    cb: (err: any, data?: GetPhoneNumberOrderCommandOutput) => void
  ): void;
  getPhoneNumberOrder(
    args: GetPhoneNumberOrderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPhoneNumberOrderCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves the phone number settings for the administrator's AWS account, such as the default outbound calling name.</p>
   */
  getPhoneNumberSettings(
    args: GetPhoneNumberSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPhoneNumberSettingsCommandOutput>;
  getPhoneNumberSettings(
    args: GetPhoneNumberSettingsCommandInput,
    cb: (err: any, data?: GetPhoneNumberSettingsCommandOutput) => void
  ): void;
  getPhoneNumberSettings(
    args: GetPhoneNumberSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPhoneNumberSettingsCommandOutput) => void
  ): void;
  /**
   * <p>Gets the specified proxy session details for the specified Amazon Chime Voice Connector.</p>
   */
  getProxySession(
    args: GetProxySessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProxySessionCommandOutput>;
  getProxySession(args: GetProxySessionCommandInput, cb: (err: any, data?: GetProxySessionCommandOutput) => void): void;
  getProxySession(
    args: GetProxySessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProxySessionCommandOutput) => void
  ): void;
  /**
   * <p>
   * Gets the retention settings for the specified Amazon Chime Enterprise account. For more information about retention settings, see
   * <a href="https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html">Managing Chat Retention Policies</a>
   * in the
   * <i>Amazon Chime Administration Guide</i>
   * .
   * </p>
   */
  getRetentionSettings(
    args: GetRetentionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRetentionSettingsCommandOutput>;
  getRetentionSettings(
    args: GetRetentionSettingsCommandInput,
    cb: (err: any, data?: GetRetentionSettingsCommandOutput) => void
  ): void;
  getRetentionSettings(
    args: GetRetentionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRetentionSettingsCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves room details, such as the room name, for a room in an Amazon Chime Enterprise account.</p>
   */
  getRoom(args: GetRoomCommandInput, options?: __HttpHandlerOptions): Promise<GetRoomCommandOutput>;
  getRoom(args: GetRoomCommandInput, cb: (err: any, data?: GetRoomCommandOutput) => void): void;
  getRoom(
    args: GetRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRoomCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves the information for a SIP media application, including name, AWS Region, and endpoints.</p>
   */
  getSipMediaApplication(
    args: GetSipMediaApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSipMediaApplicationCommandOutput>;
  getSipMediaApplication(
    args: GetSipMediaApplicationCommandInput,
    cb: (err: any, data?: GetSipMediaApplicationCommandOutput) => void
  ): void;
  getSipMediaApplication(
    args: GetSipMediaApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSipMediaApplicationCommandOutput) => void
  ): void;
  /**
   * <p>Returns the logging configuration for the specified SIP media application.</p>
   */
  getSipMediaApplicationLoggingConfiguration(
    args: GetSipMediaApplicationLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSipMediaApplicationLoggingConfigurationCommandOutput>;
  getSipMediaApplicationLoggingConfiguration(
    args: GetSipMediaApplicationLoggingConfigurationCommandInput,
    cb: (err: any, data?: GetSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): void;
  getSipMediaApplicationLoggingConfiguration(
    args: GetSipMediaApplicationLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves the details of a SIP rule, such as the rule ID, name, triggers, and target endpoints.</p>
   */
  getSipRule(args: GetSipRuleCommandInput, options?: __HttpHandlerOptions): Promise<GetSipRuleCommandOutput>;
  getSipRule(args: GetSipRuleCommandInput, cb: (err: any, data?: GetSipRuleCommandOutput) => void): void;
  getSipRule(
    args: GetSipRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSipRuleCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves details for the specified user ID, such as primary email address, license type,and personal meeting PIN.</p>
   *
   *          <p>
   * To retrieve user details with an email address instead of a user ID, use the
   * <a>ListUsers</a>
   * action, and then filter by email address.
   * </p>
   */
  getUser(args: GetUserCommandInput, options?: __HttpHandlerOptions): Promise<GetUserCommandOutput>;
  getUser(args: GetUserCommandInput, cb: (err: any, data?: GetUserCommandOutput) => void): void;
  getUser(
    args: GetUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves settings for the specified user ID, such as any associated phone number settings.</p>
   */
  getUserSettings(
    args: GetUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserSettingsCommandOutput>;
  getUserSettings(args: GetUserSettingsCommandInput, cb: (err: any, data?: GetUserSettingsCommandOutput) => void): void;
  getUserSettings(
    args: GetUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserSettingsCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves details for the specified Amazon Chime Voice Connector, such as timestamps,name, outbound host, and encryption requirements.</p>
   */
  getVoiceConnector(
    args: GetVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorCommandOutput>;
  getVoiceConnector(
    args: GetVoiceConnectorCommandInput,
    cb: (err: any, data?: GetVoiceConnectorCommandOutput) => void
  ): void;
  getVoiceConnector(
    args: GetVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorCommandOutput) => void
  ): void;
  /**
   * <p>Gets the emergency calling configuration details for the specified Amazon Chime Voice Connector.</p>
   */
  getVoiceConnectorEmergencyCallingConfiguration(
    args: GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorEmergencyCallingConfigurationCommandOutput>;
  getVoiceConnectorEmergencyCallingConfiguration(
    args: GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  getVoiceConnectorEmergencyCallingConfiguration(
    args: GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  /**
   * <p>
   * Retrieves details for the specified Amazon Chime Voice Connector group, such as timestamps,name, and associated
   * <code>VoiceConnectorItems</code>
   * .
   * </p>
   */
  getVoiceConnectorGroup(
    args: GetVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorGroupCommandOutput>;
  getVoiceConnectorGroup(
    args: GetVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: GetVoiceConnectorGroupCommandOutput) => void
  ): void;
  getVoiceConnectorGroup(
    args: GetVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorGroupCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves the logging configuration details for the specified Amazon Chime Voice Connector. Shows whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.</p>
   */
  getVoiceConnectorLoggingConfiguration(
    args: GetVoiceConnectorLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorLoggingConfigurationCommandOutput>;
  getVoiceConnectorLoggingConfiguration(
    args: GetVoiceConnectorLoggingConfigurationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): void;
  getVoiceConnectorLoggingConfiguration(
    args: GetVoiceConnectorLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves origination setting details for the specified Amazon Chime Voice Connector.</p>
   */
  getVoiceConnectorOrigination(
    args: GetVoiceConnectorOriginationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorOriginationCommandOutput>;
  getVoiceConnectorOrigination(
    args: GetVoiceConnectorOriginationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorOriginationCommandOutput) => void
  ): void;
  getVoiceConnectorOrigination(
    args: GetVoiceConnectorOriginationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorOriginationCommandOutput) => void
  ): void;
  /**
   * <p>Gets the proxy configuration details for the specified Amazon Chime Voice Connector.</p>
   */
  getVoiceConnectorProxy(
    args: GetVoiceConnectorProxyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorProxyCommandOutput>;
  getVoiceConnectorProxy(
    args: GetVoiceConnectorProxyCommandInput,
    cb: (err: any, data?: GetVoiceConnectorProxyCommandOutput) => void
  ): void;
  getVoiceConnectorProxy(
    args: GetVoiceConnectorProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorProxyCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves the streaming configuration details for the specified Amazon Chime Voice Connector.
   *             Shows whether media streaming is enabled for sending to Amazon Kinesis. It also shows
   *             the retention period, in hours, for the Amazon Kinesis data.</p>
   */
  getVoiceConnectorStreamingConfiguration(
    args: GetVoiceConnectorStreamingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorStreamingConfigurationCommandOutput>;
  getVoiceConnectorStreamingConfiguration(
    args: GetVoiceConnectorStreamingConfigurationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  getVoiceConnectorStreamingConfiguration(
    args: GetVoiceConnectorStreamingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves termination setting details for the specified Amazon Chime Voice Connector.</p>
   */
  getVoiceConnectorTermination(
    args: GetVoiceConnectorTerminationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorTerminationCommandOutput>;
  getVoiceConnectorTermination(
    args: GetVoiceConnectorTerminationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorTerminationCommandOutput) => void
  ): void;
  getVoiceConnectorTermination(
    args: GetVoiceConnectorTerminationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorTerminationCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves information about the last time a SIP <code>OPTIONS</code> ping was received from
   *             your SIP infrastructure for the specified Amazon Chime Voice Connector.</p>
   */
  getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorTerminationHealthCommandOutput>;
  getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthCommandInput,
    cb: (err: any, data?: GetVoiceConnectorTerminationHealthCommandOutput) => void
  ): void;
  getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorTerminationHealthCommandOutput) => void
  ): void;
  /**
   * <p>Sends email to a maximum of 50 users, inviting them to the specified Amazon Chime
   *                 <code>Team</code> account. Only <code>Team</code> account types are currently
   *             supported for this action.</p>
   */
  inviteUsers(args: InviteUsersCommandInput, options?: __HttpHandlerOptions): Promise<InviteUsersCommandOutput>;
  inviteUsers(args: InviteUsersCommandInput, cb: (err: any, data?: InviteUsersCommandOutput) => void): void;
  inviteUsers(
    args: InviteUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InviteUsersCommandOutput) => void
  ): void;
  /**
   * <p>Lists the Amazon Chime accounts under the administrator's AWS account. You can filter accounts
   *             by account name prefix. To find out which Amazon Chime account a user belongs to, you can
   *             filter by the user's email address, which returns one account result.</p>
   */
  listAccounts(args: ListAccountsCommandInput, options?: __HttpHandlerOptions): Promise<ListAccountsCommandOutput>;
  listAccounts(args: ListAccountsCommandInput, cb: (err: any, data?: ListAccountsCommandOutput) => void): void;
  listAccounts(
    args: ListAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountsCommandOutput) => void
  ): void;
  /**
   * <p>Returns a list of the administrators in the <code>AppInstance</code>.</p>
   */
  listAppInstanceAdmins(
    args: ListAppInstanceAdminsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppInstanceAdminsCommandOutput>;
  listAppInstanceAdmins(
    args: ListAppInstanceAdminsCommandInput,
    cb: (err: any, data?: ListAppInstanceAdminsCommandOutput) => void
  ): void;
  listAppInstanceAdmins(
    args: ListAppInstanceAdminsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppInstanceAdminsCommandOutput) => void
  ): void;
  /**
   * <p>Lists all Amazon Chime <code>AppInstance</code>s created under a single AWS account.</p>
   */
  listAppInstances(
    args: ListAppInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppInstancesCommandOutput>;
  listAppInstances(
    args: ListAppInstancesCommandInput,
    cb: (err: any, data?: ListAppInstancesCommandOutput) => void
  ): void;
  listAppInstances(
    args: ListAppInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppInstancesCommandOutput) => void
  ): void;
  /**
   * <p>
   * List all
   * <code>AppInstanceUsers</code>
   * created under a single <code>AppInstance</code>.
   * </p>
   */
  listAppInstanceUsers(
    args: ListAppInstanceUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppInstanceUsersCommandOutput>;
  listAppInstanceUsers(
    args: ListAppInstanceUsersCommandInput,
    cb: (err: any, data?: ListAppInstanceUsersCommandOutput) => void
  ): void;
  listAppInstanceUsers(
    args: ListAppInstanceUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppInstanceUsersCommandOutput) => void
  ): void;
  /**
   * <p>
   * Lists the attendees for the specified Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see
   * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   * in the
   * <i>Amazon Chime Developer Guide</i>
   * .
   * </p>
   */
  listAttendees(args: ListAttendeesCommandInput, options?: __HttpHandlerOptions): Promise<ListAttendeesCommandOutput>;
  listAttendees(args: ListAttendeesCommandInput, cb: (err: any, data?: ListAttendeesCommandOutput) => void): void;
  listAttendees(
    args: ListAttendeesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttendeesCommandOutput) => void
  ): void;
  /**
   * <p>Lists the tags applied to an Amazon Chime SDK attendee resource.</p>
   */
  listAttendeeTags(
    args: ListAttendeeTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttendeeTagsCommandOutput>;
  listAttendeeTags(
    args: ListAttendeeTagsCommandInput,
    cb: (err: any, data?: ListAttendeeTagsCommandOutput) => void
  ): void;
  listAttendeeTags(
    args: ListAttendeeTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttendeeTagsCommandOutput) => void
  ): void;
  /**
   * <p>Lists the bots associated with the administrator's Amazon Chime Enterprise account ID.</p>
   */
  listBots(args: ListBotsCommandInput, options?: __HttpHandlerOptions): Promise<ListBotsCommandOutput>;
  listBots(args: ListBotsCommandInput, cb: (err: any, data?: ListBotsCommandOutput) => void): void;
  listBots(
    args: ListBotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBotsCommandOutput) => void
  ): void;
  /**
   * <p>Lists all the users banned from a particular channel.</p>
   *
   *          <note>
   *
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  listChannelBans(
    args: ListChannelBansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelBansCommandOutput>;
  listChannelBans(args: ListChannelBansCommandInput, cb: (err: any, data?: ListChannelBansCommandOutput) => void): void;
  listChannelBans(
    args: ListChannelBansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelBansCommandOutput) => void
  ): void;
  /**
   * <p>Lists all channel memberships in a channel.</p>
   *
   *          <note>
   *
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  listChannelMemberships(
    args: ListChannelMembershipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelMembershipsCommandOutput>;
  listChannelMemberships(
    args: ListChannelMembershipsCommandInput,
    cb: (err: any, data?: ListChannelMembershipsCommandOutput) => void
  ): void;
  listChannelMemberships(
    args: ListChannelMembershipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelMembershipsCommandOutput) => void
  ): void;
  /**
   * <p> Lists all channels that a particular <code>AppInstanceUser</code> is a part of. Only an
   *                 <code>AppInstanceAdmin</code> can call the API with a user ARN that is not their
   *             own. </p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  listChannelMembershipsForAppInstanceUser(
    args: ListChannelMembershipsForAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput>;
  listChannelMembershipsForAppInstanceUser(
    args: ListChannelMembershipsForAppInstanceUserCommandInput,
    cb: (err: any, data?: ListChannelMembershipsForAppInstanceUserCommandOutput) => void
  ): void;
  listChannelMembershipsForAppInstanceUser(
    args: ListChannelMembershipsForAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelMembershipsForAppInstanceUserCommandOutput) => void
  ): void;
  /**
   * <p>List all the messages in a channel. Returns a paginated list of <code>ChannelMessages</code>.
   *             By default, sorted by creation timestamp in descending
   *             order.</p>
   *
   *          <note>
   *             <p>Redacted messages appear in the results as empty, since they are only redacted, not deleted.
   *                 Deleted messages do not appear in the results. This action always returns the latest
   *                 version of an edited message.</p>
   *             <p>Also, the x-amz-chime-bearer request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the
   *         value in the header.</p>
   *          </note>
   */
  listChannelMessages(
    args: ListChannelMessagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelMessagesCommandOutput>;
  listChannelMessages(
    args: ListChannelMessagesCommandInput,
    cb: (err: any, data?: ListChannelMessagesCommandOutput) => void
  ): void;
  listChannelMessages(
    args: ListChannelMessagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelMessagesCommandOutput) => void
  ): void;
  /**
   * <p>Lists all the moderators for a channel.</p>
   *
   *          <note>
   *
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  listChannelModerators(
    args: ListChannelModeratorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelModeratorsCommandOutput>;
  listChannelModerators(
    args: ListChannelModeratorsCommandInput,
    cb: (err: any, data?: ListChannelModeratorsCommandOutput) => void
  ): void;
  listChannelModerators(
    args: ListChannelModeratorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelModeratorsCommandOutput) => void
  ): void;
  /**
   * <p>Lists all Channels created under a single Chime App as a paginated list. You can specify filters to narrow results.</p>
   *
   *          <p class="title">
   *             <b>Functionality & restrictions</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>Use privacy = <code>PUBLIC</code> to retrieve all public channels in the account.</p>
   *             </li>
   *             <li>
   *                <p>Only an <code>AppInstanceAdmin</code> can set privacy = <code>PRIVATE</code> to list the
   *                     private channels in an account.</p>
   *             </li>
   *          </ul>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  listChannels(args: ListChannelsCommandInput, options?: __HttpHandlerOptions): Promise<ListChannelsCommandOutput>;
  listChannels(args: ListChannelsCommandInput, cb: (err: any, data?: ListChannelsCommandOutput) => void): void;
  listChannels(
    args: ListChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;
  /**
   * <p>A list of the channels moderated by an <code>AppInstanceUser</code>.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  listChannelsModeratedByAppInstanceUser(
    args: ListChannelsModeratedByAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelsModeratedByAppInstanceUserCommandOutput>;
  listChannelsModeratedByAppInstanceUser(
    args: ListChannelsModeratedByAppInstanceUserCommandInput,
    cb: (err: any, data?: ListChannelsModeratedByAppInstanceUserCommandOutput) => void
  ): void;
  listChannelsModeratedByAppInstanceUser(
    args: ListChannelsModeratedByAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelsModeratedByAppInstanceUserCommandOutput) => void
  ): void;
  /**
   * <p>
   * Lists up to 100 active Amazon Chime SDK meetings. For more information about the Amazon Chime SDK, see
   * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
   * in the
   * <i>Amazon Chime Developer Guide</i>
   * .
   * </p>
   */
  listMeetings(args: ListMeetingsCommandInput, options?: __HttpHandlerOptions): Promise<ListMeetingsCommandOutput>;
  listMeetings(args: ListMeetingsCommandInput, cb: (err: any, data?: ListMeetingsCommandOutput) => void): void;
  listMeetings(
    args: ListMeetingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMeetingsCommandOutput) => void
  ): void;
  /**
   * <p>Lists the tags applied to an Amazon Chime SDK meeting resource.</p>
   */
  listMeetingTags(
    args: ListMeetingTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMeetingTagsCommandOutput>;
  listMeetingTags(args: ListMeetingTagsCommandInput, cb: (err: any, data?: ListMeetingTagsCommandOutput) => void): void;
  listMeetingTags(
    args: ListMeetingTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMeetingTagsCommandOutput) => void
  ): void;
  /**
   * <p>Lists the phone number orders for the administrator's Amazon Chime account.</p>
   */
  listPhoneNumberOrders(
    args: ListPhoneNumberOrdersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPhoneNumberOrdersCommandOutput>;
  listPhoneNumberOrders(
    args: ListPhoneNumberOrdersCommandInput,
    cb: (err: any, data?: ListPhoneNumberOrdersCommandOutput) => void
  ): void;
  listPhoneNumberOrders(
    args: ListPhoneNumberOrdersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPhoneNumberOrdersCommandOutput) => void
  ): void;
  /**
   * <p>Lists the phone numbers for the specified Amazon Chime account, Amazon Chime user, Amazon Chime Voice Connector, or Amazon Chime Voice Connector group.</p>
   */
  listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPhoneNumbersCommandOutput>;
  listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    cb: (err: any, data?: ListPhoneNumbersCommandOutput) => void
  ): void;
  listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPhoneNumbersCommandOutput) => void
  ): void;
  /**
   * <p>Lists the proxy sessions for the specified Amazon Chime Voice Connector.</p>
   */
  listProxySessions(
    args: ListProxySessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProxySessionsCommandOutput>;
  listProxySessions(
    args: ListProxySessionsCommandInput,
    cb: (err: any, data?: ListProxySessionsCommandOutput) => void
  ): void;
  listProxySessions(
    args: ListProxySessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProxySessionsCommandOutput) => void
  ): void;
  /**
   * <p>Lists the membership details for the specified room in an Amazon Chime Enterprise account,
   *             such as the members' IDs, email addresses, and names.</p>
   */
  listRoomMemberships(
    args: ListRoomMembershipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRoomMembershipsCommandOutput>;
  listRoomMemberships(
    args: ListRoomMembershipsCommandInput,
    cb: (err: any, data?: ListRoomMembershipsCommandOutput) => void
  ): void;
  listRoomMemberships(
    args: ListRoomMembershipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoomMembershipsCommandOutput) => void
  ): void;
  /**
   * <p>Lists the room details for the specified Amazon Chime Enterprise account. Optionally, filter the results by a member ID (user ID or bot ID) to see a list of rooms that the member belongs to.</p>
   */
  listRooms(args: ListRoomsCommandInput, options?: __HttpHandlerOptions): Promise<ListRoomsCommandOutput>;
  listRooms(args: ListRoomsCommandInput, cb: (err: any, data?: ListRoomsCommandOutput) => void): void;
  listRooms(
    args: ListRoomsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoomsCommandOutput) => void
  ): void;
  /**
   * <p>Lists the SIP media applications under the administrator's AWS account.</p>
   */
  listSipMediaApplications(
    args: ListSipMediaApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSipMediaApplicationsCommandOutput>;
  listSipMediaApplications(
    args: ListSipMediaApplicationsCommandInput,
    cb: (err: any, data?: ListSipMediaApplicationsCommandOutput) => void
  ): void;
  listSipMediaApplications(
    args: ListSipMediaApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSipMediaApplicationsCommandOutput) => void
  ): void;
  /**
   * <p>Lists the SIP rules under the administrator's AWS account.</p>
   */
  listSipRules(args: ListSipRulesCommandInput, options?: __HttpHandlerOptions): Promise<ListSipRulesCommandOutput>;
  listSipRules(args: ListSipRulesCommandInput, cb: (err: any, data?: ListSipRulesCommandOutput) => void): void;
  listSipRules(
    args: ListSipRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSipRulesCommandOutput) => void
  ): void;
  /**
   * <p>Lists supported phone number countries.</p>
   */
  listSupportedPhoneNumberCountries(
    args: ListSupportedPhoneNumberCountriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSupportedPhoneNumberCountriesCommandOutput>;
  listSupportedPhoneNumberCountries(
    args: ListSupportedPhoneNumberCountriesCommandInput,
    cb: (err: any, data?: ListSupportedPhoneNumberCountriesCommandOutput) => void
  ): void;
  listSupportedPhoneNumberCountries(
    args: ListSupportedPhoneNumberCountriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSupportedPhoneNumberCountriesCommandOutput) => void
  ): void;
  /**
   * <p>Lists the tags applied to an Amazon Chime SDK meeting resource.</p>
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  /**
   * <p>Lists the users that belong to the specified Amazon Chime account. You can specify an email
   *             address to list only the user that the email address belongs to.</p>
   */
  listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
  listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
  listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  /**
   * <p>Lists the Amazon Chime Voice Connector groups for the administrator's AWS account.</p>
   */
  listVoiceConnectorGroups(
    args: ListVoiceConnectorGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVoiceConnectorGroupsCommandOutput>;
  listVoiceConnectorGroups(
    args: ListVoiceConnectorGroupsCommandInput,
    cb: (err: any, data?: ListVoiceConnectorGroupsCommandOutput) => void
  ): void;
  listVoiceConnectorGroups(
    args: ListVoiceConnectorGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVoiceConnectorGroupsCommandOutput) => void
  ): void;
  /**
   * <p>Lists the Amazon Chime Voice Connectors for the administrator's AWS account.</p>
   */
  listVoiceConnectors(
    args: ListVoiceConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVoiceConnectorsCommandOutput>;
  listVoiceConnectors(
    args: ListVoiceConnectorsCommandInput,
    cb: (err: any, data?: ListVoiceConnectorsCommandOutput) => void
  ): void;
  listVoiceConnectors(
    args: ListVoiceConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVoiceConnectorsCommandOutput) => void
  ): void;
  /**
   * <p>Lists the SIP credentials for the specified Amazon Chime Voice Connector.</p>
   */
  listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVoiceConnectorTerminationCredentialsCommandOutput>;
  listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsCommandInput,
    cb: (err: any, data?: ListVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  /**
   * <p>Logs out the specified user from all of the devices they are currently logged into.</p>
   */
  logoutUser(args: LogoutUserCommandInput, options?: __HttpHandlerOptions): Promise<LogoutUserCommandOutput>;
  logoutUser(args: LogoutUserCommandInput, cb: (err: any, data?: LogoutUserCommandOutput) => void): void;
  logoutUser(
    args: LogoutUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LogoutUserCommandOutput) => void
  ): void;
  /**
   * <p>Sets the amount of time in days that a given <code>AppInstance</code> retains data.</p>
   */
  putAppInstanceRetentionSettings(
    args: PutAppInstanceRetentionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAppInstanceRetentionSettingsCommandOutput>;
  putAppInstanceRetentionSettings(
    args: PutAppInstanceRetentionSettingsCommandInput,
    cb: (err: any, data?: PutAppInstanceRetentionSettingsCommandOutput) => void
  ): void;
  putAppInstanceRetentionSettings(
    args: PutAppInstanceRetentionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAppInstanceRetentionSettingsCommandOutput) => void
  ): void;
  /**
   * <p>The data streaming configurations of an <code>AppInstance</code>.</p>
   */
  putAppInstanceStreamingConfigurations(
    args: PutAppInstanceStreamingConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAppInstanceStreamingConfigurationsCommandOutput>;
  putAppInstanceStreamingConfigurations(
    args: PutAppInstanceStreamingConfigurationsCommandInput,
    cb: (err: any, data?: PutAppInstanceStreamingConfigurationsCommandOutput) => void
  ): void;
  putAppInstanceStreamingConfigurations(
    args: PutAppInstanceStreamingConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAppInstanceStreamingConfigurationsCommandOutput) => void
  ): void;
  /**
   * <p>Creates an events configuration that allows a bot to receive outgoing events sent by Amazon
   *             Chime. Choose either an HTTPS endpoint or a Lambda function ARN. For more information,
   *             see <a>Bot</a>.</p>
   */
  putEventsConfiguration(
    args: PutEventsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEventsConfigurationCommandOutput>;
  putEventsConfiguration(
    args: PutEventsConfigurationCommandInput,
    cb: (err: any, data?: PutEventsConfigurationCommandOutput) => void
  ): void;
  putEventsConfiguration(
    args: PutEventsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEventsConfigurationCommandOutput) => void
  ): void;
  /**
   * <p>
   * Puts retention settings for the specified Amazon Chime Enterprise account. We recommend using AWS CloudTrail to monitor usage of this API for your account. For more information, see
   * <a href="https://docs.aws.amazon.com/chime/latest/ag/cloudtrail.html">Logging Amazon Chime API Calls with AWS CloudTrail</a>
   * in the
   * <i>Amazon Chime Administration Guide</i>
   * .
   * </p>
   *
   *          <p>
   * To turn off existing retention settings, remove the number of days from the corresponding
   * <b>RetentionDays</b>
   * field in the
   * <b>RetentionSettings</b>
   * object. For more information about retention settings, see
   * <a href="https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html">Managing Chat Retention Policies</a>
   * in the
   * <i>Amazon Chime Administration Guide</i>
   * .
   * </p>
   */
  putRetentionSettings(
    args: PutRetentionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRetentionSettingsCommandOutput>;
  putRetentionSettings(
    args: PutRetentionSettingsCommandInput,
    cb: (err: any, data?: PutRetentionSettingsCommandOutput) => void
  ): void;
  putRetentionSettings(
    args: PutRetentionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRetentionSettingsCommandOutput) => void
  ): void;
  /**
   * <p>Updates the logging configuration for the specified SIP media application.</p>
   */
  putSipMediaApplicationLoggingConfiguration(
    args: PutSipMediaApplicationLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSipMediaApplicationLoggingConfigurationCommandOutput>;
  putSipMediaApplicationLoggingConfiguration(
    args: PutSipMediaApplicationLoggingConfigurationCommandInput,
    cb: (err: any, data?: PutSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): void;
  putSipMediaApplicationLoggingConfiguration(
    args: PutSipMediaApplicationLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): void;
  /**
   * <p>Puts emergency calling configuration details to the specified Amazon Chime Voice Connector, such as emergency phone numbers and calling countries. Origination and termination settings must be enabled for the Amazon Chime Voice Connector before emergency calling can be configured.</p>
   */
  putVoiceConnectorEmergencyCallingConfiguration(
    args: PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorEmergencyCallingConfigurationCommandOutput>;
  putVoiceConnectorEmergencyCallingConfiguration(
    args: PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  putVoiceConnectorEmergencyCallingConfiguration(
    args: PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  /**
   * <p>Adds a logging configuration for the specified Amazon Chime Voice Connector. The logging configuration specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.</p>
   */
  putVoiceConnectorLoggingConfiguration(
    args: PutVoiceConnectorLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorLoggingConfigurationCommandOutput>;
  putVoiceConnectorLoggingConfiguration(
    args: PutVoiceConnectorLoggingConfigurationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): void;
  putVoiceConnectorLoggingConfiguration(
    args: PutVoiceConnectorLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): void;
  /**
   * <p>Adds origination settings for the specified Amazon Chime Voice Connector.</p>
   *
   *          <note>
   *             <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off origination settings.</p>
   *          </note>
   */
  putVoiceConnectorOrigination(
    args: PutVoiceConnectorOriginationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorOriginationCommandOutput>;
  putVoiceConnectorOrigination(
    args: PutVoiceConnectorOriginationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorOriginationCommandOutput) => void
  ): void;
  putVoiceConnectorOrigination(
    args: PutVoiceConnectorOriginationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorOriginationCommandOutput) => void
  ): void;
  /**
   * <p>Puts the specified proxy configuration to the specified Amazon Chime Voice Connector.</p>
   */
  putVoiceConnectorProxy(
    args: PutVoiceConnectorProxyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorProxyCommandOutput>;
  putVoiceConnectorProxy(
    args: PutVoiceConnectorProxyCommandInput,
    cb: (err: any, data?: PutVoiceConnectorProxyCommandOutput) => void
  ): void;
  putVoiceConnectorProxy(
    args: PutVoiceConnectorProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorProxyCommandOutput) => void
  ): void;
  /**
   * <p>Adds a streaming configuration for the specified Amazon Chime Voice Connector. The streaming
   *             configuration specifies whether media streaming is enabled for sending to Indonesians.
   *             It also sets the retention period, in hours, for the Amazon Kinesis data.</p>
   */
  putVoiceConnectorStreamingConfiguration(
    args: PutVoiceConnectorStreamingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorStreamingConfigurationCommandOutput>;
  putVoiceConnectorStreamingConfiguration(
    args: PutVoiceConnectorStreamingConfigurationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  putVoiceConnectorStreamingConfiguration(
    args: PutVoiceConnectorStreamingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  /**
   * <p>Adds termination settings for the specified Amazon Chime Voice Connector.</p>
   *
   *          <note>
   *             <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off termination settings.</p>
   *          </note>
   */
  putVoiceConnectorTermination(
    args: PutVoiceConnectorTerminationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorTerminationCommandOutput>;
  putVoiceConnectorTermination(
    args: PutVoiceConnectorTerminationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorTerminationCommandOutput) => void
  ): void;
  putVoiceConnectorTermination(
    args: PutVoiceConnectorTerminationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorTerminationCommandOutput) => void
  ): void;
  /**
   * <p>Adds termination SIP credentials for the specified Amazon Chime Voice Connector.</p>
   */
  putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorTerminationCredentialsCommandOutput>;
  putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsCommandInput,
    cb: (err: any, data?: PutVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  /**
   * <p>Redacts message content, but not metadata. The message exists in the back end, but the action returns null content, and the state shows as redacted.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  redactChannelMessage(
    args: RedactChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RedactChannelMessageCommandOutput>;
  redactChannelMessage(
    args: RedactChannelMessageCommandInput,
    cb: (err: any, data?: RedactChannelMessageCommandOutput) => void
  ): void;
  redactChannelMessage(
    args: RedactChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RedactChannelMessageCommandOutput) => void
  ): void;
  /**
   * <p>Redacts the specified message from the specified Amazon Chime conversation.</p>
   */
  redactConversationMessage(
    args: RedactConversationMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RedactConversationMessageCommandOutput>;
  redactConversationMessage(
    args: RedactConversationMessageCommandInput,
    cb: (err: any, data?: RedactConversationMessageCommandOutput) => void
  ): void;
  redactConversationMessage(
    args: RedactConversationMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RedactConversationMessageCommandOutput) => void
  ): void;
  /**
   * <p>Redacts the specified message from the specified Amazon Chime channel.</p>
   */
  redactRoomMessage(
    args: RedactRoomMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RedactRoomMessageCommandOutput>;
  redactRoomMessage(
    args: RedactRoomMessageCommandInput,
    cb: (err: any, data?: RedactRoomMessageCommandOutput) => void
  ): void;
  redactRoomMessage(
    args: RedactRoomMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RedactRoomMessageCommandOutput) => void
  ): void;
  /**
   * <p>Regenerates the security token for a bot.</p>
   */
  regenerateSecurityToken(
    args: RegenerateSecurityTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegenerateSecurityTokenCommandOutput>;
  regenerateSecurityToken(
    args: RegenerateSecurityTokenCommandInput,
    cb: (err: any, data?: RegenerateSecurityTokenCommandOutput) => void
  ): void;
  regenerateSecurityToken(
    args: RegenerateSecurityTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegenerateSecurityTokenCommandOutput) => void
  ): void;
  /**
   * <p>Resets the personal meeting PIN for the specified user on an Amazon Chime account. Returns
   *             the <a>User</a> object with the updated personal meeting PIN.</p>
   */
  resetPersonalPIN(
    args: ResetPersonalPINCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetPersonalPINCommandOutput>;
  resetPersonalPIN(
    args: ResetPersonalPINCommandInput,
    cb: (err: any, data?: ResetPersonalPINCommandOutput) => void
  ): void;
  resetPersonalPIN(
    args: ResetPersonalPINCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetPersonalPINCommandOutput) => void
  ): void;
  /**
   * <p>Moves a phone number from the <b>Deletion queue</b> back into the
   *             phone number <b>Inventory</b>.</p>
   */
  restorePhoneNumber(
    args: RestorePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestorePhoneNumberCommandOutput>;
  restorePhoneNumber(
    args: RestorePhoneNumberCommandInput,
    cb: (err: any, data?: RestorePhoneNumberCommandOutput) => void
  ): void;
  restorePhoneNumber(
    args: RestorePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestorePhoneNumberCommandOutput) => void
  ): void;
  /**
   * <p>Searches for phone numbers that can be ordered. For
   *             US
   *             numbers, provide at least one of the following search filters: <code>AreaCode</code>,
   *                 <code>City</code>, <code>State</code>, or <code>TollFreePrefix</code>. If you
   *             provide <code>City</code>, you must also provide <code>State</code>. Numbers outside the
   *             US
   *             only support the <code>PhoneNumberType</code> filter, which you must use.</p>
   */
  searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchAvailablePhoneNumbersCommandOutput>;
  searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    cb: (err: any, data?: SearchAvailablePhoneNumbersCommandOutput) => void
  ): void;
  searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchAvailablePhoneNumbersCommandOutput) => void
  ): void;
  /**
   * <p>Sends a message to a particular channel that the member is a part of.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *
   *             <p>Also, <code>STANDARD</code> messages can contain 4KB of data and the 1KB of metadata. <code>CONTROL</code> messages can contain 30 bytes of
   *     data and no metadata.</p>
   *          </note>
   */
  sendChannelMessage(
    args: SendChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendChannelMessageCommandOutput>;
  sendChannelMessage(
    args: SendChannelMessageCommandInput,
    cb: (err: any, data?: SendChannelMessageCommandOutput) => void
  ): void;
  sendChannelMessage(
    args: SendChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendChannelMessageCommandOutput) => void
  ): void;
  /**
   * <p>Applies the specified tags to the specified Amazon Chime SDK attendee.</p>
   */
  tagAttendee(args: TagAttendeeCommandInput, options?: __HttpHandlerOptions): Promise<TagAttendeeCommandOutput>;
  tagAttendee(args: TagAttendeeCommandInput, cb: (err: any, data?: TagAttendeeCommandOutput) => void): void;
  tagAttendee(
    args: TagAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagAttendeeCommandOutput) => void
  ): void;
  /**
   * <p>Applies the specified tags to the specified Amazon Chime SDK meeting.</p>
   */
  tagMeeting(args: TagMeetingCommandInput, options?: __HttpHandlerOptions): Promise<TagMeetingCommandOutput>;
  tagMeeting(args: TagMeetingCommandInput, cb: (err: any, data?: TagMeetingCommandOutput) => void): void;
  tagMeeting(
    args: TagMeetingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagMeetingCommandOutput) => void
  ): void;
  /**
   * <p>Applies the specified tags to the specified Amazon Chime SDK meeting resource.</p>
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  /**
   * <p>Untags the specified tags from the specified Amazon Chime SDK attendee.</p>
   */
  untagAttendee(args: UntagAttendeeCommandInput, options?: __HttpHandlerOptions): Promise<UntagAttendeeCommandOutput>;
  untagAttendee(args: UntagAttendeeCommandInput, cb: (err: any, data?: UntagAttendeeCommandOutput) => void): void;
  untagAttendee(
    args: UntagAttendeeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagAttendeeCommandOutput) => void
  ): void;
  /**
   * <p>Untags the specified tags from the specified Amazon Chime SDK meeting.</p>
   */
  untagMeeting(args: UntagMeetingCommandInput, options?: __HttpHandlerOptions): Promise<UntagMeetingCommandOutput>;
  untagMeeting(args: UntagMeetingCommandInput, cb: (err: any, data?: UntagMeetingCommandOutput) => void): void;
  untagMeeting(
    args: UntagMeetingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagMeetingCommandOutput) => void
  ): void;
  /**
   * <p>Untags the specified tags from the specified Amazon Chime SDK meeting resource.</p>
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  /**
   * <p>Updates account details for the specified Amazon Chime account. Currently, only account name
   *             updates are supported for this action.</p>
   */
  updateAccount(args: UpdateAccountCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAccountCommandOutput>;
  updateAccount(args: UpdateAccountCommandInput, cb: (err: any, data?: UpdateAccountCommandOutput) => void): void;
  updateAccount(
    args: UpdateAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountCommandOutput) => void
  ): void;
  /**
   * <p>Updates the settings for the specified Amazon Chime account. You can update settings for
   *             remote control of shared screens, or for the dial-out option. For more information about
   *             these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use
   *                 the Policies Page</a> in the <i>Amazon Chime Administration
   *                 Guide</i>.</p>
   */
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountSettingsCommandOutput>;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;
  /**
   * <p>Updates <code>AppInstance</code> metadata.</p>
   */
  updateAppInstance(
    args: UpdateAppInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAppInstanceCommandOutput>;
  updateAppInstance(
    args: UpdateAppInstanceCommandInput,
    cb: (err: any, data?: UpdateAppInstanceCommandOutput) => void
  ): void;
  updateAppInstance(
    args: UpdateAppInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppInstanceCommandOutput) => void
  ): void;
  /**
   * <p>Updates the details of an <code>AppInstanceUser</code>. You can update names and metadata.</p>
   */
  updateAppInstanceUser(
    args: UpdateAppInstanceUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAppInstanceUserCommandOutput>;
  updateAppInstanceUser(
    args: UpdateAppInstanceUserCommandInput,
    cb: (err: any, data?: UpdateAppInstanceUserCommandOutput) => void
  ): void;
  updateAppInstanceUser(
    args: UpdateAppInstanceUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppInstanceUserCommandOutput) => void
  ): void;
  /**
   * <p>Updates the status of the specified bot, such as starting or stopping the bot from running in your Amazon Chime Enterprise account.</p>
   */
  updateBot(args: UpdateBotCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBotCommandOutput>;
  updateBot(args: UpdateBotCommandInput, cb: (err: any, data?: UpdateBotCommandOutput) => void): void;
  updateBot(
    args: UpdateBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBotCommandOutput) => void
  ): void;
  /**
   * <p>Update a channel's attributes.</p>
   *          <p>
   *             <b>Restriction</b>: You can't change a channel's privacy.
   * </p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  updateChannel(args: UpdateChannelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateChannelCommandOutput>;
  updateChannel(args: UpdateChannelCommandInput, cb: (err: any, data?: UpdateChannelCommandOutput) => void): void;
  updateChannel(
    args: UpdateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;
  /**
   * <p>Updates the content of a message.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  updateChannelMessage(
    args: UpdateChannelMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChannelMessageCommandOutput>;
  updateChannelMessage(
    args: UpdateChannelMessageCommandInput,
    cb: (err: any, data?: UpdateChannelMessageCommandOutput) => void
  ): void;
  updateChannelMessage(
    args: UpdateChannelMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelMessageCommandOutput) => void
  ): void;
  /**
   * <p>The details of the time when a user last read messages in a channel.</p>
   *
   *          <note>
   *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
   *         the API call as the value in the header.</p>
   *          </note>
   */
  updateChannelReadMarker(
    args: UpdateChannelReadMarkerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChannelReadMarkerCommandOutput>;
  updateChannelReadMarker(
    args: UpdateChannelReadMarkerCommandInput,
    cb: (err: any, data?: UpdateChannelReadMarkerCommandOutput) => void
  ): void;
  updateChannelReadMarker(
    args: UpdateChannelReadMarkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelReadMarkerCommandOutput) => void
  ): void;
  /**
   * <p>Updates global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings.</p>
   */
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGlobalSettingsCommandOutput>;
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;
  /**
   * <p>Updates phone number details, such as product type or calling name, for the specified phone number ID. You can update one phone number
   *         detail at a time. For example, you can update either the product type or the calling name in one action.</p>
   *
   *          <p>For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the
   *         Amazon Chime SIP Media Application Dial-In product type.</p>
   *
   *          <p>Updates to outbound calling names can take 72 hours to complete. Pending updates to outbound calling names must be complete before you
   *          can request another update.</p>
   */
  updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePhoneNumberCommandOutput>;
  updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    cb: (err: any, data?: UpdatePhoneNumberCommandOutput) => void
  ): void;
  updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePhoneNumberCommandOutput) => void
  ): void;
  /**
   * <p>Updates the phone number settings for the administrator's AWS account, such as the default
   *             outbound calling name. You can update the default outbound calling name once every seven
   *             days. Outbound calling names can take up to 72 hours to update.</p>
   */
  updatePhoneNumberSettings(
    args: UpdatePhoneNumberSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePhoneNumberSettingsCommandOutput>;
  updatePhoneNumberSettings(
    args: UpdatePhoneNumberSettingsCommandInput,
    cb: (err: any, data?: UpdatePhoneNumberSettingsCommandOutput) => void
  ): void;
  updatePhoneNumberSettings(
    args: UpdatePhoneNumberSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePhoneNumberSettingsCommandOutput) => void
  ): void;
  /**
   * <p>Updates the specified proxy session details, such as voice or SMS capabilities.</p>
   */
  updateProxySession(
    args: UpdateProxySessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProxySessionCommandOutput>;
  updateProxySession(
    args: UpdateProxySessionCommandInput,
    cb: (err: any, data?: UpdateProxySessionCommandOutput) => void
  ): void;
  updateProxySession(
    args: UpdateProxySessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProxySessionCommandOutput) => void
  ): void;
  /**
   * <p>Updates room details, such as the room name, for a room in an Amazon Chime Enterprise account.</p>
   */
  updateRoom(args: UpdateRoomCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRoomCommandOutput>;
  updateRoom(args: UpdateRoomCommandInput, cb: (err: any, data?: UpdateRoomCommandOutput) => void): void;
  updateRoom(
    args: UpdateRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoomCommandOutput) => void
  ): void;
  /**
   * <p>Updates room membership details, such as the member role, for a room in an Amazon Chime
   *             Enterprise account. The member role designates whether the member is a chat room
   *             administrator or a general chat room member. The member role can be updated only for
   *             user IDs.</p>
   */
  updateRoomMembership(
    args: UpdateRoomMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoomMembershipCommandOutput>;
  updateRoomMembership(
    args: UpdateRoomMembershipCommandInput,
    cb: (err: any, data?: UpdateRoomMembershipCommandOutput) => void
  ): void;
  updateRoomMembership(
    args: UpdateRoomMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoomMembershipCommandOutput) => void
  ): void;
  /**
   * <p>Updates the details of the specified SIP media application.</p>
   */
  updateSipMediaApplication(
    args: UpdateSipMediaApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSipMediaApplicationCommandOutput>;
  updateSipMediaApplication(
    args: UpdateSipMediaApplicationCommandInput,
    cb: (err: any, data?: UpdateSipMediaApplicationCommandOutput) => void
  ): void;
  updateSipMediaApplication(
    args: UpdateSipMediaApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSipMediaApplicationCommandOutput) => void
  ): void;
  /**
   * <p>Updates the details of the specified SIP rule.</p>
   */
  updateSipRule(args: UpdateSipRuleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSipRuleCommandOutput>;
  updateSipRule(args: UpdateSipRuleCommandInput, cb: (err: any, data?: UpdateSipRuleCommandOutput) => void): void;
  updateSipRule(
    args: UpdateSipRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSipRuleCommandOutput) => void
  ): void;
  /**
   * <p>
   * Updates user details for a specified user ID. Currently, only
   * <code>LicenseType</code>
   * updates are supported for this action.
   * </p>
   */
  updateUser(args: UpdateUserCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserCommandOutput>;
  updateUser(args: UpdateUserCommandInput, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
  updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  /**
   * <p>Updates the settings for the specified user, such as phone number settings.</p>
   */
  updateUserSettings(
    args: UpdateUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserSettingsCommandOutput>;
  updateUserSettings(
    args: UpdateUserSettingsCommandInput,
    cb: (err: any, data?: UpdateUserSettingsCommandOutput) => void
  ): void;
  updateUserSettings(
    args: UpdateUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserSettingsCommandOutput) => void
  ): void;
  /**
   * <p>Updates details for the specified Amazon Chime Voice Connector.</p>
   */
  updateVoiceConnector(
    args: UpdateVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVoiceConnectorCommandOutput>;
  updateVoiceConnector(
    args: UpdateVoiceConnectorCommandInput,
    cb: (err: any, data?: UpdateVoiceConnectorCommandOutput) => void
  ): void;
  updateVoiceConnector(
    args: UpdateVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVoiceConnectorCommandOutput) => void
  ): void;
  /**
   * <p>Updates details of the specified Amazon Chime Voice Connector group, such as the name and
   *             Amazon Chime Voice Connector priority ranking.</p>
   */
  updateVoiceConnectorGroup(
    args: UpdateVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVoiceConnectorGroupCommandOutput>;
  updateVoiceConnectorGroup(
    args: UpdateVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: UpdateVoiceConnectorGroupCommandOutput) => void
  ): void;
  updateVoiceConnectorGroup(
    args: UpdateVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVoiceConnectorGroupCommandOutput) => void
  ): void;
}
