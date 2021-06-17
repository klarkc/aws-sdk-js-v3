import { IoT1ClickProjectsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickProjectsClient";
import { UpdatePlacementRequest, UpdatePlacementResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdatePlacementCommandInput extends UpdatePlacementRequest {
}
export interface UpdatePlacementCommandOutput extends UpdatePlacementResponse, __MetadataBearer {
}
/**
 * <p>Updates a placement with the given attributes. To clear an attribute, pass an empty value
 *       (i.e., "").</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, UpdatePlacementCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, UpdatePlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new UpdatePlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePlacementCommandInput} for command's `input` shape.
 * @see {@link UpdatePlacementCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePlacementCommand extends $Command<UpdatePlacementCommandInput, UpdatePlacementCommandOutput, IoT1ClickProjectsClientResolvedConfig> {
    readonly input: UpdatePlacementCommandInput;
    constructor(input: UpdatePlacementCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickProjectsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePlacementCommandInput, UpdatePlacementCommandOutput>;
    private serialize;
    private deserialize;
}
