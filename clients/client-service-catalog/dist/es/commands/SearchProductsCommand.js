import { __extends } from "tslib";
import { SearchProductsInput, SearchProductsOutput } from "../models/models_0";
import { deserializeAws_json1_1SearchProductsCommand, serializeAws_json1_1SearchProductsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the products to which the caller has access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, SearchProductsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, SearchProductsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new SearchProductsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchProductsCommandInput} for command's `input` shape.
 * @see {@link SearchProductsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchProductsCommand = /** @class */ (function (_super) {
    __extends(SearchProductsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SearchProductsCommand(input) {
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
    SearchProductsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "SearchProductsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchProductsInput.filterSensitiveLog,
            outputFilterSensitiveLog: SearchProductsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchProductsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SearchProductsCommand(input, context);
    };
    SearchProductsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SearchProductsCommand(output, context);
    };
    return SearchProductsCommand;
}($Command));
export { SearchProductsCommand };
//# sourceMappingURL=SearchProductsCommand.js.map