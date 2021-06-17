import { __extends } from "tslib";
import { ProvisionProductInput, ProvisionProductOutput } from "../models/models_0";
import { deserializeAws_json1_1ProvisionProductCommand, serializeAws_json1_1ProvisionProductCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provisions the specified product.</p>
 *          <p>A provisioned product is a resourced instance of a product.
 *          For example, provisioning a product based on a CloudFormation template launches a
 *          CloudFormation stack and its underlying resources.
 *          You can check the status of this request using <a>DescribeRecord</a>.</p>
 *          <p>If the request contains a tag key with an empty list of values, there is a
 *          tag conflict for that key. Do not include conflicted keys as tags, or this causes
 *          the error "Parameter validation failed: Missing required parameter in
 *          Tags[<i>N</i>]:<i>Value</i>".</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ProvisionProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ProvisionProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ProvisionProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ProvisionProductCommandInput} for command's `input` shape.
 * @see {@link ProvisionProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ProvisionProductCommand = /** @class */ (function (_super) {
    __extends(ProvisionProductCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ProvisionProductCommand(input) {
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
    ProvisionProductCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "ProvisionProductCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ProvisionProductInput.filterSensitiveLog,
            outputFilterSensitiveLog: ProvisionProductOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ProvisionProductCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ProvisionProductCommand(input, context);
    };
    ProvisionProductCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ProvisionProductCommand(output, context);
    };
    return ProvisionProductCommand;
}($Command));
export { ProvisionProductCommand };
//# sourceMappingURL=ProvisionProductCommand.js.map