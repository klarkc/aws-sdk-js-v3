import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { BatchGetOnPremisesInstancesInput, BatchGetOnPremisesInstancesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchGetOnPremisesInstancesCommandInput extends BatchGetOnPremisesInstancesInput {
}
export interface BatchGetOnPremisesInstancesCommandOutput extends BatchGetOnPremisesInstancesOutput, __MetadataBearer {
}
/**
 * <p>Gets information about one or more on-premises instances. The maximum number of
 *             on-premises instances that can be returned is 25.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, BatchGetOnPremisesInstancesCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, BatchGetOnPremisesInstancesCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new BatchGetOnPremisesInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetOnPremisesInstancesCommandInput} for command's `input` shape.
 * @see {@link BatchGetOnPremisesInstancesCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGetOnPremisesInstancesCommand extends $Command<BatchGetOnPremisesInstancesCommandInput, BatchGetOnPremisesInstancesCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: BatchGetOnPremisesInstancesCommandInput;
    constructor(input: BatchGetOnPremisesInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetOnPremisesInstancesCommandInput, BatchGetOnPremisesInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
