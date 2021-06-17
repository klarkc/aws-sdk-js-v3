import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { DeleteStudioMemberRequest, DeleteStudioMemberResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteStudioMemberCommandInput extends DeleteStudioMemberRequest {
}
export interface DeleteStudioMemberCommandOutput extends DeleteStudioMemberResponse, __MetadataBearer {
}
/**
 * <p>Delete a user from studio membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, DeleteStudioMemberCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, DeleteStudioMemberCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new DeleteStudioMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStudioMemberCommandInput} for command's `input` shape.
 * @see {@link DeleteStudioMemberCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteStudioMemberCommand extends $Command<DeleteStudioMemberCommandInput, DeleteStudioMemberCommandOutput, NimbleClientResolvedConfig> {
    readonly input: DeleteStudioMemberCommandInput;
    constructor(input: DeleteStudioMemberCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteStudioMemberCommandInput, DeleteStudioMemberCommandOutput>;
    private serialize;
    private deserialize;
}
