import { __extends } from "tslib";
import { DeleteSamplingRuleRequest, DeleteSamplingRuleResult } from "../models/models_0";
import { deserializeAws_restJson1DeleteSamplingRuleCommand, serializeAws_restJson1DeleteSamplingRuleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a sampling rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, DeleteSamplingRuleCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, DeleteSamplingRuleCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new DeleteSamplingRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSamplingRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteSamplingRuleCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSamplingRuleCommand = /** @class */ (function (_super) {
    __extends(DeleteSamplingRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSamplingRuleCommand(input) {
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
    DeleteSamplingRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "XRayClient";
        var commandName = "DeleteSamplingRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSamplingRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteSamplingRuleResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSamplingRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteSamplingRuleCommand(input, context);
    };
    DeleteSamplingRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteSamplingRuleCommand(output, context);
    };
    return DeleteSamplingRuleCommand;
}($Command));
export { DeleteSamplingRuleCommand };
//# sourceMappingURL=DeleteSamplingRuleCommand.js.map