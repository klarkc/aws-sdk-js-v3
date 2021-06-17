import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { RevokeCacheSecurityGroupIngressMessage, RevokeCacheSecurityGroupIngressResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RevokeCacheSecurityGroupIngressCommandInput extends RevokeCacheSecurityGroupIngressMessage {
}
export interface RevokeCacheSecurityGroupIngressCommandOutput extends RevokeCacheSecurityGroupIngressResult, __MetadataBearer {
}
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
export declare class RevokeCacheSecurityGroupIngressCommand extends $Command<RevokeCacheSecurityGroupIngressCommandInput, RevokeCacheSecurityGroupIngressCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: RevokeCacheSecurityGroupIngressCommandInput;
    constructor(input: RevokeCacheSecurityGroupIngressCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokeCacheSecurityGroupIngressCommandInput, RevokeCacheSecurityGroupIngressCommandOutput>;
    private serialize;
    private deserialize;
}
