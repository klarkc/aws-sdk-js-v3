import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { GetCodeBindingSourceRequest, GetCodeBindingSourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCodeBindingSourceCommandInput extends GetCodeBindingSourceRequest {
}
export interface GetCodeBindingSourceCommandOutput extends GetCodeBindingSourceResponse, __MetadataBearer {
}
/**
 * <p>Get the code binding source URI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, GetCodeBindingSourceCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, GetCodeBindingSourceCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new GetCodeBindingSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCodeBindingSourceCommandInput} for command's `input` shape.
 * @see {@link GetCodeBindingSourceCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCodeBindingSourceCommand extends $Command<GetCodeBindingSourceCommandInput, GetCodeBindingSourceCommandOutput, SchemasClientResolvedConfig> {
    readonly input: GetCodeBindingSourceCommandInput;
    constructor(input: GetCodeBindingSourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SchemasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCodeBindingSourceCommandInput, GetCodeBindingSourceCommandOutput>;
    private serialize;
    private deserialize;
}
