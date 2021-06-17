import { __extends } from "tslib";
import { DeleteSnapshotScheduleInput, DeleteSnapshotScheduleOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteSnapshotScheduleCommand, serializeAws_json1_1DeleteSnapshotScheduleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a snapshot of a volume.</p>
 *
 *          <p>You can take snapshots of your gateway volumes on a scheduled or ad hoc basis. This API
 *          action enables you to delete a snapshot schedule for a volume. For more information, see
 *             <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/backing-up-volumes.html">Backing up your
 *             volumes</a>. In the <code>DeleteSnapshotSchedule</code> request, you identify the
 *          volume by providing its Amazon Resource Name (ARN). This operation is only supported in
 *          stored and cached volume gateway types.</p>
 *
 *          <note>
 *
 *             <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information,
 *             go to <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a>
 *             in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteSnapshotScheduleCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteSnapshotScheduleCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DeleteSnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSnapshotScheduleCommandInput} for command's `input` shape.
 * @see {@link DeleteSnapshotScheduleCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSnapshotScheduleCommand = /** @class */ (function (_super) {
    __extends(DeleteSnapshotScheduleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSnapshotScheduleCommand(input) {
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
    DeleteSnapshotScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DeleteSnapshotScheduleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSnapshotScheduleInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteSnapshotScheduleOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSnapshotScheduleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteSnapshotScheduleCommand(input, context);
    };
    DeleteSnapshotScheduleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteSnapshotScheduleCommand(output, context);
    };
    return DeleteSnapshotScheduleCommand;
}($Command));
export { DeleteSnapshotScheduleCommand };
//# sourceMappingURL=DeleteSnapshotScheduleCommand.js.map