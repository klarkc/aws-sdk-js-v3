import { __extends } from "tslib";
import { GetResolverRuleRequest, GetResolverRuleResponse } from "../models/models_0";
import { deserializeAws_json1_1GetResolverRuleCommand, serializeAws_json1_1GetResolverRuleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the
 * 			outbound Resolver endpoint that the rule is associated with.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetResolverRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResolverRuleCommandInput} for command's `input` shape.
 * @see {@link GetResolverRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResolverRuleCommand = /** @class */ (function (_super) {
    __extends(GetResolverRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetResolverRuleCommand(input) {
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
    GetResolverRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "GetResolverRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetResolverRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetResolverRuleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetResolverRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetResolverRuleCommand(input, context);
    };
    GetResolverRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetResolverRuleCommand(output, context);
    };
    return GetResolverRuleCommand;
}($Command));
export { GetResolverRuleCommand };
//# sourceMappingURL=GetResolverRuleCommand.js.map