import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { ResolveComponentCandidatesRequest, ResolveComponentCandidatesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResolveComponentCandidatesCommandInput extends ResolveComponentCandidatesRequest {
}
export interface ResolveComponentCandidatesCommandOutput extends ResolveComponentCandidatesResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a list of components that meet the component, version, and platform requirements
 *       of a deployment. AWS IoT Greengrass core devices call this operation when they receive a deployment to
 *       identify the components to install.</p>
 *          <p>This operation identifies components that meet all dependency requirements for a
 *       deployment. If the requirements conflict, then this operation returns an error and the
 *       deployment fails. For example, this occurs if component <code>A</code> requires version
 *         <code>>2.0.0</code> and component <code>B</code> requires version <code><2.0.0</code>
 *       of a component dependency.</p>
 *          <p>When you specify the component candidates to resolve, AWS IoT Greengrass compares each component's
 *       digest from the core device with the component's digest in the AWS Cloud. If the digests don't
 *       match, then AWS IoT Greengrass specifies to use the version from the AWS Cloud.</p>
 *          <important>
 *             <p>To use this operation, you must use the data plane API endpoint and authenticate with an
 *         AWS IoT device certificate. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/greengrass.html">AWS IoT Greengrass endpoints and quotas</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ResolveComponentCandidatesCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ResolveComponentCandidatesCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new ResolveComponentCandidatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResolveComponentCandidatesCommandInput} for command's `input` shape.
 * @see {@link ResolveComponentCandidatesCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResolveComponentCandidatesCommand extends $Command<ResolveComponentCandidatesCommandInput, ResolveComponentCandidatesCommandOutput, GreengrassV2ClientResolvedConfig> {
    readonly input: ResolveComponentCandidatesCommandInput;
    constructor(input: ResolveComponentCandidatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResolveComponentCandidatesCommandInput, ResolveComponentCandidatesCommandOutput>;
    private serialize;
    private deserialize;
}
