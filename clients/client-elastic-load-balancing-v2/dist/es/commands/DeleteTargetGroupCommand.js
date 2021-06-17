import { __extends } from "tslib";
import { DeleteTargetGroupInput, DeleteTargetGroupOutput } from "../models/models_0";
import { deserializeAws_queryDeleteTargetGroupCommand, serializeAws_queryDeleteTargetGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified target group.</p>
 *          <p>You can delete a target group if it is not referenced by any actions. Deleting a target
 *       group also deletes any associated health checks. Deleting a target group does not affect its
 *       registered targets. For example, any EC2 instances continue to run until you stop or terminate
 *       them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DeleteTargetGroupCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DeleteTargetGroupCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new DeleteTargetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTargetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteTargetGroupCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTargetGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteTargetGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTargetGroupCommand(input) {
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
    DeleteTargetGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "DeleteTargetGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTargetGroupInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTargetGroupOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTargetGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteTargetGroupCommand(input, context);
    };
    DeleteTargetGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteTargetGroupCommand(output, context);
    };
    return DeleteTargetGroupCommand;
}($Command));
export { DeleteTargetGroupCommand };
//# sourceMappingURL=DeleteTargetGroupCommand.js.map