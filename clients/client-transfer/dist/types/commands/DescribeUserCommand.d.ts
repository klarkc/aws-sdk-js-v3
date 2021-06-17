import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { DescribeUserRequest, DescribeUserResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeUserCommandInput extends DescribeUserRequest {
}
export interface DescribeUserCommandOutput extends DescribeUserResponse, __MetadataBearer {
}
/**
 * <p>Describes the user assigned to the specific file transfer protocol-enabled server, as
 *       identified by its <code>ServerId</code> property.</p>
 *
 *          <p>The response from this call returns the properties of the user associated with the
 *         <code>ServerId</code> value that was specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeUserCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeUserCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new DescribeUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUserCommandInput} for command's `input` shape.
 * @see {@link DescribeUserCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeUserCommand extends $Command<DescribeUserCommandInput, DescribeUserCommandOutput, TransferClientResolvedConfig> {
    readonly input: DescribeUserCommandInput;
    constructor(input: DescribeUserCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUserCommandInput, DescribeUserCommandOutput>;
    private serialize;
    private deserialize;
}
