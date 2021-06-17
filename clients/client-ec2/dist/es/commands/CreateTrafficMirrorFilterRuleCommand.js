import { __extends } from "tslib";
import { CreateTrafficMirrorFilterRuleRequest, CreateTrafficMirrorFilterRuleResult } from "../models/models_1";
import { deserializeAws_ec2CreateTrafficMirrorFilterRuleCommand, serializeAws_ec2CreateTrafficMirrorFilterRuleCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Traffic Mirror filter rule. </p>
 *          <p>A Traffic Mirror rule defines the Traffic Mirror source traffic to mirror.</p>
 *          <p>You need the Traffic Mirror filter ID when you create the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTrafficMirrorFilterRuleCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTrafficMirrorFilterRuleCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTrafficMirrorFilterRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrafficMirrorFilterRuleCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficMirrorFilterRuleCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTrafficMirrorFilterRuleCommand = /** @class */ (function (_super) {
    __extends(CreateTrafficMirrorFilterRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTrafficMirrorFilterRuleCommand(input) {
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
    CreateTrafficMirrorFilterRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateTrafficMirrorFilterRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTrafficMirrorFilterRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTrafficMirrorFilterRuleResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTrafficMirrorFilterRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateTrafficMirrorFilterRuleCommand(input, context);
    };
    CreateTrafficMirrorFilterRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateTrafficMirrorFilterRuleCommand(output, context);
    };
    return CreateTrafficMirrorFilterRuleCommand;
}($Command));
export { CreateTrafficMirrorFilterRuleCommand };
//# sourceMappingURL=CreateTrafficMirrorFilterRuleCommand.js.map