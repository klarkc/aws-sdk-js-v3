import { __extends } from "tslib";
import { RemoveManagedScalingPolicyInput, RemoveManagedScalingPolicyOutput } from "../models/models_0";
import { deserializeAws_json1_1RemoveManagedScalingPolicyCommand, serializeAws_json1_1RemoveManagedScalingPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Removes a managed scaling policy from a specified EMR cluster. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, RemoveManagedScalingPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, RemoveManagedScalingPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new RemoveManagedScalingPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveManagedScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link RemoveManagedScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveManagedScalingPolicyCommand = /** @class */ (function (_super) {
    __extends(RemoveManagedScalingPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveManagedScalingPolicyCommand(input) {
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
    RemoveManagedScalingPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "RemoveManagedScalingPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveManagedScalingPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveManagedScalingPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveManagedScalingPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RemoveManagedScalingPolicyCommand(input, context);
    };
    RemoveManagedScalingPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RemoveManagedScalingPolicyCommand(output, context);
    };
    return RemoveManagedScalingPolicyCommand;
}($Command));
export { RemoveManagedScalingPolicyCommand };
//# sourceMappingURL=RemoveManagedScalingPolicyCommand.js.map