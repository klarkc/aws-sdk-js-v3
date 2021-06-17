import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { ListRecipeVersionsRequest, ListRecipeVersionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRecipeVersionsCommandInput extends ListRecipeVersionsRequest {
}
export interface ListRecipeVersionsCommandOutput extends ListRecipeVersionsResponse, __MetadataBearer {
}
/**
 * <p>Lists the versions of a particular DataBrew recipe, except for
 *                 <code>LATEST_WORKING</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, ListRecipeVersionsCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, ListRecipeVersionsCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new ListRecipeVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRecipeVersionsCommandInput} for command's `input` shape.
 * @see {@link ListRecipeVersionsCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRecipeVersionsCommand extends $Command<ListRecipeVersionsCommandInput, ListRecipeVersionsCommandOutput, DataBrewClientResolvedConfig> {
    readonly input: ListRecipeVersionsCommandInput;
    constructor(input: ListRecipeVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataBrewClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRecipeVersionsCommandInput, ListRecipeVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
