import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { CreateComputerRequest, CreateComputerResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateComputerCommandInput extends CreateComputerRequest {
}
export interface CreateComputerCommandOutput extends CreateComputerResult, __MetadataBearer {
}
/**
 * <p>Creates an Active Directory computer object in the specified directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateComputerCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateComputerCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new CreateComputerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateComputerCommandInput} for command's `input` shape.
 * @see {@link CreateComputerCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateComputerCommand extends $Command<CreateComputerCommandInput, CreateComputerCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: CreateComputerCommandInput;
    constructor(input: CreateComputerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateComputerCommandInput, CreateComputerCommandOutput>;
    private serialize;
    private deserialize;
}
