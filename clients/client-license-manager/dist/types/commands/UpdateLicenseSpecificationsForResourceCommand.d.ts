import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { UpdateLicenseSpecificationsForResourceRequest, UpdateLicenseSpecificationsForResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateLicenseSpecificationsForResourceCommandInput extends UpdateLicenseSpecificationsForResourceRequest {
}
export interface UpdateLicenseSpecificationsForResourceCommandOutput extends UpdateLicenseSpecificationsForResourceResponse, __MetadataBearer {
}
/**
 * <p>Adds or removes the specified license configurations for the specified AWS resource.</p>
 *          <p>You can update the license specifications of AMIs, instances, and hosts.
 *          You cannot update the license specifications for launch templates and AWS CloudFormation templates,
 *          as they send license configurations to the operation that creates the resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, UpdateLicenseSpecificationsForResourceCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, UpdateLicenseSpecificationsForResourceCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new UpdateLicenseSpecificationsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLicenseSpecificationsForResourceCommandInput} for command's `input` shape.
 * @see {@link UpdateLicenseSpecificationsForResourceCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateLicenseSpecificationsForResourceCommand extends $Command<UpdateLicenseSpecificationsForResourceCommandInput, UpdateLicenseSpecificationsForResourceCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: UpdateLicenseSpecificationsForResourceCommandInput;
    constructor(input: UpdateLicenseSpecificationsForResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLicenseSpecificationsForResourceCommandInput, UpdateLicenseSpecificationsForResourceCommandOutput>;
    private serialize;
    private deserialize;
}
