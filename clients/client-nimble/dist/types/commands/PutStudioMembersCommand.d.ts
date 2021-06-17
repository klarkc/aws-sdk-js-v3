import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { PutStudioMembersRequest, PutStudioMembersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutStudioMembersCommandInput extends PutStudioMembersRequest {
}
export interface PutStudioMembersCommandOutput extends PutStudioMembersResponse, __MetadataBearer {
}
/**
 * <p>Add/update users with given persona to studio membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, PutStudioMembersCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, PutStudioMembersCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new PutStudioMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutStudioMembersCommandInput} for command's `input` shape.
 * @see {@link PutStudioMembersCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutStudioMembersCommand extends $Command<PutStudioMembersCommandInput, PutStudioMembersCommandOutput, NimbleClientResolvedConfig> {
    readonly input: PutStudioMembersCommandInput;
    constructor(input: PutStudioMembersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutStudioMembersCommandInput, PutStudioMembersCommandOutput>;
    private serialize;
    private deserialize;
}
