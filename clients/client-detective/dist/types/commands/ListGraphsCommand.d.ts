import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { ListGraphsRequest, ListGraphsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListGraphsCommandInput extends ListGraphsRequest {
}
export interface ListGraphsCommandOutput extends ListGraphsResponse, __MetadataBearer {
}
/**
 * <p>Returns the list of behavior graphs that the calling account is an administrator account
 *          of. This operation can only be called by an administrator account.</p>
 *          <p>Because an account can currently only be the administrator of one behavior graph within
 *          a Region, the results always contain a single behavior graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, ListGraphsCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, ListGraphsCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new ListGraphsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGraphsCommandInput} for command's `input` shape.
 * @see {@link ListGraphsCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListGraphsCommand extends $Command<ListGraphsCommandInput, ListGraphsCommandOutput, DetectiveClientResolvedConfig> {
    readonly input: ListGraphsCommandInput;
    constructor(input: ListGraphsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DetectiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGraphsCommandInput, ListGraphsCommandOutput>;
    private serialize;
    private deserialize;
}
