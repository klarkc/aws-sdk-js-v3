import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateCustomAvailabilityZoneMessage, CreateCustomAvailabilityZoneResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCustomAvailabilityZoneCommandInput extends CreateCustomAvailabilityZoneMessage {
}
export interface CreateCustomAvailabilityZoneCommandOutput extends CreateCustomAvailabilityZoneResult, __MetadataBearer {
}
/**
 * <p>Creates a custom Availability Zone (AZ).</p>
 *         <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p>
 *         <p>For more information about RDS on VMware, see the
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html">
 *                 RDS on VMware User Guide.</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateCustomAvailabilityZoneCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateCustomAvailabilityZoneCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateCustomAvailabilityZoneCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomAvailabilityZoneCommandInput} for command's `input` shape.
 * @see {@link CreateCustomAvailabilityZoneCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCustomAvailabilityZoneCommand extends $Command<CreateCustomAvailabilityZoneCommandInput, CreateCustomAvailabilityZoneCommandOutput, RDSClientResolvedConfig> {
    readonly input: CreateCustomAvailabilityZoneCommandInput;
    constructor(input: CreateCustomAvailabilityZoneCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCustomAvailabilityZoneCommandInput, CreateCustomAvailabilityZoneCommandOutput>;
    private serialize;
    private deserialize;
}
