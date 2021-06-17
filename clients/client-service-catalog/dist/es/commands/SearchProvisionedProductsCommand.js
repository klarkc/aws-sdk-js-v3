import { __extends } from "tslib";
import { SearchProvisionedProductsInput, SearchProvisionedProductsOutput } from "../models/models_0";
import { deserializeAws_json1_1SearchProvisionedProductsCommand, serializeAws_json1_1SearchProvisionedProductsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the provisioned products that meet the specified criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, SearchProvisionedProductsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, SearchProvisionedProductsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new SearchProvisionedProductsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchProvisionedProductsCommandInput} for command's `input` shape.
 * @see {@link SearchProvisionedProductsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchProvisionedProductsCommand = /** @class */ (function (_super) {
    __extends(SearchProvisionedProductsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SearchProvisionedProductsCommand(input) {
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
    SearchProvisionedProductsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "SearchProvisionedProductsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchProvisionedProductsInput.filterSensitiveLog,
            outputFilterSensitiveLog: SearchProvisionedProductsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchProvisionedProductsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SearchProvisionedProductsCommand(input, context);
    };
    SearchProvisionedProductsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SearchProvisionedProductsCommand(output, context);
    };
    return SearchProvisionedProductsCommand;
}($Command));
export { SearchProvisionedProductsCommand };
//# sourceMappingURL=SearchProvisionedProductsCommand.js.map