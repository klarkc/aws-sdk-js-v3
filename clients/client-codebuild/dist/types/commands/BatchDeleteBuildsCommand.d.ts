import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { BatchDeleteBuildsInput, BatchDeleteBuildsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchDeleteBuildsCommandInput extends BatchDeleteBuildsInput {
}
export interface BatchDeleteBuildsCommandOutput extends BatchDeleteBuildsOutput, __MetadataBearer {
}
/**
 * <p>Deletes one or more builds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, BatchDeleteBuildsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, BatchDeleteBuildsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new BatchDeleteBuildsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteBuildsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteBuildsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchDeleteBuildsCommand extends $Command<BatchDeleteBuildsCommandInput, BatchDeleteBuildsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: BatchDeleteBuildsCommandInput;
    constructor(input: BatchDeleteBuildsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDeleteBuildsCommandInput, BatchDeleteBuildsCommandOutput>;
    private serialize;
    private deserialize;
}
