import { __extends } from "tslib";
import { AttachElasticLoadBalancerRequest } from "../models/models_0";
import { deserializeAws_json1_1AttachElasticLoadBalancerCommand, serializeAws_json1_1AttachElasticLoadBalancerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches an Elastic Load Balancing load balancer to a specified layer. AWS OpsWorks Stacks does not support
 *           Application Load Balancer. You can only use Classic Load Balancer with AWS OpsWorks Stacks.
 *           For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/layers-elb.html">Elastic Load
 *         Balancing</a>.</p>
 *          <note>
 *             <p>You must create the Elastic Load Balancing instance separately, by using the Elastic Load Balancing console, API, or CLI. For
 *         more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/Welcome.html"> Elastic
 *           Load Balancing Developer Guide</a>.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, AttachElasticLoadBalancerCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, AttachElasticLoadBalancerCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new AttachElasticLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachElasticLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link AttachElasticLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachElasticLoadBalancerCommand = /** @class */ (function (_super) {
    __extends(AttachElasticLoadBalancerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AttachElasticLoadBalancerCommand(input) {
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
    AttachElasticLoadBalancerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "AttachElasticLoadBalancerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AttachElasticLoadBalancerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AttachElasticLoadBalancerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AttachElasticLoadBalancerCommand(input, context);
    };
    AttachElasticLoadBalancerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AttachElasticLoadBalancerCommand(output, context);
    };
    return AttachElasticLoadBalancerCommand;
}($Command));
export { AttachElasticLoadBalancerCommand };
//# sourceMappingURL=AttachElasticLoadBalancerCommand.js.map