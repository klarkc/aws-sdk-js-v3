import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { GetRepositoryEndpointRequest, GetRepositoryEndpointResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRepositoryEndpointCommandInput extends GetRepositoryEndpointRequest {
}
export interface GetRepositoryEndpointCommandOutput extends GetRepositoryEndpointResult, __MetadataBearer {
}
/**
 * <p>
 *       Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each
 *       package format:
 *     </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>npm</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>pypi</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>maven</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetRepositoryEndpointCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetRepositoryEndpointCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new GetRepositoryEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRepositoryEndpointCommandInput} for command's `input` shape.
 * @see {@link GetRepositoryEndpointCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRepositoryEndpointCommand extends $Command<GetRepositoryEndpointCommandInput, GetRepositoryEndpointCommandOutput, CodeartifactClientResolvedConfig> {
    readonly input: GetRepositoryEndpointCommandInput;
    constructor(input: GetRepositoryEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeartifactClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRepositoryEndpointCommandInput, GetRepositoryEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
