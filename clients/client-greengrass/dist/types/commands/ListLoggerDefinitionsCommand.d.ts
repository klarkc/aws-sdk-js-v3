import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListLoggerDefinitionsRequest, ListLoggerDefinitionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLoggerDefinitionsCommandInput extends ListLoggerDefinitionsRequest {
}
export interface ListLoggerDefinitionsCommandOutput extends ListLoggerDefinitionsResponse, __MetadataBearer {
}
/**
 * Retrieves a list of logger definitions.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListLoggerDefinitionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListLoggerDefinitionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListLoggerDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLoggerDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListLoggerDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListLoggerDefinitionsCommand extends $Command<ListLoggerDefinitionsCommandInput, ListLoggerDefinitionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListLoggerDefinitionsCommandInput;
    constructor(input: ListLoggerDefinitionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLoggerDefinitionsCommandInput, ListLoggerDefinitionsCommandOutput>;
    private serialize;
    private deserialize;
}
