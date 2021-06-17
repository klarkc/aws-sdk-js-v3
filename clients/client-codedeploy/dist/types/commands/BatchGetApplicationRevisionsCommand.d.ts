import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { BatchGetApplicationRevisionsInput, BatchGetApplicationRevisionsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchGetApplicationRevisionsCommandInput extends BatchGetApplicationRevisionsInput {
}
export interface BatchGetApplicationRevisionsCommandOutput extends BatchGetApplicationRevisionsOutput, __MetadataBearer {
}
/**
 * <p>Gets information about one or more application revisions. The maximum number of
 *             application revisions that can be returned is 25.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, BatchGetApplicationRevisionsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, BatchGetApplicationRevisionsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new BatchGetApplicationRevisionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetApplicationRevisionsCommandInput} for command's `input` shape.
 * @see {@link BatchGetApplicationRevisionsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGetApplicationRevisionsCommand extends $Command<BatchGetApplicationRevisionsCommandInput, BatchGetApplicationRevisionsCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: BatchGetApplicationRevisionsCommandInput;
    constructor(input: BatchGetApplicationRevisionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetApplicationRevisionsCommandInput, BatchGetApplicationRevisionsCommandOutput>;
    private serialize;
    private deserialize;
}
