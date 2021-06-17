import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { DeleteIndexRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteIndexCommandInput extends DeleteIndexRequest {
}
export interface DeleteIndexCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes an existing Amazon Kendra index. An exception is not thrown if
 *       the index is already being deleted. While the index is being deleted, the
 *         <code>Status</code> field returned by a call to the
 *         <code>DescribeIndex</code> operation is set to
 *       <code>DELETING</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DeleteIndexCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DeleteIndexCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DeleteIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIndexCommandInput} for command's `input` shape.
 * @see {@link DeleteIndexCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteIndexCommand extends $Command<DeleteIndexCommandInput, DeleteIndexCommandOutput, KendraClientResolvedConfig> {
    readonly input: DeleteIndexCommandInput;
    constructor(input: DeleteIndexCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteIndexCommandInput, DeleteIndexCommandOutput>;
    private serialize;
    private deserialize;
}
