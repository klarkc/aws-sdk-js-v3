import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetContainerServiceDeploymentsRequest, GetContainerServiceDeploymentsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetContainerServiceDeploymentsCommandInput extends GetContainerServiceDeploymentsRequest {
}
export interface GetContainerServiceDeploymentsCommandOutput extends GetContainerServiceDeploymentsResult, __MetadataBearer {
}
/**
 * <p>Returns the deployments for your Amazon Lightsail container service</p>
 *
 *          <p>A deployment specifies the settings, such as the ports and launch command, of containers
 *       that are deployed to your container service.</p>
 *
 *          <p>The deployments are ordered by version in ascending order. The newest version is listed at
 *       the top of the response.</p>
 *
 *          <note>
 *             <p>A set number of deployments are kept before the oldest one is replaced with the newest
 *         one. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail
 *           endpoints and quotas</a> in the <i>AWS General Reference</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerServiceDeploymentsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerServiceDeploymentsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetContainerServiceDeploymentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerServiceDeploymentsCommandInput} for command's `input` shape.
 * @see {@link GetContainerServiceDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetContainerServiceDeploymentsCommand extends $Command<GetContainerServiceDeploymentsCommandInput, GetContainerServiceDeploymentsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetContainerServiceDeploymentsCommandInput;
    constructor(input: GetContainerServiceDeploymentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetContainerServiceDeploymentsCommandInput, GetContainerServiceDeploymentsCommandOutput>;
    private serialize;
    private deserialize;
}
