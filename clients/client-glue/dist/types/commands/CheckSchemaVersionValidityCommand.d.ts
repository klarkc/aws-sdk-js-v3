import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CheckSchemaVersionValidityInput, CheckSchemaVersionValidityResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CheckSchemaVersionValidityCommandInput extends CheckSchemaVersionValidityInput {
}
export interface CheckSchemaVersionValidityCommandOutput extends CheckSchemaVersionValidityResponse, __MetadataBearer {
}
/**
 * <p>Validates the supplied schema. This call has no side effects, it simply validates using the supplied schema using <code>DataFormat</code> as the format. Since it does not take a schema set name, no compatibility checks are performed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CheckSchemaVersionValidityCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CheckSchemaVersionValidityCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CheckSchemaVersionValidityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckSchemaVersionValidityCommandInput} for command's `input` shape.
 * @see {@link CheckSchemaVersionValidityCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CheckSchemaVersionValidityCommand extends $Command<CheckSchemaVersionValidityCommandInput, CheckSchemaVersionValidityCommandOutput, GlueClientResolvedConfig> {
    readonly input: CheckSchemaVersionValidityCommandInput;
    constructor(input: CheckSchemaVersionValidityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CheckSchemaVersionValidityCommandInput, CheckSchemaVersionValidityCommandOutput>;
    private serialize;
    private deserialize;
}
