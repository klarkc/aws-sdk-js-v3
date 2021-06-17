import { __extends } from "tslib";
import { ListPrincipalsForPortfolioInput, ListPrincipalsForPortfolioOutput } from "../models/models_0";
import { deserializeAws_json1_1ListPrincipalsForPortfolioCommand, serializeAws_json1_1ListPrincipalsForPortfolioCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all principal ARNs associated with the specified portfolio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListPrincipalsForPortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListPrincipalsForPortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListPrincipalsForPortfolioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPrincipalsForPortfolioCommandInput} for command's `input` shape.
 * @see {@link ListPrincipalsForPortfolioCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPrincipalsForPortfolioCommand = /** @class */ (function (_super) {
    __extends(ListPrincipalsForPortfolioCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPrincipalsForPortfolioCommand(input) {
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
    ListPrincipalsForPortfolioCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "ListPrincipalsForPortfolioCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPrincipalsForPortfolioInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListPrincipalsForPortfolioOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPrincipalsForPortfolioCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPrincipalsForPortfolioCommand(input, context);
    };
    ListPrincipalsForPortfolioCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPrincipalsForPortfolioCommand(output, context);
    };
    return ListPrincipalsForPortfolioCommand;
}($Command));
export { ListPrincipalsForPortfolioCommand };
//# sourceMappingURL=ListPrincipalsForPortfolioCommand.js.map