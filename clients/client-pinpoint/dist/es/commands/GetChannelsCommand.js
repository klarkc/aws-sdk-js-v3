import { __extends } from "tslib";
import { GetChannelsRequest, GetChannelsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetChannelsCommand, serializeAws_restJson1GetChannelsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the history and status of each channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetChannelsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetChannelsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetChannelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetChannelsCommandInput} for command's `input` shape.
 * @see {@link GetChannelsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetChannelsCommand = /** @class */ (function (_super) {
    __extends(GetChannelsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetChannelsCommand(input) {
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
    GetChannelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetChannelsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetChannelsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetChannelsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetChannelsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetChannelsCommand(input, context);
    };
    GetChannelsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetChannelsCommand(output, context);
    };
    return GetChannelsCommand;
}($Command));
export { GetChannelsCommand };
//# sourceMappingURL=GetChannelsCommand.js.map