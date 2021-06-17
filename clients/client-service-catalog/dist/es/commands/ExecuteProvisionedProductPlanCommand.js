import { __extends } from "tslib";
import { ExecuteProvisionedProductPlanInput, ExecuteProvisionedProductPlanOutput } from "../models/models_0";
import { deserializeAws_json1_1ExecuteProvisionedProductPlanCommand, serializeAws_json1_1ExecuteProvisionedProductPlanCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provisions or modifies a product based on the resource changes for the specified plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ExecuteProvisionedProductPlanCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ExecuteProvisionedProductPlanCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ExecuteProvisionedProductPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteProvisionedProductPlanCommandInput} for command's `input` shape.
 * @see {@link ExecuteProvisionedProductPlanCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExecuteProvisionedProductPlanCommand = /** @class */ (function (_super) {
    __extends(ExecuteProvisionedProductPlanCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ExecuteProvisionedProductPlanCommand(input) {
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
    ExecuteProvisionedProductPlanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "ExecuteProvisionedProductPlanCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ExecuteProvisionedProductPlanInput.filterSensitiveLog,
            outputFilterSensitiveLog: ExecuteProvisionedProductPlanOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ExecuteProvisionedProductPlanCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ExecuteProvisionedProductPlanCommand(input, context);
    };
    ExecuteProvisionedProductPlanCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ExecuteProvisionedProductPlanCommand(output, context);
    };
    return ExecuteProvisionedProductPlanCommand;
}($Command));
export { ExecuteProvisionedProductPlanCommand };
//# sourceMappingURL=ExecuteProvisionedProductPlanCommand.js.map