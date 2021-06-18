"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chime = void 0;
const ChimeClient_1 = require("./ChimeClient");
const AssociatePhoneNumberWithUserCommand_1 = require("./commands/AssociatePhoneNumberWithUserCommand");
const AssociatePhoneNumbersWithVoiceConnectorCommand_1 = require("./commands/AssociatePhoneNumbersWithVoiceConnectorCommand");
const AssociatePhoneNumbersWithVoiceConnectorGroupCommand_1 = require("./commands/AssociatePhoneNumbersWithVoiceConnectorGroupCommand");
const AssociateSigninDelegateGroupsWithAccountCommand_1 = require("./commands/AssociateSigninDelegateGroupsWithAccountCommand");
const BatchCreateAttendeeCommand_1 = require("./commands/BatchCreateAttendeeCommand");
const BatchCreateChannelMembershipCommand_1 = require("./commands/BatchCreateChannelMembershipCommand");
const BatchCreateRoomMembershipCommand_1 = require("./commands/BatchCreateRoomMembershipCommand");
const BatchDeletePhoneNumberCommand_1 = require("./commands/BatchDeletePhoneNumberCommand");
const BatchSuspendUserCommand_1 = require("./commands/BatchSuspendUserCommand");
const BatchUnsuspendUserCommand_1 = require("./commands/BatchUnsuspendUserCommand");
const BatchUpdatePhoneNumberCommand_1 = require("./commands/BatchUpdatePhoneNumberCommand");
const BatchUpdateUserCommand_1 = require("./commands/BatchUpdateUserCommand");
const CreateAccountCommand_1 = require("./commands/CreateAccountCommand");
const CreateAppInstanceAdminCommand_1 = require("./commands/CreateAppInstanceAdminCommand");
const CreateAppInstanceCommand_1 = require("./commands/CreateAppInstanceCommand");
const CreateAppInstanceUserCommand_1 = require("./commands/CreateAppInstanceUserCommand");
const CreateAttendeeCommand_1 = require("./commands/CreateAttendeeCommand");
const CreateBotCommand_1 = require("./commands/CreateBotCommand");
const CreateChannelBanCommand_1 = require("./commands/CreateChannelBanCommand");
const CreateChannelCommand_1 = require("./commands/CreateChannelCommand");
const CreateChannelMembershipCommand_1 = require("./commands/CreateChannelMembershipCommand");
const CreateChannelModeratorCommand_1 = require("./commands/CreateChannelModeratorCommand");
const CreateMeetingCommand_1 = require("./commands/CreateMeetingCommand");
const CreateMeetingDialOutCommand_1 = require("./commands/CreateMeetingDialOutCommand");
const CreateMeetingWithAttendeesCommand_1 = require("./commands/CreateMeetingWithAttendeesCommand");
const CreatePhoneNumberOrderCommand_1 = require("./commands/CreatePhoneNumberOrderCommand");
const CreateProxySessionCommand_1 = require("./commands/CreateProxySessionCommand");
const CreateRoomCommand_1 = require("./commands/CreateRoomCommand");
const CreateRoomMembershipCommand_1 = require("./commands/CreateRoomMembershipCommand");
const CreateSipMediaApplicationCallCommand_1 = require("./commands/CreateSipMediaApplicationCallCommand");
const CreateSipMediaApplicationCommand_1 = require("./commands/CreateSipMediaApplicationCommand");
const CreateSipRuleCommand_1 = require("./commands/CreateSipRuleCommand");
const CreateUserCommand_1 = require("./commands/CreateUserCommand");
const CreateVoiceConnectorCommand_1 = require("./commands/CreateVoiceConnectorCommand");
const CreateVoiceConnectorGroupCommand_1 = require("./commands/CreateVoiceConnectorGroupCommand");
const DeleteAccountCommand_1 = require("./commands/DeleteAccountCommand");
const DeleteAppInstanceAdminCommand_1 = require("./commands/DeleteAppInstanceAdminCommand");
const DeleteAppInstanceCommand_1 = require("./commands/DeleteAppInstanceCommand");
const DeleteAppInstanceStreamingConfigurationsCommand_1 = require("./commands/DeleteAppInstanceStreamingConfigurationsCommand");
const DeleteAppInstanceUserCommand_1 = require("./commands/DeleteAppInstanceUserCommand");
const DeleteAttendeeCommand_1 = require("./commands/DeleteAttendeeCommand");
const DeleteChannelBanCommand_1 = require("./commands/DeleteChannelBanCommand");
const DeleteChannelCommand_1 = require("./commands/DeleteChannelCommand");
const DeleteChannelMembershipCommand_1 = require("./commands/DeleteChannelMembershipCommand");
const DeleteChannelMessageCommand_1 = require("./commands/DeleteChannelMessageCommand");
const DeleteChannelModeratorCommand_1 = require("./commands/DeleteChannelModeratorCommand");
const DeleteEventsConfigurationCommand_1 = require("./commands/DeleteEventsConfigurationCommand");
const DeleteMeetingCommand_1 = require("./commands/DeleteMeetingCommand");
const DeletePhoneNumberCommand_1 = require("./commands/DeletePhoneNumberCommand");
const DeleteProxySessionCommand_1 = require("./commands/DeleteProxySessionCommand");
const DeleteRoomCommand_1 = require("./commands/DeleteRoomCommand");
const DeleteRoomMembershipCommand_1 = require("./commands/DeleteRoomMembershipCommand");
const DeleteSipMediaApplicationCommand_1 = require("./commands/DeleteSipMediaApplicationCommand");
const DeleteSipRuleCommand_1 = require("./commands/DeleteSipRuleCommand");
const DeleteVoiceConnectorCommand_1 = require("./commands/DeleteVoiceConnectorCommand");
const DeleteVoiceConnectorEmergencyCallingConfigurationCommand_1 = require("./commands/DeleteVoiceConnectorEmergencyCallingConfigurationCommand");
const DeleteVoiceConnectorGroupCommand_1 = require("./commands/DeleteVoiceConnectorGroupCommand");
const DeleteVoiceConnectorOriginationCommand_1 = require("./commands/DeleteVoiceConnectorOriginationCommand");
const DeleteVoiceConnectorProxyCommand_1 = require("./commands/DeleteVoiceConnectorProxyCommand");
const DeleteVoiceConnectorStreamingConfigurationCommand_1 = require("./commands/DeleteVoiceConnectorStreamingConfigurationCommand");
const DeleteVoiceConnectorTerminationCommand_1 = require("./commands/DeleteVoiceConnectorTerminationCommand");
const DeleteVoiceConnectorTerminationCredentialsCommand_1 = require("./commands/DeleteVoiceConnectorTerminationCredentialsCommand");
const DescribeAppInstanceAdminCommand_1 = require("./commands/DescribeAppInstanceAdminCommand");
const DescribeAppInstanceCommand_1 = require("./commands/DescribeAppInstanceCommand");
const DescribeAppInstanceUserCommand_1 = require("./commands/DescribeAppInstanceUserCommand");
const DescribeChannelBanCommand_1 = require("./commands/DescribeChannelBanCommand");
const DescribeChannelCommand_1 = require("./commands/DescribeChannelCommand");
const DescribeChannelMembershipCommand_1 = require("./commands/DescribeChannelMembershipCommand");
const DescribeChannelMembershipForAppInstanceUserCommand_1 = require("./commands/DescribeChannelMembershipForAppInstanceUserCommand");
const DescribeChannelModeratedByAppInstanceUserCommand_1 = require("./commands/DescribeChannelModeratedByAppInstanceUserCommand");
const DescribeChannelModeratorCommand_1 = require("./commands/DescribeChannelModeratorCommand");
const DisassociatePhoneNumberFromUserCommand_1 = require("./commands/DisassociatePhoneNumberFromUserCommand");
const DisassociatePhoneNumbersFromVoiceConnectorCommand_1 = require("./commands/DisassociatePhoneNumbersFromVoiceConnectorCommand");
const DisassociatePhoneNumbersFromVoiceConnectorGroupCommand_1 = require("./commands/DisassociatePhoneNumbersFromVoiceConnectorGroupCommand");
const DisassociateSigninDelegateGroupsFromAccountCommand_1 = require("./commands/DisassociateSigninDelegateGroupsFromAccountCommand");
const GetAccountCommand_1 = require("./commands/GetAccountCommand");
const GetAccountSettingsCommand_1 = require("./commands/GetAccountSettingsCommand");
const GetAppInstanceRetentionSettingsCommand_1 = require("./commands/GetAppInstanceRetentionSettingsCommand");
const GetAppInstanceStreamingConfigurationsCommand_1 = require("./commands/GetAppInstanceStreamingConfigurationsCommand");
const GetAttendeeCommand_1 = require("./commands/GetAttendeeCommand");
const GetBotCommand_1 = require("./commands/GetBotCommand");
const GetChannelMessageCommand_1 = require("./commands/GetChannelMessageCommand");
const GetEventsConfigurationCommand_1 = require("./commands/GetEventsConfigurationCommand");
const GetGlobalSettingsCommand_1 = require("./commands/GetGlobalSettingsCommand");
const GetMeetingCommand_1 = require("./commands/GetMeetingCommand");
const GetMessagingSessionEndpointCommand_1 = require("./commands/GetMessagingSessionEndpointCommand");
const GetPhoneNumberCommand_1 = require("./commands/GetPhoneNumberCommand");
const GetPhoneNumberOrderCommand_1 = require("./commands/GetPhoneNumberOrderCommand");
const GetPhoneNumberSettingsCommand_1 = require("./commands/GetPhoneNumberSettingsCommand");
const GetProxySessionCommand_1 = require("./commands/GetProxySessionCommand");
const GetRetentionSettingsCommand_1 = require("./commands/GetRetentionSettingsCommand");
const GetRoomCommand_1 = require("./commands/GetRoomCommand");
const GetSipMediaApplicationCommand_1 = require("./commands/GetSipMediaApplicationCommand");
const GetSipMediaApplicationLoggingConfigurationCommand_1 = require("./commands/GetSipMediaApplicationLoggingConfigurationCommand");
const GetSipRuleCommand_1 = require("./commands/GetSipRuleCommand");
const GetUserCommand_1 = require("./commands/GetUserCommand");
const GetUserSettingsCommand_1 = require("./commands/GetUserSettingsCommand");
const GetVoiceConnectorCommand_1 = require("./commands/GetVoiceConnectorCommand");
const GetVoiceConnectorEmergencyCallingConfigurationCommand_1 = require("./commands/GetVoiceConnectorEmergencyCallingConfigurationCommand");
const GetVoiceConnectorGroupCommand_1 = require("./commands/GetVoiceConnectorGroupCommand");
const GetVoiceConnectorLoggingConfigurationCommand_1 = require("./commands/GetVoiceConnectorLoggingConfigurationCommand");
const GetVoiceConnectorOriginationCommand_1 = require("./commands/GetVoiceConnectorOriginationCommand");
const GetVoiceConnectorProxyCommand_1 = require("./commands/GetVoiceConnectorProxyCommand");
const GetVoiceConnectorStreamingConfigurationCommand_1 = require("./commands/GetVoiceConnectorStreamingConfigurationCommand");
const GetVoiceConnectorTerminationCommand_1 = require("./commands/GetVoiceConnectorTerminationCommand");
const GetVoiceConnectorTerminationHealthCommand_1 = require("./commands/GetVoiceConnectorTerminationHealthCommand");
const InviteUsersCommand_1 = require("./commands/InviteUsersCommand");
const ListAccountsCommand_1 = require("./commands/ListAccountsCommand");
const ListAppInstanceAdminsCommand_1 = require("./commands/ListAppInstanceAdminsCommand");
const ListAppInstanceUsersCommand_1 = require("./commands/ListAppInstanceUsersCommand");
const ListAppInstancesCommand_1 = require("./commands/ListAppInstancesCommand");
const ListAttendeeTagsCommand_1 = require("./commands/ListAttendeeTagsCommand");
const ListAttendeesCommand_1 = require("./commands/ListAttendeesCommand");
const ListBotsCommand_1 = require("./commands/ListBotsCommand");
const ListChannelBansCommand_1 = require("./commands/ListChannelBansCommand");
const ListChannelMembershipsCommand_1 = require("./commands/ListChannelMembershipsCommand");
const ListChannelMembershipsForAppInstanceUserCommand_1 = require("./commands/ListChannelMembershipsForAppInstanceUserCommand");
const ListChannelMessagesCommand_1 = require("./commands/ListChannelMessagesCommand");
const ListChannelModeratorsCommand_1 = require("./commands/ListChannelModeratorsCommand");
const ListChannelsCommand_1 = require("./commands/ListChannelsCommand");
const ListChannelsModeratedByAppInstanceUserCommand_1 = require("./commands/ListChannelsModeratedByAppInstanceUserCommand");
const ListMeetingTagsCommand_1 = require("./commands/ListMeetingTagsCommand");
const ListMeetingsCommand_1 = require("./commands/ListMeetingsCommand");
const ListPhoneNumberOrdersCommand_1 = require("./commands/ListPhoneNumberOrdersCommand");
const ListPhoneNumbersCommand_1 = require("./commands/ListPhoneNumbersCommand");
const ListProxySessionsCommand_1 = require("./commands/ListProxySessionsCommand");
const ListRoomMembershipsCommand_1 = require("./commands/ListRoomMembershipsCommand");
const ListRoomsCommand_1 = require("./commands/ListRoomsCommand");
const ListSipMediaApplicationsCommand_1 = require("./commands/ListSipMediaApplicationsCommand");
const ListSipRulesCommand_1 = require("./commands/ListSipRulesCommand");
const ListSupportedPhoneNumberCountriesCommand_1 = require("./commands/ListSupportedPhoneNumberCountriesCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListUsersCommand_1 = require("./commands/ListUsersCommand");
const ListVoiceConnectorGroupsCommand_1 = require("./commands/ListVoiceConnectorGroupsCommand");
const ListVoiceConnectorTerminationCredentialsCommand_1 = require("./commands/ListVoiceConnectorTerminationCredentialsCommand");
const ListVoiceConnectorsCommand_1 = require("./commands/ListVoiceConnectorsCommand");
const LogoutUserCommand_1 = require("./commands/LogoutUserCommand");
const PutAppInstanceRetentionSettingsCommand_1 = require("./commands/PutAppInstanceRetentionSettingsCommand");
const PutAppInstanceStreamingConfigurationsCommand_1 = require("./commands/PutAppInstanceStreamingConfigurationsCommand");
const PutEventsConfigurationCommand_1 = require("./commands/PutEventsConfigurationCommand");
const PutRetentionSettingsCommand_1 = require("./commands/PutRetentionSettingsCommand");
const PutSipMediaApplicationLoggingConfigurationCommand_1 = require("./commands/PutSipMediaApplicationLoggingConfigurationCommand");
const PutVoiceConnectorEmergencyCallingConfigurationCommand_1 = require("./commands/PutVoiceConnectorEmergencyCallingConfigurationCommand");
const PutVoiceConnectorLoggingConfigurationCommand_1 = require("./commands/PutVoiceConnectorLoggingConfigurationCommand");
const PutVoiceConnectorOriginationCommand_1 = require("./commands/PutVoiceConnectorOriginationCommand");
const PutVoiceConnectorProxyCommand_1 = require("./commands/PutVoiceConnectorProxyCommand");
const PutVoiceConnectorStreamingConfigurationCommand_1 = require("./commands/PutVoiceConnectorStreamingConfigurationCommand");
const PutVoiceConnectorTerminationCommand_1 = require("./commands/PutVoiceConnectorTerminationCommand");
const PutVoiceConnectorTerminationCredentialsCommand_1 = require("./commands/PutVoiceConnectorTerminationCredentialsCommand");
const RedactChannelMessageCommand_1 = require("./commands/RedactChannelMessageCommand");
const RedactConversationMessageCommand_1 = require("./commands/RedactConversationMessageCommand");
const RedactRoomMessageCommand_1 = require("./commands/RedactRoomMessageCommand");
const RegenerateSecurityTokenCommand_1 = require("./commands/RegenerateSecurityTokenCommand");
const ResetPersonalPINCommand_1 = require("./commands/ResetPersonalPINCommand");
const RestorePhoneNumberCommand_1 = require("./commands/RestorePhoneNumberCommand");
const SearchAvailablePhoneNumbersCommand_1 = require("./commands/SearchAvailablePhoneNumbersCommand");
const SendChannelMessageCommand_1 = require("./commands/SendChannelMessageCommand");
const TagAttendeeCommand_1 = require("./commands/TagAttendeeCommand");
const TagMeetingCommand_1 = require("./commands/TagMeetingCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagAttendeeCommand_1 = require("./commands/UntagAttendeeCommand");
const UntagMeetingCommand_1 = require("./commands/UntagMeetingCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateAccountCommand_1 = require("./commands/UpdateAccountCommand");
const UpdateAccountSettingsCommand_1 = require("./commands/UpdateAccountSettingsCommand");
const UpdateAppInstanceCommand_1 = require("./commands/UpdateAppInstanceCommand");
const UpdateAppInstanceUserCommand_1 = require("./commands/UpdateAppInstanceUserCommand");
const UpdateBotCommand_1 = require("./commands/UpdateBotCommand");
const UpdateChannelCommand_1 = require("./commands/UpdateChannelCommand");
const UpdateChannelMessageCommand_1 = require("./commands/UpdateChannelMessageCommand");
const UpdateChannelReadMarkerCommand_1 = require("./commands/UpdateChannelReadMarkerCommand");
const UpdateGlobalSettingsCommand_1 = require("./commands/UpdateGlobalSettingsCommand");
const UpdatePhoneNumberCommand_1 = require("./commands/UpdatePhoneNumberCommand");
const UpdatePhoneNumberSettingsCommand_1 = require("./commands/UpdatePhoneNumberSettingsCommand");
const UpdateProxySessionCommand_1 = require("./commands/UpdateProxySessionCommand");
const UpdateRoomCommand_1 = require("./commands/UpdateRoomCommand");
const UpdateRoomMembershipCommand_1 = require("./commands/UpdateRoomMembershipCommand");
const UpdateSipMediaApplicationCommand_1 = require("./commands/UpdateSipMediaApplicationCommand");
const UpdateSipRuleCommand_1 = require("./commands/UpdateSipRuleCommand");
const UpdateUserCommand_1 = require("./commands/UpdateUserCommand");
const UpdateUserSettingsCommand_1 = require("./commands/UpdateUserSettingsCommand");
const UpdateVoiceConnectorCommand_1 = require("./commands/UpdateVoiceConnectorCommand");
const UpdateVoiceConnectorGroupCommand_1 = require("./commands/UpdateVoiceConnectorGroupCommand");
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
class Chime extends ChimeClient_1.ChimeClient {
  associatePhoneNumbersWithVoiceConnector(args, optionsOrCb, cb) {
    const command = new AssociatePhoneNumbersWithVoiceConnectorCommand_1.AssociatePhoneNumbersWithVoiceConnectorCommand(
      args
    );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  associatePhoneNumbersWithVoiceConnectorGroup(args, optionsOrCb, cb) {
    const command =
      new AssociatePhoneNumbersWithVoiceConnectorGroupCommand_1.AssociatePhoneNumbersWithVoiceConnectorGroupCommand(
        args
      );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  associatePhoneNumberWithUser(args, optionsOrCb, cb) {
    const command = new AssociatePhoneNumberWithUserCommand_1.AssociatePhoneNumberWithUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  associateSigninDelegateGroupsWithAccount(args, optionsOrCb, cb) {
    const command =
      new AssociateSigninDelegateGroupsWithAccountCommand_1.AssociateSigninDelegateGroupsWithAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  batchCreateAttendee(args, optionsOrCb, cb) {
    const command = new BatchCreateAttendeeCommand_1.BatchCreateAttendeeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  batchCreateChannelMembership(args, optionsOrCb, cb) {
    const command = new BatchCreateChannelMembershipCommand_1.BatchCreateChannelMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  batchCreateRoomMembership(args, optionsOrCb, cb) {
    const command = new BatchCreateRoomMembershipCommand_1.BatchCreateRoomMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  batchDeletePhoneNumber(args, optionsOrCb, cb) {
    const command = new BatchDeletePhoneNumberCommand_1.BatchDeletePhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  batchSuspendUser(args, optionsOrCb, cb) {
    const command = new BatchSuspendUserCommand_1.BatchSuspendUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  batchUnsuspendUser(args, optionsOrCb, cb) {
    const command = new BatchUnsuspendUserCommand_1.BatchUnsuspendUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  batchUpdatePhoneNumber(args, optionsOrCb, cb) {
    const command = new BatchUpdatePhoneNumberCommand_1.BatchUpdatePhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  batchUpdateUser(args, optionsOrCb, cb) {
    const command = new BatchUpdateUserCommand_1.BatchUpdateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createAccount(args, optionsOrCb, cb) {
    const command = new CreateAccountCommand_1.CreateAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createAppInstance(args, optionsOrCb, cb) {
    const command = new CreateAppInstanceCommand_1.CreateAppInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createAppInstanceAdmin(args, optionsOrCb, cb) {
    const command = new CreateAppInstanceAdminCommand_1.CreateAppInstanceAdminCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createAppInstanceUser(args, optionsOrCb, cb) {
    const command = new CreateAppInstanceUserCommand_1.CreateAppInstanceUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createAttendee(args, optionsOrCb, cb) {
    const command = new CreateAttendeeCommand_1.CreateAttendeeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createBot(args, optionsOrCb, cb) {
    const command = new CreateBotCommand_1.CreateBotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createChannel(args, optionsOrCb, cb) {
    const command = new CreateChannelCommand_1.CreateChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createChannelBan(args, optionsOrCb, cb) {
    const command = new CreateChannelBanCommand_1.CreateChannelBanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createChannelMembership(args, optionsOrCb, cb) {
    const command = new CreateChannelMembershipCommand_1.CreateChannelMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createChannelModerator(args, optionsOrCb, cb) {
    const command = new CreateChannelModeratorCommand_1.CreateChannelModeratorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createMeeting(args, optionsOrCb, cb) {
    const command = new CreateMeetingCommand_1.CreateMeetingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createMeetingDialOut(args, optionsOrCb, cb) {
    const command = new CreateMeetingDialOutCommand_1.CreateMeetingDialOutCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createMeetingWithAttendees(args, optionsOrCb, cb) {
    const command = new CreateMeetingWithAttendeesCommand_1.CreateMeetingWithAttendeesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createPhoneNumberOrder(args, optionsOrCb, cb) {
    const command = new CreatePhoneNumberOrderCommand_1.CreatePhoneNumberOrderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createProxySession(args, optionsOrCb, cb) {
    const command = new CreateProxySessionCommand_1.CreateProxySessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createRoom(args, optionsOrCb, cb) {
    const command = new CreateRoomCommand_1.CreateRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createRoomMembership(args, optionsOrCb, cb) {
    const command = new CreateRoomMembershipCommand_1.CreateRoomMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createSipMediaApplication(args, optionsOrCb, cb) {
    const command = new CreateSipMediaApplicationCommand_1.CreateSipMediaApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createSipMediaApplicationCall(args, optionsOrCb, cb) {
    const command = new CreateSipMediaApplicationCallCommand_1.CreateSipMediaApplicationCallCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createSipRule(args, optionsOrCb, cb) {
    const command = new CreateSipRuleCommand_1.CreateSipRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createUser(args, optionsOrCb, cb) {
    const command = new CreateUserCommand_1.CreateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createVoiceConnector(args, optionsOrCb, cb) {
    const command = new CreateVoiceConnectorCommand_1.CreateVoiceConnectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createVoiceConnectorGroup(args, optionsOrCb, cb) {
    const command = new CreateVoiceConnectorGroupCommand_1.CreateVoiceConnectorGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteAccount(args, optionsOrCb, cb) {
    const command = new DeleteAccountCommand_1.DeleteAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteAppInstance(args, optionsOrCb, cb) {
    const command = new DeleteAppInstanceCommand_1.DeleteAppInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteAppInstanceAdmin(args, optionsOrCb, cb) {
    const command = new DeleteAppInstanceAdminCommand_1.DeleteAppInstanceAdminCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteAppInstanceStreamingConfigurations(args, optionsOrCb, cb) {
    const command =
      new DeleteAppInstanceStreamingConfigurationsCommand_1.DeleteAppInstanceStreamingConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteAppInstanceUser(args, optionsOrCb, cb) {
    const command = new DeleteAppInstanceUserCommand_1.DeleteAppInstanceUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteAttendee(args, optionsOrCb, cb) {
    const command = new DeleteAttendeeCommand_1.DeleteAttendeeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteChannel(args, optionsOrCb, cb) {
    const command = new DeleteChannelCommand_1.DeleteChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteChannelBan(args, optionsOrCb, cb) {
    const command = new DeleteChannelBanCommand_1.DeleteChannelBanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteChannelMembership(args, optionsOrCb, cb) {
    const command = new DeleteChannelMembershipCommand_1.DeleteChannelMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteChannelMessage(args, optionsOrCb, cb) {
    const command = new DeleteChannelMessageCommand_1.DeleteChannelMessageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteChannelModerator(args, optionsOrCb, cb) {
    const command = new DeleteChannelModeratorCommand_1.DeleteChannelModeratorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteEventsConfiguration(args, optionsOrCb, cb) {
    const command = new DeleteEventsConfigurationCommand_1.DeleteEventsConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteMeeting(args, optionsOrCb, cb) {
    const command = new DeleteMeetingCommand_1.DeleteMeetingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deletePhoneNumber(args, optionsOrCb, cb) {
    const command = new DeletePhoneNumberCommand_1.DeletePhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteProxySession(args, optionsOrCb, cb) {
    const command = new DeleteProxySessionCommand_1.DeleteProxySessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteRoom(args, optionsOrCb, cb) {
    const command = new DeleteRoomCommand_1.DeleteRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteRoomMembership(args, optionsOrCb, cb) {
    const command = new DeleteRoomMembershipCommand_1.DeleteRoomMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteSipMediaApplication(args, optionsOrCb, cb) {
    const command = new DeleteSipMediaApplicationCommand_1.DeleteSipMediaApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteSipRule(args, optionsOrCb, cb) {
    const command = new DeleteSipRuleCommand_1.DeleteSipRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteVoiceConnector(args, optionsOrCb, cb) {
    const command = new DeleteVoiceConnectorCommand_1.DeleteVoiceConnectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteVoiceConnectorEmergencyCallingConfiguration(args, optionsOrCb, cb) {
    const command =
      new DeleteVoiceConnectorEmergencyCallingConfigurationCommand_1.DeleteVoiceConnectorEmergencyCallingConfigurationCommand(
        args
      );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteVoiceConnectorGroup(args, optionsOrCb, cb) {
    const command = new DeleteVoiceConnectorGroupCommand_1.DeleteVoiceConnectorGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteVoiceConnectorOrigination(args, optionsOrCb, cb) {
    const command = new DeleteVoiceConnectorOriginationCommand_1.DeleteVoiceConnectorOriginationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteVoiceConnectorProxy(args, optionsOrCb, cb) {
    const command = new DeleteVoiceConnectorProxyCommand_1.DeleteVoiceConnectorProxyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteVoiceConnectorStreamingConfiguration(args, optionsOrCb, cb) {
    const command =
      new DeleteVoiceConnectorStreamingConfigurationCommand_1.DeleteVoiceConnectorStreamingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteVoiceConnectorTermination(args, optionsOrCb, cb) {
    const command = new DeleteVoiceConnectorTerminationCommand_1.DeleteVoiceConnectorTerminationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteVoiceConnectorTerminationCredentials(args, optionsOrCb, cb) {
    const command =
      new DeleteVoiceConnectorTerminationCredentialsCommand_1.DeleteVoiceConnectorTerminationCredentialsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeAppInstance(args, optionsOrCb, cb) {
    const command = new DescribeAppInstanceCommand_1.DescribeAppInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeAppInstanceAdmin(args, optionsOrCb, cb) {
    const command = new DescribeAppInstanceAdminCommand_1.DescribeAppInstanceAdminCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeAppInstanceUser(args, optionsOrCb, cb) {
    const command = new DescribeAppInstanceUserCommand_1.DescribeAppInstanceUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeChannel(args, optionsOrCb, cb) {
    const command = new DescribeChannelCommand_1.DescribeChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeChannelBan(args, optionsOrCb, cb) {
    const command = new DescribeChannelBanCommand_1.DescribeChannelBanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeChannelMembership(args, optionsOrCb, cb) {
    const command = new DescribeChannelMembershipCommand_1.DescribeChannelMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeChannelMembershipForAppInstanceUser(args, optionsOrCb, cb) {
    const command =
      new DescribeChannelMembershipForAppInstanceUserCommand_1.DescribeChannelMembershipForAppInstanceUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeChannelModeratedByAppInstanceUser(args, optionsOrCb, cb) {
    const command =
      new DescribeChannelModeratedByAppInstanceUserCommand_1.DescribeChannelModeratedByAppInstanceUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeChannelModerator(args, optionsOrCb, cb) {
    const command = new DescribeChannelModeratorCommand_1.DescribeChannelModeratorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  disassociatePhoneNumberFromUser(args, optionsOrCb, cb) {
    const command = new DisassociatePhoneNumberFromUserCommand_1.DisassociatePhoneNumberFromUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  disassociatePhoneNumbersFromVoiceConnector(args, optionsOrCb, cb) {
    const command =
      new DisassociatePhoneNumbersFromVoiceConnectorCommand_1.DisassociatePhoneNumbersFromVoiceConnectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  disassociatePhoneNumbersFromVoiceConnectorGroup(args, optionsOrCb, cb) {
    const command =
      new DisassociatePhoneNumbersFromVoiceConnectorGroupCommand_1.DisassociatePhoneNumbersFromVoiceConnectorGroupCommand(
        args
      );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  disassociateSigninDelegateGroupsFromAccount(args, optionsOrCb, cb) {
    const command =
      new DisassociateSigninDelegateGroupsFromAccountCommand_1.DisassociateSigninDelegateGroupsFromAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getAccount(args, optionsOrCb, cb) {
    const command = new GetAccountCommand_1.GetAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getAccountSettings(args, optionsOrCb, cb) {
    const command = new GetAccountSettingsCommand_1.GetAccountSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getAppInstanceRetentionSettings(args, optionsOrCb, cb) {
    const command = new GetAppInstanceRetentionSettingsCommand_1.GetAppInstanceRetentionSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getAppInstanceStreamingConfigurations(args, optionsOrCb, cb) {
    const command = new GetAppInstanceStreamingConfigurationsCommand_1.GetAppInstanceStreamingConfigurationsCommand(
      args
    );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getAttendee(args, optionsOrCb, cb) {
    const command = new GetAttendeeCommand_1.GetAttendeeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getBot(args, optionsOrCb, cb) {
    const command = new GetBotCommand_1.GetBotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getChannelMessage(args, optionsOrCb, cb) {
    const command = new GetChannelMessageCommand_1.GetChannelMessageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getEventsConfiguration(args, optionsOrCb, cb) {
    const command = new GetEventsConfigurationCommand_1.GetEventsConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getGlobalSettings(args, optionsOrCb, cb) {
    const command = new GetGlobalSettingsCommand_1.GetGlobalSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getMeeting(args, optionsOrCb, cb) {
    const command = new GetMeetingCommand_1.GetMeetingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getMessagingSessionEndpoint(args, optionsOrCb, cb) {
    const command = new GetMessagingSessionEndpointCommand_1.GetMessagingSessionEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getPhoneNumber(args, optionsOrCb, cb) {
    const command = new GetPhoneNumberCommand_1.GetPhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getPhoneNumberOrder(args, optionsOrCb, cb) {
    const command = new GetPhoneNumberOrderCommand_1.GetPhoneNumberOrderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getPhoneNumberSettings(args, optionsOrCb, cb) {
    const command = new GetPhoneNumberSettingsCommand_1.GetPhoneNumberSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getProxySession(args, optionsOrCb, cb) {
    const command = new GetProxySessionCommand_1.GetProxySessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getRetentionSettings(args, optionsOrCb, cb) {
    const command = new GetRetentionSettingsCommand_1.GetRetentionSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getRoom(args, optionsOrCb, cb) {
    const command = new GetRoomCommand_1.GetRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getSipMediaApplication(args, optionsOrCb, cb) {
    const command = new GetSipMediaApplicationCommand_1.GetSipMediaApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getSipMediaApplicationLoggingConfiguration(args, optionsOrCb, cb) {
    const command =
      new GetSipMediaApplicationLoggingConfigurationCommand_1.GetSipMediaApplicationLoggingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getSipRule(args, optionsOrCb, cb) {
    const command = new GetSipRuleCommand_1.GetSipRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getUser(args, optionsOrCb, cb) {
    const command = new GetUserCommand_1.GetUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getUserSettings(args, optionsOrCb, cb) {
    const command = new GetUserSettingsCommand_1.GetUserSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getVoiceConnector(args, optionsOrCb, cb) {
    const command = new GetVoiceConnectorCommand_1.GetVoiceConnectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getVoiceConnectorEmergencyCallingConfiguration(args, optionsOrCb, cb) {
    const command =
      new GetVoiceConnectorEmergencyCallingConfigurationCommand_1.GetVoiceConnectorEmergencyCallingConfigurationCommand(
        args
      );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getVoiceConnectorGroup(args, optionsOrCb, cb) {
    const command = new GetVoiceConnectorGroupCommand_1.GetVoiceConnectorGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getVoiceConnectorLoggingConfiguration(args, optionsOrCb, cb) {
    const command = new GetVoiceConnectorLoggingConfigurationCommand_1.GetVoiceConnectorLoggingConfigurationCommand(
      args
    );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getVoiceConnectorOrigination(args, optionsOrCb, cb) {
    const command = new GetVoiceConnectorOriginationCommand_1.GetVoiceConnectorOriginationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getVoiceConnectorProxy(args, optionsOrCb, cb) {
    const command = new GetVoiceConnectorProxyCommand_1.GetVoiceConnectorProxyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getVoiceConnectorStreamingConfiguration(args, optionsOrCb, cb) {
    const command = new GetVoiceConnectorStreamingConfigurationCommand_1.GetVoiceConnectorStreamingConfigurationCommand(
      args
    );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getVoiceConnectorTermination(args, optionsOrCb, cb) {
    const command = new GetVoiceConnectorTerminationCommand_1.GetVoiceConnectorTerminationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getVoiceConnectorTerminationHealth(args, optionsOrCb, cb) {
    const command = new GetVoiceConnectorTerminationHealthCommand_1.GetVoiceConnectorTerminationHealthCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  inviteUsers(args, optionsOrCb, cb) {
    const command = new InviteUsersCommand_1.InviteUsersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listAccounts(args, optionsOrCb, cb) {
    const command = new ListAccountsCommand_1.ListAccountsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listAppInstanceAdmins(args, optionsOrCb, cb) {
    const command = new ListAppInstanceAdminsCommand_1.ListAppInstanceAdminsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listAppInstances(args, optionsOrCb, cb) {
    const command = new ListAppInstancesCommand_1.ListAppInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listAppInstanceUsers(args, optionsOrCb, cb) {
    const command = new ListAppInstanceUsersCommand_1.ListAppInstanceUsersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listAttendees(args, optionsOrCb, cb) {
    const command = new ListAttendeesCommand_1.ListAttendeesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listAttendeeTags(args, optionsOrCb, cb) {
    const command = new ListAttendeeTagsCommand_1.ListAttendeeTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listBots(args, optionsOrCb, cb) {
    const command = new ListBotsCommand_1.ListBotsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listChannelBans(args, optionsOrCb, cb) {
    const command = new ListChannelBansCommand_1.ListChannelBansCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listChannelMemberships(args, optionsOrCb, cb) {
    const command = new ListChannelMembershipsCommand_1.ListChannelMembershipsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listChannelMembershipsForAppInstanceUser(args, optionsOrCb, cb) {
    const command =
      new ListChannelMembershipsForAppInstanceUserCommand_1.ListChannelMembershipsForAppInstanceUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listChannelMessages(args, optionsOrCb, cb) {
    const command = new ListChannelMessagesCommand_1.ListChannelMessagesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listChannelModerators(args, optionsOrCb, cb) {
    const command = new ListChannelModeratorsCommand_1.ListChannelModeratorsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listChannels(args, optionsOrCb, cb) {
    const command = new ListChannelsCommand_1.ListChannelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listChannelsModeratedByAppInstanceUser(args, optionsOrCb, cb) {
    const command = new ListChannelsModeratedByAppInstanceUserCommand_1.ListChannelsModeratedByAppInstanceUserCommand(
      args
    );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listMeetings(args, optionsOrCb, cb) {
    const command = new ListMeetingsCommand_1.ListMeetingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listMeetingTags(args, optionsOrCb, cb) {
    const command = new ListMeetingTagsCommand_1.ListMeetingTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listPhoneNumberOrders(args, optionsOrCb, cb) {
    const command = new ListPhoneNumberOrdersCommand_1.ListPhoneNumberOrdersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listPhoneNumbers(args, optionsOrCb, cb) {
    const command = new ListPhoneNumbersCommand_1.ListPhoneNumbersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listProxySessions(args, optionsOrCb, cb) {
    const command = new ListProxySessionsCommand_1.ListProxySessionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listRoomMemberships(args, optionsOrCb, cb) {
    const command = new ListRoomMembershipsCommand_1.ListRoomMembershipsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listRooms(args, optionsOrCb, cb) {
    const command = new ListRoomsCommand_1.ListRoomsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listSipMediaApplications(args, optionsOrCb, cb) {
    const command = new ListSipMediaApplicationsCommand_1.ListSipMediaApplicationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listSipRules(args, optionsOrCb, cb) {
    const command = new ListSipRulesCommand_1.ListSipRulesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listSupportedPhoneNumberCountries(args, optionsOrCb, cb) {
    const command = new ListSupportedPhoneNumberCountriesCommand_1.ListSupportedPhoneNumberCountriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listTagsForResource(args, optionsOrCb, cb) {
    const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listUsers(args, optionsOrCb, cb) {
    const command = new ListUsersCommand_1.ListUsersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listVoiceConnectorGroups(args, optionsOrCb, cb) {
    const command = new ListVoiceConnectorGroupsCommand_1.ListVoiceConnectorGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listVoiceConnectors(args, optionsOrCb, cb) {
    const command = new ListVoiceConnectorsCommand_1.ListVoiceConnectorsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listVoiceConnectorTerminationCredentials(args, optionsOrCb, cb) {
    const command =
      new ListVoiceConnectorTerminationCredentialsCommand_1.ListVoiceConnectorTerminationCredentialsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  logoutUser(args, optionsOrCb, cb) {
    const command = new LogoutUserCommand_1.LogoutUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  putAppInstanceRetentionSettings(args, optionsOrCb, cb) {
    const command = new PutAppInstanceRetentionSettingsCommand_1.PutAppInstanceRetentionSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  putAppInstanceStreamingConfigurations(args, optionsOrCb, cb) {
    const command = new PutAppInstanceStreamingConfigurationsCommand_1.PutAppInstanceStreamingConfigurationsCommand(
      args
    );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  putEventsConfiguration(args, optionsOrCb, cb) {
    const command = new PutEventsConfigurationCommand_1.PutEventsConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  putRetentionSettings(args, optionsOrCb, cb) {
    const command = new PutRetentionSettingsCommand_1.PutRetentionSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  putSipMediaApplicationLoggingConfiguration(args, optionsOrCb, cb) {
    const command =
      new PutSipMediaApplicationLoggingConfigurationCommand_1.PutSipMediaApplicationLoggingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  putVoiceConnectorEmergencyCallingConfiguration(args, optionsOrCb, cb) {
    const command =
      new PutVoiceConnectorEmergencyCallingConfigurationCommand_1.PutVoiceConnectorEmergencyCallingConfigurationCommand(
        args
      );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  putVoiceConnectorLoggingConfiguration(args, optionsOrCb, cb) {
    const command = new PutVoiceConnectorLoggingConfigurationCommand_1.PutVoiceConnectorLoggingConfigurationCommand(
      args
    );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  putVoiceConnectorOrigination(args, optionsOrCb, cb) {
    const command = new PutVoiceConnectorOriginationCommand_1.PutVoiceConnectorOriginationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  putVoiceConnectorProxy(args, optionsOrCb, cb) {
    const command = new PutVoiceConnectorProxyCommand_1.PutVoiceConnectorProxyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  putVoiceConnectorStreamingConfiguration(args, optionsOrCb, cb) {
    const command = new PutVoiceConnectorStreamingConfigurationCommand_1.PutVoiceConnectorStreamingConfigurationCommand(
      args
    );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  putVoiceConnectorTermination(args, optionsOrCb, cb) {
    const command = new PutVoiceConnectorTerminationCommand_1.PutVoiceConnectorTerminationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  putVoiceConnectorTerminationCredentials(args, optionsOrCb, cb) {
    const command = new PutVoiceConnectorTerminationCredentialsCommand_1.PutVoiceConnectorTerminationCredentialsCommand(
      args
    );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  redactChannelMessage(args, optionsOrCb, cb) {
    const command = new RedactChannelMessageCommand_1.RedactChannelMessageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  redactConversationMessage(args, optionsOrCb, cb) {
    const command = new RedactConversationMessageCommand_1.RedactConversationMessageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  redactRoomMessage(args, optionsOrCb, cb) {
    const command = new RedactRoomMessageCommand_1.RedactRoomMessageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  regenerateSecurityToken(args, optionsOrCb, cb) {
    const command = new RegenerateSecurityTokenCommand_1.RegenerateSecurityTokenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  resetPersonalPIN(args, optionsOrCb, cb) {
    const command = new ResetPersonalPINCommand_1.ResetPersonalPINCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  restorePhoneNumber(args, optionsOrCb, cb) {
    const command = new RestorePhoneNumberCommand_1.RestorePhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  searchAvailablePhoneNumbers(args, optionsOrCb, cb) {
    const command = new SearchAvailablePhoneNumbersCommand_1.SearchAvailablePhoneNumbersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  sendChannelMessage(args, optionsOrCb, cb) {
    const command = new SendChannelMessageCommand_1.SendChannelMessageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  tagAttendee(args, optionsOrCb, cb) {
    const command = new TagAttendeeCommand_1.TagAttendeeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  tagMeeting(args, optionsOrCb, cb) {
    const command = new TagMeetingCommand_1.TagMeetingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  tagResource(args, optionsOrCb, cb) {
    const command = new TagResourceCommand_1.TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  untagAttendee(args, optionsOrCb, cb) {
    const command = new UntagAttendeeCommand_1.UntagAttendeeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  untagMeeting(args, optionsOrCb, cb) {
    const command = new UntagMeetingCommand_1.UntagMeetingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  untagResource(args, optionsOrCb, cb) {
    const command = new UntagResourceCommand_1.UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateAccount(args, optionsOrCb, cb) {
    const command = new UpdateAccountCommand_1.UpdateAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateAccountSettings(args, optionsOrCb, cb) {
    const command = new UpdateAccountSettingsCommand_1.UpdateAccountSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateAppInstance(args, optionsOrCb, cb) {
    const command = new UpdateAppInstanceCommand_1.UpdateAppInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateAppInstanceUser(args, optionsOrCb, cb) {
    const command = new UpdateAppInstanceUserCommand_1.UpdateAppInstanceUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateBot(args, optionsOrCb, cb) {
    const command = new UpdateBotCommand_1.UpdateBotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateChannel(args, optionsOrCb, cb) {
    const command = new UpdateChannelCommand_1.UpdateChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateChannelMessage(args, optionsOrCb, cb) {
    const command = new UpdateChannelMessageCommand_1.UpdateChannelMessageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateChannelReadMarker(args, optionsOrCb, cb) {
    const command = new UpdateChannelReadMarkerCommand_1.UpdateChannelReadMarkerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateGlobalSettings(args, optionsOrCb, cb) {
    const command = new UpdateGlobalSettingsCommand_1.UpdateGlobalSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updatePhoneNumber(args, optionsOrCb, cb) {
    const command = new UpdatePhoneNumberCommand_1.UpdatePhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updatePhoneNumberSettings(args, optionsOrCb, cb) {
    const command = new UpdatePhoneNumberSettingsCommand_1.UpdatePhoneNumberSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateProxySession(args, optionsOrCb, cb) {
    const command = new UpdateProxySessionCommand_1.UpdateProxySessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateRoom(args, optionsOrCb, cb) {
    const command = new UpdateRoomCommand_1.UpdateRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateRoomMembership(args, optionsOrCb, cb) {
    const command = new UpdateRoomMembershipCommand_1.UpdateRoomMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateSipMediaApplication(args, optionsOrCb, cb) {
    const command = new UpdateSipMediaApplicationCommand_1.UpdateSipMediaApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateSipRule(args, optionsOrCb, cb) {
    const command = new UpdateSipRuleCommand_1.UpdateSipRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateUser(args, optionsOrCb, cb) {
    const command = new UpdateUserCommand_1.UpdateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateUserSettings(args, optionsOrCb, cb) {
    const command = new UpdateUserSettingsCommand_1.UpdateUserSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateVoiceConnector(args, optionsOrCb, cb) {
    const command = new UpdateVoiceConnectorCommand_1.UpdateVoiceConnectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateVoiceConnectorGroup(args, optionsOrCb, cb) {
    const command = new UpdateVoiceConnectorGroupCommand_1.UpdateVoiceConnectorGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
exports.Chime = Chime;
//# sourceMappingURL=Chime.js.map
