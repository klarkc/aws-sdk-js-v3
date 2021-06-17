import { __extends } from "tslib";
import { GetResolverQueryLogConfigPolicyRequest, GetResolverQueryLogConfigPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1GetResolverQueryLogConfigPolicyCommand, serializeAws_json1_1GetResolverQueryLogConfigPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a query logging policy. A query logging policy specifies the Resolver query logging
 * 			operations and resources that you want to allow another AWS account to be able to use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverQueryLogConfigPolicyCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverQueryLogConfigPolicyCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetResolverQueryLogConfigPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResolverQueryLogConfigPolicyCommandInput} for command's `input` shape.
 * @see {@link GetResolverQueryLogConfigPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResolverQueryLogConfigPolicyCommand = /** @class */ (function (_super) {
    __extends(GetResolverQueryLogConfigPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetResolverQueryLogConfigPolicyCommand(input) {
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
    GetResolverQueryLogConfigPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "GetResolverQueryLogConfigPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetResolverQueryLogConfigPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetResolverQueryLogConfigPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetResolverQueryLogConfigPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetResolverQueryLogConfigPolicyCommand(input, context);
    };
    GetResolverQueryLogConfigPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetResolverQueryLogConfigPolicyCommand(output, context);
    };
    return GetResolverQueryLogConfigPolicyCommand;
}($Command));
export { GetResolverQueryLogConfigPolicyCommand };
//# sourceMappingURL=GetResolverQueryLogConfigPolicyCommand.js.map