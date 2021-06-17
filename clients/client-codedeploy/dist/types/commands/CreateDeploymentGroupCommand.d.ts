import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { CreateDeploymentGroupInput, CreateDeploymentGroupOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDeploymentGroupCommandInput extends CreateDeploymentGroupInput {
}
export interface CreateDeploymentGroupCommandOutput extends CreateDeploymentGroupOutput, __MetadataBearer {
}
/**
 * <p>Creates a deployment group to which application revisions are deployed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, CreateDeploymentGroupCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, CreateDeploymentGroupCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new CreateDeploymentGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDeploymentGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDeploymentGroupCommand extends $Command<CreateDeploymentGroupCommandInput, CreateDeploymentGroupCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: CreateDeploymentGroupCommandInput;
    constructor(input: CreateDeploymentGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDeploymentGroupCommandInput, CreateDeploymentGroupCommandOutput>;
    private serialize;
    private deserialize;
}
