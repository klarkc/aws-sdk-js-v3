import { EBSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EBSClient";
import { ListSnapshotBlocksRequest, ListSnapshotBlocksResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSnapshotBlocksCommandInput extends ListSnapshotBlocksRequest {
}
export interface ListSnapshotBlocksCommandOutput extends ListSnapshotBlocksResponse, __MetadataBearer {
}
/**
 * <p>Returns information about the blocks in an Amazon Elastic Block Store snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, ListSnapshotBlocksCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, ListSnapshotBlocksCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * const client = new EBSClient(config);
 * const command = new ListSnapshotBlocksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSnapshotBlocksCommandInput} for command's `input` shape.
 * @see {@link ListSnapshotBlocksCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSnapshotBlocksCommand extends $Command<ListSnapshotBlocksCommandInput, ListSnapshotBlocksCommandOutput, EBSClientResolvedConfig> {
    readonly input: ListSnapshotBlocksCommandInput;
    constructor(input: ListSnapshotBlocksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EBSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSnapshotBlocksCommandInput, ListSnapshotBlocksCommandOutput>;
    private serialize;
    private deserialize;
}
