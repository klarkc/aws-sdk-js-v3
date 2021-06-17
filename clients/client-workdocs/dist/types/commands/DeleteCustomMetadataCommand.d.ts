import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { DeleteCustomMetadataRequest, DeleteCustomMetadataResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCustomMetadataCommandInput extends DeleteCustomMetadataRequest {
}
export interface DeleteCustomMetadataCommandOutput extends DeleteCustomMetadataResponse, __MetadataBearer {
}
/**
 * <p>Deletes custom metadata from the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DeleteCustomMetadataCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DeleteCustomMetadataCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DeleteCustomMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomMetadataCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomMetadataCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCustomMetadataCommand extends $Command<DeleteCustomMetadataCommandInput, DeleteCustomMetadataCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: DeleteCustomMetadataCommandInput;
    constructor(input: DeleteCustomMetadataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCustomMetadataCommandInput, DeleteCustomMetadataCommandOutput>;
    private serialize;
    private deserialize;
}
