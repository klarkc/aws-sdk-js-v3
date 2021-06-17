import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { DeleteStreamingSessionRequest, DeleteStreamingSessionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteStreamingSessionCommandInput extends DeleteStreamingSessionRequest {
}
export interface DeleteStreamingSessionCommandOutput extends DeleteStreamingSessionResponse, __MetadataBearer {
}
/**
 * <p>Deletes streaming session resource.</p> <p>After invoking this operation, use GetStreamingSession to poll the resource until it transitions to a DELETED state.</p> <p>A streaming session will count against your streaming session quota until it is marked DELETED.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, DeleteStreamingSessionCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, DeleteStreamingSessionCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new DeleteStreamingSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStreamingSessionCommandInput} for command's `input` shape.
 * @see {@link DeleteStreamingSessionCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteStreamingSessionCommand extends $Command<DeleteStreamingSessionCommandInput, DeleteStreamingSessionCommandOutput, NimbleClientResolvedConfig> {
    readonly input: DeleteStreamingSessionCommandInput;
    constructor(input: DeleteStreamingSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteStreamingSessionCommandInput, DeleteStreamingSessionCommandOutput>;
    private serialize;
    private deserialize;
}
