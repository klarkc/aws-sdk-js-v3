import { __extends } from "tslib";
import { TerminateProvisionedProductInput, TerminateProvisionedProductOutput } from "../models/models_0";
import { deserializeAws_json1_1TerminateProvisionedProductCommand, serializeAws_json1_1TerminateProvisionedProductCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Terminates the specified provisioned product.</p>
 *          <p>This operation does not delete any records associated with the provisioned product.</p>
 *          <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, TerminateProvisionedProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, TerminateProvisionedProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new TerminateProvisionedProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateProvisionedProductCommandInput} for command's `input` shape.
 * @see {@link TerminateProvisionedProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TerminateProvisionedProductCommand = /** @class */ (function (_super) {
    __extends(TerminateProvisionedProductCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TerminateProvisionedProductCommand(input) {
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
    TerminateProvisionedProductCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "TerminateProvisionedProductCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TerminateProvisionedProductInput.filterSensitiveLog,
            outputFilterSensitiveLog: TerminateProvisionedProductOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TerminateProvisionedProductCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1TerminateProvisionedProductCommand(input, context);
    };
    TerminateProvisionedProductCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1TerminateProvisionedProductCommand(output, context);
    };
    return TerminateProvisionedProductCommand;
}($Command));
export { TerminateProvisionedProductCommand };
//# sourceMappingURL=TerminateProvisionedProductCommand.js.map