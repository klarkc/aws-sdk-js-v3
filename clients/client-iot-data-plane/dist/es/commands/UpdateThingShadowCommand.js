import { __extends } from "tslib";
import { UpdateThingShadowRequest, UpdateThingShadowResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateThingShadowCommand, serializeAws_restJson1UpdateThingShadowCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the shadow for the specified thing.</p>
 *          <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_UpdateThingShadow.html">UpdateThingShadow</a> in the
 *         AWS IoT Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, UpdateThingShadowCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, UpdateThingShadowCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * const client = new IoTDataPlaneClient(config);
 * const command = new UpdateThingShadowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateThingShadowCommandInput} for command's `input` shape.
 * @see {@link UpdateThingShadowCommandOutput} for command's `response` shape.
 * @see {@link IoTDataPlaneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateThingShadowCommand = /** @class */ (function (_super) {
    __extends(UpdateThingShadowCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateThingShadowCommand(input) {
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
    UpdateThingShadowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTDataPlaneClient";
        var commandName = "UpdateThingShadowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateThingShadowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateThingShadowResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateThingShadowCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateThingShadowCommand(input, context);
    };
    UpdateThingShadowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateThingShadowCommand(output, context);
    };
    return UpdateThingShadowCommand;
}($Command));
export { UpdateThingShadowCommand };
//# sourceMappingURL=UpdateThingShadowCommand.js.map