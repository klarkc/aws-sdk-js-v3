import { __extends } from "tslib";
import { UpdateProvisionedProductPropertiesInput, UpdateProvisionedProductPropertiesOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateProvisionedProductPropertiesCommand, serializeAws_json1_1UpdateProvisionedProductPropertiesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Requests updates to the properties of the specified provisioned product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdateProvisionedProductPropertiesCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdateProvisionedProductPropertiesCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new UpdateProvisionedProductPropertiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProvisionedProductPropertiesCommandInput} for command's `input` shape.
 * @see {@link UpdateProvisionedProductPropertiesCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateProvisionedProductPropertiesCommand = /** @class */ (function (_super) {
    __extends(UpdateProvisionedProductPropertiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateProvisionedProductPropertiesCommand(input) {
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
    UpdateProvisionedProductPropertiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "UpdateProvisionedProductPropertiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateProvisionedProductPropertiesInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateProvisionedProductPropertiesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateProvisionedProductPropertiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateProvisionedProductPropertiesCommand(input, context);
    };
    UpdateProvisionedProductPropertiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateProvisionedProductPropertiesCommand(output, context);
    };
    return UpdateProvisionedProductPropertiesCommand;
}($Command));
export { UpdateProvisionedProductPropertiesCommand };
//# sourceMappingURL=UpdateProvisionedProductPropertiesCommand.js.map