import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListSourceCredentialsInput, ListSourceCredentialsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSourceCredentialsCommandInput extends ListSourceCredentialsInput {
}
export interface ListSourceCredentialsCommandOutput extends ListSourceCredentialsOutput, __MetadataBearer {
}
/**
 * <p> Returns a list of <code>SourceCredentialsInfo</code> objects. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListSourceCredentialsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListSourceCredentialsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ListSourceCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSourceCredentialsCommandInput} for command's `input` shape.
 * @see {@link ListSourceCredentialsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSourceCredentialsCommand extends $Command<ListSourceCredentialsCommandInput, ListSourceCredentialsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: ListSourceCredentialsCommandInput;
    constructor(input: ListSourceCredentialsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSourceCredentialsCommandInput, ListSourceCredentialsCommandOutput>;
    private serialize;
    private deserialize;
}
