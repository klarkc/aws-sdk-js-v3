import { __extends } from "tslib";
import { ListBudgetsForResourceInput, ListBudgetsForResourceOutput } from "../models/models_0";
import { deserializeAws_json1_1ListBudgetsForResourceCommand, serializeAws_json1_1ListBudgetsForResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the budgets associated to the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListBudgetsForResourceCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListBudgetsForResourceCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListBudgetsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBudgetsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListBudgetsForResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBudgetsForResourceCommand = /** @class */ (function (_super) {
    __extends(ListBudgetsForResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListBudgetsForResourceCommand(input) {
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
    ListBudgetsForResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "ListBudgetsForResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListBudgetsForResourceInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListBudgetsForResourceOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListBudgetsForResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListBudgetsForResourceCommand(input, context);
    };
    ListBudgetsForResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListBudgetsForResourceCommand(output, context);
    };
    return ListBudgetsForResourceCommand;
}($Command));
export { ListBudgetsForResourceCommand };
//# sourceMappingURL=ListBudgetsForResourceCommand.js.map