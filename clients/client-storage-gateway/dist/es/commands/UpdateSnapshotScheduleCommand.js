import { __extends } from "tslib";
import { UpdateSnapshotScheduleInput, UpdateSnapshotScheduleOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateSnapshotScheduleCommand, serializeAws_json1_1UpdateSnapshotScheduleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a snapshot schedule configured for a gateway volume. This operation is only
 *          supported in the cached volume and stored volume gateway types.</p>
 *
 *          <p>The default snapshot schedule for volume is once every 24 hours, starting at the
 *          creation time of the volume. You can use this API to change the snapshot schedule
 *          configured for the volume.</p>
 *
 *          <p>In the request you must identify the gateway volume whose snapshot schedule you want to
 *          update, and the schedule information, including when you want the snapshot to begin on a
 *          day and the frequency (in hours) of snapshots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateSnapshotScheduleCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateSnapshotScheduleCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateSnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSnapshotScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateSnapshotScheduleCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSnapshotScheduleCommand = /** @class */ (function (_super) {
    __extends(UpdateSnapshotScheduleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSnapshotScheduleCommand(input) {
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
    UpdateSnapshotScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "UpdateSnapshotScheduleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSnapshotScheduleInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSnapshotScheduleOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSnapshotScheduleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateSnapshotScheduleCommand(input, context);
    };
    UpdateSnapshotScheduleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateSnapshotScheduleCommand(output, context);
    };
    return UpdateSnapshotScheduleCommand;
}($Command));
export { UpdateSnapshotScheduleCommand };
//# sourceMappingURL=UpdateSnapshotScheduleCommand.js.map