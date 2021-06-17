import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteDimensionRequest, DeleteDimensionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDimensionCommandInput extends DeleteDimensionRequest {
}
export interface DeleteDimensionCommandOutput extends DeleteDimensionResponse, __MetadataBearer {
}
/**
 * <p>Removes the specified dimension from your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteDimensionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteDimensionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteDimensionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDimensionCommandInput} for command's `input` shape.
 * @see {@link DeleteDimensionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDimensionCommand extends $Command<DeleteDimensionCommandInput, DeleteDimensionCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeleteDimensionCommandInput;
    constructor(input: DeleteDimensionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDimensionCommandInput, DeleteDimensionCommandOutput>;
    private serialize;
    private deserialize;
}
