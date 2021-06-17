import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListDeviceDefinitionVersionsRequest, ListDeviceDefinitionVersionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDeviceDefinitionVersionsCommandInput extends ListDeviceDefinitionVersionsRequest {
}
export interface ListDeviceDefinitionVersionsCommandOutput extends ListDeviceDefinitionVersionsResponse, __MetadataBearer {
}
/**
 * Lists the versions of a device definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListDeviceDefinitionVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListDeviceDefinitionVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListDeviceDefinitionVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeviceDefinitionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListDeviceDefinitionVersionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDeviceDefinitionVersionsCommand extends $Command<ListDeviceDefinitionVersionsCommandInput, ListDeviceDefinitionVersionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListDeviceDefinitionVersionsCommandInput;
    constructor(input: ListDeviceDefinitionVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeviceDefinitionVersionsCommandInput, ListDeviceDefinitionVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
