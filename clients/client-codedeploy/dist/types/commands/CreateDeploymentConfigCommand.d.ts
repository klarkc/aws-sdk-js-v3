import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { CreateDeploymentConfigInput, CreateDeploymentConfigOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDeploymentConfigCommandInput extends CreateDeploymentConfigInput {
}
export interface CreateDeploymentConfigCommandOutput extends CreateDeploymentConfigOutput, __MetadataBearer {
}
/**
 * <p> Creates a deployment configuration. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, CreateDeploymentConfigCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, CreateDeploymentConfigCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new CreateDeploymentConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDeploymentConfigCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentConfigCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDeploymentConfigCommand extends $Command<CreateDeploymentConfigCommandInput, CreateDeploymentConfigCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: CreateDeploymentConfigCommandInput;
    constructor(input: CreateDeploymentConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDeploymentConfigCommandInput, CreateDeploymentConfigCommandOutput>;
    private serialize;
    private deserialize;
}
