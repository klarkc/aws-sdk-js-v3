import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetSubscriptionDefinitionVersionRequest, GetSubscriptionDefinitionVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSubscriptionDefinitionVersionCommandInput extends GetSubscriptionDefinitionVersionRequest {
}
export interface GetSubscriptionDefinitionVersionCommandOutput extends GetSubscriptionDefinitionVersionResponse, __MetadataBearer {
}
/**
 * Retrieves information about a subscription definition version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetSubscriptionDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetSubscriptionDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetSubscriptionDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSubscriptionDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link GetSubscriptionDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSubscriptionDefinitionVersionCommand extends $Command<GetSubscriptionDefinitionVersionCommandInput, GetSubscriptionDefinitionVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetSubscriptionDefinitionVersionCommandInput;
    constructor(input: GetSubscriptionDefinitionVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSubscriptionDefinitionVersionCommandInput, GetSubscriptionDefinitionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
