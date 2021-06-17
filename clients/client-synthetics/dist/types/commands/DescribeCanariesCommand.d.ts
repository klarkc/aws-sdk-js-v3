import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";
import { DescribeCanariesRequest, DescribeCanariesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCanariesCommandInput extends DescribeCanariesRequest {
}
export interface DescribeCanariesCommandOutput extends DescribeCanariesResponse, __MetadataBearer {
}
/**
 * <p>This operation returns a list of the canaries in your account, along with full details
 *       about each canary.</p>
 *         <p>This operation does not have resource-level authorization, so if a user is able to use
 *             <code>DescribeCanaries</code>, the user can see all of the canaries in the account. A
 *          deny policy can only be used to restrict access to all canaries. It cannot be used on
 *          specific resources. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, DescribeCanariesCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, DescribeCanariesCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const command = new DescribeCanariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCanariesCommandInput} for command's `input` shape.
 * @see {@link DescribeCanariesCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCanariesCommand extends $Command<DescribeCanariesCommandInput, DescribeCanariesCommandOutput, SyntheticsClientResolvedConfig> {
    readonly input: DescribeCanariesCommandInput;
    constructor(input: DescribeCanariesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SyntheticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCanariesCommandInput, DescribeCanariesCommandOutput>;
    private serialize;
    private deserialize;
}
