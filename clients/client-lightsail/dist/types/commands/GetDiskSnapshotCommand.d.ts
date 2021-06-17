import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetDiskSnapshotRequest, GetDiskSnapshotResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDiskSnapshotCommandInput extends GetDiskSnapshotRequest {
}
export interface GetDiskSnapshotCommandOutput extends GetDiskSnapshotResult, __MetadataBearer {
}
/**
 * <p>Returns information about a specific block storage disk snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDiskSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetDiskSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetDiskSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDiskSnapshotCommandInput} for command's `input` shape.
 * @see {@link GetDiskSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDiskSnapshotCommand extends $Command<GetDiskSnapshotCommandInput, GetDiskSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetDiskSnapshotCommandInput;
    constructor(input: GetDiskSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDiskSnapshotCommandInput, GetDiskSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
