import { __extends } from "tslib";
import { RevokeCacheSecurityGroupIngressMessage, RevokeCacheSecurityGroupIngressResult } from "../models/models_0";
import { deserializeAws_queryRevokeCacheSecurityGroupIngressCommand, serializeAws_queryRevokeCacheSecurityGroupIngressCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Revokes ingress from a cache security group.
 *             Use this operation to disallow access from an Amazon EC2 security group
 *             that had been previously authorized.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, RevokeCacheSecurityGroupIngressCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, RevokeCacheSecurityGroupIngressCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new RevokeCacheSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeCacheSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link RevokeCacheSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RevokeCacheSecurityGroupIngressCommand = /** @class */ (function (_super) {
    __extends(RevokeCacheSecurityGroupIngressCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RevokeCacheSecurityGroupIngressCommand(input) {
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
    RevokeCacheSecurityGroupIngressCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "RevokeCacheSecurityGroupIngressCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RevokeCacheSecurityGroupIngressMessage.filterSensitiveLog,
            outputFilterSensitiveLog: RevokeCacheSecurityGroupIngressResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RevokeCacheSecurityGroupIngressCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRevokeCacheSecurityGroupIngressCommand(input, context);
    };
    RevokeCacheSecurityGroupIngressCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRevokeCacheSecurityGroupIngressCommand(output, context);
    };
    return RevokeCacheSecurityGroupIngressCommand;
}($Command));
export { RevokeCacheSecurityGroupIngressCommand };
//# sourceMappingURL=RevokeCacheSecurityGroupIngressCommand.js.map