import { __extends } from "tslib";
import { DescribeStackSummaryRequest, DescribeStackSummaryResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeStackSummaryCommand, serializeAws_json1_1DescribeStackSummaryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the number of layers and apps in a specified stack, and the number of instances in
 *       each state, such as <code>running_setup</code> or <code>online</code>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeStackSummaryCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeStackSummaryCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeStackSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackSummaryCommandInput} for command's `input` shape.
 * @see {@link DescribeStackSummaryCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeStackSummaryCommand = /** @class */ (function (_super) {
    __extends(DescribeStackSummaryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeStackSummaryCommand(input) {
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
    DescribeStackSummaryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "DescribeStackSummaryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeStackSummaryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeStackSummaryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeStackSummaryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeStackSummaryCommand(input, context);
    };
    DescribeStackSummaryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeStackSummaryCommand(output, context);
    };
    return DescribeStackSummaryCommand;
}($Command));
export { DescribeStackSummaryCommand };
//# sourceMappingURL=DescribeStackSummaryCommand.js.map