import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DescribeOrganizationalUnitRequest, DescribeOrganizationalUnitResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeOrganizationalUnitCommandInput extends DescribeOrganizationalUnitRequest {
}
export interface DescribeOrganizationalUnitCommandOutput extends DescribeOrganizationalUnitResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about an organizational unit (OU).</p>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DescribeOrganizationalUnitCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DescribeOrganizationalUnitCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DescribeOrganizationalUnitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrganizationalUnitCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationalUnitCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeOrganizationalUnitCommand extends $Command<DescribeOrganizationalUnitCommandInput, DescribeOrganizationalUnitCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: DescribeOrganizationalUnitCommandInput;
    constructor(input: DescribeOrganizationalUnitCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOrganizationalUnitCommandInput, DescribeOrganizationalUnitCommandOutput>;
    private serialize;
    private deserialize;
}
