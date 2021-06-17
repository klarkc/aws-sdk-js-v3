import { __extends } from "tslib";
import { UpdateResolverRuleRequest, UpdateResolverRuleResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateResolverRuleCommand, serializeAws_json1_1UpdateResolverRuleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates settings for a specified Resolver rule. <code>ResolverRuleId</code> is required, and all other parameters are optional.
 * 			If you don't specify a parameter, it retains its current value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateResolverRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateResolverRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new UpdateResolverRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResolverRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateResolverRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateResolverRuleCommand = /** @class */ (function (_super) {
    __extends(UpdateResolverRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateResolverRuleCommand(input) {
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
    UpdateResolverRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "UpdateResolverRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateResolverRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateResolverRuleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateResolverRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateResolverRuleCommand(input, context);
    };
    UpdateResolverRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateResolverRuleCommand(output, context);
    };
    return UpdateResolverRuleCommand;
}($Command));
export { UpdateResolverRuleCommand };
//# sourceMappingURL=UpdateResolverRuleCommand.js.map