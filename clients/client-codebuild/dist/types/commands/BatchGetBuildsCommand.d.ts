import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { BatchGetBuildsInput, BatchGetBuildsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchGetBuildsCommandInput extends BatchGetBuildsInput {
}
export interface BatchGetBuildsCommandOutput extends BatchGetBuildsOutput, __MetadataBearer {
}
/**
 * <p>Gets information about one or more builds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, BatchGetBuildsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, BatchGetBuildsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new BatchGetBuildsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetBuildsCommandInput} for command's `input` shape.
 * @see {@link BatchGetBuildsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGetBuildsCommand extends $Command<BatchGetBuildsCommandInput, BatchGetBuildsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: BatchGetBuildsCommandInput;
    constructor(input: BatchGetBuildsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetBuildsCommandInput, BatchGetBuildsCommandOutput>;
    private serialize;
    private deserialize;
}
