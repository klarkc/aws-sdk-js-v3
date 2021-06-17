import { EBSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EBSClient";
import { GetSnapshotBlockRequest, GetSnapshotBlockResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSnapshotBlockCommandInput extends GetSnapshotBlockRequest {
}
export interface GetSnapshotBlockCommandOutput extends GetSnapshotBlockResponse, __MetadataBearer {
}
/**
 * <p>Returns the data in a block in an Amazon Elastic Block Store snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, GetSnapshotBlockCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, GetSnapshotBlockCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * const client = new EBSClient(config);
 * const command = new GetSnapshotBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSnapshotBlockCommandInput} for command's `input` shape.
 * @see {@link GetSnapshotBlockCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSnapshotBlockCommand extends $Command<GetSnapshotBlockCommandInput, GetSnapshotBlockCommandOutput, EBSClientResolvedConfig> {
    readonly input: GetSnapshotBlockCommandInput;
    constructor(input: GetSnapshotBlockCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EBSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSnapshotBlockCommandInput, GetSnapshotBlockCommandOutput>;
    private serialize;
    private deserialize;
}
