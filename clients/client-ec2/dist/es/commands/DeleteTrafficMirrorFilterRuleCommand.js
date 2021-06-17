import { __extends } from "tslib";
import { DeleteTrafficMirrorFilterRuleRequest, DeleteTrafficMirrorFilterRuleResult } from "../models/models_2";
import { deserializeAws_ec2DeleteTrafficMirrorFilterRuleCommand, serializeAws_ec2DeleteTrafficMirrorFilterRuleCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified Traffic Mirror rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTrafficMirrorFilterRuleCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTrafficMirrorFilterRuleCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTrafficMirrorFilterRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTrafficMirrorFilterRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteTrafficMirrorFilterRuleCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTrafficMirrorFilterRuleCommand = /** @class */ (function (_super) {
    __extends(DeleteTrafficMirrorFilterRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTrafficMirrorFilterRuleCommand(input) {
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
    DeleteTrafficMirrorFilterRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteTrafficMirrorFilterRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTrafficMirrorFilterRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTrafficMirrorFilterRuleResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTrafficMirrorFilterRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteTrafficMirrorFilterRuleCommand(input, context);
    };
    DeleteTrafficMirrorFilterRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteTrafficMirrorFilterRuleCommand(output, context);
    };
    return DeleteTrafficMirrorFilterRuleCommand;
}($Command));
export { DeleteTrafficMirrorFilterRuleCommand };
//# sourceMappingURL=DeleteTrafficMirrorFilterRuleCommand.js.map