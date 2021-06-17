import { MWAAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MWAAClient";
import { CreateWebLoginTokenRequest, CreateWebLoginTokenResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateWebLoginTokenCommandInput extends CreateWebLoginTokenRequest {
}
export interface CreateWebLoginTokenCommandOutput extends CreateWebLoginTokenResponse, __MetadataBearer {
}
/**
 * <p>Create a JWT token to be used to login to Airflow Web UI with claims based Authentication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, CreateWebLoginTokenCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, CreateWebLoginTokenCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * const client = new MWAAClient(config);
 * const command = new CreateWebLoginTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWebLoginTokenCommandInput} for command's `input` shape.
 * @see {@link CreateWebLoginTokenCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateWebLoginTokenCommand extends $Command<CreateWebLoginTokenCommandInput, CreateWebLoginTokenCommandOutput, MWAAClientResolvedConfig> {
    readonly input: CreateWebLoginTokenCommandInput;
    constructor(input: CreateWebLoginTokenCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MWAAClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateWebLoginTokenCommandInput, CreateWebLoginTokenCommandOutput>;
    private serialize;
    private deserialize;
}
