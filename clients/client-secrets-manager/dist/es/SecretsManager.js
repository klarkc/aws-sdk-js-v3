import { __extends } from "tslib";
import { SecretsManagerClient } from "./SecretsManagerClient";
import { CancelRotateSecretCommand, } from "./commands/CancelRotateSecretCommand";
import { CreateSecretCommand, } from "./commands/CreateSecretCommand";
import { DeleteResourcePolicyCommand, } from "./commands/DeleteResourcePolicyCommand";
import { DeleteSecretCommand, } from "./commands/DeleteSecretCommand";
import { DescribeSecretCommand, } from "./commands/DescribeSecretCommand";
import { GetRandomPasswordCommand, } from "./commands/GetRandomPasswordCommand";
import { GetResourcePolicyCommand, } from "./commands/GetResourcePolicyCommand";
import { GetSecretValueCommand, } from "./commands/GetSecretValueCommand";
import { ListSecretVersionIdsCommand, } from "./commands/ListSecretVersionIdsCommand";
import { ListSecretsCommand } from "./commands/ListSecretsCommand";
import { PutResourcePolicyCommand, } from "./commands/PutResourcePolicyCommand";
import { PutSecretValueCommand, } from "./commands/PutSecretValueCommand";
import { RemoveRegionsFromReplicationCommand, } from "./commands/RemoveRegionsFromReplicationCommand";
import { ReplicateSecretToRegionsCommand, } from "./commands/ReplicateSecretToRegionsCommand";
import { RestoreSecretCommand, } from "./commands/RestoreSecretCommand";
import { RotateSecretCommand, } from "./commands/RotateSecretCommand";
import { StopReplicationToReplicaCommand, } from "./commands/StopReplicationToReplicaCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateSecretCommand, } from "./commands/UpdateSecretCommand";
import { UpdateSecretVersionStageCommand, } from "./commands/UpdateSecretVersionStageCommand";
import { ValidateResourcePolicyCommand, } from "./commands/ValidateResourcePolicyCommand";
/**
 * <fullname>AWS Secrets Manager API Reference</fullname>
 *          <p>AWS Secrets Manager provides a service to enable you to store, manage, and retrieve, secrets.</p>
 *
 *          <p>This guide provides descriptions of the Secrets Manager API. For more information about using this
 *       service, see the <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/introduction.html">AWS Secrets Manager User Guide</a>.</p>
 *
 *          <p>
 *             <b>API Version</b>
 *          </p>
 *
 *          <p>This version of the Secrets Manager API Reference documents the Secrets Manager API version 2017-10-17.</p>
 *          <note>
 *             <p>As an alternative to using the API, you can use one of the AWS SDKs, which consist of
 *         libraries and sample code for various programming languages and platforms such as Java,
 *         Ruby, .NET, iOS, and Android. The SDKs provide a convenient way to create programmatic
 *         access to AWS Secrets Manager. For example, the SDKs provide cryptographically signing requests,
 *         managing errors, and retrying requests automatically. For more information about the AWS
 *         SDKs, including downloading and installing them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          </note>
 *          <p>We recommend you use the AWS SDKs to make programmatic API calls to Secrets Manager. However, you
 *       also can use the Secrets Manager HTTP Query API to make direct calls to the Secrets Manager web service. To learn
 *       more about the Secrets Manager HTTP Query API, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/query-requests.html">Making Query Requests</a> in the
 *         <i>AWS Secrets Manager User Guide</i>. </p>
 *          <p>Secrets Manager API supports GET and POST requests for all actions, and doesn't require you to use
 *       GET for some actions and POST for others. However, GET requests are subject to the limitation
 *       size of a URL. Therefore, for operations that require larger sizes, use a POST request.</p>
 *
 *
 *
 *
 *
 *
 *
 *          <p>
 *             <b>Support and Feedback for AWS Secrets Manager</b>
 *          </p>
 *
 *          <p>We welcome your feedback. Send your comments to <a href="mailto:awssecretsmanager-feedback@amazon.com">awssecretsmanager-feedback@amazon.com</a>, or post your feedback and questions in the <a href="http://forums.aws.amazon.com/forum.jspa?forumID=296">AWS Secrets Manager Discussion Forum</a>. For more
 *       information about the AWS Discussion Forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums
 *         Help</a>.</p>
 *
 *          <p>
 *             <b>How examples are presented</b>
 *          </p>
 *
 *          <p>The JSON that AWS Secrets Manager expects as your request parameters and the service returns as a
 *       response to HTTP query requests contain single, long strings without line breaks or white
 *       space formatting. The JSON shown in the examples displays the code formatted with both line
 *       breaks and white space to improve readability. When example input parameters can also cause
 *       long strings extending beyond the screen, you can insert line breaks to enhance readability.
 *       You should always submit the input as a single JSON text string.</p>
 *
 *
 *          <p>
 *             <b>Logging API Requests</b>
 *          </p>
 *          <p>AWS Secrets Manager supports AWS CloudTrail, a service that records AWS API calls for your AWS
 *       account and delivers log files to an Amazon S3 bucket. By using information that's collected
 *       by AWS CloudTrail, you can determine the requests successfully made to Secrets Manager, who made the
 *       request, when it was made, and so on. For more about AWS Secrets Manager and support for AWS
 *       CloudTrail, see <a href="http://docs.aws.amazon.com/secretsmanager/latest/userguide/monitoring.html#monitoring_cloudtrail">Logging
 *         AWS Secrets Manager Events with AWS CloudTrail</a> in the <i>AWS Secrets Manager User Guide</i>.
 *       To learn more about CloudTrail, including enabling it and find your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">AWS CloudTrail User Guide</a>.</p>
 */
