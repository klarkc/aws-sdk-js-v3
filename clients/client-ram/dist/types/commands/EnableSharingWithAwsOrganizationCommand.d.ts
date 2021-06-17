import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { EnableSharingWithAwsOrganizationRequest, EnableSharingWithAwsOrganizationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableSharingWithAwsOrganizationCommandInput extends EnableSharingWithAwsOrganizationRequest {
}
export interface EnableSharingWithAwsOrganizationCommandOutput extends EnableSharingWithAwsOrganizationResponse, __MetadataBearer {
}
/**
 * <p>Enables resource sharing within your AWS Organization.</p>
 *          <p>The caller must be the master account for the AWS Organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, EnableSharingWithAwsOrganizationCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, EnableSharingWithAwsOrganizationCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new EnableSharingWithAwsOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableSharingWithAwsOrganizationCommandInput} for command's `input` shape.
 * @see {@link EnableSharingWithAwsOrganizationCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableSharingWithAwsOrganizationCommand extends $Command<EnableSharingWithAwsOrganizationCommandInput, EnableSharingWithAwsOrganizationCommandOutput, RAMClientResolvedConfig> {
    readonly input: EnableSharingWithAwsOrganizationCommandInput;
    constructor(input: EnableSharingWithAwsOrganizationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableSharingWithAwsOrganizationCommandInput, EnableSharingWithAwsOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}
