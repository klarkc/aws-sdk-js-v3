import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { DeleteLabelsRequest, DeleteLabelsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteLabelsCommandInput extends DeleteLabelsRequest {
}
export interface DeleteLabelsCommandOutput extends DeleteLabelsResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified list of labels from a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DeleteLabelsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DeleteLabelsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DeleteLabelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLabelsCommandInput} for command's `input` shape.
 * @see {@link DeleteLabelsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteLabelsCommand extends $Command<DeleteLabelsCommandInput, DeleteLabelsCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: DeleteLabelsCommandInput;
    constructor(input: DeleteLabelsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLabelsCommandInput, DeleteLabelsCommandOutput>;
    private serialize;
    private deserialize;
}
