import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { SearchLocalGatewayRoutesRequest, SearchLocalGatewayRoutesResult } from "../models/models_5";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SearchLocalGatewayRoutesCommandInput extends SearchLocalGatewayRoutesRequest {
}
export interface SearchLocalGatewayRoutesCommandOutput extends SearchLocalGatewayRoutesResult, __MetadataBearer {
}
/**
 * <p>Searches for routes in the specified local gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, SearchLocalGatewayRoutesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, SearchLocalGatewayRoutesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new SearchLocalGatewayRoutesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchLocalGatewayRoutesCommandInput} for command's `input` shape.
 * @see {@link SearchLocalGatewayRoutesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SearchLocalGatewayRoutesCommand extends $Command<SearchLocalGatewayRoutesCommandInput, SearchLocalGatewayRoutesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: SearchLocalGatewayRoutesCommandInput;
    constructor(input: SearchLocalGatewayRoutesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchLocalGatewayRoutesCommandInput, SearchLocalGatewayRoutesCommandOutput>;
    private serialize;
    private deserialize;
}
