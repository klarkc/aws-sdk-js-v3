import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateStreamRequest, UpdateStreamResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateStreamCommandInput extends UpdateStreamRequest {
}
export interface UpdateStreamCommandOutput extends UpdateStreamResponse, __MetadataBearer {
}
/**
 * <p>Updates an existing stream. The stream version will be incremented by one.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateStreamCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateStreamCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStreamCommandInput} for command's `input` shape.
 * @see {@link UpdateStreamCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateStreamCommand extends $Command<UpdateStreamCommandInput, UpdateStreamCommandOutput, IoTClientResolvedConfig> {
    readonly input: UpdateStreamCommandInput;
    constructor(input: UpdateStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateStreamCommandInput, UpdateStreamCommandOutput>;
    private serialize;
    private deserialize;
}
