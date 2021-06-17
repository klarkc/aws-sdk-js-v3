import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { ListDeploymentInstancesInput, ListDeploymentInstancesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDeploymentInstancesCommandInput extends ListDeploymentInstancesInput {
}
export interface ListDeploymentInstancesCommandOutput extends ListDeploymentInstancesOutput, __MetadataBearer {
}
/**
 * @deprecated
 *
 * <note>
 *             <p> The newer <code>BatchGetDeploymentTargets</code> should be used instead because
 *                 it works with all compute types. <code>ListDeploymentInstances</code> throws an
 *                 exception if it is used with a compute platform other than EC2/On-premises or AWS
 *                 Lambda. </p>
 *         </note>
 *         <p> Lists the instance for a deployment associated with the IAM user or AWS account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListDeploymentInstancesCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListDeploymentInstancesCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new ListDeploymentInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeploymentInstancesCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentInstancesCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDeploymentInstancesCommand extends $Command<ListDeploymentInstancesCommandInput, ListDeploymentInstancesCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: ListDeploymentInstancesCommandInput;
    constructor(input: ListDeploymentInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeploymentInstancesCommandInput, ListDeploymentInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
