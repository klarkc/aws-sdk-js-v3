import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { GetRepositoryPermissionsPolicyRequest, GetRepositoryPermissionsPolicyResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRepositoryPermissionsPolicyCommandInput extends GetRepositoryPermissionsPolicyRequest {
}
export interface GetRepositoryPermissionsPolicyCommandOutput extends GetRepositoryPermissionsPolicyResult, __MetadataBearer {
}
/**
 * <p>
 *         Returns the resource policy that is set on a repository.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetRepositoryPermissionsPolicyCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetRepositoryPermissionsPolicyCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new GetRepositoryPermissionsPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRepositoryPermissionsPolicyCommandInput} for command's `input` shape.
 * @see {@link GetRepositoryPermissionsPolicyCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRepositoryPermissionsPolicyCommand extends $Command<GetRepositoryPermissionsPolicyCommandInput, GetRepositoryPermissionsPolicyCommandOutput, CodeartifactClientResolvedConfig> {
    readonly input: GetRepositoryPermissionsPolicyCommandInput;
    constructor(input: GetRepositoryPermissionsPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeartifactClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRepositoryPermissionsPolicyCommandInput, GetRepositoryPermissionsPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
