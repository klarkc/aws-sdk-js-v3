import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetCoreDefinitionVersionRequest, GetCoreDefinitionVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCoreDefinitionVersionCommandInput extends GetCoreDefinitionVersionRequest {
}
export interface GetCoreDefinitionVersionCommandOutput extends GetCoreDefinitionVersionResponse, __MetadataBearer {
}
/**
 * Retrieves information about a core definition version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetCoreDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetCoreDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetCoreDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCoreDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link GetCoreDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCoreDefinitionVersionCommand extends $Command<GetCoreDefinitionVersionCommandInput, GetCoreDefinitionVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetCoreDefinitionVersionCommandInput;
    constructor(input: GetCoreDefinitionVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCoreDefinitionVersionCommandInput, GetCoreDefinitionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
