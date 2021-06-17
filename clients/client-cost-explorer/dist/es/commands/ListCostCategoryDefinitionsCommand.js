import { __extends } from "tslib";
import { ListCostCategoryDefinitionsRequest, ListCostCategoryDefinitionsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListCostCategoryDefinitionsCommand, serializeAws_json1_1ListCostCategoryDefinitionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the name, ARN, <code>NumberOfRules</code> and effective dates of all Cost Categories defined in the account. You have the option to use <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The request can have a <code>MaxResults</code> range up to 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, ListCostCategoryDefinitionsCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, ListCostCategoryDefinitionsCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new ListCostCategoryDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCostCategoryDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListCostCategoryDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCostCategoryDefinitionsCommand = /** @class */ (function (_super) {
    __extends(ListCostCategoryDefinitionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCostCategoryDefinitionsCommand(input) {
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
    ListCostCategoryDefinitionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "ListCostCategoryDefinitionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCostCategoryDefinitionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCostCategoryDefinitionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCostCategoryDefinitionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListCostCategoryDefinitionsCommand(input, context);
    };
    ListCostCategoryDefinitionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListCostCategoryDefinitionsCommand(output, context);
    };
    return ListCostCategoryDefinitionsCommand;
}($Command));
export { ListCostCategoryDefinitionsCommand };
//# sourceMappingURL=ListCostCategoryDefinitionsCommand.js.map