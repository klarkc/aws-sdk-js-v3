import { __extends } from "tslib";
import { RemoveAutoScalingPolicyInput, RemoveAutoScalingPolicyOutput } from "../models/models_0";
import { deserializeAws_json1_1RemoveAutoScalingPolicyCommand, serializeAws_json1_1RemoveAutoScalingPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes an automatic scaling policy from a specified instance group within an EMR
 *          cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, RemoveAutoScalingPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, RemoveAutoScalingPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new RemoveAutoScalingPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveAutoScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link RemoveAutoScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveAutoScalingPolicyCommand = /** @class */ (function (_super) {
    __extends(RemoveAutoScalingPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveAutoScalingPolicyCommand(input) {
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
    RemoveAutoScalingPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "RemoveAutoScalingPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveAutoScalingPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveAutoScalingPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveAutoScalingPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RemoveAutoScalingPolicyCommand(input, context);
    };
    RemoveAutoScalingPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RemoveAutoScalingPolicyCommand(output, context);
    };
    return RemoveAutoScalingPolicyCommand;
}($Command));
export { RemoveAutoScalingPolicyCommand };
//# sourceMappingURL=RemoveAutoScalingPolicyCommand.js.map