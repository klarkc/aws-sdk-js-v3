import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetCoipPoolUsageRequest, GetCoipPoolUsageResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCoipPoolUsageCommandInput extends GetCoipPoolUsageRequest {
}
export interface GetCoipPoolUsageCommandOutput extends GetCoipPoolUsageResult, __MetadataBearer {
}
/**
 * <p>Describes the allocations from the specified customer-owned address pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetCoipPoolUsageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetCoipPoolUsageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetCoipPoolUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCoipPoolUsageCommandInput} for command's `input` shape.
 * @see {@link GetCoipPoolUsageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCoipPoolUsageCommand extends $Command<GetCoipPoolUsageCommandInput, GetCoipPoolUsageCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetCoipPoolUsageCommandInput;
    constructor(input: GetCoipPoolUsageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCoipPoolUsageCommandInput, GetCoipPoolUsageCommandOutput>;
    private serialize;
    private deserialize;
}
