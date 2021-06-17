import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { AssociateMacSecKeyRequest, AssociateMacSecKeyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateMacSecKeyCommandInput extends AssociateMacSecKeyRequest {
}
export interface AssociateMacSecKeyCommandOutput extends AssociateMacSecKeyResponse, __MetadataBearer {
}
/**
 * <p>Associates a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with an  AWS Direct Connect dedicated connection.</p>
 *          <p>You must supply either the <code>secretARN,</code> or the CKN/CAK (<code>ckn</code> and <code>cak</code>) pair in the request.</p>
 *          <p>For information about MAC Security (MACsec) key considerations, see  <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-key-consideration">MACsec pre-shared CKN/CAK key considerations </a> in the <i>AWS Direct Connect User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AssociateMacSecKeyCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AssociateMacSecKeyCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AssociateMacSecKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateMacSecKeyCommandInput} for command's `input` shape.
 * @see {@link AssociateMacSecKeyCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateMacSecKeyCommand extends $Command<AssociateMacSecKeyCommandInput, AssociateMacSecKeyCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: AssociateMacSecKeyCommandInput;
    constructor(input: AssociateMacSecKeyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateMacSecKeyCommandInput, AssociateMacSecKeyCommandOutput>;
    private serialize;
    private deserialize;
}
