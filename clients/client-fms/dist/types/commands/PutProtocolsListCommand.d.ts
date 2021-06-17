import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { PutProtocolsListRequest, PutProtocolsListResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutProtocolsListCommandInput extends PutProtocolsListRequest {
}
export interface PutProtocolsListCommandOutput extends PutProtocolsListResponse, __MetadataBearer {
}
/**
 * <p>Creates an AWS Firewall Manager protocols list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, PutProtocolsListCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, PutProtocolsListCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new PutProtocolsListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutProtocolsListCommandInput} for command's `input` shape.
 * @see {@link PutProtocolsListCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutProtocolsListCommand extends $Command<PutProtocolsListCommandInput, PutProtocolsListCommandOutput, FMSClientResolvedConfig> {
    readonly input: PutProtocolsListCommandInput;
    constructor(input: PutProtocolsListCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutProtocolsListCommandInput, PutProtocolsListCommandOutput>;
    private serialize;
    private deserialize;
}
