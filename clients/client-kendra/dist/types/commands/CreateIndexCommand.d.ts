import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { CreateIndexRequest, CreateIndexResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateIndexCommandInput extends CreateIndexRequest {
}
export interface CreateIndexCommandOutput extends CreateIndexResponse, __MetadataBearer {
}
/**
 * <p>Creates a new Amazon Kendra index. Index creation is an asynchronous
 *       operation. To determine if index creation has completed, check the
 *         <code>Status</code> field returned from a call to
 *         <code>DescribeIndex</code>. The <code>Status</code> field is set to
 *         <code>ACTIVE</code> when the index is ready to use.</p>
 *          <p>Once the index is active you can index your documents using the
 *         <code>BatchPutDocument</code> operation or using one of the supported
 *       data sources. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, CreateIndexCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, CreateIndexCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new CreateIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIndexCommandInput} for command's `input` shape.
 * @see {@link CreateIndexCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateIndexCommand extends $Command<CreateIndexCommandInput, CreateIndexCommandOutput, KendraClientResolvedConfig> {
    readonly input: CreateIndexCommandInput;
    constructor(input: CreateIndexCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateIndexCommandInput, CreateIndexCommandOutput>;
    private serialize;
    private deserialize;
}
