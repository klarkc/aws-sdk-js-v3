import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { ListAppsListsRequest, ListAppsListsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAppsListsCommandInput extends ListAppsListsRequest {
}
export interface ListAppsListsCommandOutput extends ListAppsListsResponse, __MetadataBearer {
}
/**
 * <p>Returns an array of <code>AppsListDataSummary</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListAppsListsCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListAppsListsCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new ListAppsListsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAppsListsCommandInput} for command's `input` shape.
 * @see {@link ListAppsListsCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAppsListsCommand extends $Command<ListAppsListsCommandInput, ListAppsListsCommandOutput, FMSClientResolvedConfig> {
    readonly input: ListAppsListsCommandInput;
    constructor(input: ListAppsListsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAppsListsCommandInput, ListAppsListsCommandOutput>;
    private serialize;
    private deserialize;
}
