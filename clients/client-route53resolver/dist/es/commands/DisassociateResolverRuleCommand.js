import { __extends } from "tslib";
import { DisassociateResolverRuleRequest, DisassociateResolverRuleResponse } from "../models/models_0";
import { deserializeAws_json1_1DisassociateResolverRuleCommand, serializeAws_json1_1DisassociateResolverRuleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the association between a specified Resolver rule and a specified VPC.</p>
 * 		       <important>
 * 			         <p>If you disassociate a Resolver rule from a VPC, Resolver stops forwarding DNS queries for the
 * 				domain name that you specified in the Resolver rule. </p>
 * 		       </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DisassociateResolverRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DisassociateResolverRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new DisassociateResolverRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateResolverRuleCommandInput} for command's `input` shape.
 * @see {@link DisassociateResolverRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateResolverRuleCommand = /** @class */ (function (_super) {
    __extends(DisassociateResolverRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateResolverRuleCommand(input) {
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
    DisassociateResolverRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "DisassociateResolverRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateResolverRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateResolverRuleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateResolverRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateResolverRuleCommand(input, context);
    };
    DisassociateResolverRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateResolverRuleCommand(output, context);
    };
    return DisassociateResolverRuleCommand;
}($Command));
export { DisassociateResolverRuleCommand };
//# sourceMappingURL=DisassociateResolverRuleCommand.js.map