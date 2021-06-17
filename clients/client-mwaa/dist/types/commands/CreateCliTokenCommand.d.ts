import { MWAAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MWAAClient";
import { CreateCliTokenRequest, CreateCliTokenResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCliTokenCommandInput extends CreateCliTokenRequest {
}
export interface CreateCliTokenCommandOutput extends CreateCliTokenResponse, __MetadataBearer {
}
/**
 * <p>Create a CLI token to use Airflow CLI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, CreateCliTokenCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, CreateCliTokenCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * const client = new MWAAClient(config);
 * const command = new CreateCliTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCliTokenCommandInput} for command's `input` shape.
 * @see {@link CreateCliTokenCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCliTokenCommand extends $Command<CreateCliTokenCommandInput, CreateCliTokenCommandOutput, MWAAClientResolvedConfig> {
    readonly input: CreateCliTokenCommandInput;
    constructor(input: CreateCliTokenCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MWAAClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCliTokenCommandInput, CreateCliTokenCommandOutput>;
    private serialize;
    private deserialize;
}
