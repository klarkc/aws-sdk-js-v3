import { __extends } from "tslib";
import { GetResolverRuleAssociationRequest, GetResolverRuleAssociationResponse } from "../models/models_0";
import { deserializeAws_json1_1GetResolverRuleAssociationCommand, serializeAws_json1_1GetResolverRuleAssociationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about an association between a specified Resolver rule and a VPC. You associate a Resolver rule and a VPC using
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverRuleAssociationCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverRuleAssociationCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetResolverRuleAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResolverRuleAssociationCommandInput} for command's `input` shape.
 * @see {@link GetResolverRuleAssociationCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResolverRuleAssociationCommand = /** @class */ (function (_super) {
    __extends(GetResolverRuleAssociationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetResolverRuleAssociationCommand(input) {
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
    GetResolverRuleAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "GetResolverRuleAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetResolverRuleAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetResolverRuleAssociationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetResolverRuleAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetResolverRuleAssociationCommand(input, context);
    };
    GetResolverRuleAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetResolverRuleAssociationCommand(output, context);
    };
    return GetResolverRuleAssociationCommand;
}($Command));
export { GetResolverRuleAssociationCommand };
//# sourceMappingURL=GetResolverRuleAssociationCommand.js.map