var SecretsManager = /** @class */ (function (_super) {
    __extends(SecretsManager, _super);
    function SecretsManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecretsManager.prototype.cancelRotateSecret = function (args, optionsOrCb, cb) {
        var command = new CancelRotateSecretCommand(args);
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
    SecretsManager.prototype.createSecret = function (args, optionsOrCb, cb) {
        var command = new CreateSecretCommand(args);
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
    SecretsManager.prototype.deleteResourcePolicy = function (args, optionsOrCb, cb) {
        var command = new DeleteResourcePolicyCommand(args);
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
    SecretsManager.prototype.deleteSecret = function (args, optionsOrCb, cb) {
        var command = new DeleteSecretCommand(args);
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
    SecretsManager.prototype.describeSecret = function (args, optionsOrCb, cb) {
        var command = new DescribeSecretCommand(args);
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
    SecretsManager.prototype.getRandomPassword = function (args, optionsOrCb, cb) {
        var command = new GetRandomPasswordCommand(args);
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
    SecretsManager.prototype.getResourcePolicy = function (args, optionsOrCb, cb) {
        var command = new GetResourcePolicyCommand(args);
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
    SecretsManager.prototype.getSecretValue = function (args, optionsOrCb, cb) {
        var command = new GetSecretValueCommand(args);
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
    SecretsManager.prototype.listSecrets = function (args, optionsOrCb, cb) {
        var command = new ListSecretsCommand(args);
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
    SecretsManager.prototype.listSecretVersionIds = function (args, optionsOrCb, cb) {
        var command = new ListSecretVersionIdsCommand(args);
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
    SecretsManager.prototype.putResourcePolicy = function (args, optionsOrCb, cb) {
        var command = new PutResourcePolicyCommand(args);
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
    SecretsManager.prototype.putSecretValue = function (args, optionsOrCb, cb) {
        var command = new PutSecretValueCommand(args);
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
    SecretsManager.prototype.removeRegionsFromReplication = function (args, optionsOrCb, cb) {
        var command = new RemoveRegionsFromReplicationCommand(args);
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
    SecretsManager.prototype.replicateSecretToRegions = function (args, optionsOrCb, cb) {
        var command = new ReplicateSecretToRegionsCommand(args);
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
    SecretsManager.prototype.restoreSecret = function (args, optionsOrCb, cb) {
        var command = new RestoreSecretCommand(args);
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
    SecretsManager.prototype.rotateSecret = function (args, optionsOrCb, cb) {
        var command = new RotateSecretCommand(args);
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
    SecretsManager.prototype.stopReplicationToReplica = function (args, optionsOrCb, cb) {
        var command = new StopReplicationToReplicaCommand(args);
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
    SecretsManager.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    SecretsManager.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    SecretsManager.prototype.updateSecret = function (args, optionsOrCb, cb) {
        var command = new UpdateSecretCommand(args);
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
    SecretsManager.prototype.updateSecretVersionStage = function (args, optionsOrCb, cb) {
        var command = new UpdateSecretVersionStageCommand(args);
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
    SecretsManager.prototype.validateResourcePolicy = function (args, optionsOrCb, cb) {
        var command = new ValidateResourcePolicyCommand(args);
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
    return SecretsManager;
}(SecretsManagerClient));
export { SecretsManager };
//# sourceMappingURL=SecretsManager.js.map