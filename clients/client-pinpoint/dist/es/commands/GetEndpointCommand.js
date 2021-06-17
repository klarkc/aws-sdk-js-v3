import { __extends } from "tslib";
import { GetEndpointRequest, GetEndpointResponse } from "../models/models_0";
import { deserializeAws_restJson1GetEndpointCommand, serializeAws_restJson1GetEndpointCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the settings and attributes of a specific endpoint for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetEndpointCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetEndpointCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEndpointCommandInput} for command's `input` shape.
 * @see {@link GetEndpointCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEndpointCommand = /** @class */ (function (_super) {
    __extends(GetEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEndpointCommand(input) {
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
    GetEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetEndpointResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetEndpointCommand(input, context);
    };
    GetEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetEndpointCommand(output, context);
    };
    return GetEndpointCommand;
}($Command));
export { GetEndpointCommand };
//# sourceMappingURL=GetEndpointCommand.js.map