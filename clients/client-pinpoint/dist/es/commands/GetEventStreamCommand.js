import { __extends } from "tslib";
import { GetEventStreamRequest, GetEventStreamResponse } from "../models/models_0";
import { deserializeAws_restJson1GetEventStreamCommand, serializeAws_restJson1GetEventStreamCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the event stream settings for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetEventStreamCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetEventStreamCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetEventStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEventStreamCommandInput} for command's `input` shape.
 * @see {@link GetEventStreamCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEventStreamCommand = /** @class */ (function (_super) {
    __extends(GetEventStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEventStreamCommand(input) {
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
    GetEventStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetEventStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEventStreamRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetEventStreamResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEventStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetEventStreamCommand(input, context);
    };
    GetEventStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetEventStreamCommand(output, context);
    };
    return GetEventStreamCommand;
}($Command));
export { GetEventStreamCommand };
//# sourceMappingURL=GetEventStreamCommand.js.map