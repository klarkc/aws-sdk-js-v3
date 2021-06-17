import { __extends } from "tslib";
import { SearchProductsAsAdminInput, SearchProductsAsAdminOutput } from "../models/models_0";
import { deserializeAws_json1_1SearchProductsAsAdminCommand, serializeAws_json1_1SearchProductsAsAdminCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the products for the specified portfolio or all products.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, SearchProductsAsAdminCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, SearchProductsAsAdminCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new SearchProductsAsAdminCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchProductsAsAdminCommandInput} for command's `input` shape.
 * @see {@link SearchProductsAsAdminCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchProductsAsAdminCommand = /** @class */ (function (_super) {
    __extends(SearchProductsAsAdminCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SearchProductsAsAdminCommand(input) {
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
    SearchProductsAsAdminCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "SearchProductsAsAdminCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchProductsAsAdminInput.filterSensitiveLog,
            outputFilterSensitiveLog: SearchProductsAsAdminOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchProductsAsAdminCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SearchProductsAsAdminCommand(input, context);
    };
    SearchProductsAsAdminCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SearchProductsAsAdminCommand(output, context);
    };
    return SearchProductsAsAdminCommand;
}($Command));
export { SearchProductsAsAdminCommand };
//# sourceMappingURL=SearchProductsAsAdminCommand.js.map