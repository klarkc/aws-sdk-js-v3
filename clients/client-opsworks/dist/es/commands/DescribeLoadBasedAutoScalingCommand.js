import { __extends } from "tslib";
import { DescribeLoadBasedAutoScalingRequest, DescribeLoadBasedAutoScalingResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeLoadBasedAutoScalingCommand, serializeAws_json1_1DescribeLoadBasedAutoScalingCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes load-based auto scaling configurations for specified layers.</p>
 *          <note>
 *             <p>You must specify at least one of the parameters.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeLoadBasedAutoScalingCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeLoadBasedAutoScalingCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeLoadBasedAutoScalingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLoadBasedAutoScalingCommandInput} for command's `input` shape.
 * @see {@link DescribeLoadBasedAutoScalingCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLoadBasedAutoScalingCommand = /** @class */ (function (_super) {
    __extends(DescribeLoadBasedAutoScalingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLoadBasedAutoScalingCommand(input) {
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
    DescribeLoadBasedAutoScalingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "DescribeLoadBasedAutoScalingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLoadBasedAutoScalingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLoadBasedAutoScalingResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLoadBasedAutoScalingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeLoadBasedAutoScalingCommand(input, context);
    };
    DescribeLoadBasedAutoScalingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeLoadBasedAutoScalingCommand(output, context);
    };
    return DescribeLoadBasedAutoScalingCommand;
}($Command));
export { DescribeLoadBasedAutoScalingCommand };
//# sourceMappingURL=DescribeLoadBasedAutoScalingCommand.js.map