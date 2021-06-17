import { __extends } from "tslib";
import { UpdateJourneyRequest, UpdateJourneyResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateJourneyCommand, serializeAws_restJson1UpdateJourneyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the configuration and other settings for a journey.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateJourneyCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateJourneyCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateJourneyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateJourneyCommandInput} for command's `input` shape.
 * @see {@link UpdateJourneyCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateJourneyCommand = /** @class */ (function (_super) {
    __extends(UpdateJourneyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateJourneyCommand(input) {
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
    UpdateJourneyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "UpdateJourneyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateJourneyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateJourneyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateJourneyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateJourneyCommand(input, context);
    };
    UpdateJourneyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateJourneyCommand(output, context);
    };
    return UpdateJourneyCommand;
}($Command));
export { UpdateJourneyCommand };
//# sourceMappingURL=UpdateJourneyCommand.js.map