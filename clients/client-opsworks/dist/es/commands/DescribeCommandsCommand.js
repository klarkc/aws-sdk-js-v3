import { __extends } from "tslib";
import { DescribeCommandsRequest, DescribeCommandsResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeCommandsCommand, serializeAws_json1_1DescribeCommandsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the results of specified commands.</p>
 *          <note>
 *             <p>This call accepts only one resource-identifying parameter.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeCommandsCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeCommandsCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeCommandsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCommandsCommandInput} for command's `input` shape.
 * @see {@link DescribeCommandsCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCommandsCommand = /** @class */ (function (_super) {
    __extends(DescribeCommandsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCommandsCommand(input) {
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
    DescribeCommandsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "DescribeCommandsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCommandsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCommandsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCommandsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeCommandsCommand(input, context);
    };
    DescribeCommandsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeCommandsCommand(output, context);
    };
    return DescribeCommandsCommand;
}($Command));
export { DescribeCommandsCommand };
//# sourceMappingURL=DescribeCommandsCommand.js.map