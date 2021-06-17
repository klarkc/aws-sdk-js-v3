import { __extends } from "tslib";
import { DescribePortfolioSharesInput, DescribePortfolioSharesOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribePortfolioSharesCommand, serializeAws_json1_1DescribePortfolioSharesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a summary of each of the portfolio shares that were created for the specified portfolio.</p>
 *          <p>You can use this API to determine which accounts or organizational nodes this
 *          portfolio have been shared, whether the recipient entity has imported the share, and
 *          whether TagOptions are included with the share.</p>
 *          <p>The <code>PortfolioId</code> and <code>Type</code> parameters are both required.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribePortfolioSharesCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribePortfolioSharesCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribePortfolioSharesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePortfolioSharesCommandInput} for command's `input` shape.
 * @see {@link DescribePortfolioSharesCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePortfolioSharesCommand = /** @class */ (function (_super) {
    __extends(DescribePortfolioSharesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePortfolioSharesCommand(input) {
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
    DescribePortfolioSharesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "DescribePortfolioSharesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePortfolioSharesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePortfolioSharesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePortfolioSharesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePortfolioSharesCommand(input, context);
    };
    DescribePortfolioSharesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePortfolioSharesCommand(output, context);
    };
    return DescribePortfolioSharesCommand;
}($Command));
export { DescribePortfolioSharesCommand };
//# sourceMappingURL=DescribePortfolioSharesCommand.js.map