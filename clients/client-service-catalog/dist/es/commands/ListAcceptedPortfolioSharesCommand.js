import { __extends } from "tslib";
import { ListAcceptedPortfolioSharesInput, ListAcceptedPortfolioSharesOutput } from "../models/models_0";
import { deserializeAws_json1_1ListAcceptedPortfolioSharesCommand, serializeAws_json1_1ListAcceptedPortfolioSharesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all portfolios for which sharing was accepted by this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListAcceptedPortfolioSharesCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListAcceptedPortfolioSharesCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListAcceptedPortfolioSharesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAcceptedPortfolioSharesCommandInput} for command's `input` shape.
 * @see {@link ListAcceptedPortfolioSharesCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAcceptedPortfolioSharesCommand = /** @class */ (function (_super) {
    __extends(ListAcceptedPortfolioSharesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAcceptedPortfolioSharesCommand(input) {
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
    ListAcceptedPortfolioSharesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "ListAcceptedPortfolioSharesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAcceptedPortfolioSharesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListAcceptedPortfolioSharesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAcceptedPortfolioSharesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAcceptedPortfolioSharesCommand(input, context);
    };
    ListAcceptedPortfolioSharesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAcceptedPortfolioSharesCommand(output, context);
    };
    return ListAcceptedPortfolioSharesCommand;
}($Command));
export { ListAcceptedPortfolioSharesCommand };
//# sourceMappingURL=ListAcceptedPortfolioSharesCommand.js.map