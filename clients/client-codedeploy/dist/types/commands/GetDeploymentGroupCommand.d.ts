import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { GetDeploymentGroupInput, GetDeploymentGroupOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDeploymentGroupCommandInput extends GetDeploymentGroupInput {
}
export interface GetDeploymentGroupCommandOutput extends GetDeploymentGroupOutput, __MetadataBearer {
}
/**
 * <p>Gets information about a deployment group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, GetDeploymentGroupCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, GetDeploymentGroupCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new GetDeploymentGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeploymentGroupCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDeploymentGroupCommand extends $Command<GetDeploymentGroupCommandInput, GetDeploymentGroupCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: GetDeploymentGroupCommandInput;
    constructor(input: GetDeploymentGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeploymentGroupCommandInput, GetDeploymentGroupCommandOutput>;
    private serialize;
    private deserialize;
}
