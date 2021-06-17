import { __extends } from "tslib";
import { AssociateResolverQueryLogConfigRequest, AssociateResolverQueryLogConfigResponse } from "../models/models_0";
import { deserializeAws_json1_1AssociateResolverQueryLogConfigCommand, serializeAws_json1_1AssociateResolverQueryLogConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates an Amazon VPC with a specified query logging configuration. Route 53 Resolver logs DNS queries that originate in all of the Amazon VPCs
 * 			that are associated with a specified query logging configuration. To associate more than one VPC with a configuration, submit one <code>AssociateResolverQueryLogConfig</code>
 * 			request for each VPC.</p>
 *
 * 		       <note>
 *             <p>The VPCs that you associate with a query logging configuration must be in the same Region as the configuration.</p>
 *          </note>
 *
 * 		       <p>To remove a VPC from a query logging configuration, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>.
 * 			</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, AssociateResolverQueryLogConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, AssociateResolverQueryLogConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new AssociateResolverQueryLogConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateResolverQueryLogConfigCommandInput} for command's `input` shape.
 * @see {@link AssociateResolverQueryLogConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateResolverQueryLogConfigCommand = /** @class */ (function (_super) {
    __extends(AssociateResolverQueryLogConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateResolverQueryLogConfigCommand(input) {
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
    AssociateResolverQueryLogConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "AssociateResolverQueryLogConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateResolverQueryLogConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateResolverQueryLogConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateResolverQueryLogConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateResolverQueryLogConfigCommand(input, context);
    };
    AssociateResolverQueryLogConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateResolverQueryLogConfigCommand(output, context);
    };
    return AssociateResolverQueryLogConfigCommand;
}($Command));
export { AssociateResolverQueryLogConfigCommand };
//# sourceMappingURL=AssociateResolverQueryLogConfigCommand.js.map