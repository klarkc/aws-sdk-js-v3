import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { DeleteSourceCredentialsInput, DeleteSourceCredentialsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSourceCredentialsCommandInput extends DeleteSourceCredentialsInput {
}
export interface DeleteSourceCredentialsCommandOutput extends DeleteSourceCredentialsOutput, __MetadataBearer {
}
/**
 * <p> Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DeleteSourceCredentialsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DeleteSourceCredentialsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new DeleteSourceCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSourceCredentialsCommandInput} for command's `input` shape.
 * @see {@link DeleteSourceCredentialsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSourceCredentialsCommand extends $Command<DeleteSourceCredentialsCommandInput, DeleteSourceCredentialsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: DeleteSourceCredentialsCommandInput;
    constructor(input: DeleteSourceCredentialsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSourceCredentialsCommandInput, DeleteSourceCredentialsCommandOutput>;
    private serialize;
    private deserialize;
}
