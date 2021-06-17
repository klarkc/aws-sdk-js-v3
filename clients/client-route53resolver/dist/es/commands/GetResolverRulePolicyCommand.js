import { __extends } from "tslib";
import { GetResolverRulePolicyRequest, GetResolverRulePolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1GetResolverRulePolicyCommand, serializeAws_json1_1GetResolverRulePolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the Resolver rule policy for a specified rule. A Resolver rule policy includes the rule that you want to share
 * 			with another account, the account that you want to share the rule with, and the Resolver operations that you want to allow the account to use. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverRulePolicyCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverRulePolicyCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetResolverRulePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResolverRulePolicyCommandInput} for command's `input` shape.
 * @see {@link GetResolverRulePolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResolverRulePolicyCommand = /** @class */ (function (_super) {
    __extends(GetResolverRulePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetResolverRulePolicyCommand(input) {
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
    GetResolverRulePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "GetResolverRulePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetResolverRulePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetResolverRulePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetResolverRulePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetResolverRulePolicyCommand(input, context);
    };
    GetResolverRulePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetResolverRulePolicyCommand(output, context);
    };
    return GetResolverRulePolicyCommand;
}($Command));
export { GetResolverRulePolicyCommand };
//# sourceMappingURL=GetResolverRulePolicyCommand.js.map