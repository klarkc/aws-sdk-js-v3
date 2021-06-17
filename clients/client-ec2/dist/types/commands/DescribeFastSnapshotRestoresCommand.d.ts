import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeFastSnapshotRestoresRequest, DescribeFastSnapshotRestoresResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFastSnapshotRestoresCommandInput extends DescribeFastSnapshotRestoresRequest {
}
export interface DescribeFastSnapshotRestoresCommandOutput extends DescribeFastSnapshotRestoresResult, __MetadataBearer {
}
/**
 * <p>Describes the state of fast snapshot restores for your snapshots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFastSnapshotRestoresCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFastSnapshotRestoresCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeFastSnapshotRestoresCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFastSnapshotRestoresCommandInput} for command's `input` shape.
 * @see {@link DescribeFastSnapshotRestoresCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFastSnapshotRestoresCommand extends $Command<DescribeFastSnapshotRestoresCommandInput, DescribeFastSnapshotRestoresCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeFastSnapshotRestoresCommandInput;
    constructor(input: DescribeFastSnapshotRestoresCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFastSnapshotRestoresCommandInput, DescribeFastSnapshotRestoresCommandOutput>;
    private serialize;
    private deserialize;
}
