import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetBlobInput, GetBlobOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetBlobCommandInput extends GetBlobInput {
}
export interface GetBlobCommandOutput extends GetBlobOutput, __MetadataBearer {
}
/**
 * <p>Returns the base-64 encoded content of an individual blob in a repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetBlobCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetBlobCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetBlobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBlobCommandInput} for command's `input` shape.
 * @see {@link GetBlobCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBlobCommand extends $Command<GetBlobCommandInput, GetBlobCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetBlobCommandInput;
    constructor(input: GetBlobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBlobCommandInput, GetBlobCommandOutput>;
    private serialize;
    private deserialize;
}
