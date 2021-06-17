import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import { UpdateFleetMetadataRequest, UpdateFleetMetadataResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateFleetMetadataCommandInput extends UpdateFleetMetadataRequest {
}
export interface UpdateFleetMetadataCommandOutput extends UpdateFleetMetadataResponse, __MetadataBearer {
}
/**
 * <p>Updates fleet metadata, such as DisplayName.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, UpdateFleetMetadataCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, UpdateFleetMetadataCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new UpdateFleetMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFleetMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateFleetMetadataCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateFleetMetadataCommand extends $Command<UpdateFleetMetadataCommandInput, UpdateFleetMetadataCommandOutput, WorkLinkClientResolvedConfig> {
    readonly input: UpdateFleetMetadataCommandInput;
    constructor(input: UpdateFleetMetadataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkLinkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFleetMetadataCommandInput, UpdateFleetMetadataCommandOutput>;
    private serialize;
    private deserialize;
}
