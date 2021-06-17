import { __extends } from "tslib";
import { DeleteSnapshotRequest } from "../models/models_2";
import { deserializeAws_ec2DeleteSnapshotCommand, serializeAws_ec2DeleteSnapshotCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified snapshot.</p>
 *          <p>When you make periodic snapshots of a volume, the snapshots are incremental, and only the
 *       blocks on the device that have changed since your last snapshot are saved in the new snapshot.
 *       When you delete a snapshot, only the data not needed for any other snapshot is removed. So
 *       regardless of which prior snapshots have been deleted, all active snapshots will have access
 *       to all the information needed to restore the volume.</p>
 *          <p>You cannot delete a snapshot of the root device of an EBS volume used by a registered AMI.
 *       You must first de-register the AMI before you can delete the snapshot.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-deleting-snapshot.html">Deleting an Amazon EBS snapshot</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteSnapshotCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteSnapshotCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteSnapshotCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSnapshotCommand = /** @class */ (function (_super) {
    __extends(DeleteSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSnapshotCommand(input) {
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
    DeleteSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteSnapshotCommand(input, context);
    };
    DeleteSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteSnapshotCommand(output, context);
    };
    return DeleteSnapshotCommand;
}($Command));
export { DeleteSnapshotCommand };
//# sourceMappingURL=DeleteSnapshotCommand.js.map