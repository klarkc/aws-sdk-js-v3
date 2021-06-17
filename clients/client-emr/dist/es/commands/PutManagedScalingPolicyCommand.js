import { __extends } from "tslib";
import { PutManagedScalingPolicyInput, PutManagedScalingPolicyOutput } from "../models/models_0";
import { deserializeAws_json1_1PutManagedScalingPolicyCommand, serializeAws_json1_1PutManagedScalingPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates a managed scaling policy for an Amazon EMR cluster. The managed
 *          scaling policy defines the limits for resources, such as EC2 instances that can be added or
 *          terminated from a cluster. The policy only applies to the core and task nodes. The master
 *          node cannot be scaled after initial configuration. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, PutManagedScalingPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, PutManagedScalingPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new PutManagedScalingPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutManagedScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link PutManagedScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutManagedScalingPolicyCommand = /** @class */ (function (_super) {
    __extends(PutManagedScalingPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutManagedScalingPolicyCommand(input) {
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
    PutManagedScalingPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "PutManagedScalingPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutManagedScalingPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: PutManagedScalingPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutManagedScalingPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutManagedScalingPolicyCommand(input, context);
    };
    PutManagedScalingPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutManagedScalingPolicyCommand(output, context);
    };
    return PutManagedScalingPolicyCommand;
}($Command));
export { PutManagedScalingPolicyCommand };
//# sourceMappingURL=PutManagedScalingPolicyCommand.js.map