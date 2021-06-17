import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { DeleteCodeSigningConfigRequest, DeleteCodeSigningConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCodeSigningConfigCommandInput extends DeleteCodeSigningConfigRequest {
}
export interface DeleteCodeSigningConfigCommandOutput extends DeleteCodeSigningConfigResponse, __MetadataBearer {
}
/**
 * <p>Deletes the code signing configuration. You can delete the code signing configuration only if no function is
 *       using it. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new DeleteCodeSigningConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCodeSigningConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteCodeSigningConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCodeSigningConfigCommand extends $Command<DeleteCodeSigningConfigCommandInput, DeleteCodeSigningConfigCommandOutput, LambdaClientResolvedConfig> {
    readonly input: DeleteCodeSigningConfigCommandInput;
    constructor(input: DeleteCodeSigningConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCodeSigningConfigCommandInput, DeleteCodeSigningConfigCommandOutput>;
    private serialize;
    private deserialize;
}
