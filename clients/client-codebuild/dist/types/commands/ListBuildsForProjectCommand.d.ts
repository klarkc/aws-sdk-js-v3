import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListBuildsForProjectInput, ListBuildsForProjectOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListBuildsForProjectCommandInput extends ListBuildsForProjectInput {
}
export interface ListBuildsForProjectCommandOutput extends ListBuildsForProjectOutput, __MetadataBearer {
}
/**
 * <p>Gets a list of build identifiers for the specified build project, with each build
 *             identifier representing a single build.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListBuildsForProjectCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListBuildsForProjectCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ListBuildsForProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBuildsForProjectCommandInput} for command's `input` shape.
 * @see {@link ListBuildsForProjectCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBuildsForProjectCommand extends $Command<ListBuildsForProjectCommandInput, ListBuildsForProjectCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: ListBuildsForProjectCommandInput;
    constructor(input: ListBuildsForProjectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBuildsForProjectCommandInput, ListBuildsForProjectCommandOutput>;
    private serialize;
    private deserialize;
}
