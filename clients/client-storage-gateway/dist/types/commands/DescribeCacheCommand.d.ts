import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeCacheInput, DescribeCacheOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCacheCommandInput extends DescribeCacheInput {
}
export interface DescribeCacheCommandOutput extends DescribeCacheOutput, __MetadataBearer {
}
/**
 * <p>Returns information about the cache of a gateway. This operation is only supported in
 *          the cached volume, tape, and file gateway types.</p>
 *
 *          <p>The response includes disk IDs that are configured as cache, and it includes the amount
 *          of cache allocated and used.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeCacheCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeCacheCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCacheCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCacheCommand extends $Command<DescribeCacheCommandInput, DescribeCacheCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeCacheCommandInput;
    constructor(input: DescribeCacheCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCacheCommandInput, DescribeCacheCommandOutput>;
    private serialize;
    private deserialize;
}
