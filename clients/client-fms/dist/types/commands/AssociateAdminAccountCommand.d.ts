import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { AssociateAdminAccountRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateAdminAccountCommandInput extends AssociateAdminAccountRequest {
}
export interface AssociateAdminAccountCommandOutput extends __MetadataBearer {
}
/**
 * <p>Sets the AWS Firewall Manager administrator account. AWS Firewall Manager must be
 *       associated with the master account of your AWS organization or associated with a member
 *       account that has the appropriate permissions. If the account ID that you submit is not an AWS
 *       Organizations master account, AWS Firewall Manager will set the appropriate permissions for
 *       the given member account.</p>
 *          <p>The account that you associate with AWS Firewall Manager is called the AWS Firewall
 *       Manager administrator account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, AssociateAdminAccountCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, AssociateAdminAccountCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new AssociateAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateAdminAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateAdminAccountCommand extends $Command<AssociateAdminAccountCommandInput, AssociateAdminAccountCommandOutput, FMSClientResolvedConfig> {
    readonly input: AssociateAdminAccountCommandInput;
    constructor(input: AssociateAdminAccountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateAdminAccountCommandInput, AssociateAdminAccountCommandOutput>;
    private serialize;
    private deserialize;
}
