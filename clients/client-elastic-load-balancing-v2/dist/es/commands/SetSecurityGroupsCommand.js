import { __extends } from "tslib";
import { SetSecurityGroupsInput, SetSecurityGroupsOutput } from "../models/models_0";
import { deserializeAws_querySetSecurityGroupsCommand, serializeAws_querySetSecurityGroupsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates the specified security groups with the specified Application Load Balancer. The
 *       specified security groups override the previously associated security groups.</p>
 *          <p>You can't specify a security group for a Network Load Balancer or Gateway Load
 *       Balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, SetSecurityGroupsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, SetSecurityGroupsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new SetSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link SetSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetSecurityGroupsCommand = /** @class */ (function (_super) {
    __extends(SetSecurityGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetSecurityGroupsCommand(input) {
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
    SetSecurityGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "SetSecurityGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetSecurityGroupsInput.filterSensitiveLog,
            outputFilterSensitiveLog: SetSecurityGroupsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetSecurityGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_querySetSecurityGroupsCommand(input, context);
    };
    SetSecurityGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_querySetSecurityGroupsCommand(output, context);
    };
    return SetSecurityGroupsCommand;
}($Command));
export { SetSecurityGroupsCommand };
//# sourceMappingURL=SetSecurityGroupsCommand.js.map