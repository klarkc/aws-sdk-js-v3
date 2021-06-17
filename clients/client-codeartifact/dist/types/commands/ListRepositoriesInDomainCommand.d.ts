import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { ListRepositoriesInDomainRequest, ListRepositoriesInDomainResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRepositoriesInDomainCommandInput extends ListRepositoriesInDomainRequest {
}
export interface ListRepositoriesInDomainCommandOutput extends ListRepositoriesInDomainResult, __MetadataBearer {
}
/**
 * <p>
 *        Returns a list of
 *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html">RepositorySummary</a>
 *        objects. Each <code>RepositorySummary</code> contains information about a repository in the specified domain and that matches the input
 *        parameters.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListRepositoriesInDomainCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListRepositoriesInDomainCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new ListRepositoriesInDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRepositoriesInDomainCommandInput} for command's `input` shape.
 * @see {@link ListRepositoriesInDomainCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRepositoriesInDomainCommand extends $Command<ListRepositoriesInDomainCommandInput, ListRepositoriesInDomainCommandOutput, CodeartifactClientResolvedConfig> {
    readonly input: ListRepositoriesInDomainCommandInput;
    constructor(input: ListRepositoriesInDomainCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeartifactClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRepositoriesInDomainCommandInput, ListRepositoriesInDomainCommandOutput>;
    private serialize;
    private deserialize;
}
