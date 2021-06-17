import { __extends } from "tslib";
import { UpdatePortfolioShareInput, UpdatePortfolioShareOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdatePortfolioShareCommand, serializeAws_json1_1UpdatePortfolioShareCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified portfolio share. You can use this API to enable or disable TagOptions sharing for an existing portfolio share. </p>
 *
 *          <p>The portfolio share cannot be updated if the <code> CreatePortfolioShare</code> operation is <code>IN_PROGRESS</code>, as the share is not available to recipient entities. In this case, you must wait for the portfolio share to be COMPLETED.</p>
 *
 *          <p>You must provide the <code>accountId</code> or organization node in the input, but not both.</p>
 *
 *          <p>If the portfolio is shared to both an external account and an organization node, and both shares need to be updated, you must invoke <code>UpdatePortfolioShare</code> separately for each share type. </p>
 *
 *          <p>This API cannot be used for removing the portfolio share. You must use <code>DeletePortfolioShare</code> API for that action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdatePortfolioShareCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdatePortfolioShareCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new UpdatePortfolioShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePortfolioShareCommandInput} for command's `input` shape.
 * @see {@link UpdatePortfolioShareCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePortfolioShareCommand = /** @class */ (function (_super) {
    __extends(UpdatePortfolioShareCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePortfolioShareCommand(input) {
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
    UpdatePortfolioShareCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "UpdatePortfolioShareCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePortfolioShareInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePortfolioShareOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePortfolioShareCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdatePortfolioShareCommand(input, context);
    };
    UpdatePortfolioShareCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdatePortfolioShareCommand(output, context);
    };
    return UpdatePortfolioShareCommand;
}($Command));
export { UpdatePortfolioShareCommand };
//# sourceMappingURL=UpdatePortfolioShareCommand.js.map