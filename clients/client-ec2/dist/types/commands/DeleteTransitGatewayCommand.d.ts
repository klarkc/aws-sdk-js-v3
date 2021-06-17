import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTransitGatewayRequest, DeleteTransitGatewayResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTransitGatewayCommandInput extends DeleteTransitGatewayRequest {
}
export interface DeleteTransitGatewayCommandOutput extends DeleteTransitGatewayResult, __MetadataBearer {
}
/**
 * <p>Deletes the specified transit gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTransitGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTransitGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTransitGatewayCommand extends $Command<DeleteTransitGatewayCommandInput, DeleteTransitGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteTransitGatewayCommandInput;
    constructor(input: DeleteTransitGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTransitGatewayCommandInput, DeleteTransitGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
