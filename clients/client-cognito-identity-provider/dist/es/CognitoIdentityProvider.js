import { __extends } from "tslib";
import { CognitoIdentityProviderClient } from "./CognitoIdentityProviderClient";
import { AddCustomAttributesCommand, } from "./commands/AddCustomAttributesCommand";
import { AdminAddUserToGroupCommand, } from "./commands/AdminAddUserToGroupCommand";
import { AdminConfirmSignUpCommand, } from "./commands/AdminConfirmSignUpCommand";
import { AdminCreateUserCommand, } from "./commands/AdminCreateUserCommand";
import { AdminDeleteUserAttributesCommand, } from "./commands/AdminDeleteUserAttributesCommand";
import { AdminDeleteUserCommand, } from "./commands/AdminDeleteUserCommand";
import { AdminDisableProviderForUserCommand, } from "./commands/AdminDisableProviderForUserCommand";
import { AdminDisableUserCommand, } from "./commands/AdminDisableUserCommand";
import { AdminEnableUserCommand, } from "./commands/AdminEnableUserCommand";
import { AdminForgetDeviceCommand, } from "./commands/AdminForgetDeviceCommand";
import { AdminGetDeviceCommand, } from "./commands/AdminGetDeviceCommand";
import { AdminGetUserCommand, } from "./commands/AdminGetUserCommand";
import { AdminInitiateAuthCommand, } from "./commands/AdminInitiateAuthCommand";
import { AdminLinkProviderForUserCommand, } from "./commands/AdminLinkProviderForUserCommand";
import { AdminListDevicesCommand, } from "./commands/AdminListDevicesCommand";
import { AdminListGroupsForUserCommand, } from "./commands/AdminListGroupsForUserCommand";
import { AdminListUserAuthEventsCommand, } from "./commands/AdminListUserAuthEventsCommand";
import { AdminRemoveUserFromGroupCommand, } from "./commands/AdminRemoveUserFromGroupCommand";
import { AdminResetUserPasswordCommand, } from "./commands/AdminResetUserPasswordCommand";
import { AdminRespondToAuthChallengeCommand, } from "./commands/AdminRespondToAuthChallengeCommand";
import { AdminSetUserMFAPreferenceCommand, } from "./commands/AdminSetUserMFAPreferenceCommand";
import { AdminSetUserPasswordCommand, } from "./commands/AdminSetUserPasswordCommand";
import { AdminSetUserSettingsCommand, } from "./commands/AdminSetUserSettingsCommand";
import { AdminUpdateAuthEventFeedbackCommand, } from "./commands/AdminUpdateAuthEventFeedbackCommand";
import { AdminUpdateDeviceStatusCommand, } from "./commands/AdminUpdateDeviceStatusCommand";
import { AdminUpdateUserAttributesCommand, } from "./commands/AdminUpdateUserAttributesCommand";
import { AdminUserGlobalSignOutCommand, } from "./commands/AdminUserGlobalSignOutCommand";
import { AssociateSoftwareTokenCommand, } from "./commands/AssociateSoftwareTokenCommand";
import { ChangePasswordCommand, } from "./commands/ChangePasswordCommand";
import { ConfirmDeviceCommand, } from "./commands/ConfirmDeviceCommand";
import { ConfirmForgotPasswordCommand, } from "./commands/ConfirmForgotPasswordCommand";
import { ConfirmSignUpCommand, } from "./commands/ConfirmSignUpCommand";
import { CreateGroupCommand } from "./commands/CreateGroupCommand";
import { CreateIdentityProviderCommand, } from "./commands/CreateIdentityProviderCommand";
import { CreateResourceServerCommand, } from "./commands/CreateResourceServerCommand";
import { CreateUserImportJobCommand, } from "./commands/CreateUserImportJobCommand";
import { CreateUserPoolClientCommand, } from "./commands/CreateUserPoolClientCommand";
import { CreateUserPoolCommand, } from "./commands/CreateUserPoolCommand";
import { CreateUserPoolDomainCommand, } from "./commands/CreateUserPoolDomainCommand";
import { DeleteGroupCommand } from "./commands/DeleteGroupCommand";
import { DeleteIdentityProviderCommand, } from "./commands/DeleteIdentityProviderCommand";
import { DeleteResourceServerCommand, } from "./commands/DeleteResourceServerCommand";
import { DeleteUserAttributesCommand, } from "./commands/DeleteUserAttributesCommand";
import { DeleteUserCommand } from "./commands/DeleteUserCommand";
import { DeleteUserPoolClientCommand, } from "./commands/DeleteUserPoolClientCommand";
import { DeleteUserPoolCommand, } from "./commands/DeleteUserPoolCommand";
import { DeleteUserPoolDomainCommand, } from "./commands/DeleteUserPoolDomainCommand";
import { DescribeIdentityProviderCommand, } from "./commands/DescribeIdentityProviderCommand";
import { DescribeResourceServerCommand, } from "./commands/DescribeResourceServerCommand";
import { DescribeRiskConfigurationCommand, } from "./commands/DescribeRiskConfigurationCommand";
import { DescribeUserImportJobCommand, } from "./commands/DescribeUserImportJobCommand";
import { DescribeUserPoolClientCommand, } from "./commands/DescribeUserPoolClientCommand";
import { DescribeUserPoolCommand, } from "./commands/DescribeUserPoolCommand";
import { DescribeUserPoolDomainCommand, } from "./commands/DescribeUserPoolDomainCommand";
import { ForgetDeviceCommand, } from "./commands/ForgetDeviceCommand";
import { ForgotPasswordCommand, } from "./commands/ForgotPasswordCommand";
import { GetCSVHeaderCommand, } from "./commands/GetCSVHeaderCommand";
import { GetDeviceCommand } from "./commands/GetDeviceCommand";
import { GetGroupCommand } from "./commands/GetGroupCommand";
import { GetIdentityProviderByIdentifierCommand, } from "./commands/GetIdentityProviderByIdentifierCommand";
import { GetSigningCertificateCommand, } from "./commands/GetSigningCertificateCommand";
import { GetUICustomizationCommand, } from "./commands/GetUICustomizationCommand";
import { GetUserAttributeVerificationCodeCommand, } from "./commands/GetUserAttributeVerificationCodeCommand";
import { GetUserCommand } from "./commands/GetUserCommand";
import { GetUserPoolMfaConfigCommand, } from "./commands/GetUserPoolMfaConfigCommand";
import { GlobalSignOutCommand, } from "./commands/GlobalSignOutCommand";
import { InitiateAuthCommand, } from "./commands/InitiateAuthCommand";
import { ListDevicesCommand } from "./commands/ListDevicesCommand";
import { ListGroupsCommand } from "./commands/ListGroupsCommand";
import { ListIdentityProvidersCommand, } from "./commands/ListIdentityProvidersCommand";
import { ListResourceServersCommand, } from "./commands/ListResourceServersCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ListUserImportJobsCommand, } from "./commands/ListUserImportJobsCommand";
import { ListUserPoolClientsCommand, } from "./commands/ListUserPoolClientsCommand";
import { ListUserPoolsCommand, } from "./commands/ListUserPoolsCommand";
import { ListUsersCommand } from "./commands/ListUsersCommand";
import { ListUsersInGroupCommand, } from "./commands/ListUsersInGroupCommand";
import { ResendConfirmationCodeCommand, } from "./commands/ResendConfirmationCodeCommand";
import { RespondToAuthChallengeCommand, } from "./commands/RespondToAuthChallengeCommand";
import { SetRiskConfigurationCommand, } from "./commands/SetRiskConfigurationCommand";
import { SetUICustomizationCommand, } from "./commands/SetUICustomizationCommand";
import { SetUserMFAPreferenceCommand, } from "./commands/SetUserMFAPreferenceCommand";
import { SetUserPoolMfaConfigCommand, } from "./commands/SetUserPoolMfaConfigCommand";
import { SetUserSettingsCommand, } from "./commands/SetUserSettingsCommand";
import { SignUpCommand } from "./commands/SignUpCommand";
import { StartUserImportJobCommand, } from "./commands/StartUserImportJobCommand";
import { StopUserImportJobCommand, } from "./commands/StopUserImportJobCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateAuthEventFeedbackCommand, } from "./commands/UpdateAuthEventFeedbackCommand";
import { UpdateDeviceStatusCommand, } from "./commands/UpdateDeviceStatusCommand";
import { UpdateGroupCommand } from "./commands/UpdateGroupCommand";
import { UpdateIdentityProviderCommand, } from "./commands/UpdateIdentityProviderCommand";
import { UpdateResourceServerCommand, } from "./commands/UpdateResourceServerCommand";
import { UpdateUserAttributesCommand, } from "./commands/UpdateUserAttributesCommand";
import { UpdateUserPoolClientCommand, } from "./commands/UpdateUserPoolClientCommand";
import { UpdateUserPoolCommand, } from "./commands/UpdateUserPoolCommand";
import { UpdateUserPoolDomainCommand, } from "./commands/UpdateUserPoolDomainCommand";
import { VerifySoftwareTokenCommand, } from "./commands/VerifySoftwareTokenCommand";
import { VerifyUserAttributeCommand, } from "./commands/VerifyUserAttributeCommand";
/**
 * <p>Using the Amazon Cognito User Pools API, you can create a user pool to manage
 *             directories and users. You can authenticate a user to obtain tokens related to user
 *             identity and access policies.</p>
 *         <p>This API reference provides information about user pools in Amazon Cognito User
 *             Pools.</p>
 *         <p>For more information, see the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html">Amazon Cognito Documentation</a>.</p>
 */
