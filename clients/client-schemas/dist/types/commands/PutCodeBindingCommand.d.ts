import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { PutCodeBindingRequest, PutCodeBindingResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutCodeBindingCommandInput extends PutCodeBindingRequest {
}
export interface PutCodeBindingCommandOutput extends PutCodeBindingResponse, __MetadataBearer {
}
/**
 * <p>Put code binding URI</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, PutCodeBindingCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, PutCodeBindingCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new PutCodeBindingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutCodeBindingCommandInput} for command's `input` shape.
 * @see {@link PutCodeBindingCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutCodeBindingCommand extends $Command<PutCodeBindingCommandInput, PutCodeBindingCommandOutput, SchemasClientResolvedConfig> {
    readonly input: PutCodeBindingCommandInput;
    constructor(input: PutCodeBindingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SchemasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutCodeBindingCommandInput, PutCodeBindingCommandOutput>;
    private serialize;
    private deserialize;
}
