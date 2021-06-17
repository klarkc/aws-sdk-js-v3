import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetLoggerDefinitionRequest, GetLoggerDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLoggerDefinitionCommandInput extends GetLoggerDefinitionRequest {
}
export interface GetLoggerDefinitionCommandOutput extends GetLoggerDefinitionResponse, __MetadataBearer {
}
/**
 * Retrieves information about a logger definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetLoggerDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetLoggerDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetLoggerDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLoggerDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetLoggerDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLoggerDefinitionCommand extends $Command<GetLoggerDefinitionCommandInput, GetLoggerDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetLoggerDefinitionCommandInput;
    constructor(input: GetLoggerDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLoggerDefinitionCommandInput, GetLoggerDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
