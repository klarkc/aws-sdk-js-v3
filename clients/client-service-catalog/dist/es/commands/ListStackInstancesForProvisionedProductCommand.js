import { __extends } from "tslib";
import { ListStackInstancesForProvisionedProductInput, ListStackInstancesForProvisionedProductOutput, } from "../models/models_0";
import { deserializeAws_json1_1ListStackInstancesForProvisionedProductCommand, serializeAws_json1_1ListStackInstancesForProvisionedProductCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns summary information about stack instances that are associated with the specified <code>CFN_STACKSET</code> type provisioned product. You can filter for stack instances that are associated with a specific AWS account name or region. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListStackInstancesForProvisionedProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListStackInstancesForProvisionedProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListStackInstancesForProvisionedProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStackInstancesForProvisionedProductCommandInput} for command's `input` shape.
 * @see {@link ListStackInstancesForProvisionedProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListStackInstancesForProvisionedProductCommand = /** @class */ (function (_super) {
    __extends(ListStackInstancesForProvisionedProductCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListStackInstancesForProvisionedProductCommand(input) {
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
    ListStackInstancesForProvisionedProductCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "ListStackInstancesForProvisionedProductCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListStackInstancesForProvisionedProductInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListStackInstancesForProvisionedProductOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListStackInstancesForProvisionedProductCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListStackInstancesForProvisionedProductCommand(input, context);
    };
    ListStackInstancesForProvisionedProductCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListStackInstancesForProvisionedProductCommand(output, context);
    };
    return ListStackInstancesForProvisionedProductCommand;
}($Command));
export { ListStackInstancesForProvisionedProductCommand };
//# sourceMappingURL=ListStackInstancesForProvisionedProductCommand.js.map