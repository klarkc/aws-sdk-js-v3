import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { GetTelemetryMetadataRequest, GetTelemetryMetadataResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTelemetryMetadataCommandInput extends GetTelemetryMetadataRequest {
}
export interface GetTelemetryMetadataCommandOutput extends GetTelemetryMetadataResponse, __MetadataBearer {
}
/**
 * <p>Information about the data that is collected for the specified assessment
 *          run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, GetTelemetryMetadataCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, GetTelemetryMetadataCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new GetTelemetryMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTelemetryMetadataCommandInput} for command's `input` shape.
 * @see {@link GetTelemetryMetadataCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTelemetryMetadataCommand extends $Command<GetTelemetryMetadataCommandInput, GetTelemetryMetadataCommandOutput, InspectorClientResolvedConfig> {
    readonly input: GetTelemetryMetadataCommandInput;
    constructor(input: GetTelemetryMetadataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTelemetryMetadataCommandInput, GetTelemetryMetadataCommandOutput>;
    private serialize;
    private deserialize;
}
