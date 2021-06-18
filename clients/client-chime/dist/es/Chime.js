import { __extends } from "tslib";
import { ChimeClient } from "./ChimeClient";
import { AssociatePhoneNumberWithUserCommand } from "./commands/AssociatePhoneNumberWithUserCommand";
import { AssociatePhoneNumbersWithVoiceConnectorCommand } from "./commands/AssociatePhoneNumbersWithVoiceConnectorCommand";
import { AssociatePhoneNumbersWithVoiceConnectorGroupCommand } from "./commands/AssociatePhoneNumbersWithVoiceConnectorGroupCommand";
import { AssociateSigninDelegateGroupsWithAccountCommand } from "./commands/AssociateSigninDelegateGroupsWithAccountCommand";
import { BatchCreateAttendeeCommand } from "./commands/BatchCreateAttendeeCommand";
import { BatchCreateChannelMembershipCommand } from "./commands/BatchCreateChannelMembershipCommand";
import { BatchCreateRoomMembershipCommand } from "./commands/BatchCreateRoomMembershipCommand";
import { BatchDeletePhoneNumberCommand } from "./commands/BatchDeletePhoneNumberCommand";
import { BatchSuspendUserCommand } from "./commands/BatchSuspendUserCommand";
import { BatchUnsuspendUserCommand } from "./commands/BatchUnsuspendUserCommand";
import { BatchUpdatePhoneNumberCommand } from "./commands/BatchUpdatePhoneNumberCommand";
import { BatchUpdateUserCommand } from "./commands/BatchUpdateUserCommand";
import { CreateAccountCommand } from "./commands/CreateAccountCommand";
import { CreateAppInstanceAdminCommand } from "./commands/CreateAppInstanceAdminCommand";
import { CreateAppInstanceCommand } from "./commands/CreateAppInstanceCommand";
import { CreateAppInstanceUserCommand } from "./commands/CreateAppInstanceUserCommand";
import { CreateAttendeeCommand } from "./commands/CreateAttendeeCommand";
import { CreateBotCommand } from "./commands/CreateBotCommand";
import { CreateChannelBanCommand } from "./commands/CreateChannelBanCommand";
import { CreateChannelCommand } from "./commands/CreateChannelCommand";
import { CreateChannelMembershipCommand } from "./commands/CreateChannelMembershipCommand";
import { CreateChannelModeratorCommand } from "./commands/CreateChannelModeratorCommand";
import { CreateMeetingCommand } from "./commands/CreateMeetingCommand";
import { CreateMeetingDialOutCommand } from "./commands/CreateMeetingDialOutCommand";
import { CreateMeetingWithAttendeesCommand } from "./commands/CreateMeetingWithAttendeesCommand";
import { CreatePhoneNumberOrderCommand } from "./commands/CreatePhoneNumberOrderCommand";
import { CreateProxySessionCommand } from "./commands/CreateProxySessionCommand";
import { CreateRoomCommand } from "./commands/CreateRoomCommand";
import { CreateRoomMembershipCommand } from "./commands/CreateRoomMembershipCommand";
import { CreateSipMediaApplicationCallCommand } from "./commands/CreateSipMediaApplicationCallCommand";
import { CreateSipMediaApplicationCommand } from "./commands/CreateSipMediaApplicationCommand";
import { CreateSipRuleCommand } from "./commands/CreateSipRuleCommand";
import { CreateUserCommand } from "./commands/CreateUserCommand";
import { CreateVoiceConnectorCommand } from "./commands/CreateVoiceConnectorCommand";
import { CreateVoiceConnectorGroupCommand } from "./commands/CreateVoiceConnectorGroupCommand";
import { DeleteAccountCommand } from "./commands/DeleteAccountCommand";
import { DeleteAppInstanceAdminCommand } from "./commands/DeleteAppInstanceAdminCommand";
import { DeleteAppInstanceCommand } from "./commands/DeleteAppInstanceCommand";
import { DeleteAppInstanceStreamingConfigurationsCommand } from "./commands/DeleteAppInstanceStreamingConfigurationsCommand";
import { DeleteAppInstanceUserCommand } from "./commands/DeleteAppInstanceUserCommand";
import { DeleteAttendeeCommand } from "./commands/DeleteAttendeeCommand";
import { DeleteChannelBanCommand } from "./commands/DeleteChannelBanCommand";
import { DeleteChannelCommand } from "./commands/DeleteChannelCommand";
import { DeleteChannelMembershipCommand } from "./commands/DeleteChannelMembershipCommand";
import { DeleteChannelMessageCommand } from "./commands/DeleteChannelMessageCommand";
import { DeleteChannelModeratorCommand } from "./commands/DeleteChannelModeratorCommand";
import { DeleteEventsConfigurationCommand } from "./commands/DeleteEventsConfigurationCommand";
import { DeleteMeetingCommand } from "./commands/DeleteMeetingCommand";
import { DeletePhoneNumberCommand } from "./commands/DeletePhoneNumberCommand";
import { DeleteProxySessionCommand } from "./commands/DeleteProxySessionCommand";
import { DeleteRoomCommand } from "./commands/DeleteRoomCommand";
import { DeleteRoomMembershipCommand } from "./commands/DeleteRoomMembershipCommand";
import { DeleteSipMediaApplicationCommand } from "./commands/DeleteSipMediaApplicationCommand";
import { DeleteSipRuleCommand } from "./commands/DeleteSipRuleCommand";
import { DeleteVoiceConnectorCommand } from "./commands/DeleteVoiceConnectorCommand";
import { DeleteVoiceConnectorEmergencyCallingConfigurationCommand } from "./commands/DeleteVoiceConnectorEmergencyCallingConfigurationCommand";
import { DeleteVoiceConnectorGroupCommand } from "./commands/DeleteVoiceConnectorGroupCommand";
import { DeleteVoiceConnectorOriginationCommand } from "./commands/DeleteVoiceConnectorOriginationCommand";
import { DeleteVoiceConnectorProxyCommand } from "./commands/DeleteVoiceConnectorProxyCommand";
import { DeleteVoiceConnectorStreamingConfigurationCommand } from "./commands/DeleteVoiceConnectorStreamingConfigurationCommand";
import { DeleteVoiceConnectorTerminationCommand } from "./commands/DeleteVoiceConnectorTerminationCommand";
import { DeleteVoiceConnectorTerminationCredentialsCommand } from "./commands/DeleteVoiceConnectorTerminationCredentialsCommand";
import { DescribeAppInstanceAdminCommand } from "./commands/DescribeAppInstanceAdminCommand";
import { DescribeAppInstanceCommand } from "./commands/DescribeAppInstanceCommand";
import { DescribeAppInstanceUserCommand } from "./commands/DescribeAppInstanceUserCommand";
import { DescribeChannelBanCommand } from "./commands/DescribeChannelBanCommand";
import { DescribeChannelCommand } from "./commands/DescribeChannelCommand";
import { DescribeChannelMembershipCommand } from "./commands/DescribeChannelMembershipCommand";
import { DescribeChannelMembershipForAppInstanceUserCommand } from "./commands/DescribeChannelMembershipForAppInstanceUserCommand";
import { DescribeChannelModeratedByAppInstanceUserCommand } from "./commands/DescribeChannelModeratedByAppInstanceUserCommand";
import { DescribeChannelModeratorCommand } from "./commands/DescribeChannelModeratorCommand";
import { DisassociatePhoneNumberFromUserCommand } from "./commands/DisassociatePhoneNumberFromUserCommand";
import { DisassociatePhoneNumbersFromVoiceConnectorCommand } from "./commands/DisassociatePhoneNumbersFromVoiceConnectorCommand";
import { DisassociatePhoneNumbersFromVoiceConnectorGroupCommand } from "./commands/DisassociatePhoneNumbersFromVoiceConnectorGroupCommand";
import { DisassociateSigninDelegateGroupsFromAccountCommand } from "./commands/DisassociateSigninDelegateGroupsFromAccountCommand";
import { GetAccountCommand } from "./commands/GetAccountCommand";
import { GetAccountSettingsCommand } from "./commands/GetAccountSettingsCommand";
import { GetAppInstanceRetentionSettingsCommand } from "./commands/GetAppInstanceRetentionSettingsCommand";
import { GetAppInstanceStreamingConfigurationsCommand } from "./commands/GetAppInstanceStreamingConfigurationsCommand";
import { GetAttendeeCommand } from "./commands/GetAttendeeCommand";
import { GetBotCommand } from "./commands/GetBotCommand";
import { GetChannelMessageCommand } from "./commands/GetChannelMessageCommand";
import { GetEventsConfigurationCommand } from "./commands/GetEventsConfigurationCommand";
import { GetGlobalSettingsCommand } from "./commands/GetGlobalSettingsCommand";
import { GetMeetingCommand } from "./commands/GetMeetingCommand";
import { GetMessagingSessionEndpointCommand } from "./commands/GetMessagingSessionEndpointCommand";
import { GetPhoneNumberCommand } from "./commands/GetPhoneNumberCommand";
import { GetPhoneNumberOrderCommand } from "./commands/GetPhoneNumberOrderCommand";
import { GetPhoneNumberSettingsCommand } from "./commands/GetPhoneNumberSettingsCommand";
import { GetProxySessionCommand } from "./commands/GetProxySessionCommand";
import { GetRetentionSettingsCommand } from "./commands/GetRetentionSettingsCommand";
import { GetRoomCommand } from "./commands/GetRoomCommand";
import { GetSipMediaApplicationCommand } from "./commands/GetSipMediaApplicationCommand";
import { GetSipMediaApplicationLoggingConfigurationCommand } from "./commands/GetSipMediaApplicationLoggingConfigurationCommand";
import { GetSipRuleCommand } from "./commands/GetSipRuleCommand";
import { GetUserCommand } from "./commands/GetUserCommand";
import { GetUserSettingsCommand } from "./commands/GetUserSettingsCommand";
import { GetVoiceConnectorCommand } from "./commands/GetVoiceConnectorCommand";
import { GetVoiceConnectorEmergencyCallingConfigurationCommand } from "./commands/GetVoiceConnectorEmergencyCallingConfigurationCommand";
import { GetVoiceConnectorGroupCommand } from "./commands/GetVoiceConnectorGroupCommand";
import { GetVoiceConnectorLoggingConfigurationCommand } from "./commands/GetVoiceConnectorLoggingConfigurationCommand";
import { GetVoiceConnectorOriginationCommand } from "./commands/GetVoiceConnectorOriginationCommand";
import { GetVoiceConnectorProxyCommand } from "./commands/GetVoiceConnectorProxyCommand";
import { GetVoiceConnectorStreamingConfigurationCommand } from "./commands/GetVoiceConnectorStreamingConfigurationCommand";
import { GetVoiceConnectorTerminationCommand } from "./commands/GetVoiceConnectorTerminationCommand";
import { GetVoiceConnectorTerminationHealthCommand } from "./commands/GetVoiceConnectorTerminationHealthCommand";
import { InviteUsersCommand } from "./commands/InviteUsersCommand";
import { ListAccountsCommand } from "./commands/ListAccountsCommand";
import { ListAppInstanceAdminsCommand } from "./commands/ListAppInstanceAdminsCommand";
import { ListAppInstanceUsersCommand } from "./commands/ListAppInstanceUsersCommand";
import { ListAppInstancesCommand } from "./commands/ListAppInstancesCommand";
import { ListAttendeeTagsCommand } from "./commands/ListAttendeeTagsCommand";
import { ListAttendeesCommand } from "./commands/ListAttendeesCommand";
import { ListBotsCommand } from "./commands/ListBotsCommand";
import { ListChannelBansCommand } from "./commands/ListChannelBansCommand";
import { ListChannelMembershipsCommand } from "./commands/ListChannelMembershipsCommand";
import { ListChannelMembershipsForAppInstanceUserCommand } from "./commands/ListChannelMembershipsForAppInstanceUserCommand";
import { ListChannelMessagesCommand } from "./commands/ListChannelMessagesCommand";
import { ListChannelModeratorsCommand } from "./commands/ListChannelModeratorsCommand";
import { ListChannelsCommand } from "./commands/ListChannelsCommand";
import { ListChannelsModeratedByAppInstanceUserCommand } from "./commands/ListChannelsModeratedByAppInstanceUserCommand";
import { ListMeetingTagsCommand } from "./commands/ListMeetingTagsCommand";
import { ListMeetingsCommand } from "./commands/ListMeetingsCommand";
import { ListPhoneNumberOrdersCommand } from "./commands/ListPhoneNumberOrdersCommand";
import { ListPhoneNumbersCommand } from "./commands/ListPhoneNumbersCommand";
import { ListProxySessionsCommand } from "./commands/ListProxySessionsCommand";
import { ListRoomMembershipsCommand } from "./commands/ListRoomMembershipsCommand";
import { ListRoomsCommand } from "./commands/ListRoomsCommand";
import { ListSipMediaApplicationsCommand } from "./commands/ListSipMediaApplicationsCommand";
import { ListSipRulesCommand } from "./commands/ListSipRulesCommand";
import { ListSupportedPhoneNumberCountriesCommand } from "./commands/ListSupportedPhoneNumberCountriesCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListUsersCommand } from "./commands/ListUsersCommand";
import { ListVoiceConnectorGroupsCommand } from "./commands/ListVoiceConnectorGroupsCommand";
import { ListVoiceConnectorTerminationCredentialsCommand } from "./commands/ListVoiceConnectorTerminationCredentialsCommand";
import { ListVoiceConnectorsCommand } from "./commands/ListVoiceConnectorsCommand";
import { LogoutUserCommand } from "./commands/LogoutUserCommand";
import { PutAppInstanceRetentionSettingsCommand } from "./commands/PutAppInstanceRetentionSettingsCommand";
import { PutAppInstanceStreamingConfigurationsCommand } from "./commands/PutAppInstanceStreamingConfigurationsCommand";
import { PutEventsConfigurationCommand } from "./commands/PutEventsConfigurationCommand";
import { PutRetentionSettingsCommand } from "./commands/PutRetentionSettingsCommand";
import { PutSipMediaApplicationLoggingConfigurationCommand } from "./commands/PutSipMediaApplicationLoggingConfigurationCommand";
import { PutVoiceConnectorEmergencyCallingConfigurationCommand } from "./commands/PutVoiceConnectorEmergencyCallingConfigurationCommand";
import { PutVoiceConnectorLoggingConfigurationCommand } from "./commands/PutVoiceConnectorLoggingConfigurationCommand";
import { PutVoiceConnectorOriginationCommand } from "./commands/PutVoiceConnectorOriginationCommand";
import { PutVoiceConnectorProxyCommand } from "./commands/PutVoiceConnectorProxyCommand";
import { PutVoiceConnectorStreamingConfigurationCommand } from "./commands/PutVoiceConnectorStreamingConfigurationCommand";
import { PutVoiceConnectorTerminationCommand } from "./commands/PutVoiceConnectorTerminationCommand";
import { PutVoiceConnectorTerminationCredentialsCommand } from "./commands/PutVoiceConnectorTerminationCredentialsCommand";
import { RedactChannelMessageCommand } from "./commands/RedactChannelMessageCommand";
import { RedactConversationMessageCommand } from "./commands/RedactConversationMessageCommand";
import { RedactRoomMessageCommand } from "./commands/RedactRoomMessageCommand";
import { RegenerateSecurityTokenCommand } from "./commands/RegenerateSecurityTokenCommand";
import { ResetPersonalPINCommand } from "./commands/ResetPersonalPINCommand";
import { RestorePhoneNumberCommand } from "./commands/RestorePhoneNumberCommand";
import { SearchAvailablePhoneNumbersCommand } from "./commands/SearchAvailablePhoneNumbersCommand";
import { SendChannelMessageCommand } from "./commands/SendChannelMessageCommand";
import { TagAttendeeCommand } from "./commands/TagAttendeeCommand";
import { TagMeetingCommand } from "./commands/TagMeetingCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagAttendeeCommand } from "./commands/UntagAttendeeCommand";
import { UntagMeetingCommand } from "./commands/UntagMeetingCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateAccountCommand } from "./commands/UpdateAccountCommand";
import { UpdateAccountSettingsCommand } from "./commands/UpdateAccountSettingsCommand";
import { UpdateAppInstanceCommand } from "./commands/UpdateAppInstanceCommand";
import { UpdateAppInstanceUserCommand } from "./commands/UpdateAppInstanceUserCommand";
import { UpdateBotCommand } from "./commands/UpdateBotCommand";
import { UpdateChannelCommand } from "./commands/UpdateChannelCommand";
import { UpdateChannelMessageCommand } from "./commands/UpdateChannelMessageCommand";
import { UpdateChannelReadMarkerCommand } from "./commands/UpdateChannelReadMarkerCommand";
import { UpdateGlobalSettingsCommand } from "./commands/UpdateGlobalSettingsCommand";
import { UpdatePhoneNumberCommand } from "./commands/UpdatePhoneNumberCommand";
import { UpdatePhoneNumberSettingsCommand } from "./commands/UpdatePhoneNumberSettingsCommand";
import { UpdateProxySessionCommand } from "./commands/UpdateProxySessionCommand";
import { UpdateRoomCommand } from "./commands/UpdateRoomCommand";
import { UpdateRoomMembershipCommand } from "./commands/UpdateRoomMembershipCommand";
import { UpdateSipMediaApplicationCommand } from "./commands/UpdateSipMediaApplicationCommand";
import { UpdateSipRuleCommand } from "./commands/UpdateSipRuleCommand";
import { UpdateUserCommand } from "./commands/UpdateUserCommand";
import { UpdateUserSettingsCommand } from "./commands/UpdateUserSettingsCommand";
import { UpdateVoiceConnectorCommand } from "./commands/UpdateVoiceConnectorCommand";
import { UpdateVoiceConnectorGroupCommand } from "./commands/UpdateVoiceConnectorGroupCommand";
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
var Chime = /** @class */ (function (_super) {
  __extends(Chime, _super);
  function Chime() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Chime.prototype.associatePhoneNumbersWithVoiceConnector = function (args, optionsOrCb, cb) {
    var command = new AssociatePhoneNumbersWithVoiceConnectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.associatePhoneNumbersWithVoiceConnectorGroup = function (args, optionsOrCb, cb) {
    var command = new AssociatePhoneNumbersWithVoiceConnectorGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.associatePhoneNumberWithUser = function (args, optionsOrCb, cb) {
    var command = new AssociatePhoneNumberWithUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.associateSigninDelegateGroupsWithAccount = function (args, optionsOrCb, cb) {
    var command = new AssociateSigninDelegateGroupsWithAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.batchCreateAttendee = function (args, optionsOrCb, cb) {
    var command = new BatchCreateAttendeeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.batchCreateChannelMembership = function (args, optionsOrCb, cb) {
    var command = new BatchCreateChannelMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.batchCreateRoomMembership = function (args, optionsOrCb, cb) {
    var command = new BatchCreateRoomMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.batchDeletePhoneNumber = function (args, optionsOrCb, cb) {
    var command = new BatchDeletePhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.batchSuspendUser = function (args, optionsOrCb, cb) {
    var command = new BatchSuspendUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.batchUnsuspendUser = function (args, optionsOrCb, cb) {
    var command = new BatchUnsuspendUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.batchUpdatePhoneNumber = function (args, optionsOrCb, cb) {
    var command = new BatchUpdatePhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.batchUpdateUser = function (args, optionsOrCb, cb) {
    var command = new BatchUpdateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.createAccount = function (args, optionsOrCb, cb) {
    var command = new CreateAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.createAppInstance = function (args, optionsOrCb, cb) {
    var command = new CreateAppInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.createAppInstanceAdmin = function (args, optionsOrCb, cb) {
    var command = new CreateAppInstanceAdminCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.createAppInstanceUser = function (args, optionsOrCb, cb) {
    var command = new CreateAppInstanceUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.createAttendee = function (args, optionsOrCb, cb) {
    var command = new CreateAttendeeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.createBot = function (args, optionsOrCb, cb) {
    var command = new CreateBotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.createChannel = function (args, optionsOrCb, cb) {
    var command = new CreateChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.createChannelBan = function (args, optionsOrCb, cb) {
    var command = new CreateChannelBanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.createChannelMembership = function (args, optionsOrCb, cb) {
    var command = new CreateChannelMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.createChannelModerator = function (args, optionsOrCb, cb) {
    var command = new CreateChannelModeratorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.createMeeting = function (args, optionsOrCb, cb) {
    var command = new CreateMeetingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.createMeetingDialOut = function (args, optionsOrCb, cb) {
    var command = new CreateMeetingDialOutCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.createMeetingWithAttendees = function (args, optionsOrCb, cb) {
    var command = new CreateMeetingWithAttendeesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.createPhoneNumberOrder = function (args, optionsOrCb, cb) {
    var command = new CreatePhoneNumberOrderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.createProxySession = function (args, optionsOrCb, cb) {
    var command = new CreateProxySessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.createRoom = function (args, optionsOrCb, cb) {
    var command = new CreateRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.createRoomMembership = function (args, optionsOrCb, cb) {
    var command = new CreateRoomMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.createSipMediaApplication = function (args, optionsOrCb, cb) {
    var command = new CreateSipMediaApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.createSipMediaApplicationCall = function (args, optionsOrCb, cb) {
    var command = new CreateSipMediaApplicationCallCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.createSipRule = function (args, optionsOrCb, cb) {
    var command = new CreateSipRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.createUser = function (args, optionsOrCb, cb) {
    var command = new CreateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.createVoiceConnector = function (args, optionsOrCb, cb) {
    var command = new CreateVoiceConnectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.createVoiceConnectorGroup = function (args, optionsOrCb, cb) {
    var command = new CreateVoiceConnectorGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteAccount = function (args, optionsOrCb, cb) {
    var command = new DeleteAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteAppInstance = function (args, optionsOrCb, cb) {
    var command = new DeleteAppInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteAppInstanceAdmin = function (args, optionsOrCb, cb) {
    var command = new DeleteAppInstanceAdminCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteAppInstanceStreamingConfigurations = function (args, optionsOrCb, cb) {
    var command = new DeleteAppInstanceStreamingConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteAppInstanceUser = function (args, optionsOrCb, cb) {
    var command = new DeleteAppInstanceUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteAttendee = function (args, optionsOrCb, cb) {
    var command = new DeleteAttendeeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteChannel = function (args, optionsOrCb, cb) {
    var command = new DeleteChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteChannelBan = function (args, optionsOrCb, cb) {
    var command = new DeleteChannelBanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteChannelMembership = function (args, optionsOrCb, cb) {
    var command = new DeleteChannelMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteChannelMessage = function (args, optionsOrCb, cb) {
    var command = new DeleteChannelMessageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteChannelModerator = function (args, optionsOrCb, cb) {
    var command = new DeleteChannelModeratorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteEventsConfiguration = function (args, optionsOrCb, cb) {
    var command = new DeleteEventsConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteMeeting = function (args, optionsOrCb, cb) {
    var command = new DeleteMeetingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deletePhoneNumber = function (args, optionsOrCb, cb) {
    var command = new DeletePhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteProxySession = function (args, optionsOrCb, cb) {
    var command = new DeleteProxySessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteRoom = function (args, optionsOrCb, cb) {
    var command = new DeleteRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteRoomMembership = function (args, optionsOrCb, cb) {
    var command = new DeleteRoomMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteSipMediaApplication = function (args, optionsOrCb, cb) {
    var command = new DeleteSipMediaApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteSipRule = function (args, optionsOrCb, cb) {
    var command = new DeleteSipRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteVoiceConnector = function (args, optionsOrCb, cb) {
    var command = new DeleteVoiceConnectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteVoiceConnectorEmergencyCallingConfiguration = function (args, optionsOrCb, cb) {
    var command = new DeleteVoiceConnectorEmergencyCallingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteVoiceConnectorGroup = function (args, optionsOrCb, cb) {
    var command = new DeleteVoiceConnectorGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteVoiceConnectorOrigination = function (args, optionsOrCb, cb) {
    var command = new DeleteVoiceConnectorOriginationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteVoiceConnectorProxy = function (args, optionsOrCb, cb) {
    var command = new DeleteVoiceConnectorProxyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteVoiceConnectorStreamingConfiguration = function (args, optionsOrCb, cb) {
    var command = new DeleteVoiceConnectorStreamingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteVoiceConnectorTermination = function (args, optionsOrCb, cb) {
    var command = new DeleteVoiceConnectorTerminationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.deleteVoiceConnectorTerminationCredentials = function (args, optionsOrCb, cb) {
    var command = new DeleteVoiceConnectorTerminationCredentialsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.describeAppInstance = function (args, optionsOrCb, cb) {
    var command = new DescribeAppInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.describeAppInstanceAdmin = function (args, optionsOrCb, cb) {
    var command = new DescribeAppInstanceAdminCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.describeAppInstanceUser = function (args, optionsOrCb, cb) {
    var command = new DescribeAppInstanceUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.describeChannel = function (args, optionsOrCb, cb) {
    var command = new DescribeChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.describeChannelBan = function (args, optionsOrCb, cb) {
    var command = new DescribeChannelBanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.describeChannelMembership = function (args, optionsOrCb, cb) {
    var command = new DescribeChannelMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.describeChannelMembershipForAppInstanceUser = function (args, optionsOrCb, cb) {
    var command = new DescribeChannelMembershipForAppInstanceUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.describeChannelModeratedByAppInstanceUser = function (args, optionsOrCb, cb) {
    var command = new DescribeChannelModeratedByAppInstanceUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.describeChannelModerator = function (args, optionsOrCb, cb) {
    var command = new DescribeChannelModeratorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.disassociatePhoneNumberFromUser = function (args, optionsOrCb, cb) {
    var command = new DisassociatePhoneNumberFromUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.disassociatePhoneNumbersFromVoiceConnector = function (args, optionsOrCb, cb) {
    var command = new DisassociatePhoneNumbersFromVoiceConnectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.disassociatePhoneNumbersFromVoiceConnectorGroup = function (args, optionsOrCb, cb) {
    var command = new DisassociatePhoneNumbersFromVoiceConnectorGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.disassociateSigninDelegateGroupsFromAccount = function (args, optionsOrCb, cb) {
    var command = new DisassociateSigninDelegateGroupsFromAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getAccount = function (args, optionsOrCb, cb) {
    var command = new GetAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getAccountSettings = function (args, optionsOrCb, cb) {
    var command = new GetAccountSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getAppInstanceRetentionSettings = function (args, optionsOrCb, cb) {
    var command = new GetAppInstanceRetentionSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getAppInstanceStreamingConfigurations = function (args, optionsOrCb, cb) {
    var command = new GetAppInstanceStreamingConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getAttendee = function (args, optionsOrCb, cb) {
    var command = new GetAttendeeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getBot = function (args, optionsOrCb, cb) {
    var command = new GetBotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getChannelMessage = function (args, optionsOrCb, cb) {
    var command = new GetChannelMessageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getEventsConfiguration = function (args, optionsOrCb, cb) {
    var command = new GetEventsConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getGlobalSettings = function (args, optionsOrCb, cb) {
    var command = new GetGlobalSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getMeeting = function (args, optionsOrCb, cb) {
    var command = new GetMeetingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getMessagingSessionEndpoint = function (args, optionsOrCb, cb) {
    var command = new GetMessagingSessionEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getPhoneNumber = function (args, optionsOrCb, cb) {
    var command = new GetPhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getPhoneNumberOrder = function (args, optionsOrCb, cb) {
    var command = new GetPhoneNumberOrderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getPhoneNumberSettings = function (args, optionsOrCb, cb) {
    var command = new GetPhoneNumberSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getProxySession = function (args, optionsOrCb, cb) {
    var command = new GetProxySessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getRetentionSettings = function (args, optionsOrCb, cb) {
    var command = new GetRetentionSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getRoom = function (args, optionsOrCb, cb) {
    var command = new GetRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getSipMediaApplication = function (args, optionsOrCb, cb) {
    var command = new GetSipMediaApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getSipMediaApplicationLoggingConfiguration = function (args, optionsOrCb, cb) {
    var command = new GetSipMediaApplicationLoggingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getSipRule = function (args, optionsOrCb, cb) {
    var command = new GetSipRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getUser = function (args, optionsOrCb, cb) {
    var command = new GetUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getUserSettings = function (args, optionsOrCb, cb) {
    var command = new GetUserSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getVoiceConnector = function (args, optionsOrCb, cb) {
    var command = new GetVoiceConnectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getVoiceConnectorEmergencyCallingConfiguration = function (args, optionsOrCb, cb) {
    var command = new GetVoiceConnectorEmergencyCallingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getVoiceConnectorGroup = function (args, optionsOrCb, cb) {
    var command = new GetVoiceConnectorGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getVoiceConnectorLoggingConfiguration = function (args, optionsOrCb, cb) {
    var command = new GetVoiceConnectorLoggingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getVoiceConnectorOrigination = function (args, optionsOrCb, cb) {
    var command = new GetVoiceConnectorOriginationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getVoiceConnectorProxy = function (args, optionsOrCb, cb) {
    var command = new GetVoiceConnectorProxyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getVoiceConnectorStreamingConfiguration = function (args, optionsOrCb, cb) {
    var command = new GetVoiceConnectorStreamingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getVoiceConnectorTermination = function (args, optionsOrCb, cb) {
    var command = new GetVoiceConnectorTerminationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.getVoiceConnectorTerminationHealth = function (args, optionsOrCb, cb) {
    var command = new GetVoiceConnectorTerminationHealthCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.inviteUsers = function (args, optionsOrCb, cb) {
    var command = new InviteUsersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listAccounts = function (args, optionsOrCb, cb) {
    var command = new ListAccountsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listAppInstanceAdmins = function (args, optionsOrCb, cb) {
    var command = new ListAppInstanceAdminsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listAppInstances = function (args, optionsOrCb, cb) {
    var command = new ListAppInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listAppInstanceUsers = function (args, optionsOrCb, cb) {
    var command = new ListAppInstanceUsersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listAttendees = function (args, optionsOrCb, cb) {
    var command = new ListAttendeesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listAttendeeTags = function (args, optionsOrCb, cb) {
    var command = new ListAttendeeTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listBots = function (args, optionsOrCb, cb) {
    var command = new ListBotsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listChannelBans = function (args, optionsOrCb, cb) {
    var command = new ListChannelBansCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listChannelMemberships = function (args, optionsOrCb, cb) {
    var command = new ListChannelMembershipsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listChannelMembershipsForAppInstanceUser = function (args, optionsOrCb, cb) {
    var command = new ListChannelMembershipsForAppInstanceUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listChannelMessages = function (args, optionsOrCb, cb) {
    var command = new ListChannelMessagesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listChannelModerators = function (args, optionsOrCb, cb) {
    var command = new ListChannelModeratorsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listChannels = function (args, optionsOrCb, cb) {
    var command = new ListChannelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listChannelsModeratedByAppInstanceUser = function (args, optionsOrCb, cb) {
    var command = new ListChannelsModeratedByAppInstanceUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listMeetings = function (args, optionsOrCb, cb) {
    var command = new ListMeetingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listMeetingTags = function (args, optionsOrCb, cb) {
    var command = new ListMeetingTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listPhoneNumberOrders = function (args, optionsOrCb, cb) {
    var command = new ListPhoneNumberOrdersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listPhoneNumbers = function (args, optionsOrCb, cb) {
    var command = new ListPhoneNumbersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listProxySessions = function (args, optionsOrCb, cb) {
    var command = new ListProxySessionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listRoomMemberships = function (args, optionsOrCb, cb) {
    var command = new ListRoomMembershipsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listRooms = function (args, optionsOrCb, cb) {
    var command = new ListRoomsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listSipMediaApplications = function (args, optionsOrCb, cb) {
    var command = new ListSipMediaApplicationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listSipRules = function (args, optionsOrCb, cb) {
    var command = new ListSipRulesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listSupportedPhoneNumberCountries = function (args, optionsOrCb, cb) {
    var command = new ListSupportedPhoneNumberCountriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
    var command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listUsers = function (args, optionsOrCb, cb) {
    var command = new ListUsersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listVoiceConnectorGroups = function (args, optionsOrCb, cb) {
    var command = new ListVoiceConnectorGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listVoiceConnectors = function (args, optionsOrCb, cb) {
    var command = new ListVoiceConnectorsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.listVoiceConnectorTerminationCredentials = function (args, optionsOrCb, cb) {
    var command = new ListVoiceConnectorTerminationCredentialsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.logoutUser = function (args, optionsOrCb, cb) {
    var command = new LogoutUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.putAppInstanceRetentionSettings = function (args, optionsOrCb, cb) {
    var command = new PutAppInstanceRetentionSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.putAppInstanceStreamingConfigurations = function (args, optionsOrCb, cb) {
    var command = new PutAppInstanceStreamingConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.putEventsConfiguration = function (args, optionsOrCb, cb) {
    var command = new PutEventsConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.putRetentionSettings = function (args, optionsOrCb, cb) {
    var command = new PutRetentionSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.putSipMediaApplicationLoggingConfiguration = function (args, optionsOrCb, cb) {
    var command = new PutSipMediaApplicationLoggingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.putVoiceConnectorEmergencyCallingConfiguration = function (args, optionsOrCb, cb) {
    var command = new PutVoiceConnectorEmergencyCallingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.putVoiceConnectorLoggingConfiguration = function (args, optionsOrCb, cb) {
    var command = new PutVoiceConnectorLoggingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.putVoiceConnectorOrigination = function (args, optionsOrCb, cb) {
    var command = new PutVoiceConnectorOriginationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.putVoiceConnectorProxy = function (args, optionsOrCb, cb) {
    var command = new PutVoiceConnectorProxyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.putVoiceConnectorStreamingConfiguration = function (args, optionsOrCb, cb) {
    var command = new PutVoiceConnectorStreamingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.putVoiceConnectorTermination = function (args, optionsOrCb, cb) {
    var command = new PutVoiceConnectorTerminationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.putVoiceConnectorTerminationCredentials = function (args, optionsOrCb, cb) {
    var command = new PutVoiceConnectorTerminationCredentialsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.redactChannelMessage = function (args, optionsOrCb, cb) {
    var command = new RedactChannelMessageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.redactConversationMessage = function (args, optionsOrCb, cb) {
    var command = new RedactConversationMessageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.redactRoomMessage = function (args, optionsOrCb, cb) {
    var command = new RedactRoomMessageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.regenerateSecurityToken = function (args, optionsOrCb, cb) {
    var command = new RegenerateSecurityTokenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.resetPersonalPIN = function (args, optionsOrCb, cb) {
    var command = new ResetPersonalPINCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.restorePhoneNumber = function (args, optionsOrCb, cb) {
    var command = new RestorePhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.searchAvailablePhoneNumbers = function (args, optionsOrCb, cb) {
    var command = new SearchAvailablePhoneNumbersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.sendChannelMessage = function (args, optionsOrCb, cb) {
    var command = new SendChannelMessageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.tagAttendee = function (args, optionsOrCb, cb) {
    var command = new TagAttendeeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.tagMeeting = function (args, optionsOrCb, cb) {
    var command = new TagMeetingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.tagResource = function (args, optionsOrCb, cb) {
    var command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.untagAttendee = function (args, optionsOrCb, cb) {
    var command = new UntagAttendeeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.untagMeeting = function (args, optionsOrCb, cb) {
    var command = new UntagMeetingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.untagResource = function (args, optionsOrCb, cb) {
    var command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.updateAccount = function (args, optionsOrCb, cb) {
    var command = new UpdateAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.updateAccountSettings = function (args, optionsOrCb, cb) {
    var command = new UpdateAccountSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.updateAppInstance = function (args, optionsOrCb, cb) {
    var command = new UpdateAppInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.updateAppInstanceUser = function (args, optionsOrCb, cb) {
    var command = new UpdateAppInstanceUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.updateBot = function (args, optionsOrCb, cb) {
    var command = new UpdateBotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.updateChannel = function (args, optionsOrCb, cb) {
    var command = new UpdateChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.updateChannelMessage = function (args, optionsOrCb, cb) {
    var command = new UpdateChannelMessageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.updateChannelReadMarker = function (args, optionsOrCb, cb) {
    var command = new UpdateChannelReadMarkerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.updateGlobalSettings = function (args, optionsOrCb, cb) {
    var command = new UpdateGlobalSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.updatePhoneNumber = function (args, optionsOrCb, cb) {
    var command = new UpdatePhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.updatePhoneNumberSettings = function (args, optionsOrCb, cb) {
    var command = new UpdatePhoneNumberSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.updateProxySession = function (args, optionsOrCb, cb) {
    var command = new UpdateProxySessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.updateRoom = function (args, optionsOrCb, cb) {
    var command = new UpdateRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.updateRoomMembership = function (args, optionsOrCb, cb) {
    var command = new UpdateRoomMembershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.updateSipMediaApplication = function (args, optionsOrCb, cb) {
    var command = new UpdateSipMediaApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.updateSipRule = function (args, optionsOrCb, cb) {
    var command = new UpdateSipRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.updateUser = function (args, optionsOrCb, cb) {
    var command = new UpdateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.updateUserSettings = function (args, optionsOrCb, cb) {
    var command = new UpdateUserSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.updateVoiceConnector = function (args, optionsOrCb, cb) {
    var command = new UpdateVoiceConnectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Chime.prototype.updateVoiceConnectorGroup = function (args, optionsOrCb, cb) {
    var command = new UpdateVoiceConnectorGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  return Chime;
})(ChimeClient);
export { Chime };
//# sourceMappingURL=Chime.js.map
