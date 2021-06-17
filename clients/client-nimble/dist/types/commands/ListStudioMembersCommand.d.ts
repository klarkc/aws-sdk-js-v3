import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { ListStudioMembersRequest, ListStudioMembersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListStudioMembersCommandInput extends ListStudioMembersRequest {
}
export interface ListStudioMembersCommandOutput extends ListStudioMembersResponse, __MetadataBearer {
}
/**
 * <p>Get all users in a given studio membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListStudioMembersCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListStudioMembersCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new ListStudioMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStudioMembersCommandInput} for command's `input` shape.
 * @see {@link ListStudioMembersCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListStudioMembersCommand extends $Command<ListStudioMembersCommandInput, ListStudioMembersCommandOutput, NimbleClientResolvedConfig> {
    readonly input: ListStudioMembersCommandInput;
    constructor(input: ListStudioMembersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStudioMembersCommandInput, ListStudioMembersCommandOutput>;
    private serialize;
    private deserialize;
}
