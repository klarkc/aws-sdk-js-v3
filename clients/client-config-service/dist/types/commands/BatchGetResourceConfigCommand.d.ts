import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { BatchGetResourceConfigRequest, BatchGetResourceConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchGetResourceConfigCommandInput extends BatchGetResourceConfigRequest {
}
export interface BatchGetResourceConfigCommandOutput extends BatchGetResourceConfigResponse, __MetadataBearer {
}
/**
 * <p>Returns the current configuration for one or more requested
 * 			resources. The operation also returns a list of resources that are
 * 			not processed in the current request. If there are no unprocessed
 * 			resources, the operation returns an empty unprocessedResourceKeys
 * 			list. </p>
 * 		       <note>
 * 			         <ul>
 *                <li>
 * 					             <p>The API does not return results for deleted
 * 						resources.</p>
 * 				           </li>
 *                <li>
 * 					             <p> The API does not return any tags for the requested
 * 						resources. This information is filtered out of the
 * 						supplementaryConfiguration section of the API
 * 						response.</p>
 * 				           </li>
 *             </ul>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, BatchGetResourceConfigCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, BatchGetResourceConfigCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new BatchGetResourceConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetResourceConfigCommandInput} for command's `input` shape.
 * @see {@link BatchGetResourceConfigCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGetResourceConfigCommand extends $Command<BatchGetResourceConfigCommandInput, BatchGetResourceConfigCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: BatchGetResourceConfigCommandInput;
    constructor(input: BatchGetResourceConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetResourceConfigCommandInput, BatchGetResourceConfigCommandOutput>;
    private serialize;
    private deserialize;
}
