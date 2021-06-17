import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { UpdateLoggerDefinitionRequest, UpdateLoggerDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateLoggerDefinitionCommandInput extends UpdateLoggerDefinitionRequest {
}
export interface UpdateLoggerDefinitionCommandOutput extends UpdateLoggerDefinitionResponse, __MetadataBearer {
}
/**
 * Updates a logger definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateLoggerDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateLoggerDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new UpdateLoggerDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLoggerDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateLoggerDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateLoggerDefinitionCommand extends $Command<UpdateLoggerDefinitionCommandInput, UpdateLoggerDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: UpdateLoggerDefinitionCommandInput;
    constructor(input: UpdateLoggerDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLoggerDefinitionCommandInput, UpdateLoggerDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
