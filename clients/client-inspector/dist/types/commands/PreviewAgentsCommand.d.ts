import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { PreviewAgentsRequest, PreviewAgentsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PreviewAgentsCommandInput extends PreviewAgentsRequest {
}
export interface PreviewAgentsCommandOutput extends PreviewAgentsResponse, __MetadataBearer {
}
/**
 * <p>Previews the agents installed on the EC2 instances that are part of the specified
 *          assessment target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, PreviewAgentsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, PreviewAgentsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new PreviewAgentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PreviewAgentsCommandInput} for command's `input` shape.
 * @see {@link PreviewAgentsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PreviewAgentsCommand extends $Command<PreviewAgentsCommandInput, PreviewAgentsCommandOutput, InspectorClientResolvedConfig> {
    readonly input: PreviewAgentsCommandInput;
    constructor(input: PreviewAgentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PreviewAgentsCommandInput, PreviewAgentsCommandOutput>;
    private serialize;
    private deserialize;
}
