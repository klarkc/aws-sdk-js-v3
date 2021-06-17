import { __extends } from "tslib";
import { AssociateTagOptionWithResourceInput, AssociateTagOptionWithResourceOutput } from "../models/models_0";
import { deserializeAws_json1_1AssociateTagOptionWithResourceCommand, serializeAws_json1_1AssociateTagOptionWithResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associate the specified TagOption with the specified portfolio or product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, AssociateTagOptionWithResourceCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, AssociateTagOptionWithResourceCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new AssociateTagOptionWithResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateTagOptionWithResourceCommandInput} for command's `input` shape.
 * @see {@link AssociateTagOptionWithResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateTagOptionWithResourceCommand = /** @class */ (function (_super) {
    __extends(AssociateTagOptionWithResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateTagOptionWithResourceCommand(input) {
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
    AssociateTagOptionWithResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "AssociateTagOptionWithResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateTagOptionWithResourceInput.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateTagOptionWithResourceOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateTagOptionWithResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateTagOptionWithResourceCommand(input, context);
    };
    AssociateTagOptionWithResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateTagOptionWithResourceCommand(output, context);
    };
    return AssociateTagOptionWithResourceCommand;
}($Command));
export { AssociateTagOptionWithResourceCommand };
//# sourceMappingURL=AssociateTagOptionWithResourceCommand.js.map