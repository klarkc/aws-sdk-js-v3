import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { DeleteProvisionedConcurrencyConfigRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteProvisionedConcurrencyConfigCommandInput extends DeleteProvisionedConcurrencyConfigRequest {
}
export interface DeleteProvisionedConcurrencyConfigCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the provisioned concurrency configuration for a function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteProvisionedConcurrencyConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteProvisionedConcurrencyConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new DeleteProvisionedConcurrencyConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProvisionedConcurrencyConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteProvisionedConcurrencyConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteProvisionedConcurrencyConfigCommand extends $Command<DeleteProvisionedConcurrencyConfigCommandInput, DeleteProvisionedConcurrencyConfigCommandOutput, LambdaClientResolvedConfig> {
    readonly input: DeleteProvisionedConcurrencyConfigCommandInput;
    constructor(input: DeleteProvisionedConcurrencyConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProvisionedConcurrencyConfigCommandInput, DeleteProvisionedConcurrencyConfigCommandOutput>;
    private serialize;
    private deserialize;
}
