import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { CreateOrganizationRequest, CreateOrganizationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateOrganizationCommandInput extends CreateOrganizationRequest {
}
export interface CreateOrganizationCommandOutput extends CreateOrganizationResponse, __MetadataBearer {
}
/**
 * <p>Creates an AWS organization. The account whose user is calling the
 *                 <code>CreateOrganization</code> operation automatically becomes the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">management account</a> of the new organization.</p>
 *         <p>This operation must be called using credentials from the account that is to become the
 *             new organization's management account. The principal must also have the relevant IAM
 *             permissions.</p>
 *         <p>By default (or if you set the <code>FeatureSet</code> parameter to <code>ALL</code>),
 *             the new organization is created with all features enabled and service control policies
 *             automatically enabled in the root. If you instead choose to create the organization
 *             supporting only the consolidated billing features by setting the <code>FeatureSet</code>
 *             parameter to <code>CONSOLIDATED_BILLING"</code>, no policy types are enabled by default,
 *             and you can't use organization policies</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, CreateOrganizationCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, CreateOrganizationCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new CreateOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOrganizationCommandInput} for command's `input` shape.
 * @see {@link CreateOrganizationCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateOrganizationCommand extends $Command<CreateOrganizationCommandInput, CreateOrganizationCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: CreateOrganizationCommandInput;
    constructor(input: CreateOrganizationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateOrganizationCommandInput, CreateOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}
