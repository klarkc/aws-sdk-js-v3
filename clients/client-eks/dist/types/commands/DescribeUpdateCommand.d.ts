import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { DescribeUpdateRequest, DescribeUpdateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeUpdateCommandInput extends DescribeUpdateRequest {
}
export interface DescribeUpdateCommandOutput extends DescribeUpdateResponse, __MetadataBearer {
}
/**
 * <p>Returns descriptive information about an update against your Amazon EKS cluster or
 *             associated managed node group.</p>
 *         <p>When the status of the update is <code>Succeeded</code>, the update is complete. If an
 *             update fails, the status is <code>Failed</code>, and an error detail explains the reason
 *             for the failure.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeUpdateCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeUpdateCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DescribeUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUpdateCommandInput} for command's `input` shape.
 * @see {@link DescribeUpdateCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeUpdateCommand extends $Command<DescribeUpdateCommandInput, DescribeUpdateCommandOutput, EKSClientResolvedConfig> {
    readonly input: DescribeUpdateCommandInput;
    constructor(input: DescribeUpdateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EKSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUpdateCommandInput, DescribeUpdateCommandOutput>;
    private serialize;
    private deserialize;
}
