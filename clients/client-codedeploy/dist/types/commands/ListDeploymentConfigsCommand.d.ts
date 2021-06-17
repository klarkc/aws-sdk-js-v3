import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { ListDeploymentConfigsInput, ListDeploymentConfigsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDeploymentConfigsCommandInput extends ListDeploymentConfigsInput {
}
export interface ListDeploymentConfigsCommandOutput extends ListDeploymentConfigsOutput, __MetadataBearer {
}
/**
 * <p>Lists the deployment configurations with the IAM user or AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListDeploymentConfigsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListDeploymentConfigsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new ListDeploymentConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeploymentConfigsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentConfigsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDeploymentConfigsCommand extends $Command<ListDeploymentConfigsCommandInput, ListDeploymentConfigsCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: ListDeploymentConfigsCommandInput;
    constructor(input: ListDeploymentConfigsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeploymentConfigsCommandInput, ListDeploymentConfigsCommandOutput>;
    private serialize;
    private deserialize;
}
