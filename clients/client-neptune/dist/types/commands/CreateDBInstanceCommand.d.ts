import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { CreateDBInstanceMessage, CreateDBInstanceResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDBInstanceCommandInput extends CreateDBInstanceMessage {
}
export interface CreateDBInstanceCommandOutput extends CreateDBInstanceResult, __MetadataBearer {
}
/**
 * <p>Creates a new DB instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CreateDBInstanceCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CreateDBInstanceCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new CreateDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDBInstanceCommand extends $Command<CreateDBInstanceCommandInput, CreateDBInstanceCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: CreateDBInstanceCommandInput;
    constructor(input: CreateDBInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDBInstanceCommandInput, CreateDBInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
