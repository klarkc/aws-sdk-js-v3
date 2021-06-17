import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CancelJobRequest, CancelJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelJobCommandInput extends CancelJobRequest {
}
export interface CancelJobCommandOutput extends CancelJobResponse, __MetadataBearer {
}
/**
 * <p>Cancels a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CancelJobCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CancelJobCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CancelJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelJobCommandInput} for command's `input` shape.
 * @see {@link CancelJobCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelJobCommand extends $Command<CancelJobCommandInput, CancelJobCommandOutput, IoTClientResolvedConfig> {
    readonly input: CancelJobCommandInput;
    constructor(input: CancelJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelJobCommandInput, CancelJobCommandOutput>;
    private serialize;
    private deserialize;
}
