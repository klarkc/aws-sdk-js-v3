import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DisassociateApprovedOriginRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateApprovedOriginCommandInput extends DisassociateApprovedOriginRequest {
}
export interface DisassociateApprovedOriginCommandOutput extends __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Revokes access to integrated applications from Amazon Connect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateApprovedOriginCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateApprovedOriginCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DisassociateApprovedOriginCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateApprovedOriginCommandInput} for command's `input` shape.
 * @see {@link DisassociateApprovedOriginCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateApprovedOriginCommand extends $Command<DisassociateApprovedOriginCommandInput, DisassociateApprovedOriginCommandOutput, ConnectClientResolvedConfig> {
    readonly input: DisassociateApprovedOriginCommandInput;
    constructor(input: DisassociateApprovedOriginCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateApprovedOriginCommandInput, DisassociateApprovedOriginCommandOutput>;
    private serialize;
    private deserialize;
}
