import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { ListProtocolsListsRequest, ListProtocolsListsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListProtocolsListsCommandInput extends ListProtocolsListsRequest {
}
export interface ListProtocolsListsCommandOutput extends ListProtocolsListsResponse, __MetadataBearer {
}
/**
 * <p>Returns an array of <code>ProtocolsListDataSummary</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListProtocolsListsCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListProtocolsListsCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new ListProtocolsListsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProtocolsListsCommandInput} for command's `input` shape.
 * @see {@link ListProtocolsListsCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListProtocolsListsCommand extends $Command<ListProtocolsListsCommandInput, ListProtocolsListsCommandOutput, FMSClientResolvedConfig> {
    readonly input: ListProtocolsListsCommandInput;
    constructor(input: ListProtocolsListsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProtocolsListsCommandInput, ListProtocolsListsCommandOutput>;
    private serialize;
    private deserialize;
}
