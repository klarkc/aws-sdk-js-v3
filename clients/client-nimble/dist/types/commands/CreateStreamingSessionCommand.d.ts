import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { CreateStreamingSessionRequest, CreateStreamingSessionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateStreamingSessionCommandInput extends CreateStreamingSessionRequest {
}
export interface CreateStreamingSessionCommandOutput extends CreateStreamingSessionResponse, __MetadataBearer {
}
/**
 * <p>Creates a streaming session in a studio.</p> <p>After invoking this operation, you must poll GetStreamingSession until the streaming session is in state READY.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, CreateStreamingSessionCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, CreateStreamingSessionCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new CreateStreamingSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStreamingSessionCommandInput} for command's `input` shape.
 * @see {@link CreateStreamingSessionCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateStreamingSessionCommand extends $Command<CreateStreamingSessionCommandInput, CreateStreamingSessionCommandOutput, NimbleClientResolvedConfig> {
    readonly input: CreateStreamingSessionCommandInput;
    constructor(input: CreateStreamingSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateStreamingSessionCommandInput, CreateStreamingSessionCommandOutput>;
    private serialize;
    private deserialize;
}
