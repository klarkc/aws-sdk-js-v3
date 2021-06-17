import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CreateCacheParameterGroupMessage, CreateCacheParameterGroupResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCacheParameterGroupCommandInput extends CreateCacheParameterGroupMessage {
}
export interface CreateCacheParameterGroupCommandOutput extends CreateCacheParameterGroupResult, __MetadataBearer {
}
/**
 * <p>Creates a new Amazon ElastiCache cache parameter group. An ElastiCache
 *             cache parameter group is a collection of parameters and their values that are applied to all of the nodes
 *             in any cluster or replication group using the CacheParameterGroup.</p>
 *         <p>A newly created CacheParameterGroup is an exact duplicate of the default parameter group
 *             for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can
 *             change the values of specific parameters. For more information, see:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html">ModifyCacheParameterGroup</a> in the ElastiCache API Reference.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ParameterGroups.html">Parameters and Parameter Groups</a> in the ElastiCache User Guide.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateCacheParameterGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateCacheParameterGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new CreateCacheParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCacheParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CreateCacheParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCacheParameterGroupCommand extends $Command<CreateCacheParameterGroupCommandInput, CreateCacheParameterGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: CreateCacheParameterGroupCommandInput;
    constructor(input: CreateCacheParameterGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCacheParameterGroupCommandInput, CreateCacheParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
