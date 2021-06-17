import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { CreateDomainRequest, CreateDomainResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDomainCommandInput extends CreateDomainRequest {
}
export interface CreateDomainCommandOutput extends CreateDomainResult, __MetadataBearer {
}
/**
 * <p>
 *       Creates a domain. CodeArtifact <i>domains</i> make it easier to manage multiple repositories across an
 *         organization. You can use a domain to apply permissions across many
 *         repositories owned by different AWS accounts. An asset is stored only once
 *         in a domain, even if it's in multiple repositories.
 *     </p>
 *
 *          <p>Although you can have multiple domains, we recommend a single production domain that contains all
 *         published artifacts so that your development teams can find and share packages. You can use a second
 *         pre-production domain to test changes to the production domain configuration.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, CreateDomainCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, CreateDomainCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new CreateDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDomainCommandInput} for command's `input` shape.
 * @see {@link CreateDomainCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDomainCommand extends $Command<CreateDomainCommandInput, CreateDomainCommandOutput, CodeartifactClientResolvedConfig> {
    readonly input: CreateDomainCommandInput;
    constructor(input: CreateDomainCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeartifactClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDomainCommandInput, CreateDomainCommandOutput>;
    private serialize;
    private deserialize;
}
