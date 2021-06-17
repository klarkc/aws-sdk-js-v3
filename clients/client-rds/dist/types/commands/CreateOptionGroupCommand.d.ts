import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateOptionGroupMessage, CreateOptionGroupResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateOptionGroupCommandInput extends CreateOptionGroupMessage {
}
export interface CreateOptionGroupCommandOutput extends CreateOptionGroupResult, __MetadataBearer {
}
/**
 * <p>Creates a new option group. You can create up to 20 option groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateOptionGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateOptionGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateOptionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOptionGroupCommandInput} for command's `input` shape.
 * @see {@link CreateOptionGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateOptionGroupCommand extends $Command<CreateOptionGroupCommandInput, CreateOptionGroupCommandOutput, RDSClientResolvedConfig> {
    readonly input: CreateOptionGroupCommandInput;
    constructor(input: CreateOptionGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateOptionGroupCommandInput, CreateOptionGroupCommandOutput>;
    private serialize;
    private deserialize;
}
