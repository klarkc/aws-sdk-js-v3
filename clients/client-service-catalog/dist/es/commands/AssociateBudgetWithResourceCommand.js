import { __extends } from "tslib";
import { AssociateBudgetWithResourceInput, AssociateBudgetWithResourceOutput } from "../models/models_0";
import { deserializeAws_json1_1AssociateBudgetWithResourceCommand, serializeAws_json1_1AssociateBudgetWithResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates the specified budget with the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, AssociateBudgetWithResourceCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, AssociateBudgetWithResourceCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new AssociateBudgetWithResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateBudgetWithResourceCommandInput} for command's `input` shape.
 * @see {@link AssociateBudgetWithResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateBudgetWithResourceCommand = /** @class */ (function (_super) {
    __extends(AssociateBudgetWithResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateBudgetWithResourceCommand(input) {
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
    AssociateBudgetWithResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "AssociateBudgetWithResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateBudgetWithResourceInput.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateBudgetWithResourceOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateBudgetWithResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateBudgetWithResourceCommand(input, context);
    };
    AssociateBudgetWithResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateBudgetWithResourceCommand(output, context);
    };
    return AssociateBudgetWithResourceCommand;
}($Command));
export { AssociateBudgetWithResourceCommand };
//# sourceMappingURL=AssociateBudgetWithResourceCommand.js.map