import { __extends } from "tslib";
import { ListJourneysRequest, ListJourneysResponse } from "../models/models_1";
import { deserializeAws_restJson1ListJourneysCommand, serializeAws_restJson1ListJourneysCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the status, configuration, and other settings for all the journeys that are associated with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, ListJourneysCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, ListJourneysCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new ListJourneysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJourneysCommandInput} for command's `input` shape.
 * @see {@link ListJourneysCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListJourneysCommand = /** @class */ (function (_super) {
    __extends(ListJourneysCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListJourneysCommand(input) {
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
    ListJourneysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "ListJourneysCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListJourneysRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListJourneysResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListJourneysCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListJourneysCommand(input, context);
    };
    ListJourneysCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListJourneysCommand(output, context);
    };
    return ListJourneysCommand;
}($Command));
export { ListJourneysCommand };
//# sourceMappingURL=ListJourneysCommand.js.map