import { __extends } from "tslib";
import { ListConstraintsForPortfolioInput, ListConstraintsForPortfolioOutput } from "../models/models_0";
import { deserializeAws_json1_1ListConstraintsForPortfolioCommand, serializeAws_json1_1ListConstraintsForPortfolioCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the constraints for the specified portfolio and product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListConstraintsForPortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListConstraintsForPortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListConstraintsForPortfolioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConstraintsForPortfolioCommandInput} for command's `input` shape.
 * @see {@link ListConstraintsForPortfolioCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListConstraintsForPortfolioCommand = /** @class */ (function (_super) {
    __extends(ListConstraintsForPortfolioCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListConstraintsForPortfolioCommand(input) {
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
    ListConstraintsForPortfolioCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "ListConstraintsForPortfolioCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListConstraintsForPortfolioInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListConstraintsForPortfolioOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListConstraintsForPortfolioCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListConstraintsForPortfolioCommand(input, context);
    };
    ListConstraintsForPortfolioCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListConstraintsForPortfolioCommand(output, context);
    };
    return ListConstraintsForPortfolioCommand;
}($Command));
export { ListConstraintsForPortfolioCommand };
//# sourceMappingURL=ListConstraintsForPortfolioCommand.js.map