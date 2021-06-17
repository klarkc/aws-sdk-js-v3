import { __extends } from "tslib";
import { AcceptPortfolioShareInput, AcceptPortfolioShareOutput } from "../models/models_0";
import { deserializeAws_json1_1AcceptPortfolioShareCommand, serializeAws_json1_1AcceptPortfolioShareCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Accepts an offer to share the specified portfolio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, AcceptPortfolioShareCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, AcceptPortfolioShareCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new AcceptPortfolioShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptPortfolioShareCommandInput} for command's `input` shape.
 * @see {@link AcceptPortfolioShareCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AcceptPortfolioShareCommand = /** @class */ (function (_super) {
    __extends(AcceptPortfolioShareCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AcceptPortfolioShareCommand(input) {
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
    AcceptPortfolioShareCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "AcceptPortfolioShareCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AcceptPortfolioShareInput.filterSensitiveLog,
            outputFilterSensitiveLog: AcceptPortfolioShareOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AcceptPortfolioShareCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AcceptPortfolioShareCommand(input, context);
    };
    AcceptPortfolioShareCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AcceptPortfolioShareCommand(output, context);
    };
    return AcceptPortfolioShareCommand;
}($Command));
export { AcceptPortfolioShareCommand };
//# sourceMappingURL=AcceptPortfolioShareCommand.js.map