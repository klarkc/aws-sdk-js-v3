import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { AuthorizeCacheSecurityGroupIngressMessage, AuthorizeCacheSecurityGroupIngressResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AuthorizeCacheSecurityGroupIngressCommandInput extends AuthorizeCacheSecurityGroupIngressMessage {
}
export interface AuthorizeCacheSecurityGroupIngressCommandOutput extends AuthorizeCacheSecurityGroupIngressResult, __MetadataBearer {
}
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
export declare class AuthorizeCacheSecurityGroupIngressCommand extends $Command<AuthorizeCacheSecurityGroupIngressCommandInput, AuthorizeCacheSecurityGroupIngressCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: AuthorizeCacheSecurityGroupIngressCommandInput;
    constructor(input: AuthorizeCacheSecurityGroupIngressCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AuthorizeCacheSecurityGroupIngressCommandInput, AuthorizeCacheSecurityGroupIngressCommandOutput>;
    private serialize;
    private deserialize;
}
