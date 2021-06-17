import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetExportSnapshotRecordsRequest, GetExportSnapshotRecordsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetExportSnapshotRecordsCommandInput extends GetExportSnapshotRecordsRequest {
}
export interface GetExportSnapshotRecordsCommandOutput extends GetExportSnapshotRecordsResult, __MetadataBearer {
}
/**
 * <p>Returns the export snapshot record created as a result of the <code>export snapshot</code>
 *       operation.</p>
 *          <p>An export snapshot record can be used to create a new Amazon EC2 instance and its related
 *       resources with the <code>create cloud formation stack</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetExportSnapshotRecordsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetExportSnapshotRecordsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetExportSnapshotRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExportSnapshotRecordsCommandInput} for command's `input` shape.
 * @see {@link GetExportSnapshotRecordsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetExportSnapshotRecordsCommand extends $Command<GetExportSnapshotRecordsCommandInput, GetExportSnapshotRecordsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetExportSnapshotRecordsCommandInput;
    constructor(input: GetExportSnapshotRecordsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetExportSnapshotRecordsCommandInput, GetExportSnapshotRecordsCommandOutput>;
    private serialize;
    private deserialize;
}
