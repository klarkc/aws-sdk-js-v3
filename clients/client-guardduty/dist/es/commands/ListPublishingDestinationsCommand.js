import { __extends } from "tslib";
import { ListPublishingDestinationsRequest, ListPublishingDestinationsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListPublishingDestinationsCommand, serializeAws_restJson1ListPublishingDestinationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of publishing destinations associated with the specified
 *         <code>dectectorId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListPublishingDestinationsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListPublishingDestinationsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new ListPublishingDestinationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPublishingDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListPublishingDestinationsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPublishingDestinationsCommand = /** @class */ (function (_super) {
    __extends(ListPublishingDestinationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPublishingDestinationsCommand(input) {
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
    ListPublishingDestinationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "ListPublishingDestinationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPublishingDestinationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPublishingDestinationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPublishingDestinationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPublishingDestinationsCommand(input, context);
    };
    ListPublishingDestinationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPublishingDestinationsCommand(output, context);
    };
    return ListPublishingDestinationsCommand;
}($Command));
export { ListPublishingDestinationsCommand };
//# sourceMappingURL=ListPublishingDestinationsCommand.js.map