import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { AssociateExternalConnectionRequest, AssociateExternalConnectionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateExternalConnectionCommandInput extends AssociateExternalConnectionRequest {
}
export interface AssociateExternalConnectionCommandOutput extends AssociateExternalConnectionResult, __MetadataBearer {
}
/**
 * <p>Adds an existing external connection to a repository. One external connection is allowed
 *       per repository.</p>
 *          <note>
 *             <p>A repository can have one or more upstream repositories, or an external connection.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, AssociateExternalConnectionCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, AssociateExternalConnectionCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new AssociateExternalConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateExternalConnectionCommandInput} for command's `input` shape.
 * @see {@link AssociateExternalConnectionCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateExternalConnectionCommand extends $Command<AssociateExternalConnectionCommandInput, AssociateExternalConnectionCommandOutput, CodeartifactClientResolvedConfig> {
    readonly input: AssociateExternalConnectionCommandInput;
    constructor(input: AssociateExternalConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeartifactClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateExternalConnectionCommandInput, AssociateExternalConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
