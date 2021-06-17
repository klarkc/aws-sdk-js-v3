import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { RegisterApplicationRevisionInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RegisterApplicationRevisionCommandInput extends RegisterApplicationRevisionInput {
}
export interface RegisterApplicationRevisionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Registers with AWS CodeDeploy a revision for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, RegisterApplicationRevisionCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, RegisterApplicationRevisionCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new RegisterApplicationRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterApplicationRevisionCommandInput} for command's `input` shape.
 * @see {@link RegisterApplicationRevisionCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterApplicationRevisionCommand extends $Command<RegisterApplicationRevisionCommandInput, RegisterApplicationRevisionCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: RegisterApplicationRevisionCommandInput;
    constructor(input: RegisterApplicationRevisionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterApplicationRevisionCommandInput, RegisterApplicationRevisionCommandOutput>;
    private serialize;
    private deserialize;
}
