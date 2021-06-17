import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetDevEndpointsRequest, BatchGetDevEndpointsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchGetDevEndpointsCommandInput extends BatchGetDevEndpointsRequest {
}
export interface BatchGetDevEndpointsCommandOutput extends BatchGetDevEndpointsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of resource metadata for a given list of development endpoint names. After
 *       calling the <code>ListDevEndpoints</code> operation, you can call this operation to access the
 *       data to which you have been granted permissions. This operation supports all IAM permissions,
 *       including permission conditions that uses tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetDevEndpointsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetDevEndpointsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchGetDevEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetDevEndpointsCommandInput} for command's `input` shape.
 * @see {@link BatchGetDevEndpointsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGetDevEndpointsCommand extends $Command<BatchGetDevEndpointsCommandInput, BatchGetDevEndpointsCommandOutput, GlueClientResolvedConfig> {
    readonly input: BatchGetDevEndpointsCommandInput;
    constructor(input: BatchGetDevEndpointsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetDevEndpointsCommandInput, BatchGetDevEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
