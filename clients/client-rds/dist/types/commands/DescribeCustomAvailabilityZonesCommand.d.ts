import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CustomAvailabilityZoneMessage, DescribeCustomAvailabilityZonesMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCustomAvailabilityZonesCommandInput extends DescribeCustomAvailabilityZonesMessage {
}
export interface DescribeCustomAvailabilityZonesCommandOutput extends CustomAvailabilityZoneMessage, __MetadataBearer {
}
/**
 * <p>Returns information about custom Availability Zones (AZs).</p>
 *         <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p>
 *         <p>For more information about RDS on VMware, see the
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html">
 *                 RDS on VMware User Guide.</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeCustomAvailabilityZonesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeCustomAvailabilityZonesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeCustomAvailabilityZonesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCustomAvailabilityZonesCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomAvailabilityZonesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCustomAvailabilityZonesCommand extends $Command<DescribeCustomAvailabilityZonesCommandInput, DescribeCustomAvailabilityZonesCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeCustomAvailabilityZonesCommandInput;
    constructor(input: DescribeCustomAvailabilityZonesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCustomAvailabilityZonesCommandInput, DescribeCustomAvailabilityZonesCommandOutput>;
    private serialize;
    private deserialize;
}
