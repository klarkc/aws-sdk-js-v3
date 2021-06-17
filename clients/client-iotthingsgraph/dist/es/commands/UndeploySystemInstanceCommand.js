import { __extends } from "tslib";
import { UndeploySystemInstanceRequest, UndeploySystemInstanceResponse } from "../models/models_0";
import { deserializeAws_json1_1UndeploySystemInstanceCommand, serializeAws_json1_1UndeploySystemInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a system instance from its target (Cloud or Greengrass).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, UndeploySystemInstanceCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, UndeploySystemInstanceCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new UndeploySystemInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UndeploySystemInstanceCommandInput} for command's `input` shape.
 * @see {@link UndeploySystemInstanceCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UndeploySystemInstanceCommand = /** @class */ (function (_super) {
    __extends(UndeploySystemInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UndeploySystemInstanceCommand(input) {
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
    UndeploySystemInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "UndeploySystemInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UndeploySystemInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UndeploySystemInstanceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UndeploySystemInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UndeploySystemInstanceCommand(input, context);
    };
    UndeploySystemInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UndeploySystemInstanceCommand(output, context);
    };
    return UndeploySystemInstanceCommand;
}($Command));
export { UndeploySystemInstanceCommand };
//# sourceMappingURL=UndeploySystemInstanceCommand.js.map