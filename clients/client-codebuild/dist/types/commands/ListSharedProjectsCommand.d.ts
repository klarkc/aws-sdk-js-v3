import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListSharedProjectsInput, ListSharedProjectsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSharedProjectsCommandInput extends ListSharedProjectsInput {
}
export interface ListSharedProjectsCommandOutput extends ListSharedProjectsOutput, __MetadataBearer {
}
/**
 * <p> Gets a list of projects that are shared with other AWS accounts or users. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListSharedProjectsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListSharedProjectsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ListSharedProjectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSharedProjectsCommandInput} for command's `input` shape.
 * @see {@link ListSharedProjectsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSharedProjectsCommand extends $Command<ListSharedProjectsCommandInput, ListSharedProjectsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: ListSharedProjectsCommandInput;
    constructor(input: ListSharedProjectsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSharedProjectsCommandInput, ListSharedProjectsCommandOutput>;
    private serialize;
    private deserialize;
}
