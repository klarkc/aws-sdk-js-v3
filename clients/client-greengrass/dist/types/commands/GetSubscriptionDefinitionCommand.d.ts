import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetSubscriptionDefinitionRequest, GetSubscriptionDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSubscriptionDefinitionCommandInput extends GetSubscriptionDefinitionRequest {
}
export interface GetSubscriptionDefinitionCommandOutput extends GetSubscriptionDefinitionResponse, __MetadataBearer {
}
/**
 * Retrieves information about a subscription definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetSubscriptionDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetSubscriptionDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetSubscriptionDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSubscriptionDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetSubscriptionDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSubscriptionDefinitionCommand extends $Command<GetSubscriptionDefinitionCommandInput, GetSubscriptionDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetSubscriptionDefinitionCommandInput;
    constructor(input: GetSubscriptionDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSubscriptionDefinitionCommandInput, GetSubscriptionDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
