import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { DescribeRepositoryRequest, DescribeRepositoryResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeRepositoryCommandInput extends DescribeRepositoryRequest {
}
export interface DescribeRepositoryCommandOutput extends DescribeRepositoryResult, __MetadataBearer {
}
/**
 * <p>
 *          Returns a <code>RepositoryDescription</code> object that contains detailed information
 *         about the requested repository.
 *        </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DescribeRepositoryCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DescribeRepositoryCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new DescribeRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRepositoryCommandInput} for command's `input` shape.
 * @see {@link DescribeRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeRepositoryCommand extends $Command<DescribeRepositoryCommandInput, DescribeRepositoryCommandOutput, CodeartifactClientResolvedConfig> {
    readonly input: DescribeRepositoryCommandInput;
    constructor(input: DescribeRepositoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeartifactClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRepositoryCommandInput, DescribeRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
