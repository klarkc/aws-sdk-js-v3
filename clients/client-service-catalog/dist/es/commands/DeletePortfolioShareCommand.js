import { __extends } from "tslib";
import { DeletePortfolioShareInput, DeletePortfolioShareOutput } from "../models/models_0";
import { deserializeAws_json1_1DeletePortfolioShareCommand, serializeAws_json1_1DeletePortfolioShareCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops sharing the specified portfolio with the specified account or organization
 *          node. Shares to an organization node can only be deleted by the management account of an
 *          organization or by a delegated administrator.</p>
 *          <p>Note that if a delegated admin is de-registered, portfolio shares created from that account are removed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeletePortfolioShareCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DeletePortfolioShareCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DeletePortfolioShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePortfolioShareCommandInput} for command's `input` shape.
 * @see {@link DeletePortfolioShareCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePortfolioShareCommand = /** @class */ (function (_super) {
    __extends(DeletePortfolioShareCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePortfolioShareCommand(input) {
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
    DeletePortfolioShareCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "DeletePortfolioShareCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePortfolioShareInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeletePortfolioShareOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePortfolioShareCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeletePortfolioShareCommand(input, context);
    };
    DeletePortfolioShareCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeletePortfolioShareCommand(output, context);
    };
    return DeletePortfolioShareCommand;
}($Command));
export { DeletePortfolioShareCommand };
//# sourceMappingURL=DeletePortfolioShareCommand.js.map