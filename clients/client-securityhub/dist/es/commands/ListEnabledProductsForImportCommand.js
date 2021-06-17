import { __extends } from "tslib";
import { ListEnabledProductsForImportRequest, ListEnabledProductsForImportResponse } from "../models/models_1";
import { deserializeAws_restJson1ListEnabledProductsForImportCommand, serializeAws_restJson1ListEnabledProductsForImportCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all findings-generating solutions (products) that you are subscribed to receive
 *          findings from in Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListEnabledProductsForImportCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListEnabledProductsForImportCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new ListEnabledProductsForImportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEnabledProductsForImportCommandInput} for command's `input` shape.
 * @see {@link ListEnabledProductsForImportCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEnabledProductsForImportCommand = /** @class */ (function (_super) {
    __extends(ListEnabledProductsForImportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListEnabledProductsForImportCommand(input) {
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
    ListEnabledProductsForImportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "ListEnabledProductsForImportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListEnabledProductsForImportRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListEnabledProductsForImportResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListEnabledProductsForImportCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListEnabledProductsForImportCommand(input, context);
    };
    ListEnabledProductsForImportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListEnabledProductsForImportCommand(output, context);
    };
    return ListEnabledProductsForImportCommand;
}($Command));
export { ListEnabledProductsForImportCommand };
//# sourceMappingURL=ListEnabledProductsForImportCommand.js.map