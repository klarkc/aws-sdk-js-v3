import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetDiskSnapshotsRequest, GetDiskSnapshotsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDiskSnapshotsCommandInput extends GetDiskSnapshotsRequest {
}
export interface GetDiskSnapshotsCommandOutput extends GetDiskSnapshotsResult, __MetadataBearer {
}
/**
 * <p>Returns information about all block storage disk snapshots in your AWS account and
 *       region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDiskSnapshotsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetDiskSnapshotsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetDiskSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDiskSnapshotsCommandInput} for command's `input` shape.
 * @see {@link GetDiskSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDiskSnapshotsCommand extends $Command<GetDiskSnapshotsCommandInput, GetDiskSnapshotsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetDiskSnapshotsCommandInput;
    constructor(input: GetDiskSnapshotsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDiskSnapshotsCommandInput, GetDiskSnapshotsCommandOutput>;
    private serialize;
    private deserialize;
}
