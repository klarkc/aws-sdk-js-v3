import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetLoggerDefinitionVersionRequest, GetLoggerDefinitionVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLoggerDefinitionVersionCommandInput extends GetLoggerDefinitionVersionRequest {
}
export interface GetLoggerDefinitionVersionCommandOutput extends GetLoggerDefinitionVersionResponse, __MetadataBearer {
}
/**
 * Retrieves information about a logger definition version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetLoggerDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetLoggerDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetLoggerDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLoggerDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link GetLoggerDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLoggerDefinitionVersionCommand extends $Command<GetLoggerDefinitionVersionCommandInput, GetLoggerDefinitionVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetLoggerDefinitionVersionCommandInput;
    constructor(input: GetLoggerDefinitionVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLoggerDefinitionVersionCommandInput, GetLoggerDefinitionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
