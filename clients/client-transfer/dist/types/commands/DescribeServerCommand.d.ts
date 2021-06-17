import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { DescribeServerRequest, DescribeServerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeServerCommandInput extends DescribeServerRequest {
}
export interface DescribeServerCommandOutput extends DescribeServerResponse, __MetadataBearer {
}
/**
 * <p>Describes a file transfer protocol-enabled server that you specify by passing the
 *         <code>ServerId</code> parameter.</p>
 *
 *          <p>The response contains a description of a server's properties. When you set
 *         <code>EndpointType</code> to VPC, the response will contain the
 *       <code>EndpointDetails</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeServerCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeServerCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new DescribeServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServerCommandInput} for command's `input` shape.
 * @see {@link DescribeServerCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeServerCommand extends $Command<DescribeServerCommandInput, DescribeServerCommandOutput, TransferClientResolvedConfig> {
    readonly input: DescribeServerCommandInput;
    constructor(input: DescribeServerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeServerCommandInput, DescribeServerCommandOutput>;
    private serialize;
    private deserialize;
}
