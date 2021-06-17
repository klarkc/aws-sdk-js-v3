import { __extends } from "tslib";
import { DescribeProvisioningParametersInput, DescribeProvisioningParametersOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeProvisioningParametersCommand, serializeAws_json1_1DescribeProvisioningParametersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the configuration required to provision the specified product using
 *          the specified provisioning artifact.</p>
 *          <p>If the output contains a TagOption key with an empty list of values, there is a
 *          TagOption conflict for that key. The end user cannot take action to fix the conflict, and
 *          launch is not blocked. In subsequent calls to <a>ProvisionProduct</a>,
 *          do not include conflicted TagOption keys as tags, or this causes the error
 *          "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>".
 *          Tag the provisioned product with the value <code>sc-tagoption-conflict-portfolioId-productId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProvisioningParametersCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProvisioningParametersCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeProvisioningParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProvisioningParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeProvisioningParametersCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeProvisioningParametersCommand = /** @class */ (function (_super) {
    __extends(DescribeProvisioningParametersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeProvisioningParametersCommand(input) {
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
    DescribeProvisioningParametersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "DescribeProvisioningParametersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeProvisioningParametersInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeProvisioningParametersOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeProvisioningParametersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeProvisioningParametersCommand(input, context);
    };
    DescribeProvisioningParametersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeProvisioningParametersCommand(output, context);
    };
    return DescribeProvisioningParametersCommand;
}($Command));
export { DescribeProvisioningParametersCommand };
//# sourceMappingURL=DescribeProvisioningParametersCommand.js.map