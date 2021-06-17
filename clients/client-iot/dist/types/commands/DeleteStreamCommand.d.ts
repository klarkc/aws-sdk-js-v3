import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteStreamRequest, DeleteStreamResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteStreamCommandInput extends DeleteStreamRequest {
}
export interface DeleteStreamCommandOutput extends DeleteStreamResponse, __MetadataBearer {
}
/**
 * <p>Deletes a stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteStreamCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteStreamCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteStreamCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteStreamCommand extends $Command<DeleteStreamCommandInput, DeleteStreamCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeleteStreamCommandInput;
    constructor(input: DeleteStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteStreamCommandInput, DeleteStreamCommandOutput>;
    private serialize;
    private deserialize;
}
