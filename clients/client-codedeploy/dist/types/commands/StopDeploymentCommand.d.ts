import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { StopDeploymentInput, StopDeploymentOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopDeploymentCommandInput extends StopDeploymentInput {
}
export interface StopDeploymentCommandOutput extends StopDeploymentOutput, __MetadataBearer {
}
/**
 * <p>Attempts to stop an ongoing deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, StopDeploymentCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, StopDeploymentCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new StopDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopDeploymentCommandInput} for command's `input` shape.
 * @see {@link StopDeploymentCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopDeploymentCommand extends $Command<StopDeploymentCommandInput, StopDeploymentCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: StopDeploymentCommandInput;
    constructor(input: StopDeploymentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopDeploymentCommandInput, StopDeploymentCommandOutput>;
    private serialize;
    private deserialize;
}
