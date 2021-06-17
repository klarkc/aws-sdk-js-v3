import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { GetApplicationRevisionInput, GetApplicationRevisionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetApplicationRevisionCommandInput extends GetApplicationRevisionInput {
}
export interface GetApplicationRevisionCommandOutput extends GetApplicationRevisionOutput, __MetadataBearer {
}
/**
 * <p>Gets information about an application revision.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, GetApplicationRevisionCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, GetApplicationRevisionCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new GetApplicationRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApplicationRevisionCommandInput} for command's `input` shape.
 * @see {@link GetApplicationRevisionCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetApplicationRevisionCommand extends $Command<GetApplicationRevisionCommandInput, GetApplicationRevisionCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: GetApplicationRevisionCommandInput;
    constructor(input: GetApplicationRevisionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetApplicationRevisionCommandInput, GetApplicationRevisionCommandOutput>;
    private serialize;
    private deserialize;
}
