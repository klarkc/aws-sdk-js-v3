import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { BatchGetAggregateResourceConfigRequest, BatchGetAggregateResourceConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchGetAggregateResourceConfigCommandInput extends BatchGetAggregateResourceConfigRequest {
}
export interface BatchGetAggregateResourceConfigCommandOutput extends BatchGetAggregateResourceConfigResponse, __MetadataBearer {
}
/**
 * <p>Returns the current configuration items for resources that are present in your AWS Config aggregator. The operation also returns a list of resources that are not processed in the current request.
 * 			If there are no unprocessed resources, the operation returns an empty <code>unprocessedResourceIdentifiers</code> list. </p>
 *
 * 		       <note>
 *             <ul>
 *                <li>
 *                   <p>The API does not return results for deleted resources.</p>
 *                </li>
 *                <li>
 *                   <p> The API does not return tags and relationships.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, BatchGetAggregateResourceConfigCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, BatchGetAggregateResourceConfigCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new BatchGetAggregateResourceConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetAggregateResourceConfigCommandInput} for command's `input` shape.
 * @see {@link BatchGetAggregateResourceConfigCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGetAggregateResourceConfigCommand extends $Command<BatchGetAggregateResourceConfigCommandInput, BatchGetAggregateResourceConfigCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: BatchGetAggregateResourceConfigCommandInput;
    constructor(input: BatchGetAggregateResourceConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetAggregateResourceConfigCommandInput, BatchGetAggregateResourceConfigCommandOutput>;
    private serialize;
    private deserialize;
}
