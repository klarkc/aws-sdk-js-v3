import { __extends } from "tslib";
import { DescribeEcsClustersRequest, DescribeEcsClustersResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeEcsClustersCommand, serializeAws_json1_1DescribeEcsClustersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes Amazon ECS clusters that are registered with a stack. If you specify only a stack ID,
 *     you can use the <code>MaxResults</code> and <code>NextToken</code> parameters to paginate the
 *     response. However, AWS OpsWorks Stacks currently supports only one cluster per layer, so the result
 *     set has a maximum of one element.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack or an attached policy that explicitly grants
 *       permission. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 *          <p>This call accepts only one resource-identifying parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeEcsClustersCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeEcsClustersCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeEcsClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEcsClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeEcsClustersCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEcsClustersCommand = /** @class */ (function (_super) {
    __extends(DescribeEcsClustersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEcsClustersCommand(input) {
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
    DescribeEcsClustersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "DescribeEcsClustersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEcsClustersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEcsClustersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEcsClustersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEcsClustersCommand(input, context);
    };
    DescribeEcsClustersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEcsClustersCommand(output, context);
    };
    return DescribeEcsClustersCommand;
}($Command));
export { DescribeEcsClustersCommand };
//# sourceMappingURL=DescribeEcsClustersCommand.js.map