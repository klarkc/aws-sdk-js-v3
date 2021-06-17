import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { UpdateCoreDefinitionRequest, UpdateCoreDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateCoreDefinitionCommandInput extends UpdateCoreDefinitionRequest {
}
export interface UpdateCoreDefinitionCommandOutput extends UpdateCoreDefinitionResponse, __MetadataBearer {
}
/**
 * Updates a core definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateCoreDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateCoreDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new UpdateCoreDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCoreDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateCoreDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateCoreDefinitionCommand extends $Command<UpdateCoreDefinitionCommandInput, UpdateCoreDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: UpdateCoreDefinitionCommandInput;
    constructor(input: UpdateCoreDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCoreDefinitionCommandInput, UpdateCoreDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
