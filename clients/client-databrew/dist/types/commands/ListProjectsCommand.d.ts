import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { ListProjectsRequest, ListProjectsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListProjectsCommandInput extends ListProjectsRequest {
}
export interface ListProjectsCommandOutput extends ListProjectsResponse, __MetadataBearer {
}
/**
 * <p>Lists all of the DataBrew projects that are defined.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, ListProjectsCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, ListProjectsCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new ListProjectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProjectsCommandInput} for command's `input` shape.
 * @see {@link ListProjectsCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListProjectsCommand extends $Command<ListProjectsCommandInput, ListProjectsCommandOutput, DataBrewClientResolvedConfig> {
    readonly input: ListProjectsCommandInput;
    constructor(input: ListProjectsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataBrewClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProjectsCommandInput, ListProjectsCommandOutput>;
    private serialize;
    private deserialize;
}
