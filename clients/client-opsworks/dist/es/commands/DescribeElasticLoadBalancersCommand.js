import { __extends } from "tslib";
import { DescribeElasticLoadBalancersRequest, DescribeElasticLoadBalancersResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeElasticLoadBalancersCommand, serializeAws_json1_1DescribeElasticLoadBalancersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a stack's Elastic Load Balancing instances.</p>
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
 * import { OpsWorksClient, DescribeElasticLoadBalancersCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeElasticLoadBalancersCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeElasticLoadBalancersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeElasticLoadBalancersCommandInput} for command's `input` shape.
 * @see {@link DescribeElasticLoadBalancersCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeElasticLoadBalancersCommand = /** @class */ (function (_super) {
    __extends(DescribeElasticLoadBalancersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeElasticLoadBalancersCommand(input) {
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
    DescribeElasticLoadBalancersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "DescribeElasticLoadBalancersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeElasticLoadBalancersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeElasticLoadBalancersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeElasticLoadBalancersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeElasticLoadBalancersCommand(input, context);
    };
    DescribeElasticLoadBalancersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeElasticLoadBalancersCommand(output, context);
    };
    return DescribeElasticLoadBalancersCommand;
}($Command));
export { DescribeElasticLoadBalancersCommand };
//# sourceMappingURL=DescribeElasticLoadBalancersCommand.js.map