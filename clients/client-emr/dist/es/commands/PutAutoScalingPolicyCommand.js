import { __extends } from "tslib";
import { PutAutoScalingPolicyInput, PutAutoScalingPolicyOutput } from "../models/models_0";
import { deserializeAws_json1_1PutAutoScalingPolicyCommand, serializeAws_json1_1PutAutoScalingPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates an automatic scaling policy for a core instance group or task
 *          instance group in an Amazon EMR cluster. The automatic scaling policy defines how an
 *          instance group dynamically adds and terminates EC2 instances in response to the value of a
 *          CloudWatch metric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, PutAutoScalingPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, PutAutoScalingPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new PutAutoScalingPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAutoScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link PutAutoScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutAutoScalingPolicyCommand = /** @class */ (function (_super) {
    __extends(PutAutoScalingPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutAutoScalingPolicyCommand(input) {
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
    PutAutoScalingPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "PutAutoScalingPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutAutoScalingPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: PutAutoScalingPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutAutoScalingPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutAutoScalingPolicyCommand(input, context);
    };
    PutAutoScalingPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutAutoScalingPolicyCommand(output, context);
    };
    return PutAutoScalingPolicyCommand;
}($Command));
export { PutAutoScalingPolicyCommand };
//# sourceMappingURL=PutAutoScalingPolicyCommand.js.map