import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { GetWorldTemplateBodyRequest, GetWorldTemplateBodyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetWorldTemplateBodyCommandInput extends GetWorldTemplateBodyRequest {
}
export interface GetWorldTemplateBodyCommandOutput extends GetWorldTemplateBodyResponse, __MetadataBearer {
}
/**
 * <p>Gets the world template body.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, GetWorldTemplateBodyCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, GetWorldTemplateBodyCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new GetWorldTemplateBodyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWorldTemplateBodyCommandInput} for command's `input` shape.
 * @see {@link GetWorldTemplateBodyCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetWorldTemplateBodyCommand extends $Command<GetWorldTemplateBodyCommandInput, GetWorldTemplateBodyCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: GetWorldTemplateBodyCommandInput;
    constructor(input: GetWorldTemplateBodyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetWorldTemplateBodyCommandInput, GetWorldTemplateBodyCommandOutput>;
    private serialize;
    private deserialize;
}
