import { __extends } from "tslib";
import { DeleteProvisionedProductPlanInput, DeleteProvisionedProductPlanOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteProvisionedProductPlanCommand, serializeAws_json1_1DeleteProvisionedProductPlanCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeleteProvisionedProductPlanCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DeleteProvisionedProductPlanCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DeleteProvisionedProductPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProvisionedProductPlanCommandInput} for command's `input` shape.
 * @see {@link DeleteProvisionedProductPlanCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteProvisionedProductPlanCommand = /** @class */ (function (_super) {
    __extends(DeleteProvisionedProductPlanCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteProvisionedProductPlanCommand(input) {
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
    DeleteProvisionedProductPlanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "DeleteProvisionedProductPlanCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteProvisionedProductPlanInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteProvisionedProductPlanOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteProvisionedProductPlanCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteProvisionedProductPlanCommand(input, context);
    };
    DeleteProvisionedProductPlanCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteProvisionedProductPlanCommand(output, context);
    };
    return DeleteProvisionedProductPlanCommand;
}($Command));
export { DeleteProvisionedProductPlanCommand };
//# sourceMappingURL=DeleteProvisionedProductPlanCommand.js.map