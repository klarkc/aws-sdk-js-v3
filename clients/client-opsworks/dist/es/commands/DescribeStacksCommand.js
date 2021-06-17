import { __extends } from "tslib";
import { DescribeStacksRequest, DescribeStacksResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeStacksCommand, serializeAws_json1_1DescribeStacksCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Requests a description of one or more stacks.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeStacksCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeStacksCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeStacksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStacksCommandInput} for command's `input` shape.
 * @see {@link DescribeStacksCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeStacksCommand = /** @class */ (function (_super) {
    __extends(DescribeStacksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeStacksCommand(input) {
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
    DescribeStacksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "DescribeStacksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeStacksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeStacksResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeStacksCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeStacksCommand(input, context);
    };
    DescribeStacksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeStacksCommand(output, context);
    };
    return DescribeStacksCommand;
}($Command));
export { DescribeStacksCommand };
//# sourceMappingURL=DescribeStacksCommand.js.map