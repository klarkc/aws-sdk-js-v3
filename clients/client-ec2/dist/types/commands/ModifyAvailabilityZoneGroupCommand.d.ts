import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyAvailabilityZoneGroupRequest, ModifyAvailabilityZoneGroupResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyAvailabilityZoneGroupCommandInput extends ModifyAvailabilityZoneGroupRequest {
}
export interface ModifyAvailabilityZoneGroupCommandOutput extends ModifyAvailabilityZoneGroupResult, __MetadataBearer {
}
/**
 * <p>Changes the opt-in status of the Local Zone and Wavelength Zone group for your
 *       account.</p>
 *          <p>Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html">
 *   		DescribeAvailabilityZones</a> to view the value for <code>GroupName</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyAvailabilityZoneGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyAvailabilityZoneGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyAvailabilityZoneGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyAvailabilityZoneGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyAvailabilityZoneGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyAvailabilityZoneGroupCommand extends $Command<ModifyAvailabilityZoneGroupCommandInput, ModifyAvailabilityZoneGroupCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyAvailabilityZoneGroupCommandInput;
    constructor(input: ModifyAvailabilityZoneGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyAvailabilityZoneGroupCommandInput, ModifyAvailabilityZoneGroupCommandOutput>;
    private serialize;
    private deserialize;
}
