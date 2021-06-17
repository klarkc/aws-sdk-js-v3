import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListBuildsInput, ListBuildsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListBuildsCommandInput extends ListBuildsInput {
}
export interface ListBuildsCommandOutput extends ListBuildsOutput, __MetadataBearer {
}
/**
 * <p>Gets a list of build IDs, with each build ID representing a single build.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListBuildsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListBuildsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ListBuildsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBuildsCommandInput} for command's `input` shape.
 * @see {@link ListBuildsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBuildsCommand extends $Command<ListBuildsCommandInput, ListBuildsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: ListBuildsCommandInput;
    constructor(input: ListBuildsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBuildsCommandInput, ListBuildsCommandOutput>;
    private serialize;
    private deserialize;
}
