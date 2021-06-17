import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { UpdateResourceDefinitionRequest, UpdateResourceDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateResourceDefinitionCommandInput extends UpdateResourceDefinitionRequest {
}
export interface UpdateResourceDefinitionCommandOutput extends UpdateResourceDefinitionResponse, __MetadataBearer {
}
/**
 * Updates a resource definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateResourceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateResourceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new UpdateResourceDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResourceDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateResourceDefinitionCommand extends $Command<UpdateResourceDefinitionCommandInput, UpdateResourceDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: UpdateResourceDefinitionCommandInput;
    constructor(input: UpdateResourceDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateResourceDefinitionCommandInput, UpdateResourceDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
