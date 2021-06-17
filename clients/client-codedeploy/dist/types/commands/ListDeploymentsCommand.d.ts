import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { ListDeploymentsInput, ListDeploymentsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDeploymentsCommandInput extends ListDeploymentsInput {
}
export interface ListDeploymentsCommandOutput extends ListDeploymentsOutput, __MetadataBearer {
}
/**
 * <p>Lists the deployments in a deployment group for an application registered with the IAM
 *             user or AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListDeploymentsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListDeploymentsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new ListDeploymentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeploymentsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDeploymentsCommand extends $Command<ListDeploymentsCommandInput, ListDeploymentsCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: ListDeploymentsCommandInput;
    constructor(input: ListDeploymentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeploymentsCommandInput, ListDeploymentsCommandOutput>;
    private serialize;
    private deserialize;
}
