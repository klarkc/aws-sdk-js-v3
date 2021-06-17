import { __extends } from "tslib";
import { AssociateProductWithPortfolioInput, AssociateProductWithPortfolioOutput } from "../models/models_0";
import { deserializeAws_json1_1AssociateProductWithPortfolioCommand, serializeAws_json1_1AssociateProductWithPortfolioCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates the specified product with the specified portfolio.</p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, AssociateProductWithPortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, AssociateProductWithPortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new AssociateProductWithPortfolioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateProductWithPortfolioCommandInput} for command's `input` shape.
 * @see {@link AssociateProductWithPortfolioCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateProductWithPortfolioCommand = /** @class */ (function (_super) {
    __extends(AssociateProductWithPortfolioCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateProductWithPortfolioCommand(input) {
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
    AssociateProductWithPortfolioCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "AssociateProductWithPortfolioCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateProductWithPortfolioInput.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateProductWithPortfolioOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateProductWithPortfolioCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateProductWithPortfolioCommand(input, context);
    };
    AssociateProductWithPortfolioCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateProductWithPortfolioCommand(output, context);
    };
    return AssociateProductWithPortfolioCommand;
}($Command));
export { AssociateProductWithPortfolioCommand };
//# sourceMappingURL=AssociateProductWithPortfolioCommand.js.map