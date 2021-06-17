import { SagemakerEdgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SagemakerEdgeClient";
import { SendHeartbeatRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SendHeartbeatCommandInput extends SendHeartbeatRequest {
}
export interface SendHeartbeatCommandOutput extends __MetadataBearer {
}
/**
 * <p>Use to get the current status of devices registered on SageMaker Edge Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SagemakerEdgeClient, SendHeartbeatCommand } from "@aws-sdk/client-sagemaker-edge"; // ES Modules import
 * // const { SagemakerEdgeClient, SendHeartbeatCommand } = require("@aws-sdk/client-sagemaker-edge"); // CommonJS import
 * const client = new SagemakerEdgeClient(config);
 * const command = new SendHeartbeatCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendHeartbeatCommandInput} for command's `input` shape.
 * @see {@link SendHeartbeatCommandOutput} for command's `response` shape.
 * @see {@link SagemakerEdgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SendHeartbeatCommand extends $Command<SendHeartbeatCommandInput, SendHeartbeatCommandOutput, SagemakerEdgeClientResolvedConfig> {
    readonly input: SendHeartbeatCommandInput;
    constructor(input: SendHeartbeatCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SagemakerEdgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendHeartbeatCommandInput, SendHeartbeatCommandOutput>;
    private serialize;
    private deserialize;
}
