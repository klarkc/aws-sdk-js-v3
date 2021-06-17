import { __extends } from "tslib";
import { ModifyTrafficMirrorFilterRuleRequest, ModifyTrafficMirrorFilterRuleResult } from "../models/models_4";
import { deserializeAws_ec2ModifyTrafficMirrorFilterRuleCommand, serializeAws_ec2ModifyTrafficMirrorFilterRuleCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the specified Traffic Mirror rule.</p>
 *          <p>
 *             <code>DestinationCidrBlock</code> and <code>SourceCidrBlock</code> must both be an IPv4
 *          range or an IPv6 range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTrafficMirrorFilterRuleCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTrafficMirrorFilterRuleCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyTrafficMirrorFilterRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyTrafficMirrorFilterRuleCommandInput} for command's `input` shape.
 * @see {@link ModifyTrafficMirrorFilterRuleCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyTrafficMirrorFilterRuleCommand = /** @class */ (function (_super) {
    __extends(ModifyTrafficMirrorFilterRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyTrafficMirrorFilterRuleCommand(input) {
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
    ModifyTrafficMirrorFilterRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyTrafficMirrorFilterRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyTrafficMirrorFilterRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyTrafficMirrorFilterRuleResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyTrafficMirrorFilterRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyTrafficMirrorFilterRuleCommand(input, context);
    };
    ModifyTrafficMirrorFilterRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyTrafficMirrorFilterRuleCommand(output, context);
    };
    return ModifyTrafficMirrorFilterRuleCommand;
}($Command));
export { ModifyTrafficMirrorFilterRuleCommand };
//# sourceMappingURL=ModifyTrafficMirrorFilterRuleCommand.js.map