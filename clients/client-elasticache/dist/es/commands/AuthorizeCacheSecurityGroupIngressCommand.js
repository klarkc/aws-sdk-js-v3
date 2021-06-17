import { __extends } from "tslib";
import { AuthorizeCacheSecurityGroupIngressMessage, AuthorizeCacheSecurityGroupIngressResult, } from "../models/models_0";
import { deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommand, serializeAws_queryAuthorizeCacheSecurityGroupIngressCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows network ingress to a cache
 *             security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2
 *             security groups are used as the authorization mechanism.</p>
 *         <note>
 *             <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an
 *             ElastiCache cluster in another region.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, AuthorizeCacheSecurityGroupIngressCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, AuthorizeCacheSecurityGroupIngressCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new AuthorizeCacheSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeCacheSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeCacheSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AuthorizeCacheSecurityGroupIngressCommand = /** @class */ (function (_super) {
    __extends(AuthorizeCacheSecurityGroupIngressCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AuthorizeCacheSecurityGroupIngressCommand(input) {
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
    AuthorizeCacheSecurityGroupIngressCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "AuthorizeCacheSecurityGroupIngressCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AuthorizeCacheSecurityGroupIngressMessage.filterSensitiveLog,
            outputFilterSensitiveLog: AuthorizeCacheSecurityGroupIngressResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AuthorizeCacheSecurityGroupIngressCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryAuthorizeCacheSecurityGroupIngressCommand(input, context);
    };
    AuthorizeCacheSecurityGroupIngressCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommand(output, context);
    };
    return AuthorizeCacheSecurityGroupIngressCommand;
}($Command));
export { AuthorizeCacheSecurityGroupIngressCommand };
//# sourceMappingURL=AuthorizeCacheSecurityGroupIngressCommand.js.map