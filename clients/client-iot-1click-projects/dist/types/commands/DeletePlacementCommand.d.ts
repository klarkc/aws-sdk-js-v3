import { IoT1ClickProjectsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickProjectsClient";
import { DeletePlacementRequest, DeletePlacementResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePlacementCommandInput extends DeletePlacementRequest {
}
export interface DeletePlacementCommandOutput extends DeletePlacementResponse, __MetadataBearer {
}
/**
 * <p>Deletes a placement. To delete a placement, it must not have any devices associated with
 *       it.</p>
 *          <note>
 *             <p>When you delete a placement, all associated data becomes irretrievable.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, DeletePlacementCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, DeletePlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new DeletePlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePlacementCommandInput} for command's `input` shape.
 * @see {@link DeletePlacementCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePlacementCommand extends $Command<DeletePlacementCommandInput, DeletePlacementCommandOutput, IoT1ClickProjectsClientResolvedConfig> {
    readonly input: DeletePlacementCommandInput;
    constructor(input: DeletePlacementCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickProjectsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePlacementCommandInput, DeletePlacementCommandOutput>;
    private serialize;
    private deserialize;
}
