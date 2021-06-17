import { __extends } from "tslib";
import { ListSuppressedDestinationsRequest, ListSuppressedDestinationsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListSuppressedDestinationsCommand, serializeAws_restJson1ListSuppressedDestinationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of email addresses that are on the suppression list for your
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListSuppressedDestinationsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListSuppressedDestinationsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new ListSuppressedDestinationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSuppressedDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListSuppressedDestinationsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSuppressedDestinationsCommand = /** @class */ (function (_super) {
    __extends(ListSuppressedDestinationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSuppressedDestinationsCommand(input) {
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
    ListSuppressedDestinationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "ListSuppressedDestinationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSuppressedDestinationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSuppressedDestinationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSuppressedDestinationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListSuppressedDestinationsCommand(input, context);
    };
    ListSuppressedDestinationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListSuppressedDestinationsCommand(output, context);
    };
    return ListSuppressedDestinationsCommand;
}($Command));
export { ListSuppressedDestinationsCommand };
//# sourceMappingURL=ListSuppressedDestinationsCommand.js.map