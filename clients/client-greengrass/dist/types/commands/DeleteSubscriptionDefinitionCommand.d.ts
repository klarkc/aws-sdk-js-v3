import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { DeleteSubscriptionDefinitionRequest, DeleteSubscriptionDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSubscriptionDefinitionCommandInput extends DeleteSubscriptionDefinitionRequest {
}
export interface DeleteSubscriptionDefinitionCommandOutput extends DeleteSubscriptionDefinitionResponse, __MetadataBearer {
}
/**
 * Deletes a subscription definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DeleteSubscriptionDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DeleteSubscriptionDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new DeleteSubscriptionDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSubscriptionDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteSubscriptionDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSubscriptionDefinitionCommand extends $Command<DeleteSubscriptionDefinitionCommandInput, DeleteSubscriptionDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: DeleteSubscriptionDefinitionCommandInput;
    constructor(input: DeleteSubscriptionDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSubscriptionDefinitionCommandInput, DeleteSubscriptionDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
