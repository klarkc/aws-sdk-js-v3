import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { ListRepositoriesRequest, ListRepositoriesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRepositoriesCommandInput extends ListRepositoriesRequest {
}
export interface ListRepositoriesCommandOutput extends ListRepositoriesResult, __MetadataBearer {
}
/**
 * <p>
 *        Returns a list of
 *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html">RepositorySummary</a>
 *        objects. Each <code>RepositorySummary</code> contains information about a repository in the specified AWS account and that matches the input
 *        parameters.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListRepositoriesCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListRepositoriesCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new ListRepositoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRepositoriesCommandInput} for command's `input` shape.
 * @see {@link ListRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRepositoriesCommand extends $Command<ListRepositoriesCommandInput, ListRepositoriesCommandOutput, CodeartifactClientResolvedConfig> {
    readonly input: ListRepositoriesCommandInput;
    constructor(input: ListRepositoriesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeartifactClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRepositoriesCommandInput, ListRepositoriesCommandOutput>;
    private serialize;
    private deserialize;
}
