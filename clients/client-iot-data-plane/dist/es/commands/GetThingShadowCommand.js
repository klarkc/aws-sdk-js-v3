import { __extends } from "tslib";
import { GetThingShadowRequest, GetThingShadowResponse } from "../models/models_0";
import { deserializeAws_restJson1GetThingShadowCommand, serializeAws_restJson1GetThingShadowCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the shadow for the specified thing.</p>
 *          <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_GetThingShadow.html">GetThingShadow</a> in the
 *         AWS IoT Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, GetThingShadowCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, GetThingShadowCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * const client = new IoTDataPlaneClient(config);
 * const command = new GetThingShadowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetThingShadowCommandInput} for command's `input` shape.
 * @see {@link GetThingShadowCommandOutput} for command's `response` shape.
 * @see {@link IoTDataPlaneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetThingShadowCommand = /** @class */ (function (_super) {
    __extends(GetThingShadowCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetThingShadowCommand(input) {
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
    GetThingShadowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTDataPlaneClient";
        var commandName = "GetThingShadowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetThingShadowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetThingShadowResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetThingShadowCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetThingShadowCommand(input, context);
    };
    GetThingShadowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetThingShadowCommand(output, context);
    };
    return GetThingShadowCommand;
}($Command));
export { GetThingShadowCommand };
//# sourceMappingURL=GetThingShadowCommand.js.map