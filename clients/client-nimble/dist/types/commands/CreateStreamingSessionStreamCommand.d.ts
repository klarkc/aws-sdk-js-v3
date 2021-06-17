import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { CreateStreamingSessionStreamRequest, CreateStreamingSessionStreamResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateStreamingSessionStreamCommandInput extends CreateStreamingSessionStreamRequest {
}
export interface CreateStreamingSessionStreamCommandOutput extends CreateStreamingSessionStreamResponse, __MetadataBearer {
}
/**
 * <p>Creates a streaming session stream for a streaming session.</p> <p>After invoking this API, invoke GetStreamingSessionStream with the returned streamId to poll the resource until it is in state READY.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, CreateStreamingSessionStreamCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, CreateStreamingSessionStreamCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new CreateStreamingSessionStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStreamingSessionStreamCommandInput} for command's `input` shape.
 * @see {@link CreateStreamingSessionStreamCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateStreamingSessionStreamCommand extends $Command<CreateStreamingSessionStreamCommandInput, CreateStreamingSessionStreamCommandOutput, NimbleClientResolvedConfig> {
    readonly input: CreateStreamingSessionStreamCommandInput;
    constructor(input: CreateStreamingSessionStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateStreamingSessionStreamCommandInput, CreateStreamingSessionStreamCommandOutput>;
    private serialize;
    private deserialize;
}
