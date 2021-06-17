import { __extends } from "tslib";
import { UpdateSamplingRuleRequest, UpdateSamplingRuleResult } from "../models/models_0";
import { deserializeAws_restJson1UpdateSamplingRuleCommand, serializeAws_restJson1UpdateSamplingRuleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies a sampling rule's configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, UpdateSamplingRuleCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, UpdateSamplingRuleCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new UpdateSamplingRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSamplingRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateSamplingRuleCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSamplingRuleCommand = /** @class */ (function (_super) {
    __extends(UpdateSamplingRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSamplingRuleCommand(input) {
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
    UpdateSamplingRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "XRayClient";
        var commandName = "UpdateSamplingRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSamplingRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSamplingRuleResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSamplingRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateSamplingRuleCommand(input, context);
    };
    UpdateSamplingRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateSamplingRuleCommand(output, context);
    };
    return UpdateSamplingRuleCommand;
}($Command));
export { UpdateSamplingRuleCommand };
//# sourceMappingURL=UpdateSamplingRuleCommand.js.map