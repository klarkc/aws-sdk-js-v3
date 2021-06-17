import { __extends } from "tslib";
import { DeleteDiskSnapshotRequest, DeleteDiskSnapshotResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteDiskSnapshotCommand, serializeAws_json1_1DeleteDiskSnapshotCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified disk snapshot.</p>
 *          <p>When you make periodic snapshots of a disk, the snapshots are incremental, and only the
 *       blocks on the device that have changed since your last snapshot are saved in the new snapshot.
 *       When you delete a snapshot, only the data not needed for any other snapshot is removed. So
 *       regardless of which prior snapshots have been deleted, all active snapshots will have access
 *       to all the information needed to restore the disk.</p>
 *          <p>The <code>delete disk snapshot</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by <code>disk snapshot name</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteDiskSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteDiskSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteDiskSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDiskSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteDiskSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDiskSnapshotCommand = /** @class */ (function (_super) {
    __extends(DeleteDiskSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDiskSnapshotCommand(input) {
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
    DeleteDiskSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "DeleteDiskSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDiskSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDiskSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDiskSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteDiskSnapshotCommand(input, context);
    };
    DeleteDiskSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteDiskSnapshotCommand(output, context);
    };
    return DeleteDiskSnapshotCommand;
}($Command));
export { DeleteDiskSnapshotCommand };
//# sourceMappingURL=DeleteDiskSnapshotCommand.js.map