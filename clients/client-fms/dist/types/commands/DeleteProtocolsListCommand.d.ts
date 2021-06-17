import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { DeleteProtocolsListRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteProtocolsListCommandInput extends DeleteProtocolsListRequest {
}
export interface DeleteProtocolsListCommandOutput extends __MetadataBearer {
}
/**
 * <p>Permanently deletes an AWS Firewall Manager protocols list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, DeleteProtocolsListCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, DeleteProtocolsListCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new DeleteProtocolsListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProtocolsListCommandInput} for command's `input` shape.
 * @see {@link DeleteProtocolsListCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteProtocolsListCommand extends $Command<DeleteProtocolsListCommandInput, DeleteProtocolsListCommandOutput, FMSClientResolvedConfig> {
    readonly input: DeleteProtocolsListCommandInput;
    constructor(input: DeleteProtocolsListCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProtocolsListCommandInput, DeleteProtocolsListCommandOutput>;
    private serialize;
    private deserialize;
}
