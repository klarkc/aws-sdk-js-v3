import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { DeleteDomainRequest, DeleteDomainResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDomainCommandInput extends DeleteDomainRequest {
}
export interface DeleteDomainCommandOutput extends DeleteDomainResult, __MetadataBearer {
}
/**
 * <p>
 *          Deletes a domain. You cannot delete a domain that contains repositories. If you want to delete a domain
 *          with repositories, first delete its repositories.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DeleteDomainCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DeleteDomainCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new DeleteDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDomainCommandInput} for command's `input` shape.
 * @see {@link DeleteDomainCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDomainCommand extends $Command<DeleteDomainCommandInput, DeleteDomainCommandOutput, CodeartifactClientResolvedConfig> {
    readonly input: DeleteDomainCommandInput;
    constructor(input: DeleteDomainCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeartifactClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDomainCommandInput, DeleteDomainCommandOutput>;
    private serialize;
    private deserialize;
}
