import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTransitGatewayRouteTableRequest, DeleteTransitGatewayRouteTableResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTransitGatewayRouteTableCommandInput extends DeleteTransitGatewayRouteTableRequest {
}
export interface DeleteTransitGatewayRouteTableCommandOutput extends DeleteTransitGatewayRouteTableResult, __MetadataBearer {
}
/**
 * <p>Deletes the specified transit gateway route table. You must disassociate the route table from any
 *           transit gateway route tables before you can delete it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTransitGatewayRouteTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTransitGatewayRouteTableCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTransitGatewayRouteTableCommand extends $Command<DeleteTransitGatewayRouteTableCommandInput, DeleteTransitGatewayRouteTableCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteTransitGatewayRouteTableCommandInput;
    constructor(input: DeleteTransitGatewayRouteTableCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTransitGatewayRouteTableCommandInput, DeleteTransitGatewayRouteTableCommandOutput>;
    private serialize;
    private deserialize;
}
