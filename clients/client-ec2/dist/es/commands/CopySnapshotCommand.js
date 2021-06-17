import { __extends } from "tslib";
import { CopySnapshotRequest, CopySnapshotResult } from "../models/models_0";
import { deserializeAws_ec2CopySnapshotCommand, serializeAws_ec2CopySnapshotCommand } from "../protocols/Aws_ec2";
import { getCopySnapshotPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Copies a point-in-time snapshot of an EBS volume and stores it in Amazon S3. You can copy a
 *       snapshot within the same Region, from one Region to another, or from a Region to an Outpost.
 *       You can't copy a snapshot from an Outpost to a Region, from one Outpost to another, or within
 *       the same Outpost.</p>
 *          <p>You can use the snapshot to create EBS volumes or Amazon Machine Images (AMIs).</p>
 *
 *
 *          <p>When copying snapshots to a Region, copies of encrypted EBS snapshots remain encrypted.
 *     	Copies of unencrypted snapshots remain unencrypted, unless you enable encryption for the
 *     	snapshot copy operation. By default, encrypted snapshot copies use the default AWS Key Management Service (AWS KMS)
 *     	customer master key (CMK); however, you can specify a different CMK. To copy an encrypted
 *     	snapshot that has been shared from another account, you must have permissions for the CMK
 *     	used to encrypt the snapshot.</p>
 *
 *   	      <p>Snapshots copied to an Outpost are encrypted by default using the default
 *   		encryption key for the Region, or a different key that you specify in the request using
 *   		<b>KmsKeyId</b>. Outposts do not support unencrypted
 *   		snapshots. For more information, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#ami">
 *   			Amazon EBS local snapshots on Outposts</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>Snapshots created by copying another snapshot have an arbitrary volume ID that should not
 *       be used for any purpose.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-copy-snapshot.html">Copying an Amazon EBS snapshot</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CopySnapshotCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CopySnapshotCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CopySnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopySnapshotCommandInput} for command's `input` shape.
 * @see {@link CopySnapshotCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CopySnapshotCommand = /** @class */ (function (_super) {
    __extends(CopySnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CopySnapshotCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    CopySnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getCopySnapshotPresignedUrlPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CopySnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CopySnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CopySnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CopySnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CopySnapshotCommand(input, context);
    };
    CopySnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CopySnapshotCommand(output, context);
    };
    return CopySnapshotCommand;
}($Command));
export { CopySnapshotCommand };
//# sourceMappingURL=CopySnapshotCommand.js.map