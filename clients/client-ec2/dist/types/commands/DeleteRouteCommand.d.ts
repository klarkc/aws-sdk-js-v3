import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteRouteRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRouteCommandInput extends DeleteRouteRequest {
}
export interface DeleteRouteCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified route from the specified route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRouteCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRouteCommand extends $Command<DeleteRouteCommandInput, DeleteRouteCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteRouteCommandInput;
    constructor(input: DeleteRouteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRouteCommandInput, DeleteRouteCommandOutput>;
    private serialize;
    private deserialize;
}
