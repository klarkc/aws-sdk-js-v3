import { __extends } from "tslib";
import { DisassociateProductFromPortfolioInput, DisassociateProductFromPortfolioOutput } from "../models/models_0";
import { deserializeAws_json1_1DisassociateProductFromPortfolioCommand, serializeAws_json1_1DisassociateProductFromPortfolioCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates the specified product from the specified portfolio. </p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DisassociateProductFromPortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DisassociateProductFromPortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DisassociateProductFromPortfolioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateProductFromPortfolioCommandInput} for command's `input` shape.
 * @see {@link DisassociateProductFromPortfolioCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateProductFromPortfolioCommand = /** @class */ (function (_super) {
    __extends(DisassociateProductFromPortfolioCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateProductFromPortfolioCommand(input) {
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
    DisassociateProductFromPortfolioCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "DisassociateProductFromPortfolioCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateProductFromPortfolioInput.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateProductFromPortfolioOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateProductFromPortfolioCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateProductFromPortfolioCommand(input, context);
    };
    DisassociateProductFromPortfolioCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateProductFromPortfolioCommand(output, context);
    };
    return DisassociateProductFromPortfolioCommand;
}($Command));
export { DisassociateProductFromPortfolioCommand };
//# sourceMappingURL=DisassociateProductFromPortfolioCommand.js.map