import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { CreateUseCaseRequest, CreateUseCaseResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateUseCaseCommandInput extends CreateUseCaseRequest {
}
export interface CreateUseCaseCommandOutput extends CreateUseCaseResponse, __MetadataBearer {
}
/**
 * <p>Creates a use case for an AppIntegration association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateUseCaseCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateUseCaseCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new CreateUseCaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUseCaseCommandInput} for command's `input` shape.
 * @see {@link CreateUseCaseCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateUseCaseCommand extends $Command<CreateUseCaseCommandInput, CreateUseCaseCommandOutput, ConnectClientResolvedConfig> {
    readonly input: CreateUseCaseCommandInput;
    constructor(input: CreateUseCaseCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUseCaseCommandInput, CreateUseCaseCommandOutput>;
    private serialize;
    private deserialize;
}
