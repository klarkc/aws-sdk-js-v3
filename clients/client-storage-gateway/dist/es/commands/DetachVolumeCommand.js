import { __extends } from "tslib";
import { DetachVolumeInput, DetachVolumeOutput } from "../models/models_0";
import { deserializeAws_json1_1DetachVolumeCommand, serializeAws_json1_1DetachVolumeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disconnects a volume from an iSCSI connection and then detaches the volume from the
 *          specified gateway. Detaching and attaching a volume enables you to recover your data from
 *          one gateway to a different gateway without creating a snapshot. It also makes it easier to
 *          move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2
 *          instance. This operation is only supported in the volume gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DetachVolumeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DetachVolumeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DetachVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachVolumeCommandInput} for command's `input` shape.
 * @see {@link DetachVolumeCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachVolumeCommand = /** @class */ (function (_super) {
    __extends(DetachVolumeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DetachVolumeCommand(input) {
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
    DetachVolumeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DetachVolumeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DetachVolumeInput.filterSensitiveLog,
            outputFilterSensitiveLog: DetachVolumeOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DetachVolumeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DetachVolumeCommand(input, context);
    };
    DetachVolumeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DetachVolumeCommand(output, context);
    };
    return DetachVolumeCommand;
}($Command));
export { DetachVolumeCommand };
//# sourceMappingURL=DetachVolumeCommand.js.map