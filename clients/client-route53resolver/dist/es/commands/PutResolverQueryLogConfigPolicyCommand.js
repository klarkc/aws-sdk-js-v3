import { __extends } from "tslib";
import { PutResolverQueryLogConfigPolicyRequest, PutResolverQueryLogConfigPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1PutResolverQueryLogConfigPolicyCommand, serializeAws_json1_1PutResolverQueryLogConfigPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Specifies an AWS account that you want to share a query logging configuration with, the query logging configuration that you want to share,
 * 			and the operations that you want the account to be able to perform on the configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, PutResolverQueryLogConfigPolicyCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, PutResolverQueryLogConfigPolicyCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new PutResolverQueryLogConfigPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutResolverQueryLogConfigPolicyCommandInput} for command's `input` shape.
 * @see {@link PutResolverQueryLogConfigPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutResolverQueryLogConfigPolicyCommand = /** @class */ (function (_super) {
    __extends(PutResolverQueryLogConfigPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutResolverQueryLogConfigPolicyCommand(input) {
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
    PutResolverQueryLogConfigPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "PutResolverQueryLogConfigPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutResolverQueryLogConfigPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutResolverQueryLogConfigPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutResolverQueryLogConfigPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutResolverQueryLogConfigPolicyCommand(input, context);
    };
    PutResolverQueryLogConfigPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutResolverQueryLogConfigPolicyCommand(output, context);
    };
    return PutResolverQueryLogConfigPolicyCommand;
}($Command));
export { PutResolverQueryLogConfigPolicyCommand };
//# sourceMappingURL=PutResolverQueryLogConfigPolicyCommand.js.map