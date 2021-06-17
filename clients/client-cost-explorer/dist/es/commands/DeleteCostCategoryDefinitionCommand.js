import { __extends } from "tslib";
import { DeleteCostCategoryDefinitionRequest, DeleteCostCategoryDefinitionResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteCostCategoryDefinitionCommand, serializeAws_json1_1DeleteCostCategoryDefinitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, DeleteCostCategoryDefinitionCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, DeleteCostCategoryDefinitionCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new DeleteCostCategoryDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCostCategoryDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteCostCategoryDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCostCategoryDefinitionCommand = /** @class */ (function (_super) {
    __extends(DeleteCostCategoryDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCostCategoryDefinitionCommand(input) {
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
    DeleteCostCategoryDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "DeleteCostCategoryDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCostCategoryDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteCostCategoryDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCostCategoryDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteCostCategoryDefinitionCommand(input, context);
    };
    DeleteCostCategoryDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteCostCategoryDefinitionCommand(output, context);
    };
    return DeleteCostCategoryDefinitionCommand;
}($Command));
export { DeleteCostCategoryDefinitionCommand };
//# sourceMappingURL=DeleteCostCategoryDefinitionCommand.js.map