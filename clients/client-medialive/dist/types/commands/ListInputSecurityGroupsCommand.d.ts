import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListInputSecurityGroupsRequest, ListInputSecurityGroupsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListInputSecurityGroupsCommandInput extends ListInputSecurityGroupsRequest {
}
export interface ListInputSecurityGroupsCommandOutput extends ListInputSecurityGroupsResponse, __MetadataBearer {
}
/**
 * Produces a list of Input Security Groups for an account
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListInputSecurityGroupsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListInputSecurityGroupsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new ListInputSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInputSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link ListInputSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListInputSecurityGroupsCommand extends $Command<ListInputSecurityGroupsCommandInput, ListInputSecurityGroupsCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: ListInputSecurityGroupsCommandInput;
    constructor(input: ListInputSecurityGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInputSecurityGroupsCommandInput, ListInputSecurityGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
