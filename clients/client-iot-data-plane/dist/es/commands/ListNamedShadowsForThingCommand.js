import { __extends } from "tslib";
import { ListNamedShadowsForThingRequest, ListNamedShadowsForThingResponse } from "../models/models_0";
import { deserializeAws_restJson1ListNamedShadowsForThingCommand, serializeAws_restJson1ListNamedShadowsForThingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the shadows for the specified thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, ListNamedShadowsForThingCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, ListNamedShadowsForThingCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * const client = new IoTDataPlaneClient(config);
 * const command = new ListNamedShadowsForThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNamedShadowsForThingCommandInput} for command's `input` shape.
 * @see {@link ListNamedShadowsForThingCommandOutput} for command's `response` shape.
 * @see {@link IoTDataPlaneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListNamedShadowsForThingCommand = /** @class */ (function (_super) {
    __extends(ListNamedShadowsForThingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListNamedShadowsForThingCommand(input) {
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
    ListNamedShadowsForThingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTDataPlaneClient";
        var commandName = "ListNamedShadowsForThingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListNamedShadowsForThingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListNamedShadowsForThingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListNamedShadowsForThingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListNamedShadowsForThingCommand(input, context);
    };
    ListNamedShadowsForThingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListNamedShadowsForThingCommand(output, context);
    };
    return ListNamedShadowsForThingCommand;
}($Command));
export { ListNamedShadowsForThingCommand };
//# sourceMappingURL=ListNamedShadowsForThingCommand.js.map