import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateSchemaInput, UpdateSchemaResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateSchemaCommandInput extends UpdateSchemaInput {
}
export interface UpdateSchemaCommandOutput extends UpdateSchemaResponse, __MetadataBearer {
}
/**
 * <p>Updates the description, compatibility setting, or version checkpoint for a schema set.</p>
 * 	        <p>For updating the compatibility setting, the call will not validate compatibility for the entire set of schema versions with the new compatibility setting. If the value for <code>Compatibility</code> is provided, the <code>VersionNumber</code> (a checkpoint) is also required. The API will validate the checkpoint version number for consistency.</p>
 *          <p>If the value for the <code>VersionNumber</code> (checkpoint) is provided, <code>Compatibility</code> is optional and this can be used to set/reset a checkpoint for the schema.</p>
 * 	        <p>This update will happen only if the schema is in the AVAILABLE state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateSchemaCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateSchemaCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSchemaCommandInput} for command's `input` shape.
 * @see {@link UpdateSchemaCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateSchemaCommand extends $Command<UpdateSchemaCommandInput, UpdateSchemaCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdateSchemaCommandInput;
    constructor(input: UpdateSchemaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSchemaCommandInput, UpdateSchemaCommandOutput>;
    private serialize;
    private deserialize;
}
