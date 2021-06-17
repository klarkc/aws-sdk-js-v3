import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { PutTelemetryRecordsRequest, PutTelemetryRecordsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutTelemetryRecordsCommandInput extends PutTelemetryRecordsRequest {
}
export interface PutTelemetryRecordsCommandOutput extends PutTelemetryRecordsResult, __MetadataBearer {
}
/**
 * <p>Used by the AWS X-Ray daemon to upload telemetry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, PutTelemetryRecordsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, PutTelemetryRecordsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new PutTelemetryRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutTelemetryRecordsCommandInput} for command's `input` shape.
 * @see {@link PutTelemetryRecordsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutTelemetryRecordsCommand extends $Command<PutTelemetryRecordsCommandInput, PutTelemetryRecordsCommandOutput, XRayClientResolvedConfig> {
    readonly input: PutTelemetryRecordsCommandInput;
    constructor(input: PutTelemetryRecordsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: XRayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutTelemetryRecordsCommandInput, PutTelemetryRecordsCommandOutput>;
    private serialize;
    private deserialize;
}
