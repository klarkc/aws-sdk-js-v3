import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBSnapshotMessage, DescribeDBSnapshotsMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDBSnapshotsCommandInput extends DescribeDBSnapshotsMessage {
}
export interface DescribeDBSnapshotsCommandOutput extends DBSnapshotMessage, __MetadataBearer {
}
/**
 * <p>Returns information about DB snapshots. This API action supports pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBSnapshotsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBSnapshotsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDBSnapshotsCommand extends $Command<DescribeDBSnapshotsCommandInput, DescribeDBSnapshotsCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeDBSnapshotsCommandInput;
    constructor(input: DescribeDBSnapshotsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBSnapshotsCommandInput, DescribeDBSnapshotsCommandOutput>;
    private serialize;
    private deserialize;
}
