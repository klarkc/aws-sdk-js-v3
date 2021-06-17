import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { DisassociateExternalConnectionRequest, DisassociateExternalConnectionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateExternalConnectionCommandInput extends DisassociateExternalConnectionRequest {
}
export interface DisassociateExternalConnectionCommandOutput extends DisassociateExternalConnectionResult, __MetadataBearer {
}
/**
 * <p>
 *       Removes an existing external connection from a repository.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DisassociateExternalConnectionCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DisassociateExternalConnectionCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new DisassociateExternalConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateExternalConnectionCommandInput} for command's `input` shape.
 * @see {@link DisassociateExternalConnectionCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateExternalConnectionCommand extends $Command<DisassociateExternalConnectionCommandInput, DisassociateExternalConnectionCommandOutput, CodeartifactClientResolvedConfig> {
    readonly input: DisassociateExternalConnectionCommandInput;
    constructor(input: DisassociateExternalConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeartifactClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateExternalConnectionCommandInput, DisassociateExternalConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
