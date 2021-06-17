import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeInstanceTypesRequest, DescribeInstanceTypesResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeInstanceTypesCommandInput extends DescribeInstanceTypesRequest {
}
export interface DescribeInstanceTypesCommandOutput extends DescribeInstanceTypesResult, __MetadataBearer {
}
/**
 * <p>Describes the details of the instance types that are offered in a location. The results can be filtered by the
 *    attributes of the instance types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceTypesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceTypesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeInstanceTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceTypesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeInstanceTypesCommand extends $Command<DescribeInstanceTypesCommandInput, DescribeInstanceTypesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeInstanceTypesCommandInput;
    constructor(input: DescribeInstanceTypesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstanceTypesCommandInput, DescribeInstanceTypesCommandOutput>;
    private serialize;
    private deserialize;
}
