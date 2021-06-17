import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { ListTagsForProjectRequest, ListTagsForProjectResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTagsForProjectCommandInput extends ListTagsForProjectRequest {
}
export interface ListTagsForProjectCommandOutput extends ListTagsForProjectResult, __MetadataBearer {
}
/**
 * <p>Gets the tags for a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, ListTagsForProjectCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, ListTagsForProjectCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new ListTagsForProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForProjectCommandInput} for command's `input` shape.
 * @see {@link ListTagsForProjectCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTagsForProjectCommand extends $Command<ListTagsForProjectCommandInput, ListTagsForProjectCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: ListTagsForProjectCommandInput;
    constructor(input: ListTagsForProjectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsForProjectCommandInput, ListTagsForProjectCommandOutput>;
    private serialize;
    private deserialize;
}
