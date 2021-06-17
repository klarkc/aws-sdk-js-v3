import { __extends } from "tslib";
import { GetCostCategoriesRequest, GetCostCategoriesResponse } from "../models/models_0";
import { deserializeAws_json1_1GetCostCategoriesCommand, serializeAws_json1_1GetCostCategoriesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves an array of Cost Category names and values incurred cost.</p>
 * 	        <note>
 *             <p>If some Cost Category names and values are not associated with any cost, they will not be returned by this API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetCostCategoriesCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetCostCategoriesCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetCostCategoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCostCategoriesCommandInput} for command's `input` shape.
 * @see {@link GetCostCategoriesCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCostCategoriesCommand = /** @class */ (function (_super) {
    __extends(GetCostCategoriesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCostCategoriesCommand(input) {
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
    GetCostCategoriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "GetCostCategoriesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCostCategoriesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCostCategoriesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCostCategoriesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetCostCategoriesCommand(input, context);
    };
    GetCostCategoriesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetCostCategoriesCommand(output, context);
    };
    return GetCostCategoriesCommand;
}($Command));
export { GetCostCategoriesCommand };
//# sourceMappingURL=GetCostCategoriesCommand.js.map