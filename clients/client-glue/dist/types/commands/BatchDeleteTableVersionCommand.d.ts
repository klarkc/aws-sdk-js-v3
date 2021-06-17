import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchDeleteTableVersionRequest, BatchDeleteTableVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchDeleteTableVersionCommandInput extends BatchDeleteTableVersionRequest {
}
export interface BatchDeleteTableVersionCommandOutput extends BatchDeleteTableVersionResponse, __MetadataBearer {
}
/**
 * <p>Deletes a specified batch of versions of a table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchDeleteTableVersionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchDeleteTableVersionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchDeleteTableVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteTableVersionCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteTableVersionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchDeleteTableVersionCommand extends $Command<BatchDeleteTableVersionCommandInput, BatchDeleteTableVersionCommandOutput, GlueClientResolvedConfig> {
    readonly input: BatchDeleteTableVersionCommandInput;
    constructor(input: BatchDeleteTableVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDeleteTableVersionCommandInput, BatchDeleteTableVersionCommandOutput>;
    private serialize;
    private deserialize;
}
