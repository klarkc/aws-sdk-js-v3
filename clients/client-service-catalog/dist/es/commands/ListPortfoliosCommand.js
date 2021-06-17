import { __extends } from "tslib";
import { ListPortfoliosInput, ListPortfoliosOutput } from "../models/models_0";
import { deserializeAws_json1_1ListPortfoliosCommand, serializeAws_json1_1ListPortfoliosCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all portfolios in the catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListPortfoliosCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListPortfoliosCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListPortfoliosCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPortfoliosCommandInput} for command's `input` shape.
 * @see {@link ListPortfoliosCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPortfoliosCommand = /** @class */ (function (_super) {
    __extends(ListPortfoliosCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPortfoliosCommand(input) {
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
    ListPortfoliosCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "ListPortfoliosCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPortfoliosInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListPortfoliosOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPortfoliosCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPortfoliosCommand(input, context);
    };
    ListPortfoliosCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPortfoliosCommand(output, context);
    };
    return ListPortfoliosCommand;
}($Command));
export { ListPortfoliosCommand };
//# sourceMappingURL=ListPortfoliosCommand.js.map