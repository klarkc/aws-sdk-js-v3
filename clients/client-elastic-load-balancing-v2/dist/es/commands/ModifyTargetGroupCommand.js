import { __extends } from "tslib";
import { ModifyTargetGroupInput, ModifyTargetGroupOutput } from "../models/models_0";
import { deserializeAws_queryModifyTargetGroupCommand, serializeAws_queryModifyTargetGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the health checks used when evaluating the health state of the targets in the
 *       specified target group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, ModifyTargetGroupCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, ModifyTargetGroupCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new ModifyTargetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyTargetGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyTargetGroupCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyTargetGroupCommand = /** @class */ (function (_super) {
    __extends(ModifyTargetGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyTargetGroupCommand(input) {
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
    ModifyTargetGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "ModifyTargetGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyTargetGroupInput.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyTargetGroupOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyTargetGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyTargetGroupCommand(input, context);
    };
    ModifyTargetGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyTargetGroupCommand(output, context);
    };
    return ModifyTargetGroupCommand;
}($Command));
export { ModifyTargetGroupCommand };
//# sourceMappingURL=ModifyTargetGroupCommand.js.map