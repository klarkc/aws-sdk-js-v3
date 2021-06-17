"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizeCacheSecurityGroupIngressCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class AuthorizeCacheSecurityGroupIngressCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "ElastiCacheClient";
        const commandName = "AuthorizeCacheSecurityGroupIngressCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AuthorizeCacheSecurityGroupIngressMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AuthorizeCacheSecurityGroupIngressResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryAuthorizeCacheSecurityGroupIngressCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommand(output, context);
    }
}
exports.AuthorizeCacheSecurityGroupIngressCommand = AuthorizeCacheSecurityGroupIngressCommand;
//# sourceMappingURL=AuthorizeCacheSecurityGroupIngressCommand.js.map