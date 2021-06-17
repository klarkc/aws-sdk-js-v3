import { __extends } from "tslib";
import { DescribeRdsDbInstancesRequest, DescribeRdsDbInstancesResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeRdsDbInstancesCommand, serializeAws_json1_1DescribeRdsDbInstancesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes Amazon RDS instances.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 *          <p>This call accepts only one resource-identifying parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeRdsDbInstancesCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeRdsDbInstancesCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeRdsDbInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRdsDbInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeRdsDbInstancesCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRdsDbInstancesCommand = /** @class */ (function (_super) {
    __extends(DescribeRdsDbInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRdsDbInstancesCommand(input) {
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
    DescribeRdsDbInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "DescribeRdsDbInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRdsDbInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRdsDbInstancesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRdsDbInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeRdsDbInstancesCommand(input, context);
    };
    DescribeRdsDbInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeRdsDbInstancesCommand(output, context);
    };
    return DescribeRdsDbInstancesCommand;
}($Command));
export { DescribeRdsDbInstancesCommand };
//# sourceMappingURL=DescribeRdsDbInstancesCommand.js.map