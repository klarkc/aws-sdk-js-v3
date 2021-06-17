import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { CreateEnvironmentRequest, CreateEnvironmentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateEnvironmentCommandInput extends CreateEnvironmentRequest {
}
export interface CreateEnvironmentCommandOutput extends CreateEnvironmentResponse, __MetadataBearer {
}
/**
 * <p>Create a new FinSpace environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, CreateEnvironmentCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, CreateEnvironmentCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const command = new CreateEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateEnvironmentCommand extends $Command<CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput, FinspaceClientResolvedConfig> {
    readonly input: CreateEnvironmentCommandInput;
    constructor(input: CreateEnvironmentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FinspaceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput>;
    private serialize;
    private deserialize;
}
