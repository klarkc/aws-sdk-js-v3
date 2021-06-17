import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetFileInput, GetFileOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetFileCommandInput extends GetFileInput {
}
export interface GetFileCommandOutput extends GetFileOutput, __MetadataBearer {
}
/**
 * <p>Returns the base-64 encoded contents of a specified file and its metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetFileCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetFileCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetFileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFileCommandInput} for command's `input` shape.
 * @see {@link GetFileCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetFileCommand extends $Command<GetFileCommandInput, GetFileCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetFileCommandInput;
    constructor(input: GetFileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFileCommandInput, GetFileCommandOutput>;
    private serialize;
    private deserialize;
}
