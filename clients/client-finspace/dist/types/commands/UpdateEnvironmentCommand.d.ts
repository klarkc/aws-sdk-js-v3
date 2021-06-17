import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { UpdateEnvironmentRequest, UpdateEnvironmentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateEnvironmentCommandInput extends UpdateEnvironmentRequest {
}
export interface UpdateEnvironmentCommandOutput extends UpdateEnvironmentResponse, __MetadataBearer {
}
/**
 * <p>Update your FinSpace environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, UpdateEnvironmentCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, UpdateEnvironmentCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const command = new UpdateEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateEnvironmentCommand extends $Command<UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput, FinspaceClientResolvedConfig> {
    readonly input: UpdateEnvironmentCommandInput;
    constructor(input: UpdateEnvironmentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FinspaceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput>;
    private serialize;
    private deserialize;
}
