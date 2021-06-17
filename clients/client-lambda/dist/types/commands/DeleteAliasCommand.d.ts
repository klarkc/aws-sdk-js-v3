import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { DeleteAliasRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAliasCommandInput extends DeleteAliasRequest {
}
export interface DeleteAliasCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteAliasCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteAliasCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new DeleteAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteAliasCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAliasCommand extends $Command<DeleteAliasCommandInput, DeleteAliasCommandOutput, LambdaClientResolvedConfig> {
    readonly input: DeleteAliasCommandInput;
    constructor(input: DeleteAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAliasCommandInput, DeleteAliasCommandOutput>;
    private serialize;
    private deserialize;
}
