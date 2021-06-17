import { __extends } from "tslib";
import { DeleteJourneyRequest, DeleteJourneyResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteJourneyCommand, serializeAws_restJson1DeleteJourneyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a journey from an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteJourneyCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteJourneyCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteJourneyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteJourneyCommandInput} for command's `input` shape.
 * @see {@link DeleteJourneyCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteJourneyCommand = /** @class */ (function (_super) {
    __extends(DeleteJourneyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteJourneyCommand(input) {
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
    DeleteJourneyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "DeleteJourneyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteJourneyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteJourneyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteJourneyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteJourneyCommand(input, context);
    };
    DeleteJourneyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteJourneyCommand(output, context);
    };
    return DeleteJourneyCommand;
}($Command));
export { DeleteJourneyCommand };
//# sourceMappingURL=DeleteJourneyCommand.js.map