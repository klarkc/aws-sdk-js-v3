import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { GetStreamingSessionStreamRequest, GetStreamingSessionStreamResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetStreamingSessionStreamCommandInput extends GetStreamingSessionStreamRequest {
}
export interface GetStreamingSessionStreamCommandOutput extends GetStreamingSessionStreamResponse, __MetadataBearer {
}
/**
 * <p>Gets a StreamingSessionStream for a streaming session.</p> <p>Invoke this operation to poll the resource after invoking CreateStreamingSessionStream.</p> <p>After the StreamingSessionStream changes to the state READY, the url property will contain a stream to be used with the DCV streaming client.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetStreamingSessionStreamCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetStreamingSessionStreamCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetStreamingSessionStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStreamingSessionStreamCommandInput} for command's `input` shape.
 * @see {@link GetStreamingSessionStreamCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetStreamingSessionStreamCommand extends $Command<GetStreamingSessionStreamCommandInput, GetStreamingSessionStreamCommandOutput, NimbleClientResolvedConfig> {
    readonly input: GetStreamingSessionStreamCommandInput;
    constructor(input: GetStreamingSessionStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetStreamingSessionStreamCommandInput, GetStreamingSessionStreamCommandOutput>;
    private serialize;
    private deserialize;
}
