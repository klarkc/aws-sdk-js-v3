import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { DescribeAddressRequest, DescribeAddressResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAddressCommandInput extends DescribeAddressRequest {
}
export interface DescribeAddressCommandOutput extends DescribeAddressResult, __MetadataBearer {
}
/**
 * <p>Takes an <code>AddressId</code> and returns specific details about that address in the
 *       form of an <code>Address</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, DescribeAddressCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, DescribeAddressCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new DescribeAddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAddressCommandInput} for command's `input` shape.
 * @see {@link DescribeAddressCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAddressCommand extends $Command<DescribeAddressCommandInput, DescribeAddressCommandOutput, SnowballClientResolvedConfig> {
    readonly input: DescribeAddressCommandInput;
    constructor(input: DescribeAddressCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAddressCommandInput, DescribeAddressCommandOutput>;
    private serialize;
    private deserialize;
}