var CognitoIdentityProvider = /** @class */ (function (_super) {
    __extends(CognitoIdentityProvider, _super);
    function CognitoIdentityProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CognitoIdentityProvider.prototype.addCustomAttributes = function (args, optionsOrCb, cb) {
        var command = new AddCustomAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminAddUserToGroup = function (args, optionsOrCb, cb) {
        var command = new AdminAddUserToGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminConfirmSignUp = function (args, optionsOrCb, cb) {
        var command = new AdminConfirmSignUpCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminCreateUser = function (args, optionsOrCb, cb) {
        var command = new AdminCreateUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminDeleteUser = function (args, optionsOrCb, cb) {
        var command = new AdminDeleteUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminDeleteUserAttributes = function (args, optionsOrCb, cb) {
        var command = new AdminDeleteUserAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminDisableProviderForUser = function (args, optionsOrCb, cb) {
        var command = new AdminDisableProviderForUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminDisableUser = function (args, optionsOrCb, cb) {
        var command = new AdminDisableUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminEnableUser = function (args, optionsOrCb, cb) {
        var command = new AdminEnableUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminForgetDevice = function (args, optionsOrCb, cb) {
        var command = new AdminForgetDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminGetDevice = function (args, optionsOrCb, cb) {
        var command = new AdminGetDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminGetUser = function (args, optionsOrCb, cb) {
        var command = new AdminGetUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminInitiateAuth = function (args, optionsOrCb, cb) {
        var command = new AdminInitiateAuthCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminLinkProviderForUser = function (args, optionsOrCb, cb) {
        var command = new AdminLinkProviderForUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminListDevices = function (args, optionsOrCb, cb) {
        var command = new AdminListDevicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminListGroupsForUser = function (args, optionsOrCb, cb) {
        var command = new AdminListGroupsForUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminListUserAuthEvents = function (args, optionsOrCb, cb) {
        var command = new AdminListUserAuthEventsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminRemoveUserFromGroup = function (args, optionsOrCb, cb) {
        var command = new AdminRemoveUserFromGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminResetUserPassword = function (args, optionsOrCb, cb) {
        var command = new AdminResetUserPasswordCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminRespondToAuthChallenge = function (args, optionsOrCb, cb) {
        var command = new AdminRespondToAuthChallengeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminSetUserMFAPreference = function (args, optionsOrCb, cb) {
        var command = new AdminSetUserMFAPreferenceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminSetUserPassword = function (args, optionsOrCb, cb) {
        var command = new AdminSetUserPasswordCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminSetUserSettings = function (args, optionsOrCb, cb) {
        var command = new AdminSetUserSettingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminUpdateAuthEventFeedback = function (args, optionsOrCb, cb) {
        var command = new AdminUpdateAuthEventFeedbackCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminUpdateDeviceStatus = function (args, optionsOrCb, cb) {
        var command = new AdminUpdateDeviceStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminUpdateUserAttributes = function (args, optionsOrCb, cb) {
        var command = new AdminUpdateUserAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.adminUserGlobalSignOut = function (args, optionsOrCb, cb) {
        var command = new AdminUserGlobalSignOutCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.associateSoftwareToken = function (args, optionsOrCb, cb) {
        var command = new AssociateSoftwareTokenCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.changePassword = function (args, optionsOrCb, cb) {
        var command = new ChangePasswordCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.confirmDevice = function (args, optionsOrCb, cb) {
        var command = new ConfirmDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.confirmForgotPassword = function (args, optionsOrCb, cb) {
        var command = new ConfirmForgotPasswordCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.confirmSignUp = function (args, optionsOrCb, cb) {
        var command = new ConfirmSignUpCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.createGroup = function (args, optionsOrCb, cb) {
        var command = new CreateGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.createIdentityProvider = function (args, optionsOrCb, cb) {
        var command = new CreateIdentityProviderCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.createResourceServer = function (args, optionsOrCb, cb) {
        var command = new CreateResourceServerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.createUserImportJob = function (args, optionsOrCb, cb) {
        var command = new CreateUserImportJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.createUserPool = function (args, optionsOrCb, cb) {
        var command = new CreateUserPoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.createUserPoolClient = function (args, optionsOrCb, cb) {
        var command = new CreateUserPoolClientCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.createUserPoolDomain = function (args, optionsOrCb, cb) {
        var command = new CreateUserPoolDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.deleteGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.deleteIdentityProvider = function (args, optionsOrCb, cb) {
        var command = new DeleteIdentityProviderCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.deleteResourceServer = function (args, optionsOrCb, cb) {
        var command = new DeleteResourceServerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.deleteUser = function (args, optionsOrCb, cb) {
        var command = new DeleteUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.deleteUserAttributes = function (args, optionsOrCb, cb) {
        var command = new DeleteUserAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.deleteUserPool = function (args, optionsOrCb, cb) {
        var command = new DeleteUserPoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.deleteUserPoolClient = function (args, optionsOrCb, cb) {
        var command = new DeleteUserPoolClientCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.deleteUserPoolDomain = function (args, optionsOrCb, cb) {
        var command = new DeleteUserPoolDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.describeIdentityProvider = function (args, optionsOrCb, cb) {
        var command = new DescribeIdentityProviderCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.describeResourceServer = function (args, optionsOrCb, cb) {
        var command = new DescribeResourceServerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.describeRiskConfiguration = function (args, optionsOrCb, cb) {
        var command = new DescribeRiskConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.describeUserImportJob = function (args, optionsOrCb, cb) {
        var command = new DescribeUserImportJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.describeUserPool = function (args, optionsOrCb, cb) {
        var command = new DescribeUserPoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.describeUserPoolClient = function (args, optionsOrCb, cb) {
        var command = new DescribeUserPoolClientCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.describeUserPoolDomain = function (args, optionsOrCb, cb) {
        var command = new DescribeUserPoolDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.forgetDevice = function (args, optionsOrCb, cb) {
        var command = new ForgetDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.forgotPassword = function (args, optionsOrCb, cb) {
        var command = new ForgotPasswordCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.getCSVHeader = function (args, optionsOrCb, cb) {
        var command = new GetCSVHeaderCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.getDevice = function (args, optionsOrCb, cb) {
        var command = new GetDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.getGroup = function (args, optionsOrCb, cb) {
        var command = new GetGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.getIdentityProviderByIdentifier = function (args, optionsOrCb, cb) {
        var command = new GetIdentityProviderByIdentifierCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.getSigningCertificate = function (args, optionsOrCb, cb) {
        var command = new GetSigningCertificateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.getUICustomization = function (args, optionsOrCb, cb) {
        var command = new GetUICustomizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.getUser = function (args, optionsOrCb, cb) {
        var command = new GetUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.getUserAttributeVerificationCode = function (args, optionsOrCb, cb) {
        var command = new GetUserAttributeVerificationCodeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.getUserPoolMfaConfig = function (args, optionsOrCb, cb) {
        var command = new GetUserPoolMfaConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.globalSignOut = function (args, optionsOrCb, cb) {
        var command = new GlobalSignOutCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.initiateAuth = function (args, optionsOrCb, cb) {
        var command = new InitiateAuthCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.listDevices = function (args, optionsOrCb, cb) {
        var command = new ListDevicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.listGroups = function (args, optionsOrCb, cb) {
        var command = new ListGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.listIdentityProviders = function (args, optionsOrCb, cb) {
        var command = new ListIdentityProvidersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.listResourceServers = function (args, optionsOrCb, cb) {
        var command = new ListResourceServersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
        var command = new ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.listUserImportJobs = function (args, optionsOrCb, cb) {
        var command = new ListUserImportJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.listUserPoolClients = function (args, optionsOrCb, cb) {
        var command = new ListUserPoolClientsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.listUserPools = function (args, optionsOrCb, cb) {
        var command = new ListUserPoolsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.listUsers = function (args, optionsOrCb, cb) {
        var command = new ListUsersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.listUsersInGroup = function (args, optionsOrCb, cb) {
        var command = new ListUsersInGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.resendConfirmationCode = function (args, optionsOrCb, cb) {
        var command = new ResendConfirmationCodeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.respondToAuthChallenge = function (args, optionsOrCb, cb) {
        var command = new RespondToAuthChallengeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.setRiskConfiguration = function (args, optionsOrCb, cb) {
        var command = new SetRiskConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.setUICustomization = function (args, optionsOrCb, cb) {
        var command = new SetUICustomizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.setUserMFAPreference = function (args, optionsOrCb, cb) {
        var command = new SetUserMFAPreferenceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.setUserPoolMfaConfig = function (args, optionsOrCb, cb) {
        var command = new SetUserPoolMfaConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.setUserSettings = function (args, optionsOrCb, cb) {
        var command = new SetUserSettingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.signUp = function (args, optionsOrCb, cb) {
        var command = new SignUpCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.startUserImportJob = function (args, optionsOrCb, cb) {
        var command = new StartUserImportJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.stopUserImportJob = function (args, optionsOrCb, cb) {
        var command = new StopUserImportJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.tagResource = function (args, optionsOrCb, cb) {
        var command = new TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.untagResource = function (args, optionsOrCb, cb) {
        var command = new UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.updateAuthEventFeedback = function (args, optionsOrCb, cb) {
        var command = new UpdateAuthEventFeedbackCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.updateDeviceStatus = function (args, optionsOrCb, cb) {
        var command = new UpdateDeviceStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.updateGroup = function (args, optionsOrCb, cb) {
        var command = new UpdateGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.updateIdentityProvider = function (args, optionsOrCb, cb) {
        var command = new UpdateIdentityProviderCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.updateResourceServer = function (args, optionsOrCb, cb) {
        var command = new UpdateResourceServerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.updateUserAttributes = function (args, optionsOrCb, cb) {
        var command = new UpdateUserAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.updateUserPool = function (args, optionsOrCb, cb) {
        var command = new UpdateUserPoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.updateUserPoolClient = function (args, optionsOrCb, cb) {
        var command = new UpdateUserPoolClientCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.updateUserPoolDomain = function (args, optionsOrCb, cb) {
        var command = new UpdateUserPoolDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.verifySoftwareToken = function (args, optionsOrCb, cb) {
        var command = new VerifySoftwareTokenCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    CognitoIdentityProvider.prototype.verifyUserAttribute = function (args, optionsOrCb, cb) {
        var command = new VerifyUserAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return CognitoIdentityProvider;
}(CognitoIdentityProviderClient));
export { CognitoIdentityProvider };
//# sourceMappingURL=CognitoIdentityProvider.js.map