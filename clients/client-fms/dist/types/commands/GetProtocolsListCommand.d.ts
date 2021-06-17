import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetProtocolsListRequest, GetProtocolsListResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetProtocolsListCommandInput extends GetProtocolsListRequest {
}
export interface GetProtocolsListCommandOutput extends GetProtocolsListResponse, __MetadataBearer {
}
/**
 * <p>Returns information about the specified AWS Firewall Manager protocols list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetProtocolsListCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetProtocolsListCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new GetProtocolsListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProtocolsListCommandInput} for command's `input` shape.
 * @see {@link GetProtocolsListCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetProtocolsListCommand extends $Command<GetProtocolsListCommandInput, GetProtocolsListCommandOutput, FMSClientResolvedConfig> {
    readonly input: GetProtocolsListCommandInput;
    constructor(input: GetProtocolsListCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetProtocolsListCommandInput, GetProtocolsListCommandOutput>;
    private serialize;
    private deserialize;
}
