import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetAutoSnapshotsRequest, GetAutoSnapshotsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAutoSnapshotsCommandInput extends GetAutoSnapshotsRequest {
}
export interface GetAutoSnapshotsCommandOutput extends GetAutoSnapshotsResult, __MetadataBearer {
}
/**
 * <p>Returns the available automatic snapshots for an instance or disk. For more information,
 *       see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetAutoSnapshotsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetAutoSnapshotsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetAutoSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAutoSnapshotsCommandInput} for command's `input` shape.
 * @see {@link GetAutoSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAutoSnapshotsCommand extends $Command<GetAutoSnapshotsCommandInput, GetAutoSnapshotsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetAutoSnapshotsCommandInput;
    constructor(input: GetAutoSnapshotsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAutoSnapshotsCommandInput, GetAutoSnapshotsCommandOutput>;
    private serialize;
    private deserialize;
}
