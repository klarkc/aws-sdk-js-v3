import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ImportSourceCredentialsInput, ImportSourceCredentialsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ImportSourceCredentialsCommandInput extends ImportSourceCredentialsInput {
}
export interface ImportSourceCredentialsCommandOutput extends ImportSourceCredentialsOutput, __MetadataBearer {
}
/**
 * <p> Imports the source repository credentials for an AWS CodeBuild project that has its
 *             source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ImportSourceCredentialsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ImportSourceCredentialsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ImportSourceCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportSourceCredentialsCommandInput} for command's `input` shape.
 * @see {@link ImportSourceCredentialsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ImportSourceCredentialsCommand extends $Command<ImportSourceCredentialsCommandInput, ImportSourceCredentialsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: ImportSourceCredentialsCommandInput;
    constructor(input: ImportSourceCredentialsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportSourceCredentialsCommandInput, ImportSourceCredentialsCommandOutput>;
    private serialize;
    private deserialize;
}
