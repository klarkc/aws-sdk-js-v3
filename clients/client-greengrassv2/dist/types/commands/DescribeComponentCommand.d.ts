import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { DescribeComponentRequest, DescribeComponentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeComponentCommandInput extends DescribeComponentRequest {
}
export interface DescribeComponentCommandOutput extends DescribeComponentResponse, __MetadataBearer {
}
/**
 * <p>Retrieves metadata for a version of a component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, DescribeComponentCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, DescribeComponentCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new DescribeComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeComponentCommandInput} for command's `input` shape.
 * @see {@link DescribeComponentCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeComponentCommand extends $Command<DescribeComponentCommandInput, DescribeComponentCommandOutput, GreengrassV2ClientResolvedConfig> {
    readonly input: DescribeComponentCommandInput;
    constructor(input: DescribeComponentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeComponentCommandInput, DescribeComponentCommandOutput>;
    private serialize;
    private deserialize;
}
