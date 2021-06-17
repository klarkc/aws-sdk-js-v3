import { __extends } from "tslib";
import { GetJourneyRequest, GetJourneyResponse } from "../models/models_0";
import { deserializeAws_restJson1GetJourneyCommand, serializeAws_restJson1GetJourneyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the status, configuration, and other settings for a journey.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetJourneyCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetJourneyCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetJourneyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJourneyCommandInput} for command's `input` shape.
 * @see {@link GetJourneyCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetJourneyCommand = /** @class */ (function (_super) {
    __extends(GetJourneyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetJourneyCommand(input) {
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
    GetJourneyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetJourneyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetJourneyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetJourneyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetJourneyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetJourneyCommand(input, context);
    };
    GetJourneyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetJourneyCommand(output, context);
    };
    return GetJourneyCommand;
}($Command));
export { GetJourneyCommand };
//# sourceMappingURL=GetJourneyCommand.js.map