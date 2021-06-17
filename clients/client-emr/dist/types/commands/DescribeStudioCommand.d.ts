import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { DescribeStudioInput, DescribeStudioOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeStudioCommandInput extends DescribeStudioInput {
}
export interface DescribeStudioCommandOutput extends DescribeStudioOutput, __MetadataBearer {
}
/**
 * <p>Returns details for the specified Amazon EMR Studio including ID, Name, VPC, Studio
 *          access URL, and so on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribeStudioCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribeStudioCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new DescribeStudioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStudioCommandInput} for command's `input` shape.
 * @see {@link DescribeStudioCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeStudioCommand extends $Command<DescribeStudioCommandInput, DescribeStudioCommandOutput, EMRClientResolvedConfig> {
    readonly input: DescribeStudioCommandInput;
    constructor(input: DescribeStudioCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStudioCommandInput, DescribeStudioCommandOutput>;
    private serialize;
    private deserialize;
}
