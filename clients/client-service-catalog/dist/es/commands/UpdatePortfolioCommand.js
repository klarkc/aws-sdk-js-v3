import { __extends } from "tslib";
import { UpdatePortfolioInput, UpdatePortfolioOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdatePortfolioCommand, serializeAws_json1_1UpdatePortfolioCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified portfolio.</p>
 *          <p>You cannot update a product that was shared with you.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdatePortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdatePortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new UpdatePortfolioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePortfolioCommandInput} for command's `input` shape.
 * @see {@link UpdatePortfolioCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePortfolioCommand = /** @class */ (function (_super) {
    __extends(UpdatePortfolioCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePortfolioCommand(input) {
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
    UpdatePortfolioCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "UpdatePortfolioCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePortfolioInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePortfolioOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePortfolioCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdatePortfolioCommand(input, context);
    };
    UpdatePortfolioCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdatePortfolioCommand(output, context);
    };
    return UpdatePortfolioCommand;
}($Command));
export { UpdatePortfolioCommand };
//# sourceMappingURL=UpdatePortfolioCommand.js.map