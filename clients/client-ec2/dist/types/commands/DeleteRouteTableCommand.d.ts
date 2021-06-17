import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteRouteTableRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRouteTableCommandInput extends DeleteRouteTableRequest {
}
export interface DeleteRouteTableCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified route table. You must disassociate the route table from any subnets before you can delete it. You can't delete the main route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteRouteTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRouteTableCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRouteTableCommand extends $Command<DeleteRouteTableCommandInput, DeleteRouteTableCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteRouteTableCommandInput;
    constructor(input: DeleteRouteTableCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRouteTableCommandInput, DeleteRouteTableCommandOutput>;
    private serialize;
    private deserialize;
}
