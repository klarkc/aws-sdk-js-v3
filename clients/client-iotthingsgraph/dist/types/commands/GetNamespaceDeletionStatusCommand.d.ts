import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { GetNamespaceDeletionStatusRequest, GetNamespaceDeletionStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetNamespaceDeletionStatusCommandInput extends GetNamespaceDeletionStatusRequest {
}
export interface GetNamespaceDeletionStatusCommandOutput extends GetNamespaceDeletionStatusResponse, __MetadataBearer {
}
/**
 * <p>Gets the status of a namespace deletion task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetNamespaceDeletionStatusCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetNamespaceDeletionStatusCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new GetNamespaceDeletionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNamespaceDeletionStatusCommandInput} for command's `input` shape.
 * @see {@link GetNamespaceDeletionStatusCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetNamespaceDeletionStatusCommand extends $Command<GetNamespaceDeletionStatusCommandInput, GetNamespaceDeletionStatusCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: GetNamespaceDeletionStatusCommandInput;
    constructor(input: GetNamespaceDeletionStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetNamespaceDeletionStatusCommandInput, GetNamespaceDeletionStatusCommandOutput>;
    private serialize;
    private deserialize;
}
