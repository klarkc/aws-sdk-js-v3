import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { DeleteStudioRequest, DeleteStudioResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteStudioCommandInput extends DeleteStudioRequest {
}
export interface DeleteStudioCommandOutput extends DeleteStudioResponse, __MetadataBearer {
}
/**
 * <p>Delete a studio resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, DeleteStudioCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, DeleteStudioCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new DeleteStudioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStudioCommandInput} for command's `input` shape.
 * @see {@link DeleteStudioCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteStudioCommand extends $Command<DeleteStudioCommandInput, DeleteStudioCommandOutput, NimbleClientResolvedConfig> {
    readonly input: DeleteStudioCommandInput;
    constructor(input: DeleteStudioCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteStudioCommandInput, DeleteStudioCommandOutput>;
    private serialize;
    private deserialize;
}
