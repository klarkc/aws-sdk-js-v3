import { __extends } from "tslib";
import { ListEventTypesRequest, ListEventTypesResult } from "../models/models_0";
import { deserializeAws_restJson1ListEventTypesCommand, serializeAws_restJson1ListEventTypesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the event types available for configuring notifications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, ListEventTypesCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, ListEventTypesCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const command = new ListEventTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEventTypesCommandInput} for command's `input` shape.
 * @see {@link ListEventTypesCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEventTypesCommand = /** @class */ (function (_super) {
    __extends(ListEventTypesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListEventTypesCommand(input) {
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
    ListEventTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodestarNotificationsClient";
        var commandName = "ListEventTypesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListEventTypesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListEventTypesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListEventTypesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListEventTypesCommand(input, context);
    };
    ListEventTypesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListEventTypesCommand(output, context);
    };
    return ListEventTypesCommand;
}($Command));
export { ListEventTypesCommand };
//# sourceMappingURL=ListEventTypesCommand.js.map