import { __extends } from "tslib";
import { DeleteThingShadowRequest, DeleteThingShadowResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteThingShadowCommand, serializeAws_restJson1DeleteThingShadowCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the shadow for the specified thing.</p>
 *          <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_DeleteThingShadow.html">DeleteThingShadow</a> in the AWS IoT Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, DeleteThingShadowCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, DeleteThingShadowCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * const client = new IoTDataPlaneClient(config);
 * const command = new DeleteThingShadowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteThingShadowCommandInput} for command's `input` shape.
 * @see {@link DeleteThingShadowCommandOutput} for command's `response` shape.
 * @see {@link IoTDataPlaneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteThingShadowCommand = /** @class */ (function (_super) {
    __extends(DeleteThingShadowCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteThingShadowCommand(input) {
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
    DeleteThingShadowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTDataPlaneClient";
        var commandName = "DeleteThingShadowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteThingShadowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteThingShadowResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteThingShadowCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteThingShadowCommand(input, context);
    };
    DeleteThingShadowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteThingShadowCommand(output, context);
    };
    return DeleteThingShadowCommand;
}($Command));
export { DeleteThingShadowCommand };
//# sourceMappingURL=DeleteThingShadowCommand.js.map