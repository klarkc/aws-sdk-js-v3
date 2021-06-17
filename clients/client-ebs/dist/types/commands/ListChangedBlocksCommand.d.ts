import { EBSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EBSClient";
import { ListChangedBlocksRequest, ListChangedBlocksResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListChangedBlocksCommandInput extends ListChangedBlocksRequest {
}
export interface ListChangedBlocksCommandOutput extends ListChangedBlocksResponse, __MetadataBearer {
}
/**
 * <p>Returns information about the blocks that are different between two
 *             Amazon Elastic Block Store snapshots of the same volume/snapshot lineage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, ListChangedBlocksCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, ListChangedBlocksCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * const client = new EBSClient(config);
 * const command = new ListChangedBlocksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListChangedBlocksCommandInput} for command's `input` shape.
 * @see {@link ListChangedBlocksCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListChangedBlocksCommand extends $Command<ListChangedBlocksCommandInput, ListChangedBlocksCommandOutput, EBSClientResolvedConfig> {
    readonly input: ListChangedBlocksCommandInput;
    constructor(input: ListChangedBlocksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EBSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListChangedBlocksCommandInput, ListChangedBlocksCommandOutput>;
    private serialize;
    private deserialize;
}
