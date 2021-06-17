import { __extends } from "tslib";
import { DescribeProvisionedProductInput, DescribeProvisionedProductOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeProvisionedProductCommand, serializeAws_json1_1DescribeProvisionedProductCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the specified provisioned product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProvisionedProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProvisionedProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeProvisionedProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProvisionedProductCommandInput} for command's `input` shape.
 * @see {@link DescribeProvisionedProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeProvisionedProductCommand = /** @class */ (function (_super) {
    __extends(DescribeProvisionedProductCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeProvisionedProductCommand(input) {
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
    DescribeProvisionedProductCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "DescribeProvisionedProductCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeProvisionedProductInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeProvisionedProductOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeProvisionedProductCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeProvisionedProductCommand(input, context);
    };
    DescribeProvisionedProductCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeProvisionedProductCommand(output, context);
    };
    return DescribeProvisionedProductCommand;
}($Command));
export { DescribeProvisionedProductCommand };
//# sourceMappingURL=DescribeProvisionedProductCommand.js.map