import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { GetFlowTemplateRevisionsRequest, GetFlowTemplateRevisionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetFlowTemplateRevisionsCommandInput extends GetFlowTemplateRevisionsRequest {
}
export interface GetFlowTemplateRevisionsCommandOutput extends GetFlowTemplateRevisionsResponse, __MetadataBearer {
}
/**
 * <p>Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated,
 *       this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetFlowTemplateRevisionsCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetFlowTemplateRevisionsCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new GetFlowTemplateRevisionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFlowTemplateRevisionsCommandInput} for command's `input` shape.
 * @see {@link GetFlowTemplateRevisionsCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetFlowTemplateRevisionsCommand extends $Command<GetFlowTemplateRevisionsCommandInput, GetFlowTemplateRevisionsCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: GetFlowTemplateRevisionsCommandInput;
    constructor(input: GetFlowTemplateRevisionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFlowTemplateRevisionsCommandInput, GetFlowTemplateRevisionsCommandOutput>;
    private serialize;
    private deserialize;
}
