import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { ListLaunchProfilesRequest, ListLaunchProfilesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLaunchProfilesCommandInput extends ListLaunchProfilesRequest {
}
export interface ListLaunchProfilesCommandOutput extends ListLaunchProfilesResponse, __MetadataBearer {
}
/**
 * <p>List all the launch profiles a studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListLaunchProfilesCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListLaunchProfilesCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new ListLaunchProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLaunchProfilesCommandInput} for command's `input` shape.
 * @see {@link ListLaunchProfilesCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListLaunchProfilesCommand extends $Command<ListLaunchProfilesCommandInput, ListLaunchProfilesCommandOutput, NimbleClientResolvedConfig> {
    readonly input: ListLaunchProfilesCommandInput;
    constructor(input: ListLaunchProfilesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLaunchProfilesCommandInput, ListLaunchProfilesCommandOutput>;
    private serialize;
    private deserialize;
}
