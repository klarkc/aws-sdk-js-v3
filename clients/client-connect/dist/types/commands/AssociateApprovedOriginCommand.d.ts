import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { AssociateApprovedOriginRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateApprovedOriginCommandInput extends AssociateApprovedOriginRequest {
}
export interface AssociateApprovedOriginCommandOutput extends __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Associates an approved origin to an Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateApprovedOriginCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateApprovedOriginCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new AssociateApprovedOriginCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateApprovedOriginCommandInput} for command's `input` shape.
 * @see {@link AssociateApprovedOriginCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateApprovedOriginCommand extends $Command<AssociateApprovedOriginCommandInput, AssociateApprovedOriginCommandOutput, ConnectClientResolvedConfig> {
    readonly input: AssociateApprovedOriginCommandInput;
    constructor(input: AssociateApprovedOriginCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateApprovedOriginCommandInput, AssociateApprovedOriginCommandOutput>;
    private serialize;
    private deserialize;
}
