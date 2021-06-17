import { __extends } from "tslib";
import { UpdateCostCategoryDefinitionRequest, UpdateCostCategoryDefinitionResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateCostCategoryDefinitionCommand, serializeAws_json1_1UpdateCostCategoryDefinitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, UpdateCostCategoryDefinitionCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, UpdateCostCategoryDefinitionCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new UpdateCostCategoryDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCostCategoryDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateCostCategoryDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateCostCategoryDefinitionCommand = /** @class */ (function (_super) {
    __extends(UpdateCostCategoryDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateCostCategoryDefinitionCommand(input) {
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
    UpdateCostCategoryDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "UpdateCostCategoryDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateCostCategoryDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateCostCategoryDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateCostCategoryDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateCostCategoryDefinitionCommand(input, context);
    };
    UpdateCostCategoryDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateCostCategoryDefinitionCommand(output, context);
    };
    return UpdateCostCategoryDefinitionCommand;
}($Command));
export { UpdateCostCategoryDefinitionCommand };
//# sourceMappingURL=UpdateCostCategoryDefinitionCommand.js.map