import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { DeleteStudioComponentRequest, DeleteStudioComponentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteStudioComponentCommandInput extends DeleteStudioComponentRequest {
}
export interface DeleteStudioComponentCommandOutput extends DeleteStudioComponentResponse, __MetadataBearer {
}
/**
 * <p>Deletes a studio component resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, DeleteStudioComponentCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, DeleteStudioComponentCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new DeleteStudioComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStudioComponentCommandInput} for command's `input` shape.
 * @see {@link DeleteStudioComponentCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteStudioComponentCommand extends $Command<DeleteStudioComponentCommandInput, DeleteStudioComponentCommandOutput, NimbleClientResolvedConfig> {
    readonly input: DeleteStudioComponentCommandInput;
    constructor(input: DeleteStudioComponentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteStudioComponentCommandInput, DeleteStudioComponentCommandOutput>;
    private serialize;
    private deserialize;
}
