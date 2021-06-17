import { __extends } from "tslib";
import { GetSystemInstanceRequest, GetSystemInstanceResponse } from "../models/models_0";
import { deserializeAws_json1_1GetSystemInstanceCommand, serializeAws_json1_1GetSystemInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a system instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetSystemInstanceCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetSystemInstanceCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new GetSystemInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSystemInstanceCommandInput} for command's `input` shape.
 * @see {@link GetSystemInstanceCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSystemInstanceCommand = /** @class */ (function (_super) {
    __extends(GetSystemInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSystemInstanceCommand(input) {
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
    GetSystemInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "GetSystemInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSystemInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSystemInstanceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSystemInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetSystemInstanceCommand(input, context);
    };
    GetSystemInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetSystemInstanceCommand(output, context);
    };
    return GetSystemInstanceCommand;
}($Command));
export { GetSystemInstanceCommand };
//# sourceMappingURL=GetSystemInstanceCommand.js.map