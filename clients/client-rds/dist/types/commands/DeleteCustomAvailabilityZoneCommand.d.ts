import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteCustomAvailabilityZoneMessage, DeleteCustomAvailabilityZoneResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCustomAvailabilityZoneCommandInput extends DeleteCustomAvailabilityZoneMessage {
}
export interface DeleteCustomAvailabilityZoneCommandOutput extends DeleteCustomAvailabilityZoneResult, __MetadataBearer {
}
/**
 * <p>Deletes a custom Availability Zone (AZ).</p>
 *         <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p>
 *         <p>For more information about RDS on VMware, see the
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html">
 *                 RDS on VMware User Guide.</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteCustomAvailabilityZoneCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteCustomAvailabilityZoneCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteCustomAvailabilityZoneCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomAvailabilityZoneCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomAvailabilityZoneCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCustomAvailabilityZoneCommand extends $Command<DeleteCustomAvailabilityZoneCommandInput, DeleteCustomAvailabilityZoneCommandOutput, RDSClientResolvedConfig> {
    readonly input: DeleteCustomAvailabilityZoneCommandInput;
    constructor(input: DeleteCustomAvailabilityZoneCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCustomAvailabilityZoneCommandInput, DeleteCustomAvailabilityZoneCommandOutput>;
    private serialize;
    private deserialize;
}
