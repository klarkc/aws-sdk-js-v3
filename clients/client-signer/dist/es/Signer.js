import { __extends } from "tslib";
import { SignerClient } from "./SignerClient";
import { AddProfilePermissionCommand, } from "./commands/AddProfilePermissionCommand";
import { CancelSigningProfileCommand, } from "./commands/CancelSigningProfileCommand";
import { DescribeSigningJobCommand, } from "./commands/DescribeSigningJobCommand";
import { GetSigningPlatformCommand, } from "./commands/GetSigningPlatformCommand";
import { GetSigningProfileCommand, } from "./commands/GetSigningProfileCommand";
import { ListProfilePermissionsCommand, } from "./commands/ListProfilePermissionsCommand";
import { ListSigningJobsCommand, } from "./commands/ListSigningJobsCommand";
import { ListSigningPlatformsCommand, } from "./commands/ListSigningPlatformsCommand";
import { ListSigningProfilesCommand, } from "./commands/ListSigningProfilesCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { PutSigningProfileCommand, } from "./commands/PutSigningProfileCommand";
import { RemoveProfilePermissionCommand, } from "./commands/RemoveProfilePermissionCommand";
import { RevokeSignatureCommand, } from "./commands/RevokeSignatureCommand";
import { RevokeSigningProfileCommand, } from "./commands/RevokeSigningProfileCommand";
import { StartSigningJobCommand, } from "./commands/StartSigningJobCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
/**
 * <p>AWS Signer is a fully managed code signing service to help you ensure the trust and
 * 			integrity of your code. </p>
 * 		       <p>AWS Signer supports the following applications:</p>
 *
 * 		       <p>With <i>code signing for AWS Lambda</i>, you can sign AWS Lambda
 * 			deployment packages. Integrated support is provided for Amazon S3, Amazon CloudWatch,
 * 			and AWS CloudTrail. In order to sign code, you create a signing profile and then use
 * 			Signer to sign Lambda zip files in S3. </p>
 *
 * 		       <p>With <i>code signing for IoT</i>, you can sign code for any IoT device that is
 * 			supported by AWS. IoT code signing is available for <a href="http://docs.aws.amazon.com/freertos/latest/userguide/">Amazon FreeRTOS</a> and <a href="http://docs.aws.amazon.com/iot/latest/developerguide/">AWS IoT Device Management</a>, and is
 * 			integrated with <a href="http://docs.aws.amazon.com/acm/latest/userguide/">AWS Certificate Manager (ACM)</a>. In order to sign
 * 			code, you import a third-party code signing certificate using ACM, and use that to
 * 			sign updates in Amazon FreeRTOS and AWS IoT Device Management. </p>
 * 		       <p>For more information about AWS Signer, see the <a href="http://docs.aws.amazon.com/signer/latest/developerguide/Welcome.html">AWS Signer Developer Guide</a>.</p>
 *
 * 		       <p></p>
 */
var Signer = /** @class */ (function (_super) {
    __extends(Signer, _super);
    function Signer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Signer.prototype.addProfilePermission = function (args, optionsOrCb, cb) {
        var command = new AddProfilePermissionCommand(args);
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
    Signer.prototype.cancelSigningProfile = function (args, optionsOrCb, cb) {
        var command = new CancelSigningProfileCommand(args);
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
    Signer.prototype.describeSigningJob = function (args, optionsOrCb, cb) {
        var command = new DescribeSigningJobCommand(args);
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
    Signer.prototype.getSigningPlatform = function (args, optionsOrCb, cb) {
        var command = new GetSigningPlatformCommand(args);
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
    Signer.prototype.getSigningProfile = function (args, optionsOrCb, cb) {
        var command = new GetSigningProfileCommand(args);
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
    Signer.prototype.listProfilePermissions = function (args, optionsOrCb, cb) {
        var command = new ListProfilePermissionsCommand(args);
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
    Signer.prototype.listSigningJobs = function (args, optionsOrCb, cb) {
        var command = new ListSigningJobsCommand(args);
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
    Signer.prototype.listSigningPlatforms = function (args, optionsOrCb, cb) {
        var command = new ListSigningPlatformsCommand(args);
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
    Signer.prototype.listSigningProfiles = function (args, optionsOrCb, cb) {
        var command = new ListSigningProfilesCommand(args);
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
    Signer.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    Signer.prototype.putSigningProfile = function (args, optionsOrCb, cb) {
        var command = new PutSigningProfileCommand(args);
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
    Signer.prototype.removeProfilePermission = function (args, optionsOrCb, cb) {
        var command = new RemoveProfilePermissionCommand(args);
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
    Signer.prototype.revokeSignature = function (args, optionsOrCb, cb) {
        var command = new RevokeSignatureCommand(args);
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
    Signer.prototype.revokeSigningProfile = function (args, optionsOrCb, cb) {
        var command = new RevokeSigningProfileCommand(args);
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
    Signer.prototype.startSigningJob = function (args, optionsOrCb, cb) {
        var command = new StartSigningJobCommand(args);
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
    Signer.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    Signer.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    return Signer;
}(SignerClient));
export { Signer };
//# sourceMappingURL=Signer.js.map