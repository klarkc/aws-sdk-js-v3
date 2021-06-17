import { ServerlessApplicationRepositoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServerlessApplicationRepositoryClient";
import { GetApplicationPolicyRequest, GetApplicationPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetApplicationPolicyCommandInput extends GetApplicationPolicyRequest {
}
export interface GetApplicationPolicyCommandOutput extends GetApplicationPolicyResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the policy for the application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, GetApplicationPolicyCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, GetApplicationPolicyCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const command = new GetApplicationPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApplicationPolicyCommandInput} for command's `input` shape.
 * @see {@link GetApplicationPolicyCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetApplicationPolicyCommand extends $Command<GetApplicationPolicyCommandInput, GetApplicationPolicyCommandOutput, ServerlessApplicationRepositoryClientResolvedConfig> {
    readonly input: GetApplicationPolicyCommandInput;
    constructor(input: GetApplicationPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServerlessApplicationRepositoryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetApplicationPolicyCommandInput, GetApplicationPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
