import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { GetExclusionsPreviewRequest, GetExclusionsPreviewResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetExclusionsPreviewCommandInput extends GetExclusionsPreviewRequest {
}
export interface GetExclusionsPreviewCommandOutput extends GetExclusionsPreviewResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the exclusions preview (a list of ExclusionPreview objects) specified by
 *          the preview token. You can obtain the preview token by running the CreateExclusionsPreview
 *          API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, GetExclusionsPreviewCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, GetExclusionsPreviewCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new GetExclusionsPreviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExclusionsPreviewCommandInput} for command's `input` shape.
 * @see {@link GetExclusionsPreviewCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetExclusionsPreviewCommand extends $Command<GetExclusionsPreviewCommandInput, GetExclusionsPreviewCommandOutput, InspectorClientResolvedConfig> {
    readonly input: GetExclusionsPreviewCommandInput;
    constructor(input: GetExclusionsPreviewCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetExclusionsPreviewCommandInput, GetExclusionsPreviewCommandOutput>;
    private serialize;
    private deserialize;
}
