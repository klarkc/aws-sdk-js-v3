import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { ListLaunchProfileMembersRequest, ListLaunchProfileMembersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLaunchProfileMembersCommandInput extends ListLaunchProfileMembersRequest {
}
export interface ListLaunchProfileMembersCommandOutput extends ListLaunchProfileMembersResponse, __MetadataBearer {
}
/**
 * <p>Get all users in a given launch profile membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListLaunchProfileMembersCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListLaunchProfileMembersCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new ListLaunchProfileMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLaunchProfileMembersCommandInput} for command's `input` shape.
 * @see {@link ListLaunchProfileMembersCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListLaunchProfileMembersCommand extends $Command<ListLaunchProfileMembersCommandInput, ListLaunchProfileMembersCommandOutput, NimbleClientResolvedConfig> {
    readonly input: ListLaunchProfileMembersCommandInput;
    constructor(input: ListLaunchProfileMembersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLaunchProfileMembersCommandInput, ListLaunchProfileMembersCommandOutput>;
    private serialize;
    private deserialize;
}
