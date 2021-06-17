import { __extends } from "tslib";
import { UpdateProvisionedProductInput, UpdateProvisionedProductOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateProvisionedProductCommand, serializeAws_json1_1UpdateProvisionedProductCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Requests updates to the configuration of the specified provisioned product.</p>
 *          <p>If there are tags associated with the object, they cannot be updated or added.
 *          Depending on the specific updates requested, this operation can update with no
 *          interruption, with some interruption, or replace the provisioned product entirely.</p>
 *          <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdateProvisionedProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdateProvisionedProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new UpdateProvisionedProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProvisionedProductCommandInput} for command's `input` shape.
 * @see {@link UpdateProvisionedProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateProvisionedProductCommand = /** @class */ (function (_super) {
    __extends(UpdateProvisionedProductCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateProvisionedProductCommand(input) {
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
    UpdateProvisionedProductCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "UpdateProvisionedProductCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateProvisionedProductInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateProvisionedProductOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateProvisionedProductCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateProvisionedProductCommand(input, context);
    };
    UpdateProvisionedProductCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateProvisionedProductCommand(output, context);
    };
    return UpdateProvisionedProductCommand;
}($Command));
export { UpdateProvisionedProductCommand };
//# sourceMappingURL=UpdateProvisionedProductCommand.js.map