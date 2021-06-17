import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeChapCredentialsInput, DescribeChapCredentialsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeChapCredentialsCommandInput extends DescribeChapCredentialsInput {
}
export interface DescribeChapCredentialsCommandOutput extends DescribeChapCredentialsOutput, __MetadataBearer {
}
/**
 * <p>Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials
 *          information for a specified iSCSI target, one for each target-initiator pair. This
 *          operation is supported in the volume and tape gateway types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeChapCredentialsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeChapCredentialsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeChapCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeChapCredentialsCommandInput} for command's `input` shape.
 * @see {@link DescribeChapCredentialsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeChapCredentialsCommand extends $Command<DescribeChapCredentialsCommandInput, DescribeChapCredentialsCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeChapCredentialsCommandInput;
    constructor(input: DescribeChapCredentialsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeChapCredentialsCommandInput, DescribeChapCredentialsCommandOutput>;
    private serialize;
    private deserialize;
}
