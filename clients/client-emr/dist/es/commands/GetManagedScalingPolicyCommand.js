import { __extends } from "tslib";
import { GetManagedScalingPolicyInput, GetManagedScalingPolicyOutput } from "../models/models_0";
import { deserializeAws_json1_1GetManagedScalingPolicyCommand, serializeAws_json1_1GetManagedScalingPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Fetches the attached managed scaling policy for an Amazon EMR cluster. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, GetManagedScalingPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, GetManagedScalingPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new GetManagedScalingPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetManagedScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link GetManagedScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetManagedScalingPolicyCommand = /** @class */ (function (_super) {
    __extends(GetManagedScalingPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetManagedScalingPolicyCommand(input) {
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
    GetManagedScalingPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "GetManagedScalingPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetManagedScalingPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetManagedScalingPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetManagedScalingPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetManagedScalingPolicyCommand(input, context);
    };
    GetManagedScalingPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetManagedScalingPolicyCommand(output, context);
    };
    return GetManagedScalingPolicyCommand;
}($Command));
export { GetManagedScalingPolicyCommand };
//# sourceMappingURL=GetManagedScalingPolicyCommand.js.map