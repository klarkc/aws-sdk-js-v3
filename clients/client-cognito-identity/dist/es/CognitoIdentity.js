import { __extends } from "tslib";
import { CognitoIdentityClient } from "./CognitoIdentityClient";
import { CreateIdentityPoolCommand, } from "./commands/CreateIdentityPoolCommand";
import { DeleteIdentitiesCommand, } from "./commands/DeleteIdentitiesCommand";
import { DeleteIdentityPoolCommand, } from "./commands/DeleteIdentityPoolCommand";
import { DescribeIdentityCommand, } from "./commands/DescribeIdentityCommand";
import { DescribeIdentityPoolCommand, } from "./commands/DescribeIdentityPoolCommand";
import { GetCredentialsForIdentityCommand, } from "./commands/GetCredentialsForIdentityCommand";
import { GetIdCommand } from "./commands/GetIdCommand";
import { GetIdentityPoolRolesCommand, } from "./commands/GetIdentityPoolRolesCommand";
import { GetOpenIdTokenCommand, } from "./commands/GetOpenIdTokenCommand";
import { GetOpenIdTokenForDeveloperIdentityCommand, } from "./commands/GetOpenIdTokenForDeveloperIdentityCommand";
import { GetPrincipalTagAttributeMapCommand, } from "./commands/GetPrincipalTagAttributeMapCommand";
import { ListIdentitiesCommand, } from "./commands/ListIdentitiesCommand";
import { ListIdentityPoolsCommand, } from "./commands/ListIdentityPoolsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { LookupDeveloperIdentityCommand, } from "./commands/LookupDeveloperIdentityCommand";
import { MergeDeveloperIdentitiesCommand, } from "./commands/MergeDeveloperIdentitiesCommand";
import { SetIdentityPoolRolesCommand, } from "./commands/SetIdentityPoolRolesCommand";
import { SetPrincipalTagAttributeMapCommand, } from "./commands/SetPrincipalTagAttributeMapCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UnlinkDeveloperIdentityCommand, } from "./commands/UnlinkDeveloperIdentityCommand";
import { UnlinkIdentityCommand, } from "./commands/UnlinkIdentityCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateIdentityPoolCommand, } from "./commands/UpdateIdentityPoolCommand";
/**
 * <fullname>Amazon Cognito Federated Identities</fullname>
 *          <p>Amazon Cognito Federated Identities is a web service that delivers scoped temporary
 *          credentials to mobile devices and other untrusted environments. It uniquely identifies a
 *          device and supplies the user with a consistent identity over the lifetime of an
 *          application.</p>
 *          <p>Using Amazon Cognito Federated Identities, you can enable authentication with one or
 *          more third-party identity providers (Facebook, Google, or Login with Amazon) or an Amazon
 *          Cognito user pool, and you can also choose to support unauthenticated access from your app.
 *          Cognito delivers a unique identifier for each user and acts as an OpenID token provider
 *          trusted by AWS Security Token Service (STS) to access temporary, limited-privilege AWS
 *          credentials.</p>
 *          <p>For a description of the authentication flow from the Amazon Cognito Developer Guide
 *          see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html">Authentication Flow</a>.</p>
 *          <p>For more information see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html">Amazon Cognito Federated Identities</a>.</p>
 */
var CognitoIdentity = /** @class */ (function (_super) {
    __extends(CognitoIdentity, _super);
    function CognitoIdentity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CognitoIdentity.prototype.createIdentityPool = function (args, optionsOrCb, cb) {
        var command = new CreateIdentityPoolCommand(args);
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
    CognitoIdentity.prototype.deleteIdentities = function (args, optionsOrCb, cb) {
        var command = new DeleteIdentitiesCommand(args);
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
    CognitoIdentity.prototype.deleteIdentityPool = function (args, optionsOrCb, cb) {
        var command = new DeleteIdentityPoolCommand(args);
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
    CognitoIdentity.prototype.describeIdentity = function (args, optionsOrCb, cb) {
        var command = new DescribeIdentityCommand(args);
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
    CognitoIdentity.prototype.describeIdentityPool = function (args, optionsOrCb, cb) {
        var command = new DescribeIdentityPoolCommand(args);
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
    CognitoIdentity.prototype.getCredentialsForIdentity = function (args, optionsOrCb, cb) {
        var command = new GetCredentialsForIdentityCommand(args);
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
    CognitoIdentity.prototype.getId = function (args, optionsOrCb, cb) {
        var command = new GetIdCommand(args);
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
    CognitoIdentity.prototype.getIdentityPoolRoles = function (args, optionsOrCb, cb) {
        var command = new GetIdentityPoolRolesCommand(args);
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
    CognitoIdentity.prototype.getOpenIdToken = function (args, optionsOrCb, cb) {
        var command = new GetOpenIdTokenCommand(args);
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
    CognitoIdentity.prototype.getOpenIdTokenForDeveloperIdentity = function (args, optionsOrCb, cb) {
        var command = new GetOpenIdTokenForDeveloperIdentityCommand(args);
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
    CognitoIdentity.prototype.getPrincipalTagAttributeMap = function (args, optionsOrCb, cb) {
        var command = new GetPrincipalTagAttributeMapCommand(args);
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
    CognitoIdentity.prototype.listIdentities = function (args, optionsOrCb, cb) {
        var command = new ListIdentitiesCommand(args);
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
    CognitoIdentity.prototype.listIdentityPools = function (args, optionsOrCb, cb) {
        var command = new ListIdentityPoolsCommand(args);
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
    CognitoIdentity.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    CognitoIdentity.prototype.lookupDeveloperIdentity = function (args, optionsOrCb, cb) {
        var command = new LookupDeveloperIdentityCommand(args);
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
    CognitoIdentity.prototype.mergeDeveloperIdentities = function (args, optionsOrCb, cb) {
        var command = new MergeDeveloperIdentitiesCommand(args);
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
    CognitoIdentity.prototype.setIdentityPoolRoles = function (args, optionsOrCb, cb) {
        var command = new SetIdentityPoolRolesCommand(args);
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
    CognitoIdentity.prototype.setPrincipalTagAttributeMap = function (args, optionsOrCb, cb) {
        var command = new SetPrincipalTagAttributeMapCommand(args);
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
    CognitoIdentity.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    CognitoIdentity.prototype.unlinkDeveloperIdentity = function (args, optionsOrCb, cb) {
        var command = new UnlinkDeveloperIdentityCommand(args);
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
    CognitoIdentity.prototype.unlinkIdentity = function (args, optionsOrCb, cb) {
        var command = new UnlinkIdentityCommand(args);
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
    CognitoIdentity.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    CognitoIdentity.prototype.updateIdentityPool = function (args, optionsOrCb, cb) {
        var command = new UpdateIdentityPoolCommand(args);
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
    return CognitoIdentity;
}(CognitoIdentityClient));
export { CognitoIdentity };
//# sourceMappingURL=CognitoIdentity.js.map