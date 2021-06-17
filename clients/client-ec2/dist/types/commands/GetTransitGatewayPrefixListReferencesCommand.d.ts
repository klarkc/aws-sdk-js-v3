import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetTransitGatewayPrefixListReferencesRequest, GetTransitGatewayPrefixListReferencesResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTransitGatewayPrefixListReferencesCommandInput extends GetTransitGatewayPrefixListReferencesRequest {
}
export interface GetTransitGatewayPrefixListReferencesCommandOutput extends GetTransitGatewayPrefixListReferencesResult, __MetadataBearer {
}
/**
 * <p>Gets information about the prefix list references in a specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayPrefixListReferencesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayPrefixListReferencesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetTransitGatewayPrefixListReferencesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTransitGatewayPrefixListReferencesCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayPrefixListReferencesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTransitGatewayPrefixListReferencesCommand extends $Command<GetTransitGatewayPrefixListReferencesCommandInput, GetTransitGatewayPrefixListReferencesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetTransitGatewayPrefixListReferencesCommandInput;
    constructor(input: GetTransitGatewayPrefixListReferencesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTransitGatewayPrefixListReferencesCommandInput, GetTransitGatewayPrefixListReferencesCommandOutput>;
    private serialize;
    private deserialize;
}
