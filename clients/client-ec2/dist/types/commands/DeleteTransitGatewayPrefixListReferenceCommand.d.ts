import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTransitGatewayPrefixListReferenceRequest, DeleteTransitGatewayPrefixListReferenceResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTransitGatewayPrefixListReferenceCommandInput extends DeleteTransitGatewayPrefixListReferenceRequest {
}
export interface DeleteTransitGatewayPrefixListReferenceCommandOutput extends DeleteTransitGatewayPrefixListReferenceResult, __MetadataBearer {
}
/**
 * <p>Deletes a reference (route) to a prefix list in a specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayPrefixListReferenceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayPrefixListReferenceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTransitGatewayPrefixListReferenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTransitGatewayPrefixListReferenceCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayPrefixListReferenceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTransitGatewayPrefixListReferenceCommand extends $Command<DeleteTransitGatewayPrefixListReferenceCommandInput, DeleteTransitGatewayPrefixListReferenceCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteTransitGatewayPrefixListReferenceCommandInput;
    constructor(input: DeleteTransitGatewayPrefixListReferenceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTransitGatewayPrefixListReferenceCommandInput, DeleteTransitGatewayPrefixListReferenceCommandOutput>;
    private serialize;
    private deserialize;
}
