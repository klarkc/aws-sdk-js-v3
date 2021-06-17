import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { GetOnPremisesInstanceInput, GetOnPremisesInstanceOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetOnPremisesInstanceCommandInput extends GetOnPremisesInstanceInput {
}
export interface GetOnPremisesInstanceCommandOutput extends GetOnPremisesInstanceOutput, __MetadataBearer {
}
/**
 * <p> Gets information about an on-premises instance. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, GetOnPremisesInstanceCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, GetOnPremisesInstanceCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new GetOnPremisesInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOnPremisesInstanceCommandInput} for command's `input` shape.
 * @see {@link GetOnPremisesInstanceCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetOnPremisesInstanceCommand extends $Command<GetOnPremisesInstanceCommandInput, GetOnPremisesInstanceCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: GetOnPremisesInstanceCommandInput;
    constructor(input: GetOnPremisesInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOnPremisesInstanceCommandInput, GetOnPremisesInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
