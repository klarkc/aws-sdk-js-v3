import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { GetSystemTemplateRevisionsRequest, GetSystemTemplateRevisionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSystemTemplateRevisionsCommandInput extends GetSystemTemplateRevisionsRequest {
}
export interface GetSystemTemplateRevisionsCommandOutput extends GetSystemTemplateRevisionsResponse, __MetadataBearer {
}
/**
 * <p>Gets revisions made to the specified system template. Only the previous 100 revisions are stored. If the system has been deprecated, this action will return
 *       the revisions that occurred before its deprecation. This action won't work with systems that have been deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetSystemTemplateRevisionsCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetSystemTemplateRevisionsCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new GetSystemTemplateRevisionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSystemTemplateRevisionsCommandInput} for command's `input` shape.
 * @see {@link GetSystemTemplateRevisionsCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSystemTemplateRevisionsCommand extends $Command<GetSystemTemplateRevisionsCommandInput, GetSystemTemplateRevisionsCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: GetSystemTemplateRevisionsCommandInput;
    constructor(input: GetSystemTemplateRevisionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSystemTemplateRevisionsCommandInput, GetSystemTemplateRevisionsCommandOutput>;
    private serialize;
    private deserialize;
}
