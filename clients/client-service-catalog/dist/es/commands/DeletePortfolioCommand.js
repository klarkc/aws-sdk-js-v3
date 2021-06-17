import { __extends } from "tslib";
import { DeletePortfolioInput, DeletePortfolioOutput } from "../models/models_0";
import { deserializeAws_json1_1DeletePortfolioCommand, serializeAws_json1_1DeletePortfolioCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified portfolio.</p>
 *          <p>You cannot delete a portfolio if it was shared with you or if it has associated
 *          products, users, constraints, or shared accounts.</p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeletePortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DeletePortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DeletePortfolioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePortfolioCommandInput} for command's `input` shape.
 * @see {@link DeletePortfolioCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePortfolioCommand = /** @class */ (function (_super) {
    __extends(DeletePortfolioCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePortfolioCommand(input) {
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
    DeletePortfolioCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "DeletePortfolioCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePortfolioInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeletePortfolioOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePortfolioCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeletePortfolioCommand(input, context);
    };
    DeletePortfolioCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeletePortfolioCommand(output, context);
    };
    return DeletePortfolioCommand;
}($Command));
export { DeletePortfolioCommand };
//# sourceMappingURL=DeletePortfolioCommand.js.map