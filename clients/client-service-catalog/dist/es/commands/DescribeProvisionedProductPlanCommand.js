import { __extends } from "tslib";
import { DescribeProvisionedProductPlanInput, DescribeProvisionedProductPlanOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeProvisionedProductPlanCommand, serializeAws_json1_1DescribeProvisionedProductPlanCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the resource changes for the specified plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProvisionedProductPlanCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProvisionedProductPlanCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeProvisionedProductPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProvisionedProductPlanCommandInput} for command's `input` shape.
 * @see {@link DescribeProvisionedProductPlanCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeProvisionedProductPlanCommand = /** @class */ (function (_super) {
    __extends(DescribeProvisionedProductPlanCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeProvisionedProductPlanCommand(input) {
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
    DescribeProvisionedProductPlanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "DescribeProvisionedProductPlanCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeProvisionedProductPlanInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeProvisionedProductPlanOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeProvisionedProductPlanCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeProvisionedProductPlanCommand(input, context);
    };
    DescribeProvisionedProductPlanCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeProvisionedProductPlanCommand(output, context);
    };
    return DescribeProvisionedProductPlanCommand;
}($Command));
export { DescribeProvisionedProductPlanCommand };
//# sourceMappingURL=DescribeProvisionedProductPlanCommand.js.map