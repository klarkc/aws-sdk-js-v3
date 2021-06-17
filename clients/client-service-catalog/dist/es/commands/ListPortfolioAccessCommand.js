import { __extends } from "tslib";
import { ListPortfolioAccessInput, ListPortfolioAccessOutput } from "../models/models_0";
import { deserializeAws_json1_1ListPortfolioAccessCommand, serializeAws_json1_1ListPortfolioAccessCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the account IDs that have access to the specified portfolio.</p>
 *          <p>A delegated admin can list the accounts that have access to the shared portfolio. Note that if a delegated admin is de-registered, they can no longer perform this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListPortfolioAccessCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListPortfolioAccessCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListPortfolioAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPortfolioAccessCommandInput} for command's `input` shape.
 * @see {@link ListPortfolioAccessCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPortfolioAccessCommand = /** @class */ (function (_super) {
    __extends(ListPortfolioAccessCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPortfolioAccessCommand(input) {
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
    ListPortfolioAccessCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "ListPortfolioAccessCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPortfolioAccessInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListPortfolioAccessOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPortfolioAccessCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPortfolioAccessCommand(input, context);
    };
    ListPortfolioAccessCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPortfolioAccessCommand(output, context);
    };
    return ListPortfolioAccessCommand;
}($Command));
export { ListPortfolioAccessCommand };
//# sourceMappingURL=ListPortfolioAccessCommand.js.map