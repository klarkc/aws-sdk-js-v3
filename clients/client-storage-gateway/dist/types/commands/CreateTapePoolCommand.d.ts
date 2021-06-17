import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CreateTapePoolInput, CreateTapePoolOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTapePoolCommandInput extends CreateTapePoolInput {
}
export interface CreateTapePoolCommandOutput extends CreateTapePoolOutput, __MetadataBearer {
}
/**
 * <p>Creates a new custom tape pool. You can use custom tape pool to enable tape retention
 *          lock on tapes that are archived in the custom pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateTapePoolCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateTapePoolCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new CreateTapePoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTapePoolCommandInput} for command's `input` shape.
 * @see {@link CreateTapePoolCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTapePoolCommand extends $Command<CreateTapePoolCommandInput, CreateTapePoolCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: CreateTapePoolCommandInput;
    constructor(input: CreateTapePoolCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTapePoolCommandInput, CreateTapePoolCommandOutput>;
    private serialize;
    private deserialize;
}
