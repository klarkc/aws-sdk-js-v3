import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTransitGatewayRouteRequest, DeleteTransitGatewayRouteResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTransitGatewayRouteCommandInput extends DeleteTransitGatewayRouteRequest {
}
export interface DeleteTransitGatewayRouteCommandOutput extends DeleteTransitGatewayRouteResult, __MetadataBearer {
}
/**
 * <p>Deletes the specified route from the specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTransitGatewayRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTransitGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTransitGatewayRouteCommand extends $Command<DeleteTransitGatewayRouteCommandInput, DeleteTransitGatewayRouteCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteTransitGatewayRouteCommandInput;
    constructor(input: DeleteTransitGatewayRouteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTransitGatewayRouteCommandInput, DeleteTransitGatewayRouteCommandOutput>;
    private serialize;
    private deserialize;
}
