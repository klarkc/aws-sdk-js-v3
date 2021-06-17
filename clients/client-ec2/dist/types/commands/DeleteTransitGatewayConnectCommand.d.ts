import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTransitGatewayConnectRequest, DeleteTransitGatewayConnectResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTransitGatewayConnectCommandInput extends DeleteTransitGatewayConnectRequest {
}
export interface DeleteTransitGatewayConnectCommandOutput extends DeleteTransitGatewayConnectResult, __MetadataBearer {
}
/**
 * <p>Deletes the specified Connect attachment. You must first delete any Connect peers for
 *             the attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayConnectCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayConnectCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTransitGatewayConnectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTransitGatewayConnectCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayConnectCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTransitGatewayConnectCommand extends $Command<DeleteTransitGatewayConnectCommandInput, DeleteTransitGatewayConnectCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteTransitGatewayConnectCommandInput;
    constructor(input: DeleteTransitGatewayConnectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTransitGatewayConnectCommandInput, DeleteTransitGatewayConnectCommandOutput>;
    private serialize;
    private deserialize;
}
