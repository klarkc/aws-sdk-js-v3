import { __extends } from "tslib";
import { AttachVolumeInput, AttachVolumeOutput } from "../models/models_0";
import { deserializeAws_json1_1AttachVolumeCommand, serializeAws_json1_1AttachVolumeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Connects a volume to an iSCSI connection and then attaches the volume to the specified
 *          gateway. Detaching and attaching a volume enables you to recover your data from one gateway
 *          to a different gateway without creating a snapshot. It also makes it easier to move your
 *          volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, AttachVolumeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, AttachVolumeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new AttachVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachVolumeCommandInput} for command's `input` shape.
 * @see {@link AttachVolumeCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachVolumeCommand = /** @class */ (function (_super) {
    __extends(AttachVolumeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AttachVolumeCommand(input) {
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
    AttachVolumeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "AttachVolumeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AttachVolumeInput.filterSensitiveLog,
            outputFilterSensitiveLog: AttachVolumeOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AttachVolumeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AttachVolumeCommand(input, context);
    };
    AttachVolumeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AttachVolumeCommand(output, context);
    };
    return AttachVolumeCommand;
}($Command));
export { AttachVolumeCommand };
//# sourceMappingURL=AttachVolumeCommand.js.map