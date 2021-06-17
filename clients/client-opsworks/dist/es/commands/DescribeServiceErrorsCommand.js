import { __extends } from "tslib";
import { DescribeServiceErrorsRequest, DescribeServiceErrorsResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeServiceErrorsCommand, serializeAws_json1_1DescribeServiceErrorsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes AWS OpsWorks Stacks service errors.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 *          <p>This call accepts only one resource-identifying parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeServiceErrorsCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeServiceErrorsCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeServiceErrorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServiceErrorsCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceErrorsCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeServiceErrorsCommand = /** @class */ (function (_super) {
    __extends(DescribeServiceErrorsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeServiceErrorsCommand(input) {
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
    DescribeServiceErrorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "DescribeServiceErrorsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeServiceErrorsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeServiceErrorsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeServiceErrorsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeServiceErrorsCommand(input, context);
    };
    DescribeServiceErrorsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeServiceErrorsCommand(output, context);
    };
    return DescribeServiceErrorsCommand;
}($Command));
export { DescribeServiceErrorsCommand };
//# sourceMappingURL=DescribeServiceErrorsCommand.js.map