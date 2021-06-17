import { __extends } from "tslib";
import { AssociatePrincipalWithPortfolioInput, AssociatePrincipalWithPortfolioOutput } from "../models/models_0";
import { deserializeAws_json1_1AssociatePrincipalWithPortfolioCommand, serializeAws_json1_1AssociatePrincipalWithPortfolioCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates the specified principal ARN with the specified portfolio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, AssociatePrincipalWithPortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, AssociatePrincipalWithPortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new AssociatePrincipalWithPortfolioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociatePrincipalWithPortfolioCommandInput} for command's `input` shape.
 * @see {@link AssociatePrincipalWithPortfolioCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociatePrincipalWithPortfolioCommand = /** @class */ (function (_super) {
    __extends(AssociatePrincipalWithPortfolioCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociatePrincipalWithPortfolioCommand(input) {
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
    AssociatePrincipalWithPortfolioCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "AssociatePrincipalWithPortfolioCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociatePrincipalWithPortfolioInput.filterSensitiveLog,
            outputFilterSensitiveLog: AssociatePrincipalWithPortfolioOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociatePrincipalWithPortfolioCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociatePrincipalWithPortfolioCommand(input, context);
    };
    AssociatePrincipalWithPortfolioCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociatePrincipalWithPortfolioCommand(output, context);
    };
    return AssociatePrincipalWithPortfolioCommand;
}($Command));
export { AssociatePrincipalWithPortfolioCommand };
//# sourceMappingURL=AssociatePrincipalWithPortfolioCommand.js.map