import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetJobDocumentRequest, GetJobDocumentResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetJobDocumentCommandInput extends GetJobDocumentRequest {
}
export interface GetJobDocumentCommandOutput extends GetJobDocumentResponse, __MetadataBearer {
}
/**
 * <p>Gets a job document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetJobDocumentCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetJobDocumentCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetJobDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobDocumentCommandInput} for command's `input` shape.
 * @see {@link GetJobDocumentCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetJobDocumentCommand extends $Command<GetJobDocumentCommandInput, GetJobDocumentCommandOutput, IoTClientResolvedConfig> {
    readonly input: GetJobDocumentCommandInput;
    constructor(input: GetJobDocumentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetJobDocumentCommandInput, GetJobDocumentCommandOutput>;
    private serialize;
    private deserialize;
}
