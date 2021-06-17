import { __extends } from "tslib";
import { ModifyTargetGroupAttributesInput, ModifyTargetGroupAttributesOutput } from "../models/models_0";
import { deserializeAws_queryModifyTargetGroupAttributesCommand, serializeAws_queryModifyTargetGroupAttributesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the specified attributes of the specified target group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, ModifyTargetGroupAttributesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, ModifyTargetGroupAttributesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new ModifyTargetGroupAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyTargetGroupAttributesCommandInput} for command's `input` shape.
 * @see {@link ModifyTargetGroupAttributesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyTargetGroupAttributesCommand = /** @class */ (function (_super) {
    __extends(ModifyTargetGroupAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyTargetGroupAttributesCommand(input) {
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
    ModifyTargetGroupAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "ModifyTargetGroupAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyTargetGroupAttributesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyTargetGroupAttributesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyTargetGroupAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyTargetGroupAttributesCommand(input, context);
    };
    ModifyTargetGroupAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyTargetGroupAttributesCommand(output, context);
    };
    return ModifyTargetGroupAttributesCommand;
}($Command));
export { ModifyTargetGroupAttributesCommand };
//# sourceMappingURL=ModifyTargetGroupAttributesCommand.js.map