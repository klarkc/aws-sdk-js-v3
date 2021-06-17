import { __extends } from "tslib";
import { ExecuteProvisionedProductServiceActionInput, ExecuteProvisionedProductServiceActionOutput, } from "../models/models_0";
import { deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommand, serializeAws_json1_1ExecuteProvisionedProductServiceActionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Executes a self-service action against a provisioned product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ExecuteProvisionedProductServiceActionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ExecuteProvisionedProductServiceActionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ExecuteProvisionedProductServiceActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteProvisionedProductServiceActionCommandInput} for command's `input` shape.
 * @see {@link ExecuteProvisionedProductServiceActionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExecuteProvisionedProductServiceActionCommand = /** @class */ (function (_super) {
    __extends(ExecuteProvisionedProductServiceActionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ExecuteProvisionedProductServiceActionCommand(input) {
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
    ExecuteProvisionedProductServiceActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "ExecuteProvisionedProductServiceActionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ExecuteProvisionedProductServiceActionInput.filterSensitiveLog,
            outputFilterSensitiveLog: ExecuteProvisionedProductServiceActionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ExecuteProvisionedProductServiceActionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ExecuteProvisionedProductServiceActionCommand(input, context);
    };
    ExecuteProvisionedProductServiceActionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommand(output, context);
    };
    return ExecuteProvisionedProductServiceActionCommand;
}($Command));
export { ExecuteProvisionedProductServiceActionCommand };
//# sourceMappingURL=ExecuteProvisionedProductServiceActionCommand.js.map