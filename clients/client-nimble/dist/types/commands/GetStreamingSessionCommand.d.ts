import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { GetStreamingSessionRequest, GetStreamingSessionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetStreamingSessionCommandInput extends GetStreamingSessionRequest {
}
export interface GetStreamingSessionCommandOutput extends GetStreamingSessionResponse, __MetadataBearer {
}
/**
 * <p>Gets StreamingSession resource.</p> <p>Invoke this operation to poll for a streaming session state while creating or deleting a session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetStreamingSessionCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetStreamingSessionCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetStreamingSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStreamingSessionCommandInput} for command's `input` shape.
 * @see {@link GetStreamingSessionCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetStreamingSessionCommand extends $Command<GetStreamingSessionCommandInput, GetStreamingSessionCommandOutput, NimbleClientResolvedConfig> {
    readonly input: GetStreamingSessionCommandInput;
    constructor(input: GetStreamingSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetStreamingSessionCommandInput, GetStreamingSessionCommandOutput>;
    private serialize;
    private deserialize;
}
