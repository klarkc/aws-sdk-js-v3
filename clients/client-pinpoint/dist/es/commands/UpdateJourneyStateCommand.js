import { __extends } from "tslib";
import { UpdateJourneyStateRequest, UpdateJourneyStateResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateJourneyStateCommand, serializeAws_restJson1UpdateJourneyStateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels (stops) an active journey.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateJourneyStateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateJourneyStateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateJourneyStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateJourneyStateCommandInput} for command's `input` shape.
 * @see {@link UpdateJourneyStateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateJourneyStateCommand = /** @class */ (function (_super) {
    __extends(UpdateJourneyStateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateJourneyStateCommand(input) {
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
    UpdateJourneyStateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "UpdateJourneyStateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateJourneyStateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateJourneyStateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateJourneyStateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateJourneyStateCommand(input, context);
    };
    UpdateJourneyStateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateJourneyStateCommand(output, context);
    };
    return UpdateJourneyStateCommand;
}($Command));
export { UpdateJourneyStateCommand };
//# sourceMappingURL=UpdateJourneyStateCommand.js.map