import { __extends } from "tslib";
import { ScanProvisionedProductsInput, ScanProvisionedProductsOutput } from "../models/models_0";
import { deserializeAws_json1_1ScanProvisionedProductsCommand, serializeAws_json1_1ScanProvisionedProductsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the provisioned products that are available (not terminated).</p>
 *          <p>To use additional filtering, see <a>SearchProvisionedProducts</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ScanProvisionedProductsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ScanProvisionedProductsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ScanProvisionedProductsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ScanProvisionedProductsCommandInput} for command's `input` shape.
 * @see {@link ScanProvisionedProductsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ScanProvisionedProductsCommand = /** @class */ (function (_super) {
    __extends(ScanProvisionedProductsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ScanProvisionedProductsCommand(input) {
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
    ScanProvisionedProductsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "ScanProvisionedProductsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ScanProvisionedProductsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ScanProvisionedProductsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ScanProvisionedProductsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ScanProvisionedProductsCommand(input, context);
    };
    ScanProvisionedProductsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ScanProvisionedProductsCommand(output, context);
    };
    return ScanProvisionedProductsCommand;
}($Command));
export { ScanProvisionedProductsCommand };
//# sourceMappingURL=ScanProvisionedProductsCommand.js.map