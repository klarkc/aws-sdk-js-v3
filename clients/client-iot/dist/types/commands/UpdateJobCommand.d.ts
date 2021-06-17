import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateJobRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateJobCommandInput extends UpdateJobRequest {
}
export interface UpdateJobCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates supported fields of the specified job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateJobCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateJobCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateJobCommandInput} for command's `input` shape.
 * @see {@link UpdateJobCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateJobCommand extends $Command<UpdateJobCommandInput, UpdateJobCommandOutput, IoTClientResolvedConfig> {
    readonly input: UpdateJobCommandInput;
    constructor(input: UpdateJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateJobCommandInput, UpdateJobCommandOutput>;
    private serialize;
    private deserialize;
}
